'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.listRbacAuthorizationV1RoleForAllNamespaces =
  exports.listRbacAuthorizationV1RoleBindingForAllNamespaces =
  exports.readRbacAuthorizationV1NamespacedRole =
  exports.listRbacAuthorizationV1NamespacedRole =
  exports.listRbacAuthorizationV1NamespacedRoleBinding =
  exports.readRbacAuthorizationV1ClusterRole =
  exports.listRbacAuthorizationV1ClusterRole =
  exports.listRbacAuthorizationV1ClusterRoleBinding =
  exports.readCoreV1NamespacedServiceAccount =
    void 0
const client_1 = require('@kubekit/client')
const readCoreV1NamespacedServiceAccount = (args, options) => {
  return (0, client_1.apiClient)(
    {
      path: `/api/v1/namespaces/${args['namespace']}/serviceaccounts/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
exports.readCoreV1NamespacedServiceAccount = readCoreV1NamespacedServiceAccount
function listRbacAuthorizationV1ClusterRoleBinding(args, options) {
  return (0, client_1.apiClient)(
    {
      path: `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`,
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
exports.listRbacAuthorizationV1ClusterRoleBinding =
  listRbacAuthorizationV1ClusterRoleBinding
function listRbacAuthorizationV1ClusterRole(args, options) {
  return (0, client_1.apiClient)(
    {
      path: `/apis/rbac.authorization.k8s.io/v1/clusterroles`,
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
exports.listRbacAuthorizationV1ClusterRole = listRbacAuthorizationV1ClusterRole
const readRbacAuthorizationV1ClusterRole = (args, options) => {
  return (0, client_1.apiClient)(
    {
      path: `/apis/rbac.authorization.k8s.io/v1/clusterroles/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
exports.readRbacAuthorizationV1ClusterRole = readRbacAuthorizationV1ClusterRole
function listRbacAuthorizationV1NamespacedRoleBinding(args, options) {
  return (0, client_1.apiClient)(
    {
      path: `/apis/rbac.authorization.k8s.io/v1/namespaces/${args['namespace']}/rolebindings`,
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
exports.listRbacAuthorizationV1NamespacedRoleBinding =
  listRbacAuthorizationV1NamespacedRoleBinding
function listRbacAuthorizationV1NamespacedRole(args, options) {
  return (0, client_1.apiClient)(
    {
      path: `/apis/rbac.authorization.k8s.io/v1/namespaces/${args['namespace']}/roles`,
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
exports.listRbacAuthorizationV1NamespacedRole =
  listRbacAuthorizationV1NamespacedRole
const readRbacAuthorizationV1NamespacedRole = (args, options) => {
  return (0, client_1.apiClient)(
    {
      path: `/apis/rbac.authorization.k8s.io/v1/namespaces/${args['namespace']}/roles/${args.name}`,
      params: { pretty: args.pretty },
    },
    options
  )
}
exports.readRbacAuthorizationV1NamespacedRole =
  readRbacAuthorizationV1NamespacedRole
function listRbacAuthorizationV1RoleBindingForAllNamespaces(args, options) {
  return (0, client_1.apiClient)(
    {
      path: `/apis/rbac.authorization.k8s.io/v1/rolebindings`,
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
exports.listRbacAuthorizationV1RoleBindingForAllNamespaces =
  listRbacAuthorizationV1RoleBindingForAllNamespaces
function listRbacAuthorizationV1RoleForAllNamespaces(args, options) {
  return (0, client_1.apiClient)(
    {
      path: `/apis/rbac.authorization.k8s.io/v1/roles`,
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
exports.listRbacAuthorizationV1RoleForAllNamespaces =
  listRbacAuthorizationV1RoleForAllNamespaces
//# sourceMappingURL=client.js.map
