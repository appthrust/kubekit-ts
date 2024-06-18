import { TaskManager, isKubernetesError } from '@kubekit/client'
import { listCoreV1PodForAllNamespaces } from './core-v1'
import { listKubekitComV1NginxClusterForAllNamespaces } from './kubekit-v1'
import { type NginxCluster, type Pods, podLabelKey } from './type'
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
  abortController: AbortController
) {
  const { nginxClusters, pods } = state
  const taskMng = new TaskManager()
  taskMng.pause()

  const syncedState = {
    nginxClusters: false,
    pods: false,
  }

  const signal = abortController.signal
  signal.addEventListener('abort', () => {
    taskMng.pause()
  })

  const isAllSynced = () => syncedState.nginxClusters && syncedState.pods

  try {
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
              taskMng.resume()
            }
          },
          watchHandler: async ({ object: nginxCluster, type }) => {
            const key = `${nginxCluster.metadata.namespace}/${nginxCluster.metadata.name}`
            if (type === 'DELETED') {
              nginxClusters.delete(key)
              return
            }

            nginxClusters.set(key, nginxCluster)

            taskMng.addTask({
              key: TaskManager.getKey(nginxCluster),
              task: () => reconcileNginxCluster(nginxCluster, pods),
            })
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
          labelSelector: podLabelKey,
        },
        {
          syncedHandler: async () => {
            syncedState.pods = true
            if (isAllSynced()) {
              taskMng.resume()
            }
          },
          watchHandler: async ({ object: pod, type }, ctx) => {
            state.podResourceVersion = ctx.resourceVersion

            const nginxClusterName = pod.metadata.labels?.[podLabelKey]
            if (!nginxClusterName) {
              throw Error(
                `${podLabelKey} label is missing from the pod metadata.`
              )
            }

            const nginxCluster = [...nginxClusters.values()].find(
              (n) => n.metadata.name === nginxClusterName
            )

            const podKey = `${pod.metadata.namespace}/${pod.metadata.name}`
            if (type === 'DELETED') {
              pods.delete(podKey)
            } else {
              pods.set(podKey, {
                metadata: pod.metadata,
              })
            }

            if (!nginxCluster) {
              if (syncedState.nginxClusters) {
                console.warn(
                  `[WARN] nginxCluster with name ${nginxClusterName} does not exist.`
                )
              }
              return
            }
            taskMng.addTask({
              key: TaskManager.getKey(nginxCluster),
              task: () => reconcileNginxCluster(nginxCluster, pods),
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
  } catch (e) {
    if (isKubernetesError(e)) {
      if (e.reason === 'Invalid') {
        return abortController.abort()
      } else {
        console.error('KubernetesError:', e)
      }
    } else {
      console.error('An unknown error occurred:', e)
    }
  }
}
