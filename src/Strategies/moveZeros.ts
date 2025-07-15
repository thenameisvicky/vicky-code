import { BaseSingleArrayExecutionStrategy } from "../Executors/types/singleArray";

export class MoveZeroStrategy implements BaseSingleArrayExecutionStrategy {
  async function(nums: Array<number>): Promise<void> {
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
    console.log(`Array after Moved Zeros: ${nums}`);
  }
}
