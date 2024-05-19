import { TaskQueue } from '@kubekit/client'
import {
  deleteCoreV1CollectionNamespacedPod,
  listCoreV1PodForAllNamespaces,
} from './core-v1'
import {
  listKubekitComV1NginxClusterForAllNamespaces,
  patchKubekitComV1NamespacedNginxCluster,
} from './kubekit-v1'
import {
  type NginxCluster,
  type Pods,
  type ReconcileNginxClusterContext,
  controllerName,
  labelKey,
} from './type'
import { reconcileNginxCluster } from './reconcileNginxCluster'

type NginxClusters = Map<string, NginxCluster>
type ControllerState = {
  podResourceVersion: string
  nginxClusterResourceVersion: string
  nginxClusters: NginxClusters
  pods: Pods
}
export function getInitialState(): ControllerState {
  return {
    podResourceVersion: '',
    nginxClusterResourceVersion: '',
    nginxClusters: new Map(),
    pods: new Map(),
  }
}

export async function nginxClusterController(
  state: ControllerState,
  signal: AbortSignal
) {
  const controllerCtx: Record<string, ReconcileNginxClusterContext> = {}
  const { nginxClusters, pods } = state
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

  const taskQueue = new TaskQueue()
  taskQueue.pause()

  const syncedState = {
    nginxClusters: false,
    pods: false,
  }

  signal.addEventListener('abort', () => {
    taskQueue.pause()
  })

  const isAllSynced = () => syncedState.nginxClusters && syncedState.pods

  await Promise.all([
    listKubekitComV1NginxClusterForAllNamespaces(
      {
        watch: true,
        sendInitialEvents: true,
        resourceVersionMatch: 'NotOlderThan',
        resourceVersion: state.nginxClusterResourceVersion,
      },
      {
        syncedHandler: async () => {
          syncedState.nginxClusters = true
          if (isAllSynced()) {
            taskQueue.resume()
          }
        },
        watchHandler: async ({ object: nginxCluster, type }) => {
          const key = `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
          if (type === 'DELETED') {
            nginxClusters.delete(key)
            deleteControllerCtx(
              `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
            )
            return
          }

          nginxClusters.set(key, nginxCluster)

          taskQueue.addTask({
            key: TaskQueue.getKey(nginxCluster),
            task: () =>
              reconcileNginxCluster(
                nginxCluster,
                pods,
                getControllerCtx(
                  `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
                )
              ),
          })
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

          state.nginxClusterResourceVersion = ctx.resourceVersion
        },
        signal,
        maxRetries: Infinity,
        onError: () => {
          syncedState.nginxClusters = false
        },
      }
    ),
    listCoreV1PodForAllNamespaces(
      {
        watch: true,
        sendInitialEvents: true,
        resourceVersionMatch: 'NotOlderThan',
        resourceVersion: state.podResourceVersion,
        labelSelector: labelKey,
      },
      {
        syncedHandler: async () => {
          syncedState.pods = true
          if (isAllSynced()) {
            taskQueue.resume()
          }
        },
        watchHandler: async ({ object: pod, type }, ctx) => {
          state.podResourceVersion = ctx.resourceVersion

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
              pods.set(podKey, {
                metadata: pod.metadata,
              })
              break
          }

          if (!nginxCluster) {
            if (syncedState.nginxClusters) {
              console.warn(
                `[WARN] nginxCluster with name ${nginxClusterName} does not exist.`
              )
            }
            return
          }
          taskQueue.addTask({
            key: TaskQueue.getKey(nginxCluster),
            task: () =>
              reconcileNginxCluster(
                nginxCluster,
                pods,
                getControllerCtx(
                  `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
                )
              ),
          })
        },
        signal,
        maxRetries: Infinity,
        onError: () => {
          syncedState.pods = false
        },
      }
    ),
  ])
}
