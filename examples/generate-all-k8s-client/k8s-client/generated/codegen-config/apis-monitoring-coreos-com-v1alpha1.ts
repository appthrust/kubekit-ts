import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/monitoring.coreos.com/v1alpha1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-monitoring-coreos-com-v1alpha1.ts',
}

export default config
