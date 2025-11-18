import { LeetcodeStrategy } from "../../helpers";

/**
 * 1513. Number of Substrings With Only 1s
 *
 * Given a binary string s, return the number of substrings with all characters 1's. Since the answer may be too large, return it modulo 10^9 + 7.
 *
 * Example 1:
 * Input: s = "0110111"
 * Output: 9
 *
 * Explanation: There are 9 substring in total with only 1's characters.
 * "1" -> 5 times.
 * "11" -> 3 times.
 * "111" -> 1 time.
 *
 * Constrains:
 * 1 <= s.length <= 105
 * s[i] is either '0' or '1'.
 *
 * @param params - object with strings array
 * @returns Number of substrings with Only 1s
 */
export class NumberOfSubstringsWithOnly1s
  implements LeetcodeStrategy<{ s: string }, number>
{
  function(params: { s: string }): number {
    const { s } = params;
    let left = 0;
    let result = 0;
    const MOD = 1000000007;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") {
        left++;
        result = (result + left) % MOD;
      } else {
        left = 0;
      }
    }
    return result;
  }
}
