import { LeetcodeStrategy } from "../../helpers";

/**
 * Maximum Subarray (LeetCode 53) - Kadane's Algorithm
 *
 * Problem: Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 *
 * Example:
 * Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 6
 * Explanation: [4, -1, 2, 1] has the largest sum = 6.
 *
 * Input: [1]
 * Output: 1
 *
 * Input: [5, 4, -1, 7, 8]
 * Output: 23
 *
 * @param params - Object containing nums array
 * @returns Maximum sum of contiguous subarray
 */
export class MaximumSumSubArrayStrategy
  implements LeetcodeStrategy<{ nums: Array<number> }, number>
{
  function(params: { nums: Array<number> }): number {
    const { nums } = params;

    if (nums.length === 0) {
      return 0;
    }

    if (nums.length === 1) {
      return nums[0];
    }

    let currentSum = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];
      maxSum = Math.max(maxSum, currentSum);
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    return maxSum;
  }
}
