type Url = string
export declare function fetchAggregatedPermissions(
  kind: string,
  name: string,
  namespace: string
): Promise<{
  resourceRules: ResourceRules
  nonResourceRules: NonResourceRules
}>
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
export declare function mapResourceVerbToKubernetesAction(
  verb: ResourceVerb
): KubernetesAction
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
export {}
