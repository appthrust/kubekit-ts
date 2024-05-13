import type { ConfigFile } from '..'

const config: ConfigFile = {
  kind: 'ServiceAccount',
  name: 'kubekit-prepare',
  namespace: 'default',
  outputFile: '../generated-openapi.json',
}

export default config
