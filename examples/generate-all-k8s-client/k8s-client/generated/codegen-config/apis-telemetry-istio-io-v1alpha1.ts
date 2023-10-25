import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/telemetry.istio.io/v1alpha1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-telemetry-istio-io-v1alpha1.ts',
}

export default config
