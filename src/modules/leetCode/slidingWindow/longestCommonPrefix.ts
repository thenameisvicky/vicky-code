import { LeetcodeStrategy } from "../../helpers";
export class LongestCommonPrefixStrategy
  implements LeetcodeStrategy<{ array: Array<string> }, string>
{
  function(params: { array: Array<string> }): string {
    const { array } = params;
    if (!array.length) return "";
    const sortedLen = array.sort((a, b) => b.length - a.length);
    let currentWin = sortedLen[0];
    for (let i = 1; i < sortedLen.length; i++) {
      while (!sortedLen[i].startsWith(currentWin)) {
        currentWin = currentWin.slice(0, -1);
        if (currentWin === "") return "";
      }
    }
    return currentWin;
  }
}
