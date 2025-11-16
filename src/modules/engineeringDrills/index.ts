import { BinaryTree, getRoot } from "../helpers";
import { findKthLargest } from "./kthLargestHc";
import { kthLargestElement } from "./kthLargestHeap";
import { TaskManager } from "./taskManager";

// Construct Tree
const root = getRoot<number>([1, 2, 3, 4, 5, 6]);
const root2 = getRoot<number>([1, 2, 3, null, 4]);

// class instances
const tree = new BinaryTree<number>(root);
const treeNull = new BinaryTree<number>(root2);
const manager = new TaskManager([
  [1, 10, 5],
  [2, 11, 10],
  [3, 12, 3],
  [0, 21, 10],
]);

// Function calls
const result = tree.levelOrder(root, []);
const nullResult = treeNull.levelOrder(root2, []);
const exeTask = manager.execTop();
const kthLargestElementResponse = kthLargestElement([3, 2, 1, 5, 6, 4], 2);
const kthLargestElementHc = findKthLargest([3, 2, 1, 5, 6, 4], 2);

console.log(`Binary Traversal Result: ${result}`);
console.log(`Binary Tree with null root: ${nullResult}`);
console.log(`Task Manager result: ${exeTask}`);
console.log(`Kth LargestElementHeap: ${kthLargestElementResponse}`);
console.log(`Kth LargestElementHc: ${kthLargestElementHc}`);
