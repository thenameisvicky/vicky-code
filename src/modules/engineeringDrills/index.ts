import { BinaryTree } from "./binaryTree";
import { TaskManager } from "./taskManager";

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Construct Tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

//class instances
const tree = new BinaryTree();
const manager = new TaskManager([
    [1, 10, 5],
    [2, 11, 10],
    [3, 12, 3]
]);

//Function calls
const result = tree.levelOrder(root, []);
const exeTask = manager.execTop();

console.log(`Binary Traversal Result: ${result}`);
console.log(`Task Manager result: ${exeTask}`);
