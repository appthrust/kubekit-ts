import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/openid/v1/jwks/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/openid-v1-jwks.ts',
}

export default config
