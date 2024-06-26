import type { ConfigFile } from '../src'

const config: ConfigFile = {
  kind: 'ServiceAccount',
  name: 'kubekit-openapi-gen',
  namespace: 'default',
  outputFile: '../generated-openapi.json',
}

export default config
