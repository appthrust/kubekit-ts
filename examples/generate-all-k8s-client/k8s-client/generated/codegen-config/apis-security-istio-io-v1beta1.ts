import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/security.istio.io/v1beta1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-security-istio-io-v1beta1.ts',
}

export default config
