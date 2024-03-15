import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export const getServiceAccountIssuerOpenIdKeyset = (
  args: GetServiceAccountIssuerOpenIdKeysetApiArg,
  options?: Options
) => {
  return apiClient<GetServiceAccountIssuerOpenIdKeysetApiResponse>(
    { path: `/openid/v1/jwks/` },
    options
  )
}
export type GetServiceAccountIssuerOpenIdKeysetApiResponse =
  /** status 200 OK */ string
export type GetServiceAccountIssuerOpenIdKeysetApiArg = void
