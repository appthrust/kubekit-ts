import {
  IoK8SApiRbacV1ClusterRole,
  IoK8SApiRbacV1PolicyRule,
  IoK8SApiRbacV1Role,
  listRbacAuthorizationV1ClusterRoleBinding,
  listRbacAuthorizationV1RoleBindingForAllNamespaces,
  readRbacAuthorizationV1ClusterRole,
  readRbacAuthorizationV1NamespacedRole,
} from './client'

type Url = string

export async function fetchAggregatedPermissions(
  kind: string,
  name: string,
  namespace: string
) {
  const resourceRules = {} as ResourceRules
  const nonResourceRules = {} as NonResourceRules

  const roles = await fetchRoles(kind, name, namespace)
  mutateDict(roles, resourceRules, nonResourceRules)

  const clusterRoles = await fetchClusterRoles(kind, name, namespace)
  mutateDict(clusterRoles, resourceRules, nonResourceRules)

  return {
    resourceRules,
    nonResourceRules,
  }
}

async function fetchRoles(kind: string, name: string, namespace: string) {
  const roleBindings = await listRbacAuthorizationV1RoleBindingForAllNamespaces(
    {}
  )

  const subjectRoles = roleBindings.items
    .filter(
      (b) =>
        b.roleRef.apiGroup === 'rbac.authorization.k8s.io' &&
        b.roleRef.kind === 'Role' &&
        b.subjects
    )
    .map((b) => ({
      ...b,
      roleRef: {
        ...b.roleRef,
        namespace: b.metadata.namespace,
      },
      subjects: b.subjects?.map((s) => ({
        ...s,
        namespace: s.namespace || b.metadata.namespace,
      })),
    }))
    .filter(
      (b) =>
        b.subjects?.findIndex(
          (subject) =>
            subject.kind === kind &&
            subject.name === name &&
            subject.namespace === namespace
        ) !== -1
    )
    .map((b) => b.roleRef)

  return await Promise.all(
    subjectRoles
      .map(({ name, namespace }) =>
        readRbacAuthorizationV1NamespacedRole({
          name,
          namespace,
        }).catch(() => {
          console.warn(
            `[WARN] Role name: ${name} namespace: ${namespace} does not exists`
          )
        })
      )
      .filter((v) => v) as IoK8SApiRbacV1Role[]
  )
}

// TODO: Support aggregationRule
async function fetchClusterRoles(
  kind: string,
  name: string,
  namespace: string
) {
  const clusterRoleBindings = await listRbacAuthorizationV1ClusterRoleBinding(
    {}
  )

  const subjectClusterRoles = clusterRoleBindings.items
    .filter(
      (b) =>
        b.roleRef.apiGroup === 'rbac.authorization.k8s.io' &&
        b.roleRef.kind === 'ClusterRole' &&
        b.subjects
    )
    .map((b) => ({
      ...b,
      subjects: b.subjects?.map((s) => ({
        ...s,
        namespace: s.namespace || b.metadata.namespace,
      })),
    }))
    .filter(
      (b) =>
        b.subjects?.findIndex(
          (subject) =>
            subject.kind === kind &&
            subject.name === name &&
            subject.namespace === namespace
        ) !== -1
    )
    .map((b) => b.roleRef)
    .filter((v) => v)

  return await Promise.all(
    subjectClusterRoles
      .map((subjectClusterRole) =>
        readRbacAuthorizationV1ClusterRole({
          name: subjectClusterRole!.name,
        }).catch(() => {
          console.warn(`[WARN] ClusterRole: ${name} does not exists`)
        })
      )
      .filter((v) => v) as IoK8SApiRbacV1ClusterRole[]
  )
}

export type KubernetesAction =
  | 'connect'
  | 'delete'
  | 'deletecollection'
  | 'get'
  | 'list'
  | 'patch'
  | 'post'
  | 'put'
  | 'watch'
  | 'watchlist'

export type ResourceVerb =
  | '*'
  | 'create'
  | 'delete'
  | 'deletecollection'
  | 'get'
  | 'list'
  | 'patch'
  | 'proxy'
  | 'update'
  | 'watch'
  | 'approve'
  | 'impersonate'
  | 'escalate'
  | 'sign'
  | 'use'

export function mapResourceVerbToKubernetesAction(
  verb: ResourceVerb
): KubernetesAction {
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

// TODO: more verbs...
type NonResourceVerb = 'get' | 'post' | '*'
type ApiGroup = string
type ResourceName = string
type Resource = {
  verbs: ResourceVerb[]
  namespaces: string[]
}
export type ResourceRules = Record<ApiGroup, Record<ResourceName, Resource>>
type NonResourceRules = Record<
  Url,
  {
    verbs: NonResourceVerb[]
  }
>

// TODO: more then better name...
function mutateDict(
  roles: (IoK8SApiRbacV1Role | IoK8SApiRbacV1ClusterRole)[],
  resourceRules: ResourceRules,
  nonResourceRules: NonResourceRules
) {
  const allRules = roles
    .filter((role) => role)
    .map((role) => {
      const rules = role.rules as IoK8SApiRbacV1PolicyRule[]
      return rules.map((rule) => ({
        ...rule,
        namespace: role.metadata!.namespace || '*',
      }))
    })
    .flat()

  allRules.forEach((rule) => {
    if (!rule) return
    rule.apiGroups?.forEach((apiGroup) => {
      if (!resourceRules[apiGroup]) {
        resourceRules[apiGroup] = {}
      }
      rule.resources?.forEach((resourceName) => {
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
            resource.verbs.push(verb as ResourceVerb)
          }
        })
      })
    })
    rule.nonResourceURLs?.forEach((url) => {
      if (!nonResourceRules[url]) {
        nonResourceRules[url] = {
          verbs: [],
        }
      }
      rule.verbs.forEach((verb) => {
        if (nonResourceRules[url].verbs.find((v) => v === verb)) return
        nonResourceRules[url].verbs.push(verb as NonResourceVerb)
      })
    })
  })

  return {
    resourceRules,
    nonResourceRules,
  }
}
