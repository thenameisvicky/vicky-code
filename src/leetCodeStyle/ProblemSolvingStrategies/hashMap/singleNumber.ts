import { BaseSingleArrayExecutionStrategy } from "../../../Executors/types/arrays";
import { singleNumberParams } from "../type";

export class SingleOccuringNumberStrategy implements BaseSingleArrayExecutionStrategy<'singleOccuringNumber'> {
    contextFunction(params: singleNumberParams): any {
        const { num } = params;
        let result = 0;
        for (let n of num) {
            result ^= n;
        }
        return result;
    }
} 