import { LeetcodeStrategy } from "../../helpers";

export class ConsecutiveOddsStrategy
  implements LeetcodeStrategy<{ array: Array<number> }, boolean>
{
  function(params: { array: Array<number> }): boolean {
    const { array } = params;
    for (let i = 0; i < array.length; i++) {
      if (
        array[i] % 2 !== 0 &&
        array[i + 1] % 2 !== 0 &&
        array[i + 2] % 2 !== 0
      ) {
        return true;
      }
    }
    return false;
  }
}
