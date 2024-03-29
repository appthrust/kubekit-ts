import type { ConfigFile } from '@kubekit/codegen'

const config: ConfigFile = {
  schemaFile: '../openapi/apis/storage.k8s.io/v1/swagger.json',
  apiFile: '@kubekit/client',
  outputFile: '../src/generated/k8s-client/apis-storage-k8s-io-v1.ts',
}

export default config
