export type HttpMethods =
  | 'get'
  | 'put'
  | 'post'
  | 'delete'
  | 'options'
  | 'head'
  | 'patch'
  | 'trace'
export type ConfigFile = {
  kind: 'ServiceAccount' | 'User' | 'Group'
  name: string
  namespace: string
  outputFile: string
}
