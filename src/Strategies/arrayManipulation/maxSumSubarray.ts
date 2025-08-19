import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { maxSumSubarrayParams } from "../type";

export class MaximumSumSubArrayStrategy implements BaseSingleArrayExecutionStrategy<'maxSumSubarray'> {
    contextFunction(params: maxSumSubarrayParams): any {
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