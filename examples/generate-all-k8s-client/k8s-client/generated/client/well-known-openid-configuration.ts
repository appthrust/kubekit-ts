import { apiClient, type Options } from '../../client'
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
