import {
  createCoreV1NamespacedPod,
  deleteCoreV1CollectionNamespacedPod,
  deleteCoreV1NamespacedPod,
  listCoreV1PodForAllNamespaces,
  type IoK8SApiCoreV1Pod,
} from './core-v1'
import {
  type ComKubekitV1NginxCluster,
  listKubekitComV1NginxClusterForAllNamespaces,
  patchKubekitComV1NamespacedNginxCluster,
  patchKubekitComV1NamespacedNginxClusterStatus,
} from './kubekit-v1'
import { controllerName } from './type'

type Id<T> = {
  [K in keyof T]: T[K]
} & {}
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

const labelKey = 'nginx-cluster-name'
type Pods = Map<string, MinimumRequiredGet<IoK8SApiCoreV1Pod>>
type NginxCluster = MinimumRequiredGet<ComKubekitV1NginxCluster>
type NginxClusters = Map<string, NginxCluster>
export async function nginxClusterController(signal: AbortSignal) {
  const controllerCtx: Record<string, ReconcileNginxClusterContext> = {}
  const getControllerCtx = (key: string) => {
    if (!controllerCtx[key]) {
      controllerCtx[key] = {
        pendingCreate: 0,
      }
    }
    return controllerCtx[key]
  }
  const deleteControllerCtx = (key: string) => {
    delete controllerCtx[key]
  }
  let podResourceVersion = ''
  const pods: Pods = new Map()

  let nginxClusterResourceVersion = ''
  const nginxClusters: NginxClusters = new Map()

  async function finalizeNginxCluster(nginxCluster: NginxCluster) {
    console.debug('[DEBUG] finalize NginxCluster', nginxCluster.metadata.name)
    const tasks: Promise<unknown>[] = []
    await deleteCoreV1CollectionNamespacedPod({
      namespace: nginxCluster.metadata.namespace,
      labelSelector: `${labelKey}=${nginxCluster.metadata.name}`,
      body: {
        propagationPolicy: 'Foreground',
      },
    })

    await Promise.all(tasks)
  }

  async function reconcileNginxClusters() {
    await Promise.all(
      [...nginxClusters.values()].map((nginxCluster) => {
        reconcileNginxCluster(
          nginxCluster,
          pods,
          getControllerCtx(
            `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
          )
        )
      })
    )
  }

  const initializedState = {
    nginxClusters: false,
    pods: false,
  }

  const isAllInitialized = () =>
    initializedState.nginxClusters && initializedState.pods

  await Promise.all([
    listKubekitComV1NginxClusterForAllNamespaces(
      {
        watch: true,
        sendInitialEvents: true,
        resourceVersionMatch: 'NotOlderThan',
        resourceVersion: nginxClusterResourceVersion,
      },
      {
        initializedHandler: async (ctx) => {
          initializedState.nginxClusters = true
          if (isAllInitialized()) {
            console.debug('[NginxCluster] Initializing')
            await reconcileNginxClusters()
            nginxClusterResourceVersion = ctx.resourceVersion
            console.debug('[NginxCluster] Initialized')
          }
        },
        watchHandler: async ({ object: nginxCluster, type }, ctx) => {
          initializedState.nginxClusters = ctx.isInitialized

          const key = `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
          if (type === 'DELETED') {
            nginxClusters.delete(key)
            deleteControllerCtx(
              `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
            )
            return
          }

          nginxClusters.set(key, nginxCluster)

          if (!isAllInitialized()) {
            return
          }

          await reconcileNginxCluster(
            nginxCluster,
            pods,
            getControllerCtx(
              `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
            )
          )
          nginxClusterResourceVersion = ctx.resourceVersion
        },
        finalizeHandler: async ({ object: nginxCluster }, ctx) => {
          const i = nginxCluster.metadata.finalizers.findIndex(
            (f) => f === controllerName
          )
          if (i === -1) {
            return
          }
          await finalizeNginxCluster(nginxCluster)
          await patchKubekitComV1NamespacedNginxCluster({
            namespace: nginxCluster.metadata.namespace,
            name: nginxCluster.metadata.name,
            contentType: 'application/json-patch+json',
            fieldManager: controllerName,
            body: [{ op: 'remove', path: `/metadata/finalizers/${i}` }],
          })

          nginxClusterResourceVersion = ctx.resourceVersion
        },
        signal,
        wait: 0,
        maxWait: 0,
        concurrency: 4,
      }
    ),
    listCoreV1PodForAllNamespaces(
      {
        watch: true,
        sendInitialEvents: true,
        resourceVersionMatch: 'NotOlderThan',
        resourceVersion: podResourceVersion,
        labelSelector: labelKey,
      },
      {
        initializedHandler: async (ctx) => {
          initializedState.pods = true
          if (isAllInitialized()) {
            await reconcileNginxClusters()
            nginxClusterResourceVersion = ctx.resourceVersion
          }
        },
        watchHandler: async ({ object: pod, type }, ctx) => {
          initializedState.pods = ctx.isInitialized
          podResourceVersion = ctx.resourceVersion

          const nginxClusterName = pod.metadata.labels?.[labelKey]
          if (!nginxClusterName) {
            throw Error(`${labelKey} label is missing from the pod metadata.`)
          }

          const nginxCluster = [...nginxClusters.values()].find(
            (n) => n.metadata.name === nginxClusterName
          )

          const podKey = `${pod.metadata.namespace}/${pod.metadata.name}`
          switch (type) {
            case 'DELETED':
              pods.delete(podKey)
              break
            case 'ADDED':
              if (nginxCluster) {
                const myCtx = getControllerCtx(
                  `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
                )
                myCtx.pendingCreate--
                if (myCtx.pendingCreate < 0) {
                  myCtx.pendingCreate = 0
                }
              }
            case 'MODIFIED':
              pods.set(podKey, pod)
              break
          }

          if (!isAllInitialized()) {
            return
          }
          if (!nginxCluster) {
            console.warn(
              `[WARN] nginxCluster with name ${nginxClusterName} does not exist.`
            )
            return
          }
          console.debug('[Pod] kick reconcile nginx cluster', type)
          await reconcileNginxCluster(
            nginxCluster,
            pods,
            getControllerCtx(
              `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
            )
          )
          console.debug('[Pod] done reconcile nginx cluster', type)
        },
        signal,
        wait: 0,
        maxWait: 0,
        concurrency: 4,
      }
    ),
  ])
}

type ReconcileNginxClusterContext = { pendingCreate: number }
async function reconcileNginxCluster(
  nginxCluster: NginxCluster,
  pods: Pods,
  ctx: ReconcileNginxClusterContext
) {
  console.debug('[Reconcile] Start Reconcile', ctx)
  const activePods = [...pods.values()].filter(
    (pod) =>
      pod.metadata.labels?.[labelKey] === nginxCluster.metadata.name &&
      !pod.metadata.deletionTimestamp
  )
  const currentPodNum = activePods.length + ctx.pendingCreate
  let createPodNum = nginxCluster.spec!.replicas! - currentPodNum
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
  } else if (createPodNum < 0) {
    const deletePods = activePods.slice(0, Math.abs(createPodNum))
    console.debug(
      `[Reconcile] deletePods`,
      deletePods.map((p) => p.metadata.name)
    )
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
