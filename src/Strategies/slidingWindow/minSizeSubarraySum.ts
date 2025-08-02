import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { minSizeSubarraySumParams } from "../type";

export class MinimumSizeSubarraySumStrategy implements BaseSingleArrayExecutionStrategy<'minSizeSubarrSum'> {
    contextFunction(params: minSizeSubarraySumParams): any {
        const { nums, target } = params;
        let left = 0, min = Infinity, sum = 0;
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