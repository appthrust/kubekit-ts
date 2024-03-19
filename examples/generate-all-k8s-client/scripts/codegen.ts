import { $ } from 'https://deno.land/x/zx_deno/mod.mjs'
import * as path from 'https://deno.land/std/path/mod.ts'
import { patchFunctions } from './patchFunctions.ts'

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
  `import type { ConfigFile } from 'kubekit'

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

    let doc = JSON.parse(
      (await $`kubectl get --raw /openapi/v3/${sourcePath}`).toString()
    )

    for (const patchFunction of patchFunctions) {
      doc = patchFunction(doc)
    }

    await Deno.writeTextFile(swaggerFilePath, JSON.stringify(doc, undefined, 2))

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
    await $`npx kubekit ${k8sClientCodegenConfigFilePath}`
  })
)
