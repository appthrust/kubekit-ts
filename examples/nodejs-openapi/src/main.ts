import {
  createCoreV1NamespacedPod,
  patchCoreV1NamespacedConfigMap,
} from './generated/k8s-client'

async function main() {
  await createCoreV1NamespacedPod({
    namespace: 'default',
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

  await patchCoreV1NamespacedConfigMap({
    namespace: 'default',
    name: 'example',
    fieldManager: 'server-side-apply',
    fieldValidation: 'Strict',
    contentType: 'application/apply-patch+yaml',
    body: {
      apiVersion: 'v1',
      kind: 'ConfigMap',
      metadata: {
        labels: {
          run: 'example',
        },
        name: 'nginx',
        namespace: 'default',
      },
      data: {
        random: `${Math.random()}`,
      },
    },
  })

  console.info('Successfully')
}
main()
