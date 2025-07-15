import { BaseSingleArrayExecutionStrategy } from "../Executors/types/singleArray";

export class MinimumSizeSubarraySum implements BaseSingleArrayExecutionStrategy {
    async contextFunction(nums: Array<number>, target?: number): Promise<any> {
        let left = 0, min = Infinity, sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            while (target && sum >= target) {
                min = Math.min(min, i - left + 1);
                sum -= nums[left];
                left++;
            }
        }
        return min === Infinity ? 0 : min;
    }
}