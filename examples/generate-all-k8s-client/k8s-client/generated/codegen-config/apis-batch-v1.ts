import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/batch/v1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-batch-v1.ts',
}

export default config
