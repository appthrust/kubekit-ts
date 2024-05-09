import type { ConfigFile } from '@kubekit/codegen'

const config: ConfigFile = {
  schemaFile: '../openapi/api/v1/swagger.json',
  apiFile: '@kubekit/client',
  outputFile: '../src/k8s-client/v1.ts',
}

export default config
