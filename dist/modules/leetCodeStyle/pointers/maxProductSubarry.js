"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaximumProductSubArrayStrategy = void 0;
class MaximumProductSubArrayStrategy {
    function(params) {
        const { nums } = params;
        let maxProduct = nums[0];
        let minProduct = nums[0];
        let result = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < 0) {
                [maxProduct, minProduct] = [minProduct, maxProduct];
            }
            maxProduct = Math.max(nums[i], maxProduct * nums[i]);
            minProduct = Math.min(nums[i], minProduct * nums[i]);
            result = Math.max(maxProduct, result);
        }
        return result;
    }
}
exports.MaximumProductSubArrayStrategy = MaximumProductSubArrayStrategy;
