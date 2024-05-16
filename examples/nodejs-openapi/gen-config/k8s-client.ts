import type { ConfigFile } from '@kubekit/codegen'

const config: ConfigFile = {
  schemaFile: '../generated-openapi.json',
  apiFile: '@kubekit/client',
  outputFile: '../src/generated/k8s-client.ts',
}

export default config
