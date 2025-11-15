import { LeetcodeStrategy } from "../../helpers";

export class TwoSumStrategy1
  implements
    LeetcodeStrategy<{ nums: Array<number>; target: number }, Array<number>>
{
  function(params: { nums: Array<number>; target: number }): Array<number> {
    const { nums, target } = params;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const completement = target && target - nums[i];
      if (map.has(completement)) {
        return [map.get(completement), i];
      }
      map.set(nums[i], i);
    }
    return [-1, -1];
  }
}
