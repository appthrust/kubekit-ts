import {
  connectCoreV1GetNamespacedPodExec,
  createCoreV1NamespacedPod,
  deleteCoreV1NamespacedPod,
  listCoreV1NamespacedPod,
  patchCoreV1NamespacedPod,
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
  await listCoreV1NamespacedPod({
    namespace: 'default',
  })
  await createCoreV1NamespacedPod({
    namespace: 'default',
    ioK8SApiCoreV1Pod: {
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
  await patchCoreV1NamespacedPod(
    {
      namespace: 'default',
      name: 'test',
      ioK8SApimachineryPkgApisMetaV1Patch: {
        metadata: {
          creationTimestamp: null,
        },
      },
      fieldManager: 'client-side-apply',
      fieldValidation: 'Strict',
    },
    {
      headers: {
        'Content-Type': 'application/strategic-merge-patch+json',
      },
    }
  )

  await deleteCoreV1NamespacedPod({
    name: 'test',
    namespace: 'default',
    ioK8SApimachineryPkgApisMetaV1DeleteOptions: {},
  })

  await patchCoreV1NamespacedPod(
    {
      namespace: 'default',
      name: 'nginx',
      fieldManager: 'server-side-apply',
      fieldValidation: 'Strict',
      ioK8SApimachineryPkgApisMetaV1Patch: {
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          creationTimestamp: null,
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
    },
    {
      headers: {
        'Content-Type': 'application/apply-patch+yaml',
      },
    }
  )

  await deleteCoreV1NamespacedPod({
    name: 'nginx',
    namespace: 'default',
    ioK8SApimachineryPkgApisMetaV1DeleteOptions: {},
  })
}
main()
