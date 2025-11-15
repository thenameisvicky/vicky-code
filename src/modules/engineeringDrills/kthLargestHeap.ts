import { Heap } from "./helper/tree.helper";

export function kthLargestElement(nums: Array<number>, k: number): number {
  const minHeap = new Heap<number>((a, b) => a - b);

  for (const num of nums) {
    if (minHeap.data.length < k) {
      minHeap.insert(num);
    } else if (num > minHeap.peek()) {
      minHeap.poll();
      minHeap.insert(num);
    }
  }

  return minHeap.peek();
}
