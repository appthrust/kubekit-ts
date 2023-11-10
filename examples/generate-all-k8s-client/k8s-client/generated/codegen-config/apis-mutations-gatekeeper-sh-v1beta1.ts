import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/mutations.gatekeeper.sh/v1beta1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-mutations-gatekeeper-sh-v1beta1.ts',
}

export default config
