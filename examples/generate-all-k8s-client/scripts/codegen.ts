import { $ } from 'https://deno.land/x/zx_deno/mod.mjs'
import * as path from 'https://deno.land/std/path/mod.ts'
import { OpenAPIV3 } from "npm:openapi-types";

type Path = string
type Url = string

type SwaggerV3 = {
  paths: Record<
    Path,
    {
      serverRelativeURL: Url
    }
  >
}

const getTsFileName = (path: string) => {
  const replacedStr = path.replace(/[\/.]/g, '-')
  return `${
    replacedStr.startsWith('-') ? replacedStr.substring(1) : replacedStr
  }.ts`
}

const res = await $`kubectl get --raw /openapi/v3`
const source = JSON.parse(res.toString()) as SwaggerV3

const genK8sClientCodegenConfigSourceCode = (
  swaggerFilePath: string,
  apiFile: string,
  outputFilePath: string
) =>
  `import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile: '${swaggerFilePath}',
  apiFile: '${apiFile}',
  outputFile: '${outputFilePath}',
}

export default config
`
const cwd = Deno.cwd()

const k8sClientCodegenConfigDirectoryPath = path.join(
  cwd,
  '/k8s-client/generated/codegen-config'
)
const k8sClientDirectoryPath = path.join(cwd, 'k8s-client/generated/client')
await $`mkdir -p ${k8sClientCodegenConfigDirectoryPath}`
await $`mkdir -p ${k8sClientDirectoryPath}`

await Promise.all(
  Object.keys(source.paths).map(async (sourcePath) => {
    const swaggerFilePath = path.join(
      cwd,
      'tmp/api/openapi-spec/v3',
      sourcePath,
      'swagger.json'
    )
    const k8sClientCodegenConfigFilePath = path.join(
      k8sClientCodegenConfigDirectoryPath,
      getTsFileName(sourcePath)
    )
    const k8sClientFilePath = path.join(
      k8sClientDirectoryPath,
      getTsFileName(sourcePath)
    )
    await $`mkdir -p $(dirname ${swaggerFilePath})`
    const result = replaceK8sOpenapi(JSON.parse((await $`kubectl get --raw /openapi/v3/${sourcePath}`).toString()))
    await Deno.writeTextFile(swaggerFilePath, JSON.stringify(result.doc, undefined, 2))
    await Deno.writeTextFile(
      k8sClientCodegenConfigFilePath,
      genK8sClientCodegenConfigSourceCode(
        path.relative(k8sClientCodegenConfigDirectoryPath, swaggerFilePath),
        path.join(
          path.relative(
            k8sClientCodegenConfigDirectoryPath,
            path.join(cwd, 'k8s-client')
          ),
          'client.ts'
        ),
        path.relative(k8sClientCodegenConfigDirectoryPath, k8sClientFilePath)
      )
    )
    await $`npx kubernetes-typescript-client-codegen-openapi ${k8sClientCodegenConfigFilePath}`
  })
)

export function replaceK8sOpenapi(doc: OpenAPIV3.Document) {
  let modified = false
  for (const path in doc.paths) {
    const putContent = (doc.paths[path]?.put?.requestBody as OpenAPIV3.RequestBodyObject)?.content
    const putRequestBody = putContent?.['*/*'] || putContent?.['application/json'] || putContent?.['application/yaml']
    if (!putRequestBody) {
      continue
    }
    const applyPatchRequestBody = (doc.paths[path]?.patch?.requestBody as OpenAPIV3.RequestBodyObject)?.content['application/apply-patch+yaml']

    if (applyPatchRequestBody) {
      applyPatchRequestBody.schema = putRequestBody.schema
      modified = true
    }

    const strategicMergePatchRequestBody = (doc.paths[path]?.patch?.requestBody as OpenAPIV3.RequestBodyObject)?.content['application/strategic-merge-patch+json']
    if (strategicMergePatchRequestBody) {
      strategicMergePatchRequestBody.schema = putRequestBody.schema
      modified = true
    }
  }

  return {
    modified,
    doc,
  }
}
