import { createCoreV1NamespacedPod, deleteCoreV1NamespacedPod } from './core-v1'
import { patchKubekitComV1NamespacedNginxClusterStatus } from './kubekit-v1'
import {
  type NginxCluster,
  type Pods,
  type ReconcileNginxClusterContext,
  controllerName,
  labelKey,
} from './type'
import hash from 'object-hash'

export async function reconcileNginxCluster(
  nginxCluster: NginxCluster,
  pods: Pods,
  ctx: ReconcileNginxClusterContext
) {
  console.debug({
    message: '[Reconcile] Start Reconcile',
    name: nginxCluster.metadata.name,
    namespace: nginxCluster.metadata.namespace,
  })
  const nginxClusterHash = hash(nginxCluster.spec!.resources!)
  const managedPods = [...pods.values()].filter(
    (pod) =>
      pod.metadata.labels?.[labelKey] === nginxCluster.metadata.name &&
      !pod.metadata.deletionTimestamp
  )
  const validPods = managedPods.filter(
    (pod) =>
      pod.metadata.annotations?.['nginx-cluster-hash'] === nginxClusterHash
  )
  const invalidPods = managedPods.filter(
    (pod) =>
      pod.metadata.annotations?.['nginx-cluster-hash'] !== nginxClusterHash
  )
  let createPodNum =
    nginxCluster.spec!.replicas! -
    validPods.length +
    ctx.pendingCreate -
    invalidPods.length
  const tasks: Promise<unknown>[] = []
  const namespace = nginxCluster.metadata.namespace
  if (createPodNum > 0) {
    for (let i = 0; i < createPodNum; i++) {
      ctx.pendingCreate++
      tasks.push(
        createCoreV1NamespacedPod({
          namespace,
          fieldManager: controllerName,
          fieldValidation: 'Strict',
          body: {
            apiVersion: 'v1',
            kind: 'Pod',
            metadata: {
              generateName: nginxCluster.metadata.name,
              ownerReferences: [
                {
                  apiVersion: nginxCluster.apiVersion,
                  kind: nginxCluster.kind,
                  blockOwnerDeletion: true,
                  controller: true,
                  name: nginxCluster.metadata.name,
                  uid: nginxCluster.metadata.uid,
                },
              ],
              annotations: {
                'nginx-cluster-hash': nginxClusterHash,
              },
              labels: {
                ...nginxCluster.metadata.labels,
                [labelKey]: nginxCluster.metadata.name,
              },
              namespace,
            },
            spec: {
              containers: [
                {
                  image: 'nginx',
                  name: 'nginx',
                  resources: nginxCluster.spec!.resources,
                },
              ],
              dnsPolicy: 'ClusterFirst',
              restartPolicy: 'Never',
            },
            status: {},
          },
        })
      )
    }
  }
  if (createPodNum < 0 || invalidPods.length > 0) {
    const deletePods = [
      ...invalidPods,
      ...managedPods.slice(0, Math.abs(createPodNum) - invalidPods.length),
    ]
    console.debug({
      message: '[Reconcile] deletePods',
      podNames: deletePods.map((p) => p.metadata.name),
    })
    for (const pod of deletePods) {
      pods.delete(`${namespace}/${pod.metadata.name}`)
      tasks.push(
        deleteCoreV1NamespacedPod({
          name: pod.metadata.name,
          namespace,
          contentType: 'application/json',
          body: {
            propagationPolicy: 'Foreground',
          },
        }).catch((e) => {
          if (e['code'] !== 404) {
            pods.set(`${namespace}/${pod.metadata.name}`, pod)
          }
        })
      )
    }
  }

  await Promise.all(tasks)
  if (!nginxCluster.status?.ready) {
    await patchKubekitComV1NamespacedNginxClusterStatus({
      namespace: nginxCluster.metadata.namespace,
      name: nginxCluster.metadata.name,
      contentType: 'application/apply-patch+yaml',
      fieldManager: controllerName,
      body: {
        apiVersion: 'kubekit.com/v1',
        kind: 'NginxCluster',
        status: {
          ready: true,
        },
      },
    })
  }

  console.debug('[DEBUG] Successful Reconcile')
}
