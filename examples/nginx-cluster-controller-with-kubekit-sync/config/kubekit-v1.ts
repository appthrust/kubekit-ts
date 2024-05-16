import type { ConfigFile } from '@kubekit/client-gen'

const config: ConfigFile = {
  schemaFile: '../openapi/apis/kubekit.com/v1/swagger.json',
  apiFile: '@kubekit/client',
  outputFile: '../src/kubekit-v1.ts',
}

export default config
