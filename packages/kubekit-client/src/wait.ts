export type Executor<T> = (params: ExecutorParams) => Promise<Retry | T>;
export type ExecutorParams = { retry: Retry };
const retry = Symbol();
type Retry = typeof retry;

export async function wait<T>(executor: Executor<T>, { interval = 500, timeout = 5000 } = {}): Promise<T> {
  const startTime = Date.now();

  while (true) {
    const elapsed = Date.now() - startTime;

    if (elapsed > timeout) {
      throw new Error('Timeout reached');
    }

    const result = await executor({ retry });

    if (result !== retry) {
      return result;
    }

    await new Promise((r) => setTimeout(r, interval));
  }
}
