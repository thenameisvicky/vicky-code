"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindInsertPositionStrategy = void 0;
class FindInsertPositionStrategy {
    function(params) {
        const { nums, target } = params;
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            else if (nums[mid] < target) {
                left++;
            }
            else {
                right--;
            }
        }
        return left;
    }
}
exports.FindInsertPositionStrategy = FindInsertPositionStrategy;
