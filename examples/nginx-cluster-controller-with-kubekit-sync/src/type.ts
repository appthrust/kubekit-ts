import { type IoK8SApiCoreV1Pod, type Strict } from './core-v1'

import { type ComKubekitV1NginxCluster } from './kubekit-v1'

export const controllerName = 'kubekit.com/nginx-cluster'
export const leaderName =
  process.env['LEADER_NAME'] || 'kubekit-com-nginx-cluster'
export const holderIdentity = process.env['POD_NAME'] || crypto.randomUUID()
export const controllerNamespace = process.env['POD_NAMESPACE'] || 'default'

export const labelKey = 'nginx-cluster-name'
export type Pods = Map<
  string,
  {
    metadata: Strict<IoK8SApiCoreV1Pod>['metadata']
  }
>
export type NginxCluster = Strict<ComKubekitV1NginxCluster>
export type ReconcileNginxClusterContext = { pendingCreate: number }
