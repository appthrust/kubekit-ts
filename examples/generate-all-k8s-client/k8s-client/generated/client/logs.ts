import { apiClient, type Options } from '../../client'
export const logFileListHandler = (
  args: LogFileListHandlerApiArg,
  options?: Options
) => {
  return apiClient<LogFileListHandlerApiResponse>({ path: `/logs/` }, options)
}
export const logFileHandler = (
  args: LogFileHandlerApiArg,
  options?: Options
) => {
  return apiClient<LogFileHandlerApiResponse>(
    { path: `/logs/${args.logpath}` },
    options
  )
}
export type LogFileListHandlerApiResponse = unknown
export type LogFileListHandlerApiArg = void
export type LogFileHandlerApiResponse = unknown
export type LogFileHandlerApiArg = {
  /** path to the log */
  logpath: string
}
