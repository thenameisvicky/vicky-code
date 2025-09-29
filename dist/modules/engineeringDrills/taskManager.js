"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class maxHeap {
    constructor(compareFn) {
        this.data = [];
        this.compare = compareFn;
    }
    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    left(i) {
        return 2 * i + 1;
    }
    right(i) {
        return 2 * i + 2;
    }
    insert(task) {
        this.data.push(task);
        this.bubbleUp(this.data.length - 1);
    }
    peek() {
        return this.data.length ? this.data[0] : null;
    }
    extract() {
        if (!this.data.length)
            return null;
        const top = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0 && last) {
            this.data[0] = last;
            this.bubbledDown(0);
        }
        return top;
    }
    remove(taskId) {
        const index = this.data.findIndex((task) => task.taskId == taskId);
        if (index === -1)
            return;
        const last = this.data.pop();
        if (index < this.data.length && last) {
            this.data[index] = last;
            this.bubbleUp(index);
            this.bubbledDown(index);
        }
    }
    size() {
        return this.data.length;
    }
    //Bubbling up and down to maintain the Heap
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = this.parent(index);
            if (this.compare(this.data[index], this.data[parentIndex]) > 0) {
                [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
                index = parentIndex;
            }
            else {
                break;
            }
        }
    }
    bubbledDown(index) {
        const length = this.data.length;
        while (true) {
            let largest = index;
            const left = this.left(index);
            const right = this.right(index);
            if (left < length && this.compare(this.data[index], this.data[largest]) > 0) {
                largest = left;
            }
            if (right < length && this.compare(this.data[right], this.data[largest]) > 0) {
                largest = right;
            }
            if (largest != index) {
                [this.data[index], this.data[largest]] = [this.data[largest], this.data[index]];
                index = largest;
            }
            else {
                break;
            }
        }
    }
}
class TaskManager {
    constructor(tasks) {
        this.task = {};
        this.heap = new maxHeap((a, b) => {
            if (a.priority !== b.priority)
                return a.priority - b.priority;
            return a.taskId - b.taskId;
        });
        for (let [userId, taskId, priority] of tasks) {
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
            const top = this.heap.extract();
            if (!top)
                return -1;
            const valid = this.task[top.taskId];
            if (valid.version == top.version) {
                delete this.task[top.taskId];
                return valid.userId;
            }
        }
        return -1;
    }
}
exports.TaskManager = TaskManager;
