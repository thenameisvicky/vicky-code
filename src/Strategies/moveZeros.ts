import { BaseSingleArrayExecutionStrategy } from "../Executors/types/singleArray";

export class MoveZeroStrategy implements BaseSingleArrayExecutionStrategy {
  async contextFunction(nums: Array<number>): Promise<any> {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[k] = nums[i];
        k++;
      }
    }
    for (let i = k; i < nums.length; i++) {
      nums[i] = 0;
    }
    return nums;
  }
}
