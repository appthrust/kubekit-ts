import { apiClient, type Options } from '../../client'
export const getNodeApiGroup = (
  args: GetNodeApiGroupApiArg,
  options?: Options
) => {
  return apiClient<GetNodeApiGroupApiResponse>(
    { path: `/apis/node.k8s.io/` },
    options
  )
}
export type GetNodeApiGroupApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiGroup
export type GetNodeApiGroupApiArg = void
export type IoK8SApimachineryPkgApisMetaV1GroupVersionForDiscovery = {
  groupVersion: string
  version: string
}
export type IoK8SApimachineryPkgApisMetaV1ServerAddressByClientCidr = {
  clientCIDR: string
  serverAddress: string
}
export type IoK8SApimachineryPkgApisMetaV1ApiGroup = {
  apiVersion?: string | undefined
  kind?: string | undefined
  name: string
  preferredVersion?:
    | IoK8SApimachineryPkgApisMetaV1GroupVersionForDiscovery
    | undefined
  serverAddressByClientCIDRs?:
    | IoK8SApimachineryPkgApisMetaV1ServerAddressByClientCidr[]
    | undefined
  versions: IoK8SApimachineryPkgApisMetaV1GroupVersionForDiscovery[]
}
