import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/api/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/api.ts',
}

export default config
