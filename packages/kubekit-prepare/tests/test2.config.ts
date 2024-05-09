import { ConfigFile } from '../src/config'

const config: ConfigFile = {
  kind: 'ServiceAccount',
  name: 'test2',
  namespace: 'default',
  outputFile: './test2.openapi.json',
}

export default config
