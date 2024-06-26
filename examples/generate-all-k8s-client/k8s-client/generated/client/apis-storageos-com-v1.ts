import { apiClient, type Options, type WatchExtraOptions } from '../../client'
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
export function listStorageosComV1NamespacedStorageOsCluster(
  args: NoWatch<ListStorageosComV1NamespacedStorageOsClusterApiArg>,
  options?: Options
): Promise<ListStorageosComV1NamespacedStorageOsClusterApiResponse>
export function listStorageosComV1NamespacedStorageOsCluster(
  args: ListStorageosComV1NamespacedStorageOsClusterApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListStorageosComV1NamespacedStorageOsClusterApiResponse>
): Promise<void>
export function listStorageosComV1NamespacedStorageOsCluster(
  args: any,
  options: any
): any {
  return apiClient<ListStorageosComV1NamespacedStorageOsClusterApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters`,
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
export const createStorageosComV1NamespacedStorageOsCluster = (
  args: CreateStorageosComV1NamespacedStorageOsClusterApiArg,
  options?: Options
) => {
  return apiClient<CreateStorageosComV1NamespacedStorageOsClusterApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters`,
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
export function deleteStorageosComV1CollectionNamespacedStorageOsCluster(
  args: NoWatch<DeleteStorageosComV1CollectionNamespacedStorageOsClusterApiArg>,
  options?: Options
): Promise<DeleteStorageosComV1CollectionNamespacedStorageOsClusterApiResponse>
export function deleteStorageosComV1CollectionNamespacedStorageOsCluster(
  args: DeleteStorageosComV1CollectionNamespacedStorageOsClusterApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<DeleteStorageosComV1CollectionNamespacedStorageOsClusterApiResponse>
): Promise<void>
export function deleteStorageosComV1CollectionNamespacedStorageOsCluster(
  args: any,
  options: any
): any {
  return apiClient<DeleteStorageosComV1CollectionNamespacedStorageOsClusterApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters`,
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
export const readStorageosComV1NamespacedStorageOsCluster = (
  args: ReadStorageosComV1NamespacedStorageOsClusterApiArg,
  options?: Options
) => {
  return apiClient<ReadStorageosComV1NamespacedStorageOsClusterApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceStorageosComV1NamespacedStorageOsCluster = (
  args: ReplaceStorageosComV1NamespacedStorageOsClusterApiArg,
  options?: Options
) => {
  return apiClient<ReplaceStorageosComV1NamespacedStorageOsClusterApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters/${args.name}`,
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
export const deleteStorageosComV1NamespacedStorageOsCluster = (
  args: DeleteStorageosComV1NamespacedStorageOsClusterApiArg,
  options?: Options
) => {
  return apiClient<DeleteStorageosComV1NamespacedStorageOsClusterApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters/${args.name}`,
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
export const patchStorageosComV1NamespacedStorageOsCluster = (
  args: PatchStorageosComV1NamespacedStorageOsClusterApiArg,
  options?: Options
) => {
  return apiClient<PatchStorageosComV1NamespacedStorageOsClusterApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters/${args.name}`,
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
export const readStorageosComV1NamespacedStorageOsClusterStatus = (
  args: ReadStorageosComV1NamespacedStorageOsClusterStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadStorageosComV1NamespacedStorageOsClusterStatusApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceStorageosComV1NamespacedStorageOsClusterStatus = (
  args: ReplaceStorageosComV1NamespacedStorageOsClusterStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceStorageosComV1NamespacedStorageOsClusterStatusApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters/${args.name}/status`,
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
export const patchStorageosComV1NamespacedStorageOsClusterStatus = (
  args: PatchStorageosComV1NamespacedStorageOsClusterStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchStorageosComV1NamespacedStorageOsClusterStatusApiResponse>(
    {
      path: `/apis/storageos.com/v1/namespaces/${args['namespace']}/storageosclusters/${args.name}/status`,
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
export function listStorageosComV1StorageOsClusterForAllNamespaces(
  args: NoWatch<ListStorageosComV1StorageOsClusterForAllNamespacesApiArg>,
  options?: Options
): Promise<ListStorageosComV1StorageOsClusterForAllNamespacesApiResponse>
export function listStorageosComV1StorageOsClusterForAllNamespaces(
  args: ListStorageosComV1StorageOsClusterForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<ListStorageosComV1StorageOsClusterForAllNamespacesApiResponse>
): Promise<void>
export function listStorageosComV1StorageOsClusterForAllNamespaces(
  args: any,
  options: any
): any {
  return apiClient<ListStorageosComV1StorageOsClusterForAllNamespacesApiResponse>(
    {
      path: `/apis/storageos.com/v1/storageosclusters`,
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
export type ListStorageosComV1NamespacedStorageOsClusterApiResponse =
  /** status 200 OK */ ComStorageosV1StorageOsClusterList
export type ListStorageosComV1NamespacedStorageOsClusterApiArg = {
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
export type CreateStorageosComV1NamespacedStorageOsClusterApiResponse =
  /** status 200 OK */
  | ComStorageosV1StorageOsCluster
  | /** status 201 Created */ ComStorageosV1StorageOsCluster
  | /** status 202 Accepted */ ComStorageosV1StorageOsCluster
export type CreateStorageosComV1NamespacedStorageOsClusterApiArg = {
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
} & (
  | {
      contentType: 'application/json'
      body: ComStorageosV1StorageOsCluster
    }
  | {
      contentType: 'application/yaml'
      body: ComStorageosV1StorageOsCluster
    }
)
export type DeleteStorageosComV1CollectionNamespacedStorageOsClusterApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteStorageosComV1CollectionNamespacedStorageOsClusterApiArg = {
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
export type ReadStorageosComV1NamespacedStorageOsClusterApiResponse =
  /** status 200 OK */ ComStorageosV1StorageOsCluster
export type ReadStorageosComV1NamespacedStorageOsClusterApiArg = {
  /** name of the StorageOSCluster */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceStorageosComV1NamespacedStorageOsClusterApiResponse =
  /** status 200 OK */
  | ComStorageosV1StorageOsCluster
  | /** status 201 Created */ ComStorageosV1StorageOsCluster
export type ReplaceStorageosComV1NamespacedStorageOsClusterApiArg = {
  /** name of the StorageOSCluster */
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
} & (
  | {
      contentType: 'application/json'
      body: ComStorageosV1StorageOsCluster
    }
  | {
      contentType: 'application/yaml'
      body: ComStorageosV1StorageOsCluster
    }
)
export type DeleteStorageosComV1NamespacedStorageOsClusterApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteStorageosComV1NamespacedStorageOsClusterApiArg = {
  /** name of the StorageOSCluster */
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
export type PatchStorageosComV1NamespacedStorageOsClusterApiResponse =
  /** status 200 OK */ ComStorageosV1StorageOsCluster
export type PatchStorageosComV1NamespacedStorageOsClusterApiArg = {
  /** name of the StorageOSCluster */
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
      body: ComStorageosV1StorageOsCluster
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: ComStorageosV1StorageOsCluster
    }
)
export type ReadStorageosComV1NamespacedStorageOsClusterStatusApiResponse =
  /** status 200 OK */ ComStorageosV1StorageOsCluster
export type ReadStorageosComV1NamespacedStorageOsClusterStatusApiArg = {
  /** name of the StorageOSCluster */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceStorageosComV1NamespacedStorageOsClusterStatusApiResponse =
  /** status 200 OK */
  | ComStorageosV1StorageOsCluster
  | /** status 201 Created */ ComStorageosV1StorageOsCluster
export type ReplaceStorageosComV1NamespacedStorageOsClusterStatusApiArg = {
  /** name of the StorageOSCluster */
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
} & (
  | {
      contentType: 'application/json'
      body: ComStorageosV1StorageOsCluster
    }
  | {
      contentType: 'application/yaml'
      body: ComStorageosV1StorageOsCluster
    }
)
export type PatchStorageosComV1NamespacedStorageOsClusterStatusApiResponse =
  /** status 200 OK */ ComStorageosV1StorageOsCluster
export type PatchStorageosComV1NamespacedStorageOsClusterStatusApiArg = {
  /** name of the StorageOSCluster */
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
      body: ComStorageosV1StorageOsCluster
    }
  | {
      contentType: 'application/json-patch+json'
      body: JsonPatchOperations
    }
  | {
      contentType: 'application/merge-patch+json'
      body: ComStorageosV1StorageOsCluster
    }
)
export type ListStorageosComV1StorageOsClusterForAllNamespacesApiResponse =
  /** status 200 OK */ ComStorageosV1StorageOsClusterList
export type ListStorageosComV1StorageOsClusterForAllNamespacesApiArg = {
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
export type ComStorageosV1StorageOsCluster = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        csi?:
          | {
              deploymentStrategy?: string | undefined
              deviceDir?: string | undefined
              driverRegisterationMode?: string | undefined
              driverRequiresAttachment?: string | undefined
              enable?: boolean | undefined
              enableControllerExpandCreds?: boolean | undefined
              enableControllerPublishCreds?: boolean | undefined
              enableNodePublishCreds?: boolean | undefined
              enableProvisionCreds?: boolean | undefined
              endpoint?: string | undefined
              kubeletDir?: string | undefined
              kubeletRegistrationPath?: string | undefined
              pluginDir?: string | undefined
              registrarSocketDir?: string | undefined
              registrationDir?: string | undefined
              version?: string | undefined
            }
          | undefined
        debug?: boolean | undefined
        disableFencing?: boolean | undefined
        disableScheduler?: boolean | undefined
        disableTCMU?: boolean | undefined
        disableTelemetry?: boolean | undefined
        enablePortalManager?: boolean | undefined
        environment?:
          | {
              [key: string]: string
            }
          | undefined
        forceTCMU?: boolean | undefined
        images?:
          | {
              apiManagerContainer?: string | undefined
              csiClusterDriverRegistrarContainer?: string | undefined
              csiExternalAttacherContainer?: string | undefined
              csiExternalProvisionerContainer?: string | undefined
              csiExternalResizerContainer?: string | undefined
              csiExternalSnapshotterContainer?: string | undefined
              csiLivenessProbeContainer?: string | undefined
              csiNodeDriverRegistrarContainer?: string | undefined
              hyperkubeContainer?: string | undefined
              initContainer?: string | undefined
              kubeSchedulerContainer?: string | undefined
              metricsExporterContainer?: string | undefined
              nfsContainer?: string | undefined
              nodeContainer?: string | undefined
              nodeManagerContainer?: string | undefined
              portalManagerContainer?: string | undefined
              upgradeGuardContainer?: string | undefined
            }
          | undefined
        ingress?:
          | {
              annotations?:
                | {
                    [key: string]: string
                  }
                | undefined
              enable?: boolean | undefined
              hostname?: string | undefined
              tls?: boolean | undefined
            }
          | undefined
        join?: string | undefined
        k8sDistro?: string | undefined
        kvBackend: {
          address: string
          backend?: string | undefined
        }
        metrics?:
          | {
              enabled?: boolean | undefined
            }
          | undefined
        namespace?: string | undefined
        nodeManagerFeatures?:
          | {
              [key: string]: string
            }
          | undefined
        nodeSelectorTerms?:
          | {
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
          | undefined
        pause?: boolean | undefined
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
        secretRefName: string
        secretRefNamespace?: string | undefined
        service?:
          | {
              annotations?:
                | {
                    [key: string]: string
                  }
                | undefined
              externalPort?: number | undefined
              internalPort?: number | undefined
              name: string
              type: string
            }
          | undefined
        sharedDir?: string | undefined
        snapshots?:
          | {
              volumeSnapshotClassName?: string | undefined
            }
          | undefined
        storageClassName?: string | undefined
        tlsEtcdSecretRefName?: string | undefined
        tlsEtcdSecretRefNamespace?: string | undefined
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
  status?:
    | {
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
        members?:
          | {
              ready?: string[] | undefined
              unready?: string[] | undefined
            }
          | undefined
        nodeHealthStatus?:
          | {
              [key: string]: {
                directfsInitiator?: string | undefined
                director?: string | undefined
                kv?: string | undefined
                kvWrite?: string | undefined
                nats?: string | undefined
                presentation?: string | undefined
                rdb?: string | undefined
              }
            }
          | undefined
        nodes?: string[] | undefined
        phase?: string | undefined
        ready?: string | undefined
      }
    | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type ComStorageosV1StorageOsClusterList = {
  apiVersion?: string | undefined
  items: ComStorageosV1StorageOsCluster[]
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
