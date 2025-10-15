"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kthLargestElement = kthLargestElement;
const helperClasses_1 = require("./helperClasses");
function kthLargestElement(nums, k) {
    const minHeap = new helperClasses_1.Heap((a, b) => a - b);
    for (let num of nums) {
        if (minHeap.data.length < k) {
            minHeap.insert(num);
        }
        else if (num > minHeap.peek()) {
            minHeap.poll();
            minHeap.insert(num);
        }
    }
    return minHeap.peek();
}
