import { LeetcodeStrategy } from "../../helpers";

/**
 * Move Zeroes (LeetCode 283)
 *
 * Problem: Given an integer array nums, move all 0's to the end of it while maintaining the relative
 * order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example:
 * Input: [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 *
 * Input: [0]
 * Output: [0]
 *
 * @param params - Object containing nums array (modified in-place)
 * @returns Array with zeros moved to the end
 */
export class MoveZeroStrategy
  implements LeetcodeStrategy<{ nums: Array<number> }, Array<number>>
{
  function(params: { nums: Array<number> }): Array<number> {
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
