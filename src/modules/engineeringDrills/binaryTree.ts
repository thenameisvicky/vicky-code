import { TreeNode } from "./helper/tree.helper";
export class BinaryTree {
  private root: TreeNode<number> | null;

  constructor(root: TreeNode<number> | null = null) {
    this.root = root;
  }

  preOrder(
    node: TreeNode<number> | null = this.root,
    result: Array<number>
  ): Array<number> | undefined {
    if (!node) return result;
    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  postOrder(
    node: TreeNode<number> | null = this.root,
    result: Array<number>
  ): Array<number> | undefined {
    if (!node) return result;
    this.postOrder(node.right, result);
    this.postOrder(node.left, result);
    result.push(node.value);
    return result;
  }

  inOrder(
    node: TreeNode<number> | null = this.root,
    result: Array<number>
  ): Array<number> | undefined {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }

  levelOrder(
    node: TreeNode<number> | null = this.root,
    result: Array<number>
  ): Array<number> | undefined {
    if (!node) return result;
    const queue: Array<TreeNode<number>> = [];
    queue.push(node);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode ? currentNode.value : 0);
      if (currentNode?.left) queue.push(currentNode.left);
      if (currentNode?.right) queue.push(currentNode.right);
    }

    return result;
  }
}
