import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/admissionregistration.k8s.io/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-admissionregistration-k8s-io.ts',
}

export default config
