import fetch, { FetchError } from 'node-fetch'
import * as https from 'node:https'
import * as k8s from '@kubernetes/client-node'

function removeNullableProperties<T extends Record<string, unknown>>(
  obj: T
): T {
  Object.keys(obj).forEach(
    (key) => (obj[key] === undefined || obj[key] === null) && delete obj[key]
  )
  return obj
}

/**
 * Exponential backoff based on the attempt number.
 *
 * @remarks
 * 1. 600ms * random(0.4, 1.4)
 * 2. 1200ms * random(0.4, 1.4)
 * 3. 2400ms * random(0.4, 1.4)
 * 4. 4800ms * random(0.4, 1.4)
 * 5. 9600ms * random(0.4, 1.4)
 *
 * @param attempt - Current attempt
 * @param maxRetries - Maximum number of retries
 */
async function defaultBackoff(attempt: number, maxRetries: number) {
  const attempts = Math.min(attempt, maxRetries)

  const timeout = ~~((Math.random() + 0.4) * (300 << attempts))
  await new Promise((resolve) =>
    setTimeout((res: any) => resolve(res), timeout)
  )
}

const isPlainObject = (value: any) => value?.constructor === Object

type QueryArgsSpec = {
  path: string
  method?: 'GET' | 'DELETE' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS' | 'HEAD'
  body?: any
  params?: any
}

type MaybePromise<T> = T | Promise<T>

type InterceptorArgs = {
  args: QueryArgsSpec
  opts: https.RequestOptions
}
type Interceptor = (
  args: InterceptorArgs,
  options: Options
) => MaybePromise<https.RequestOptions>

const interceptors: Interceptor[] = [
  async function injectKubernetesParameters({ opts }) {
    const kc = new k8s.KubeConfig()
    kc.loadFromDefault()
    const nextOpts: https.RequestOptions = { ...opts }
    // @kubernetes/client-node@0.18用
    // await kc.applytoHTTPSOptions(nextOpts)
    // @kubernetes/client-node@0.19用
    await kc.applyToHTTPSOptions(nextOpts)

    const cluster = kc.getCurrentCluster()
    if (cluster?.server) {
      const url = new URL(cluster.server)
      nextOpts.host = url.hostname
      nextOpts.protocol = url.protocol
      nextOpts.port = url.port
    }
    return nextOpts
  },
]

type RetryConditionFunction = (extraArgs: {
  res?: Response
  error: unknown
  args: QueryArgsSpec
  attempt: number
  options: RetryOptions
}) => boolean | Promise<boolean>

type RetryOptions = {
  retryCondition?: RetryConditionFunction | undefined
  maxRetries?: number | undefined
}

type HttpHeaderOptions = {
  headers?: Record<string, string> | undefined
}

export type Options = RetryOptions & HttpHeaderOptions

export async function apiClient<Response>(
  args: QueryArgsSpec,
  extraOptions?: Options
): Promise<Response> {
  const maxRetries = extraOptions?.maxRetries ?? 3

  const defaultRetryCondition: RetryConditionFunction = ({ ...obj }) => {
    const { res, attempt, error } = obj
    if (attempt > maxRetries) {
      return false
    }

    if (error instanceof FetchError) {
      return true
    }
    if (res && res.status >= 500) {
      return true
    }
    return false
  }

  const options = {
    maxRetries,
    backoff: defaultBackoff,
    retryCondition: defaultRetryCondition,
    ...extraOptions,
  }

  let { path, method, params, body } = { ...args }

  let httpsOptions: https.RequestOptions = {
    path,
    headers: {
      ...options.headers,
    },
  }
  if (method) {
    httpsOptions.method = method
  }

  for (const interceptor of interceptors) {
    httpsOptions = await interceptor(
      {
        args,
        opts: httpsOptions,
      },
      options
    )
  }

  if (
    !httpsOptions.agent &&
    (httpsOptions.ca || httpsOptions.cert || httpsOptions.key)
  ) {
    const agent = new https.Agent(
      removeNullableProperties({
        ca: httpsOptions.ca,
        cert: httpsOptions.cert,
        key: httpsOptions.key,
        port: httpsOptions.port ? Number(httpsOptions.port) : undefined,
      })
    )
    httpsOptions.agent = agent
  }

  if (!httpsOptions.protocol) {
    httpsOptions.protocol = 'http:'
  }
  const host = httpsOptions.host || httpsOptions.hostname
  let baseUrl = `${httpsOptions.protocol}//${host}`
  const searchParams = toSearchParams(params)
  if (searchParams.size) {
    baseUrl += (baseUrl.includes('?') ? '&' : '?') + toSearchParams(params)
  }
  const url = new URL(baseUrl)
  if (httpsOptions.port) {
    url.port = httpsOptions.port.toString()
  }
  if (httpsOptions.path) {
    url.pathname = httpsOptions.path
  }
  let isJson = false
  if (isPlainObject(body)) {
    isJson = true
    body = JSON.stringify(body)
  }
  const headers: Record<string, string> = {
    ...(httpsOptions.headers as any),
  }
  if (!httpsOptions.headers?.['Content-Type'] && isJson) {
    headers['Content-Type'] = 'application/json'
  }

  let retry = 0
  while (true) {
    try {
      const res = await fetch(url, {
        headers,
        protocol: httpsOptions.protocol || undefined,
        method,
        agent: httpsOptions.agent,
        body,
      })

      const isSuccess = res.status >= 200 && res.status < 300
      const contentType = res.headers.get('content-type')
      const isJsonResponse = contentType?.includes('application/json') ?? false

      if (isSuccess && isJsonResponse) {
        return (await res.json()) as Response
      }

      // helpful message for debugging
      const text = await res.text()
      if (res.status === 404 && text.includes('404 page not found')) {
        console.info(
          `Did you forget to install your Custom Resources Definitions? path: ${httpsOptions.path}`
        )
      }
      throw new Error(text)
    } catch (e: any) {
      retry++

      if (
        !(await options.retryCondition({
          res: e?.value?.res,
          error: e,
          args,
          attempt: retry,
          options: options,
        }))
      ) {
        throw e
      }

      await options.backoff(retry, options.maxRetries)
    }
  }
}

const toSearchParams = (params: Record<string, string>) => {
  return new URLSearchParams(removeNullableProperties(params))
}
