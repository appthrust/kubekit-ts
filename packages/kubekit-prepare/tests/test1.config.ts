import { ConfigFile } from '../src/config'

const config: ConfigFile = {
  kind: 'ServiceAccount',
  name: 'ttl-after-finished-controller',
  namespace: 'kube-system',
  outputFile: './ttl-after-finished-controller.openapi.json',
}

export default config
