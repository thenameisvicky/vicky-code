import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { twoSumParams } from "../types";

export class TwoSumStrategy2 implements BaseSingleArrayExecutionStrategy<'twoSum'> {
  contextFunction(params: twoSumParams): Promise<Array<number>> {
    const { nums, target } = params;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let sum = nums[left] + nums[right];
      if (sum == target) {
        return Promise.resolve([left, right]);
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return Promise.resolve([-1, -1]);
  }
}
