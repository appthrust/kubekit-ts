import { sleep } from './sleep';
import { type ObjectReference } from './types';

type CacheValue = Record<string, number>;

export class Debounce {
  #cache = new Map<string, CacheValue>();
  #waitMilliSeconds: number;
  #maxWaitMilliSeconds: number;
  #latestVersion: string;

  constructor(waitMilliSeconds: number, maxWaitMilliSeconds: number) {
    this.#waitMilliSeconds = waitMilliSeconds;
    this.#maxWaitMilliSeconds = maxWaitMilliSeconds;
    this.#latestVersion = '';
  }

  public static getCacheKey({ namespace, name }: ObjectReference) {
    return `${namespace || ''}/${name}`;
  }

  pushLatestItem(cacheKey: string, version: string) {
    this.#latestVersion = version;
    this.#cache.set(cacheKey, {
      ...(this.#cache.get(cacheKey) || {}),
      [version]: Number(new Date()),
    });
  }

  async skipOrExec(cacheKey: string, version: string, func: () => unknown | Promise<unknown>) {
    const now = Number(new Date());
    const getCurrentPushedAt = this.#cache.get(cacheKey)?.[version] || now;
    const currentElapsedTime = now - getCurrentPushedAt;
    const getOldestPushedAt = Object.values(this.#cache.get(cacheKey) || {})[0] || now;
    const oldestElapsedTime = now - getOldestPushedAt;

    if (this.#maxWaitMilliSeconds > oldestElapsedTime && this.#waitMilliSeconds > currentElapsedTime) {
      await sleep(this.#waitMilliSeconds - currentElapsedTime);
    }
    if (version === this.#latestVersion) {
      this.#cache.delete(cacheKey);
      await func();
    }
  }
}
