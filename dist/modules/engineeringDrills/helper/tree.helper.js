"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.Heap = exports.TreeNode = void 0;
class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
class Heap {
    // Class constructor
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
        const index = this.data.findIndex((elem) => elem === element);
        if (index === -1)
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
    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.compare(this.data[index], this.data[parent]) < 0) {
                [this.data[index], this.data[parent]] = [
                    this.data[parent],
                    this.data[index],
                ];
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
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let effecientIndex = index;
            if (leftIndex < length &&
                this.compare(this.data[leftIndex], this.data[effecientIndex]) < 0) {
                effecientIndex = leftIndex;
            }
            if (rightIndex < length &&
                this.compare(this.data[rightIndex], this.data[effecientIndex]) < 0) {
                effecientIndex = rightIndex;
            }
            if (effecientIndex !== index) {
                [this.data[index], this.data[effecientIndex]] = [
                    this.data[effecientIndex],
                    this.data[index],
                ];
                index = effecientIndex;
            }
            else {
                break;
            }
        }
    }
}
exports.Heap = Heap;
class BinaryTree {
    constructor(root) {
        this.root = root;
    }
    preOrder(node = this.root, result) {
        if (!node)
            return result;
        result.push(node.value);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }
    postOrder(node = this.root, result) {
        if (!node)
            return result;
        this.postOrder(node.right, result);
        this.postOrder(node.left, result);
        result.push(node.value);
        return result;
    }
    inOrder(node = this.root, result) {
        if (!node)
            return result;
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
        return result;
    }
    levelOrder(node = this.root, result) {
        if (!node)
            return result;
        const queue = [node];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (currentNode) {
                result.push(currentNode.value);
                if (currentNode.left)
                    queue.push(currentNode.left);
                if (currentNode.right)
                    queue.push(currentNode.right);
            }
        }
        return result;
    }
}
exports.BinaryTree = BinaryTree;
