"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchStrategy = void 0;
class BinarySearchStrategy {
    async contextFunction(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (target && nums[mid] == target) {
                return Promise.resolve(mid);
            }
            else if (target && nums[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
exports.BinarySearchStrategy = BinarySearchStrategy;
