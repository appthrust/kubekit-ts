import { type Options, type WatchExtraOptions } from '@kubekit/client'
type Id<T> = {
  [K in keyof T]: T[K]
} & {}
type NoWatch<T> = Omit<T, 'watch'> & {
  watch?: false
}
type RequiredAndDefined<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined>
}
type PartialRequired<T, K extends keyof T> = Id<
  RequiredAndDefined<Pick<T, K>> & Omit<T, K>
>
type MinimumRequiredGet<T> = Id<
  T extends {
    metadata?: any
    apiVersion?: any
    kind?: any
  }
    ? Omit<
        PartialRequired<T, 'metadata' | 'apiVersion' | 'kind'>,
        'metadata'
      > & {
        metadata: PartialRequired<
          RequiredAndDefined<T>['metadata'],
          'name' | 'namespace' | 'creationTimestamp' | 'resourceVersion'
        >
      }
    : T
>
type MinimumRequiredList<T> = Id<
  T extends {
    items: {
      metadata?: any
      apiVersion?: any
      kind?: any
    }[]
  }
    ? Omit<T, 'items'> & {
        items: MinimumRequiredGet<T['items'][number]>[]
      }
    : T
>
export declare const readCoreV1NamespacedServiceAccount: (
  args: ReadCoreV1NamespacedServiceAccountApiArg,
  options?: Options
) => Promise<{
  apiVersion: 'v1'
  kind: 'ServiceAccount'
  automountServiceAccountToken?: boolean | undefined
  imagePullSecrets?: IoK8SApiCoreV1LocalObjectReference[] | undefined
  secrets?: IoK8SApiCoreV1ObjectReference[] | undefined
  metadata: {
    name: string
    namespace: string
    creationTimestamp: string
    resourceVersion: string
    annotations?:
      | {
          [key: string]: string
        }
      | undefined
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
    managedFields?:
      | IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry[]
      | undefined
    ownerReferences?: IoK8SApimachineryPkgApisMetaV1OwnerReference[] | undefined
    selfLink?: string | undefined
    uid?: string | undefined
  }
}>
export declare function listRbacAuthorizationV1ClusterRoleBinding(
  args: NoWatch<ListRbacAuthorizationV1ClusterRoleBindingApiArg>,
  options?: Options
): Promise<
  MinimumRequiredList<ListRbacAuthorizationV1ClusterRoleBindingApiResponse>
>
export declare function listRbacAuthorizationV1ClusterRoleBinding(
  args: ListRbacAuthorizationV1ClusterRoleBindingApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<
      MinimumRequiredList<ListRbacAuthorizationV1ClusterRoleBindingApiResponse>
    >
): Promise<void>
export declare function listRbacAuthorizationV1ClusterRole(
  args: NoWatch<ListRbacAuthorizationV1ClusterRoleApiArg>,
  options?: Options
): Promise<MinimumRequiredList<ListRbacAuthorizationV1ClusterRoleApiResponse>>
export declare function listRbacAuthorizationV1ClusterRole(
  args: ListRbacAuthorizationV1ClusterRoleApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<
      MinimumRequiredList<ListRbacAuthorizationV1ClusterRoleApiResponse>
    >
): Promise<void>
export declare const readRbacAuthorizationV1ClusterRole: (
  args: ReadRbacAuthorizationV1ClusterRoleApiArg,
  options?: Options
) => Promise<{
  apiVersion: 'k8s.api.rbac.io/v1'
  kind: 'ClusterRole'
  aggregationRule?: IoK8SApiRbacV1AggregationRule | undefined
  rules?: IoK8SApiRbacV1PolicyRule[] | undefined
  metadata: {
    name: string
    namespace: string
    creationTimestamp: string
    resourceVersion: string
    annotations?:
      | {
          [key: string]: string
        }
      | undefined
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
    managedFields?:
      | IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry[]
      | undefined
    ownerReferences?: IoK8SApimachineryPkgApisMetaV1OwnerReference[] | undefined
    selfLink?: string | undefined
    uid?: string | undefined
  }
}>
export declare function listRbacAuthorizationV1NamespacedRoleBinding(
  args: NoWatch<ListRbacAuthorizationV1NamespacedRoleBindingApiArg>,
  options?: Options
): Promise<
  MinimumRequiredList<ListRbacAuthorizationV1NamespacedRoleBindingApiResponse>
>
export declare function listRbacAuthorizationV1NamespacedRoleBinding(
  args: ListRbacAuthorizationV1NamespacedRoleBindingApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<
      MinimumRequiredList<ListRbacAuthorizationV1NamespacedRoleBindingApiResponse>
    >
): Promise<void>
export declare function listRbacAuthorizationV1NamespacedRole(
  args: NoWatch<ListRbacAuthorizationV1NamespacedRoleApiArg>,
  options?: Options
): Promise<
  MinimumRequiredList<ListRbacAuthorizationV1NamespacedRoleApiResponse>
>
export declare function listRbacAuthorizationV1NamespacedRole(
  args: ListRbacAuthorizationV1NamespacedRoleApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<
      MinimumRequiredList<ListRbacAuthorizationV1NamespacedRoleApiResponse>
    >
): Promise<void>
export declare const readRbacAuthorizationV1NamespacedRole: (
  args: ReadRbacAuthorizationV1NamespacedRoleApiArg,
  options?: Options
) => Promise<{
  apiVersion: 'k8s.api.rbac.io/v1'
  kind: 'Role'
  rules?: IoK8SApiRbacV1PolicyRule[] | undefined
  metadata: {
    name: string
    namespace: string
    creationTimestamp: string
    resourceVersion: string
    annotations?:
      | {
          [key: string]: string
        }
      | undefined
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
    managedFields?:
      | IoK8SApimachineryPkgApisMetaV1ManagedFieldsEntry[]
      | undefined
    ownerReferences?: IoK8SApimachineryPkgApisMetaV1OwnerReference[] | undefined
    selfLink?: string | undefined
    uid?: string | undefined
  }
}>
export declare function listRbacAuthorizationV1RoleBindingForAllNamespaces(
  args: NoWatch<ListRbacAuthorizationV1RoleBindingForAllNamespacesApiArg>,
  options?: Options
): Promise<
  MinimumRequiredList<ListRbacAuthorizationV1RoleBindingForAllNamespacesApiResponse>
>
export declare function listRbacAuthorizationV1RoleBindingForAllNamespaces(
  args: ListRbacAuthorizationV1RoleBindingForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<
      MinimumRequiredList<ListRbacAuthorizationV1RoleBindingForAllNamespacesApiResponse>
    >
): Promise<void>
export declare function listRbacAuthorizationV1RoleForAllNamespaces(
  args: NoWatch<ListRbacAuthorizationV1RoleForAllNamespacesApiArg>,
  options?: Options
): Promise<
  MinimumRequiredList<ListRbacAuthorizationV1RoleForAllNamespacesApiResponse>
>
export declare function listRbacAuthorizationV1RoleForAllNamespaces(
  args: ListRbacAuthorizationV1RoleForAllNamespacesApiArg & {
    watch: true
  },
  options: Options &
    WatchExtraOptions<
      MinimumRequiredList<ListRbacAuthorizationV1RoleForAllNamespacesApiResponse>
    >
): Promise<void>
export type ReadCoreV1NamespacedServiceAccountApiResponse =
  /** status 200 OK */ IoK8SApiCoreV1ServiceAccount
export type ReadCoreV1NamespacedServiceAccountApiArg = {
  /** name of the ServiceAccount */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
}
export type ListRbacAuthorizationV1ClusterRoleBindingApiResponse =
  /** status 200 OK */ IoK8SApiRbacV1ClusterRoleBindingList
export type ListRbacAuthorizationV1ClusterRoleBindingApiArg = {
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
export type ListRbacAuthorizationV1ClusterRoleApiResponse =
  /** status 200 OK */ IoK8SApiRbacV1ClusterRoleList
export type ListRbacAuthorizationV1ClusterRoleApiArg = {
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
export type ReadRbacAuthorizationV1ClusterRoleApiResponse =
  /** status 200 OK */ IoK8SApiRbacV1ClusterRole
export type ReadRbacAuthorizationV1ClusterRoleApiArg = {
  /** name of the ClusterRole */
  name: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
}
export type ListRbacAuthorizationV1NamespacedRoleBindingApiResponse =
  /** status 200 OK */ IoK8SApiRbacV1RoleBindingList
export type ListRbacAuthorizationV1NamespacedRoleBindingApiArg = {
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
export type ListRbacAuthorizationV1NamespacedRoleApiResponse =
  /** status 200 OK */ IoK8SApiRbacV1RoleList
export type ListRbacAuthorizationV1NamespacedRoleApiArg = {
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
export type ReadRbacAuthorizationV1NamespacedRoleApiResponse =
  /** status 200 OK */ IoK8SApiRbacV1Role
export type ReadRbacAuthorizationV1NamespacedRoleApiArg = {
  /** name of the Role */
  name: string
  /** object name and auth scope, such as for teams and projects */
  namespace: string
  /** If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). */
  pretty?: string
}
export type ListRbacAuthorizationV1RoleBindingForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SApiRbacV1RoleBindingList
export type ListRbacAuthorizationV1RoleBindingForAllNamespacesApiArg = {
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
export type ListRbacAuthorizationV1RoleForAllNamespacesApiResponse =
  /** status 200 OK */ IoK8SApiRbacV1RoleList
export type ListRbacAuthorizationV1RoleForAllNamespacesApiArg = {
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
export type IoK8SApiCoreV1LocalObjectReference = {
  name?: string | undefined
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
export type IoK8SApiCoreV1ObjectReference = {
  apiVersion?: string | undefined
  fieldPath?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  resourceVersion?: string | undefined
  uid?: string | undefined
}
export type IoK8SApiCoreV1ServiceAccount = {
  apiVersion?: 'v1' | undefined
  automountServiceAccountToken?: boolean | undefined
  imagePullSecrets?: IoK8SApiCoreV1LocalObjectReference[] | undefined
  kind?: 'ServiceAccount' | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  secrets?: IoK8SApiCoreV1ObjectReference[] | undefined
}
export type IoK8SApiRbacV1RoleRef = {
  apiGroup: string
  kind: string
  name: string
}
export type IoK8SApiRbacV1Subject = {
  apiGroup?: string | undefined
  kind: string
  name: string
  namespace?: string | undefined
}
export type IoK8SApiRbacV1ClusterRoleBinding = {
  apiVersion?: 'k8s.api.rbac.io/v1' | undefined
  kind?: 'ClusterRoleBinding' | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  roleRef: IoK8SApiRbacV1RoleRef
  subjects?: IoK8SApiRbacV1Subject[] | undefined
}
export type IoK8SApimachineryPkgApisMetaV1ListMeta = {
  continue?: string | undefined
  remainingItemCount?: number | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
}
export type IoK8SApiRbacV1ClusterRoleBindingList = {
  apiVersion: 'v1'
  items: IoK8SApiRbacV1ClusterRoleBinding[]
  kind: 'List'
  metadata: IoK8SApimachineryPkgApisMetaV1ListMeta
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
export type IoK8SApiRbacV1AggregationRule = {
  clusterRoleSelectors?:
    | IoK8SApimachineryPkgApisMetaV1LabelSelector[]
    | undefined
}
export type IoK8SApiRbacV1PolicyRule = {
  apiGroups?: string[] | undefined
  nonResourceURLs?: string[] | undefined
  resourceNames?: string[] | undefined
  resources?: string[] | undefined
  verbs: string[]
}
export type IoK8SApiRbacV1ClusterRole = {
  aggregationRule?: IoK8SApiRbacV1AggregationRule | undefined
  apiVersion?: 'k8s.api.rbac.io/v1' | undefined
  kind?: 'ClusterRole' | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  rules?: IoK8SApiRbacV1PolicyRule[] | undefined
}
export type IoK8SApiRbacV1ClusterRoleList = {
  apiVersion: 'v1'
  items: IoK8SApiRbacV1ClusterRole[]
  kind: 'List'
  metadata: IoK8SApimachineryPkgApisMetaV1ListMeta
}
export type IoK8SApiRbacV1RoleBinding = {
  apiVersion?: 'k8s.api.rbac.io/v1' | undefined
  kind?: 'RoleBinding' | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  roleRef: IoK8SApiRbacV1RoleRef
  subjects?: IoK8SApiRbacV1Subject[] | undefined
}
export type IoK8SApiRbacV1RoleBindingList = {
  apiVersion: 'v1'
  items: IoK8SApiRbacV1RoleBinding[]
  kind: 'List'
  metadata: IoK8SApimachineryPkgApisMetaV1ListMeta
}
export type IoK8SApiRbacV1Role = {
  apiVersion?: 'k8s.api.rbac.io/v1' | undefined
  kind?: 'Role' | undefined
  metadata?: IoK8SApimachineryPkgApisMetaV1ObjectMeta | undefined
  rules?: IoK8SApiRbacV1PolicyRule[] | undefined
}
export type IoK8SApiRbacV1RoleList = {
  apiVersion: 'v1'
  items: IoK8SApiRbacV1Role[]
  kind: 'List'
  metadata: IoK8SApimachineryPkgApisMetaV1ListMeta
}
export {}
