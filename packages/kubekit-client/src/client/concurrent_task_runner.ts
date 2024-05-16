import { sleep } from "./sleep";

type PromiseFunction = () => Promise<unknown>;

export class ConcurrentTaskRunner {
  private concurrency: number;
  private currentRunning = 0;
  private taskQueue: PromiseFunction[] = [];

  private taskId = 0;
  private queueTaskIds: number[] = [];

  constructor(concurrency: number) {
    this.concurrency = concurrency;
  }

  add(promiseFunction: PromiseFunction): Promise<void> {
    return new Promise((res) => {
      this.taskId++
      const taskId = this.taskId
      this.queueTaskIds.push(taskId)
      this.taskQueue.push(() => promiseFunction().finally(() => {
        this.queueTaskIds = this.queueTaskIds.filter(id => id !== taskId)
        this.currentRunning--;
        this.#runNextTask();
        res()
      }));
      this.#runNextTask();
    })
  }

  waitFinishedCurrentQueuedTasks(): Promise<void> {
    return new Promise(async (res) => {
      const latestTaskId = this.taskId
      while (true) {
        await sleep(1)
        if (this.queueTaskIds.filter(id => id <= latestTaskId).length === 0) {
          break
        }
      }
      res()
    })
  }

  #runNextTask(): void {
    if (this.currentRunning < this.concurrency && this.taskQueue.length) {
      const task = this.taskQueue.shift();
      if (task) {
        this.currentRunning++
        task()
      }
    }
  }
}
