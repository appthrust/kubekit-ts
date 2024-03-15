import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export const getCodeVersion = (
  args: GetCodeVersionApiArg,
  options?: Options
) => {
  return apiClient<GetCodeVersionApiResponse>({ path: `/version/` }, options)
}
export type GetCodeVersionApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgVersionInfo
export type GetCodeVersionApiArg = void
export type IoK8SApimachineryPkgVersionInfo = {
  buildDate: string
  compiler: string
  gitCommit: string
  gitTreeState: string
  gitVersion: string
  goVersion: string
  major: string
  minor: string
  platform: string
}
