import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export const getCoreApiVersions = (
  args: GetCoreApiVersionsApiArg,
  options?: Options
) => {
  return apiClient<GetCoreApiVersionsApiResponse>({ path: `/api/` }, options)
}
export type GetCoreApiVersionsApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiVersions
export type GetCoreApiVersionsApiArg = void
export type IoK8SApimachineryPkgApisMetaV1ServerAddressByClientCidr = {
  clientCIDR: string
  serverAddress: string
}
export type IoK8SApimachineryPkgApisMetaV1ApiVersions = {
  apiVersion?: string | undefined
  kind?: string | undefined
  serverAddressByClientCIDRs: IoK8SApimachineryPkgApisMetaV1ServerAddressByClientCidr[]
  versions: string[]
}
