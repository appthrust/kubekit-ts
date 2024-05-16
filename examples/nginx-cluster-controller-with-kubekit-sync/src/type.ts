export const controllerName = 'kubekit.com/nginx-cluster'
export const leaderName =
  process.env['LEADER_NAME'] || 'kubekit-com-nginx-cluster'
export const holderIdentity = process.env['POD_NAME'] || crypto.randomUUID()
export const controllerNamespace = process.env['POD_NAMESPACE'] || 'default'

console.info(
  '[CONFIG]',
  JSON.stringify(
    {
      controllerName,
      leaderName,
      holderIdentity,
      controllerNamespace,
    },
    null,
    2
  )
)
