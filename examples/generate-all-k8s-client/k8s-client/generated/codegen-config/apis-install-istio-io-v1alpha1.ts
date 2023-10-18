import type { ConfigFile } from 'kubernetes-typescript-client-codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/install.istio.io/v1alpha1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-install-istio-io-v1alpha1.ts',
}

export default config
