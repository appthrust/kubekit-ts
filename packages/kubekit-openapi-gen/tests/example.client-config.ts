import { ConfigFile } from '@kubekit/client-gen'

const config: ConfigFile = {
  schemaFile: './example.openapi.json',
  apiFile: '@kubekit/client',
  outputFile: './example-client.ts',
}

export default config
