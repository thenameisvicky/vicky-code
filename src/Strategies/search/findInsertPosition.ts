import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { findInsertPositionParams } from "../type";

export class FindInsertPositionStrategy implements BaseSingleArrayExecutionStrategy<'findInsertPosition'> {
    contextFunction(params: findInsertPositionParams): any {
        const { nums, target } = params;
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left++;
            } else {
                right--;
            }
        }
        return left;
    }
}