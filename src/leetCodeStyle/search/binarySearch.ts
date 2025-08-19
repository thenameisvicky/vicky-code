import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import type { binarySearchParams } from "../ProblemSolvingStrategies/type";

export class BinarySearchStrategy implements BaseSingleArrayExecutionStrategy<'binarySearch'> {
  contextFunction(params: binarySearchParams): any {
    const { nums, target } = params;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return Promise.resolve(mid);
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}
