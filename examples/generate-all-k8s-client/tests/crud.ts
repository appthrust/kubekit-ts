import {
  createCoreV1NamespacedPod,
  deleteCoreV1NamespacedPod,
  listCoreV1PodForAllNamespaces,
  patchCoreV1NamespacedPod,
  patchCoreV1NamespacedPodStatus,
  readCoreV1NamespacedPod,
} from '../k8s-client/generated/client/api-v1'

// $ kubectl run nginx --image=nginx --restart=Never --dry-run=client -o yaml
// apiVersion: v1
// kind: Pod
// metadata:
//   creationTimestamp: null
//   labels:
//     run: nginx
//   name: nginx
// spec:
//   containers:
//   - image: nginx
//     name: nginx
//   dnsPolicy: ClusterFirst
//   restartPolicy: Never

async function main() {
  await listCoreV1PodForAllNamespaces(
    {
      // namespace: 'cert-manager',
      watch: true,
    },
    {
      watchEventHandler: console.log,
    },
  )
  await listCoreV1PodForAllNamespaces({
    // namespace: 'cert-manager',
    watch: false,
  })

  await createCoreV1NamespacedPod({
    namespace: 'default',
    body: {
      metadata: {
        name: 'test',
        namespace: 'default',
      },
      spec: {
        containers: [{ name: 'nginx', image: 'nginx' }],
        dnsPolicy: 'ClusterFirst',
        restartPolicy: 'Never',
      },
      status: {
        phase: 'Unknown',
      },
    },
  })

  await patchCoreV1NamespacedPod({
    namespace: 'default',
    name: 'test',
    contentType: 'application/strategic-merge-patch+json',
    body: {
      metadata: {
        annotations: {
          patch: 'true',
        },
      },
    },
    fieldManager: 'client-side-apply',
    fieldValidation: 'Strict',
  })

  await patchCoreV1NamespacedPod({
    namespace: 'default',
    name: 'test',
    contentType: 'application/json-patch+json',
    body: [
      { op: 'add', path: '/metadata/annotations/testpatch', value: 'success' },
    ],
    fieldManager: 'json-patch',
  })

  await deleteCoreV1NamespacedPod({
    name: 'test',
    namespace: 'default',
    body: {},
  })

  await patchCoreV1NamespacedPod({
    namespace: 'default',
    name: 'nginx',
    fieldManager: 'server-side-apply',
    fieldValidation: 'Strict',
    contentType: 'application/apply-patch+yaml',
    body: {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: {
        labels: {
          run: 'nginx',
        },
        name: 'nginx',
        namespace: 'default',
      },
      spec: {
        containers: [
          {
            image: 'nginx',
            name: 'nginx',
            resources: {},
          },
        ],
        dnsPolicy: 'ClusterFirst',
        restartPolicy: 'Never',
      },
      status: {},
    },
  })

  await readCoreV1NamespacedPod({
    name: 'nginx',
    namespace: 'default',
  })

  await patchCoreV1NamespacedPodStatus({
    name: 'nginx',
    namespace: 'default',
    fieldManager: 'kahiro',
    contentType: 'application/apply-patch+yaml',
    body: {
      apiVersion: 'v1',
      kind: 'Pod',
      status: {
        phase: 'Failed',
      },
    },
  })

  // await wait(async () => {
  //   const res = await readCoreV1NamespacedPod({
  //     name: 'nginx',
  //     namespace: 'default',
  //   })
  //   if (
  //     !res.status?.conditions?.find(
  //       (c) => c.type === 'Ready' && c.status === 'True'
  //     )
  //   ) {
  //     return retry
  //   }

  //   return res
  // })

  await deleteCoreV1NamespacedPod({
    name: 'nginx',
    namespace: 'default',
    body: {},
  })

  console.info('Successfully')
}
main()

type Executor<T> = (params: ExecutorParams) => Promise<Retry | T>
type ExecutorParams = { retry: Retry }
const retry = Symbol()
type Retry = typeof retry

async function wait<T>(
  executor: Executor<T>,
  { interval = 500, timeout = 5000 } = {},
): Promise<T> {
  const startTime = Date.now()

  while (true) {
    const elapsed = Date.now() - startTime

    if (elapsed > timeout) {
      throw new Error('Timeout reached')
    }

    const result = await executor({ retry })

    if (result !== retry) {
      return result
    }

    await new Promise((r) => setTimeout(r, interval))
  }
}
