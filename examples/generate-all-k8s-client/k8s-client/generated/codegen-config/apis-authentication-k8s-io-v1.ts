import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/authentication.k8s.io/v1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-authentication-k8s-io-v1.ts',
}

export default config
