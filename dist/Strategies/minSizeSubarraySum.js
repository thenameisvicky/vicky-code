"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimumSizeSubarraySum = void 0;
class MinimumSizeSubarraySum {
    async contextFunction(nums, target) {
        let left = 0, min = Infinity, sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (target && sum >= target) {
                min = Math.min(min, i - left + 1);
                sum -= nums[left];
                left++;
            }
        }
        return min === Infinity ? 0 : min;
    }
}
exports.MinimumSizeSubarraySum = MinimumSizeSubarraySum;
