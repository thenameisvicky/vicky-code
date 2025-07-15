import { BaseSingleArrayExecutionStrategy } from "../Executors/types/singleArray";

export class TwoSumStrategy1 implements BaseSingleArrayExecutionStrategy {
  async contextFunction(nums: Array<number>, target?: number): Promise<Array<number>> {
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
