import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/externaldata.gatekeeper.sh/v1alpha1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-externaldata-gatekeeper-sh-v1alpha1.ts',
}

export default config
