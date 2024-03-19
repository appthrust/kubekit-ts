import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile: '../../../tmp/api/openapi-spec/v3/apis/autoscaling/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-autoscaling.ts',
}

export default config
