import type * as https from 'node:https';
import { Agent } from 'undici';
import { ReadableStream, TransformStream } from 'node:stream/web';
import { type ObjectReference } from '../lib/types';
import { KubeConfig } from '../lib/config';
import {
  type KubernetesStatus,
  ErrorWatchObjectSchema,
  isTooLargeResourceVersionKubernetesStatus,
  isAlreadyExistsKubernetesStatus,
} from '../lib/error';
import { sleep } from '../lib/sleep';
export { sleep } from '../lib/sleep';
export { TaskManager } from '../lib/task_manager';
import * as v from 'valibot';
import { verboseLog } from '../lib/env';

type Id<T> = {
  [K in keyof T]: T[K];
} & {};
type RequiredAndDefined<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined>;
};
type PartialRequired<T, K extends keyof T> = Id<RequiredAndDefined<Pick<T, K>> & Omit<T, K>>;

type K8sObj = {
  metadata: ObjectReference;
};

type RemoveUndefined<T> = {
  [K in keyof T]: Exclude<T[K], undefined | null>;
};

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
async function defaultBackoff(attempt: number, maxRetries: number, error: unknown | KubernetesStatus) {
  const errorWatchObject = v.safeParse(ErrorWatchObjectSchema, error);
  if (errorWatchObject.success && errorWatchObject.output.object.details?.retryAfterSeconds) {
    await sleep(errorWatchObject.output.object.details.retryAfterSeconds * 1000);
    return;
  }
  const attempts = Math.min(attempt, maxRetries);

  const timeout = Math.trunc((Math.random() + 0.4) * (300 << attempts));
  await sleep(timeout);
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

export type InterceptorParams = {
  args: QueryArgumentsSpec;
  opts: https.RequestOptions;
};
export type Interceptor = (params: InterceptorParams) => MaybePromise<https.RequestOptions>;

const defaultAuthorizationInterceptor: Interceptor = async ({ opts }) => {
  const kc = new KubeConfig();
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
};

type RetryConditionFunction = (extraArguments: {
  res?: Response;
  error: unknown;
  args: QueryArgumentsSpec;
  attempt: number;
  maxRetries: number;
  options: RetryOptions;
}) => boolean | Promise<boolean>;

type RetryOptions = {
  retryCondition?: RetryConditionFunction;
  maxRetries?: number;
};

type HttpOptions = Omit<RequestInit, 'headers' | 'body'> & {
  /** A Headers object, an object literal, or an array of two-item arrays to set request's headers. */
  headers?: Record<string, string> | undefined;
  interceptors?: Interceptor[];
};

type K8sListResponse<T> = {
  kind: string;
  apiVersion: string;
  metadata: { resourceVersion?: string | undefined };
  items: T[];
};

export type Context = {
  isInitialized: boolean;
  resourceVersion: string;
};
export type WatchEventType = 'ADDED' | 'MODIFIED' | 'DELETED';
export type InnerWatchEventType = WatchEventType | 'BOOKMARK' | 'ERROR';
type WatchEvent<T> = { type: WatchEventType; object: T };
type FinalizerEvent<T extends K8sObj> = {
  type: 'ADDED' | 'MODIFIED';
  object: Id<
    Omit<T, 'metadata'> & {
      metadata: PartialRequired<T['metadata'], 'finalizers'>;
    }
  >;
};
type InnerWatchEvent<T> = { type: InnerWatchEventType; object: T };
export type WatchExtraOptions<T extends K8sListResponse<K8sObj>> = {
  onError?: (err: unknown | KubernetesStatus) => void | Promise<void>;
  watchHandler: (e: WatchEvent<T['items'][number]>, ctx: Context) => MaybePromise<unknown>;
  finalizeHandler?: (e: FinalizerEvent<T['items'][number]>, ctx: Context) => MaybePromise<unknown>;
  syncedHandler?: (ctx: Context) => MaybePromise<unknown>;
  syncPeriod?: number; // default 10h
};
export type Options = RetryOptions & HttpOptions;

export type ExtraOptions = Options | (Options & WatchExtraOptions<any>);
export const globalDefaultExtraOptions: ExtraOptions = {};
export const globalInterceptors: Interceptor[] = [];

export const defaultRetryCondition: RetryConditionFunction = ({ ...object }) => {
  const { res, attempt, error, maxRetries } = object;
  if (attempt > maxRetries) {
    return false;
  }

  const errorWatchObject = v.safeParse(ErrorWatchObjectSchema, error);
  if (
    errorWatchObject.success &&
    (isTooLargeResourceVersionKubernetesStatus(errorWatchObject.output.object) ||
      isAlreadyExistsKubernetesStatus(errorWatchObject.output.object))
  ) {
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

export async function apiClient<Response>(
  arguments_: QueryArgumentsSpec,
  extraOptions: ExtraOptions = {}
): Promise<Response> {
  extraOptions = {
    ...globalDefaultExtraOptions,
    ...extraOptions,
  };
  const maxRetries = extraOptions.maxRetries ?? 3;
  const options = {
    maxRetries,
    backoff: defaultBackoff,
    retryCondition: defaultRetryCondition,
    onError: () => {},
    interceptors: [] as Interceptor[],
    ...removeNullableProperties(extraOptions),
  };
  options.interceptors = [...globalInterceptors, ...options.interceptors];
  if (options.interceptors.length === 0) {
    options.interceptors = [defaultAuthorizationInterceptor];
  }

  let { path, method, params = {}, body, contentType } = { ...arguments_ };
  const isWatch = 'watch' in params && Boolean(params.watch);

  let httpsOptions: https.RequestOptions = {
    path,
    headers: {
      ...options.headers,
    },
  };
  if (method) {
    httpsOptions.method = method;
  }

  for (const interceptor of options.interceptors) {
    httpsOptions = await interceptor({
      args: arguments_,
      opts: httpsOptions,
    });
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

    if (isWatch) {
      params = {
        ...params,
        allowWatchBookmarks: true,
      };
    }
    baseUrl += (baseUrl.includes('?') ? '&' : '?') + searchParameters;
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

  verboseLog({
    message: 'Fetch Parameters',
    body: { searchParameters },
    type: 'debug',
    level: 8,
    path: url.pathname,
  });

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
        if (!response.body) {
          throw new Error('Response body is missing.');
        }
        if (!isWatch) {
          verboseLog({
            message: 'Return Response Immediately',
            body: {
              options,
              headers: {
                ...headers,
                Authorization: 'Bearer xxxxxx',
              },
              searchParameters,
            },
            path: url.pathname,
            type: 'debug',
            level: 8,
          });
          return (await response.json()) as Response;
        }
        verboseLog({
          message: 'Start Watch',
          body: {
            options,
            headers: {
              ...headers,
              // mask
              ...(headers.Authorization && {
                Authorization: 'Bearer xxxxxx',
              }),
            },
            searchParameters,
          },
          path: url.pathname,
          type: 'debug',
          level: 8,
        });
        const {
          watchHandler,
          syncPeriod = 3_6000_000,
          finalizeHandler,
          syncedHandler,
        } = {
          finalizeHandler: () => {},
          syncedHandler: () => {},
          watchHandler: () => {},
          ...extraOptions,
        };

        const ctx: Context = {
          isInitialized: false,
          resourceVersion: '',
        };
        verboseLog({
          message: 'Print Current Context',
          body: { ctx },
          type: 'debug',
          path: url.pathname,
          level: 8,
        });

        const listArgs = {
          ...arguments_,
          params: {
            ...arguments_.params,
          },
        };
        delete listArgs.params.watch;
        const { syncPeriod: __ = 0, ...listExtraOptions } = { ...extraOptions };

        const intervalId = setInterval(async () => {
          const result = (await apiClient<K8sListResponse<K8sObj>>(
            listArgs,
            listExtraOptions
          )) as K8sListResponse<K8sObj>;

          result.items.forEach(async (k8sObj) => {
            if (k8sObj.metadata.deletionTimestamp && k8sObj.metadata.finalizers?.length) {
              await finalizeHandler(
                {
                  type: 'MODIFIED',
                  object: k8sObj as any,
                },
                {
                  ...ctx,
                }
              );
            } else {
              await watchHandler(
                {
                  type: 'MODIFIED',
                  object: k8sObj,
                },
                {
                  ...ctx,
                }
              );
            }
          });
        }, syncPeriod);
        try {
          for await (const k8sObj of (response.body as ReadableStream<Uint8Array>).pipeThrough(
            new JsonStream<InnerWatchEvent<K8sObj>>()
          )) {
            if (k8sObj.type === 'ERROR') {
              verboseLog({
                message: 'throw error',
                body: k8sObj,
                type: 'debug',
                path: url.pathname,
                level: 5,
              });
              throw k8sObj;
            }

            if (k8sObj.type === 'BOOKMARK') {
              ctx.resourceVersion = k8sObj.object.metadata.resourceVersion;
              if (k8sObj.object.metadata.annotations?.['k8s.io/initial-events-end'] === 'true') {
                await syncedHandler({
                  ...ctx,
                });
              }
              continue;
            }

            if (k8sObj.object.metadata.deletionTimestamp && k8sObj.object.metadata.finalizers?.length) {
              await finalizeHandler(k8sObj as any, {
                ...ctx,
              });
            } else {
              await watchHandler(k8sObj as any, {
                ...ctx,
              });
            }
          }
        } finally {
          clearInterval(intervalId);
        }
      }

      const text = await response.text();
      if (isSuccess) {
        // TODO: This is to bypass a type error, but it should be properly addressed.
        return text as Response;
      }
      if (response.status === 404 && text.includes('404 page not found')) {
        // helpful message for debugging
        console.info(`Did you forget to install your Custom Resources Definitions? path: ${httpsOptions.path}`);
      }
      if (response.headers.get('content-type') === 'application/json') {
        throw JSON.parse(text);
      }
      throw new Error(text);
    } catch (error: any) {
      retry++;

      await options.onError(error);

      const errorWatchObject = v.safeParse(ErrorWatchObjectSchema, error);
      // When Invalid, it will not pass no matter how many times it is re-run, so it is terminated without retry.
      if (errorWatchObject.success && errorWatchObject.output.object.reason === 'Invalid') {
        if (
          errorWatchObject.output.object.details?.causes?.some((cause) =>
            cause?.message?.includes(
              'sendInitialEvents is forbidden for watch unless the WatchList feature gate is enabled'
            )
          )
        ) {
          console.info(`Error: sendInitialEvents is forbidden for watch unless the WatchList feature gate is enabled.
To resolve this issue, enable the WatchList feature gate in your k8s api-server.

For k3d, you can enable the feature gate with the following command:

$ k3d cluster create kubekit --k3s-arg '--kube-apiserver-arg=feature-gates=WatchList=true@server:*'`);
        }
        throw error;
      }

      if (
        !(await options.retryCondition({
          res: error?.value?.res,
          error: error,
          args: arguments_,
          attempt: retry,
          options: options,
          maxRetries,
        }))
      ) {
        throw error;
      }

      await options.backoff(retry, options.maxRetries, error);
    }
  }
}

const toSearchParameters = (parameters: Record<string, string>) => {
  return new URLSearchParams(removeNullableProperties(parameters));
};

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
