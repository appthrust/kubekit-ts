import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/api/v1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/api-v1.ts',
}

export default config
