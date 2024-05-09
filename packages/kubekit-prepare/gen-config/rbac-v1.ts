import type { ConfigFile } from '@kubekit/codegen'

const config: ConfigFile = {
  schemaFile: '../openapi/apis/rbac.authorization.k8s.io/v1/swagger.json',
  apiFile: '@kubekit/client',
  outputFile: '../src/k8s-client/rbac-v1.ts',
}

export default config
