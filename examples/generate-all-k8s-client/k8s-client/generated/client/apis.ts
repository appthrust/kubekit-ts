import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export const getApiVersions = (
  args: GetApiVersionsApiArg,
  options?: Options
) => {
  return apiClient<GetApiVersionsApiResponse>({ path: `/apis/` }, options)
}
export type GetApiVersionsApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiGroupList
export type GetApiVersionsApiArg = void
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
export type IoK8SApimachineryPkgApisMetaV1ApiGroupList = {
  apiVersion?: string | undefined
  groups: IoK8SApimachineryPkgApisMetaV1ApiGroup[]
  kind?: string | undefined
}
