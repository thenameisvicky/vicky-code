import { LeetcodeStrategy } from "../../helpers";

/**
 * Next Permutation (LeetCode 31)
 *
 * Problem: A permutation of an array of integers is an arrangement of its members into a sequence or
 * linear order. The next permutation of an array of integers is the next lexicographically greater
 * permutation of its integer.
 *
 * For example, the next permutation of arr = [1,2,3] is [1,3,2].
 * Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
 *
 * The algorithm must be in-place and use only constant extra memory.
 *
 * Example:
 * Input: [1, 2, 3]
 * Output: [1, 3, 2]
 *
 * Input: [3, 2, 1]
 * Output: [1, 2, 3]
 * Explanation: This is the last permutation, so we return the first permutation.
 *
 * Input: [1, 1, 5]
 * Output: [1, 5, 1]
 *
 * @param params - Object containing nums array (modified in-place)
 * @returns Next lexicographical permutation of the array
 */
export class NextPermutationStrategy
  implements LeetcodeStrategy<{ nums: Array<number> }, Array<number>>
{
  function(params: { nums: Array<number> }): Array<number> {
    const { nums } = params;
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
    if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
        j--;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
    return nums;
  }
}
