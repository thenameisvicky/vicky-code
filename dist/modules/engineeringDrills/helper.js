"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoot = getRoot;
const helperClasses_1 = require("./helperClasses");
function getRoot(array) {
    if (!array.length || array[0] == null)
        return null;
    const root = new helperClasses_1.TreeNode(array[0]);
    const queue = [root];
    let i = 1;
    while (i < queue.length) {
        const current = queue.shift();
        if (!current)
            continue;
        const left = array[i++], right = array[i++];
        if (left && right) {
            current.left = new helperClasses_1.TreeNode(left);
            current.right = new helperClasses_1.TreeNode(right);
            queue.push(current.left);
            queue.push(current.right);
        }
    }
    return root;
}
