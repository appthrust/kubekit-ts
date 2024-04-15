import * as k8s from '@kubernetes/client-node';
import type * as https from 'node:https';
import { Agent } from 'undici';
import { ConcurrentTaskRunner } from './concurrent_task_runner';
import { sleep } from './sleep';
import { ReadableStream, TransformStream } from 'node:stream/web';

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

type CacheValue = Record<string, number>;
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

type HttpOptions = Omit<RequestInit, "headers" | "body"> & {
  /** A Headers object, an object literal, or an array of two-item arrays to set request's headers. */
  headers?: Record<string, string> | undefined;
};

type K8sListResponse<T> = {
  kind: string;
  apiVersion: string;
  metadata: { resourceVersion?: string | undefined };
  items: T[];
};

export type WatchEventType = 'ADDED' | 'Modified' | 'Deleted' | 'BOOKMARK';
type WatchEvent<T> = { type: WatchEventType; object: T };
export type WatchExtraOptions<T extends K8sListResponse<unknown>> = {
  maxWait?: number;
  wait?: number;
  concurrency?: number;
  watchHandler: (e: WatchEvent<T['items'][number]>) => MaybePromise<unknown>;
  syncPeriod?: number; // default 10h
};
export type Options = RetryOptions & HttpOptions;

type ExtraOptions = Options | (Options & WatchExtraOptions<any>)
export const globalDefaultExtraOptions: ExtraOptions = {}

export async function apiClient<Response>(
  arguments_: QueryArgumentsSpec,
  extraOptions: ExtraOptions = {}
): Promise<Response | void> {
  extraOptions = {
    ...globalDefaultExtraOptions,
    ...extraOptions,
  }
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
    // https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/3157-watch-list/README.md
    // TODO: defaultのfeature flagがtrueになったら、watchの場合は自動で以下の2つのparamsを追加してあげたい
    // sendInitialEvents: true,
    // resourceVersionMatch: "NotOlderThan"
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
          ...options,
          headers,
          protocol: httpsOptions.protocol || undefined,
          method,
          // https://github.com/nodejs/node/issues/48977
          dispatcher: httpsOptions.agent,
          body,
        })
      );

      const isSuccess = response.status >= 200 && response.status < 300;
      const contentType = response.headers.get('content-type');
      const isJsonResponse = contentType?.includes('application/json') ?? false;

      if (isSuccess && isJsonResponse) {
        if ('watch' in params && params.watch && response.body && 'watchHandler' in extraOptions) {
          const {
            watchHandler,
            wait = 200,
            maxWait = 1000,
            concurrency = 4,
            syncPeriod = 3_6000_000,
          } = {
            ...extraOptions,
          };

          const taskRunner = new ConcurrentTaskRunner(concurrency);
          const debounce = new Debounce(wait, maxWait);

          const listArgs = {
            ...arguments_,
            params: {
              ...arguments_.params,
            },
          };
          delete listArgs.params.watch;
          const { syncPeriod: __, ...listExtraOptions } = { ...extraOptions };
          const intervalId = setInterval(async () => {
            const result = (await apiClient<K8sListResponse<K8sObj>>(
              listArgs,
              listExtraOptions
            )) as K8sListResponse<K8sObj>;

            result.items.forEach((k8sObj) => {
              taskRunner.add(async () => {
                const objectReference = k8sObj.metadata;

                await debounce.skipOrExec(Debounce.getCacheKey(objectReference), objectReference.resourceVersion, () =>
                  watchHandler(k8sObj as any)
                );
              });
            });
          }, syncPeriod);
          try {
            for await (const k8sObj of (response.body as ReadableStream<Uint8Array>).pipeThrough(
              new JsonStream<WatchEvent<K8sObj>>()
            )) {
              const { resourceVersion } = k8sObj.object.metadata;
              const cacheKey = Debounce.getCacheKey(k8sObj.object.metadata);
              debounce.push(cacheKey, resourceVersion);
              taskRunner.add(async () => {
                await debounce.skipOrExec(cacheKey, resourceVersion, () => watchHandler(k8sObj as any));
              });
            }
          } finally {
            clearInterval(intervalId);
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

class Debounce {
  #cache = new Map<string, CacheValue>();
  #waitMilliSeconds: number;
  #maxWaitMilliSeconds: number;

  constructor(waitMilliSeconds: number, maxWaitMilliSeconds: number) {
    this.#waitMilliSeconds = waitMilliSeconds;
    this.#maxWaitMilliSeconds = maxWaitMilliSeconds;
  }

  public static getCacheKey({ namespace, name }: IoK8SApiCoreV1ObjectReference) {
    return `${namespace || ''}/${name}`;
  }

  push(cacheKey: string, resourceVersion: string) {
    this.#cache.set(cacheKey, {
      ...(this.#cache.get(cacheKey) || {}),
      [resourceVersion]: Number(new Date()),
    });
  }

  async skipOrExec(cacheKey: string, resourceVersion: string, func: () => unknown | Promise<unknown>) {
    const getLatestResourceVersion = () => {
      const resourceVersions = Object.keys(this.#cache.get(cacheKey) || {});

      if (resourceVersions.length === 0) {
        return BigInt(-1);
      }

      const sorted = resourceVersions.map(BigInt).sort();

      const max = sorted[sorted.length - 1];
      const min = sorted[0];

      // resourceVersionはint64を超えたら0にwrapされる仕様です.
      // minとmaxでNumber.MAX_VALUEよりもresourceVersionが離れていたら、離れすぎなので、wrapされたと判定する事にします
      if (max - BigInt(Number.MAX_VALUE) > min) {
        return min;
      }

      return max;
    };

    const getSortedAddedAt = () =>
      Object.values(this.#cache.get(cacheKey) || {})
        .sort()
        .reverse();

    const sortedAddedAt = getSortedAddedAt();
    const isMaxWaitTimeReached =
      sortedAddedAt.length >= 2 &&
      sortedAddedAt[0] - sortedAddedAt[sortedAddedAt.length - 1] >= this.#maxWaitMilliSeconds;

    if (!isMaxWaitTimeReached) {
      await sleep(this.#waitMilliSeconds);
    }
    // 1. resourceVersionは文字列で比較できる様にする
    if (BigInt(resourceVersion) === getLatestResourceVersion()) {
      this.#cache.delete(cacheKey);
      await func();
    }
  }
}

class JsonStream<T> extends TransformStream<Uint8Array, T> {
  constructor() {
    let buffer = '';
    const textDecoder = new TextDecoder();
    super({
      transform(chunk, controller) {
        buffer += textDecoder.decode(chunk, { stream: true });
        while (true) {
          const newlineIndex = buffer.indexOf('\n');
          if (newlineIndex === -1) break;
          const line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);
          controller.enqueue(JSON.parse(line));
        }
      },
    });
  }
}
