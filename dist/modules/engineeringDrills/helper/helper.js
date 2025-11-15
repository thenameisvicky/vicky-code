"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoot = getRoot;
const tree_helper_1 = require("./tree.helper");
function getRoot(array) {
    if (!array.length || array[0] == null)
        return null;
    const root = new tree_helper_1.TreeNode(array[0]);
    const queue = [root];
    let i = 1;
    while (i < queue.length) {
        const current = queue.shift();
        if (!current)
            continue;
        const left = array[i++];
        const right = array[i++];
        if (left && right) {
            current.left = new tree_helper_1.TreeNode(left);
            current.right = new tree_helper_1.TreeNode(right);
            queue.push(current.left);
            queue.push(current.right);
        }
    }
    return root;
}
