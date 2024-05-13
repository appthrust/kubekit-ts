'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.mapResourceVerbToKubernetesAction = exports.fetchAggregatedPermissions =
  void 0
const client_1 = require('./client')
async function fetchAggregatedPermissions(kind, name, namespace) {
  const resourceRules = {}
  const nonResourceRules = {}
  const roles = await fetchRoles(kind, name, namespace)
  mutateDict(roles, resourceRules, nonResourceRules)
  const clusterRoles = await fetchClusterRoles(kind, name, namespace)
  mutateDict(clusterRoles, resourceRules, nonResourceRules)
  return {
    resourceRules,
    nonResourceRules,
  }
}
exports.fetchAggregatedPermissions = fetchAggregatedPermissions
async function fetchRoles(kind, name, namespace) {
  const roleBindings = await (0,
  client_1.listRbacAuthorizationV1RoleBindingForAllNamespaces)({})
  const subjectRoles = roleBindings.items
    .filter(
      (b) =>
        b.roleRef.apiGroup === 'rbac.authorization.k8s.io' &&
        b.roleRef.kind === 'Role' &&
        b.subjects
    )
    .map((b) => {
      var _a
      return {
        ...b,
        roleRef: {
          ...b.roleRef,
          namespace: b.metadata.namespace,
        },
        subjects:
          (_a = b.subjects) === null || _a === void 0
            ? void 0
            : _a.map((s) => ({
                ...s,
                namespace: s.namespace || b.metadata.namespace,
              })),
      }
    })
    .filter((b) => {
      var _a
      return (
        ((_a = b.subjects) === null || _a === void 0
          ? void 0
          : _a.findIndex(
              (subject) =>
                subject.kind === kind &&
                subject.name === name &&
                subject.namespace === namespace
            )) !== -1
      )
    })
    .map((b) => b.roleRef)
  return await Promise.all(
    subjectRoles
      .map(({ name, namespace }) =>
        (0, client_1.readRbacAuthorizationV1NamespacedRole)({
          name,
          namespace,
        }).catch(() => {
          console.warn(
            `[WARN] Role name: ${name} namespace: ${namespace} does not exists`
          )
        })
      )
      .filter((v) => v)
  )
}
// TODO: Support aggregationRule
async function fetchClusterRoles(kind, name, namespace) {
  const clusterRoleBindings = await (0,
  client_1.listRbacAuthorizationV1ClusterRoleBinding)({})
  const subjectClusterRoles = clusterRoleBindings.items
    .filter(
      (b) =>
        b.roleRef.apiGroup === 'rbac.authorization.k8s.io' &&
        b.roleRef.kind === 'ClusterRole' &&
        b.subjects
    )
    .map((b) => {
      var _a
      return {
        ...b,
        subjects:
          (_a = b.subjects) === null || _a === void 0
            ? void 0
            : _a.map((s) => ({
                ...s,
                namespace: s.namespace || b.metadata.namespace,
              })),
      }
    })
    .filter((b) => {
      var _a
      return (
        ((_a = b.subjects) === null || _a === void 0
          ? void 0
          : _a.findIndex(
              (subject) =>
                subject.kind === kind &&
                subject.name === name &&
                subject.namespace === namespace
            )) !== -1
      )
    })
    .map((b) => b.roleRef)
    .filter((v) => v)
  return await Promise.all(
    subjectClusterRoles
      .map((subjectClusterRole) =>
        (0, client_1.readRbacAuthorizationV1ClusterRole)({
          name: subjectClusterRole.name,
        }).catch(() => {
          console.warn(`[WARN] ClusterRole: ${name} does not exists`)
        })
      )
      .filter((v) => v)
  )
}
function mapResourceVerbToKubernetesAction(verb) {
  switch (verb) {
    case 'create':
      return 'post'
    case 'update':
      return 'put'
    case 'delete':
      return 'delete'
    case 'deletecollection':
      return 'deletecollection'
    case 'get':
      return 'get'
    case 'list':
      return 'list'
    case 'patch':
      return 'patch'
    case 'watch':
      return 'watch'
    case 'proxy':
      return 'connect'
    case '*':
      throw Error("Don't come * here")
    default:
      throw Error(`Unsupported verb ${verb}`)
  }
}
exports.mapResourceVerbToKubernetesAction = mapResourceVerbToKubernetesAction
// TODO: more then better name...
function mutateDict(roles, resourceRules, nonResourceRules) {
  const allRules = roles
    .filter((role) => role)
    .map((role) => {
      const rules = role.rules
      return rules.map((rule) => ({
        ...rule,
        namespace: role.metadata.namespace || '*',
      }))
    })
    .flat()
  allRules.forEach((rule) => {
    var _a, _b
    if (!rule) return
    ;(_a = rule.apiGroups) === null || _a === void 0
      ? void 0
      : _a.forEach((apiGroup) => {
          var _a
          if (!resourceRules[apiGroup]) {
            resourceRules[apiGroup] = {}
          }
          ;(_a = rule.resources) === null || _a === void 0
            ? void 0
            : _a.forEach((resourceName) => {
                if (!resourceRules[apiGroup][resourceName]) {
                  resourceRules[apiGroup][resourceName] = {
                    verbs: [],
                    namespaces: [],
                  }
                }
                const resource = resourceRules[apiGroup][resourceName]
                if (!resource.namespaces.find((n) => n === rule.namespace)) {
                  if (rule.namespace === '*') {
                    resource.namespaces = ['*']
                  } else {
                    resource.namespaces.push(rule.namespace)
                  }
                }
                rule.verbs.forEach((verb) => {
                  if (resource.verbs.find((v) => v === verb)) return
                  if (verb === '*') {
                    resource.verbs = ['*']
                  } else {
                    resource.verbs.push(verb)
                  }
                })
              })
        })
    ;(_b = rule.nonResourceURLs) === null || _b === void 0
      ? void 0
      : _b.forEach((url) => {
          if (!nonResourceRules[url]) {
            nonResourceRules[url] = {
              verbs: [],
            }
          }
          rule.verbs.forEach((verb) => {
            if (nonResourceRules[url].verbs.find((v) => v === verb)) return
            nonResourceRules[url].verbs.push(verb)
          })
        })
  })
  return {
    resourceRules,
    nonResourceRules,
  }
}
//# sourceMappingURL=permissionsAggregator.ts.js.map
