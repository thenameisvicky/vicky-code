import { BaseSingleArrayExecutionStrategy } from "../Executors/types/arrays";
import { singleNumberParams } from "./type";

export class SingleOccuringNumberStrategy implements BaseSingleArrayExecutionStrategy<'singleOccuringNumber'> {
    async contextFunction(params: singleNumberParams): Promise<any> {
        const { num } = params;
        let result = 0;
        for (let n of num) {
            result ^= n;
        }
        return result;
    }
} 