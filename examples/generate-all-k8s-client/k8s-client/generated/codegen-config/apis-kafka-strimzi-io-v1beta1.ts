import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/kafka.strimzi.io/v1beta1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-kafka-strimzi-io-v1beta1.ts',
}

export default config
