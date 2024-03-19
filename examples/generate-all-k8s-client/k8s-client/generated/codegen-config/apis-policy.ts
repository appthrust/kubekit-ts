import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/policy/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-policy.ts',
}

export default config
