import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/core.strimzi.io/v1beta2/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-core-strimzi-io-v1beta2.ts',
}

export default config
