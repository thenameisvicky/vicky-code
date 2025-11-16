import { LeetcodeStrategy } from "../../helpers";

export class TwoSumStrategy2
  implements
    LeetcodeStrategy<{ nums: Array<number>; target: number }, Array<number>>
{
  function(params: { nums: Array<number>; target: number }): Array<number> {
    const { nums, target } = params;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [-1, -1];
  }
}
