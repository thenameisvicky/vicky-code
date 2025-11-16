import { LeetcodeStrategy } from "../../helpers";

/**
 * Three Consecutive Odds (LeetCode 1550)
 *
 * Problem: Given an integer array, return true if there are three consecutive odd numbers in the array.
 * Otherwise, return false.
 *
 * Example:
 * Input: [2, 6, 4, 1]
 * Output: false
 *
 * Input: [1, 2, 34, 3, 4, 5, 7, 23, 12]
 * Output: true
 * Explanation: [5, 7, 23] are three consecutive odds.
 *
 * @param params - Object containing array of integers
 * @returns true if there are three consecutive odd numbers, false otherwise
 */
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
