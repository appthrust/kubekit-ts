import { ConfigFile } from '../lib'

const config: ConfigFile = {
  kind: 'ServiceAccount',
  name: 'example',
  namespace: 'default',
  outputFile: './example.openapi.json',
}

export default config
