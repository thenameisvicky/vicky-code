import { BinaryTree } from './binaryTree'
import { TreeNode } from './helperClasses'
import { TaskManager } from './taskManager'

// Construct Tree
const root = new TreeNode<number>(1)
root.left = new TreeNode<number>(2)
root.right = new TreeNode<number>(3)
root.left.left = new TreeNode<number>(4)
root.left.right = new TreeNode<number>(5)
root.right.right = new TreeNode<number>(6)

// class instances
const tree = new BinaryTree()
const manager = new TaskManager([
  [1, 10, 5],
  [2, 11, 10],
  [3, 12, 3],
  [0, 21, 10]
])

// Function calls
const result = tree.levelOrder(root, [])
const exeTask = manager.execTop()

console.log(`Binary Traversal Result: ${result}`)
console.log(`Task Manager result: ${exeTask}`)
