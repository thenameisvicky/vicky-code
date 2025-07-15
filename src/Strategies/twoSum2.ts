import { BaseSingleArrayExecutionStrategy } from "../Executors/types/singleArray";

export class TwoSumStrategy2 implements BaseSingleArrayExecutionStrategy {
  async function(nums: Array<number>, target?: number): Promise<Array<number>> {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let sum = nums[left] + nums[right];
      if (target && sum == target) {
        return Promise.resolve([left, right]);
      } else if (target && sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return Promise.resolve([-1, -1]);
  }
}
