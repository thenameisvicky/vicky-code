"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
const kthLargestHc_1 = require("./kthLargestHc");
const kthLargestHeap_1 = require("./kthLargestHeap");
const taskManager_1 = require("./taskManager");
// Construct Tree
const root = (0, helpers_1.getRoot)([1, 2, 3, 4, 5, 6]);
const root2 = (0, helpers_1.getRoot)([1, 2, 3, null, 4]);
// class instances
const tree = new helpers_1.BinaryTree(root);
const treeNull = new helpers_1.BinaryTree(root2);
const manager = new taskManager_1.TaskManager([
    [1, 10, 5],
    [2, 11, 10],
    [3, 12, 3],
    [0, 21, 10],
]);
// Function calls
const result = tree.levelOrder(root, []);
const nullResult = treeNull.levelOrder(root2, []);
const exeTask = manager.execTop();
const kthLargestElementResponse = (0, kthLargestHeap_1.kthLargestElement)([3, 2, 1, 5, 6, 4], 2);
const kthLargestElementHc = (0, kthLargestHc_1.findKthLargest)([3, 2, 1, 5, 6, 4], 2);
console.log(`Binary Traversal Result: ${result}`);
console.log(`Binary Tree with null root: ${nullResult}`);
console.log(`Task Manager result: ${exeTask}`);
console.log(`Kth LargestElementHeap: ${kthLargestElementResponse}`);
console.log(`Kth LargestElementHc: ${kthLargestElementHc}`);
