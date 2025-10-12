"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heap = void 0;
class heap {
    //Class constructor
    constructor(compareFn) {
        this.data = [];
        this.compare = compareFn;
    }
    insert(element) {
        this.data.push(element);
        this.bubbleUp(this.data.length - 1);
    }
    peek() {
        return this.data[0];
    }
    remove(element) {
        const index = this.data.findIndex((elem) => elem == element);
        if (index == -1)
            return;
        const last = this.data.pop();
        if (index < this.data.length && last) {
            this.data[index] = last;
            this.bubbleUp(index);
            this.bubbleDown(index);
        }
    }
    poll() {
        if (this.data.length === 0)
            return undefined;
        const root = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0 && last) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return root;
    }
    size() {
        return this.data.length;
    }
    //Private Helpers
    parent(index) {
        return Math.floor((index - 1) / 2);
    }
    left(index) {
        return index * 2 + 1;
    }
    right(index) {
        return index * 2 + 2;
    }
    bubbleUp(index) {
        while (index > 0) {
            const parent = this.parent(index);
            if (this.compare(this.data[index], this.data[parent]) < 0) {
                [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
                index = parent;
            }
            else {
                break;
            }
        }
    }
    bubbleDown(index) {
        const length = this.data.length;
        while (true) {
            const leftIndex = this.left(index);
            const rightIndex = this.right(index);
            let effecientIndex = index;
            if (leftIndex < length && this.compare(this.data[leftIndex], this.data[effecientIndex]) < 0) {
                effecientIndex = leftIndex;
            }
            if (rightIndex < length && this.compare(this.data[rightIndex], this.data[effecientIndex]) < 0) {
                effecientIndex = rightIndex;
            }
            if (effecientIndex !== index) {
                [this.data[index], this.data[effecientIndex]] = [this.data[effecientIndex], this.data[index]];
                index = effecientIndex;
            }
            else {
                break;
            }
        }
    }
}
exports.heap = heap;
