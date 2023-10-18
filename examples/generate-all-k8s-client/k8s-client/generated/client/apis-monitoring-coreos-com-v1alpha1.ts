import { apiClient, type Options } from '../../client'
export const listMonitoringCoreosComV1Alpha1AlertmanagerConfigForAllNamespaces =
  (
    args: ListMonitoringCoreosComV1Alpha1AlertmanagerConfigForAllNamespacesApiArg,
    options?: Options
  ) => {
    return apiClient<ListMonitoringCoreosComV1Alpha1AlertmanagerConfigForAllNamespacesApiResponse>(
      {
        path: `/apis/monitoring.coreos.com/v1alpha1/alertmanagerconfigs`,
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
export const listMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfig = (
  args: ListMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg,
  options?: Options
) => {
  return apiClient<ListMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1alpha1/namespaces/${args['namespace']}/alertmanagerconfigs`,
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
export const createMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfig = (
  args: CreateMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg,
  options?: Options
) => {
  return apiClient<CreateMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1alpha1/namespaces/${args['namespace']}/alertmanagerconfigs`,
      method: 'POST',
      body: args.comCoreosMonitoringV1Alpha1AlertmanagerConfig,
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
export const deleteMonitoringCoreosComV1Alpha1CollectionNamespacedAlertmanagerConfig =
  (
    args: DeleteMonitoringCoreosComV1Alpha1CollectionNamespacedAlertmanagerConfigApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteMonitoringCoreosComV1Alpha1CollectionNamespacedAlertmanagerConfigApiResponse>(
      {
        path: `/apis/monitoring.coreos.com/v1alpha1/namespaces/${args['namespace']}/alertmanagerconfigs`,
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
export const readMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfig = (
  args: ReadMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg,
  options?: Options
) => {
  return apiClient<ReadMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1alpha1/namespaces/${args['namespace']}/alertmanagerconfigs/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfig = (
  args: ReplaceMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1alpha1/namespaces/${args['namespace']}/alertmanagerconfigs/${args.name}`,
      method: 'PUT',
      body: args.comCoreosMonitoringV1Alpha1AlertmanagerConfig,
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
export const deleteMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfig = (
  args: DeleteMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg,
  options?: Options
) => {
  return apiClient<DeleteMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1alpha1/namespaces/${args['namespace']}/alertmanagerconfigs/${args.name}`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
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
export const patchMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfig = (
  args: PatchMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg,
  options?: Options
) => {
  return apiClient<PatchMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse>(
    {
      path: `/apis/monitoring.coreos.com/v1alpha1/namespaces/${args['namespace']}/alertmanagerconfigs/${args.name}`,
      method: 'PATCH',
      body: args.body,
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
export type ListMonitoringCoreosComV1Alpha1AlertmanagerConfigForAllNamespacesApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Alpha1AlertmanagerConfigList
export type ListMonitoringCoreosComV1Alpha1AlertmanagerConfigForAllNamespacesApiArg =
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
export type ListMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Alpha1AlertmanagerConfigList
export type ListMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg =
  {
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
export type CreateMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Alpha1AlertmanagerConfig
    | /** status 201 Created */ ComCoreosMonitoringV1Alpha1AlertmanagerConfig
    | /** status 202 Accepted */ ComCoreosMonitoringV1Alpha1AlertmanagerConfig
export type CreateMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg =
  {
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
    comCoreosMonitoringV1Alpha1AlertmanagerConfig: ComCoreosMonitoringV1Alpha1AlertmanagerConfig
  }
export type DeleteMonitoringCoreosComV1Alpha1CollectionNamespacedAlertmanagerConfigApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1Alpha1CollectionNamespacedAlertmanagerConfigApiArg =
  {
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
export type ReadMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Alpha1AlertmanagerConfig
export type ReadMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg =
  {
    /** name of the AlertmanagerConfig */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
  }
export type ReplaceMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse =
  /** status 200 OK */
    | ComCoreosMonitoringV1Alpha1AlertmanagerConfig
    | /** status 201 Created */ ComCoreosMonitoringV1Alpha1AlertmanagerConfig
export type ReplaceMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg =
  {
    /** name of the AlertmanagerConfig */
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
    comCoreosMonitoringV1Alpha1AlertmanagerConfig: ComCoreosMonitoringV1Alpha1AlertmanagerConfig
  }
export type DeleteMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg =
  {
    /** name of the AlertmanagerConfig */
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
    ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
  }
export type PatchMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiResponse =
  /** status 200 OK */ ComCoreosMonitoringV1Alpha1AlertmanagerConfig
export type PatchMonitoringCoreosComV1Alpha1NamespacedAlertmanagerConfigApiArg =
  {
    /** name of the AlertmanagerConfig */
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
    body: Blob
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
export type ComCoreosMonitoringV1Alpha1AlertmanagerConfig = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec: {
    inhibitRules?:
      | {
          equal?: string[] | undefined
          sourceMatch?:
            | {
                matchType?: ('!=' | '=' | '=~' | '!~') | undefined
                name: string
                regex?: boolean | undefined
                value?: string | undefined
              }[]
            | undefined
          targetMatch?:
            | {
                matchType?: ('!=' | '=' | '=~' | '!~') | undefined
                name: string
                regex?: boolean | undefined
                value?: string | undefined
              }[]
            | undefined
        }[]
      | undefined
    muteTimeIntervals?:
      | {
          name?: string | undefined
          timeIntervals?:
            | {
                daysOfMonth?:
                  | {
                      end?: number | undefined
                      start?: number | undefined
                    }[]
                  | undefined
                months?: string[] | undefined
                times?:
                  | {
                      endTime?: string | undefined
                      startTime?: string | undefined
                    }[]
                  | undefined
                weekdays?: string[] | undefined
                years?: string[] | undefined
              }[]
            | undefined
        }[]
      | undefined
    receivers?:
      | {
          emailConfigs?:
            | {
                authIdentity?: string | undefined
                authPassword?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                authSecret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                authUsername?: string | undefined
                from?: string | undefined
                headers?:
                  | {
                      key: string
                      value: string
                    }[]
                  | undefined
                hello?: string | undefined
                html?: string | undefined
                requireTLS?: boolean | undefined
                sendResolved?: boolean | undefined
                smarthost?: string | undefined
                text?: string | undefined
                tlsConfig?:
                  | {
                      ca?:
                        | {
                            configMap?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            secret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      cert?:
                        | {
                            configMap?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            secret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      insecureSkipVerify?: boolean | undefined
                      keySecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      serverName?: string | undefined
                    }
                  | undefined
                to?: string | undefined
              }[]
            | undefined
          name: string
          opsgenieConfigs?:
            | {
                actions?: string | undefined
                apiKey?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                apiURL?: string | undefined
                description?: string | undefined
                details?:
                  | {
                      key: string
                      value: string
                    }[]
                  | undefined
                entity?: string | undefined
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                message?: string | undefined
                note?: string | undefined
                priority?: string | undefined
                responders?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      type:
                        | 'team'
                        | 'teams'
                        | 'user'
                        | 'escalation'
                        | 'schedule'
                      username?: string | undefined
                    }[]
                  | undefined
                sendResolved?: boolean | undefined
                source?: string | undefined
                tags?: string | undefined
                updateAlerts?: boolean | undefined
              }[]
            | undefined
          pagerdutyConfigs?:
            | {
                class?: string | undefined
                client?: string | undefined
                clientURL?: string | undefined
                component?: string | undefined
                description?: string | undefined
                details?:
                  | {
                      key: string
                      value: string
                    }[]
                  | undefined
                group?: string | undefined
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                pagerDutyImageConfigs?:
                  | {
                      alt?: string | undefined
                      href?: string | undefined
                      src?: string | undefined
                    }[]
                  | undefined
                pagerDutyLinkConfigs?:
                  | {
                      alt?: string | undefined
                      href?: string | undefined
                    }[]
                  | undefined
                routingKey?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                sendResolved?: boolean | undefined
                serviceKey?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                severity?: string | undefined
                url?: string | undefined
              }[]
            | undefined
          pushoverConfigs?:
            | {
                expire?: string | undefined
                html?: boolean | undefined
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                message?: string | undefined
                priority?: string | undefined
                retry?: string | undefined
                sendResolved?: boolean | undefined
                sound?: string | undefined
                title?: string | undefined
                token?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                url?: string | undefined
                urlTitle?: string | undefined
                userKey?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }[]
            | undefined
          slackConfigs?:
            | {
                actions?:
                  | {
                      confirm?:
                        | {
                            dismissText?: string | undefined
                            okText?: string | undefined
                            text: string
                            title?: string | undefined
                          }
                        | undefined
                      name?: string | undefined
                      style?: string | undefined
                      text: string
                      type: string
                      url?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
                apiURL?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                callbackId?: string | undefined
                channel?: string | undefined
                color?: string | undefined
                fallback?: string | undefined
                fields?:
                  | {
                      short?: boolean | undefined
                      title: string
                      value: string
                    }[]
                  | undefined
                footer?: string | undefined
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                iconEmoji?: string | undefined
                iconURL?: string | undefined
                imageURL?: string | undefined
                linkNames?: boolean | undefined
                mrkdwnIn?: string[] | undefined
                pretext?: string | undefined
                sendResolved?: boolean | undefined
                shortFields?: boolean | undefined
                text?: string | undefined
                thumbURL?: string | undefined
                title?: string | undefined
                titleLink?: string | undefined
                username?: string | undefined
              }[]
            | undefined
          snsConfigs?:
            | {
                apiURL?: string | undefined
                attributes?:
                  | {
                      [key: string]: string
                    }
                  | undefined
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                message?: string | undefined
                phoneNumber?: string | undefined
                sendResolved?: boolean | undefined
                sigv4?:
                  | {
                      accessKey?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      profile?: string | undefined
                      region?: string | undefined
                      roleArn?: string | undefined
                      secretKey?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                    }
                  | undefined
                subject?: string | undefined
                targetARN?: string | undefined
                topicARN?: string | undefined
              }[]
            | undefined
          telegramConfigs?:
            | {
                apiURL?: string | undefined
                botToken?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                chatID?: number | undefined
                disableNotifications?: boolean | undefined
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                message?: string | undefined
                parseMode?: ('MarkdownV2' | 'Markdown' | 'HTML') | undefined
                sendResolved?: boolean | undefined
              }[]
            | undefined
          victoropsConfigs?:
            | {
                apiKey?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                apiUrl?: string | undefined
                customFields?:
                  | {
                      key: string
                      value: string
                    }[]
                  | undefined
                entityDisplayName?: string | undefined
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                messageType?: string | undefined
                monitoringTool?: string | undefined
                routingKey?: string | undefined
                sendResolved?: boolean | undefined
                stateMessage?: string | undefined
              }[]
            | undefined
          webhookConfigs?:
            | {
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                maxAlerts?: number | undefined
                sendResolved?: boolean | undefined
                url?: string | undefined
                urlSecret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
              }[]
            | undefined
          wechatConfigs?:
            | {
                agentID?: string | undefined
                apiSecret?:
                  | {
                      key: string
                      name?: string | undefined
                      optional?: boolean | undefined
                    }
                  | undefined
                apiURL?: string | undefined
                corpID?: string | undefined
                httpConfig?:
                  | {
                      authorization?:
                        | {
                            credentials?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      basicAuth?:
                        | {
                            password?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            username?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                          }
                        | undefined
                      bearerTokenSecret?:
                        | {
                            key: string
                            name?: string | undefined
                            optional?: boolean | undefined
                          }
                        | undefined
                      followRedirects?: boolean | undefined
                      oauth2?:
                        | {
                            clientId: {
                              configMap?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                              secret?:
                                | {
                                    key: string
                                    name?: string | undefined
                                    optional?: boolean | undefined
                                  }
                                | undefined
                            }
                            clientSecret: {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                            endpointParams?:
                              | {
                                  [key: string]: string
                                }
                              | undefined
                            scopes?: string[] | undefined
                            tokenUrl: string
                          }
                        | undefined
                      proxyURL?: string | undefined
                      tlsConfig?:
                        | {
                            ca?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            cert?:
                              | {
                                  configMap?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                  secret?:
                                    | {
                                        key: string
                                        name?: string | undefined
                                        optional?: boolean | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            insecureSkipVerify?: boolean | undefined
                            keySecret?:
                              | {
                                  key: string
                                  name?: string | undefined
                                  optional?: boolean | undefined
                                }
                              | undefined
                            serverName?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                message?: string | undefined
                messageType?: string | undefined
                sendResolved?: boolean | undefined
                toParty?: string | undefined
                toTag?: string | undefined
                toUser?: string | undefined
              }[]
            | undefined
        }[]
      | undefined
    route?:
      | {
          continue?: boolean | undefined
          groupBy?: string[] | undefined
          groupInterval?: string | undefined
          groupWait?: string | undefined
          matchers?:
            | {
                matchType?: ('!=' | '=' | '=~' | '!~') | undefined
                name: string
                regex?: boolean | undefined
                value?: string | undefined
              }[]
            | undefined
          muteTimeIntervals?: string[] | undefined
          receiver?: string | undefined
          repeatInterval?: string | undefined
          routes?: any[] | undefined
        }
      | undefined
  }
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type ComCoreosMonitoringV1Alpha1AlertmanagerConfigList = {
  apiVersion?: string | undefined
  items: ComCoreosMonitoringV1Alpha1AlertmanagerConfig[]
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
