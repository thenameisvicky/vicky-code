import { TreeNode } from ".";


//Construct Tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

//Traverse the Tree
export class BinaryTree {
    private root: TreeNode | null;

    constructor(root: TreeNode | null = null) {
        this.root = root;
    }

    preOrder(node: TreeNode | null = this.root, result: Array<number>): Array<number> | undefined {
        if (!node) return result;
        result.push(node.val);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }

    postOrder(node: TreeNode | null = this.root, result: Array<number>): Array<number> | undefined {
        if (!node) return result;
        this.postOrder(node.right, result);
        this.postOrder(node.left, result);
        result.push(node.val);
        return result;
    }

    inOrder(node: TreeNode | null = this.root, result: Array<number>): Array<number> | undefined {
        if (!node) return result;
        this.inOrder(node.left, result);
        result.push(node.val);
        this.inOrder(node.right, result);
        return result;
    }

    levelOrder(node: TreeNode | null = this.root, result: Array<number>): Array<number> | undefined {
        if (!node) return result;
        const queue: Array<TreeNode> = [];
        queue.push(node);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode ? currentNode.val : 0);
            if (currentNode?.left) queue.push(currentNode.left);
            if (currentNode?.right) queue.push(currentNode.right);
        }

        return result;
    }
}