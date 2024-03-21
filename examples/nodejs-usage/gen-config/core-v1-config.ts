import type { ConfigFile } from '@kubekit/codegen'

const config: ConfigFile = {
  schemaFile: '../openapi/api/v1/swagger.json',
  apiFile: '@kubekit/client',
  outputFile: '../generated/k8s-client/api-v1.ts',
}

export default config
