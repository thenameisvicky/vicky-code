"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kthLargestElement = kthLargestElement;
const helpers_1 = require("../helpers");
function kthLargestElement(nums, k) {
    const minHeap = new helpers_1.Heap((a, b) => a - b);
    for (const num of nums) {
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
