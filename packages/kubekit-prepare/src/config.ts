export type ConfigFile = {
  kind: 'ServiceAccount' | 'User' | 'Group'
  name: string
  namespace: string
  outputFile: string
}
