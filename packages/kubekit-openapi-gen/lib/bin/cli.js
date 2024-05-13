#!/usr/bin/env node
'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            },
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const commander_1 = __importDefault(require('commander'))
const path = __importStar(require('path'))
const fs = __importStar(require('fs/promises'))
const enhance_1 = require('../utils/openapi/enhance')
const lodash_merge_1 = __importDefault(require('lodash.merge'))
const permissionsAggregator_ts_1 = require('../utils/k8s/permissionsAggregator.ts')
const client_1 = require('@kubekit/client')
const client_2 = require('../utils/k8s/client')
const removeUnusedSchema_1 = require('../utils/openapi/removeUnusedSchema')
const prettier_1 = require('../utils/openapi/prettier')
const assertNotNull_1 = require('../utils/assertNotNull')
let ts = false
try {
  if (require.resolve('esbuild') && require.resolve('esbuild-runner')) {
    require('esbuild-runner/register')
  }
  ts = true
} catch {}
// tslint:disable-next-line
const meta = require('../../package.json')
commander_1.default
  .version(meta.version)
  .usage('</path/to/config.js>')
  .parse(process.argv)
const configFilePath = commander_1.default.args[0]
if (
  commander_1.default.args.length === 0 ||
  !/\.(c?(jsx?|tsx?)|jsonc?)?$/.test(configFilePath)
) {
  commander_1.default.help()
} else {
  if (/\.tsx?$/.test(configFilePath) && !ts) {
    console.error(
      'Encountered a TypeScript configfile, but neither esbuild-runner nor ts-node are installed.'
    )
    process.exit(1)
  }
  run(path.resolve(process.cwd(), configFilePath))
}
async function run(configFilePath) {
  var _a
  process.chdir(path.dirname(configFilePath))
  const unparsedConfig = require(configFilePath)
  const config =
    (_a = unparsedConfig.default) !== null && _a !== void 0
      ? _a
      : unparsedConfig
  if (config.kind === 'Group' || config.kind === 'User') {
    console.error('Group and User are not yet supported. Please open an issue.')
    process.exit(1)
  }
  if (config.kind === 'ServiceAccount') {
    try {
      await (0, client_2.readCoreV1NamespacedServiceAccount)({
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
async function generateOpenApi(config) {
  const [
    {
      resourceRules,
      // TODO: Implement nonResourceRules as well
      nonResourceRules: _,
    },
    rootOpenApiText,
  ] = await Promise.all([
    (0, permissionsAggregator_ts_1.fetchAggregatedPermissions)(
      config.kind,
      config.name,
      config.namespace
    ),
    (0, client_1.apiClient)({ path: '/openapi/v3' }),
  ])
  if (process.env.DEBUG) {
    console.debug(
      '[DEBUG] resourceRules: ',
      JSON.stringify(resourceRules, null, 2)
    )
  }
  const source = JSON.parse(rootOpenApiText)
  const cwd = process.cwd()
  const sourcePaths = Object.keys(source.paths)
  const docs = []
  const addDoc = async (path, rule) => {
    const sourceDoc = await (0, client_1.apiClient)({
      path: `/openapi/v3/${path}`,
    })
    const paths = Object.keys(sourceDoc.paths)
    const resultDoc = {
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
      const namespacedPaths = [
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
      function isMatchedPath(fullPath) {
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
          var _a, _b, _c
          // "get" | "list" | "watch" | "listwatch" | "create" | "update" | "patch" | "delete" | "*"
          if (verbs[0] === '*') {
            resultDoc.paths[path] = sourceDoc.paths[path]
          } else {
            for (const verb of verbs) {
              const pathsObject = sourceDoc.paths[path]
              if (pathsObject) {
                for (const entry of Object.entries(pathsObject)) {
                  const [httpMethod, pathItemObject] = entry
                  if (
                    pathItemObject['x-kubernetes-action'] ===
                    (0,
                    permissionsAggregator_ts_1.mapResourceVerbToKubernetesAction)(
                      verb
                    )
                  ) {
                    if (!resultDoc.paths[path]) {
                      resultDoc.paths[path] = {}
                    }
                    const resultPathsObject = resultDoc.paths[path]
                    // The assertNotNull is used here to satisfy TypeScript's type checking,
                    // even though resultPathsObject is always assigned above.
                    ;(0, assertNotNull_1.assertNotNull)(resultPathsObject)
                    resultPathsObject[httpMethod] =
                      (_a = sourceDoc.paths[path]) === null || _a === void 0
                        ? void 0
                        : _a[httpMethod]
                    if (
                      (_b = sourceDoc.paths[path]) === null || _b === void 0
                        ? void 0
                        : _b.parameters
                    ) {
                      resultPathsObject.parameters =
                        (_c = sourceDoc.paths[path]) === null || _c === void 0
                          ? void 0
                          : _c.parameters
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
  const tasks = []
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
  let mergedSwaggerFile = (0, lodash_merge_1.default)({}, ...docs)
  for (const patchFunction of enhance_1.enhancementFunctions) {
    mergedSwaggerFile = patchFunction(mergedSwaggerFile)
  }
  const swaggerFilePath = path.join(config.outputFile || cwd, 'swagger.json')
  const swaggerContent = (0, removeUnusedSchema_1.cleanOpenAPISchema)(
    mergedSwaggerFile
  )
  swaggerContent.components = JSON.parse(
    await (0, prettier_1.prettify)(
      null,
      JSON.stringify(swaggerContent.components),
      true
    )
  )
  swaggerContent.paths = JSON.parse(
    await (0, prettier_1.prettify)(
      null,
      JSON.stringify(swaggerContent.paths),
      true
    )
  )
  try {
    fs.writeFile(
      path.resolve(process.cwd(), config.outputFile),
      await (0, prettier_1.prettify)(
        null,
        JSON.stringify(swaggerContent, null, 2),
        false
      )
    )
  } catch (e) {
    console.error(`Failed to write file: ${swaggerFilePath}`, e)
  }
}
//# sourceMappingURL=cli.js.map
