import { listCoreV1PodForAllNamespaces } from '@/generated/k8s-client/api-v1'

export default async function Home() {
  const pods = await listCoreV1PodForAllNamespaces(
    {},
    {
      next: {
        revalidate: false,
      },
    }
  )
  return (
    <main>
      <ul>
        {pods.items.map((pod, i) => (
          <li key={i}>{pod.metadata!.name}</li>
        ))}
      </ul>
    </main>
  )
}
