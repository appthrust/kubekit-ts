import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/autoscaling/v2/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-autoscaling-v2.ts',
}

export default config
