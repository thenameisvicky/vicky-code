import { BaseSingleArrayExecutionStrategy } from "../../../Executors/types/arrays";
import { consecutiveOddsParams } from "../types";

export class ConsecutiveOddsStrategy implements BaseSingleArrayExecutionStrategy<'consecutiveOdds'> {
    contextFunction(params: consecutiveOddsParams): any {
        const { array } = params;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0 && array[i + 1] % 2 !== 0 && array[i + 2] % 2 !== 0) {
                return true;
            }
        }
    }
}