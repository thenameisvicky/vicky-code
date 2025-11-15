"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const tree_helper_1 = require("./helper/tree.helper");
class TaskManager {
    constructor(tasks) {
        this.task = {};
        this.heap = new tree_helper_1.Heap((a, b) => {
            if (a.priority !== b.priority)
                return b.priority - a.priority;
            return b.taskId - a.taskId;
        });
        for (const [userId, taskId, priority] of tasks) {
            const taskWithVersion = { userId, taskId, priority, version: 1 };
            this.task[taskId] = taskWithVersion;
            this.heap.insert(taskWithVersion);
        }
    }
    add(userId, taskId, priority) {
        const newTask = { userId, taskId, priority, version: 1 };
        this.task[taskId] = newTask;
        this.heap.insert(newTask);
    }
    edit(taskId, newPriority) {
        const oldTask = this.task[taskId];
        oldTask.version++;
        oldTask.priority = newPriority;
        this.heap.insert({ ...oldTask });
    }
    rmv(taskId) {
        delete this.task[taskId];
    }
    execTop() {
        while (this.heap.size()) {
            const top = this.heap.poll();
            if (!top)
                return -1;
            const valid = this.task[top.taskId];
            if (valid.version === top.version) {
                delete this.task[top.taskId];
                return valid.userId;
            }
        }
        return -1;
    }
}
exports.TaskManager = TaskManager;
