export type Task = () => Promise<void> | void;

export interface TaskOptions {
  key: string;
  task: Task;
}

interface TaskManagerOptions {
  concurrency?: number;
  isPaused?: boolean;
  wait?: number;
  maxWait?: number;
}

export class TaskManager {
  private concurrency: number;
  private currentlyRunning: number;
  private queue: { [key: string]: Task[] & { running?: boolean } };
  private waitTimers: { [key: string]: NodeJS.Timeout | undefined };
  private maxWaitTimers: { [key: string]: NodeJS.Timeout | undefined };
  private isPaused: boolean;
  private wait: number;
  private maxWait: number;

  constructor({
    concurrency = Infinity,
    isPaused = false,
    wait = 0,
    maxWait = 0,
  }: TaskManagerOptions = {}) {
    this.concurrency = concurrency;
    this.currentlyRunning = 0;
    this.queue = {};
    this.waitTimers = {};
    this.maxWaitTimers = {};
    this.isPaused = isPaused;
    this.wait = wait;
    this.maxWait = maxWait;
  }

  // Function to calculate the key from apiVersion, kind, and metadata
  public static getKey({
    apiVersion,
    kind,
    metadata,
  }: {
    apiVersion: string;
    kind: string;
    metadata: { name: string; namespace?: string };
  }): string {
    return metadata.namespace
      ? `${apiVersion}/${kind}/${metadata.namespace}/${metadata.name}`
      : `${apiVersion}/${kind}/${metadata.name}`;
  }

  // Add a new task to the queue with wait and maxWait handling
  addTask({ key, task }: TaskOptions) {
    if (this.wait === 0) {
      this.queueTask(key, task);
      this.runTask();
      return;
    }

    this.clearTimers(key);

    this.waitTimers[key] = setTimeout(() => {
      this.queueTask(key, task);
      this.runTask();
      this.clearTimers(key);
    }, this.wait);

    if (this.maxWait > 0) {
      this.maxWaitTimers[key] = setTimeout(() => {
        if (this.waitTimers[key]) {
          clearTimeout(this.waitTimers[key]);
          this.waitTimers[key] = undefined;
        }
        this.queueTask(key, task);
        this.runTask();
        this.clearTimers(key);
      }, this.maxWait);
    }
  }

  // Queue a task
  private queueTask(key: string, task: Task) {
    if (!this.queue[key]) {
      this.queue[key] = [];
    }
    this.queue[key].push(task);
  }

  // Run the next task in the queue
  private runTask() {
    if (this.isPaused || this.currentlyRunning >= this.concurrency) {
      return;
    }

    const keys = Object.keys(this.queue);
    for (let key of keys) {
      if (this.queue[key]?.length > 0 && !this.queue[key].running) {
        this.executeTask(key);
        return; // Only run one task at a time
      } else if (this.queue[key]?.length === 0) {
        delete this.queue[key];
      }
    }
  }

  // Execute a task
  private executeTask(key: string) {
    this.queue[key].running = true;
    const task = this.queue[key].shift()!;
    this.currentlyRunning++;
    const taskResult = task();

    const handleTaskCompletion = () => {
      if (this.queue[key]) {
        this.queue[key].running = false;
      }
      this.currentlyRunning--;
      this.runTask();
    };

    if (taskResult instanceof Promise) {
      taskResult.then(handleTaskCompletion).catch((err) => {
        console.error(`Error processing task for ${key}:`, err);
        handleTaskCompletion();
      });
    } else {
      handleTaskCompletion();
    }
  }

  // Clear timers for a key
  private clearTimers(key: string) {
    if (this.waitTimers[key]) {
      clearTimeout(this.waitTimers[key]);
      this.waitTimers[key] = undefined;
    }
    if (this.maxWaitTimers[key]) {
      clearTimeout(this.maxWaitTimers[key]);
      this.maxWaitTimers[key] = undefined;
    }
  }

  // Pause task execution
  public pause() {
    this.isPaused = true;
  }

  // Resume task execution
  public resume() {
    if (this.isPaused) {
      this.isPaused = false;
      this.runTask();
    }
  }
}
