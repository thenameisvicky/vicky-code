"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaximumSumSubArrayStrategy = void 0;
class MaximumSumSubArrayStrategy {
    function(params) {
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
exports.MaximumSumSubArrayStrategy = MaximumSumSubArrayStrategy;
