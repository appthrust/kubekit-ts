import type { ConfigFile } from '@kubekit/prepare'

const config: ConfigFile = {
  kind: 'ServiceAccount',
  name: 'example',
  namespace: 'default',
  outputFile: '../generated-openapi.json',
}

export default config
