import { apiClient, type Options } from '../../client'
export const getRbacAuthorizationApiGroup = (
  args: GetRbacAuthorizationApiGroupApiArg,
  options?: Options
) => {
  return apiClient<GetRbacAuthorizationApiGroupApiResponse>(
    { path: `/apis/rbac.authorization.k8s.io/` },
    options
  )
}
export type GetRbacAuthorizationApiGroupApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiGroup
export type GetRbacAuthorizationApiGroupApiArg = void
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
