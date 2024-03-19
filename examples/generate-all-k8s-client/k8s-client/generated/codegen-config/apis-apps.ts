import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/apps/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-apps.ts',
}

export default config
