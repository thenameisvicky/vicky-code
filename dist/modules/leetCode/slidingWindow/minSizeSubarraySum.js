"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimumSizeSubarraySumStrategy = void 0;
class MinimumSizeSubarraySumStrategy {
    function(params) {
        const { nums, target } = params;
        let left = 0;
        let min = Infinity;
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            while (sum >= target) {
                min = Math.min(min, i - left + 1);
                sum -= nums[left];
                left++;
            }
        }
        return min === Infinity ? 0 : min;
    }
}
exports.MinimumSizeSubarraySumStrategy = MinimumSizeSubarraySumStrategy;
