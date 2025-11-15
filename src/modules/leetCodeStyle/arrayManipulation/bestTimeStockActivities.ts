import { LeetcodeStrategy } from "../../helpers";

export class BestTimeToBuyAndSellStockStrategy
  implements LeetcodeStrategy<{ array: Array<number> }, number>
{
  function(params: { array: Array<number> }): number {
    const { array } = params;
    let min = Infinity;
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      min = Math.min(array[i], min);
      if (min < array[i]) {
        const profit = array[i] - min;
        max = Math.max(profit, max);
      }
    }
    return max;
  }
}
