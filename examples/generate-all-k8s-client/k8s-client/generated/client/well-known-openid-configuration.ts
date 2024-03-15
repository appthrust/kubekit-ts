import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export const getServiceAccountIssuerOpenIdConfiguration = (
  args: GetServiceAccountIssuerOpenIdConfigurationApiArg,
  options?: Options
) => {
  return apiClient<GetServiceAccountIssuerOpenIdConfigurationApiResponse>(
    { path: `/.well-known/openid-configuration/` },
    options
  )
}
export type GetServiceAccountIssuerOpenIdConfigurationApiResponse =
  /** status 200 OK */ string
export type GetServiceAccountIssuerOpenIdConfigurationApiArg = void
