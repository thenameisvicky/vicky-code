import { BaseSingleArrayExecutionStrategy } from "../Executors/types/singleArray";

export class BinarySearchStrategy implements BaseSingleArrayExecutionStrategy {
  async function(nums: Array<number>, target?: number): Promise<any> {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target && nums[mid] == target) {
        return Promise.resolve(mid);
      } else if (target && nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}
