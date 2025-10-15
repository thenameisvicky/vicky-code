import { Heap } from "./helperClasses";

export function kthLargestElement(nums: Array<number>, k: number): number {
    const minHeap = new Heap<number>((a, b) => a - b);

    for (let num of nums) {
        if (minHeap.data.length < k) {
            minHeap.insert(num);
        } else if (num > minHeap.peek()) {
            minHeap.poll();
            minHeap.insert(num);
        }
    }

    return minHeap.peek();
}