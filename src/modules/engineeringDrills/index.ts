import { TreeNode } from "../../Executors/treeNodes";
import { BinaryTree } from "./binaryTree";

//Construct Tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

//BinaryTree class instance
const tree = new BinaryTree();

//Function calls
const result = tree.levelOrder(root, []);
console.log(result);