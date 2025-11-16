import { LeetcodeStrategy } from "../../helpers";

export class RotatedArraySearchStrategy
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
      }

      if (nums[left] < nums[mid]) {
        if (nums[left] <= target && target <= nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (nums[mid] <= target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    return -1;
  }
}
