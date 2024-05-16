import type { ConfigFile } from '@kubekit/client-gen'

const config: ConfigFile = {
  schemaFile: '../openapi/apis/coordination.k8s.io/v1/swagger.json',
  apiFile: '@kubekit/client',
  outputFile: '../src/coordination-v1.ts',
}

export default config
