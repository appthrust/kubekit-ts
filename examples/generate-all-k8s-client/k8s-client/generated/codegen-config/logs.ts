import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/logs/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/logs.ts',
}

export default config
