#!/usr/bin/env node

import program from 'commander'
import * as path from 'path'
import * as fs from 'fs/promises'
import { enhancementFunctions } from '../utils/openapi/enhance'
import merge from 'lodash.merge'
import { OpenAPIV3 } from 'openapi-types'
import {
  type ResourceRules,
  fetchAggregatedPermissions,
  mapResourceVerbToKubernetesAction,
} from '../utils/k8s/permissionsAggregator.ts'
import { HttpMethods } from '../utils/types'
import { apiClient } from '@kubekit/client'
import { ConfigFile } from '../utils/types'
import { readCoreV1NamespacedServiceAccount } from '../utils/k8s/client'
import { cleanOpenAPISchema } from '../utils/openapi/removeUnusedSchema'
import { prettify } from '../utils/openapi/prettier'
import { assertNotNull } from '../utils/assertNotNull'

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
    fetchAggregatedPermissions(config.kind, config.name, config.namespace),
    apiClient<string>({ path: '/openapi/v3' }),
  ])

  if (process.env.DEBUG) {
    console.debug(
      '[DEBUG] resourceRules: ',
      JSON.stringify(resourceRules, null, 2)
    )
  }

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
              `^/${path}/namespaces/{.+}/${resourceName}/{.+}/${subResourceName}$`,
              `^/${path}/namespaces/{.+}/${resourceName}/{.+}/${subResourceName}/{.+}$`,
            ]
          : [
              // operation id: read | replace | delete | patch
              // verb: "get" | "list" | "create" | "update" | "patch" | "delete"
              `^/${path}/namespaces/{.+}/${resourceName}/{.+}$`,
              // operation id: list | create | deletecollection
              // verb: "deletecollection" | "proxy" | "watch"
              `^/${path}/namespaces/{.+}/${resourceName}$`,
            ]),
        // /watch/はdeprecatedなので、無視します
      ]
      const clusterPaths = subResourceName
        ? [
            `^/${path}/${resourceName}$/{.+}/${subResourceName}$`,
            `^/${path}/${resourceName}$/{.+}/${subResourceName}/{.+}$`,
          ]
        : [`^/${path}/${resourceName}/{.+}$`, `^/${path}/${resourceName}$`]

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

      if (process.env.DEBUG) {
        console.log('[DEBUG] paths:', JSON.stringify(paths, null, 2))
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

                    // The assertNotNull is used here to satisfy TypeScript's type checking,
                    // even though resultPathsObject is always assigned above.
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

  for (const patchFunction of enhancementFunctions) {
    mergedSwaggerFile = patchFunction(mergedSwaggerFile)
  }

  const swaggerFilePath = path.join(config.outputFile || cwd, 'swagger.json')

  const swaggerContent = cleanOpenAPISchema(mergedSwaggerFile)

  swaggerContent.components = JSON.parse(
    await prettify(null, JSON.stringify(swaggerContent.components), true)
  )
  swaggerContent.paths = JSON.parse(
    await prettify(null, JSON.stringify(swaggerContent.paths), true)
  )

  try {
    fs.writeFile(
      path.resolve(process.cwd(), config.outputFile),
      await prettify(null, JSON.stringify(swaggerContent, null, 2), false)
    )
  } catch (e) {
    console.error(`Failed to write file: ${swaggerFilePath}`, e)
  }
}
