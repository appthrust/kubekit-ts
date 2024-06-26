import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/.well-known/openid-configuration/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/well-known-openid-configuration.ts',
}

export default config
