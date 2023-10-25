import { apiClient, type Options } from '../../client'
export const listSparkoperatorV1Beta2NamespacedScheduledSparkApplication = (
  args: ListSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<ListSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications`,
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
export const createSparkoperatorV1Beta2NamespacedScheduledSparkApplication = (
  args: CreateSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<CreateSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications`,
      method: 'POST',
      body: args.ioK8SSparkoperatorV1Beta2ScheduledSparkApplication,
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
export const deleteSparkoperatorV1Beta2CollectionNamespacedScheduledSparkApplication =
  (
    args: DeleteSparkoperatorV1Beta2CollectionNamespacedScheduledSparkApplicationApiArg,
    options?: Options
  ) => {
    return apiClient<DeleteSparkoperatorV1Beta2CollectionNamespacedScheduledSparkApplicationApiResponse>(
      {
        path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications`,
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
export const readSparkoperatorV1Beta2NamespacedScheduledSparkApplication = (
  args: ReadSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<ReadSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceSparkoperatorV1Beta2NamespacedScheduledSparkApplication = (
  args: ReplaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<ReplaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications/${args.name}`,
      method: 'PUT',
      body: args.ioK8SSparkoperatorV1Beta2ScheduledSparkApplication,
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
export const deleteSparkoperatorV1Beta2NamespacedScheduledSparkApplication = (
  args: DeleteSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<DeleteSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications/${args.name}`,
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
export const patchSparkoperatorV1Beta2NamespacedScheduledSparkApplication = (
  args: PatchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<PatchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications/${args.name}`,
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
export const readSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatus =
  (
    args: ReadSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiArg,
    options?: Options
  ) => {
    return apiClient<ReadSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiResponse>(
      {
        path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications/${args.name}/status`,
        params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
      },
      options
    )
  }
export const replaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatus =
  (
    args: ReplaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiArg,
    options?: Options
  ) => {
    return apiClient<ReplaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiResponse>(
      {
        path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications/${args.name}/status`,
        method: 'PUT',
        body: args.ioK8SSparkoperatorV1Beta2ScheduledSparkApplication,
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
export const patchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatus =
  (
    args: PatchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiArg,
    options?: Options
  ) => {
    return apiClient<PatchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiResponse>(
      {
        path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/scheduledsparkapplications/${args.name}/status`,
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
export const listSparkoperatorV1Beta2NamespacedSparkApplication = (
  args: ListSparkoperatorV1Beta2NamespacedSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<ListSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications`,
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
export const createSparkoperatorV1Beta2NamespacedSparkApplication = (
  args: CreateSparkoperatorV1Beta2NamespacedSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<CreateSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications`,
      method: 'POST',
      body: args.ioK8SSparkoperatorV1Beta2SparkApplication,
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
export const deleteSparkoperatorV1Beta2CollectionNamespacedSparkApplication = (
  args: DeleteSparkoperatorV1Beta2CollectionNamespacedSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<DeleteSparkoperatorV1Beta2CollectionNamespacedSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications`,
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
export const readSparkoperatorV1Beta2NamespacedSparkApplication = (
  args: ReadSparkoperatorV1Beta2NamespacedSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<ReadSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceSparkoperatorV1Beta2NamespacedSparkApplication = (
  args: ReplaceSparkoperatorV1Beta2NamespacedSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<ReplaceSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications/${args.name}`,
      method: 'PUT',
      body: args.ioK8SSparkoperatorV1Beta2SparkApplication,
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
export const deleteSparkoperatorV1Beta2NamespacedSparkApplication = (
  args: DeleteSparkoperatorV1Beta2NamespacedSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<DeleteSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications/${args.name}`,
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
export const patchSparkoperatorV1Beta2NamespacedSparkApplication = (
  args: PatchSparkoperatorV1Beta2NamespacedSparkApplicationApiArg,
  options?: Options
) => {
  return apiClient<PatchSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications/${args.name}`,
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
export const readSparkoperatorV1Beta2NamespacedSparkApplicationStatus = (
  args: ReadSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceSparkoperatorV1Beta2NamespacedSparkApplicationStatus = (
  args: ReplaceSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications/${args.name}/status`,
      method: 'PUT',
      body: args.ioK8SSparkoperatorV1Beta2SparkApplication,
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
export const patchSparkoperatorV1Beta2NamespacedSparkApplicationStatus = (
  args: PatchSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/namespaces/${args['namespace']}/sparkapplications/${args.name}/status`,
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
export const listSparkoperatorV1Beta2ScheduledSparkApplicationForAllNamespaces =
  (
    args: ListSparkoperatorV1Beta2ScheduledSparkApplicationForAllNamespacesApiArg,
    options?: Options
  ) => {
    return apiClient<ListSparkoperatorV1Beta2ScheduledSparkApplicationForAllNamespacesApiResponse>(
      {
        path: `/apis/sparkoperator.k8s.io/v1beta2/scheduledsparkapplications`,
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
export const listSparkoperatorV1Beta2SparkApplicationForAllNamespaces = (
  args: ListSparkoperatorV1Beta2SparkApplicationForAllNamespacesApiArg,
  options?: Options
) => {
  return apiClient<ListSparkoperatorV1Beta2SparkApplicationForAllNamespacesApiResponse>(
    {
      path: `/apis/sparkoperator.k8s.io/v1beta2/sparkapplications`,
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
export type ListSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplicationList
export type ListSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg =
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
export type CreateSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse =
  /** status 200 OK */
  | IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
  | /** status 201 Created */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
  | /** status 202 Accepted */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
export type CreateSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg =
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
    ioK8SSparkoperatorV1Beta2ScheduledSparkApplication: IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
  }
export type DeleteSparkoperatorV1Beta2CollectionNamespacedScheduledSparkApplicationApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteSparkoperatorV1Beta2CollectionNamespacedScheduledSparkApplicationApiArg =
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
export type ReadSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
export type ReadSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg =
  {
    /** name of the ScheduledSparkApplication */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
  }
export type ReplaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse =
  /** status 200 OK */
  | IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
  | /** status 201 Created */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
export type ReplaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg =
  {
    /** name of the ScheduledSparkApplication */
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
    ioK8SSparkoperatorV1Beta2ScheduledSparkApplication: IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
  }
export type DeleteSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg =
  {
    /** name of the ScheduledSparkApplication */
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
export type PatchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
export type PatchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationApiArg =
  {
    /** name of the ScheduledSparkApplication */
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
    ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
  }
export type ReadSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
export type ReadSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiArg =
  {
    /** name of the ScheduledSparkApplication */
    name: string
    /** object name and auth scope, such as for teams and projects */
    namespace: string
    /** If 'true', then the output is pretty printed. */
    pretty?: string
    /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
    resourceVersion?: string
  }
export type ReplaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiResponse =
  /** status 200 OK */
  | IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
  | /** status 201 Created */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
export type ReplaceSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiArg =
  {
    /** name of the ScheduledSparkApplication */
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
    ioK8SSparkoperatorV1Beta2ScheduledSparkApplication: IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
  }
export type PatchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplication
export type PatchSparkoperatorV1Beta2NamespacedScheduledSparkApplicationStatusApiArg =
  {
    /** name of the ScheduledSparkApplication */
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
    ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
  }
export type ListSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2SparkApplicationList
export type ListSparkoperatorV1Beta2NamespacedSparkApplicationApiArg = {
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
export type CreateSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse =
  /** status 200 OK */
  | IoK8SSparkoperatorV1Beta2SparkApplication
  | /** status 201 Created */ IoK8SSparkoperatorV1Beta2SparkApplication
  | /** status 202 Accepted */ IoK8SSparkoperatorV1Beta2SparkApplication
export type CreateSparkoperatorV1Beta2NamespacedSparkApplicationApiArg = {
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
  ioK8SSparkoperatorV1Beta2SparkApplication: IoK8SSparkoperatorV1Beta2SparkApplication
}
export type DeleteSparkoperatorV1Beta2CollectionNamespacedSparkApplicationApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteSparkoperatorV1Beta2CollectionNamespacedSparkApplicationApiArg =
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
export type ReadSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2SparkApplication
export type ReadSparkoperatorV1Beta2NamespacedSparkApplicationApiArg = {
  /** name of the SparkApplication */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse =
  /** status 200 OK */
  | IoK8SSparkoperatorV1Beta2SparkApplication
  | /** status 201 Created */ IoK8SSparkoperatorV1Beta2SparkApplication
export type ReplaceSparkoperatorV1Beta2NamespacedSparkApplicationApiArg = {
  /** name of the SparkApplication */
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
  ioK8SSparkoperatorV1Beta2SparkApplication: IoK8SSparkoperatorV1Beta2SparkApplication
}
export type DeleteSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteSparkoperatorV1Beta2NamespacedSparkApplicationApiArg = {
  /** name of the SparkApplication */
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
export type PatchSparkoperatorV1Beta2NamespacedSparkApplicationApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2SparkApplication
export type PatchSparkoperatorV1Beta2NamespacedSparkApplicationApiArg = {
  /** name of the SparkApplication */
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
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ReadSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2SparkApplication
export type ReadSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiArg = {
  /** name of the SparkApplication */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiResponse =
  /** status 200 OK */
  | IoK8SSparkoperatorV1Beta2SparkApplication
  | /** status 201 Created */ IoK8SSparkoperatorV1Beta2SparkApplication
export type ReplaceSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiArg =
  {
    /** name of the SparkApplication */
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
    ioK8SSparkoperatorV1Beta2SparkApplication: IoK8SSparkoperatorV1Beta2SparkApplication
  }
export type PatchSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2SparkApplication
export type PatchSparkoperatorV1Beta2NamespacedSparkApplicationStatusApiArg = {
  /** name of the SparkApplication */
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
  ioK8SApimachineryPkgApisMetaV1Patch: IoK8SApimachineryPkgApisMetaV1Patch
}
export type ListSparkoperatorV1Beta2ScheduledSparkApplicationForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2ScheduledSparkApplicationList
export type ListSparkoperatorV1Beta2ScheduledSparkApplicationForAllNamespacesApiArg =
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
export type ListSparkoperatorV1Beta2SparkApplicationForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SSparkoperatorV1Beta2SparkApplicationList
export type ListSparkoperatorV1Beta2SparkApplicationForAllNamespacesApiArg = {
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
export type IoK8SSparkoperatorV1Beta2ScheduledSparkApplication = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata: IoK8SApimachineryPkgApisMetaV1ObjectMeta
  spec: {
    concurrencyPolicy?: string | undefined
    failedRunHistoryLimit?: number | undefined
    schedule: string
    successfulRunHistoryLimit?: number | undefined
    suspend?: boolean | undefined
    template: {
      arguments?: string[] | undefined
      batchScheduler?: string | undefined
      batchSchedulerOptions?:
        | {
            priorityClassName?: string | undefined
            queue?: string | undefined
            resources?:
              | {
                  [key: string]: number | string
                }
              | undefined
          }
        | undefined
      deps?:
        | {
            excludePackages?: string[] | undefined
            files?: string[] | undefined
            jars?: string[] | undefined
            packages?: string[] | undefined
            pyFiles?: string[] | undefined
            repositories?: string[] | undefined
          }
        | undefined
      driver: {
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
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                  matchLabels?:
                                    | {
                                        [key: string]: string
                                      }
                                    | undefined
                                }
                              | undefined
                            namespaces?: string[] | undefined
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
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          namespaces?: string[] | undefined
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
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                  matchLabels?:
                                    | {
                                        [key: string]: string
                                      }
                                    | undefined
                                }
                              | undefined
                            namespaces?: string[] | undefined
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
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          namespaces?: string[] | undefined
                          topologyKey: string
                        }[]
                      | undefined
                  }
                | undefined
            }
          | undefined
        annotations?:
          | {
              [key: string]: string
            }
          | undefined
        configMaps?:
          | {
              name: string
              path: string
            }[]
          | undefined
        coreLimit?: string | undefined
        coreRequest?: string | undefined
        cores?: number | undefined
        dnsConfig?:
          | {
              nameservers?: string[] | undefined
              options?:
                | {
                    name?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
              searches?: string[] | undefined
            }
          | undefined
        env?:
          | {
              name: string
              value?: string | undefined
              valueFrom?:
                | {
                    configMapKeyRef?:
                      | {
                          key: string
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    fieldRef?:
                      | {
                          apiVersion?: string | undefined
                          fieldPath: string
                        }
                      | undefined
                    resourceFieldRef?:
                      | {
                          containerName?: string | undefined
                          divisor?: (number | string) | undefined
                          resource: string
                        }
                      | undefined
                    secretKeyRef?:
                      | {
                          key: string
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }[]
          | undefined
        envFrom?:
          | {
              configMapRef?:
                | {
                    name?: string | undefined
                    optional?: boolean | undefined
                  }
                | undefined
              prefix?: string | undefined
              secretRef?:
                | {
                    name?: string | undefined
                    optional?: boolean | undefined
                  }
                | undefined
            }[]
          | undefined
        envSecretKeyRefs?:
          | {
              [key: string]: {
                key: string
                name: string
              }
            }
          | undefined
        envVars?:
          | {
              [key: string]: string
            }
          | undefined
        gpu?:
          | {
              name: string
              quantity: number
            }
          | undefined
        hostAliases?:
          | {
              hostnames?: string[] | undefined
              ip?: string | undefined
            }[]
          | undefined
        hostNetwork?: boolean | undefined
        image?: string | undefined
        initContainers?:
          | {
              args?: string[] | undefined
              command?: string[] | undefined
              env?:
                | {
                    name: string
                    value?: string | undefined
                    valueFrom?:
                      | {
                          configMapKeyRef?:
                            | {
                                key: string
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                          fieldRef?:
                            | {
                                apiVersion?: string | undefined
                                fieldPath: string
                              }
                            | undefined
                          resourceFieldRef?:
                            | {
                                containerName?: string | undefined
                                divisor?: (number | string) | undefined
                                resource: string
                              }
                            | undefined
                          secretKeyRef?:
                            | {
                                key: string
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                | undefined
              envFrom?:
                | {
                    configMapRef?:
                      | {
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    prefix?: string | undefined
                    secretRef?:
                      | {
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }[]
                | undefined
              image?: string | undefined
              imagePullPolicy?: string | undefined
              lifecycle?:
                | {
                    postStart?:
                      | {
                          exec?:
                            | {
                                command?: string[] | undefined
                              }
                            | undefined
                          httpGet?:
                            | {
                                host?: string | undefined
                                httpHeaders?:
                                  | {
                                      name: string
                                      value: string
                                    }[]
                                  | undefined
                                path?: string | undefined
                                port: number | string
                                scheme?: string | undefined
                              }
                            | undefined
                          tcpSocket?:
                            | {
                                host?: string | undefined
                                port: number | string
                              }
                            | undefined
                        }
                      | undefined
                    preStop?:
                      | {
                          exec?:
                            | {
                                command?: string[] | undefined
                              }
                            | undefined
                          httpGet?:
                            | {
                                host?: string | undefined
                                httpHeaders?:
                                  | {
                                      name: string
                                      value: string
                                    }[]
                                  | undefined
                                path?: string | undefined
                                port: number | string
                                scheme?: string | undefined
                              }
                            | undefined
                          tcpSocket?:
                            | {
                                host?: string | undefined
                                port: number | string
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              livenessProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              name: string
              ports?:
                | {
                    containerPort: number
                    hostIP?: string | undefined
                    hostPort?: number | undefined
                    name?: string | undefined
                    protocol: string
                  }[]
                | undefined
              readinessProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
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
              securityContext?:
                | {
                    allowPrivilegeEscalation?: boolean | undefined
                    capabilities?:
                      | {
                          add?: string[] | undefined
                          drop?: string[] | undefined
                        }
                      | undefined
                    privileged?: boolean | undefined
                    procMount?: string | undefined
                    readOnlyRootFilesystem?: boolean | undefined
                    runAsGroup?: number | undefined
                    runAsNonRoot?: boolean | undefined
                    runAsUser?: number | undefined
                    seLinuxOptions?:
                      | {
                          level?: string | undefined
                          role?: string | undefined
                          type?: string | undefined
                          user?: string | undefined
                        }
                      | undefined
                    windowsOptions?:
                      | {
                          gmsaCredentialSpec?: string | undefined
                          gmsaCredentialSpecName?: string | undefined
                          runAsUserName?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              startupProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              stdin?: boolean | undefined
              stdinOnce?: boolean | undefined
              terminationMessagePath?: string | undefined
              terminationMessagePolicy?: string | undefined
              tty?: boolean | undefined
              volumeDevices?:
                | {
                    devicePath: string
                    name: string
                  }[]
                | undefined
              volumeMounts?:
                | {
                    mountPath: string
                    mountPropagation?: string | undefined
                    name: string
                    readOnly?: boolean | undefined
                    subPath?: string | undefined
                    subPathExpr?: string | undefined
                  }[]
                | undefined
              workingDir?: string | undefined
            }[]
          | undefined
        javaOptions?: string | undefined
        kubernetesMaster?: string | undefined
        labels?:
          | {
              [key: string]: string
            }
          | undefined
        lifecycle?:
          | {
              postStart?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                  }
                | undefined
              preStop?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        memory?: string | undefined
        memoryOverhead?: string | undefined
        nodeSelector?:
          | {
              [key: string]: string
            }
          | undefined
        podName?: string | undefined
        podSecurityContext?:
          | {
              fsGroup?: number | undefined
              runAsGroup?: number | undefined
              runAsNonRoot?: boolean | undefined
              runAsUser?: number | undefined
              seLinuxOptions?:
                | {
                    level?: string | undefined
                    role?: string | undefined
                    type?: string | undefined
                    user?: string | undefined
                  }
                | undefined
              supplementalGroups?: number[] | undefined
              sysctls?:
                | {
                    name: string
                    value: string
                  }[]
                | undefined
              windowsOptions?:
                | {
                    gmsaCredentialSpec?: string | undefined
                    gmsaCredentialSpecName?: string | undefined
                    runAsUserName?: string | undefined
                  }
                | undefined
            }
          | undefined
        schedulerName?: string | undefined
        secrets?:
          | {
              name: string
              path: string
              secretType: string
            }[]
          | undefined
        securityContext?:
          | {
              allowPrivilegeEscalation?: boolean | undefined
              capabilities?:
                | {
                    add?: string[] | undefined
                    drop?: string[] | undefined
                  }
                | undefined
              privileged?: boolean | undefined
              procMount?: string | undefined
              readOnlyRootFilesystem?: boolean | undefined
              runAsGroup?: number | undefined
              runAsNonRoot?: boolean | undefined
              runAsUser?: number | undefined
              seLinuxOptions?:
                | {
                    level?: string | undefined
                    role?: string | undefined
                    type?: string | undefined
                    user?: string | undefined
                  }
                | undefined
              windowsOptions?:
                | {
                    gmsaCredentialSpec?: string | undefined
                    gmsaCredentialSpecName?: string | undefined
                    runAsUserName?: string | undefined
                  }
                | undefined
            }
          | undefined
        serviceAccount?: string | undefined
        serviceAnnotations?:
          | {
              [key: string]: string
            }
          | undefined
        shareProcessNamespace?: boolean | undefined
        sidecars?:
          | {
              args?: string[] | undefined
              command?: string[] | undefined
              env?:
                | {
                    name: string
                    value?: string | undefined
                    valueFrom?:
                      | {
                          configMapKeyRef?:
                            | {
                                key: string
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                          fieldRef?:
                            | {
                                apiVersion?: string | undefined
                                fieldPath: string
                              }
                            | undefined
                          resourceFieldRef?:
                            | {
                                containerName?: string | undefined
                                divisor?: (number | string) | undefined
                                resource: string
                              }
                            | undefined
                          secretKeyRef?:
                            | {
                                key: string
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                | undefined
              envFrom?:
                | {
                    configMapRef?:
                      | {
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    prefix?: string | undefined
                    secretRef?:
                      | {
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }[]
                | undefined
              image?: string | undefined
              imagePullPolicy?: string | undefined
              lifecycle?:
                | {
                    postStart?:
                      | {
                          exec?:
                            | {
                                command?: string[] | undefined
                              }
                            | undefined
                          httpGet?:
                            | {
                                host?: string | undefined
                                httpHeaders?:
                                  | {
                                      name: string
                                      value: string
                                    }[]
                                  | undefined
                                path?: string | undefined
                                port: number | string
                                scheme?: string | undefined
                              }
                            | undefined
                          tcpSocket?:
                            | {
                                host?: string | undefined
                                port: number | string
                              }
                            | undefined
                        }
                      | undefined
                    preStop?:
                      | {
                          exec?:
                            | {
                                command?: string[] | undefined
                              }
                            | undefined
                          httpGet?:
                            | {
                                host?: string | undefined
                                httpHeaders?:
                                  | {
                                      name: string
                                      value: string
                                    }[]
                                  | undefined
                                path?: string | undefined
                                port: number | string
                                scheme?: string | undefined
                              }
                            | undefined
                          tcpSocket?:
                            | {
                                host?: string | undefined
                                port: number | string
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              livenessProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              name: string
              ports?:
                | {
                    containerPort: number
                    hostIP?: string | undefined
                    hostPort?: number | undefined
                    name?: string | undefined
                    protocol: string
                  }[]
                | undefined
              readinessProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
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
              securityContext?:
                | {
                    allowPrivilegeEscalation?: boolean | undefined
                    capabilities?:
                      | {
                          add?: string[] | undefined
                          drop?: string[] | undefined
                        }
                      | undefined
                    privileged?: boolean | undefined
                    procMount?: string | undefined
                    readOnlyRootFilesystem?: boolean | undefined
                    runAsGroup?: number | undefined
                    runAsNonRoot?: boolean | undefined
                    runAsUser?: number | undefined
                    seLinuxOptions?:
                      | {
                          level?: string | undefined
                          role?: string | undefined
                          type?: string | undefined
                          user?: string | undefined
                        }
                      | undefined
                    windowsOptions?:
                      | {
                          gmsaCredentialSpec?: string | undefined
                          gmsaCredentialSpecName?: string | undefined
                          runAsUserName?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              startupProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              stdin?: boolean | undefined
              stdinOnce?: boolean | undefined
              terminationMessagePath?: string | undefined
              terminationMessagePolicy?: string | undefined
              tty?: boolean | undefined
              volumeDevices?:
                | {
                    devicePath: string
                    name: string
                  }[]
                | undefined
              volumeMounts?:
                | {
                    mountPath: string
                    mountPropagation?: string | undefined
                    name: string
                    readOnly?: boolean | undefined
                    subPath?: string | undefined
                    subPathExpr?: string | undefined
                  }[]
                | undefined
              workingDir?: string | undefined
            }[]
          | undefined
        terminationGracePeriodSeconds?: number | undefined
        tolerations?:
          | {
              effect?: string | undefined
              key?: string | undefined
              operator?: string | undefined
              tolerationSeconds?: number | undefined
              value?: string | undefined
            }[]
          | undefined
        volumeMounts?:
          | {
              mountPath: string
              mountPropagation?: string | undefined
              name: string
              readOnly?: boolean | undefined
              subPath?: string | undefined
              subPathExpr?: string | undefined
            }[]
          | undefined
      }
      dynamicAllocation?:
        | {
            enabled?: boolean | undefined
            initialExecutors?: number | undefined
            maxExecutors?: number | undefined
            minExecutors?: number | undefined
            shuffleTrackingTimeout?: number | undefined
          }
        | undefined
      executor: {
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
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                  matchLabels?:
                                    | {
                                        [key: string]: string
                                      }
                                    | undefined
                                }
                              | undefined
                            namespaces?: string[] | undefined
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
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          namespaces?: string[] | undefined
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
                                        values?: string[] | undefined
                                      }[]
                                    | undefined
                                  matchLabels?:
                                    | {
                                        [key: string]: string
                                      }
                                    | undefined
                                }
                              | undefined
                            namespaces?: string[] | undefined
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
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          namespaces?: string[] | undefined
                          topologyKey: string
                        }[]
                      | undefined
                  }
                | undefined
            }
          | undefined
        annotations?:
          | {
              [key: string]: string
            }
          | undefined
        configMaps?:
          | {
              name: string
              path: string
            }[]
          | undefined
        coreLimit?: string | undefined
        coreRequest?: string | undefined
        cores?: number | undefined
        deleteOnTermination?: boolean | undefined
        dnsConfig?:
          | {
              nameservers?: string[] | undefined
              options?:
                | {
                    name?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
              searches?: string[] | undefined
            }
          | undefined
        env?:
          | {
              name: string
              value?: string | undefined
              valueFrom?:
                | {
                    configMapKeyRef?:
                      | {
                          key: string
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    fieldRef?:
                      | {
                          apiVersion?: string | undefined
                          fieldPath: string
                        }
                      | undefined
                    resourceFieldRef?:
                      | {
                          containerName?: string | undefined
                          divisor?: (number | string) | undefined
                          resource: string
                        }
                      | undefined
                    secretKeyRef?:
                      | {
                          key: string
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }
                | undefined
            }[]
          | undefined
        envFrom?:
          | {
              configMapRef?:
                | {
                    name?: string | undefined
                    optional?: boolean | undefined
                  }
                | undefined
              prefix?: string | undefined
              secretRef?:
                | {
                    name?: string | undefined
                    optional?: boolean | undefined
                  }
                | undefined
            }[]
          | undefined
        envSecretKeyRefs?:
          | {
              [key: string]: {
                key: string
                name: string
              }
            }
          | undefined
        envVars?:
          | {
              [key: string]: string
            }
          | undefined
        gpu?:
          | {
              name: string
              quantity: number
            }
          | undefined
        hostAliases?:
          | {
              hostnames?: string[] | undefined
              ip?: string | undefined
            }[]
          | undefined
        hostNetwork?: boolean | undefined
        image?: string | undefined
        initContainers?:
          | {
              args?: string[] | undefined
              command?: string[] | undefined
              env?:
                | {
                    name: string
                    value?: string | undefined
                    valueFrom?:
                      | {
                          configMapKeyRef?:
                            | {
                                key: string
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                          fieldRef?:
                            | {
                                apiVersion?: string | undefined
                                fieldPath: string
                              }
                            | undefined
                          resourceFieldRef?:
                            | {
                                containerName?: string | undefined
                                divisor?: (number | string) | undefined
                                resource: string
                              }
                            | undefined
                          secretKeyRef?:
                            | {
                                key: string
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                | undefined
              envFrom?:
                | {
                    configMapRef?:
                      | {
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    prefix?: string | undefined
                    secretRef?:
                      | {
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }[]
                | undefined
              image?: string | undefined
              imagePullPolicy?: string | undefined
              lifecycle?:
                | {
                    postStart?:
                      | {
                          exec?:
                            | {
                                command?: string[] | undefined
                              }
                            | undefined
                          httpGet?:
                            | {
                                host?: string | undefined
                                httpHeaders?:
                                  | {
                                      name: string
                                      value: string
                                    }[]
                                  | undefined
                                path?: string | undefined
                                port: number | string
                                scheme?: string | undefined
                              }
                            | undefined
                          tcpSocket?:
                            | {
                                host?: string | undefined
                                port: number | string
                              }
                            | undefined
                        }
                      | undefined
                    preStop?:
                      | {
                          exec?:
                            | {
                                command?: string[] | undefined
                              }
                            | undefined
                          httpGet?:
                            | {
                                host?: string | undefined
                                httpHeaders?:
                                  | {
                                      name: string
                                      value: string
                                    }[]
                                  | undefined
                                path?: string | undefined
                                port: number | string
                                scheme?: string | undefined
                              }
                            | undefined
                          tcpSocket?:
                            | {
                                host?: string | undefined
                                port: number | string
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              livenessProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              name: string
              ports?:
                | {
                    containerPort: number
                    hostIP?: string | undefined
                    hostPort?: number | undefined
                    name?: string | undefined
                    protocol: string
                  }[]
                | undefined
              readinessProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
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
              securityContext?:
                | {
                    allowPrivilegeEscalation?: boolean | undefined
                    capabilities?:
                      | {
                          add?: string[] | undefined
                          drop?: string[] | undefined
                        }
                      | undefined
                    privileged?: boolean | undefined
                    procMount?: string | undefined
                    readOnlyRootFilesystem?: boolean | undefined
                    runAsGroup?: number | undefined
                    runAsNonRoot?: boolean | undefined
                    runAsUser?: number | undefined
                    seLinuxOptions?:
                      | {
                          level?: string | undefined
                          role?: string | undefined
                          type?: string | undefined
                          user?: string | undefined
                        }
                      | undefined
                    windowsOptions?:
                      | {
                          gmsaCredentialSpec?: string | undefined
                          gmsaCredentialSpecName?: string | undefined
                          runAsUserName?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              startupProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              stdin?: boolean | undefined
              stdinOnce?: boolean | undefined
              terminationMessagePath?: string | undefined
              terminationMessagePolicy?: string | undefined
              tty?: boolean | undefined
              volumeDevices?:
                | {
                    devicePath: string
                    name: string
                  }[]
                | undefined
              volumeMounts?:
                | {
                    mountPath: string
                    mountPropagation?: string | undefined
                    name: string
                    readOnly?: boolean | undefined
                    subPath?: string | undefined
                    subPathExpr?: string | undefined
                  }[]
                | undefined
              workingDir?: string | undefined
            }[]
          | undefined
        instances?: number | undefined
        javaOptions?: string | undefined
        labels?:
          | {
              [key: string]: string
            }
          | undefined
        memory?: string | undefined
        memoryOverhead?: string | undefined
        nodeSelector?:
          | {
              [key: string]: string
            }
          | undefined
        podSecurityContext?:
          | {
              fsGroup?: number | undefined
              runAsGroup?: number | undefined
              runAsNonRoot?: boolean | undefined
              runAsUser?: number | undefined
              seLinuxOptions?:
                | {
                    level?: string | undefined
                    role?: string | undefined
                    type?: string | undefined
                    user?: string | undefined
                  }
                | undefined
              supplementalGroups?: number[] | undefined
              sysctls?:
                | {
                    name: string
                    value: string
                  }[]
                | undefined
              windowsOptions?:
                | {
                    gmsaCredentialSpec?: string | undefined
                    gmsaCredentialSpecName?: string | undefined
                    runAsUserName?: string | undefined
                  }
                | undefined
            }
          | undefined
        schedulerName?: string | undefined
        secrets?:
          | {
              name: string
              path: string
              secretType: string
            }[]
          | undefined
        securityContext?:
          | {
              allowPrivilegeEscalation?: boolean | undefined
              capabilities?:
                | {
                    add?: string[] | undefined
                    drop?: string[] | undefined
                  }
                | undefined
              privileged?: boolean | undefined
              procMount?: string | undefined
              readOnlyRootFilesystem?: boolean | undefined
              runAsGroup?: number | undefined
              runAsNonRoot?: boolean | undefined
              runAsUser?: number | undefined
              seLinuxOptions?:
                | {
                    level?: string | undefined
                    role?: string | undefined
                    type?: string | undefined
                    user?: string | undefined
                  }
                | undefined
              windowsOptions?:
                | {
                    gmsaCredentialSpec?: string | undefined
                    gmsaCredentialSpecName?: string | undefined
                    runAsUserName?: string | undefined
                  }
                | undefined
            }
          | undefined
        serviceAccount?: string | undefined
        shareProcessNamespace?: boolean | undefined
        sidecars?:
          | {
              args?: string[] | undefined
              command?: string[] | undefined
              env?:
                | {
                    name: string
                    value?: string | undefined
                    valueFrom?:
                      | {
                          configMapKeyRef?:
                            | {
                                key: string
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                          fieldRef?:
                            | {
                                apiVersion?: string | undefined
                                fieldPath: string
                              }
                            | undefined
                          resourceFieldRef?:
                            | {
                                containerName?: string | undefined
                                divisor?: (number | string) | undefined
                                resource: string
                              }
                            | undefined
                          secretKeyRef?:
                            | {
                                key: string
                                name?: string | undefined
                                optional?: boolean | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                | undefined
              envFrom?:
                | {
                    configMapRef?:
                      | {
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    prefix?: string | undefined
                    secretRef?:
                      | {
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                  }[]
                | undefined
              image?: string | undefined
              imagePullPolicy?: string | undefined
              lifecycle?:
                | {
                    postStart?:
                      | {
                          exec?:
                            | {
                                command?: string[] | undefined
                              }
                            | undefined
                          httpGet?:
                            | {
                                host?: string | undefined
                                httpHeaders?:
                                  | {
                                      name: string
                                      value: string
                                    }[]
                                  | undefined
                                path?: string | undefined
                                port: number | string
                                scheme?: string | undefined
                              }
                            | undefined
                          tcpSocket?:
                            | {
                                host?: string | undefined
                                port: number | string
                              }
                            | undefined
                        }
                      | undefined
                    preStop?:
                      | {
                          exec?:
                            | {
                                command?: string[] | undefined
                              }
                            | undefined
                          httpGet?:
                            | {
                                host?: string | undefined
                                httpHeaders?:
                                  | {
                                      name: string
                                      value: string
                                    }[]
                                  | undefined
                                path?: string | undefined
                                port: number | string
                                scheme?: string | undefined
                              }
                            | undefined
                          tcpSocket?:
                            | {
                                host?: string | undefined
                                port: number | string
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              livenessProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              name: string
              ports?:
                | {
                    containerPort: number
                    hostIP?: string | undefined
                    hostPort?: number | undefined
                    name?: string | undefined
                    protocol: string
                  }[]
                | undefined
              readinessProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
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
              securityContext?:
                | {
                    allowPrivilegeEscalation?: boolean | undefined
                    capabilities?:
                      | {
                          add?: string[] | undefined
                          drop?: string[] | undefined
                        }
                      | undefined
                    privileged?: boolean | undefined
                    procMount?: string | undefined
                    readOnlyRootFilesystem?: boolean | undefined
                    runAsGroup?: number | undefined
                    runAsNonRoot?: boolean | undefined
                    runAsUser?: number | undefined
                    seLinuxOptions?:
                      | {
                          level?: string | undefined
                          role?: string | undefined
                          type?: string | undefined
                          user?: string | undefined
                        }
                      | undefined
                    windowsOptions?:
                      | {
                          gmsaCredentialSpec?: string | undefined
                          gmsaCredentialSpecName?: string | undefined
                          runAsUserName?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              startupProbe?:
                | {
                    exec?:
                      | {
                          command?: string[] | undefined
                        }
                      | undefined
                    failureThreshold?: number | undefined
                    httpGet?:
                      | {
                          host?: string | undefined
                          httpHeaders?:
                            | {
                                name: string
                                value: string
                              }[]
                            | undefined
                          path?: string | undefined
                          port: number | string
                          scheme?: string | undefined
                        }
                      | undefined
                    initialDelaySeconds?: number | undefined
                    periodSeconds?: number | undefined
                    successThreshold?: number | undefined
                    tcpSocket?:
                      | {
                          host?: string | undefined
                          port: number | string
                        }
                      | undefined
                    timeoutSeconds?: number | undefined
                  }
                | undefined
              stdin?: boolean | undefined
              stdinOnce?: boolean | undefined
              terminationMessagePath?: string | undefined
              terminationMessagePolicy?: string | undefined
              tty?: boolean | undefined
              volumeDevices?:
                | {
                    devicePath: string
                    name: string
                  }[]
                | undefined
              volumeMounts?:
                | {
                    mountPath: string
                    mountPropagation?: string | undefined
                    name: string
                    readOnly?: boolean | undefined
                    subPath?: string | undefined
                    subPathExpr?: string | undefined
                  }[]
                | undefined
              workingDir?: string | undefined
            }[]
          | undefined
        terminationGracePeriodSeconds?: number | undefined
        tolerations?:
          | {
              effect?: string | undefined
              key?: string | undefined
              operator?: string | undefined
              tolerationSeconds?: number | undefined
              value?: string | undefined
            }[]
          | undefined
        volumeMounts?:
          | {
              mountPath: string
              mountPropagation?: string | undefined
              name: string
              readOnly?: boolean | undefined
              subPath?: string | undefined
              subPathExpr?: string | undefined
            }[]
          | undefined
      }
      failureRetries?: number | undefined
      hadoopConf?:
        | {
            [key: string]: string
          }
        | undefined
      hadoopConfigMap?: string | undefined
      image?: string | undefined
      imagePullPolicy?: string | undefined
      imagePullSecrets?: string[] | undefined
      mainApplicationFile?: string | undefined
      mainClass?: string | undefined
      memoryOverheadFactor?: string | undefined
      mode?: ('cluster' | 'client') | undefined
      monitoring?:
        | {
            exposeDriverMetrics: boolean
            exposeExecutorMetrics: boolean
            metricsProperties?: string | undefined
            metricsPropertiesFile?: string | undefined
            prometheus?:
              | {
                  configFile?: string | undefined
                  configuration?: string | undefined
                  jmxExporterJar: string
                  port?: number | undefined
                  portName?: string | undefined
                }
              | undefined
          }
        | undefined
      nodeSelector?:
        | {
            [key: string]: string
          }
        | undefined
      proxyUser?: string | undefined
      pythonVersion?: ('2' | '3') | undefined
      restartPolicy?:
        | {
            onFailureRetries?: number | undefined
            onFailureRetryInterval?: number | undefined
            onSubmissionFailureRetries?: number | undefined
            onSubmissionFailureRetryInterval?: number | undefined
            type?: ('Never' | 'Always' | 'OnFailure') | undefined
          }
        | undefined
      retryInterval?: number | undefined
      sparkConf?:
        | {
            [key: string]: string
          }
        | undefined
      sparkConfigMap?: string | undefined
      sparkUIOptions?:
        | {
            ingressAnnotations?:
              | {
                  [key: string]: string
                }
              | undefined
            ingressTLS?:
              | {
                  hosts?: string[] | undefined
                  secretName?: string | undefined
                }[]
              | undefined
            serviceAnnotations?:
              | {
                  [key: string]: string
                }
              | undefined
            servicePort?: number | undefined
            serviceType?: string | undefined
          }
        | undefined
      sparkVersion: string
      timeToLiveSeconds?: number | undefined
      type: 'Java' | 'Python' | 'Scala' | 'R'
      volumes?:
        | {
            awsElasticBlockStore?:
              | {
                  fsType?: string | undefined
                  partition?: number | undefined
                  readOnly?: boolean | undefined
                  volumeID: string
                }
              | undefined
            azureDisk?:
              | {
                  cachingMode?: string | undefined
                  diskName: string
                  diskURI: string
                  fsType?: string | undefined
                  kind?: string | undefined
                  readOnly?: boolean | undefined
                }
              | undefined
            azureFile?:
              | {
                  readOnly?: boolean | undefined
                  secretName: string
                  shareName: string
                }
              | undefined
            cephfs?:
              | {
                  monitors: string[]
                  path?: string | undefined
                  readOnly?: boolean | undefined
                  secretFile?: string | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                      }
                    | undefined
                  user?: string | undefined
                }
              | undefined
            cinder?:
              | {
                  fsType?: string | undefined
                  readOnly?: boolean | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                      }
                    | undefined
                  volumeID: string
                }
              | undefined
            configMap?:
              | {
                  defaultMode?: number | undefined
                  items?:
                    | {
                        key: string
                        mode?: number | undefined
                        path: string
                      }[]
                    | undefined
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            csi?:
              | {
                  driver: string
                  fsType?: string | undefined
                  nodePublishSecretRef?:
                    | {
                        name?: string | undefined
                      }
                    | undefined
                  readOnly?: boolean | undefined
                  volumeAttributes?:
                    | {
                        [key: string]: string
                      }
                    | undefined
                }
              | undefined
            downwardAPI?:
              | {
                  defaultMode?: number | undefined
                  items?:
                    | {
                        fieldRef?:
                          | {
                              apiVersion?: string | undefined
                              fieldPath: string
                            }
                          | undefined
                        mode?: number | undefined
                        path: string
                        resourceFieldRef?:
                          | {
                              containerName?: string | undefined
                              divisor?: (number | string) | undefined
                              resource: string
                            }
                          | undefined
                      }[]
                    | undefined
                }
              | undefined
            emptyDir?:
              | {
                  medium?: string | undefined
                  sizeLimit?: (number | string) | undefined
                }
              | undefined
            fc?:
              | {
                  fsType?: string | undefined
                  lun?: number | undefined
                  readOnly?: boolean | undefined
                  targetWWNs?: string[] | undefined
                  wwids?: string[] | undefined
                }
              | undefined
            flexVolume?:
              | {
                  driver: string
                  fsType?: string | undefined
                  options?:
                    | {
                        [key: string]: string
                      }
                    | undefined
                  readOnly?: boolean | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                      }
                    | undefined
                }
              | undefined
            flocker?:
              | {
                  datasetName?: string | undefined
                  datasetUUID?: string | undefined
                }
              | undefined
            gcePersistentDisk?:
              | {
                  fsType?: string | undefined
                  partition?: number | undefined
                  pdName: string
                  readOnly?: boolean | undefined
                }
              | undefined
            gitRepo?:
              | {
                  directory?: string | undefined
                  repository: string
                  revision?: string | undefined
                }
              | undefined
            glusterfs?:
              | {
                  endpoints: string
                  path: string
                  readOnly?: boolean | undefined
                }
              | undefined
            hostPath?:
              | {
                  path: string
                  type?: string | undefined
                }
              | undefined
            iscsi?:
              | {
                  chapAuthDiscovery?: boolean | undefined
                  chapAuthSession?: boolean | undefined
                  fsType?: string | undefined
                  initiatorName?: string | undefined
                  iqn: string
                  iscsiInterface?: string | undefined
                  lun: number
                  portals?: string[] | undefined
                  readOnly?: boolean | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                      }
                    | undefined
                  targetPortal: string
                }
              | undefined
            name: string
            nfs?:
              | {
                  path: string
                  readOnly?: boolean | undefined
                  server: string
                }
              | undefined
            persistentVolumeClaim?:
              | {
                  claimName: string
                  readOnly?: boolean | undefined
                }
              | undefined
            photonPersistentDisk?:
              | {
                  fsType?: string | undefined
                  pdID: string
                }
              | undefined
            portworxVolume?:
              | {
                  fsType?: string | undefined
                  readOnly?: boolean | undefined
                  volumeID: string
                }
              | undefined
            projected?:
              | {
                  defaultMode?: number | undefined
                  sources: {
                    configMap?:
                      | {
                          items?:
                            | {
                                key: string
                                mode?: number | undefined
                                path: string
                              }[]
                            | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    downwardAPI?:
                      | {
                          items?:
                            | {
                                fieldRef?:
                                  | {
                                      apiVersion?: string | undefined
                                      fieldPath: string
                                    }
                                  | undefined
                                mode?: number | undefined
                                path: string
                                resourceFieldRef?:
                                  | {
                                      containerName?: string | undefined
                                      divisor?: (number | string) | undefined
                                      resource: string
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    secret?:
                      | {
                          items?:
                            | {
                                key: string
                                mode?: number | undefined
                                path: string
                              }[]
                            | undefined
                          name?: string | undefined
                          optional?: boolean | undefined
                        }
                      | undefined
                    serviceAccountToken?:
                      | {
                          audience?: string | undefined
                          expirationSeconds?: number | undefined
                          path: string
                        }
                      | undefined
                  }[]
                }
              | undefined
            quobyte?:
              | {
                  group?: string | undefined
                  readOnly?: boolean | undefined
                  registry: string
                  tenant?: string | undefined
                  user?: string | undefined
                  volume: string
                }
              | undefined
            rbd?:
              | {
                  fsType?: string | undefined
                  image: string
                  keyring?: string | undefined
                  monitors: string[]
                  pool?: string | undefined
                  readOnly?: boolean | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                      }
                    | undefined
                  user?: string | undefined
                }
              | undefined
            scaleIO?:
              | {
                  fsType?: string | undefined
                  gateway: string
                  protectionDomain?: string | undefined
                  readOnly?: boolean | undefined
                  secretRef: {
                    name?: string | undefined
                  }
                  sslEnabled?: boolean | undefined
                  storageMode?: string | undefined
                  storagePool?: string | undefined
                  system: string
                  volumeName?: string | undefined
                }
              | undefined
            secret?:
              | {
                  defaultMode?: number | undefined
                  items?:
                    | {
                        key: string
                        mode?: number | undefined
                        path: string
                      }[]
                    | undefined
                  optional?: boolean | undefined
                  secretName?: string | undefined
                }
              | undefined
            storageos?:
              | {
                  fsType?: string | undefined
                  readOnly?: boolean | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                      }
                    | undefined
                  volumeName?: string | undefined
                  volumeNamespace?: string | undefined
                }
              | undefined
            vsphereVolume?:
              | {
                  fsType?: string | undefined
                  storagePolicyID?: string | undefined
                  storagePolicyName?: string | undefined
                  volumePath: string
                }
              | undefined
          }[]
        | undefined
    }
  }
  status?:
    | {
        lastRun?: (string | null) | undefined
        lastRunName?: string | undefined
        nextRun?: (string | null) | undefined
        pastFailedRunNames?: string[] | undefined
        pastSuccessfulRunNames?: string[] | undefined
        reason?: string | undefined
        scheduleState?: string | undefined
      }
    | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoK8SSparkoperatorV1Beta2ScheduledSparkApplicationList = {
  apiVersion?: string | undefined
  items: IoK8SSparkoperatorV1Beta2ScheduledSparkApplication[]
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
export type IoK8SSparkoperatorV1Beta2SparkApplication = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata: IoK8SApimachineryPkgApisMetaV1ObjectMeta
  spec: {
    arguments?: string[] | undefined
    batchScheduler?: string | undefined
    batchSchedulerOptions?:
      | {
          priorityClassName?: string | undefined
          queue?: string | undefined
          resources?:
            | {
                [key: string]: number | string
              }
            | undefined
        }
      | undefined
    deps?:
      | {
          excludePackages?: string[] | undefined
          files?: string[] | undefined
          jars?: string[] | undefined
          packages?: string[] | undefined
          pyFiles?: string[] | undefined
          repositories?: string[] | undefined
        }
      | undefined
    driver: {
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
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          namespaces?: string[] | undefined
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
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
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
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          namespaces?: string[] | undefined
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
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
                        topologyKey: string
                      }[]
                    | undefined
                }
              | undefined
          }
        | undefined
      annotations?:
        | {
            [key: string]: string
          }
        | undefined
      configMaps?:
        | {
            name: string
            path: string
          }[]
        | undefined
      coreLimit?: string | undefined
      coreRequest?: string | undefined
      cores?: number | undefined
      dnsConfig?:
        | {
            nameservers?: string[] | undefined
            options?:
              | {
                  name?: string | undefined
                  value?: string | undefined
                }[]
              | undefined
            searches?: string[] | undefined
          }
        | undefined
      env?:
        | {
            name: string
            value?: string | undefined
            valueFrom?:
              | {
                  configMapKeyRef?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  fieldRef?:
                    | {
                        apiVersion?: string | undefined
                        fieldPath: string
                      }
                    | undefined
                  resourceFieldRef?:
                    | {
                        containerName?: string | undefined
                        divisor?: (number | string) | undefined
                        resource: string
                      }
                    | undefined
                  secretKeyRef?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
              | undefined
          }[]
        | undefined
      envFrom?:
        | {
            configMapRef?:
              | {
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            prefix?: string | undefined
            secretRef?:
              | {
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
          }[]
        | undefined
      envSecretKeyRefs?:
        | {
            [key: string]: {
              key: string
              name: string
            }
          }
        | undefined
      envVars?:
        | {
            [key: string]: string
          }
        | undefined
      gpu?:
        | {
            name: string
            quantity: number
          }
        | undefined
      hostAliases?:
        | {
            hostnames?: string[] | undefined
            ip?: string | undefined
          }[]
        | undefined
      hostNetwork?: boolean | undefined
      image?: string | undefined
      initContainers?:
        | {
            args?: string[] | undefined
            command?: string[] | undefined
            env?:
              | {
                  name: string
                  value?: string | undefined
                  valueFrom?:
                    | {
                        configMapKeyRef?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                        fieldRef?:
                          | {
                              apiVersion?: string | undefined
                              fieldPath: string
                            }
                          | undefined
                        resourceFieldRef?:
                          | {
                              containerName?: string | undefined
                              divisor?: (number | string) | undefined
                              resource: string
                            }
                          | undefined
                        secretKeyRef?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                      }
                    | undefined
                }[]
              | undefined
            envFrom?:
              | {
                  configMapRef?:
                    | {
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  prefix?: string | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }[]
              | undefined
            image?: string | undefined
            imagePullPolicy?: string | undefined
            lifecycle?:
              | {
                  postStart?:
                    | {
                        exec?:
                          | {
                              command?: string[] | undefined
                            }
                          | undefined
                        httpGet?:
                          | {
                              host?: string | undefined
                              httpHeaders?:
                                | {
                                    name: string
                                    value: string
                                  }[]
                                | undefined
                              path?: string | undefined
                              port: number | string
                              scheme?: string | undefined
                            }
                          | undefined
                        tcpSocket?:
                          | {
                              host?: string | undefined
                              port: number | string
                            }
                          | undefined
                      }
                    | undefined
                  preStop?:
                    | {
                        exec?:
                          | {
                              command?: string[] | undefined
                            }
                          | undefined
                        httpGet?:
                          | {
                              host?: string | undefined
                              httpHeaders?:
                                | {
                                    name: string
                                    value: string
                                  }[]
                                | undefined
                              path?: string | undefined
                              port: number | string
                              scheme?: string | undefined
                            }
                          | undefined
                        tcpSocket?:
                          | {
                              host?: string | undefined
                              port: number | string
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            livenessProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            name: string
            ports?:
              | {
                  containerPort: number
                  hostIP?: string | undefined
                  hostPort?: number | undefined
                  name?: string | undefined
                  protocol: string
                }[]
              | undefined
            readinessProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
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
            securityContext?:
              | {
                  allowPrivilegeEscalation?: boolean | undefined
                  capabilities?:
                    | {
                        add?: string[] | undefined
                        drop?: string[] | undefined
                      }
                    | undefined
                  privileged?: boolean | undefined
                  procMount?: string | undefined
                  readOnlyRootFilesystem?: boolean | undefined
                  runAsGroup?: number | undefined
                  runAsNonRoot?: boolean | undefined
                  runAsUser?: number | undefined
                  seLinuxOptions?:
                    | {
                        level?: string | undefined
                        role?: string | undefined
                        type?: string | undefined
                        user?: string | undefined
                      }
                    | undefined
                  windowsOptions?:
                    | {
                        gmsaCredentialSpec?: string | undefined
                        gmsaCredentialSpecName?: string | undefined
                        runAsUserName?: string | undefined
                      }
                    | undefined
                }
              | undefined
            startupProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            stdin?: boolean | undefined
            stdinOnce?: boolean | undefined
            terminationMessagePath?: string | undefined
            terminationMessagePolicy?: string | undefined
            tty?: boolean | undefined
            volumeDevices?:
              | {
                  devicePath: string
                  name: string
                }[]
              | undefined
            volumeMounts?:
              | {
                  mountPath: string
                  mountPropagation?: string | undefined
                  name: string
                  readOnly?: boolean | undefined
                  subPath?: string | undefined
                  subPathExpr?: string | undefined
                }[]
              | undefined
            workingDir?: string | undefined
          }[]
        | undefined
      javaOptions?: string | undefined
      kubernetesMaster?: string | undefined
      labels?:
        | {
            [key: string]: string
          }
        | undefined
      lifecycle?:
        | {
            postStart?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                }
              | undefined
            preStop?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      memory?: string | undefined
      memoryOverhead?: string | undefined
      nodeSelector?:
        | {
            [key: string]: string
          }
        | undefined
      podName?: string | undefined
      podSecurityContext?:
        | {
            fsGroup?: number | undefined
            runAsGroup?: number | undefined
            runAsNonRoot?: boolean | undefined
            runAsUser?: number | undefined
            seLinuxOptions?:
              | {
                  level?: string | undefined
                  role?: string | undefined
                  type?: string | undefined
                  user?: string | undefined
                }
              | undefined
            supplementalGroups?: number[] | undefined
            sysctls?:
              | {
                  name: string
                  value: string
                }[]
              | undefined
            windowsOptions?:
              | {
                  gmsaCredentialSpec?: string | undefined
                  gmsaCredentialSpecName?: string | undefined
                  runAsUserName?: string | undefined
                }
              | undefined
          }
        | undefined
      schedulerName?: string | undefined
      secrets?:
        | {
            name: string
            path: string
            secretType: string
          }[]
        | undefined
      securityContext?:
        | {
            allowPrivilegeEscalation?: boolean | undefined
            capabilities?:
              | {
                  add?: string[] | undefined
                  drop?: string[] | undefined
                }
              | undefined
            privileged?: boolean | undefined
            procMount?: string | undefined
            readOnlyRootFilesystem?: boolean | undefined
            runAsGroup?: number | undefined
            runAsNonRoot?: boolean | undefined
            runAsUser?: number | undefined
            seLinuxOptions?:
              | {
                  level?: string | undefined
                  role?: string | undefined
                  type?: string | undefined
                  user?: string | undefined
                }
              | undefined
            windowsOptions?:
              | {
                  gmsaCredentialSpec?: string | undefined
                  gmsaCredentialSpecName?: string | undefined
                  runAsUserName?: string | undefined
                }
              | undefined
          }
        | undefined
      serviceAccount?: string | undefined
      serviceAnnotations?:
        | {
            [key: string]: string
          }
        | undefined
      shareProcessNamespace?: boolean | undefined
      sidecars?:
        | {
            args?: string[] | undefined
            command?: string[] | undefined
            env?:
              | {
                  name: string
                  value?: string | undefined
                  valueFrom?:
                    | {
                        configMapKeyRef?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                        fieldRef?:
                          | {
                              apiVersion?: string | undefined
                              fieldPath: string
                            }
                          | undefined
                        resourceFieldRef?:
                          | {
                              containerName?: string | undefined
                              divisor?: (number | string) | undefined
                              resource: string
                            }
                          | undefined
                        secretKeyRef?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                      }
                    | undefined
                }[]
              | undefined
            envFrom?:
              | {
                  configMapRef?:
                    | {
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  prefix?: string | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }[]
              | undefined
            image?: string | undefined
            imagePullPolicy?: string | undefined
            lifecycle?:
              | {
                  postStart?:
                    | {
                        exec?:
                          | {
                              command?: string[] | undefined
                            }
                          | undefined
                        httpGet?:
                          | {
                              host?: string | undefined
                              httpHeaders?:
                                | {
                                    name: string
                                    value: string
                                  }[]
                                | undefined
                              path?: string | undefined
                              port: number | string
                              scheme?: string | undefined
                            }
                          | undefined
                        tcpSocket?:
                          | {
                              host?: string | undefined
                              port: number | string
                            }
                          | undefined
                      }
                    | undefined
                  preStop?:
                    | {
                        exec?:
                          | {
                              command?: string[] | undefined
                            }
                          | undefined
                        httpGet?:
                          | {
                              host?: string | undefined
                              httpHeaders?:
                                | {
                                    name: string
                                    value: string
                                  }[]
                                | undefined
                              path?: string | undefined
                              port: number | string
                              scheme?: string | undefined
                            }
                          | undefined
                        tcpSocket?:
                          | {
                              host?: string | undefined
                              port: number | string
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            livenessProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            name: string
            ports?:
              | {
                  containerPort: number
                  hostIP?: string | undefined
                  hostPort?: number | undefined
                  name?: string | undefined
                  protocol: string
                }[]
              | undefined
            readinessProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
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
            securityContext?:
              | {
                  allowPrivilegeEscalation?: boolean | undefined
                  capabilities?:
                    | {
                        add?: string[] | undefined
                        drop?: string[] | undefined
                      }
                    | undefined
                  privileged?: boolean | undefined
                  procMount?: string | undefined
                  readOnlyRootFilesystem?: boolean | undefined
                  runAsGroup?: number | undefined
                  runAsNonRoot?: boolean | undefined
                  runAsUser?: number | undefined
                  seLinuxOptions?:
                    | {
                        level?: string | undefined
                        role?: string | undefined
                        type?: string | undefined
                        user?: string | undefined
                      }
                    | undefined
                  windowsOptions?:
                    | {
                        gmsaCredentialSpec?: string | undefined
                        gmsaCredentialSpecName?: string | undefined
                        runAsUserName?: string | undefined
                      }
                    | undefined
                }
              | undefined
            startupProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            stdin?: boolean | undefined
            stdinOnce?: boolean | undefined
            terminationMessagePath?: string | undefined
            terminationMessagePolicy?: string | undefined
            tty?: boolean | undefined
            volumeDevices?:
              | {
                  devicePath: string
                  name: string
                }[]
              | undefined
            volumeMounts?:
              | {
                  mountPath: string
                  mountPropagation?: string | undefined
                  name: string
                  readOnly?: boolean | undefined
                  subPath?: string | undefined
                  subPathExpr?: string | undefined
                }[]
              | undefined
            workingDir?: string | undefined
          }[]
        | undefined
      terminationGracePeriodSeconds?: number | undefined
      tolerations?:
        | {
            effect?: string | undefined
            key?: string | undefined
            operator?: string | undefined
            tolerationSeconds?: number | undefined
            value?: string | undefined
          }[]
        | undefined
      volumeMounts?:
        | {
            mountPath: string
            mountPropagation?: string | undefined
            name: string
            readOnly?: boolean | undefined
            subPath?: string | undefined
            subPathExpr?: string | undefined
          }[]
        | undefined
    }
    dynamicAllocation?:
      | {
          enabled?: boolean | undefined
          initialExecutors?: number | undefined
          maxExecutors?: number | undefined
          minExecutors?: number | undefined
          shuffleTrackingTimeout?: number | undefined
        }
      | undefined
    executor: {
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
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          namespaces?: string[] | undefined
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
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
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
                                      values?: string[] | undefined
                                    }[]
                                  | undefined
                                matchLabels?:
                                  | {
                                      [key: string]: string
                                    }
                                  | undefined
                              }
                            | undefined
                          namespaces?: string[] | undefined
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
                                    values?: string[] | undefined
                                  }[]
                                | undefined
                              matchLabels?:
                                | {
                                    [key: string]: string
                                  }
                                | undefined
                            }
                          | undefined
                        namespaces?: string[] | undefined
                        topologyKey: string
                      }[]
                    | undefined
                }
              | undefined
          }
        | undefined
      annotations?:
        | {
            [key: string]: string
          }
        | undefined
      configMaps?:
        | {
            name: string
            path: string
          }[]
        | undefined
      coreLimit?: string | undefined
      coreRequest?: string | undefined
      cores?: number | undefined
      deleteOnTermination?: boolean | undefined
      dnsConfig?:
        | {
            nameservers?: string[] | undefined
            options?:
              | {
                  name?: string | undefined
                  value?: string | undefined
                }[]
              | undefined
            searches?: string[] | undefined
          }
        | undefined
      env?:
        | {
            name: string
            value?: string | undefined
            valueFrom?:
              | {
                  configMapKeyRef?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  fieldRef?:
                    | {
                        apiVersion?: string | undefined
                        fieldPath: string
                      }
                    | undefined
                  resourceFieldRef?:
                    | {
                        containerName?: string | undefined
                        divisor?: (number | string) | undefined
                        resource: string
                      }
                    | undefined
                  secretKeyRef?:
                    | {
                        key: string
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }
              | undefined
          }[]
        | undefined
      envFrom?:
        | {
            configMapRef?:
              | {
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
            prefix?: string | undefined
            secretRef?:
              | {
                  name?: string | undefined
                  optional?: boolean | undefined
                }
              | undefined
          }[]
        | undefined
      envSecretKeyRefs?:
        | {
            [key: string]: {
              key: string
              name: string
            }
          }
        | undefined
      envVars?:
        | {
            [key: string]: string
          }
        | undefined
      gpu?:
        | {
            name: string
            quantity: number
          }
        | undefined
      hostAliases?:
        | {
            hostnames?: string[] | undefined
            ip?: string | undefined
          }[]
        | undefined
      hostNetwork?: boolean | undefined
      image?: string | undefined
      initContainers?:
        | {
            args?: string[] | undefined
            command?: string[] | undefined
            env?:
              | {
                  name: string
                  value?: string | undefined
                  valueFrom?:
                    | {
                        configMapKeyRef?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                        fieldRef?:
                          | {
                              apiVersion?: string | undefined
                              fieldPath: string
                            }
                          | undefined
                        resourceFieldRef?:
                          | {
                              containerName?: string | undefined
                              divisor?: (number | string) | undefined
                              resource: string
                            }
                          | undefined
                        secretKeyRef?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                      }
                    | undefined
                }[]
              | undefined
            envFrom?:
              | {
                  configMapRef?:
                    | {
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  prefix?: string | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }[]
              | undefined
            image?: string | undefined
            imagePullPolicy?: string | undefined
            lifecycle?:
              | {
                  postStart?:
                    | {
                        exec?:
                          | {
                              command?: string[] | undefined
                            }
                          | undefined
                        httpGet?:
                          | {
                              host?: string | undefined
                              httpHeaders?:
                                | {
                                    name: string
                                    value: string
                                  }[]
                                | undefined
                              path?: string | undefined
                              port: number | string
                              scheme?: string | undefined
                            }
                          | undefined
                        tcpSocket?:
                          | {
                              host?: string | undefined
                              port: number | string
                            }
                          | undefined
                      }
                    | undefined
                  preStop?:
                    | {
                        exec?:
                          | {
                              command?: string[] | undefined
                            }
                          | undefined
                        httpGet?:
                          | {
                              host?: string | undefined
                              httpHeaders?:
                                | {
                                    name: string
                                    value: string
                                  }[]
                                | undefined
                              path?: string | undefined
                              port: number | string
                              scheme?: string | undefined
                            }
                          | undefined
                        tcpSocket?:
                          | {
                              host?: string | undefined
                              port: number | string
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            livenessProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            name: string
            ports?:
              | {
                  containerPort: number
                  hostIP?: string | undefined
                  hostPort?: number | undefined
                  name?: string | undefined
                  protocol: string
                }[]
              | undefined
            readinessProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
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
            securityContext?:
              | {
                  allowPrivilegeEscalation?: boolean | undefined
                  capabilities?:
                    | {
                        add?: string[] | undefined
                        drop?: string[] | undefined
                      }
                    | undefined
                  privileged?: boolean | undefined
                  procMount?: string | undefined
                  readOnlyRootFilesystem?: boolean | undefined
                  runAsGroup?: number | undefined
                  runAsNonRoot?: boolean | undefined
                  runAsUser?: number | undefined
                  seLinuxOptions?:
                    | {
                        level?: string | undefined
                        role?: string | undefined
                        type?: string | undefined
                        user?: string | undefined
                      }
                    | undefined
                  windowsOptions?:
                    | {
                        gmsaCredentialSpec?: string | undefined
                        gmsaCredentialSpecName?: string | undefined
                        runAsUserName?: string | undefined
                      }
                    | undefined
                }
              | undefined
            startupProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            stdin?: boolean | undefined
            stdinOnce?: boolean | undefined
            terminationMessagePath?: string | undefined
            terminationMessagePolicy?: string | undefined
            tty?: boolean | undefined
            volumeDevices?:
              | {
                  devicePath: string
                  name: string
                }[]
              | undefined
            volumeMounts?:
              | {
                  mountPath: string
                  mountPropagation?: string | undefined
                  name: string
                  readOnly?: boolean | undefined
                  subPath?: string | undefined
                  subPathExpr?: string | undefined
                }[]
              | undefined
            workingDir?: string | undefined
          }[]
        | undefined
      instances?: number | undefined
      javaOptions?: string | undefined
      labels?:
        | {
            [key: string]: string
          }
        | undefined
      memory?: string | undefined
      memoryOverhead?: string | undefined
      nodeSelector?:
        | {
            [key: string]: string
          }
        | undefined
      podSecurityContext?:
        | {
            fsGroup?: number | undefined
            runAsGroup?: number | undefined
            runAsNonRoot?: boolean | undefined
            runAsUser?: number | undefined
            seLinuxOptions?:
              | {
                  level?: string | undefined
                  role?: string | undefined
                  type?: string | undefined
                  user?: string | undefined
                }
              | undefined
            supplementalGroups?: number[] | undefined
            sysctls?:
              | {
                  name: string
                  value: string
                }[]
              | undefined
            windowsOptions?:
              | {
                  gmsaCredentialSpec?: string | undefined
                  gmsaCredentialSpecName?: string | undefined
                  runAsUserName?: string | undefined
                }
              | undefined
          }
        | undefined
      schedulerName?: string | undefined
      secrets?:
        | {
            name: string
            path: string
            secretType: string
          }[]
        | undefined
      securityContext?:
        | {
            allowPrivilegeEscalation?: boolean | undefined
            capabilities?:
              | {
                  add?: string[] | undefined
                  drop?: string[] | undefined
                }
              | undefined
            privileged?: boolean | undefined
            procMount?: string | undefined
            readOnlyRootFilesystem?: boolean | undefined
            runAsGroup?: number | undefined
            runAsNonRoot?: boolean | undefined
            runAsUser?: number | undefined
            seLinuxOptions?:
              | {
                  level?: string | undefined
                  role?: string | undefined
                  type?: string | undefined
                  user?: string | undefined
                }
              | undefined
            windowsOptions?:
              | {
                  gmsaCredentialSpec?: string | undefined
                  gmsaCredentialSpecName?: string | undefined
                  runAsUserName?: string | undefined
                }
              | undefined
          }
        | undefined
      serviceAccount?: string | undefined
      shareProcessNamespace?: boolean | undefined
      sidecars?:
        | {
            args?: string[] | undefined
            command?: string[] | undefined
            env?:
              | {
                  name: string
                  value?: string | undefined
                  valueFrom?:
                    | {
                        configMapKeyRef?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                        fieldRef?:
                          | {
                              apiVersion?: string | undefined
                              fieldPath: string
                            }
                          | undefined
                        resourceFieldRef?:
                          | {
                              containerName?: string | undefined
                              divisor?: (number | string) | undefined
                              resource: string
                            }
                          | undefined
                        secretKeyRef?:
                          | {
                              key: string
                              name?: string | undefined
                              optional?: boolean | undefined
                            }
                          | undefined
                      }
                    | undefined
                }[]
              | undefined
            envFrom?:
              | {
                  configMapRef?:
                    | {
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  prefix?: string | undefined
                  secretRef?:
                    | {
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                }[]
              | undefined
            image?: string | undefined
            imagePullPolicy?: string | undefined
            lifecycle?:
              | {
                  postStart?:
                    | {
                        exec?:
                          | {
                              command?: string[] | undefined
                            }
                          | undefined
                        httpGet?:
                          | {
                              host?: string | undefined
                              httpHeaders?:
                                | {
                                    name: string
                                    value: string
                                  }[]
                                | undefined
                              path?: string | undefined
                              port: number | string
                              scheme?: string | undefined
                            }
                          | undefined
                        tcpSocket?:
                          | {
                              host?: string | undefined
                              port: number | string
                            }
                          | undefined
                      }
                    | undefined
                  preStop?:
                    | {
                        exec?:
                          | {
                              command?: string[] | undefined
                            }
                          | undefined
                        httpGet?:
                          | {
                              host?: string | undefined
                              httpHeaders?:
                                | {
                                    name: string
                                    value: string
                                  }[]
                                | undefined
                              path?: string | undefined
                              port: number | string
                              scheme?: string | undefined
                            }
                          | undefined
                        tcpSocket?:
                          | {
                              host?: string | undefined
                              port: number | string
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            livenessProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            name: string
            ports?:
              | {
                  containerPort: number
                  hostIP?: string | undefined
                  hostPort?: number | undefined
                  name?: string | undefined
                  protocol: string
                }[]
              | undefined
            readinessProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
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
            securityContext?:
              | {
                  allowPrivilegeEscalation?: boolean | undefined
                  capabilities?:
                    | {
                        add?: string[] | undefined
                        drop?: string[] | undefined
                      }
                    | undefined
                  privileged?: boolean | undefined
                  procMount?: string | undefined
                  readOnlyRootFilesystem?: boolean | undefined
                  runAsGroup?: number | undefined
                  runAsNonRoot?: boolean | undefined
                  runAsUser?: number | undefined
                  seLinuxOptions?:
                    | {
                        level?: string | undefined
                        role?: string | undefined
                        type?: string | undefined
                        user?: string | undefined
                      }
                    | undefined
                  windowsOptions?:
                    | {
                        gmsaCredentialSpec?: string | undefined
                        gmsaCredentialSpecName?: string | undefined
                        runAsUserName?: string | undefined
                      }
                    | undefined
                }
              | undefined
            startupProbe?:
              | {
                  exec?:
                    | {
                        command?: string[] | undefined
                      }
                    | undefined
                  failureThreshold?: number | undefined
                  httpGet?:
                    | {
                        host?: string | undefined
                        httpHeaders?:
                          | {
                              name: string
                              value: string
                            }[]
                          | undefined
                        path?: string | undefined
                        port: number | string
                        scheme?: string | undefined
                      }
                    | undefined
                  initialDelaySeconds?: number | undefined
                  periodSeconds?: number | undefined
                  successThreshold?: number | undefined
                  tcpSocket?:
                    | {
                        host?: string | undefined
                        port: number | string
                      }
                    | undefined
                  timeoutSeconds?: number | undefined
                }
              | undefined
            stdin?: boolean | undefined
            stdinOnce?: boolean | undefined
            terminationMessagePath?: string | undefined
            terminationMessagePolicy?: string | undefined
            tty?: boolean | undefined
            volumeDevices?:
              | {
                  devicePath: string
                  name: string
                }[]
              | undefined
            volumeMounts?:
              | {
                  mountPath: string
                  mountPropagation?: string | undefined
                  name: string
                  readOnly?: boolean | undefined
                  subPath?: string | undefined
                  subPathExpr?: string | undefined
                }[]
              | undefined
            workingDir?: string | undefined
          }[]
        | undefined
      terminationGracePeriodSeconds?: number | undefined
      tolerations?:
        | {
            effect?: string | undefined
            key?: string | undefined
            operator?: string | undefined
            tolerationSeconds?: number | undefined
            value?: string | undefined
          }[]
        | undefined
      volumeMounts?:
        | {
            mountPath: string
            mountPropagation?: string | undefined
            name: string
            readOnly?: boolean | undefined
            subPath?: string | undefined
            subPathExpr?: string | undefined
          }[]
        | undefined
    }
    failureRetries?: number | undefined
    hadoopConf?:
      | {
          [key: string]: string
        }
      | undefined
    hadoopConfigMap?: string | undefined
    image?: string | undefined
    imagePullPolicy?: string | undefined
    imagePullSecrets?: string[] | undefined
    mainApplicationFile?: string | undefined
    mainClass?: string | undefined
    memoryOverheadFactor?: string | undefined
    mode?: ('cluster' | 'client') | undefined
    monitoring?:
      | {
          exposeDriverMetrics: boolean
          exposeExecutorMetrics: boolean
          metricsProperties?: string | undefined
          metricsPropertiesFile?: string | undefined
          prometheus?:
            | {
                configFile?: string | undefined
                configuration?: string | undefined
                jmxExporterJar: string
                port?: number | undefined
                portName?: string | undefined
              }
            | undefined
        }
      | undefined
    nodeSelector?:
      | {
          [key: string]: string
        }
      | undefined
    proxyUser?: string | undefined
    pythonVersion?: ('2' | '3') | undefined
    restartPolicy?:
      | {
          onFailureRetries?: number | undefined
          onFailureRetryInterval?: number | undefined
          onSubmissionFailureRetries?: number | undefined
          onSubmissionFailureRetryInterval?: number | undefined
          type?: ('Never' | 'Always' | 'OnFailure') | undefined
        }
      | undefined
    retryInterval?: number | undefined
    sparkConf?:
      | {
          [key: string]: string
        }
      | undefined
    sparkConfigMap?: string | undefined
    sparkUIOptions?:
      | {
          ingressAnnotations?:
            | {
                [key: string]: string
              }
            | undefined
          ingressTLS?:
            | {
                hosts?: string[] | undefined
                secretName?: string | undefined
              }[]
            | undefined
          serviceAnnotations?:
            | {
                [key: string]: string
              }
            | undefined
          servicePort?: number | undefined
          servicePortName?: string | undefined
          serviceType?: string | undefined
        }
      | undefined
    sparkVersion: string
    timeToLiveSeconds?: number | undefined
    type: 'Java' | 'Python' | 'Scala' | 'R'
    volumes?:
      | {
          awsElasticBlockStore?:
            | {
                fsType?: string | undefined
                partition?: number | undefined
                readOnly?: boolean | undefined
                volumeID: string
              }
            | undefined
          azureDisk?:
            | {
                cachingMode?: string | undefined
                diskName: string
                diskURI: string
                fsType?: string | undefined
                kind?: string | undefined
                readOnly?: boolean | undefined
              }
            | undefined
          azureFile?:
            | {
                readOnly?: boolean | undefined
                secretName: string
                shareName: string
              }
            | undefined
          cephfs?:
            | {
                monitors: string[]
                path?: string | undefined
                readOnly?: boolean | undefined
                secretFile?: string | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                user?: string | undefined
              }
            | undefined
          cinder?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                volumeID: string
              }
            | undefined
          configMap?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      key: string
                      mode?: number | undefined
                      path: string
                    }[]
                  | undefined
                name?: string | undefined
                optional?: boolean | undefined
              }
            | undefined
          csi?:
            | {
                driver: string
                fsType?: string | undefined
                nodePublishSecretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                readOnly?: boolean | undefined
                volumeAttributes?:
                  | {
                      [key: string]: string
                    }
                  | undefined
              }
            | undefined
          downwardAPI?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      fieldRef?:
                        | {
                            apiVersion?: string | undefined
                            fieldPath: string
                          }
                        | undefined
                      mode?: number | undefined
                      path: string
                      resourceFieldRef?:
                        | {
                            containerName?: string | undefined
                            divisor?: (number | string) | undefined
                            resource: string
                          }
                        | undefined
                    }[]
                  | undefined
              }
            | undefined
          emptyDir?:
            | {
                medium?: string | undefined
                sizeLimit?: (number | string) | undefined
              }
            | undefined
          fc?:
            | {
                fsType?: string | undefined
                lun?: number | undefined
                readOnly?: boolean | undefined
                targetWWNs?: string[] | undefined
                wwids?: string[] | undefined
              }
            | undefined
          flexVolume?:
            | {
                driver: string
                fsType?: string | undefined
                options?:
                  | {
                      [key: string]: string
                    }
                  | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
              }
            | undefined
          flocker?:
            | {
                datasetName?: string | undefined
                datasetUUID?: string | undefined
              }
            | undefined
          gcePersistentDisk?:
            | {
                fsType?: string | undefined
                partition?: number | undefined
                pdName: string
                readOnly?: boolean | undefined
              }
            | undefined
          gitRepo?:
            | {
                directory?: string | undefined
                repository: string
                revision?: string | undefined
              }
            | undefined
          glusterfs?:
            | {
                endpoints: string
                path: string
                readOnly?: boolean | undefined
              }
            | undefined
          hostPath?:
            | {
                path: string
                type?: string | undefined
              }
            | undefined
          iscsi?:
            | {
                chapAuthDiscovery?: boolean | undefined
                chapAuthSession?: boolean | undefined
                fsType?: string | undefined
                initiatorName?: string | undefined
                iqn: string
                iscsiInterface?: string | undefined
                lun: number
                portals?: string[] | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                targetPortal: string
              }
            | undefined
          name: string
          nfs?:
            | {
                path: string
                readOnly?: boolean | undefined
                server: string
              }
            | undefined
          persistentVolumeClaim?:
            | {
                claimName: string
                readOnly?: boolean | undefined
              }
            | undefined
          photonPersistentDisk?:
            | {
                fsType?: string | undefined
                pdID: string
              }
            | undefined
          portworxVolume?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                volumeID: string
              }
            | undefined
          projected?:
            | {
                defaultMode?: number | undefined
                sources: {
                  configMap?:
                    | {
                        items?:
                          | {
                              key: string
                              mode?: number | undefined
                              path: string
                            }[]
                          | undefined
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  downwardAPI?:
                    | {
                        items?:
                          | {
                              fieldRef?:
                                | {
                                    apiVersion?: string | undefined
                                    fieldPath: string
                                  }
                                | undefined
                              mode?: number | undefined
                              path: string
                              resourceFieldRef?:
                                | {
                                    containerName?: string | undefined
                                    divisor?: (number | string) | undefined
                                    resource: string
                                  }
                                | undefined
                            }[]
                          | undefined
                      }
                    | undefined
                  secret?:
                    | {
                        items?:
                          | {
                              key: string
                              mode?: number | undefined
                              path: string
                            }[]
                          | undefined
                        name?: string | undefined
                        optional?: boolean | undefined
                      }
                    | undefined
                  serviceAccountToken?:
                    | {
                        audience?: string | undefined
                        expirationSeconds?: number | undefined
                        path: string
                      }
                    | undefined
                }[]
              }
            | undefined
          quobyte?:
            | {
                group?: string | undefined
                readOnly?: boolean | undefined
                registry: string
                tenant?: string | undefined
                user?: string | undefined
                volume: string
              }
            | undefined
          rbd?:
            | {
                fsType?: string | undefined
                image: string
                keyring?: string | undefined
                monitors: string[]
                pool?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                user?: string | undefined
              }
            | undefined
          scaleIO?:
            | {
                fsType?: string | undefined
                gateway: string
                protectionDomain?: string | undefined
                readOnly?: boolean | undefined
                secretRef: {
                  name?: string | undefined
                }
                sslEnabled?: boolean | undefined
                storageMode?: string | undefined
                storagePool?: string | undefined
                system: string
                volumeName?: string | undefined
              }
            | undefined
          secret?:
            | {
                defaultMode?: number | undefined
                items?:
                  | {
                      key: string
                      mode?: number | undefined
                      path: string
                    }[]
                  | undefined
                optional?: boolean | undefined
                secretName?: string | undefined
              }
            | undefined
          storageos?:
            | {
                fsType?: string | undefined
                readOnly?: boolean | undefined
                secretRef?:
                  | {
                      name?: string | undefined
                    }
                  | undefined
                volumeName?: string | undefined
                volumeNamespace?: string | undefined
              }
            | undefined
          vsphereVolume?:
            | {
                fsType?: string | undefined
                storagePolicyID?: string | undefined
                storagePolicyName?: string | undefined
                volumePath: string
              }
            | undefined
        }[]
      | undefined
  }
  status?:
    | {
        applicationState?:
          | {
              errorMessage?: string | undefined
              state: string
            }
          | undefined
        driverInfo: {
          podName?: string | undefined
          webUIAddress?: string | undefined
          webUIIngressAddress?: string | undefined
          webUIIngressName?: string | undefined
          webUIPort?: number | undefined
          webUIServiceName?: string | undefined
        }
        executionAttempts?: number | undefined
        executorState?:
          | {
              [key: string]: string
            }
          | undefined
        lastSubmissionAttemptTime?: (string | null) | undefined
        sparkApplicationId?: string | undefined
        submissionAttempts?: number | undefined
        submissionID?: string | undefined
        terminationTime?: (string | null) | undefined
      }
    | undefined
}
export type IoK8SSparkoperatorV1Beta2SparkApplicationList = {
  apiVersion?: string | undefined
  items: IoK8SSparkoperatorV1Beta2SparkApplication[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
