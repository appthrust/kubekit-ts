import type { ConfigFile } from '@kubekit/client-gen'

const config: ConfigFile = {
  schemaFile: '../openapi/api/v1/swagger.json',
  apiFile: '@kubekit/client',
  outputFile: '../src/core-v1.ts',
}

export default config
