import { LeetcodeStrategy } from "../../helpers";

export class LongestSubStrWithNoRepeatCharStrategy
  implements LeetcodeStrategy<{ s: string }, number>
{
  function(params: { s: string }): number {
    const { s } = params;
    let left = 0;
    const map = new Map();
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      while (map.has(s[i])) {
        map.delete(s[left]);
        left++;
      }
      map.set(s[i], i);
      max = Math.max(i - left + 1, max);
    }
    return max;
  }
}
