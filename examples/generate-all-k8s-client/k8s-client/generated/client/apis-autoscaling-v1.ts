import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export const getAutoscalingV1ApiResources = (
  args: GetAutoscalingV1ApiResourcesApiArg,
  options?: Options
) => {
  return apiClient<GetAutoscalingV1ApiResourcesApiResponse>(
    { path: `/apis/autoscaling/v1/` },
    options
  )
}
export function listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces(
  args: NoWatch<ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesApiArg>,
  options?: Options
): Promise<ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesApiResponse>
export function listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces(
  args: ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesApiResponse>
): Promise<void>
export function listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesApiResponse>(
    {
      path: `/apis/autoscaling/v1/horizontalpodautoscalers`,
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
export function listAutoscalingV1NamespacedHorizontalPodAutoscaler(
  args: NoWatch<ListAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg>,
  options?: Options
): Promise<ListAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>
export function listAutoscalingV1NamespacedHorizontalPodAutoscaler(
  args: ListAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>
): Promise<void>
export function listAutoscalingV1NamespacedHorizontalPodAutoscaler(
  args: any,
  options: any
): any {
  return apiClient<ListAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers`,
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
export const createAutoscalingV1NamespacedHorizontalPodAutoscaler = (
  args: CreateAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg,
  options?: Options
) => {
  return apiClient<CreateAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers`,
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
export const deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler = (
  args: DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerApiArg,
  options?: Options
) => {
  return apiClient<DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers`,
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
export const readAutoscalingV1NamespacedHorizontalPodAutoscaler = (
  args: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg,
  options?: Options
) => {
  return apiClient<ReadAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceAutoscalingV1NamespacedHorizontalPodAutoscaler = (
  args: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg,
  options?: Options
) => {
  return apiClient<ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers/${args.name}`,
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
export const deleteAutoscalingV1NamespacedHorizontalPodAutoscaler = (
  args: DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg,
  options?: Options
) => {
  return apiClient<DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers/${args.name}`,
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
export const patchAutoscalingV1NamespacedHorizontalPodAutoscaler = (
  args: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg,
  options?: Options
) => {
  return apiClient<PatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers/${args.name}`,
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
export const readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus = (
  args: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers/${args.name}/status`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus = (
  args: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers/${args.name}/status`,
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
export const patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus = (
  args: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiResponse>(
    {
      path: `/apis/autoscaling/v1/namespaces/${args['namespace']}/horizontalpodautoscalers/${args.name}/status`,
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
export function watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces(
  args: NoWatch<WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesApiArg>,
  options?: Options
): Promise<WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesApiResponse>
export function watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces(
  args: WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesApiResponse>
): Promise<void>
export function watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesApiResponse>(
    {
      path: `/apis/autoscaling/v1/watch/horizontalpodautoscalers`,
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
export function watchAutoscalingV1NamespacedHorizontalPodAutoscalerList(
  args: NoWatch<WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListApiArg>,
  options?: Options
): Promise<WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListApiResponse>
export function watchAutoscalingV1NamespacedHorizontalPodAutoscalerList(
  args: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListApiResponse>
): Promise<void>
export function watchAutoscalingV1NamespacedHorizontalPodAutoscalerList(
  args: any,
  options: any
): any {
  return apiClient<WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListApiResponse>(
    {
      path: `/apis/autoscaling/v1/watch/namespaces/${args['namespace']}/horizontalpodautoscalers`,
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
export function watchAutoscalingV1NamespacedHorizontalPodAutoscaler(
  args: NoWatch<WatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg>,
  options?: Options
): Promise<WatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>
export function watchAutoscalingV1NamespacedHorizontalPodAutoscaler(
  args: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<WatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>
): Promise<void>
export function watchAutoscalingV1NamespacedHorizontalPodAutoscaler(
  args: any,
  options: any
): any {
  return apiClient<WatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse>(
    {
      path: `/apis/autoscaling/v1/watch/namespaces/${args['namespace']}/horizontalpodautoscalers/${args.name}`,
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
export type GetAutoscalingV1ApiResourcesApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiResourceList
export type GetAutoscalingV1ApiResourcesApiArg = void
export type ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1HorizontalPodAutoscalerList
export type ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesApiArg = {
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
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ListAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1HorizontalPodAutoscalerList
export type ListAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
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
export type CreateAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1HorizontalPodAutoscaler
  | /** status 201 Created */ IoK8SApiAutoscalingV1HorizontalPodAutoscaler
  | /** status 202 Accepted */ IoK8SApiAutoscalingV1HorizontalPodAutoscaler
export type CreateAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg = {
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
}
export type DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerApiArg =
  {
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type ReadAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1HorizontalPodAutoscaler
export type ReadAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg = {
  /** name of the HorizontalPodAutoscaler */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
}
export type ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1HorizontalPodAutoscaler
  | /** status 201 Created */ IoK8SApiAutoscalingV1HorizontalPodAutoscaler
export type ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg = {
  /** name of the HorizontalPodAutoscaler */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
} & {
  contentType?: string
  body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
}
export type DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg = {
  /** name of the HorizontalPodAutoscaler */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
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
} & {
  contentType?: string
  body: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type PatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1HorizontalPodAutoscaler
  | /** status 201 Created */ IoK8SApiAutoscalingV1HorizontalPodAutoscaler
export type PatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg = {
  /** name of the HorizontalPodAutoscaler */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
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
      body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
    }
  | {
      contentType: 'application/strategic-merge-patch+json'
      body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
    }
)
export type ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiResponse =
  /** status 200 OK */ IoK8SApiAutoscalingV1HorizontalPodAutoscaler
export type ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiArg = {
  /** name of the HorizontalPodAutoscaler */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
}
export type ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1HorizontalPodAutoscaler
  | /** status 201 Created */ IoK8SApiAutoscalingV1HorizontalPodAutoscaler
export type ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiArg =
  {
    /** name of the HorizontalPodAutoscaler */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
  } & {
    contentType?: string
    body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
  }
export type PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiResponse =
  /** status 200 OK */
  | IoK8SApiAutoscalingV1HorizontalPodAutoscaler
  | /** status 201 Created */ IoK8SApiAutoscalingV1HorizontalPodAutoscaler
export type PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusApiArg = {
  /** name of the HorizontalPodAutoscaler */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
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
      body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
    }
  | {
      contentType: 'application/strategic-merge-patch+json'
      body: IoK8SApiAutoscalingV1HorizontalPodAutoscaler
    }
)
export type WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesApiArg =
  {
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
    /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListApiArg = {
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
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type WatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchAutoscalingV1NamespacedHorizontalPodAutoscalerApiArg = {
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
  /** name of the HorizontalPodAutoscaler */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
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
export type IoK8SApiAutoscalingV1CrossVersionObjectReference = {
  apiVersion?: string | undefined
  kind: string
  name: string
}
export type IoK8SApiAutoscalingV1HorizontalPodAutoscalerSpec = {
  maxReplicas: number
  minReplicas?: number | undefined
  scaleTargetRef: IoK8SApiAutoscalingV1CrossVersionObjectReference
  targetCPUUtilizationPercentage?: number | undefined
}
export type IoK8SApiAutoscalingV1HorizontalPodAutoscalerStatus = {
  currentCPUUtilizationPercentage?: number | undefined
  currentReplicas: number
  desiredReplicas: number
  lastScaleTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  observedGeneration?: number | undefined
}
export type IoK8SApiAutoscalingV1HorizontalPodAutoscaler = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiAutoscalingV1HorizontalPodAutoscalerSpec | undefined
  status?: IoK8SApiAutoscalingV1HorizontalPodAutoscalerStatus | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoK8SApiAutoscalingV1HorizontalPodAutoscalerList = {
  apiVersion?: string | undefined
  items: IoK8SApiAutoscalingV1HorizontalPodAutoscaler[]
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
export type IoK8SApimachineryPkgRuntimeRawExtension = object
export type IoK8SApimachineryPkgApisMetaV1WatchEvent = {
  object: IoK8SApimachineryPkgRuntimeRawExtension
  type: string
}
