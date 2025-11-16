"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroFilledSubArrayStrategy = void 0;
/**
 * Number of Zero-Filled Subarrays (LeetCode 2348)
 *
 * Problem: Given an integer array nums, return the number of subarrays filled with 0.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Example:
 * Input: [1, 3, 0, 0, 2, 0, 0, 4]
 * Output: 6
 * Explanation:
 * There are 4 occurrences of [0] as a subarray.
 * There are 2 occurrences of [0,0] as a subarray.
 * There is no occurrence of a subarray with a size more than 2 filled with 0.
 * Therefore, we return 6.
 *
 * Input: [0, 0, 0, 2, 0, 0]
 * Output: 9
 * Explanation:
 * There are 5 occurrences of [0] as a subarray.
 * There are 3 occurrences of [0,0] as a subarray.
 * There is 1 occurrence of [0,0,0] as a subarray.
 * There is no occurrence of a subarray with a size more than 3 filled with 0.
 * Therefore, we return 9.
 *
 * @param params - Object containing nums array
 * @returns Total number of zero-filled subarrays
 */
class ZeroFilledSubArrayStrategy {
    function(params) {
        const { nums } = params;
        let count = 0;
        let streak = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                streak++;
                count += streak;
            }
            else {
                streak = 0;
            }
        }
        return count;
    }
}
exports.ZeroFilledSubArrayStrategy = ZeroFilledSubArrayStrategy;
