import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { twoSumParams } from "../type";

export class TwoSumStrategy1 implements BaseSingleArrayExecutionStrategy<'twoSum'> {
  async contextFunction(params: twoSumParams): Promise<Array<number>> {
    const { nums, target } = params;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const completement = target && target - nums[i];
      if (map.has(completement)) {
        return Promise.resolve([map.get(completement), i]);
      }
      map.set(nums[i], i);
    }
    return Promise.resolve([-1, -1]);
  }
}
