import { LeetcodeStrategy } from "../../helpers";

export class BinarySearchStrategy
  implements LeetcodeStrategy<{ nums: Array<number>; target: number }, number>
{
  function(params: { nums: Array<number>; target: number }): number {
    const { nums, target } = params;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}
