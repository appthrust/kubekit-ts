import { apiClient, type Options } from '../../client'
export const listMutationsGatekeeperShV1Alpha1Assign = (
  args: ListMutationsGatekeeperShV1Alpha1AssignApiArg,
  options?: Options
) => {
  return apiClient<ListMutationsGatekeeperShV1Alpha1AssignApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign`,
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
export const createMutationsGatekeeperShV1Alpha1Assign = (
  args: CreateMutationsGatekeeperShV1Alpha1AssignApiArg,
  options?: Options
) => {
  return apiClient<CreateMutationsGatekeeperShV1Alpha1AssignApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign`,
      method: 'POST',
      body: args.shGatekeeperMutationsV1Alpha1Assign,
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
export const deleteMutationsGatekeeperShV1Alpha1CollectionAssign = (
  args: DeleteMutationsGatekeeperShV1Alpha1CollectionAssignApiArg,
  options?: Options
) => {
  return apiClient<DeleteMutationsGatekeeperShV1Alpha1CollectionAssignApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign`,
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
export const readMutationsGatekeeperShV1Alpha1Assign = (
  args: ReadMutationsGatekeeperShV1Alpha1AssignApiArg,
  options?: Options
) => {
  return apiClient<ReadMutationsGatekeeperShV1Alpha1AssignApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMutationsGatekeeperShV1Alpha1Assign = (
  args: ReplaceMutationsGatekeeperShV1Alpha1AssignApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMutationsGatekeeperShV1Alpha1AssignApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign/${args.name}`,
      method: 'PUT',
      body: args.shGatekeeperMutationsV1Alpha1Assign,
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
export const deleteMutationsGatekeeperShV1Alpha1Assign = (
  args: DeleteMutationsGatekeeperShV1Alpha1AssignApiArg,
  options?: Options
) => {
  return apiClient<DeleteMutationsGatekeeperShV1Alpha1AssignApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign/${args.name}`,
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
export const patchMutationsGatekeeperShV1Alpha1Assign = (
  args: PatchMutationsGatekeeperShV1Alpha1AssignApiArg,
  options?: Options
) => {
  return apiClient<PatchMutationsGatekeeperShV1Alpha1AssignApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign/${args.name}`,
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
export const readMutationsGatekeeperShV1Alpha1AssignStatus = (
  args: ReadMutationsGatekeeperShV1Alpha1AssignStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadMutationsGatekeeperShV1Alpha1AssignStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMutationsGatekeeperShV1Alpha1AssignStatus = (
  args: ReplaceMutationsGatekeeperShV1Alpha1AssignStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMutationsGatekeeperShV1Alpha1AssignStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign/${args.name}/status`,
      method: 'PUT',
      body: args.shGatekeeperMutationsV1Alpha1Assign,
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
export const patchMutationsGatekeeperShV1Alpha1AssignStatus = (
  args: PatchMutationsGatekeeperShV1Alpha1AssignStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchMutationsGatekeeperShV1Alpha1AssignStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assign/${args.name}/status`,
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
export const listMutationsGatekeeperShV1Alpha1AssignMetadata = (
  args: ListMutationsGatekeeperShV1Alpha1AssignMetadataApiArg,
  options?: Options
) => {
  return apiClient<ListMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata`,
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
export const createMutationsGatekeeperShV1Alpha1AssignMetadata = (
  args: CreateMutationsGatekeeperShV1Alpha1AssignMetadataApiArg,
  options?: Options
) => {
  return apiClient<CreateMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata`,
      method: 'POST',
      body: args.shGatekeeperMutationsV1Alpha1AssignMetadata,
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
export const deleteMutationsGatekeeperShV1Alpha1CollectionAssignMetadata = (
  args: DeleteMutationsGatekeeperShV1Alpha1CollectionAssignMetadataApiArg,
  options?: Options
) => {
  return apiClient<DeleteMutationsGatekeeperShV1Alpha1CollectionAssignMetadataApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata`,
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
export const readMutationsGatekeeperShV1Alpha1AssignMetadata = (
  args: ReadMutationsGatekeeperShV1Alpha1AssignMetadataApiArg,
  options?: Options
) => {
  return apiClient<ReadMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMutationsGatekeeperShV1Alpha1AssignMetadata = (
  args: ReplaceMutationsGatekeeperShV1Alpha1AssignMetadataApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata/${args.name}`,
      method: 'PUT',
      body: args.shGatekeeperMutationsV1Alpha1AssignMetadata,
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
export const deleteMutationsGatekeeperShV1Alpha1AssignMetadata = (
  args: DeleteMutationsGatekeeperShV1Alpha1AssignMetadataApiArg,
  options?: Options
) => {
  return apiClient<DeleteMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata/${args.name}`,
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
export const patchMutationsGatekeeperShV1Alpha1AssignMetadata = (
  args: PatchMutationsGatekeeperShV1Alpha1AssignMetadataApiArg,
  options?: Options
) => {
  return apiClient<PatchMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata/${args.name}`,
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
export const readMutationsGatekeeperShV1Alpha1AssignMetadataStatus = (
  args: ReadMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMutationsGatekeeperShV1Alpha1AssignMetadataStatus = (
  args: ReplaceMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata/${args.name}/status`,
      method: 'PUT',
      body: args.shGatekeeperMutationsV1Alpha1AssignMetadata,
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
export const patchMutationsGatekeeperShV1Alpha1AssignMetadataStatus = (
  args: PatchMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/assignmetadata/${args.name}/status`,
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
export const listMutationsGatekeeperShV1Alpha1ModifySet = (
  args: ListMutationsGatekeeperShV1Alpha1ModifySetApiArg,
  options?: Options
) => {
  return apiClient<ListMutationsGatekeeperShV1Alpha1ModifySetApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset`,
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
export const createMutationsGatekeeperShV1Alpha1ModifySet = (
  args: CreateMutationsGatekeeperShV1Alpha1ModifySetApiArg,
  options?: Options
) => {
  return apiClient<CreateMutationsGatekeeperShV1Alpha1ModifySetApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset`,
      method: 'POST',
      body: args.shGatekeeperMutationsV1Alpha1ModifySet,
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
export const deleteMutationsGatekeeperShV1Alpha1CollectionModifySet = (
  args: DeleteMutationsGatekeeperShV1Alpha1CollectionModifySetApiArg,
  options?: Options
) => {
  return apiClient<DeleteMutationsGatekeeperShV1Alpha1CollectionModifySetApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset`,
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
export const readMutationsGatekeeperShV1Alpha1ModifySet = (
  args: ReadMutationsGatekeeperShV1Alpha1ModifySetApiArg,
  options?: Options
) => {
  return apiClient<ReadMutationsGatekeeperShV1Alpha1ModifySetApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset/${args.name}`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMutationsGatekeeperShV1Alpha1ModifySet = (
  args: ReplaceMutationsGatekeeperShV1Alpha1ModifySetApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMutationsGatekeeperShV1Alpha1ModifySetApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset/${args.name}`,
      method: 'PUT',
      body: args.shGatekeeperMutationsV1Alpha1ModifySet,
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
export const deleteMutationsGatekeeperShV1Alpha1ModifySet = (
  args: DeleteMutationsGatekeeperShV1Alpha1ModifySetApiArg,
  options?: Options
) => {
  return apiClient<DeleteMutationsGatekeeperShV1Alpha1ModifySetApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset/${args.name}`,
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
export const patchMutationsGatekeeperShV1Alpha1ModifySet = (
  args: PatchMutationsGatekeeperShV1Alpha1ModifySetApiArg,
  options?: Options
) => {
  return apiClient<PatchMutationsGatekeeperShV1Alpha1ModifySetApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset/${args.name}`,
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
export const readMutationsGatekeeperShV1Alpha1ModifySetStatus = (
  args: ReadMutationsGatekeeperShV1Alpha1ModifySetStatusApiArg,
  options?: Options
) => {
  return apiClient<ReadMutationsGatekeeperShV1Alpha1ModifySetStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset/${args.name}/status`,
      params: { pretty: args.pretty, resourceVersion: args.resourceVersion },
    },
    options
  )
}
export const replaceMutationsGatekeeperShV1Alpha1ModifySetStatus = (
  args: ReplaceMutationsGatekeeperShV1Alpha1ModifySetStatusApiArg,
  options?: Options
) => {
  return apiClient<ReplaceMutationsGatekeeperShV1Alpha1ModifySetStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset/${args.name}/status`,
      method: 'PUT',
      body: args.shGatekeeperMutationsV1Alpha1ModifySet,
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
export const patchMutationsGatekeeperShV1Alpha1ModifySetStatus = (
  args: PatchMutationsGatekeeperShV1Alpha1ModifySetStatusApiArg,
  options?: Options
) => {
  return apiClient<PatchMutationsGatekeeperShV1Alpha1ModifySetStatusApiResponse>(
    {
      path: `/apis/mutations.gatekeeper.sh/v1alpha1/modifyset/${args.name}/status`,
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
export type ListMutationsGatekeeperShV1Alpha1AssignApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1AssignList
export type ListMutationsGatekeeperShV1Alpha1AssignApiArg = {
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
export type CreateMutationsGatekeeperShV1Alpha1AssignApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1Assign
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1Assign
  | /** status 202 Accepted */ ShGatekeeperMutationsV1Alpha1Assign
export type CreateMutationsGatekeeperShV1Alpha1AssignApiArg = {
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1Assign: ShGatekeeperMutationsV1Alpha1Assign
}
export type DeleteMutationsGatekeeperShV1Alpha1CollectionAssignApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMutationsGatekeeperShV1Alpha1CollectionAssignApiArg = {
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
export type ReadMutationsGatekeeperShV1Alpha1AssignApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1Assign
export type ReadMutationsGatekeeperShV1Alpha1AssignApiArg = {
  /** name of the Assign */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMutationsGatekeeperShV1Alpha1AssignApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1Assign
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1Assign
export type ReplaceMutationsGatekeeperShV1Alpha1AssignApiArg = {
  /** name of the Assign */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1Assign: ShGatekeeperMutationsV1Alpha1Assign
}
export type DeleteMutationsGatekeeperShV1Alpha1AssignApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMutationsGatekeeperShV1Alpha1AssignApiArg = {
  /** name of the Assign */
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
export type PatchMutationsGatekeeperShV1Alpha1AssignApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1Assign
export type PatchMutationsGatekeeperShV1Alpha1AssignApiArg = {
  /** name of the Assign */
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
export type ReadMutationsGatekeeperShV1Alpha1AssignStatusApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1Assign
export type ReadMutationsGatekeeperShV1Alpha1AssignStatusApiArg = {
  /** name of the Assign */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMutationsGatekeeperShV1Alpha1AssignStatusApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1Assign
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1Assign
export type ReplaceMutationsGatekeeperShV1Alpha1AssignStatusApiArg = {
  /** name of the Assign */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1Assign: ShGatekeeperMutationsV1Alpha1Assign
}
export type PatchMutationsGatekeeperShV1Alpha1AssignStatusApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1Assign
export type PatchMutationsGatekeeperShV1Alpha1AssignStatusApiArg = {
  /** name of the Assign */
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
export type ListMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1AssignMetadataList
export type ListMutationsGatekeeperShV1Alpha1AssignMetadataApiArg = {
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
export type CreateMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1AssignMetadata
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1AssignMetadata
  | /** status 202 Accepted */ ShGatekeeperMutationsV1Alpha1AssignMetadata
export type CreateMutationsGatekeeperShV1Alpha1AssignMetadataApiArg = {
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1AssignMetadata: ShGatekeeperMutationsV1Alpha1AssignMetadata
}
export type DeleteMutationsGatekeeperShV1Alpha1CollectionAssignMetadataApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMutationsGatekeeperShV1Alpha1CollectionAssignMetadataApiArg =
  {
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
export type ReadMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1AssignMetadata
export type ReadMutationsGatekeeperShV1Alpha1AssignMetadataApiArg = {
  /** name of the AssignMetadata */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1AssignMetadata
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1AssignMetadata
export type ReplaceMutationsGatekeeperShV1Alpha1AssignMetadataApiArg = {
  /** name of the AssignMetadata */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1AssignMetadata: ShGatekeeperMutationsV1Alpha1AssignMetadata
}
export type DeleteMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMutationsGatekeeperShV1Alpha1AssignMetadataApiArg = {
  /** name of the AssignMetadata */
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
export type PatchMutationsGatekeeperShV1Alpha1AssignMetadataApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1AssignMetadata
export type PatchMutationsGatekeeperShV1Alpha1AssignMetadataApiArg = {
  /** name of the AssignMetadata */
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
export type ReadMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1AssignMetadata
export type ReadMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiArg = {
  /** name of the AssignMetadata */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1AssignMetadata
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1AssignMetadata
export type ReplaceMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiArg = {
  /** name of the AssignMetadata */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1AssignMetadata: ShGatekeeperMutationsV1Alpha1AssignMetadata
}
export type PatchMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1AssignMetadata
export type PatchMutationsGatekeeperShV1Alpha1AssignMetadataStatusApiArg = {
  /** name of the AssignMetadata */
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
export type ListMutationsGatekeeperShV1Alpha1ModifySetApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1ModifySetList
export type ListMutationsGatekeeperShV1Alpha1ModifySetApiArg = {
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
export type CreateMutationsGatekeeperShV1Alpha1ModifySetApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1ModifySet
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1ModifySet
  | /** status 202 Accepted */ ShGatekeeperMutationsV1Alpha1ModifySet
export type CreateMutationsGatekeeperShV1Alpha1ModifySetApiArg = {
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1ModifySet: ShGatekeeperMutationsV1Alpha1ModifySet
}
export type DeleteMutationsGatekeeperShV1Alpha1CollectionModifySetApiResponse =
  /** status 200 OK */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMutationsGatekeeperShV1Alpha1CollectionModifySetApiArg = {
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
export type ReadMutationsGatekeeperShV1Alpha1ModifySetApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1ModifySet
export type ReadMutationsGatekeeperShV1Alpha1ModifySetApiArg = {
  /** name of the ModifySet */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMutationsGatekeeperShV1Alpha1ModifySetApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1ModifySet
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1ModifySet
export type ReplaceMutationsGatekeeperShV1Alpha1ModifySetApiArg = {
  /** name of the ModifySet */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1ModifySet: ShGatekeeperMutationsV1Alpha1ModifySet
}
export type DeleteMutationsGatekeeperShV1Alpha1ModifySetApiResponse =
  /** status 200 OK */
  | IoK8SApimachineryPkgApisMetaV1Status
  | /** status 202 Accepted */ IoK8SApimachineryPkgApisMetaV1Status
export type DeleteMutationsGatekeeperShV1Alpha1ModifySetApiArg = {
  /** name of the ModifySet */
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
export type PatchMutationsGatekeeperShV1Alpha1ModifySetApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1ModifySet
export type PatchMutationsGatekeeperShV1Alpha1ModifySetApiArg = {
  /** name of the ModifySet */
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
export type ReadMutationsGatekeeperShV1Alpha1ModifySetStatusApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1ModifySet
export type ReadMutationsGatekeeperShV1Alpha1ModifySetStatusApiArg = {
  /** name of the ModifySet */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
    
    Defaults to unset */
  resourceVersion?: string
}
export type ReplaceMutationsGatekeeperShV1Alpha1ModifySetStatusApiResponse =
  /** status 200 OK */
  | ShGatekeeperMutationsV1Alpha1ModifySet
  | /** status 201 Created */ ShGatekeeperMutationsV1Alpha1ModifySet
export type ReplaceMutationsGatekeeperShV1Alpha1ModifySetStatusApiArg = {
  /** name of the ModifySet */
  name: string
  /** If 'true', then the output is pretty printed. */
  pretty?: string
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string
  /** fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. */
  fieldManager?: string
  /** fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. */
  fieldValidation?: string
  shGatekeeperMutationsV1Alpha1ModifySet: ShGatekeeperMutationsV1Alpha1ModifySet
}
export type PatchMutationsGatekeeperShV1Alpha1ModifySetStatusApiResponse =
  /** status 200 OK */ ShGatekeeperMutationsV1Alpha1ModifySet
export type PatchMutationsGatekeeperShV1Alpha1ModifySetStatusApiArg = {
  /** name of the ModifySet */
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
export type ShGatekeeperMutationsV1Alpha1Assign = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        applyTo?:
          | {
              groups?: string[] | undefined
              kinds?: string[] | undefined
              versions?: string[] | undefined
            }[]
          | undefined
        location?: string | undefined
        match?:
          | {
              excludedNamespaces?: string[] | undefined
              kinds?:
                | {
                    apiGroups?: string[] | undefined
                    kinds?: string[] | undefined
                  }[]
                | undefined
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
              name?: string | undefined
              namespaceSelector?:
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
              scope?: string | undefined
              source?: ('All' | 'Generated' | 'Original') | undefined
            }
          | undefined
        parameters?:
          | {
              assign?:
                | {
                    externalData?:
                      | {
                          dataSource?:
                            | ('ValueAtLocation' | 'Username')
                            | undefined
                          default?: string | undefined
                          failurePolicy?:
                            | ('UseDefault' | 'Ignore' | 'Fail')
                            | undefined
                          provider?: string | undefined
                        }
                      | undefined
                    fromMetadata?:
                      | {
                          field?: string | undefined
                        }
                      | undefined
                    value?: any | undefined
                  }
                | undefined
              pathTests?:
                | {
                    condition?: ('MustExist' | 'MustNotExist') | undefined
                    subPath?: string | undefined
                  }[]
                | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        byPod?:
          | {
              enforced?: boolean | undefined
              errors?:
                | {
                    message: string
                    type?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
              mutatorUID?: string | undefined
              observedGeneration?: number | undefined
              operations?: string[] | undefined
            }[]
          | undefined
      }
    | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type ShGatekeeperMutationsV1Alpha1AssignList = {
  apiVersion?: string | undefined
  items: ShGatekeeperMutationsV1Alpha1Assign[]
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
export type ShGatekeeperMutationsV1Alpha1AssignMetadata = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        location?: string | undefined
        match?:
          | {
              excludedNamespaces?: string[] | undefined
              kinds?:
                | {
                    apiGroups?: string[] | undefined
                    kinds?: string[] | undefined
                  }[]
                | undefined
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
              name?: string | undefined
              namespaceSelector?:
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
              scope?: string | undefined
              source?: ('All' | 'Generated' | 'Original') | undefined
            }
          | undefined
        parameters?:
          | {
              assign?:
                | {
                    externalData?:
                      | {
                          dataSource?:
                            | ('ValueAtLocation' | 'Username')
                            | undefined
                          default?: string | undefined
                          failurePolicy?:
                            | ('UseDefault' | 'Ignore' | 'Fail')
                            | undefined
                          provider?: string | undefined
                        }
                      | undefined
                    fromMetadata?:
                      | {
                          field?: string | undefined
                        }
                      | undefined
                    value?: any | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        byPod?:
          | {
              enforced?: boolean | undefined
              errors?:
                | {
                    message: string
                    type?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
              mutatorUID?: string | undefined
              observedGeneration?: number | undefined
              operations?: string[] | undefined
            }[]
          | undefined
      }
    | undefined
}
export type ShGatekeeperMutationsV1Alpha1AssignMetadataList = {
  apiVersion?: string | undefined
  items: ShGatekeeperMutationsV1Alpha1AssignMetadata[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
export type ShGatekeeperMutationsV1Alpha1ModifySet = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  spec?:
    | {
        applyTo?:
          | {
              groups?: string[] | undefined
              kinds?: string[] | undefined
              versions?: string[] | undefined
            }[]
          | undefined
        location?: string | undefined
        match?:
          | {
              excludedNamespaces?: string[] | undefined
              kinds?:
                | {
                    apiGroups?: string[] | undefined
                    kinds?: string[] | undefined
                  }[]
                | undefined
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
              name?: string | undefined
              namespaceSelector?:
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
              scope?: string | undefined
              source?: ('All' | 'Generated' | 'Original') | undefined
            }
          | undefined
        parameters?:
          | {
              operation?: ('merge' | 'prune') | undefined
              pathTests?:
                | {
                    condition?: ('MustExist' | 'MustNotExist') | undefined
                    subPath?: string | undefined
                  }[]
                | undefined
              values?: object | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        byPod?:
          | {
              enforced?: boolean | undefined
              errors?:
                | {
                    message: string
                    type?: string | undefined
                  }[]
                | undefined
              id?: string | undefined
              mutatorUID?: string | undefined
              observedGeneration?: number | undefined
              operations?: string[] | undefined
            }[]
          | undefined
      }
    | undefined
}
export type ShGatekeeperMutationsV1Alpha1ModifySetList = {
  apiVersion?: string | undefined
  items: ShGatekeeperMutationsV1Alpha1ModifySet[]
  kind?: string | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ListMeta | undefined
}
