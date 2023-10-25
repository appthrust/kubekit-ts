import { apiClient, type Options } from '../../client'
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
