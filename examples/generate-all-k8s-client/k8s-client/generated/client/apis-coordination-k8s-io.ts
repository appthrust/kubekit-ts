import { apiClient, type Options } from '../../client'
export const getCoordinationApiGroup = (
  args: GetCoordinationApiGroupApiArg,
  options?: Options
) => {
  return apiClient<GetCoordinationApiGroupApiResponse>(
    { path: `/apis/coordination.k8s.io/` },
    options
  )
}
export type GetCoordinationApiGroupApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiGroup
export type GetCoordinationApiGroupApiArg = void
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
