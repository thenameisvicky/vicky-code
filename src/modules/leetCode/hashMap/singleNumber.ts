import { LeetcodeStrategy } from "../../helpers";

export class SingleOccuringNumberStrategy
  implements LeetcodeStrategy<{ num: Array<number> }, number>
{
  function(params: { num: Array<number> }): number {
    const { num } = params;
    let result = 0;
    for (const n of num) {
      result ^= n;
    }
    return result;
  }
}
