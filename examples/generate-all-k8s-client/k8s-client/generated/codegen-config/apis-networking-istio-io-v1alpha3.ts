import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/networking.istio.io/v1alpha3/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-networking-istio-io-v1alpha3.ts',
}

export default config
