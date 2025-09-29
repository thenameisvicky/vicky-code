"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
const _1 = require(".");
//Construct Tree
const root = new _1.TreeNode(1);
root.left = new _1.TreeNode(2);
root.right = new _1.TreeNode(3);
root.left.left = new _1.TreeNode(4);
root.left.right = new _1.TreeNode(5);
root.right.right = new _1.TreeNode(6);
//Traverse the Tree
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    preOrder(node = this.root, result) {
        if (!node)
            return result;
        result.push(node.val);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }
    postOrder(node = this.root, result) {
        if (!node)
            return result;
        this.postOrder(node.right, result);
        this.postOrder(node.left, result);
        result.push(node.val);
        return result;
    }
    inOrder(node = this.root, result) {
        if (!node)
            return result;
        this.inOrder(node.left, result);
        result.push(node.val);
        this.inOrder(node.right, result);
        return result;
    }
    levelOrder(node = this.root, result) {
        if (!node)
            return result;
        const queue = [];
        queue.push(node);
        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode ? currentNode.val : 0);
            if (currentNode?.left)
                queue.push(currentNode.left);
            if (currentNode?.right)
                queue.push(currentNode.right);
        }
        return result;
    }
}
exports.BinaryTree = BinaryTree;
