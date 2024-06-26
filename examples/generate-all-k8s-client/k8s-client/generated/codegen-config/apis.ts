import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis.ts',
}

export default config
