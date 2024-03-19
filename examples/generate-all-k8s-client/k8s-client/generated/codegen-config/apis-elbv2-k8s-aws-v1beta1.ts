import type { ConfigFile } from 'kubekit'

const config: ConfigFile = {
  schemaFile:
    '../../../tmp/api/openapi-spec/v3/apis/elbv2.k8s.aws/v1beta1/swagger.json',
  apiFile: '../../client.ts',
  outputFile: '../client/apis-elbv2-k8s-aws-v1beta1.ts',
}

export default config
