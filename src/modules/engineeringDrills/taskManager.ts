import { Heap } from "../helpers";

type task = {
  userId: number;
  taskId: number;
  priority: number;
  version: number;
};
export class TaskManager {
  private task: Record<number, task>;
  private heap: Heap<task>;
  constructor(tasks: number[][]) {
    this.task = {};
    this.heap = new Heap((a, b) => {
      if (a.priority !== b.priority) return b.priority - a.priority;
      return b.taskId - a.taskId;
    });

    for (const [userId, taskId, priority] of tasks) {
      const taskWithVersion: task = { userId, taskId, priority, version: 1 };
      this.task[taskId] = taskWithVersion;
      this.heap.insert(taskWithVersion);
    }
  }

  add(userId: number, taskId: number, priority: number): void {
    const newTask: task = { userId, taskId, priority, version: 1 };
    this.task[taskId] = newTask;
    this.heap.insert(newTask);
  }

  edit(taskId: number, newPriority: number): void {
    const oldTask = this.task[taskId];
    oldTask.version++;
    oldTask.priority = newPriority;

    this.heap.insert({ ...oldTask });
  }

  rmv(taskId: number): void {
    delete this.task[taskId];
  }

  execTop(): number {
    while (this.heap.size()) {
      const top = this.heap.poll();

      if (!top) return -1;

      const valid = this.task[top.taskId];
      if (valid.version === top.version) {
        delete this.task[top.taskId];
        return valid.userId;
      }
    }
    return -1;
  }
}
