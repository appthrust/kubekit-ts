import { ConfigFile } from '..'

const config: ConfigFile = {
  kind: 'ServiceAccount',
  name: 'ttl-after-finished-controller',
  namespace: 'kube-system',
  outputFile: './ttl-after-finished-controller.openapi.json',
}

export default config
