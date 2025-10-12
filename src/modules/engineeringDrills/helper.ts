import { TreeNode } from './helperClasses'

export function getRoot<T> (array: Array<T>): TreeNode<T> | null {
  if (!array.length || array[0] == null) return null

  const root = new TreeNode<T>(array[0])
  const queue = [root]
  let i = 1

  while (i < queue.length) {
    const current = queue.shift()
    if (!current) continue
    const left = array[i++]; const right = array[i++]
    if (left && right) {
      current.left = new TreeNode(left)
      current.right = new TreeNode(right)
      queue.push(current.left)
      queue.push(current.right)
    }
  }

  return root
}
