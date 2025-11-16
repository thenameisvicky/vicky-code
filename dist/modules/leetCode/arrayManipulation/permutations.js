"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermutationsStrategy = void 0;
/**
 * Permutations (LeetCode 46)
 *
 * Problem: Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * A permutation is an arrangement of all the elements of a set in a specific order.
 *
 * Example:
 * Input: [1, 2, 3]
 * Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 *
 * Input: [0, 1]
 * Output: [[0,1], [1,0]]
 *
 * Input: [1]
 * Output: [[1]]
 *
 * @param params - Object containing nums array of distinct integers
 * @returns Array of all possible permutations
 */
class PermutationsStrategy {
    function(params) {
        const { nums } = params;
        const resultArr = [];
        function getCount() {
            let count = 1;
            for (let i = 2; i <= nums.length; i++) {
                count *= i;
            }
            return count;
        }
        function permutate() {
            let i = nums.length - 2;
            while (i >= 0 && nums[i] >= nums[i + 1]) {
                i--;
            }
            if (i >= 0) {
                let j = nums.length - 1;
                while (nums[i] >= nums[j]) {
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
        const length = getCount();
        for (let i = 0; i <= length; i++) {
            resultArr.push([...nums]);
            permutate();
        }
        return resultArr;
    }
}
exports.PermutationsStrategy = PermutationsStrategy;
