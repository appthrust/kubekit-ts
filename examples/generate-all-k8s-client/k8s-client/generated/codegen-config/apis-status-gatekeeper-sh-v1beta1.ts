import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/status.gatekeeper.sh/v1beta1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-status-gatekeeper-sh-v1beta1.ts',
}

export default config
