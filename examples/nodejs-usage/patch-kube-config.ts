import { parse, stringify } from 'https://deno.land/std/yaml/mod.ts'
import { existsSync } from 'https://deno.land/std/fs/mod.ts'

type Env = {
  name: string
  value: string
}

type User = {
  exec?: {
    apiVersion: string
    args: string[]
    command: string
    env?: Env[]
  }
}

type KubeConfig = {
  users: { name: string; user: User }[]
}

const defaultKubeConfigPath = Deno.env.get('HOME') + '/.kube/config'

const kubeConfigPath = Deno.env.get('KUBECONFIG') || defaultKubeConfigPath
if (existsSync(kubeConfigPath)) {
  const kubeConfig = parse(
    await Deno.readTextFile(kubeConfigPath),
  ) as KubeConfig
  kubeConfig.users.forEach(({ user }) => {
    const AWS_PROFILE_ENV = user.exec?.env?.find(
      (e) => e.name === 'AWS_PROFILE',
    )
    const HAS_PROFILE_ARG = user.exec?.args?.find((arg) => arg === '--profile')
    if (AWS_PROFILE_ENV && !HAS_PROFILE_ARG) {
      user.exec?.args.push('--profile')
      user.exec?.args.push(AWS_PROFILE_ENV.value)
    }
  })
  await Deno.writeTextFile(kubeConfigPath, stringify(kubeConfig))
}
