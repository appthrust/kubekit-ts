import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/version/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/version.ts',
}

export default config
