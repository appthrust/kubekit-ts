import fetch, { type Response } from 'node-fetch';
import * as https from 'https';
import * as k8s from '@kubernetes/client-node';

const isPlainObject = (value: any) => value?.constructor === Object;

function removeNullableProperties<T extends Record<string, unknown>>(obj: T): T {
  Object.keys(obj).forEach((key) => (obj[key] === undefined || obj[key] === null) && delete obj[key]);
  return obj;
}

type QueryArgsSpec = {
  path: string;
  method?: 'GET' | 'DELETE' | 'PATCH' | 'POST' | 'PUT';
  body?: any;
  params?: any;
};

type MaybePromise<T> = T | Promise<T>;

type InterceptorArgs = {
  args: QueryArgsSpec;
  opts: https.RequestOptions;
};
type Interceptor = (args: InterceptorArgs) => MaybePromise<https.RequestOptions>;

const interceptors: Interceptor[] = [
  async function injectKubernetesParameters({ opts }) {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    const nextOpts: https.RequestOptions = { ...opts };
    await kc.applyToHTTPSOptions(nextOpts);
    const cluster = kc.getCurrentCluster();
    if (cluster?.server) {
      const url = new URL(cluster.server);
      nextOpts.host = url.hostname;
      nextOpts.protocol = url.protocol;
    }
    return nextOpts;
  },
];

export async function apiClient<Response>(args: QueryArgsSpec): Promise<HTTPResponse<Response>> {
  let { path, method, params, body } = { ...args };

  let opts: https.RequestOptions = {};
  if (method) {
    opts.method = method;
  }

  for (let interceptor of interceptors) {
    opts = await interceptor({
      args,
      opts,
    });
  }

  if (!opts.agent && opts.ca) {
    opts.agent = new https.Agent({
      ca: opts.ca,
    });
  }

  opts.path = resolvePath(path, removeNullableProperties(params));
  if (!opts.protocol) {
    opts.protocol = 'http:';
  }
  const host = opts.host || opts.hostname;
  const baseUrl = `${opts.protocol}//${host}`;
  const url = new URL(baseUrl);
  if (opts.port) {
    url.port = opts.port.toString();
  }
  if (opts.path) {
    url.pathname = opts.path;
  }
  let isJson = false;
  if (isPlainObject(body)) {
    isJson = true;
    body = JSON.stringify(body);
  }
  const headers: Record<string, string> = {
    ...(opts.headers as any),
  };
  if (!opts.headers?.['Content-Type'] && isJson) {
    headers['Content-Type'] = 'application/json';
  }
  const res = await fetch(url, {
    headers,
    protocol: opts.protocol || undefined,
    method,
    agent: opts.agent,
    body,
  });
  return {
    res,
    isSuccess: res.status >= 200 && res.status < 300,
    getJson: () => res.json() as any,
  } as const;
}

const resolvePath = (path: string, params: Record<string, string>) => {
  if (params && Object.keys(params).length > 0) {
    const queryString = new URLSearchParams(params);
    path += (path.includes('?') ? '&' : '?') + queryString;
  }
  return path;
};

type HTTPResponse<T> = {
  res: Response;
} & (
  | {
      isSuccess: true;
      getJson: () => Promise<T>;
    }
  | {
      isSuccess: false;
      getJson: () => Promise<ErrorResponse>;
    }
);

// eg.
// {
//   kind: 'Status',
//   apiVersion: 'v1',
//   metadata: {},
//   status: 'Failure',
//   message: 'albgatewayparameterses.appthrust.dev "kahiro-test" already exists',
//   reason: 'AlreadyExists',
//   details: {
//     name: 'kahiro-test',
//     group: 'appthrust.dev',
//     kind: 'albgatewayparameterses'
//   },
//   code: 409
// }

type ErrorResponse = {
  kind: string;
  apiVersion: string;
  metadata: {};
  status: 'Failure';
  message: string;
  reason: string;
  details: {
    name: string;
    group: string;
    kind: string;
  };
  code: number;
};
