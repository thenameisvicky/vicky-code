"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const treeNodes_1 = require("../../Executors/treeNodes");
const binaryTree_1 = require("./binaryTree");
//Construct Tree
const root = new treeNodes_1.TreeNode(1);
root.left = new treeNodes_1.TreeNode(2);
root.right = new treeNodes_1.TreeNode(3);
root.left.left = new treeNodes_1.TreeNode(4);
root.left.right = new treeNodes_1.TreeNode(5);
root.right.right = new treeNodes_1.TreeNode(6);
//BinaryTree class instance
const tree = new binaryTree_1.BinaryTree();
//Function calls
const result = tree.levelOrder(root, []);
console.log(result);
