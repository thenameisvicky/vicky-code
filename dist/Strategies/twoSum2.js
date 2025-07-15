"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoSumStrategy2 = void 0;
class TwoSumStrategy2 {
    async contextFunction(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let sum = nums[left] + nums[right];
            if (target && sum == target) {
                return Promise.resolve([left, right]);
            }
            else if (target && sum < target) {
                left++;
            }
            else {
                right--;
            }
        }
        return Promise.resolve([-1, -1]);
    }
}
exports.TwoSumStrategy2 = TwoSumStrategy2;
