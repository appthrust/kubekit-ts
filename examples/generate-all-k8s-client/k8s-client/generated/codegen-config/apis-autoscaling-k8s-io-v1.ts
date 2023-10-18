import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/autoscaling.k8s.io/v1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-autoscaling-k8s-io-v1.ts',
}

export default config
