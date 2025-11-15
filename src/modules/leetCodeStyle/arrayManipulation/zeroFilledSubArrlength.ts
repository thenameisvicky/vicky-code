import { LeetcodeStrategy } from "../../helpers";

export class ZeroFilledSubArrayStrategy
  implements LeetcodeStrategy<{ nums: Array<number> }, number>
{
  function(params: { nums: Array<number> }): number {
    const { nums } = params;
    let count = 0;
    let streak = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        streak++;
        count += streak;
      } else {
        streak = 0;
      }
    }
    return count;
  }
}
