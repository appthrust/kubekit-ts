import { apiClient, type Options } from '../../client'
export const getBatchV1ApiResources = (
  args: GetBatchV1ApiResourcesApiArg,
  options?: Options
) => {
  return apiClient<GetBatchV1ApiResourcesApiResponse>(
    { path: `/apis/batch/v1/` },
    options
  )
}
export const listBatchV1CronJobForAllNamespaces = (
  args: ListBatchV1CronJobForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListBatchV1CronJobForAllNamespacesApiResponse>(
    {
      path: `/apis/batch/v1/cronjobs`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
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
export const listBatchV1JobForAllNamespaces = (
  args: ListBatchV1JobForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListBatchV1JobForAllNamespacesApiResponse>(
    {
      path: `/apis/batch/v1/jobs`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
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
export const listBatchV1NamespacedCronJob = (
  args: ListBatchV1NamespacedCronJobApiArg,
  options?: Options
) => {
  return apiClient<ListBatchV1NamespacedCronJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs`,
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
export const createBatchV1NamespacedCronJob = (
  args: CreateBatchV1NamespacedCronJobApiArg,
  options?: Options
) => {
  return apiClient<CreateBatchV1NamespacedCronJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs`,
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
export const deleteBatchV1CollectionNamespacedCronJob = (
  args: DeleteBatchV1CollectionNamespacedCronJobApiArg,
  options?: Options
) => {
  return apiClient<DeleteBatchV1CollectionNamespacedCronJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        continue: args['continue'],
        dryRun: args.dryRun,
        fieldSelector: args.fieldSelector,
        gracePeriodSeconds: args.gracePeriodSeconds,
        labelSelector: args.labelSelector,
        limit: args.limit,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
      },
    },
    options
  )
}
export const readBatchV1NamespacedCronJob = (
  args: ReadBatchV1NamespacedCronJobApiArg,
  options?: Options
) => {
  return apiClient<ReadBatchV1NamespacedCronJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceBatchV1NamespacedCronJob = (
  args: ReplaceBatchV1NamespacedCronJobApiArg,
  options?: Options
) => {
  return apiClient<ReplaceBatchV1NamespacedCronJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs/${args.name}`,
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
export const deleteBatchV1NamespacedCronJob = (
  args: DeleteBatchV1NamespacedCronJobApiArg,
  options?: Options
) => {
  return apiClient<DeleteBatchV1NamespacedCronJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs/${args.name}`,
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
export const patchBatchV1NamespacedCronJob = (
  args: PatchBatchV1NamespacedCronJobApiArg,
  options?: Options
) => {
  return apiClient<PatchBatchV1NamespacedCronJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs/${args.name}`,
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
export const readBatchV1NamespacedCronJobStatus = (
  args: ReadBatchV1NamespacedCronJobStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadBatchV1NamespacedCronJobStatusApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs/${args.name}/status`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceBatchV1NamespacedCronJobStatus = (
  args: ReplaceBatchV1NamespacedCronJobStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceBatchV1NamespacedCronJobStatusApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs/${args.name}/status`,
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
export const patchBatchV1NamespacedCronJobStatus = (
  args: PatchBatchV1NamespacedCronJobStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchBatchV1NamespacedCronJobStatusApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/cronjobs/${args.name}/status`,
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
export const listBatchV1NamespacedJob = (
  args: ListBatchV1NamespacedJobApiArg,
  options?: Options
) => {
  return apiClient<ListBatchV1NamespacedJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs`,
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
export const createBatchV1NamespacedJob = (
  args: CreateBatchV1NamespacedJobApiArg,
  options?: Options
) => {
  return apiClient<CreateBatchV1NamespacedJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs`,
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
export const deleteBatchV1CollectionNamespacedJob = (
  args: DeleteBatchV1CollectionNamespacedJobApiArg,
  options?: Options
) => {
  return apiClient<DeleteBatchV1CollectionNamespacedJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs`,
      method: 'DELETE',
      body: args.body,
      contentType: args.contentType,
      params: {
        pretty: args.pretty,
        continue: args['continue'],
        dryRun: args.dryRun,
        fieldSelector: args.fieldSelector,
        gracePeriodSeconds: args.gracePeriodSeconds,
        labelSelector: args.labelSelector,
        limit: args.limit,
        orphanDependents: args.orphanDependents,
        propagationPolicy: args.propagationPolicy,
        resourceVersion: args.resourceVersion,
        resourceVersionMatch: args.resourceVersionMatch,
        sendInitialEvents: args.sendInitialEvents,
        timeoutSeconds: args.timeoutSeconds,
      },
    },
    options
  )
}
export const readBatchV1NamespacedJob = (
  args: ReadBatchV1NamespacedJobApiArg,
  options?: Options
) => {
  return apiClient<ReadBatchV1NamespacedJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceBatchV1NamespacedJob = (
  args: ReplaceBatchV1NamespacedJobApiArg,
  options?: Options
) => {
  return apiClient<ReplaceBatchV1NamespacedJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs/${args.name}`,
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
export const deleteBatchV1NamespacedJob = (
  args: DeleteBatchV1NamespacedJobApiArg,
  options?: Options
) => {
  return apiClient<DeleteBatchV1NamespacedJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs/${args.name}`,
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
export const patchBatchV1NamespacedJob = (
  args: PatchBatchV1NamespacedJobApiArg,
  options?: Options
) => {
  return apiClient<PatchBatchV1NamespacedJobApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs/${args.name}`,
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
export const readBatchV1NamespacedJobStatus = (
  args: ReadBatchV1NamespacedJobStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadBatchV1NamespacedJobStatusApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs/${args.name}/status`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceBatchV1NamespacedJobStatus = (
  args: ReplaceBatchV1NamespacedJobStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceBatchV1NamespacedJobStatusApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs/${args.name}/status`,
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
export const patchBatchV1NamespacedJobStatus = (
  args: PatchBatchV1NamespacedJobStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchBatchV1NamespacedJobStatusApiResponse>(
    {
      path: `/apis/batch/v1/namespaces/${args['namespace']}/jobs/${args.name}/status`,
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
export const watchBatchV1CronJobListForAllNamespaces = (
  args: WatchBatchV1CronJobListForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<WatchBatchV1CronJobListForAllNamespacesApiResponse>(
    {
      path: `/apis/batch/v1/watch/cronjobs`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
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
export const watchBatchV1JobListForAllNamespaces = (
  args: WatchBatchV1JobListForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<WatchBatchV1JobListForAllNamespacesApiResponse>(
    {
      path: `/apis/batch/v1/watch/jobs`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
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
export const watchBatchV1NamespacedCronJobList = (
  args: WatchBatchV1NamespacedCronJobListApiArg,
  options?: Options
) => {
  return apiClient<WatchBatchV1NamespacedCronJobListApiResponse>(
    {
      path: `/apis/batch/v1/watch/namespaces/${args['namespace']}/cronjobs`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
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
export const watchBatchV1NamespacedCronJob = (
  args: WatchBatchV1NamespacedCronJobApiArg,
  options?: Options
) => {
  return apiClient<WatchBatchV1NamespacedCronJobApiResponse>(
    {
      path: `/apis/batch/v1/watch/namespaces/${args['namespace']}/cronjobs/${args.name}`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
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
export const watchBatchV1NamespacedJobList = (
  args: WatchBatchV1NamespacedJobListApiArg,
  options?: Options
) => {
  return apiClient<WatchBatchV1NamespacedJobListApiResponse>(
    {
      path: `/apis/batch/v1/watch/namespaces/${args['namespace']}/jobs`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
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
export const watchBatchV1NamespacedJob = (
  args: WatchBatchV1NamespacedJobApiArg,
  options?: Options
) => {
  return apiClient<WatchBatchV1NamespacedJobApiResponse>(
    {
      path: `/apis/batch/v1/watch/namespaces/${args['namespace']}/jobs/${args.name}`,
      params: {
        allowWatchBookmarks: args.allowWatchBookmarks,
        continue: args['continue'],
        fieldSelector: args.fieldSelector,
        labelSelector: args.labelSelector,
        limit: args.limit,
        pretty: args.pretty,
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
export type GetBatchV1ApiResourcesApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiResourceList
export type GetBatchV1ApiResourcesApiArg = void
export type ListBatchV1CronJobForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SApiBatchV1CronJobList
export type ListBatchV1CronJobForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. */
  pretty?: string
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
export type ListBatchV1JobForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SApiBatchV1JobList
export type ListBatchV1JobForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. */
  pretty?: string
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
export type ListBatchV1NamespacedCronJobApiResponse =
  /** status 200 OK */ IoK8SApiBatchV1CronJobList
export type ListBatchV1NamespacedCronJobApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
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
export type CreateBatchV1NamespacedCronJobApiResponse = /** status 200 OK */
  | IoK8SApiBatchV1CronJob
  | /** status 201 Created */ IoK8SApiBatchV1CronJob
  | /** status 202 Accepted */ IoK8SApiBatchV1CronJob
export type CreateBatchV1NamespacedCronJobApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiBatchV1CronJob
}
export type DeleteBatchV1CollectionNamespacedCronJobApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteBatchV1CollectionNamespacedCronJobApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
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
} & {
  contentType?: string
  body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type ReadBatchV1NamespacedCronJobApiResponse =
  /** status 200 OK */ IoK8SApiBatchV1CronJob
export type ReadBatchV1NamespacedCronJobApiArg = {
  /** name of the CronJob */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
}
export type ReplaceBatchV1NamespacedCronJobApiResponse = /** status 200 OK */
  | IoK8SApiBatchV1CronJob
  | /** status 201 Created */ IoK8SApiBatchV1CronJob
export type ReplaceBatchV1NamespacedCronJobApiArg = {
  /** name of the CronJob */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiBatchV1CronJob
}
export type DeleteBatchV1NamespacedCronJobApiResponse = /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteBatchV1NamespacedCronJobApiArg = {
  /** name of the CronJob */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & {
  contentType?: string
  body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchBatchV1NamespacedCronJobApiResponse = /** status 200 OK */
  | IoK8SApiBatchV1CronJob
  | /** status 201 Created */ IoK8SApiBatchV1CronJob
export type PatchBatchV1NamespacedCronJobApiArg = {
  /** name of the CronJob */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
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
      body: IoK8SApiBatchV1CronJob
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/strategic-merge-patch+json'
      body: IoK8SApiBatchV1CronJob
    }
)
export type ReadBatchV1NamespacedCronJobStatusApiResponse =
  /** status 200 OK */ IoK8SApiBatchV1CronJob
export type ReadBatchV1NamespacedCronJobStatusApiArg = {
  /** name of the CronJob */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
}
export type ReplaceBatchV1NamespacedCronJobStatusApiResponse =
  /** status 200 OK */
    | IoK8SApiBatchV1CronJob
    | /** status 201 Created */ IoK8SApiBatchV1CronJob
export type ReplaceBatchV1NamespacedCronJobStatusApiArg = {
  /** name of the CronJob */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiBatchV1CronJob
}
export type PatchBatchV1NamespacedCronJobStatusApiResponse =
  /** status 200 OK */
    | IoK8SApiBatchV1CronJob
    | /** status 201 Created */ IoK8SApiBatchV1CronJob
export type PatchBatchV1NamespacedCronJobStatusApiArg = {
  /** name of the CronJob */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
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
      body: IoK8SApiBatchV1CronJob
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/strategic-merge-patch+json'
      body: IoK8SApiBatchV1CronJob
    }
)
export type ListBatchV1NamespacedJobApiResponse =
  /** status 200 OK */ IoK8SApiBatchV1JobList
export type ListBatchV1NamespacedJobApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
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
export type CreateBatchV1NamespacedJobApiResponse = /** status 200 OK */
  | IoK8SApiBatchV1Job
  | /** status 201 Created */ IoK8SApiBatchV1Job
  | /** status 202 Accepted */ IoK8SApiBatchV1Job
export type CreateBatchV1NamespacedJobApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiBatchV1Job
}
export type DeleteBatchV1CollectionNamespacedJobApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteBatchV1CollectionNamespacedJobApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
    
    This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. */
  continue?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** A selector to restrict the list of returned objects by their fields. Defaults to everything. */
  fieldSelector?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** A selector to restrict the list of returned objects by their labels. Defaults to everything. */
  labelSelector?: string
  /** limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
    
    The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. */
  limit?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
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
} & {
  contentType?: string
  body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type ReadBatchV1NamespacedJobApiResponse =
  /** status 200 OK */ IoK8SApiBatchV1Job
export type ReadBatchV1NamespacedJobApiArg = {
  /** name of the Job */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
}
export type ReplaceBatchV1NamespacedJobApiResponse = /** status 200 OK */
  | IoK8SApiBatchV1Job
  | /** status 201 Created */ IoK8SApiBatchV1Job
export type ReplaceBatchV1NamespacedJobApiArg = {
  /** name of the Job */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiBatchV1Job
}
export type DeleteBatchV1NamespacedJobApiResponse = /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteBatchV1NamespacedJobApiArg = {
  /** name of the Job */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. */
  gracePeriodSeconds?: number
  /** Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. */
  orphanDependents?: boolean
  /** Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. */
  propagationPolicy?: string
} & {
  contentType?: string
  body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchBatchV1NamespacedJobApiResponse = /** status 200 OK */
  | IoK8SApiBatchV1Job
  | /** status 201 Created */ IoK8SApiBatchV1Job
export type PatchBatchV1NamespacedJobApiArg = {
  /** name of the Job */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
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
      body: IoK8SApiBatchV1Job
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/strategic-merge-patch+json'
      body: IoK8SApiBatchV1Job
    }
)
export type ReadBatchV1NamespacedJobStatusApiResponse =
  /** status 200 OK */ IoK8SApiBatchV1Job
export type ReadBatchV1NamespacedJobStatusApiArg = {
  /** name of the Job */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
}
export type ReplaceBatchV1NamespacedJobStatusApiResponse = /** status 200 OK */
  | IoK8SApiBatchV1Job
  | /** status 201 Created */ IoK8SApiBatchV1Job
export type ReplaceBatchV1NamespacedJobStatusApiArg = {
  /** name of the Job */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiBatchV1Job
}
export type PatchBatchV1NamespacedJobStatusApiResponse = /** status 200 OK */
  | IoK8SApiBatchV1Job
  | /** status 201 Created */ IoK8SApiBatchV1Job
export type PatchBatchV1NamespacedJobStatusApiArg = {
  /** name of the Job */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
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
      body: IoK8SApiBatchV1Job
    }
  | {
      contentType: 'application/json-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApimachineryPkgApisMetaV1Patch
    }
  | {
      contentType: 'application/strategic-merge-patch+json'
      body: IoK8SApiBatchV1Job
    }
)
export type WatchBatchV1CronJobListForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchBatchV1CronJobListForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. */
  pretty?: string
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
export type WatchBatchV1JobListForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchBatchV1JobListForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. */
  pretty?: string
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
export type WatchBatchV1NamespacedCronJobListApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchBatchV1NamespacedCronJobListApiArg = {
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
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
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
export type WatchBatchV1NamespacedCronJobApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchBatchV1NamespacedCronJobApiArg = {
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
  /** name of the CronJob */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
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
export type WatchBatchV1NamespacedJobListApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchBatchV1NamespacedJobListApiArg = {
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
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
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
export type WatchBatchV1NamespacedJobApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchBatchV1NamespacedJobApiArg = {
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
  /** name of the Job */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
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
export type IoK8SApimachineryPkgApisMetaV1ApiResource = {
  categories?: string[] | undefined
  group?: string | undefined
  kind: string
  name: string
  namespaced: boolean
  shortNames?: string[] | undefined
  singularName: string
  storageVersionHash?: string | undefined
  verbs: string[]
  version?: string | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ApiResourceList = {
  apiVersion?: string | undefined
  groupVersion: string
  kind?: string | undefined
  resources: IoK8SApimachineryPkgApisMetaV1ApiResource[]
}
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
export type IoK8SApiBatchV1PodFailurePolicyOnExitCodesRequirement = {
  containerName?: string | undefined
  operator: 'In' | 'NotIn'
  values: number[]
}
export type IoK8SApiBatchV1PodFailurePolicyOnPodConditionsPattern = {
  status: string
  type: string
}
export type IoK8SApiBatchV1PodFailurePolicyRule = {
  action: 'Count' | 'FailJob' | 'Ignore'
  onExitCodes?:
    | IoK8SApiBatchV1PodFailurePolicyOnExitCodesRequirement
    | undefined
  onPodConditions: IoK8SApiBatchV1PodFailurePolicyOnPodConditionsPattern[]
}
export type IoK8SApiBatchV1PodFailurePolicy = {
  rules: IoK8SApiBatchV1PodFailurePolicyRule[]
}
export type IoK8SApimachineryPkgApisMetaV1LabelSelectorRequirement = {
  key: string
  operator: string
  values?: string[] | undefined
}
export type IoK8SApimachineryPkgApisMetaV1LabelSelector = {
  matchExpressions?:
    | IoK8SApimachineryPkgApisMetaV1LabelSelectorRequirement[]
    | undefined
  matchLabels?:
    | {
        [key: string]: string
      }
    | undefined
}
export type IoK8SApiCoreV1NodeSelectorRequirement = {
  key: string
  operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'
  values?: string[] | undefined
}
export type IoK8SApiCoreV1NodeSelectorTerm = {
  matchExpressions?: IoK8SApiCoreV1NodeSelectorRequirement[] | undefined
  matchFields?: IoK8SApiCoreV1NodeSelectorRequirement[] | undefined
}
export type IoK8SApiCoreV1PreferredSchedulingTerm = {
  preference: IoK8SApiCoreV1NodeSelectorTerm
  weight: number
}
export type IoK8SApiCoreV1NodeSelector = {
  nodeSelectorTerms: IoK8SApiCoreV1NodeSelectorTerm[]
}
export type IoK8SApiCoreV1NodeAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1PreferredSchedulingTerm[]
    | undefined
  requiredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1NodeSelector
    | undefined
}
export type IoK8SApiCoreV1PodAffinityTerm = {
  labelSelector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  namespaceSelector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  namespaces?: string[] | undefined
  topologyKey: string
}
export type IoK8SApiCoreV1WeightedPodAffinityTerm = {
  podAffinityTerm: IoK8SApiCoreV1PodAffinityTerm
  weight: number
}
export type IoK8SApiCoreV1PodAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1WeightedPodAffinityTerm[]
    | undefined
  requiredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1PodAffinityTerm[]
    | undefined
}
export type IoK8SApiCoreV1PodAntiAffinity = {
  preferredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1WeightedPodAffinityTerm[]
    | undefined
  requiredDuringSchedulingIgnoredDuringExecution?:
    | IoK8SApiCoreV1PodAffinityTerm[]
    | undefined
}
export type IoK8SApiCoreV1Affinity = {
  nodeAffinity?: IoK8SApiCoreV1NodeAffinity | undefined
  podAffinity?: IoK8SApiCoreV1PodAffinity | undefined
  podAntiAffinity?: IoK8SApiCoreV1PodAntiAffinity | undefined
}
export type IoK8SApiCoreV1ConfigMapKeySelector = {
  key: string
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1ObjectFieldSelector = {
  apiVersion?: string | undefined
  fieldPath: string
}
export type IoK8SApimachineryPkgApiResourceQuantity = string | number
export type IoK8SApiCoreV1ResourceFieldSelector = {
  containerName?: string | undefined
  divisor?: IoK8SApimachineryPkgApiResourceQuantity | undefined
  resource: string
}
export type IoK8SApiCoreV1SecretKeySelector = {
  key: string
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1EnvVarSource = {
  configMapKeyRef?: IoK8SApiCoreV1ConfigMapKeySelector | undefined
  fieldRef?: IoK8SApiCoreV1ObjectFieldSelector | undefined
  resourceFieldRef?: IoK8SApiCoreV1ResourceFieldSelector | undefined
  secretKeyRef?: IoK8SApiCoreV1SecretKeySelector | undefined
}
export type IoK8SApiCoreV1EnvVar = {
  name: string
  value?: string | undefined
  valueFrom?: IoK8SApiCoreV1EnvVarSource | undefined
}
export type IoK8SApiCoreV1ConfigMapEnvSource = {
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1SecretEnvSource = {
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1EnvFromSource = {
  configMapRef?: IoK8SApiCoreV1ConfigMapEnvSource | undefined
  prefix?: string | undefined
  secretRef?: IoK8SApiCoreV1SecretEnvSource | undefined
}
export type IoK8SApiCoreV1ExecAction = {
  command?: string[] | undefined
}
export type IoK8SApiCoreV1HttpHeader = {
  name: string
  value: string
}
export type IoK8SApimachineryPkgUtilIntstrIntOrString = number | string
export type IoK8SApiCoreV1HttpGetAction = {
  host?: string | undefined
  httpHeaders?: IoK8SApiCoreV1HttpHeader[] | undefined
  path?: string | undefined
  port: IoK8SApimachineryPkgUtilIntstrIntOrString
  scheme?: ('HTTP' | 'HTTPS') | undefined
}
export type IoK8SApiCoreV1TcpSocketAction = {
  host?: string | undefined
  port: IoK8SApimachineryPkgUtilIntstrIntOrString
}
export type IoK8SApiCoreV1LifecycleHandler = {
  exec?: IoK8SApiCoreV1ExecAction | undefined
  httpGet?: IoK8SApiCoreV1HttpGetAction | undefined
  tcpSocket?: IoK8SApiCoreV1TcpSocketAction | undefined
}
export type IoK8SApiCoreV1Lifecycle = {
  postStart?: IoK8SApiCoreV1LifecycleHandler | undefined
  preStop?: IoK8SApiCoreV1LifecycleHandler | undefined
}
export type IoK8SApiCoreV1GrpcAction = {
  port: number
  service?: string | undefined
}
export type IoK8SApiCoreV1Probe = {
  exec?: IoK8SApiCoreV1ExecAction | undefined
  failureThreshold?: number | undefined
  grpc?: IoK8SApiCoreV1GrpcAction | undefined
  httpGet?: IoK8SApiCoreV1HttpGetAction | undefined
  initialDelaySeconds?: number | undefined
  periodSeconds?: number | undefined
  successThreshold?: number | undefined
  tcpSocket?: IoK8SApiCoreV1TcpSocketAction | undefined
  terminationGracePeriodSeconds?: number | undefined
  timeoutSeconds?: number | undefined
}
export type IoK8SApiCoreV1ContainerPort = {
  containerPort: number
  hostIP?: string | undefined
  hostPort?: number | undefined
  name?: string | undefined
  protocol?: ('SCTP' | 'TCP' | 'UDP') | undefined
}
export type IoK8SApiCoreV1ContainerResizePolicy = {
  resourceName: string
  restartPolicy: string
}
export type IoK8SApiCoreV1ResourceClaim = {
  name: string
}
export type IoK8SApiCoreV1ResourceRequirements = {
  claims?: IoK8SApiCoreV1ResourceClaim[] | undefined
  limits?:
    | {
        [key: string]: IoK8SApimachineryPkgApiResourceQuantity
      }
    | undefined
  requests?:
    | {
        [key: string]: IoK8SApimachineryPkgApiResourceQuantity
      }
    | undefined
}
export type IoK8SApiCoreV1Capabilities = {
  add?: string[] | undefined
  drop?: string[] | undefined
}
export type IoK8SApiCoreV1SeLinuxOptions = {
  level?: string | undefined
  role?: string | undefined
  type?: string | undefined
  user?: string | undefined
}
export type IoK8SApiCoreV1SeccompProfile = {
  localhostProfile?: string | undefined
  type: 'Localhost' | 'RuntimeDefault' | 'Unconfined'
}
export type IoK8SApiCoreV1WindowsSecurityContextOptions = {
  gmsaCredentialSpec?: string | undefined
  gmsaCredentialSpecName?: string | undefined
  hostProcess?: boolean | undefined
  runAsUserName?: string | undefined
}
export type IoK8SApiCoreV1SecurityContext = {
  allowPrivilegeEscalation?: boolean | undefined
  capabilities?: IoK8SApiCoreV1Capabilities | undefined
  privileged?: boolean | undefined
  procMount?: ('Default' | 'Unmasked') | undefined
  readOnlyRootFilesystem?: boolean | undefined
  runAsGroup?: number | undefined
  runAsNonRoot?: boolean | undefined
  runAsUser?: number | undefined
  seLinuxOptions?: IoK8SApiCoreV1SeLinuxOptions | undefined
  seccompProfile?: IoK8SApiCoreV1SeccompProfile | undefined
  windowsOptions?: IoK8SApiCoreV1WindowsSecurityContextOptions | undefined
}
export type IoK8SApiCoreV1VolumeDevice = {
  devicePath: string
  name: string
}
export type IoK8SApiCoreV1VolumeMount = {
  mountPath: string
  mountPropagation?: ('Bidirectional' | 'HostToContainer' | 'None') | undefined
  name: string
  readOnly?: boolean | undefined
  subPath?: string | undefined
  subPathExpr?: string | undefined
}
export type IoK8SApiCoreV1Container = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: IoK8SApiCoreV1EnvVar[] | undefined
  envFrom?: IoK8SApiCoreV1EnvFromSource[] | undefined
  image?: string | undefined
  imagePullPolicy?: ('Always' | 'IfNotPresent' | 'Never') | undefined
  lifecycle?: IoK8SApiCoreV1Lifecycle | undefined
  livenessProbe?: IoK8SApiCoreV1Probe | undefined
  name: string
  ports?: IoK8SApiCoreV1ContainerPort[] | undefined
  readinessProbe?: IoK8SApiCoreV1Probe | undefined
  resizePolicy?: IoK8SApiCoreV1ContainerResizePolicy[] | undefined
  resources?: IoK8SApiCoreV1ResourceRequirements | undefined
  securityContext?: IoK8SApiCoreV1SecurityContext | undefined
  startupProbe?: IoK8SApiCoreV1Probe | undefined
  stdin?: boolean | undefined
  stdinOnce?: boolean | undefined
  terminationMessagePath?: string | undefined
  terminationMessagePolicy?: ('FallbackToLogsOnError' | 'File') | undefined
  tty?: boolean | undefined
  volumeDevices?: IoK8SApiCoreV1VolumeDevice[] | undefined
  volumeMounts?: IoK8SApiCoreV1VolumeMount[] | undefined
  workingDir?: string | undefined
}
export type IoK8SApiCoreV1PodDnsConfigOption = {
  name?: string | undefined
  value?: string | undefined
}
export type IoK8SApiCoreV1PodDnsConfig = {
  nameservers?: string[] | undefined
  options?: IoK8SApiCoreV1PodDnsConfigOption[] | undefined
  searches?: string[] | undefined
}
export type IoK8SApiCoreV1EphemeralContainer = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: IoK8SApiCoreV1EnvVar[] | undefined
  envFrom?: IoK8SApiCoreV1EnvFromSource[] | undefined
  image?: string | undefined
  imagePullPolicy?: ('Always' | 'IfNotPresent' | 'Never') | undefined
  lifecycle?: IoK8SApiCoreV1Lifecycle | undefined
  livenessProbe?: IoK8SApiCoreV1Probe | undefined
  name: string
  ports?: IoK8SApiCoreV1ContainerPort[] | undefined
  readinessProbe?: IoK8SApiCoreV1Probe | undefined
  resizePolicy?: IoK8SApiCoreV1ContainerResizePolicy[] | undefined
  resources?: IoK8SApiCoreV1ResourceRequirements | undefined
  securityContext?: IoK8SApiCoreV1SecurityContext | undefined
  startupProbe?: IoK8SApiCoreV1Probe | undefined
  stdin?: boolean | undefined
  stdinOnce?: boolean | undefined
  targetContainerName?: string | undefined
  terminationMessagePath?: string | undefined
  terminationMessagePolicy?: ('FallbackToLogsOnError' | 'File') | undefined
  tty?: boolean | undefined
  volumeDevices?: IoK8SApiCoreV1VolumeDevice[] | undefined
  volumeMounts?: IoK8SApiCoreV1VolumeMount[] | undefined
  workingDir?: string | undefined
}
export type IoK8SApiCoreV1HostAlias = {
  hostnames?: string[] | undefined
  ip?: string | undefined
}
export type IoK8SApiCoreV1LocalObjectReference = {
  name?: string | undefined
}
export type IoK8SApiCoreV1PodOs = {
  name: string
}
export type IoK8SApiCoreV1PodReadinessGate = {
  conditionType: string
}
export type IoK8SApiCoreV1ClaimSource = {
  resourceClaimName?: string | undefined
  resourceClaimTemplateName?: string | undefined
}
export type IoK8SApiCoreV1PodResourceClaim = {
  name: string
  source?: IoK8SApiCoreV1ClaimSource | undefined
}
export type IoK8SApiCoreV1PodSchedulingGate = {
  name: string
}
export type IoK8SApiCoreV1Sysctl = {
  name: string
  value: string
}
export type IoK8SApiCoreV1PodSecurityContext = {
  fsGroup?: number | undefined
  fsGroupChangePolicy?: ('Always' | 'OnRootMismatch') | undefined
  runAsGroup?: number | undefined
  runAsNonRoot?: boolean | undefined
  runAsUser?: number | undefined
  seLinuxOptions?: IoK8SApiCoreV1SeLinuxOptions | undefined
  seccompProfile?: IoK8SApiCoreV1SeccompProfile | undefined
  supplementalGroups?: number[] | undefined
  sysctls?: IoK8SApiCoreV1Sysctl[] | undefined
  windowsOptions?: IoK8SApiCoreV1WindowsSecurityContextOptions | undefined
}
export type IoK8SApiCoreV1Toleration = {
  effect?: ('NoExecute' | 'NoSchedule' | 'PreferNoSchedule') | undefined
  key?: string | undefined
  operator?: ('Equal' | 'Exists') | undefined
  tolerationSeconds?: number | undefined
  value?: string | undefined
}
export type IoK8SApiCoreV1TopologySpreadConstraint = {
  labelSelector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  matchLabelKeys?: string[] | undefined
  maxSkew: number
  minDomains?: number | undefined
  nodeAffinityPolicy?: ('Honor' | 'Ignore') | undefined
  nodeTaintsPolicy?: ('Honor' | 'Ignore') | undefined
  topologyKey: string
  whenUnsatisfiable: 'DoNotSchedule' | 'ScheduleAnyway'
}
export type IoK8SApiCoreV1AwsElasticBlockStoreVolumeSource = {
  fsType?: string | undefined
  partition?: number | undefined
  readOnly?: boolean | undefined
  volumeID: string
}
export type IoK8SApiCoreV1AzureDiskVolumeSource = {
  cachingMode?: ('None' | 'ReadOnly' | 'ReadWrite') | undefined
  diskName: string
  diskURI: string
  fsType?: string | undefined
  kind?: ('Dedicated' | 'Managed' | 'Shared') | undefined
  readOnly?: boolean | undefined
}
export type IoK8SApiCoreV1AzureFileVolumeSource = {
  readOnly?: boolean | undefined
  secretName: string
  shareName: string
}
export type IoK8SApiCoreV1CephFsVolumeSource = {
  monitors: string[]
  path?: string | undefined
  readOnly?: boolean | undefined
  secretFile?: string | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  user?: string | undefined
}
export type IoK8SApiCoreV1CinderVolumeSource = {
  fsType?: string | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  volumeID: string
}
export type IoK8SApiCoreV1KeyToPath = {
  key: string
  mode?: number | undefined
  path: string
}
export type IoK8SApiCoreV1ConfigMapVolumeSource = {
  defaultMode?: number | undefined
  items?: IoK8SApiCoreV1KeyToPath[] | undefined
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1CsiVolumeSource = {
  driver: string
  fsType?: string | undefined
  nodePublishSecretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  readOnly?: boolean | undefined
  volumeAttributes?:
    | {
        [key: string]: string
      }
    | undefined
}
export type IoK8SApiCoreV1DownwardApiVolumeFile = {
  fieldRef?: IoK8SApiCoreV1ObjectFieldSelector | undefined
  mode?: number | undefined
  path: string
  resourceFieldRef?: IoK8SApiCoreV1ResourceFieldSelector | undefined
}
export type IoK8SApiCoreV1DownwardApiVolumeSource = {
  defaultMode?: number | undefined
  items?: IoK8SApiCoreV1DownwardApiVolumeFile[] | undefined
}
export type IoK8SApiCoreV1EmptyDirVolumeSource = {
  medium?: string | undefined
  sizeLimit?: IoK8SApimachineryPkgApiResourceQuantity | undefined
}
export type IoK8SApiCoreV1TypedLocalObjectReference = {
  apiGroup?: string | undefined
  kind: string
  name: string
}
export type IoK8SApiCoreV1TypedObjectReference = {
  apiGroup?: string | undefined
  kind: string
  name: string
  namespace?: string | undefined
}
export type IoK8SApiCoreV1PersistentVolumeClaimSpec = {
  accessModes?: string[] | undefined
  dataSource?: IoK8SApiCoreV1TypedLocalObjectReference | undefined
  dataSourceRef?: IoK8SApiCoreV1TypedObjectReference | undefined
  resources?: IoK8SApiCoreV1ResourceRequirements | undefined
  selector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  storageClassName?: string | undefined
  volumeMode?: ('Block' | 'Filesystem') | undefined
  volumeName?: string | undefined
}
export type IoK8SApiCoreV1PersistentVolumeClaimTemplate = {
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: IoK8SApiCoreV1PersistentVolumeClaimSpec
}
export type IoK8SApiCoreV1EphemeralVolumeSource = {
  volumeClaimTemplate?: IoK8SApiCoreV1PersistentVolumeClaimTemplate | undefined
}
export type IoK8SApiCoreV1FcVolumeSource = {
  fsType?: string | undefined
  lun?: number | undefined
  readOnly?: boolean | undefined
  targetWWNs?: string[] | undefined
  wwids?: string[] | undefined
}
export type IoK8SApiCoreV1FlexVolumeSource = {
  driver: string
  fsType?: string | undefined
  options?:
    | {
        [key: string]: string
      }
    | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
}
export type IoK8SApiCoreV1FlockerVolumeSource = {
  datasetName?: string | undefined
  datasetUUID?: string | undefined
}
export type IoK8SApiCoreV1GcePersistentDiskVolumeSource = {
  fsType?: string | undefined
  partition?: number | undefined
  pdName: string
  readOnly?: boolean | undefined
}
export type IoK8SApiCoreV1GitRepoVolumeSource = {
  directory?: string | undefined
  repository: string
  revision?: string | undefined
}
export type IoK8SApiCoreV1GlusterfsVolumeSource = {
  endpoints: string
  path: string
  readOnly?: boolean | undefined
}
export type IoK8SApiCoreV1HostPathVolumeSource = {
  path: string
  type?:
    | (
        | ''
        | 'BlockDevice'
        | 'CharDevice'
        | 'Directory'
        | 'DirectoryOrCreate'
        | 'File'
        | 'FileOrCreate'
        | 'Socket'
      )
    | undefined
}
export type IoK8SApiCoreV1IscsiVolumeSource = {
  chapAuthDiscovery?: boolean | undefined
  chapAuthSession?: boolean | undefined
  fsType?: string | undefined
  initiatorName?: string | undefined
  iqn: string
  iscsiInterface?: string | undefined
  lun: number
  portals?: string[] | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  targetPortal: string
}
export type IoK8SApiCoreV1NfsVolumeSource = {
  path: string
  readOnly?: boolean | undefined
  server: string
}
export type IoK8SApiCoreV1PersistentVolumeClaimVolumeSource = {
  claimName: string
  readOnly?: boolean | undefined
}
export type IoK8SApiCoreV1PhotonPersistentDiskVolumeSource = {
  fsType?: string | undefined
  pdID: string
}
export type IoK8SApiCoreV1PortworxVolumeSource = {
  fsType?: string | undefined
  readOnly?: boolean | undefined
  volumeID: string
}
export type IoK8SApiCoreV1ConfigMapProjection = {
  items?: IoK8SApiCoreV1KeyToPath[] | undefined
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1DownwardApiProjection = {
  items?: IoK8SApiCoreV1DownwardApiVolumeFile[] | undefined
}
export type IoK8SApiCoreV1SecretProjection = {
  items?: IoK8SApiCoreV1KeyToPath[] | undefined
  name?: string | undefined
  optional?: boolean | undefined
}
export type IoK8SApiCoreV1ServiceAccountTokenProjection = {
  audience?: string | undefined
  expirationSeconds?: number | undefined
  path: string
}
export type IoK8SApiCoreV1VolumeProjection = {
  configMap?: IoK8SApiCoreV1ConfigMapProjection | undefined
  downwardAPI?: IoK8SApiCoreV1DownwardApiProjection | undefined
  secret?: IoK8SApiCoreV1SecretProjection | undefined
  serviceAccountToken?: IoK8SApiCoreV1ServiceAccountTokenProjection | undefined
}
export type IoK8SApiCoreV1ProjectedVolumeSource = {
  defaultMode?: number | undefined
  sources?: IoK8SApiCoreV1VolumeProjection[] | undefined
}
export type IoK8SApiCoreV1QuobyteVolumeSource = {
  group?: string | undefined
  readOnly?: boolean | undefined
  registry: string
  tenant?: string | undefined
  user?: string | undefined
  volume: string
}
export type IoK8SApiCoreV1RbdVolumeSource = {
  fsType?: string | undefined
  image: string
  keyring?: string | undefined
  monitors: string[]
  pool?: string | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  user?: string | undefined
}
export type IoK8SApiCoreV1ScaleIoVolumeSource = {
  fsType?: string | undefined
  gateway: string
  protectionDomain?: string | undefined
  readOnly?: boolean | undefined
  secretRef: IoK8SApiCoreV1LocalObjectReference
  sslEnabled?: boolean | undefined
  storageMode?: string | undefined
  storagePool?: string | undefined
  system: string
  volumeName?: string | undefined
}
export type IoK8SApiCoreV1SecretVolumeSource = {
  defaultMode?: number | undefined
  items?: IoK8SApiCoreV1KeyToPath[] | undefined
  optional?: boolean | undefined
  secretName?: string | undefined
}
export type IoK8SApiCoreV1StorageOsVolumeSource = {
  fsType?: string | undefined
  readOnly?: boolean | undefined
  secretRef?: IoK8SApiCoreV1LocalObjectReference | undefined
  volumeName?: string | undefined
  volumeNamespace?: string | undefined
}
export type IoK8SApiCoreV1VsphereVirtualDiskVolumeSource = {
  fsType?: string | undefined
  storagePolicyID?: string | undefined
  storagePolicyName?: string | undefined
  volumePath: string
}
export type IoK8SApiCoreV1Volume = {
  awsElasticBlockStore?:
    | IoK8SApiCoreV1AwsElasticBlockStoreVolumeSource
    | undefined
  azureDisk?: IoK8SApiCoreV1AzureDiskVolumeSource | undefined
  azureFile?: IoK8SApiCoreV1AzureFileVolumeSource | undefined
  cephfs?: IoK8SApiCoreV1CephFsVolumeSource | undefined
  cinder?: IoK8SApiCoreV1CinderVolumeSource | undefined
  configMap?: IoK8SApiCoreV1ConfigMapVolumeSource | undefined
  csi?: IoK8SApiCoreV1CsiVolumeSource | undefined
  downwardAPI?: IoK8SApiCoreV1DownwardApiVolumeSource | undefined
  emptyDir?: IoK8SApiCoreV1EmptyDirVolumeSource | undefined
  ephemeral?: IoK8SApiCoreV1EphemeralVolumeSource | undefined
  fc?: IoK8SApiCoreV1FcVolumeSource | undefined
  flexVolume?: IoK8SApiCoreV1FlexVolumeSource | undefined
  flocker?: IoK8SApiCoreV1FlockerVolumeSource | undefined
  gcePersistentDisk?: IoK8SApiCoreV1GcePersistentDiskVolumeSource | undefined
  gitRepo?: IoK8SApiCoreV1GitRepoVolumeSource | undefined
  glusterfs?: IoK8SApiCoreV1GlusterfsVolumeSource | undefined
  hostPath?: IoK8SApiCoreV1HostPathVolumeSource | undefined
  iscsi?: IoK8SApiCoreV1IscsiVolumeSource | undefined
  name: string
  nfs?: IoK8SApiCoreV1NfsVolumeSource | undefined
  persistentVolumeClaim?:
    | IoK8SApiCoreV1PersistentVolumeClaimVolumeSource
    | undefined
  photonPersistentDisk?:
    | IoK8SApiCoreV1PhotonPersistentDiskVolumeSource
    | undefined
  portworxVolume?: IoK8SApiCoreV1PortworxVolumeSource | undefined
  projected?: IoK8SApiCoreV1ProjectedVolumeSource | undefined
  quobyte?: IoK8SApiCoreV1QuobyteVolumeSource | undefined
  rbd?: IoK8SApiCoreV1RbdVolumeSource | undefined
  scaleIO?: IoK8SApiCoreV1ScaleIoVolumeSource | undefined
  secret?: IoK8SApiCoreV1SecretVolumeSource | undefined
  storageos?: IoK8SApiCoreV1StorageOsVolumeSource | undefined
  vsphereVolume?: IoK8SApiCoreV1VsphereVirtualDiskVolumeSource | undefined
}
export type IoK8SApiCoreV1PodSpec = {
  activeDeadlineSeconds?: number | undefined
  affinity?: IoK8SApiCoreV1Affinity | undefined
  automountServiceAccountToken?: boolean | undefined
  containers: IoK8SApiCoreV1Container[]
  dnsConfig?: IoK8SApiCoreV1PodDnsConfig | undefined
  dnsPolicy?:
    | ('ClusterFirst' | 'ClusterFirstWithHostNet' | 'Default' | 'None')
    | undefined
  enableServiceLinks?: boolean | undefined
  ephemeralContainers?: IoK8SApiCoreV1EphemeralContainer[] | undefined
  hostAliases?: IoK8SApiCoreV1HostAlias[] | undefined
  hostIPC?: boolean | undefined
  hostNetwork?: boolean | undefined
  hostPID?: boolean | undefined
  hostUsers?: boolean | undefined
  hostname?: string | undefined
  imagePullSecrets?: IoK8SApiCoreV1LocalObjectReference[] | undefined
  initContainers?: IoK8SApiCoreV1Container[] | undefined
  nodeName?: string | undefined
  nodeSelector?:
    | {
        [key: string]: string
      }
    | undefined
  os?: IoK8SApiCoreV1PodOs | undefined
  overhead?:
    | {
        [key: string]: IoK8SApimachineryPkgApiResourceQuantity
      }
    | undefined
  preemptionPolicy?: ('Never' | 'PreemptLowerPriority') | undefined
  priority?: number | undefined
  priorityClassName?: string | undefined
  readinessGates?: IoK8SApiCoreV1PodReadinessGate[] | undefined
  resourceClaims?: IoK8SApiCoreV1PodResourceClaim[] | undefined
  restartPolicy?: ('Always' | 'Never' | 'OnFailure') | undefined
  runtimeClassName?: string | undefined
  schedulerName?: string | undefined
  schedulingGates?: IoK8SApiCoreV1PodSchedulingGate[] | undefined
  securityContext?: IoK8SApiCoreV1PodSecurityContext | undefined
  serviceAccount?: string | undefined
  serviceAccountName?: string | undefined
  setHostnameAsFQDN?: boolean | undefined
  shareProcessNamespace?: boolean | undefined
  subdomain?: string | undefined
  terminationGracePeriodSeconds?: number | undefined
  tolerations?: IoK8SApiCoreV1Toleration[] | undefined
  topologySpreadConstraints?:
    | IoK8SApiCoreV1TopologySpreadConstraint[]
    | undefined
  volumes?: IoK8SApiCoreV1Volume[] | undefined
}
export type IoK8SApiCoreV1PodTemplateSpec = {
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiCoreV1PodSpec | undefined
}
export type IoK8SApiBatchV1JobSpec = {
  activeDeadlineSeconds?: number | undefined
  backoffLimit?: number | undefined
  completionMode?: ('Indexed' | 'NonIndexed') | undefined
  completions?: number | undefined
  manualSelector?: boolean | undefined
  parallelism?: number | undefined
  podFailurePolicy?: IoK8SApiBatchV1PodFailurePolicy | undefined
  selector?: IoK8SApimachineryPkgApisMetaV1LabelSelector | undefined
  suspend?: boolean | undefined
  template: IoK8SApiCoreV1PodTemplateSpec
  ttlSecondsAfterFinished?: number | undefined
}
export type IoK8SApiBatchV1JobTemplateSpec = {
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiBatchV1JobSpec | undefined
}
export type IoK8SApiBatchV1CronJobSpec = {
  concurrencyPolicy?: ('Allow' | 'Forbid' | 'Replace') | undefined
  failedJobsHistoryLimit?: number | undefined
  jobTemplate: IoK8SApiBatchV1JobTemplateSpec
  schedule: string
  startingDeadlineSeconds?: number | undefined
  successfulJobsHistoryLimit?: number | undefined
  suspend?: boolean | undefined
  timeZone?: string | undefined
}
export type IoK8SApiCoreV1ObjectReference = {
  apiVersion?: string | undefined
  fieldPath?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  resourceVersion?: string | undefined
  uid?: string | undefined
}
export type IoK8SApiBatchV1CronJobStatus = {
  active?: IoK8SApiCoreV1ObjectReference[] | undefined
  lastScheduleTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  lastSuccessfulTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
}
export type IoK8SApiBatchV1CronJob = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiBatchV1CronJobSpec | undefined
  status?: IoK8SApiBatchV1CronJobStatus | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoK8SApiBatchV1CronJobList = {
  apiVersion?: string | undefined
  items: IoK8SApiBatchV1CronJob[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoK8SApiBatchV1JobCondition = {
  lastProbeTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  lastTransitionTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  message?: string | undefined
  reason?: string | undefined
  status: string
  type: string
}
export type IoK8SApiBatchV1UncountedTerminatedPods = {
  failed?: string[] | undefined
  succeeded?: string[] | undefined
}
export type IoK8SApiBatchV1JobStatus = {
  active?: number | undefined
  completedIndexes?: string | undefined
  completionTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  conditions?: IoK8SApiBatchV1JobCondition[] | undefined
  failed?: number | undefined
  ready?: number | undefined
  startTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  succeeded?: number | undefined
  uncountedTerminatedPods?: IoK8SApiBatchV1UncountedTerminatedPods | undefined
}
export type IoK8SApiBatchV1Job = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiBatchV1JobSpec | undefined
  status?: IoK8SApiBatchV1JobStatus | undefined
}
export type IoK8SApiBatchV1JobList = {
  apiVersion?: string | undefined
  items: IoK8SApiBatchV1Job[]
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
export type IoK8SApimachineryPkgApisMetaV1Patch = object
export type IoK8SApimachineryPkgRuntimeRawExtension = object
export type IoK8SApimachineryPkgApisMetaV1WatchEvent = {
  object: IoK8SApimachineryPkgRuntimeRawExtension
  type: string
}
