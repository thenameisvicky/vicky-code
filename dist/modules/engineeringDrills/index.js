"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
const binaryTree_1 = require("./binaryTree");
const taskManager_1 = require("./taskManager");
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
//Construct Tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
//class instances
const tree = new binaryTree_1.BinaryTree();
const manager = new taskManager_1.TaskManager([
    [1, 10, 5],
    [2, 11, 10],
    [3, 12, 3]
]);
//Function calls
const result = tree.levelOrder(root, []);
const exeTask = manager.execTop();
console.log(`Binary Traversal Result: ${result}`);
console.log(`Task Manager result: ${exeTask}`);
