import { LeetcodeStrategy } from "../../helpers";

export class ThreeSumClosestStrategy
  implements LeetcodeStrategy<{ nums: Array<number>; target: number }, number>
{
  function(params: { nums: Array<number>; target: number }): number {
    const { nums, target } = params;
    nums.sort((a: number, b: number) => a - b);
    let closest = -Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum - target) < Math.abs(closest - target)) {
          closest = sum;
        }
        if (sum < target) {
          j++;
        } else if (sum > target) {
          k--;
        } else {
          return sum;
        }
      }
    }
    return closest;
  }
}
