import { LeetcodeStrategy } from "../../helpers";

export class CountElementsWithMaximumFrequencyStrategy
  implements LeetcodeStrategy<{ array: Array<number> }, number>
{
  function(params: { array: Array<number> }): number {
    const { array } = params;
    const map = new Map();
    let maxFreCount = 0;
    let maxFre = 0;

    for (const element of array) {
      if (map.has(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    }

    for (const [value] of map) {
      if (value === maxFre) {
        maxFreCount += value;
      } else if (value > maxFre) {
        maxFre = value;
        maxFreCount = maxFre;
      }
    }

    return maxFreCount;
  }
}
