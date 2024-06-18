import { describe, it, expect, vi } from 'vitest';
import matchers from 'jest-extended';
import { TaskManager, type Task } from '../src/lib/task_manager';
import { sleep } from '../src/lib/sleep';

expect.extend(matchers);

// Simulated task function
function createTask(namespace: string, name: string, duration: number, callback: () => void): Task {
  return () =>
    new Promise<void>(async (resolve) => {
      console.debug(`Starting task for ${namespace}/${name}`);
      await sleep(duration);
      console.debug(`Completed task for ${namespace}/${name}`);
      callback();
      resolve();
    });
}

describe('TaskManager', () => {
  it('should execute tasks in parallel up to the concurrency limit and complete all tasks', async () => {
    const concurrency = 2;
    const taskManager = new TaskManager({
      concurrency,
    });
    const taskCallbacks = Array.from({ length: 100 }, () => vi.fn());
    const num = 100;
    let runningTasks = 0;

    const createTrackedTask = (namespace: string, name: string, duration: number, callback: () => void): Task => {
      return () =>
        new Promise<void>(async (resolve) => {
          runningTasks++;
          expect(runningTasks).toBeLessThanOrEqual(concurrency);
          console.debug(`Starting task for ${namespace}/${name}`);
          await sleep(duration);
          console.debug(`Completed task for ${namespace}/${name}`);
          callback();
          runningTasks--;
          resolve();
        });
    };

    for (let i = 0; i < num; i++) {
      taskManager.addTask({
        key: TaskManager.getKey({
          apiVersion: 'v1',
          kind: 'Pod',
          metadata: {
            namespace: 'namespace1',
            name: `name${i}`,
          },
        }),
        task: createTrackedTask('namespace1', `name${i}`, 5, taskCallbacks[i]),
      });
    }

    await sleep(550); // 100 tasks with 5ms each, 2 at a time, so 5 * (100 / 2) = 250ms, adding buffer

    for (let i = 0; i < num; i++) {
      expect(taskCallbacks[i]).toHaveBeenCalledTimes(1);
    }
  });

  it('should execute only the last task after debouncing multiple tasks with the same key with cluster level resource', async () => {
    const taskManager = new TaskManager({
      concurrency: 2,
      wait: 1,
    });
    const taskCallbacks = Array.from({ length: 100 }, () => vi.fn());
    const finalTaskCallback = vi.fn();
    const num = 100;

    for (let i = 0; i < num; i++) {
      taskManager.addTask({
        key: TaskManager.getKey({
          apiVersion: 'v1',
          kind: 'Namespace',
          metadata: {
            name: 'name1',
          },
        }),
        task: createTask('namespace1', 'name1', 0, taskCallbacks[i]),
      });
    }

    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Namespace',
        metadata: {
          name: 'name1',
        },
      }),
      task: createTask('namespace1', 'name1', 0, finalTaskCallback),
    });

    await sleep(5);

    for (let i = 0; i < num; i++) {
      expect(taskCallbacks[i]).toHaveBeenCalledTimes(0);
    }
    expect(finalTaskCallback).toHaveBeenCalledTimes(1);
  });

  it('should execute only the last task after debouncing multiple tasks with the same key', async () => {
    const taskManager = new TaskManager({
      concurrency: 2,
      wait: 1,
    });
    const taskCallbacks = Array.from({ length: 100 }, () => vi.fn());
    const finalTaskCallback = vi.fn();
    const num = 100;

    for (let i = 0; i < num; i++) {
      taskManager.addTask({
        key: TaskManager.getKey({
          apiVersion: 'v1',
          kind: 'Pod',
          metadata: {
            namespace: 'namespace1',
            name: 'name1',
          },
        }),
        task: createTask('namespace1', 'name1', 0, taskCallbacks[i]),
      });
    }

    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace1',
          name: 'name1',
        },
      }),
      task: createTask('namespace1', 'name1', 0, finalTaskCallback),
    });

    await sleep(5);

    for (let i = 0; i < num; i++) {
      expect(taskCallbacks[i]).toHaveBeenCalledTimes(0);
    }
    expect(finalTaskCallback).toHaveBeenCalledTimes(1);
  });

  it('should run tasks sequentially for the same namespace/name', async () => {
    const taskManager = new TaskManager();
    const task1Callback = vi.fn();
    const task2Callback = vi.fn();

    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace1',
          name: 'name1',
        },
      }),
      task: task1Callback,
    });

    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace1',
          name: 'name1',
        },
      }),
      task: task2Callback,
    });

    expect(task1Callback).toHaveBeenCalledTimes(1);
    expect(task2Callback).toHaveBeenCalledTimes(1);
  });

  it('should debounce tasks for the same namespace/name', async () => {
    const taskManager = new TaskManager({
      wait: 10,
    });
    const taskCallback = vi.fn();

    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace1',
          name: 'name1',
        },
      }),
      task: createTask('namespace1', 'name1', 50, taskCallback),
    });
    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace1',
          name: 'name1',
        },
      }),
      task: createTask('namespace1', 'name1', 50, taskCallback),
    });

    await sleep(65);

    expect(taskCallback).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple namespaces/names concurrently up to the concurrency limit', async () => {
    const taskManager = new TaskManager({
      concurrency: 2,
    });
    const task1Callback = vi.fn();
    const task2Callback = vi.fn();
    const task3Callback = vi.fn();

    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace1',
          name: 'name1',
        },
      }),
      task: createTask('namespace1', 'name1', 100, task1Callback),
    });
    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace2',
          name: 'name1',
        },
      }),
      task: createTask('namespace2', 'name1', 50, task2Callback),
    });
    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace3',
          name: 'name1',
        },
      }),
      task: createTask('namespace3', 'name1', 50, task3Callback),
    });

    await sleep(105);

    expect(task1Callback).toHaveBeenCalledTimes(1);
    expect(task2Callback).toHaveBeenCalledTimes(1);
    expect(task3Callback).toHaveBeenCalledTimes(1);
  });

  it('should handle errors in tasks gracefully', async () => {
    const taskManager = new TaskManager();
    const task1Callback = vi.fn();
    const task2Callback = vi.fn();

    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace1',
          name: 'name1',
        },
      }),
      task: () => {
        task1Callback();
        return Promise.reject(new Error('Task failed'));
      },
    });
    taskManager.addTask({
      key: TaskManager.getKey({
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: {
          namespace: 'namespace1',
          name: 'name1',
        },
      }),
      task: createTask('namespace1', 'name1', 1, task2Callback),
    });

    await sleep(20);

    expect(task1Callback).toHaveBeenCalledTimes(1);
    expect(task2Callback).toHaveBeenCalledTimes(1);
  });

  it('should handle rapid succession of tasks correctly with debounce', async () => {
    const taskManager = new TaskManager({
      concurrency: 2,
      wait: 10,
    });
    const taskCallback = vi.fn();

    for (let i = 0; i < 5; i++) {
      taskManager.addTask({
        key: TaskManager.getKey({
          apiVersion: 'v1',
          kind: 'Pod',
          metadata: {
            namespace: 'namespace1',
            name: 'name1',
          },
        }),
        task: createTask('namespace1', 'name1', 50, taskCallback),
      });
    }

    await sleep(65);

    expect(taskCallback).toHaveBeenCalledTimes(1);
  });
});
