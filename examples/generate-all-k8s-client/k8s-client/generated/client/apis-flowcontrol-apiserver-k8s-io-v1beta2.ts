import { apiClient, type Options } from '../../client'
export const getFlowcontrolApiserverV1Beta2ApiResources = (
  args: GetFlowcontrolApiserverV1Beta2ApiResourcesApiArg,
  options?: Options
) => {
  return apiClient<GetFlowcontrolApiserverV1Beta2ApiResourcesApiResponse>(
    { path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/` },
    options
  )
}
export const listFlowcontrolApiserverV1Beta2FlowSchema = (
  args: ListFlowcontrolApiserverV1Beta2FlowSchemaApiArg,
  options?: Options
) => {
  return apiClient<ListFlowcontrolApiserverV1Beta2FlowSchemaApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas`,
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
export const createFlowcontrolApiserverV1Beta2FlowSchema = (
  args: CreateFlowcontrolApiserverV1Beta2FlowSchemaApiArg,
  options?: Options
) => {
  return apiClient<CreateFlowcontrolApiserverV1Beta2FlowSchemaApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas`,
      method: 'POST',
      body: args.ioK8SApiFlowcontrolV1Beta2FlowSchema,
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
export const deleteFlowcontrolApiserverV1Beta2CollectionFlowSchema = (
  args: DeleteFlowcontrolApiserverV1Beta2CollectionFlowSchemaApiArg,
  options?: Options
) => {
  return apiClient<DeleteFlowcontrolApiserverV1Beta2CollectionFlowSchemaApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas`,
      method: 'DELETE',
      body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
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
export const readFlowcontrolApiserverV1Beta2FlowSchema = (
  args: ReadFlowcontrolApiserverV1Beta2FlowSchemaApiArg,
  options?: Options
) => {
  return apiClient<ReadFlowcontrolApiserverV1Beta2FlowSchemaApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceFlowcontrolApiserverV1Beta2FlowSchema = (
  args: ReplaceFlowcontrolApiserverV1Beta2FlowSchemaApiArg,
  options?: Options
) => {
  return apiClient<ReplaceFlowcontrolApiserverV1Beta2FlowSchemaApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas/${args.name}`,
      method: 'PUT',
      body: args.ioK8SApiFlowcontrolV1Beta2FlowSchema,
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
export const deleteFlowcontrolApiserverV1Beta2FlowSchema = (
  args: DeleteFlowcontrolApiserverV1Beta2FlowSchemaApiArg,
  options?: Options
) => {
  return apiClient<DeleteFlowcontrolApiserverV1Beta2FlowSchemaApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas/${args.name}`,
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
export const patchFlowcontrolApiserverV1Beta2FlowSchema = (
  args: PatchFlowcontrolApiserverV1Beta2FlowSchemaApiArg,
  options?: Options
) => {
  return apiClient<PatchFlowcontrolApiserverV1Beta2FlowSchemaApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
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
export const readFlowcontrolApiserverV1Beta2FlowSchemaStatus = (
  args: ReadFlowcontrolApiserverV1Beta2FlowSchemaStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadFlowcontrolApiserverV1Beta2FlowSchemaStatusApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas/${args.name}/status`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceFlowcontrolApiserverV1Beta2FlowSchemaStatus = (
  args: ReplaceFlowcontrolApiserverV1Beta2FlowSchemaStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceFlowcontrolApiserverV1Beta2FlowSchemaStatusApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas/${args.name}/status`,
      method: 'PUT',
      body: args.ioK8SApiFlowcontrolV1Beta2FlowSchema,
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
export const patchFlowcontrolApiserverV1Beta2FlowSchemaStatus = (
  args: PatchFlowcontrolApiserverV1Beta2FlowSchemaStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchFlowcontrolApiserverV1Beta2FlowSchemaStatusApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/flowschemas/${args.name}/status`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
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
export const listFlowcontrolApiserverV1Beta2PriorityLevelConfiguration = (
  args: ListFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg,
  options?: Options
) => {
  return apiClient<ListFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations`,
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
export const createFlowcontrolApiserverV1Beta2PriorityLevelConfiguration = (
  args: CreateFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg,
  options?: Options
) => {
  return apiClient<CreateFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations`,
      method: 'POST',
      body: args.ioK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration,
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
export const deleteFlowcontrolApiserverV1Beta2CollectionPriorityLevelConfiguration =
  (
    args: DeleteFlowcontrolApiserverV1Beta2CollectionPriorityLevelConfigurationApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteFlowcontrolApiserverV1Beta2CollectionPriorityLevelConfigurationApiResponse>(
      {
        path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations`,
        method: 'DELETE',
        body: args.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
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
export const readFlowcontrolApiserverV1Beta2PriorityLevelConfiguration = (
  args: ReadFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg,
  options?: Options
) => {
  return apiClient<ReadFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceFlowcontrolApiserverV1Beta2PriorityLevelConfiguration = (
  args: ReplaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg,
  options?: Options
) => {
  return apiClient<ReplaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations/${args.name}`,
      method: 'PUT',
      body: args.ioK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration,
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
export const deleteFlowcontrolApiserverV1Beta2PriorityLevelConfiguration = (
  args: DeleteFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg,
  options?: Options
) => {
  return apiClient<DeleteFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations/${args.name}`,
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
export const patchFlowcontrolApiserverV1Beta2PriorityLevelConfiguration = (
  args: PatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg,
  options?: Options
) => {
  return apiClient<PatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations/${args.name}`,
      method: 'PATCH',
      body: args.ioK8SApimachineryPkgApisMetaV1Patch,
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
export const readFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatus = (
  args: ReadFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations/${args.name}/status`,
      params: { pretty: args.pretty },
    },
    options
  )
}
export const replaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatus =
  (
    args: ReplaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiArg,
    options?: Options
  ) => {
    return apiClient<ReplaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiResponse>(
      {
        path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations/${args.name}/status`,
        method: 'PUT',
        body: args.ioK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration,
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
export const patchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatus =
  (
    args: PatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiArg,
    options?: Options
  ) => {
    return apiClient<PatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiResponse>(
      {
        path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/prioritylevelconfigurations/${args.name}/status`,
        method: 'PATCH',
        body: args.ioK8SApimachineryPkgApisMetaV1Patch,
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
export const watchFlowcontrolApiserverV1Beta2FlowSchemaList = (
  args: WatchFlowcontrolApiserverV1Beta2FlowSchemaListApiArg,
  options?: Options
) => {
  return apiClient<WatchFlowcontrolApiserverV1Beta2FlowSchemaListApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/watch/flowschemas`,
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
export const watchFlowcontrolApiserverV1Beta2FlowSchema = (
  args: WatchFlowcontrolApiserverV1Beta2FlowSchemaApiArg,
  options?: Options
) => {
  return apiClient<WatchFlowcontrolApiserverV1Beta2FlowSchemaApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/watch/flowschemas/${args.name}`,
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
export const watchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationList = (
  args: WatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationListApiArg,
  options?: Options
) => {
  return apiClient<WatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationListApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/watch/prioritylevelconfigurations`,
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
export const watchFlowcontrolApiserverV1Beta2PriorityLevelConfiguration = (
  args: WatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg,
  options?: Options
) => {
  return apiClient<WatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse>(
    {
      path: `/apis/flowcontrol.apiserver.k8s.io/v1beta2/watch/prioritylevelconfigurations/${args.name}`,
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
export type GetFlowcontrolApiserverV1Beta2ApiResourcesApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1ApiResourceList
export type GetFlowcontrolApiserverV1Beta2ApiResourcesApiArg = void
export type ListFlowcontrolApiserverV1Beta2FlowSchemaApiResponse =
  /** status 200 OK */ IoK8SApiFlowcontrolV1Beta2FlowSchemaList
export type ListFlowcontrolApiserverV1Beta2FlowSchemaApiArg = {
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
export type CreateFlowcontrolApiserverV1Beta2FlowSchemaApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2FlowSchema
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2FlowSchema
    | /** status 202 Accepted */ IoK8SApiFlowcontrolV1Beta2FlowSchema
export type CreateFlowcontrolApiserverV1Beta2FlowSchemaApiArg = {
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  ioK8SApiFlowcontrolV1Beta2FlowSchema: IoK8SApiFlowcontrolV1Beta2FlowSchema
}
export type DeleteFlowcontrolApiserverV1Beta2CollectionFlowSchemaApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteFlowcontrolApiserverV1Beta2CollectionFlowSchemaApiArg = {
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
  ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
}
export type ReadFlowcontrolApiserverV1Beta2FlowSchemaApiResponse =
  /** status 200 OK */ IoK8SApiFlowcontrolV1Beta2FlowSchema
export type ReadFlowcontrolApiserverV1Beta2FlowSchemaApiArg = {
  /** name of the FlowSchema */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
}
export type ReplaceFlowcontrolApiserverV1Beta2FlowSchemaApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2FlowSchema
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2FlowSchema
export type ReplaceFlowcontrolApiserverV1Beta2FlowSchemaApiArg = {
  /** name of the FlowSchema */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  ioK8SApiFlowcontrolV1Beta2FlowSchema: IoK8SApiFlowcontrolV1Beta2FlowSchema
}
export type DeleteFlowcontrolApiserverV1Beta2FlowSchemaApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteFlowcontrolApiserverV1Beta2FlowSchemaApiArg = {
  /** name of the FlowSchema */
  name: string
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
export type PatchFlowcontrolApiserverV1Beta2FlowSchemaApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2FlowSchema
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2FlowSchema
export type PatchFlowcontrolApiserverV1Beta2FlowSchemaApiArg = {
  /** name of the FlowSchema */
  name: string
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
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadFlowcontrolApiserverV1Beta2FlowSchemaStatusApiResponse =
  /** status 200 OK */ IoK8SApiFlowcontrolV1Beta2FlowSchema
export type ReadFlowcontrolApiserverV1Beta2FlowSchemaStatusApiArg = {
  /** name of the FlowSchema */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
}
export type ReplaceFlowcontrolApiserverV1Beta2FlowSchemaStatusApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2FlowSchema
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2FlowSchema
export type ReplaceFlowcontrolApiserverV1Beta2FlowSchemaStatusApiArg = {
  /** name of the FlowSchema */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  ioK8SApiFlowcontrolV1Beta2FlowSchema: IoK8SApiFlowcontrolV1Beta2FlowSchema
}
export type PatchFlowcontrolApiserverV1Beta2FlowSchemaStatusApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2FlowSchema
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2FlowSchema
export type PatchFlowcontrolApiserverV1Beta2FlowSchemaStatusApiArg = {
  /** name of the FlowSchema */
  name: string
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
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse =
  /** status 200 OK */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationList
export type ListFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg = {
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
export type CreateFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
    | /** status 202 Accepted */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
export type CreateFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg =
  {
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
    ioK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration: IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
  }
export type DeleteFlowcontrolApiserverV1Beta2CollectionPriorityLevelConfigurationApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteFlowcontrolApiserverV1Beta2CollectionPriorityLevelConfigurationApiArg =
  {
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
    ioK8SApimachineryPkgApisMetaV1DeleteOptions: IoK8SApimachineryPkgApisMetaV1DeleteOptions
  }
export type ReadFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse =
  /** status 200 OK */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
export type ReadFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg = {
  /** name of the PriorityLevelConfiguration */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
}
export type ReplaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
export type ReplaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg =
  {
    /** name of the PriorityLevelConfiguration */
    name: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
    ioK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration: IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
  }
export type DeleteFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse =
  /** status 200 OK */
    | IoK8SApimachineryPkgApisMetaV1Status
    | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg =
  {
    /** name of the PriorityLevelConfiguration */
    name: string
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
export type PatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
export type PatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg = {
  /** name of the PriorityLevelConfiguration */
  name: string
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
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiResponse =
  /** status 200 OK */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
export type ReadFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiArg =
  {
    /** name of the PriorityLevelConfiguration */
    name: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
  }
export type ReplaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
export type ReplaceFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiArg =
  {
    /** name of the PriorityLevelConfiguration */
    name: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
    dryRun?: string
    /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
    fieldManager?: string
    /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
    fieldValidation?: string
    ioK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration: IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
  }
export type PatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiResponse =
  /** status 200 OK */
    | IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
    | /** status 201 Created */ IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration
export type PatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationStatusApiArg =
  {
    /** name of the PriorityLevelConfiguration */
    name: string
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
    ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
  }
export type WatchFlowcontrolApiserverV1Beta2FlowSchemaListApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchFlowcontrolApiserverV1Beta2FlowSchemaListApiArg = {
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
export type WatchFlowcontrolApiserverV1Beta2FlowSchemaApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchFlowcontrolApiserverV1Beta2FlowSchemaApiArg = {
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
  /** name of the FlowSchema */
  name: string
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
export type WatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationListApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationListApiArg =
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
export type WatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1WatchEvent
export type WatchFlowcontrolApiserverV1Beta2PriorityLevelConfigurationApiArg = {
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
  /** name of the PriorityLevelConfiguration */
  name: string
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
export type IoK8SApiFlowcontrolV1Beta2FlowDistinguisherMethod = {
  type: string
}
export type IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationReference = {
  name: string
}
export type IoK8SApiFlowcontrolV1Beta2NonResourcePolicyRule = {
  nonResourceURLs: string[]
  verbs: string[]
}
export type IoK8SApiFlowcontrolV1Beta2ResourcePolicyRule = {
  apiGroups: string[]
  clusterScope?: boolean | undefined
  namespaces?: string[] | undefined
  resources: string[]
  verbs: string[]
}
export type IoK8SApiFlowcontrolV1Beta2GroupSubject = {
  name: string
}
export type IoK8SApiFlowcontrolV1Beta2ServiceAccountSubject = {
  name: string
  namespace: string
}
export type IoK8SApiFlowcontrolV1Beta2UserSubject = {
  name: string
}
export type IoK8SApiFlowcontrolV1Beta2Subject = {
  group?: IoK8SApiFlowcontrolV1Beta2GroupSubject | undefined
  kind: string
  serviceAccount?: IoK8SApiFlowcontrolV1Beta2ServiceAccountSubject | undefined
  user?: IoK8SApiFlowcontrolV1Beta2UserSubject | undefined
}
export type IoK8SApiFlowcontrolV1Beta2PolicyRulesWithSubjects = {
  nonResourceRules?:
    | IoK8SApiFlowcontrolV1Beta2NonResourcePolicyRule[]
    | undefined
  resourceRules?: IoK8SApiFlowcontrolV1Beta2ResourcePolicyRule[] | undefined
  subjects: IoK8SApiFlowcontrolV1Beta2Subject[]
}
export type IoK8SApiFlowcontrolV1Beta2FlowSchemaSpec = {
  distinguisherMethod?:
    | IoK8SApiFlowcontrolV1Beta2FlowDistinguisherMethod
    | undefined
  matchingPrecedence?: number | undefined
  priorityLevelConfiguration: IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationReference
  rules?: IoK8SApiFlowcontrolV1Beta2PolicyRulesWithSubjects[] | undefined
}
export type IoK8SApiFlowcontrolV1Beta2FlowSchemaCondition = {
  lastTransitionTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  message?: string | undefined
  reason?: string | undefined
  status?: string | undefined
  type?: string | undefined
}
export type IoK8SApiFlowcontrolV1Beta2FlowSchemaStatus = {
  conditions?: IoK8SApiFlowcontrolV1Beta2FlowSchemaCondition[] | undefined
}
export type IoK8SApiFlowcontrolV1Beta2FlowSchema = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiFlowcontrolV1Beta2FlowSchemaSpec | undefined
  status?: IoK8SApiFlowcontrolV1Beta2FlowSchemaStatus | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoK8SApiFlowcontrolV1Beta2FlowSchemaList = {
  apiVersion?: string | undefined
  items: IoK8SApiFlowcontrolV1Beta2FlowSchema[]
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
export type IoK8SApiFlowcontrolV1Beta2QueuingConfiguration = {
  handSize?: number | undefined
  queueLengthLimit?: number | undefined
  queues?: number | undefined
}
export type IoK8SApiFlowcontrolV1Beta2LimitResponse = {
  queuing?: IoK8SApiFlowcontrolV1Beta2QueuingConfiguration | undefined
  type: string
}
export type IoK8SApiFlowcontrolV1Beta2LimitedPriorityLevelConfiguration = {
  assuredConcurrencyShares?: number | undefined
  borrowingLimitPercent?: number | undefined
  lendablePercent?: number | undefined
  limitResponse?: IoK8SApiFlowcontrolV1Beta2LimitResponse | undefined
}
export type IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationSpec = {
  limited?:
    | IoK8SApiFlowcontrolV1Beta2LimitedPriorityLevelConfiguration
    | undefined
  type: string
}
export type IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationCondition = {
  lastTransitionTime?: IoK8SApimachineryPkgApisMetaV1Time | undefined
  message?: string | undefined
  reason?: string | undefined
  status?: string | undefined
  type?: string | undefined
}
export type IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationStatus = {
  conditions?:
    | IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationCondition[]
    | undefined
}
export type IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?: IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationSpec | undefined
  status?:
    | IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationStatus
    | undefined
}
export type IoK8SApiFlowcontrolV1Beta2PriorityLevelConfigurationList = {
  apiVersion?: string | undefined
  items: IoK8SApiFlowcontrolV1Beta2PriorityLevelConfiguration[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type IoK8SApimachineryPkgRuntimeRawExtension = object
export type IoK8SApimachineryPkgApisMetaV1WatchEvent = {
  object: IoK8SApimachineryPkgRuntimeRawExtension
  type: string
}
