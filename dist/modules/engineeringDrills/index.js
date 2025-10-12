"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaryTree_1 = require("./binaryTree");
const helperClasses_1 = require("./helperClasses");
const taskManager_1 = require("./taskManager");
//Construct Tree
const root = new helperClasses_1.TreeNode(1);
root.left = new helperClasses_1.TreeNode(2);
root.right = new helperClasses_1.TreeNode(3);
root.left.left = new helperClasses_1.TreeNode(4);
root.left.right = new helperClasses_1.TreeNode(5);
root.right.right = new helperClasses_1.TreeNode(6);
//class instances
const tree = new binaryTree_1.BinaryTree();
const manager = new taskManager_1.TaskManager([
    [1, 10, 5],
    [2, 11, 10],
    [3, 12, 3],
    [0, 21, 10]
]);
//Function calls
const result = tree.levelOrder(root, []);
const exeTask = manager.execTop();
console.log(`Binary Traversal Result: ${result}`);
console.log(`Task Manager result: ${exeTask}`);
