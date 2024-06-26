import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/storageos.com/v1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-storageos-com-v1.ts',
}

export default config
