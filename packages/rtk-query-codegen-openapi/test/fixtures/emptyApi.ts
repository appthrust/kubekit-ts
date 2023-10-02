import * as https from 'https';
import * as querystring from 'querystring';
import * as k8s from '@kubernetes/client-node';
import { removeNullableProperties } from '../remove-undefined-properties';

const isPlainObject = (value: any) => value?.constructor === Object;

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

export const interceptors: Interceptor[] = [
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

const resolvePath = (path: string, params: querystring.ParsedUrlQueryInput) => {
  if (params && Object.keys(params).length > 0) {
    const queryString = querystring.stringify(params);
    path += (path.includes('?') ? '&' : '?') + queryString;
  }
  return path;
};

const httpsRequest = <T>(body: unknown, options: https.RequestOptions): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    const req = https.request(options, (res) => {
      const data: any = [];
      res.on('data', (d) => data.push(d));
      res.on('end', () => resolve(data.join('')));
    });
    if (body) {
      req.write(isPlainObject(body) ? JSON.stringify(body) : body);
    }
    req.on('error', reject).end();
  });
};

export async function apiClient<Response, QueryArgs extends QueryArgsSpec>(args: QueryArgs): Promise<Response> {
  const { path, method, params, body } = { ...args };

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

  opts.path = resolvePath(path, removeNullableProperties(params));
  const res = await httpsRequest<Response>(body, opts);
  return res;
}
