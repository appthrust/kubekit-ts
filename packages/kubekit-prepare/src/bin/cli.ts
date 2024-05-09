#!/usr/bin/env node

import program from 'commander'
import * as path from 'path'
import * as fs from 'fs/promises'
import { patchFunctions } from '../patchOpenApi'
import merge from 'lodash.merge'
import { OpenAPIV3 } from 'openapi-types'
import {
  type ResourceRules,
  inspectRules,
  mapResourceVerbToKubernetesAction,
} from '../getRules'
import { HttpMethods, assertNotNull } from '../lib'
import { apiClient } from '@kubekit/client'
import { ConfigFile } from '../config'
import { readCoreV1NamespacedServiceAccount } from '../k8s-client/v1'
import { cleanOpenAPISchema } from '../cleanOpenAPISchema'

let ts = false
try {
  if (require.resolve('esbuild') && require.resolve('esbuild-runner')) {
    require('esbuild-runner/register')
  }
  ts = true
} catch {}

// tslint:disable-next-line
const meta = require('../../package.json')

program.version(meta.version).usage('</path/to/config.js>').parse(process.argv)

const configFilePath = program.args[0]

if (
  program.args.length === 0 ||
  !/\.(c?(jsx?|tsx?)|jsonc?)?$/.test(configFilePath)
) {
  program.help()
} else {
  if (/\.tsx?$/.test(configFilePath) && !ts) {
    console.error(
      'Encountered a TypeScript configfile, but neither esbuild-runner nor ts-node are installed.'
    )
    process.exit(1)
  }
  run(path.resolve(process.cwd(), configFilePath))
}
async function run(configFilePath: string) {
  process.chdir(path.dirname(configFilePath))

  const unparsedConfig = require(configFilePath)
  const config: ConfigFile = unparsedConfig.default ?? unparsedConfig
  if (config.kind === 'Group' || config.kind === 'User') {
    console.error('Group and User are not yet supported. Please open an issue.')
    process.exit(1)
  }
  if (config.kind === 'ServiceAccount') {
    try {
      await readCoreV1NamespacedServiceAccount({
        name: config.name,
        namespace: config.namespace,
      })
    } catch (err) {
      console.error(
        `[ERROR] ServiceAccount name: ${config.name} namespace: ${config.namespace} not found.`
      )
      process.exit(1)
    }
  }
  try {
    console.log(`Generating ${config.outputFile}`)
    await generateOpenApi(config)
    console.log(`Done`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

async function generateOpenApi(config: ConfigFile) {
  const [
    {
      resourceRules,
      // TODO: Implement nonResourceRules as well
      nonResourceRules: _,
    },
    rootOpenApiText,
  ] = await Promise.all([
    inspectRules(config.kind, config.name, config.namespace),
    apiClient<string>({ path: '/openapi/v3' }),
  ])

  const source: OpenAPIV3.Document<{}> = JSON.parse(rootOpenApiText)

  const cwd = process.cwd()

  const sourcePaths = Object.keys(source.paths)
  const docs: OpenAPIV3.Document<{}>[] = []

  const addDoc = async (path: string, rule: ResourceRules[string]) => {
    const sourceDoc = await apiClient<OpenAPIV3.Document<{}>>({
      path: `/openapi/v3/${path}`,
    })
    const paths = Object.keys(sourceDoc.paths)
    const resultDoc: OpenAPIV3.Document<{}> = {
      ...sourceDoc,
      paths: {},
    }

    for (let [maybeResourceName, { verbs, namespaces }] of Object.entries(
      rule
    )) {
      let [resourceName, subResourceName] = maybeResourceName.split('/')
      // "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}"
      // "/apis/networking.k8s.io/v1/ingresses"
      // "/apis/networking.k8s.io/v1/watch/ingresses"

      if (resourceName === '*') {
        resourceName = '.+'
      }
      const namespacedPaths: string[] = [
        ...(subResourceName
          ? [
              `^/${path}/namespaces/{namespace}/${resourceName}/{name}/${subResourceName}$`,
              `^/${path}/namespaces/{namespace}/${resourceName}/{name}/${subResourceName}/{.+}$`,
            ]
          : [
              // operation id: read | replace | delete | patch
              // verb: "get" | "list" | "create" | "update" | "patch" | "delete"
              `^/${path}/namespaces/{namespace}/${resourceName}/{name}$`,
              // operation id: list | create | deletecollection
              // verb: "deletecollection" | "proxy" | "watch"
              `^/${path}/namespaces/{namespace}/${resourceName}$`,
            ]),
        // /watch/はdeprecatedなので、無視します
      ]
      const clusterPaths = subResourceName
        ? [
            `^/${path}/${resourceName}$/{name}/${subResourceName}$`,
            `^/${path}/${resourceName}$/{name}/${subResourceName}/{.+}$`,
          ]
        : [`^/${path}/${resourceName}$`]

      function isMatchedPath(fullPath: string): boolean {
        if (namespaces[0] === '*') {
          return (
            clusterPaths.findIndex((path) =>
              new RegExp(path).test(fullPath)
            ) !== -1 ||
            namespacedPaths.findIndex((path) =>
              new RegExp(path).test(fullPath)
            ) !== -1
          )
        }

        return (
          namespacedPaths.findIndex((path) =>
            new RegExp(path).test(fullPath)
          ) !== -1
        )
      }
      paths
        .filter((path) => isMatchedPath(path))
        .forEach((path) => {
          // "get" | "list" | "watch" | "listwatch" | "create" | "update" | "patch" | "delete" | "*"
          if (verbs[0] === '*') {
            resultDoc.paths[path] = sourceDoc.paths[path]
          } else {
            for (const verb of verbs) {
              const pathsObject = sourceDoc.paths[path]
              if (pathsObject) {
                for (const entry of Object.entries(pathsObject)) {
                  const [httpMethod, pathItemObject] = entry as [
                    HttpMethods,
                    any
                  ]
                  if (
                    pathItemObject['x-kubernetes-action'] ===
                    mapResourceVerbToKubernetesAction(verb)
                  ) {
                    if (!resultDoc.paths[path]) {
                      resultDoc.paths[path] = {}
                    }
                    const resultPathsObject = resultDoc.paths[path]
                    assertNotNull(resultPathsObject)
                    resultPathsObject[httpMethod] =
                      sourceDoc.paths[path]?.[httpMethod]
                    if (sourceDoc.paths[path]?.parameters) {
                      resultPathsObject.parameters =
                        sourceDoc.paths[path]?.parameters
                    }
                  }
                }
              }
            }
          }
        })
    }
    docs.push(resultDoc)
  }

  const tasks: Promise<void>[] = []

  const coreV1Rules = resourceRules[''] || resourceRules['*']
  if (coreV1Rules) {
    if (!sourcePaths.find((path) => path === 'api/v1')) {
      throw Error('The coreV1 API was not found. This is an unexpected state.')
    }

    tasks.push(addDoc('api/v1', coreV1Rules))
    delete resourceRules['']
  }

  for (let [apiGroup, rule] of Object.entries(resourceRules)) {
    let matchPath = apiGroup
    if (apiGroup === '*') {
      matchPath = '.+'
    }
    const matchedApiGroups = sourcePaths.filter((path) =>
      new RegExp(`^apis/${matchPath}/`).test(path)
    )
    if (matchedApiGroups.length === 0) {
      throw Error(
        `The API group '${apiGroup}' is not installed on the k8s cluster. Have you forgotten to install the CRD?`
      )
    }
    matchedApiGroups.forEach((sourcePath) =>
      tasks.push(addDoc(sourcePath, rule))
    )
  }

  await Promise.all(tasks)

  let mergedSwaggerFile = merge({}, ...docs)

  for (const patchFunction of patchFunctions) {
    mergedSwaggerFile = patchFunction(mergedSwaggerFile)
  }

  const swaggerFilePath = path.join(config.outputFile || cwd, 'swagger.json')

  try {
    fs.writeFile(
      path.resolve(process.cwd(), config.outputFile),
      JSON.stringify(cleanOpenAPISchema(mergedSwaggerFile), undefined, 2)
    )
  } catch (e) {
    console.error(`Failed to write file: ${swaggerFilePath}`, e)
  }
}
