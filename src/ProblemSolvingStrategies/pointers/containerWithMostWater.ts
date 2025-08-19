import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { containerWithMostWaterParams } from "../type";

export class ContainerWithMostWaterStrategy implements BaseSingleArrayExecutionStrategy<'containerWithMostWater'> {
    contextFunction(params: containerWithMostWaterParams): any {
        const { nums } = params;
        let left = 0;
        let right = nums.length - 1;
        let maxArea = -Infinity;
        while (left < right) {
            let distance = right - left;
            let area = Math.floor(Math.min(nums[left], nums[right]) * distance);
            maxArea = Math.max(area, maxArea);
            if (nums[right] > nums[left]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}