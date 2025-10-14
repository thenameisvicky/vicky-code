import { BaseSingleArrayExecutionStrategy } from "../../../Executors/types/arrays";
import { singleNumberParams } from "../types";

export class SingleOccuringNumberStrategy
  implements BaseSingleArrayExecutionStrategy<"singleOccuringNumber">
{
  contextFunction(params: singleNumberParams): any {
    const { num } = params;
    let result = 0;
    for (const n of num) {
      result ^= n;
    }
    return result;
  }
}
