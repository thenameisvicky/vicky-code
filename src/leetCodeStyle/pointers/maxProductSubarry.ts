import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { maxProductSubarrayParams } from "../ProblemSolvingStrategies/type";

export class MaximumProductSubArrayStrategy implements BaseSingleArrayExecutionStrategy<'maxProductSubarray'> {
    contextFunction(params: maxProductSubarrayParams): any {
        const { nums } = params;
        let maxProduct = nums[0];
        let minProduct = nums[0];
        let result = nums[0];

        for (let i = 1; i < nums.length; i++) {

            if (nums[i] < 0) {
                [maxProduct, minProduct] = [minProduct, maxProduct]
            }

            maxProduct = Math.max(nums[i], maxProduct * nums[i]);
            minProduct = Math.min(nums[i], minProduct * nums[i]);

            result = Math.max(maxProduct, result);
        }

        return result;

    }
}