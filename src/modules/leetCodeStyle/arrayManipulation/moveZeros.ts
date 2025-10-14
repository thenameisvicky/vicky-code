import { BaseSingleArrayExecutionStrategy } from "../../../Executors/types/arrays";
import { moveZerosParams } from "../types";

export class MoveZeroStrategy
  implements BaseSingleArrayExecutionStrategy<"moveZeros">
{
  contextFunction(params: moveZerosParams): any {
    const { nums } = params;
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
