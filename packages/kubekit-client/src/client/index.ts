import * as k8s from '@kubernetes/client-node';
import type * as https from 'node:https';
import { Agent } from 'undici';
import { ConcurrentTaskRunner } from './concurrent_task_runner';
import { sleep } from './sleep';

type IoK8SApiCoreV1ObjectReference = {
  apiVersion: string | undefined;
  fieldPath?: string | undefined;
  kind: string | undefined;
  name: string | undefined;
  namespace?: string | undefined;
  resourceVersion: string;
  uid?: string | undefined;
};

type K8sObj = {
  metadata: IoK8SApiCoreV1ObjectReference;
};

type RemoveUndefined<T> = {
  [K in keyof T]: Exclude<T[K], undefined | null>;
};

type CacheValue = Record<
  string,
  {
    k8sObj: WatchEvent<K8sObj>;
    addedAt: number;
  }
>;
function removeNullableProperties<T extends Record<string, unknown | undefined> | undefined>(
  object: T
): RemoveUndefined<T> {
  if (!object) return object as RemoveUndefined<T>;
  for (const key of Object.keys(object)) (object[key] === undefined || object[key] === null) && delete object[key];
  return object as RemoveUndefined<T>;
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
  const attempts = Math.min(attempt, maxRetries);

  const timeout = Math.trunc((Math.random() + 0.4) * (300 << attempts));
  await new Promise((resolve) => setTimeout((response: any) => resolve(response), timeout));
}

const isPlainObject = (value: any) => value?.constructor === Object;

type QueryArgumentsSpec = {
  path: string | undefined;
  method?: 'GET' | 'DELETE' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS' | 'HEAD' | undefined;
  body?: any | undefined;
  contentType?: string | undefined;
  params?: any | undefined;
};

type MaybePromise<T> = T | Promise<T>;

type InterceptorArguments = {
  args: QueryArgumentsSpec;
  opts: https.RequestOptions;
};
type Interceptor = (arguments_: InterceptorArguments, options: Options) => MaybePromise<https.RequestOptions>;

const interceptors: Interceptor[] = [
  async function injectKubernetesParameters({ opts }) {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    const nextOptions: https.RequestOptions = { ...opts };
    await kc.applyToHTTPSOptions(nextOptions);

    const cluster = kc.getCurrentCluster();

    if (cluster?.server) {
      const url = new URL(cluster.server);
      nextOptions.host = url.hostname;
      nextOptions.protocol = url.protocol;
      nextOptions.port = url.port;
    }
    return nextOptions;
  },
];

type RetryConditionFunction = (extraArguments: {
  res?: Response;
  error: unknown;
  args: QueryArgumentsSpec;
  attempt: number;
  options: RetryOptions;
}) => boolean | Promise<boolean>;

type RetryOptions = {
  retryCondition?: RetryConditionFunction;
  maxRetries?: number;
};

type HttpOptions = {
  headers?: Record<string, string> | undefined;
  signal?: AbortSignal;
};

export type WatchEventType = 'ADDED' | 'Modified' | 'Deleted' | 'BOOKMARK';
type WatchEvent<T> = { type: WatchEventType; object: T };
export type WatchExtraOptions<T extends { items: unknown[] }> = {
  maxWait?: number;
  wait?: number;
  concurrency?: number;
  watchEventHandler: (e: WatchEvent<T['items'][number]>) => MaybePromise<unknown>;
};
export type Options = RetryOptions & HttpOptions;

export async function apiClient<Response>(
  arguments_: QueryArgumentsSpec,
  extraOptions: Options | (Options & WatchExtraOptions<any>) = {}
): Promise<Response | void> {
  const maxRetries = extraOptions.maxRetries ?? 3;

  const defaultRetryCondition: RetryConditionFunction = ({ ...object }) => {
    const { res, attempt, error } = object;
    if (attempt > maxRetries) {
      return false;
    }

    if (typeof error === 'object' && error !== null) {
      const isAbortError = Boolean('name' in error && error.name === 'AbortError');

      if (isAbortError) {
        return false;
      }

      if (
        'toString' in error &&
        typeof error.toString === 'function' &&
        error.toString().includes('TypeError: fetch failed')
      ) {
        return true;
      }
    }

    if (res && res.status >= 500) {
      return true;
    }
    return false;
  };

  const options = {
    maxRetries,
    backoff: defaultBackoff,
    retryCondition: defaultRetryCondition,
    ...removeNullableProperties(extraOptions),
  };

  let { path, method, params, body, contentType } = { ...arguments_ };

  let httpsOptions: https.RequestOptions = {
    path,
    headers: {
      ...options.headers,
    },
  };
  if (method) {
    httpsOptions.method = method;
  }

  for (const interceptor of interceptors) {
    httpsOptions = await interceptor(
      {
        args: arguments_,
        opts: httpsOptions,
      },
      options
    );
  }

  if (!httpsOptions.agent && (httpsOptions.ca || httpsOptions.cert || httpsOptions.key)) {
    const agent = new Agent({
      connect: removeNullableProperties({
        ca: httpsOptions.ca,
        cert: httpsOptions.cert,
        key: httpsOptions.key,
        port: httpsOptions.port ? Number(httpsOptions.port) : undefined,
      }),
    });
    // https://github.com/nodejs/node/issues/48977
    httpsOptions.agent = agent as any;
  }

  if (!httpsOptions.protocol) {
    httpsOptions.protocol = 'http:';
  }
  const host = httpsOptions.host || httpsOptions.hostname;
  let baseUrl = `${httpsOptions.protocol}//${host}`;
  const searchParameters = toSearchParameters(params);
  if (searchParameters.size > 0) {
    baseUrl += (baseUrl.includes('?') ? '&' : '?') + toSearchParameters(params);
  }
  const url = new URL(baseUrl);
  if (httpsOptions.port) {
    url.port = httpsOptions.port.toString();
  }
  if (httpsOptions.path) {
    url.pathname = httpsOptions.path;
  }
  let isJson = false;
  if (isPlainObject(body) || Array.isArray(body)) {
    isJson = true;
    body = JSON.stringify(body);
  }
  const headers: Record<string, string> = {
    ...(httpsOptions.headers as any),
  };
  if (contentType) {
    headers['Content-Type'] = contentType;
  } else if (!httpsOptions.headers?.['Content-Type'] && isJson) {
    headers['Content-Type'] = 'application/json';
  }

  let retry = 0;
  while (true) {
    try {
      const response = await fetch(
        url,
        removeNullableProperties({
          headers,
          protocol: httpsOptions.protocol || undefined,
          method,
          // https://github.com/nodejs/node/issues/48977
          dispatcher: httpsOptions.agent,
          body,
          signal: extraOptions.signal,
        })
      );

      const isSuccess = response.status >= 200 && response.status < 300;
      const contentType = response.headers.get('content-type');
      const isJsonResponse = contentType?.includes('application/json') ?? false;

      if (isSuccess && isJsonResponse) {
        if ('watch' in params && params.watch && response.body && 'watchEventHandler' in extraOptions) {
          const {
            watchEventHandler,
            wait = 200,
            maxWait = 1000,
            concurrency = 4,
          } = {
            ...extraOptions,
          };

          const taskRunner = new ConcurrentTaskRunner(concurrency);
          const reader = response.body.getReader();
          const textDecoder = new TextDecoder();
          let buffer = '';

          const cache = new Map<string, CacheValue>();
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              return void 0;
            }

            buffer += textDecoder.decode(value, { stream: true });
            while (true) {
              const newlineIndex = buffer.indexOf('\n');
              if (newlineIndex === -1) break;
              const line = buffer.slice(0, newlineIndex);
              buffer = buffer.slice(newlineIndex + 1);
              const k8sObj: WatchEvent<K8sObj> = JSON.parse(line);
              const objectReference: IoK8SApiCoreV1ObjectReference = k8sObj.object.metadata;

              const cacheKey = `${objectReference.namespace}/${objectReference.name}`;

              const getLatestResourceVersion = () =>
                Object.keys(cache.get(cacheKey) || {})
                  .map((s) => Number(s))
                  .sort()
                  .pop() ?? -1;

              const getSortedAddedAt = () =>
                Object.values(cache.get(cacheKey) || {})
                  .map((v) => v.addedAt)
                  .sort()
                  .reverse();

              if (Number(k8sObj.object.metadata.resourceVersion) > getLatestResourceVersion()) {
                cache.set(cacheKey, {
                  ...(cache.get(cacheKey) || {}),
                  [k8sObj.object.metadata.resourceVersion]: {
                    k8sObj,
                    addedAt: Number(new Date()),
                  },
                });
                taskRunner.add(async () => {
                  const sortedAddedAt = getSortedAddedAt();
                  const isMaxWaited =
                    sortedAddedAt.length >= 2 && sortedAddedAt[0] - sortedAddedAt[sortedAddedAt.length - 1] >= maxWait;

                  if (!isMaxWaited) {
                    await sleep(wait);
                  }
                  // 3. queueが溜まっている場合、実行順番が回ってくるまで時間がかかる場合がある
                  // なので、k8sObjが現在のより新しいのが存在する可能性がある
                  // 新しいのがある場合はwatchEventHandlerを実行しない
                  // 一番新しいk8sObjを掴んでいるtaskが実行できる権限を持つ
                  if (Number(k8sObj.object.metadata.resourceVersion) === getLatestResourceVersion()) {
                    cache.set(cacheKey, {});
                    await watchEventHandler(k8sObj as any);
                  }
                });
              }
            }
          }
        }
        return (await response.json()) as Response;
      }

      // helpful message for debugging
      const text = await response.text();
      if (response.status === 404 && text.includes('404 page not found')) {
        console.info(`Did you forget to install your Custom Resources Definitions? path: ${httpsOptions.path}`);
      }
      throw new Error(text);
    } catch (error: any) {
      retry++;

      if (
        !(await options.retryCondition({
          res: error?.value?.res,
          error: error,
          args: arguments_,
          attempt: retry,
          options: options,
        }))
      ) {
        throw error;
      }

      await options.backoff(retry, options.maxRetries);
    }
  }
}

const toSearchParameters = (parameters: Record<string, string>) => {
  return new URLSearchParams(removeNullableProperties(parameters));
};
