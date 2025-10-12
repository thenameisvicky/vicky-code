"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerWithMostWaterStrategy = void 0;
class ContainerWithMostWaterStrategy {
    contextFunction(params) {
        const { nums } = params;
        let left = 0;
        let right = nums.length - 1;
        let maxArea = -Infinity;
        while (left < right) {
            const distance = right - left;
            const area = Math.floor(Math.min(nums[left], nums[right]) * distance);
            maxArea = Math.max(area, maxArea);
            if (nums[right] > nums[left]) {
                left++;
            }
            else {
                right--;
            }
        }
        return maxArea;
    }
}
exports.ContainerWithMostWaterStrategy = ContainerWithMostWaterStrategy;
