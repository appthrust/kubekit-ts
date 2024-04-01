type PromiseFunction = () => Promise<unknown>;

export class ConcurrentTaskRunner {
  private concurrency: number;
  private currentRunning = 0;
  private taskQueue: PromiseFunction[] = [];

  constructor(concurrency: number) {
    this.concurrency = concurrency;
  }

  add(promiseFunction: PromiseFunction): void {
    this.taskQueue.push(promiseFunction);
    this.#runNextTask();
  }

  #runNextTask(): void {
    if (this.currentRunning < this.concurrency && this.taskQueue.length) {
      const task = this.taskQueue.shift()!;
      if (task) {
        this.currentRunning++;
        task().finally(() => {
          this.currentRunning--;
          this.#runNextTask();
        });
      }
    }
  }
}
