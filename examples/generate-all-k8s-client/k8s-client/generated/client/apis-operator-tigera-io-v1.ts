import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export function listOperatorTigeraIoV1ApiServer(
  args: NoWatch<ListOperatorTigeraIoV1ApiServerApiArg>,
  options?: Options
): Promise<ListOperatorTigeraIoV1ApiServerApiResponse>
export function listOperatorTigeraIoV1ApiServer(
  args: ListOperatorTigeraIoV1ApiServerApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListOperatorTigeraIoV1ApiServerApiResponse>
): Promise<void>
export function listOperatorTigeraIoV1ApiServer(args: any, options: any): any {
  return apiClient<ListOperatorTigeraIoV1ApiServerApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createOperatorTigeraIoV1ApiServer = (
  args: CreateOperatorTigeraIoV1ApiServerApiArg,
  options?: Options
) => {
  return apiClient<CreateOperatorTigeraIoV1ApiServerApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export function deleteOperatorTigeraIoV1CollectionApiServer(
  args: NoWatch<DeleteOperatorTigeraIoV1CollectionApiServerApiArg>,
  options?: Options
): Promise<DeleteOperatorTigeraIoV1CollectionApiServerApiResponse>
export function deleteOperatorTigeraIoV1CollectionApiServer(
  args: DeleteOperatorTigeraIoV1CollectionApiServerApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteOperatorTigeraIoV1CollectionApiServerApiResponse>
): Promise<void>
export function deleteOperatorTigeraIoV1CollectionApiServer(
  args: any,
  options: any
): any {
  return apiClient<DeleteOperatorTigeraIoV1CollectionApiServerApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readOperatorTigeraIoV1ApiServer = (
  args: ReadOperatorTigeraIoV1ApiServerApiArg,
  options?: Options
) => {
  return apiClient<ReadOperatorTigeraIoV1ApiServerApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceOperatorTigeraIoV1ApiServer = (
  args: ReplaceOperatorTigeraIoV1ApiServerApiArg,
  options?: Options
) => {
  return apiClient<ReplaceOperatorTigeraIoV1ApiServerApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers/${args.name}`,
      method: 'PUT',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const deleteOperatorTigeraIoV1ApiServer = (
  args: DeleteOperatorTigeraIoV1ApiServerApiArg,
  options?: Options
) => {
  return apiClient<DeleteOperatorTigeraIoV1ApiServerApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchOperatorTigeraIoV1ApiServer = (
  args: PatchOperatorTigeraIoV1ApiServerApiArg,
  options?: Options
) => {
  return apiClient<PatchOperatorTigeraIoV1ApiServerApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readOperatorTigeraIoV1ApiServerStatus = (
  args: ReadOperatorTigeraIoV1ApiServerStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadOperatorTigeraIoV1ApiServerStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceOperatorTigeraIoV1ApiServerStatus = (
  args: ReplaceOperatorTigeraIoV1ApiServerStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceOperatorTigeraIoV1ApiServerStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers/${args.name}/status`,
      method: 'PUT',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const patchOperatorTigeraIoV1ApiServerStatus = (
  args: PatchOperatorTigeraIoV1ApiServerStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchOperatorTigeraIoV1ApiServerStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/apiservers/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export function listOperatorTigeraIoV1ImageSet(
  args: NoWatch<ListOperatorTigeraIoV1ImageSetApiArg>,
  options?: Options
): Promise<ListOperatorTigeraIoV1ImageSetApiResponse>
export function listOperatorTigeraIoV1ImageSet(
  args: ListOperatorTigeraIoV1ImageSetApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListOperatorTigeraIoV1ImageSetApiResponse>
): Promise<void>
export function listOperatorTigeraIoV1ImageSet(args: any, options: any): any {
  return apiClient<ListOperatorTigeraIoV1ImageSetApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createOperatorTigeraIoV1ImageSet = (
  args: CreateOperatorTigeraIoV1ImageSetApiArg,
  options?: Options
) => {
  return apiClient<CreateOperatorTigeraIoV1ImageSetApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export function deleteOperatorTigeraIoV1CollectionImageSet(
  args: NoWatch<DeleteOperatorTigeraIoV1CollectionImageSetApiArg>,
  options?: Options
): Promise<DeleteOperatorTigeraIoV1CollectionImageSetApiResponse>
export function deleteOperatorTigeraIoV1CollectionImageSet(
  args: DeleteOperatorTigeraIoV1CollectionImageSetApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteOperatorTigeraIoV1CollectionImageSetApiResponse>
): Promise<void>
export function deleteOperatorTigeraIoV1CollectionImageSet(
  args: any,
  options: any
): any {
  return apiClient<DeleteOperatorTigeraIoV1CollectionImageSetApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readOperatorTigeraIoV1ImageSet = (
  args: ReadOperatorTigeraIoV1ImageSetApiArg,
  options?: Options
) => {
  return apiClient<ReadOperatorTigeraIoV1ImageSetApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceOperatorTigeraIoV1ImageSet = (
  args: ReplaceOperatorTigeraIoV1ImageSetApiArg,
  options?: Options
) => {
  return apiClient<ReplaceOperatorTigeraIoV1ImageSetApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets/${args.name}`,
      method: 'PUT',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const deleteOperatorTigeraIoV1ImageSet = (
  args: DeleteOperatorTigeraIoV1ImageSetApiArg,
  options?: Options
) => {
  return apiClient<DeleteOperatorTigeraIoV1ImageSetApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchOperatorTigeraIoV1ImageSet = (
  args: PatchOperatorTigeraIoV1ImageSetApiArg,
  options?: Options
) => {
  return apiClient<PatchOperatorTigeraIoV1ImageSetApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readOperatorTigeraIoV1ImageSetStatus = (
  args: ReadOperatorTigeraIoV1ImageSetStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadOperatorTigeraIoV1ImageSetStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceOperatorTigeraIoV1ImageSetStatus = (
  args: ReplaceOperatorTigeraIoV1ImageSetStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceOperatorTigeraIoV1ImageSetStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets/${args.name}/status`,
      method: 'PUT',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const patchOperatorTigeraIoV1ImageSetStatus = (
  args: PatchOperatorTigeraIoV1ImageSetStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchOperatorTigeraIoV1ImageSetStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/imagesets/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export function listOperatorTigeraIoV1Installation(
  args: NoWatch<ListOperatorTigeraIoV1InstallationApiArg>,
  options?: Options
): Promise<ListOperatorTigeraIoV1InstallationApiResponse>
export function listOperatorTigeraIoV1Installation(
  args: ListOperatorTigeraIoV1InstallationApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListOperatorTigeraIoV1InstallationApiResponse>
): Promise<void>
export function listOperatorTigeraIoV1Installation(
  args: any,
  options: any
): any {
  return apiClient<ListOperatorTigeraIoV1InstallationApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createOperatorTigeraIoV1Installation = (
  args: CreateOperatorTigeraIoV1InstallationApiArg,
  options?: Options
) => {
  return apiClient<CreateOperatorTigeraIoV1InstallationApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export function deleteOperatorTigeraIoV1CollectionInstallation(
  args: NoWatch<DeleteOperatorTigeraIoV1CollectionInstallationApiArg>,
  options?: Options
): Promise<DeleteOperatorTigeraIoV1CollectionInstallationApiResponse>
export function deleteOperatorTigeraIoV1CollectionInstallation(
  args: DeleteOperatorTigeraIoV1CollectionInstallationApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteOperatorTigeraIoV1CollectionInstallationApiResponse>
): Promise<void>
export function deleteOperatorTigeraIoV1CollectionInstallation(
  args: any,
  options: any
): any {
  return apiClient<DeleteOperatorTigeraIoV1CollectionInstallationApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readOperatorTigeraIoV1Installation = (
  args: ReadOperatorTigeraIoV1InstallationApiArg,
  options?: Options
) => {
  return apiClient<ReadOperatorTigeraIoV1InstallationApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceOperatorTigeraIoV1Installation = (
  args: ReplaceOperatorTigeraIoV1InstallationApiArg,
  options?: Options
) => {
  return apiClient<ReplaceOperatorTigeraIoV1InstallationApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations/${args.name}`,
      method: 'PUT',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const deleteOperatorTigeraIoV1Installation = (
  args: DeleteOperatorTigeraIoV1InstallationApiArg,
  options?: Options
) => {
  return apiClient<DeleteOperatorTigeraIoV1InstallationApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchOperatorTigeraIoV1Installation = (
  args: PatchOperatorTigeraIoV1InstallationApiArg,
  options?: Options
) => {
  return apiClient<PatchOperatorTigeraIoV1InstallationApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readOperatorTigeraIoV1InstallationStatus = (
  args: ReadOperatorTigeraIoV1InstallationStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadOperatorTigeraIoV1InstallationStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceOperatorTigeraIoV1InstallationStatus = (
  args: ReplaceOperatorTigeraIoV1InstallationStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceOperatorTigeraIoV1InstallationStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations/${args.name}/status`,
      method: 'PUT',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const patchOperatorTigeraIoV1InstallationStatus = (
  args: PatchOperatorTigeraIoV1InstallationStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchOperatorTigeraIoV1InstallationStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/installations/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export function listOperatorTigeraIoV1TigeraStatus(
  args: NoWatch<ListOperatorTigeraIoV1TigeraStatusApiArg>,
  options?: Options
): Promise<ListOperatorTigeraIoV1TigeraStatusApiResponse>
export function listOperatorTigeraIoV1TigeraStatus(
  args: ListOperatorTigeraIoV1TigeraStatusApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListOperatorTigeraIoV1TigeraStatusApiResponse>
): Promise<void>
export function listOperatorTigeraIoV1TigeraStatus(
  args: any,
  options: any
): any {
  return apiClient<ListOperatorTigeraIoV1TigeraStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses`,
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const createOperatorTigeraIoV1TigeraStatus = (
  args: CreateOperatorTigeraIoV1TigeraStatusApiArg,
  options?: Options
) => {
  return apiClient<CreateOperatorTigeraIoV1TigeraStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses`,
      method: 'POST',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export function deleteOperatorTigeraIoV1CollectionTigeraStatus(
  args: NoWatch<DeleteOperatorTigeraIoV1CollectionTigeraStatusApiArg>,
  options?: Options
): Promise<DeleteOperatorTigeraIoV1CollectionTigeraStatusApiResponse>
export function deleteOperatorTigeraIoV1CollectionTigeraStatus(
  args: DeleteOperatorTigeraIoV1CollectionTigeraStatusApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteOperatorTigeraIoV1CollectionTigeraStatusApiResponse>
): Promise<void>
export function deleteOperatorTigeraIoV1CollectionTigeraStatus(
  args: any,
  options: any
): any {
  return apiClient<DeleteOperatorTigeraIoV1CollectionTigeraStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses`,
      method: 'DELETE',
      params: {
        pretty: args.pretty,
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
        watch: args.watch,
      },
    },
    options
  )
}
export const readOperatorTigeraIoV1TigeraStatus = (
  args: ReadOperatorTigeraIoV1TigeraStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadOperatorTigeraIoV1TigeraStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceOperatorTigeraIoV1TigeraStatus = (
  args: ReplaceOperatorTigeraIoV1TigeraStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceOperatorTigeraIoV1TigeraStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses/${args.name}`,
      method: 'PUT',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const deleteOperatorTigeraIoV1TigeraStatus = (
  args: DeleteOperatorTigeraIoV1TigeraStatusApiArg,
  options?: Options
) => {
  return apiClient<DeleteOperatorTigeraIoV1TigeraStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses/${args.name}`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        gracePeriodSeconds: args.gracePeriodSeconds,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
      },
    },
    options
  )
}
export const patchOperatorTigeraIoV1TigeraStatus = (
  args: PatchOperatorTigeraIoV1TigeraStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchOperatorTigeraIoV1TigeraStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses/${args.name}`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export const readOperatorTigeraIoV1TigeraStatusStatus = (
  args: ReadOperatorTigeraIoV1TigeraStatusStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadOperatorTigeraIoV1TigeraStatusStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceOperatorTigeraIoV1TigeraStatusStatus = (
  args: ReplaceOperatorTigeraIoV1TigeraStatusStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceOperatorTigeraIoV1TigeraStatusStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses/${args.name}/status`,
      method: 'PUT',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
      },
    },
    options
  )
}
export const patchOperatorTigeraIoV1TigeraStatusStatus = (
  args: PatchOperatorTigeraIoV1TigeraStatusStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchOperatorTigeraIoV1TigeraStatusStatusApiResponse>(
    {
      path: `/apis/operator.tigera.io/v1/tigerastatuses/${args.name}/status`,
      method: 'PATCH',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        dryRun: args.dryRun,
        fieldManager: args.fieldManager,
        fieldValidation: args.fieldValidation,
        force: args.force,
      },
    },
    options
  )
}
export type ListOperatorTigeraIoV1ApiServerApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ApiServerList
export type ListOperatorTigeraIoV1ApiServerApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateOperatorTigeraIoV1ApiServerApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1ApiServer
  | /** status 201 Created */ IoTigeraOperatorV1ApiServer
  | /** status 202 Accepted */ IoTigeraOperatorV1ApiServer
export type CreateOperatorTigeraIoV1ApiServerApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1ApiServer
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1ApiServer
    }
)
export type DeleteOperatorTigeraIoV1CollectionApiServerApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteOperatorTigeraIoV1CollectionApiServerApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ReadOperatorTigeraIoV1ApiServerApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ApiServer
export type ReadOperatorTigeraIoV1ApiServerApiArg = {
  /** name of the APIServer */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceOperatorTigeraIoV1ApiServerApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1ApiServer
  | /** status 201 Created */ IoTigeraOperatorV1ApiServer
export type ReplaceOperatorTigeraIoV1ApiServerApiArg = {
  /** name of the APIServer */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1ApiServer
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1ApiServer
    }
)
export type DeleteOperatorTigeraIoV1ApiServerApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteOperatorTigeraIoV1ApiServerApiArg = {
  /** name of the APIServer */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchOperatorTigeraIoV1ApiServerApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ApiServer
export type PatchOperatorTigeraIoV1ApiServerApiArg = {
  /** name of the APIServer */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoTigeraOperatorV1ApiServer
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoTigeraOperatorV1ApiServer
    }
)
export type ReadOperatorTigeraIoV1ApiServerStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ApiServer
export type ReadOperatorTigeraIoV1ApiServerStatusApiArg = {
  /** name of the APIServer */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceOperatorTigeraIoV1ApiServerStatusApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1ApiServer
  | /** status 201 Created */ IoTigeraOperatorV1ApiServer
export type ReplaceOperatorTigeraIoV1ApiServerStatusApiArg = {
  /** name of the APIServer */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1ApiServer
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1ApiServer
    }
)
export type PatchOperatorTigeraIoV1ApiServerStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ApiServer
export type PatchOperatorTigeraIoV1ApiServerStatusApiArg = {
  /** name of the APIServer */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoTigeraOperatorV1ApiServer
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoTigeraOperatorV1ApiServer
    }
)
export type ListOperatorTigeraIoV1ImageSetApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ImageSetList
export type ListOperatorTigeraIoV1ImageSetApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateOperatorTigeraIoV1ImageSetApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1ImageSet
  | /** status 201 Created */ IoTigeraOperatorV1ImageSet
  | /** status 202 Accepted */ IoTigeraOperatorV1ImageSet
export type CreateOperatorTigeraIoV1ImageSetApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1ImageSet
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1ImageSet
    }
)
export type DeleteOperatorTigeraIoV1CollectionImageSetApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteOperatorTigeraIoV1CollectionImageSetApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ReadOperatorTigeraIoV1ImageSetApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ImageSet
export type ReadOperatorTigeraIoV1ImageSetApiArg = {
  /** name of the ImageSet */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceOperatorTigeraIoV1ImageSetApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1ImageSet
  | /** status 201 Created */ IoTigeraOperatorV1ImageSet
export type ReplaceOperatorTigeraIoV1ImageSetApiArg = {
  /** name of the ImageSet */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1ImageSet
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1ImageSet
    }
)
export type DeleteOperatorTigeraIoV1ImageSetApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteOperatorTigeraIoV1ImageSetApiArg = {
  /** name of the ImageSet */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchOperatorTigeraIoV1ImageSetApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ImageSet
export type PatchOperatorTigeraIoV1ImageSetApiArg = {
  /** name of the ImageSet */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoTigeraOperatorV1ImageSet
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoTigeraOperatorV1ImageSet
    }
)
export type ReadOperatorTigeraIoV1ImageSetStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ImageSet
export type ReadOperatorTigeraIoV1ImageSetStatusApiArg = {
  /** name of the ImageSet */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceOperatorTigeraIoV1ImageSetStatusApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1ImageSet
  | /** status 201 Created */ IoTigeraOperatorV1ImageSet
export type ReplaceOperatorTigeraIoV1ImageSetStatusApiArg = {
  /** name of the ImageSet */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1ImageSet
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1ImageSet
    }
)
export type PatchOperatorTigeraIoV1ImageSetStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1ImageSet
export type PatchOperatorTigeraIoV1ImageSetStatusApiArg = {
  /** name of the ImageSet */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoTigeraOperatorV1ImageSet
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoTigeraOperatorV1ImageSet
    }
)
export type ListOperatorTigeraIoV1InstallationApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1InstallationList
export type ListOperatorTigeraIoV1InstallationApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateOperatorTigeraIoV1InstallationApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1Installation
  | /** status 201 Created */ IoTigeraOperatorV1Installation
  | /** status 202 Accepted */ IoTigeraOperatorV1Installation
export type CreateOperatorTigeraIoV1InstallationApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1Installation
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1Installation
    }
)
export type DeleteOperatorTigeraIoV1CollectionInstallationApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteOperatorTigeraIoV1CollectionInstallationApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ReadOperatorTigeraIoV1InstallationApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1Installation
export type ReadOperatorTigeraIoV1InstallationApiArg = {
  /** name of the Installation */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceOperatorTigeraIoV1InstallationApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1Installation
  | /** status 201 Created */ IoTigeraOperatorV1Installation
export type ReplaceOperatorTigeraIoV1InstallationApiArg = {
  /** name of the Installation */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1Installation
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1Installation
    }
)
export type DeleteOperatorTigeraIoV1InstallationApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteOperatorTigeraIoV1InstallationApiArg = {
  /** name of the Installation */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchOperatorTigeraIoV1InstallationApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1Installation
export type PatchOperatorTigeraIoV1InstallationApiArg = {
  /** name of the Installation */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoTigeraOperatorV1Installation
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoTigeraOperatorV1Installation
    }
)
export type ReadOperatorTigeraIoV1InstallationStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1Installation
export type ReadOperatorTigeraIoV1InstallationStatusApiArg = {
  /** name of the Installation */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceOperatorTigeraIoV1InstallationStatusApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1Installation
  | /** status 201 Created */ IoTigeraOperatorV1Installation
export type ReplaceOperatorTigeraIoV1InstallationStatusApiArg = {
  /** name of the Installation */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1Installation
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1Installation
    }
)
export type PatchOperatorTigeraIoV1InstallationStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1Installation
export type PatchOperatorTigeraIoV1InstallationStatusApiArg = {
  /** name of the Installation */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoTigeraOperatorV1Installation
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoTigeraOperatorV1Installation
    }
)
export type ListOperatorTigeraIoV1TigeraStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1TigeraStatusList
export type ListOperatorTigeraIoV1TigeraStatusApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type CreateOperatorTigeraIoV1TigeraStatusApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1TigeraStatus
  | /** status 201 Created */ IoTigeraOperatorV1TigeraStatus
  | /** status 202 Accepted */ IoTigeraOperatorV1TigeraStatus
export type CreateOperatorTigeraIoV1TigeraStatusApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1TigeraStatus
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1TigeraStatus
    }
)
export type DeleteOperatorTigeraIoV1CollectionTigeraStatusApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteOperatorTigeraIoV1CollectionTigeraStatusApiArg = {
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. */
  allowWatchBookmarks?: boolean
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
  /** resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersionMatch?: string
  /** `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
    
    When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
      is interpreted as "data at least as new as the provided `resourceVersion`"
      and the bookmark event is send when the state is synced
      to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
      If `resourceVersion` is unset, this is interpreted as "consistent read" and the
      bookmark event is send when the state is synced at least to the moment
      when request started being processed.
    - `resourceVersionMatch` set to any other value or unset
      Invalid error is returned.
    
    Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise. */
  sendInitialEvents?: boolean
  /** Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. */
  timeoutSeconds?: number
  /** Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. */
  watch?: boolean
}
export type ReadOperatorTigeraIoV1TigeraStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1TigeraStatus
export type ReadOperatorTigeraIoV1TigeraStatusApiArg = {
  /** name of the TigeraStatus */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceOperatorTigeraIoV1TigeraStatusApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1TigeraStatus
  | /** status 201 Created */ IoTigeraOperatorV1TigeraStatus
export type ReplaceOperatorTigeraIoV1TigeraStatusApiArg = {
  /** name of the TigeraStatus */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1TigeraStatus
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1TigeraStatus
    }
)
export type DeleteOperatorTigeraIoV1TigeraStatusApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteOperatorTigeraIoV1TigeraStatusApiArg = {
  /** name of the TigeraStatus */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & (
  | {
      contentType: 'application/json'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
  | {
      contentType: 'application/yaml'
      body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
    }
)
export type PatchOperatorTigeraIoV1TigeraStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1TigeraStatus
export type PatchOperatorTigeraIoV1TigeraStatusApiArg = {
  /** name of the TigeraStatus */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoTigeraOperatorV1TigeraStatus
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoTigeraOperatorV1TigeraStatus
    }
)
export type ReadOperatorTigeraIoV1TigeraStatusStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1TigeraStatus
export type ReadOperatorTigeraIoV1TigeraStatusStatusApiArg = {
  /** name of the TigeraStatus */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceOperatorTigeraIoV1TigeraStatusStatusApiResponse =
  /** status 200 OK */
  | IoTigeraOperatorV1TigeraStatus
  | /** status 201 Created */ IoTigeraOperatorV1TigeraStatus
export type ReplaceOperatorTigeraIoV1TigeraStatusStatusApiArg = {
  /** name of the TigeraStatus */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & (
  | {
      contentType: 'application/json'
      body: IoTigeraOperatorV1TigeraStatus
    }
  | {
      contentType: 'application/yaml'
      body: IoTigeraOperatorV1TigeraStatus
    }
)
export type PatchOperatorTigeraIoV1TigeraStatusStatusApiResponse =
  /** status 200 OK */ IoTigeraOperatorV1TigeraStatus
export type PatchOperatorTigeraIoV1TigeraStatusStatusApiArg = {
  /** name of the TigeraStatus */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  /** Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. */
  force?: boolean
} & (
  | {
      contentType: 'application/apply-patch+yaml'
      body: IoTigeraOperatorV1TigeraStatus
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoTigeraOperatorV1TigeraStatus
    }
)
export type IoK8SApimachineryPkgApisMetaV1Time = string
export type IoK8SApimachineryPkgApisMetaV1FieldsV1 = object
export type IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry = {
  apiVersion?: string | undefined
  fieldsType?: string | undefined
  fieldsV1?: IoK8SApimachineryPkgApisMetaV1FieldsV1 | undefined
  manager?: string | undefined
  operation?: string | undefined
  subresource?: string | undefined
  time?: IoK8SApimachineryPkgApisMetaV1Time | undefined
}
export type IoK8SApimachineryPkgApisMetaV1OwnerReference = {
  apiVersion: string
  blockOwnerDeletion?: boolean | undefined
  controller?: boolean | undefined
  kind: string
  name: string
  uid: string
}
export type IoK8SApimachineryPkgApisMetaV1ObjectMeta = {
  annotations?:
    | {
        [key: string]: string
      }
    | undefined
  creationTimestamp?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  deletionGracePeriodSeconds?: number | undefined
  deletionTimestamp?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  finalizers?: string[] | undefined
  generateName?: string | undefined
  generation?: number | undefined
  labels?:
    | {
        [key: string]: string
      }
    | undefined
  managedFields?: IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry[] | undefined
  name?: string | undefined
  namespace?: string | undefined
  ownerReferences?: IoK8SApimachineryPkgApisMetaV1OwnerReference[] | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
  uid?: string | undefined
}
export type IoTigeraOperatorV1ApiServer = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        apiServerDeployment?:
          | {
              metadata?:
                | {
                    annotations?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                    labels?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                  }
                | undefined
              spec?:
                | {
                    minReadySeconds?: number | undefined
                    template?:
                      | {
                          metadata?:
                            | {
                                annotations?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                labels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          spec?:
                            | {
                                affinity?:
                                  | {
                                      nodeAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  preference: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  nodeSelectorTerms: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }[]
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      podAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      podAntiAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                containers?:
                                  | {
                                      name:
                                        | 'calico-apiserver'
                                        | 'tigera-queryserver'
                                      resources?:
                                        | {
                                            limits?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                            requests?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                          }
                                        | undefined
                                    }[]
                                  | undefined
                                initContainers?:
                                  | {
                                      name: 'calico-apiserver-certs-key-cert-provisioner'
                                      resources?:
                                        | {
                                            limits?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                            requests?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                          }
                                        | undefined
                                    }[]
                                  | undefined
                                nodeSelector?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                tolerations?:
                                  | {
                                      effect?: string | undefined
                                      key?: string | undefined
                                      operator?: string | undefined
                                      tolerationSeconds?: number | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        state?: string | undefined
      }
    | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoTigeraOperatorV1ApiServerList = {
  apiVersion?: string | undefined
  items: IoTigeraOperatorV1ApiServer[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoK8SApimachineryPkgApisMetaV1StatusCause = {
  field?: string | undefined
  message?: string | undefined
  reason?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1StatusDetails = {
  causes?: IoK8SApimachineryPkgApisMetaV1StatusCause[] | undefined
  group?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  retryAfterSeconds?: number | undefined
  uid?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1Status = {
  apiVersion?: string | undefined
  code?: number | undefined
  details?: IoK8SApimachineryPkgApisMetaV1StatusDetails | undefined
  kind?: string | undefined
  message?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
  reason?: string | undefined
  status?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1Preconditions = {
  resourceVersion?: string | undefined
  uid?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1DeleteOptions = {
  apiVersion?: string | undefined
  dryRun?: string[] | undefined
  gracePeriodSeconds?: number | undefined
  kind?: string | undefined
  orphanDependents?: boolean | undefined
  preconditions?: IoK8SApimachineryPkgApisMetaV1Preconditions | undefined
  propagationPolicy?: string | undefined
}
export type AddOperation = {
  op: 'add'
  path: string
  value: string | number | boolean | any | object
}
export type RemoveOperation = {
  op: 'remove'
  path: string
}
export type ReplaceOperation = {
  op: 'replace'
  path: string
  value: string | number | boolean | any | object
}
export type MoveOperation = {
  op: 'move'
  path: string
  from: string
}
export type CopyOperation = {
  op: 'copy'
  path: string
  from: string
}
export type TestOperation = {
  op: 'test'
  path: string
  value: string | number | boolean | any | object
}
export type JsonPatchOperation =
  | AddOperation
  | RemoveOperation
  | ReplaceOperation
  | MoveOperation
  | CopyOperation
  | TestOperation
export type JsonPatchOperations = JsonPatchOperation[]
export type IoTigeraOperatorV1ImageSet = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        images?:
          | {
              digest: string
              image: string
            }[]
          | undefined
      }
    | undefined
}
export type IoTigeraOperatorV1ImageSetList = {
  apiVersion?: string | undefined
  items: IoTigeraOperatorV1ImageSet[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoTigeraOperatorV1Installation = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        calicoKubeControllersDeployment?:
          | {
              metadata?:
                | {
                    annotations?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                    labels?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                  }
                | undefined
              spec?:
                | {
                    minReadySeconds?: number | undefined
                    template?:
                      | {
                          metadata?:
                            | {
                                annotations?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                labels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          spec?:
                            | {
                                affinity?:
                                  | {
                                      nodeAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  preference: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  nodeSelectorTerms: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }[]
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      podAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      podAntiAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                containers?:
                                  | {
                                      name: 'calico-kube-controllers'
                                      resources?:
                                        | {
                                            limits?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                            requests?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                          }
                                        | undefined
                                    }[]
                                  | undefined
                                nodeSelector?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                tolerations?:
                                  | {
                                      effect?: string | undefined
                                      key?: string | undefined
                                      operator?: string | undefined
                                      tolerationSeconds?: number | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        calicoNetwork?:
          | {
              bgp?: ('Enabled' | 'Disabled') | undefined
              containerIPForwarding?: ('Enabled' | 'Disabled') | undefined
              hostPorts?: ('Enabled' | 'Disabled') | undefined
              ipPools?:
                | {
                    blockSize?: number | undefined
                    cidr: string
                    disableBGPExport?: boolean | undefined
                    encapsulation?:
                      | (
                          | 'IPIPCrossSubnet'
                          | 'IPIP'
                          | 'VXLAN'
                          | 'VXLANCrossSubnet'
                          | 'None'
                        )
                      | undefined
                    natOutgoing?: ('Enabled' | 'Disabled') | undefined
                    nodeSelector?: string | undefined
                  }[]
                | undefined
              linuxDataplane?: ('Iptables' | 'BPF' | 'VPP') | undefined
              mtu?: number | undefined
              multiInterfaceMode?: ('None' | 'Multus') | undefined
              nodeAddressAutodetectionV4?:
                | {
                    canReach?: string | undefined
                    cidrs?: string[] | undefined
                    firstFound?: boolean | undefined
                    interface?: string | undefined
                    kubernetes?: 'NodeInternalIP' | undefined
                    skipInterface?: string | undefined
                  }
                | undefined
              nodeAddressAutodetectionV6?:
                | {
                    canReach?: string | undefined
                    cidrs?: string[] | undefined
                    firstFound?: boolean | undefined
                    interface?: string | undefined
                    kubernetes?: 'NodeInternalIP' | undefined
                    skipInterface?: string | undefined
                  }
                | undefined
            }
          | undefined
        calicoNodeDaemonSet?:
          | {
              metadata?:
                | {
                    annotations?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                    labels?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                  }
                | undefined
              spec?:
                | {
                    minReadySeconds?: number | undefined
                    template?:
                      | {
                          metadata?:
                            | {
                                annotations?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                labels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          spec?:
                            | {
                                affinity?:
                                  | {
                                      nodeAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  preference: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  nodeSelectorTerms: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }[]
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      podAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      podAntiAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                containers?:
                                  | {
                                      name: 'calico-node'
                                      resources?:
                                        | {
                                            limits?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                            requests?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                          }
                                        | undefined
                                    }[]
                                  | undefined
                                initContainers?:
                                  | {
                                      name:
                                        | 'install-cni'
                                        | 'hostpath-init'
                                        | 'flexvol-driver'
                                        | 'mount-bpffs'
                                        | 'node-certs-key-cert-provisioner'
                                        | 'calico-node-prometheus-server-tls-key-cert-provisioner'
                                      resources?:
                                        | {
                                            limits?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                            requests?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                          }
                                        | undefined
                                    }[]
                                  | undefined
                                nodeSelector?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                tolerations?:
                                  | {
                                      effect?: string | undefined
                                      key?: string | undefined
                                      operator?: string | undefined
                                      tolerationSeconds?: number | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        calicoWindowsUpgradeDaemonSet?:
          | {
              metadata?:
                | {
                    annotations?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                    labels?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                  }
                | undefined
              spec?:
                | {
                    minReadySeconds?: number | undefined
                    template?:
                      | {
                          metadata?:
                            | {
                                annotations?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                labels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          spec?:
                            | {
                                affinity?:
                                  | {
                                      nodeAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  preference: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  nodeSelectorTerms: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }[]
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      podAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      podAntiAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                containers?:
                                  | {
                                      name: 'calico-windows-upgrade'
                                      resources?:
                                        | {
                                            limits?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                            requests?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                          }
                                        | undefined
                                    }[]
                                  | undefined
                                nodeSelector?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                tolerations?:
                                  | {
                                      effect?: string | undefined
                                      key?: string | undefined
                                      operator?: string | undefined
                                      tolerationSeconds?: number | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        certificateManagement?:
          | {
              caCert: string
              keyAlgorithm?:
                | (
                    | ''
                    | 'RSAWithSize2048'
                    | 'RSAWithSize4096'
                    | 'RSAWithSize8192'
                    | 'ECDSAWithCurve256'
                    | 'ECDSAWithCurve384'
                    | 'ECDSAWithCurve521'
                  )
                | undefined
              signatureAlgorithm?:
                | (
                    | ''
                    | 'SHA256WithRSA'
                    | 'SHA384WithRSA'
                    | 'SHA512WithRSA'
                    | 'ECDSAWithSHA256'
                    | 'ECDSAWithSHA384'
                    | 'ECDSAWithSHA512'
                  )
                | undefined
              signerName: string
            }
          | undefined
        cni?:
          | {
              ipam?:
                | {
                    type: 'Calico' | 'HostLocal' | 'AmazonVPC' | 'AzureVNET'
                  }
                | undefined
              type: 'Calico' | 'GKE' | 'AmazonVPC' | 'AzureVNET'
            }
          | undefined
        componentResources?:
          | {
              componentName: 'Node' | 'Typha' | 'KubeControllers'
              resourceRequirements: {
                limits?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
                requests?:
                  | {
                      [key: string]: number | string
                    }
                  | undefined
              }
            }[]
          | undefined
        controlPlaneNodeSelector?:
          | {
              [key: string]: string
            }
          | undefined
        controlPlaneReplicas?: number | undefined
        controlPlaneTolerations?:
          | {
              effect?: string | undefined
              key?: string | undefined
              operator?: string | undefined
              tolerationSeconds?: number | undefined
              value?: string | undefined
            }[]
          | undefined
        flexVolumePath?: string | undefined
        imagePath?: string | undefined
        imagePrefix?: string | undefined
        imagePullSecrets?:
          | {
              name?: string | undefined
            }[]
          | undefined
        kubeletVolumePluginPath?: string | undefined
        kubernetesProvider?:
          | (
              | ''
              | 'EKS'
              | 'GKE'
              | 'AKS'
              | 'OpenShift'
              | 'DockerEnterprise'
              | 'RKE2'
            )
          | undefined
        nodeMetricsPort?: number | undefined
        nodeUpdateStrategy?:
          | {
              rollingUpdate?:
                | {
                    maxSurge?: (number | string) | undefined
                    maxUnavailable?: (number | string) | undefined
                  }
                | undefined
              type?: string | undefined
            }
          | undefined
        nonPrivileged?: string | undefined
        registry?: string | undefined
        typhaAffinity?:
          | {
              nodeAffinity?:
                | {
                    preferredDuringSchedulingIgnoredDuringExecution?:
                      | {
                          preference: {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchFields?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                          }
                          weight: number
                        }[]
                      | undefined
                    requiredDuringSchedulingIgnoredDuringExecution?:
                      | {
                          nodeSelectorTerms: {
                            matchExpressions?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                            matchFields?:
                              | {
                                  key: string
                                  operator: string
                                  values?: string[] | undefined
                                }[]
                              | undefined
                          }[]
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        typhaDeployment?:
          | {
              metadata?:
                | {
                    annotations?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                    labels?:
                      | {
                          [key: string]: string
                        }
                      | undefined
                  }
                | undefined
              spec?:
                | {
                    minReadySeconds?: number | undefined
                    template?:
                      | {
                          metadata?:
                            | {
                                annotations?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                labels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          spec?:
                            | {
                                affinity?:
                                  | {
                                      nodeAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  preference: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  nodeSelectorTerms: {
                                                    matchExpressions?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                    matchFields?:
                                                      | {
                                                          key: string
                                                          operator: string
                                                          values?:
                                                            | string[]
                                                            | undefined
                                                        }[]
                                                      | undefined
                                                  }[]
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      podAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                      podAntiAffinity?:
                                        | {
                                            preferredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  podAffinityTerm: {
                                                    labelSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaceSelector?:
                                                      | {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchLabels?:
                                                            | {
                                                                [
                                                                  key: string
                                                                ]: string
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    namespaces?:
                                                      | string[]
                                                      | undefined
                                                    topologyKey: string
                                                  }
                                                  weight: number
                                                }[]
                                              | undefined
                                            requiredDuringSchedulingIgnoredDuringExecution?:
                                              | {
                                                  labelSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaceSelector?:
                                                    | {
                                                        matchExpressions?:
                                                          | {
                                                              key: string
                                                              operator: string
                                                              values?:
                                                                | string[]
                                                                | undefined
                                                            }[]
                                                          | undefined
                                                        matchLabels?:
                                                          | {
                                                              [
                                                                key: string
                                                              ]: string
                                                            }
                                                          | undefined
                                                      }
                                                    | undefined
                                                  namespaces?:
                                                    | string[]
                                                    | undefined
                                                  topologyKey: string
                                                }[]
                                              | undefined
                                          }
                                        | undefined
                                    }
                                  | undefined
                                containers?:
                                  | {
                                      name: 'calico-typha'
                                      resources?:
                                        | {
                                            limits?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                            requests?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                          }
                                        | undefined
                                    }[]
                                  | undefined
                                initContainers?:
                                  | {
                                      name: 'typha-certs-key-cert-provisioner'
                                      resources?:
                                        | {
                                            limits?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                            requests?:
                                              | {
                                                  [key: string]: number | string
                                                }
                                              | undefined
                                          }
                                        | undefined
                                    }[]
                                  | undefined
                                nodeSelector?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                                tolerations?:
                                  | {
                                      effect?: string | undefined
                                      key?: string | undefined
                                      operator?: string | undefined
                                      tolerationSeconds?: number | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        typhaMetricsPort?: number | undefined
        variant?: ('Calico' | 'TigeraSecureEnterprise') | undefined
      }
    | undefined
  status?:
    | {
        computed?:
          | {
              calicoKubeControllersDeployment?:
                | {
                    metadata?:
                      | {
                          annotations?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                          labels?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                        }
                      | undefined
                    spec?:
                      | {
                          minReadySeconds?: number | undefined
                          template?:
                            | {
                                metadata?:
                                  | {
                                      annotations?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                      labels?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                    }
                                  | undefined
                                spec?:
                                  | {
                                      affinity?:
                                        | {
                                            nodeAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        preference: {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchFields?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        nodeSelectorTerms: {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchFields?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                        }[]
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                            podAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        podAffinityTerm: {
                                                          labelSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaceSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaces?:
                                                            | string[]
                                                            | undefined
                                                          topologyKey: string
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        labelSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaceSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaces?:
                                                          | string[]
                                                          | undefined
                                                        topologyKey: string
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                            podAntiAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        podAffinityTerm: {
                                                          labelSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaceSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaces?:
                                                            | string[]
                                                            | undefined
                                                          topologyKey: string
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        labelSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaceSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaces?:
                                                          | string[]
                                                          | undefined
                                                        topologyKey: string
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      containers?:
                                        | {
                                            name: 'calico-kube-controllers'
                                            resources?:
                                              | {
                                                  limits?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                  requests?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                          }[]
                                        | undefined
                                      nodeSelector?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                      tolerations?:
                                        | {
                                            effect?: string | undefined
                                            key?: string | undefined
                                            operator?: string | undefined
                                            tolerationSeconds?:
                                              | number
                                              | undefined
                                            value?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              calicoNetwork?:
                | {
                    bgp?: ('Enabled' | 'Disabled') | undefined
                    containerIPForwarding?: ('Enabled' | 'Disabled') | undefined
                    hostPorts?: ('Enabled' | 'Disabled') | undefined
                    ipPools?:
                      | {
                          blockSize?: number | undefined
                          cidr: string
                          disableBGPExport?: boolean | undefined
                          encapsulation?:
                            | (
                                | 'IPIPCrossSubnet'
                                | 'IPIP'
                                | 'VXLAN'
                                | 'VXLANCrossSubnet'
                                | 'None'
                              )
                            | undefined
                          natOutgoing?: ('Enabled' | 'Disabled') | undefined
                          nodeSelector?: string | undefined
                        }[]
                      | undefined
                    linuxDataplane?: ('Iptables' | 'BPF' | 'VPP') | undefined
                    mtu?: number | undefined
                    multiInterfaceMode?: ('None' | 'Multus') | undefined
                    nodeAddressAutodetectionV4?:
                      | {
                          canReach?: string | undefined
                          cidrs?: string[] | undefined
                          firstFound?: boolean | undefined
                          interface?: string | undefined
                          kubernetes?: 'NodeInternalIP' | undefined
                          skipInterface?: string | undefined
                        }
                      | undefined
                    nodeAddressAutodetectionV6?:
                      | {
                          canReach?: string | undefined
                          cidrs?: string[] | undefined
                          firstFound?: boolean | undefined
                          interface?: string | undefined
                          kubernetes?: 'NodeInternalIP' | undefined
                          skipInterface?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              calicoNodeDaemonSet?:
                | {
                    metadata?:
                      | {
                          annotations?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                          labels?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                        }
                      | undefined
                    spec?:
                      | {
                          minReadySeconds?: number | undefined
                          template?:
                            | {
                                metadata?:
                                  | {
                                      annotations?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                      labels?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                    }
                                  | undefined
                                spec?:
                                  | {
                                      affinity?:
                                        | {
                                            nodeAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        preference: {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchFields?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        nodeSelectorTerms: {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchFields?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                        }[]
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                            podAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        podAffinityTerm: {
                                                          labelSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaceSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaces?:
                                                            | string[]
                                                            | undefined
                                                          topologyKey: string
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        labelSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaceSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaces?:
                                                          | string[]
                                                          | undefined
                                                        topologyKey: string
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                            podAntiAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        podAffinityTerm: {
                                                          labelSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaceSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaces?:
                                                            | string[]
                                                            | undefined
                                                          topologyKey: string
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        labelSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaceSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaces?:
                                                          | string[]
                                                          | undefined
                                                        topologyKey: string
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      containers?:
                                        | {
                                            name: 'calico-node'
                                            resources?:
                                              | {
                                                  limits?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                  requests?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                          }[]
                                        | undefined
                                      initContainers?:
                                        | {
                                            name:
                                              | 'install-cni'
                                              | 'hostpath-init'
                                              | 'flexvol-driver'
                                              | 'mount-bpffs'
                                              | 'node-certs-key-cert-provisioner'
                                              | 'calico-node-prometheus-server-tls-key-cert-provisioner'
                                            resources?:
                                              | {
                                                  limits?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                  requests?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                          }[]
                                        | undefined
                                      nodeSelector?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                      tolerations?:
                                        | {
                                            effect?: string | undefined
                                            key?: string | undefined
                                            operator?: string | undefined
                                            tolerationSeconds?:
                                              | number
                                              | undefined
                                            value?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              calicoWindowsUpgradeDaemonSet?:
                | {
                    metadata?:
                      | {
                          annotations?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                          labels?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                        }
                      | undefined
                    spec?:
                      | {
                          minReadySeconds?: number | undefined
                          template?:
                            | {
                                metadata?:
                                  | {
                                      annotations?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                      labels?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                    }
                                  | undefined
                                spec?:
                                  | {
                                      affinity?:
                                        | {
                                            nodeAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        preference: {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchFields?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        nodeSelectorTerms: {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchFields?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                        }[]
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                            podAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        podAffinityTerm: {
                                                          labelSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaceSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaces?:
                                                            | string[]
                                                            | undefined
                                                          topologyKey: string
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        labelSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaceSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaces?:
                                                          | string[]
                                                          | undefined
                                                        topologyKey: string
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                            podAntiAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        podAffinityTerm: {
                                                          labelSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaceSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaces?:
                                                            | string[]
                                                            | undefined
                                                          topologyKey: string
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        labelSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaceSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaces?:
                                                          | string[]
                                                          | undefined
                                                        topologyKey: string
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      containers?:
                                        | {
                                            name: 'calico-windows-upgrade'
                                            resources?:
                                              | {
                                                  limits?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                  requests?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                          }[]
                                        | undefined
                                      nodeSelector?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                      tolerations?:
                                        | {
                                            effect?: string | undefined
                                            key?: string | undefined
                                            operator?: string | undefined
                                            tolerationSeconds?:
                                              | number
                                              | undefined
                                            value?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              certificateManagement?:
                | {
                    caCert: string
                    keyAlgorithm?:
                      | (
                          | ''
                          | 'RSAWithSize2048'
                          | 'RSAWithSize4096'
                          | 'RSAWithSize8192'
                          | 'ECDSAWithCurve256'
                          | 'ECDSAWithCurve384'
                          | 'ECDSAWithCurve521'
                        )
                      | undefined
                    signatureAlgorithm?:
                      | (
                          | ''
                          | 'SHA256WithRSA'
                          | 'SHA384WithRSA'
                          | 'SHA512WithRSA'
                          | 'ECDSAWithSHA256'
                          | 'ECDSAWithSHA384'
                          | 'ECDSAWithSHA512'
                        )
                      | undefined
                    signerName: string
                  }
                | undefined
              cni?:
                | {
                    ipam?:
                      | {
                          type:
                            | 'Calico'
                            | 'HostLocal'
                            | 'AmazonVPC'
                            | 'AzureVNET'
                        }
                      | undefined
                    type: 'Calico' | 'GKE' | 'AmazonVPC' | 'AzureVNET'
                  }
                | undefined
              componentResources?:
                | {
                    componentName: 'Node' | 'Typha' | 'KubeControllers'
                    resourceRequirements: {
                      limits?:
                        | {
                            [key: string]: number | string
                          }
                        | undefined
                      requests?:
                        | {
                            [key: string]: number | string
                          }
                        | undefined
                    }
                  }[]
                | undefined
              controlPlaneNodeSelector?:
                | {
                    [key: string]: string
                  }
                | undefined
              controlPlaneReplicas?: number | undefined
              controlPlaneTolerations?:
                | {
                    effect?: string | undefined
                    key?: string | undefined
                    operator?: string | undefined
                    tolerationSeconds?: number | undefined
                    value?: string | undefined
                  }[]
                | undefined
              flexVolumePath?: string | undefined
              imagePath?: string | undefined
              imagePrefix?: string | undefined
              imagePullSecrets?:
                | {
                    name?: string | undefined
                  }[]
                | undefined
              kubeletVolumePluginPath?: string | undefined
              kubernetesProvider?:
                | (
                    | ''
                    | 'EKS'
                    | 'GKE'
                    | 'AKS'
                    | 'OpenShift'
                    | 'DockerEnterprise'
                    | 'RKE2'
                  )
                | undefined
              nodeMetricsPort?: number | undefined
              nodeUpdateStrategy?:
                | {
                    rollingUpdate?:
                      | {
                          maxSurge?: (number | string) | undefined
                          maxUnavailable?: (number | string) | undefined
                        }
                      | undefined
                    type?: string | undefined
                  }
                | undefined
              nonPrivileged?: string | undefined
              registry?: string | undefined
              typhaAffinity?:
                | {
                    nodeAffinity?:
                      | {
                          preferredDuringSchedulingIgnoredDuringExecution?:
                            | {
                                preference: {
                                  matchExpressions?:
                                    | {
                                        key: string
                                        operator: string
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                  matchFields?:
                                    | {
                                        key: string
                                        operator: string
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                }
                                weight: number
                              }[]
                            | undefined
                          requiredDuringSchedulingIgnoredDuringExecution?:
                            | {
                                nodeSelectorTerms: {
                                  matchExpressions?:
                                    | {
                                        key: string
                                        operator: string
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                  matchFields?:
                                    | {
                                        key: string
                                        operator: string
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                }[]
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              typhaDeployment?:
                | {
                    metadata?:
                      | {
                          annotations?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                          labels?:
                            | {
                                [key: string]: string
                              }
                            | undefined
                        }
                      | undefined
                    spec?:
                      | {
                          minReadySeconds?: number | undefined
                          template?:
                            | {
                                metadata?:
                                  | {
                                      annotations?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                      labels?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                    }
                                  | undefined
                                spec?:
                                  | {
                                      affinity?:
                                        | {
                                            nodeAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        preference: {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchFields?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        nodeSelectorTerms: {
                                                          matchExpressions?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                          matchFields?:
                                                            | {
                                                                key: string
                                                                operator: string
                                                                values?:
                                                                  | string[]
                                                                  | undefined
                                                              }[]
                                                            | undefined
                                                        }[]
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                            podAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        podAffinityTerm: {
                                                          labelSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaceSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaces?:
                                                            | string[]
                                                            | undefined
                                                          topologyKey: string
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        labelSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaceSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaces?:
                                                          | string[]
                                                          | undefined
                                                        topologyKey: string
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                            podAntiAffinity?:
                                              | {
                                                  preferredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        podAffinityTerm: {
                                                          labelSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaceSelector?:
                                                            | {
                                                                matchExpressions?:
                                                                  | {
                                                                      key: string
                                                                      operator: string
                                                                      values?:
                                                                        | string[]
                                                                        | undefined
                                                                    }[]
                                                                  | undefined
                                                                matchLabels?:
                                                                  | {
                                                                      [
                                                                        key: string
                                                                      ]: string
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                          namespaces?:
                                                            | string[]
                                                            | undefined
                                                          topologyKey: string
                                                        }
                                                        weight: number
                                                      }[]
                                                    | undefined
                                                  requiredDuringSchedulingIgnoredDuringExecution?:
                                                    | {
                                                        labelSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaceSelector?:
                                                          | {
                                                              matchExpressions?:
                                                                | {
                                                                    key: string
                                                                    operator: string
                                                                    values?:
                                                                      | string[]
                                                                      | undefined
                                                                  }[]
                                                                | undefined
                                                              matchLabels?:
                                                                | {
                                                                    [
                                                                      key: string
                                                                    ]: string
                                                                  }
                                                                | undefined
                                                            }
                                                          | undefined
                                                        namespaces?:
                                                          | string[]
                                                          | undefined
                                                        topologyKey: string
                                                      }[]
                                                    | undefined
                                                }
                                              | undefined
                                          }
                                        | undefined
                                      containers?:
                                        | {
                                            name: 'calico-typha'
                                            resources?:
                                              | {
                                                  limits?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                  requests?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                          }[]
                                        | undefined
                                      initContainers?:
                                        | {
                                            name: 'typha-certs-key-cert-provisioner'
                                            resources?:
                                              | {
                                                  limits?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                  requests?:
                                                    | {
                                                        [key: string]:
                                                          | number
                                                          | string
                                                      }
                                                    | undefined
                                                }
                                              | undefined
                                          }[]
                                        | undefined
                                      nodeSelector?:
                                        | {
                                            [key: string]: string
                                          }
                                        | undefined
                                      tolerations?:
                                        | {
                                            effect?: string | undefined
                                            key?: string | undefined
                                            operator?: string | undefined
                                            tolerationSeconds?:
                                              | number
                                              | undefined
                                            value?: string | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              typhaMetricsPort?: number | undefined
              variant?: ('Calico' | 'TigeraSecureEnterprise') | undefined
            }
          | undefined
        conditions?:
          | {
              lastTransitionTime: string
              message: string
              observedGeneration?: number | undefined
              reason: string
              status: 'True' | 'False' | 'Unknown'
              type: string
            }[]
          | undefined
        imageSet?: string | undefined
        mtu?: number | undefined
        variant?: ('Calico' | 'TigeraSecureEnterprise') | undefined
      }
    | undefined
}
export type IoTigeraOperatorV1InstallationList = {
  apiVersion?: string | undefined
  items: IoTigeraOperatorV1Installation[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoTigeraOperatorV1TigeraStatus = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: object | undefined
  status?:
    | {
        conditions: {
          lastTransitionTime: string
          message?: string | undefined
          observedGeneration?: number | undefined
          reason?: string | undefined
          status: string
          type: string
        }[]
      }
    | undefined
}
export type IoTigeraOperatorV1TigeraStatusList = {
  apiVersion?: string | undefined
  items: IoTigeraOperatorV1TigeraStatus[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
