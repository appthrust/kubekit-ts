import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/storage.k8s.io/v1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-storage-k8s-io-v1.ts',
}

export default config
