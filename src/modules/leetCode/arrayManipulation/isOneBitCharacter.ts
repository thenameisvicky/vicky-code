import { LeetcodeStrategy } from "../../helpers";

/**
 * 717. 1-bit and 2-bit Characters
 *
 * We have two special characters:
 * The first character can be represented by one bit 0.
 * The second character can be represented by two bits (10 or 11).
 * Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.
 *
 * Example 1:
 * Input: bits = [1,0,0]
 * Output: true
 * Explanation: The only way to decode it is two-bit character and one-bit character.
 * So the last character is one-bit character.
 *
 * Constrains:
 * 1 <= bits.length <= 1000.
 * bits[i] is either 0 or 1.
 *
 * @param params - array of numbers
 * @returns - boolean
 */
export class IsOneBitCharacterStrategy
  implements LeetcodeStrategy<{ array: Array<number> }, boolean>
{
  function(params: { array: Array<number> }): boolean {
    const { array } = params;
    let i;
    for (i = 0; i < array.length - 1; ) {
      if (array[i] === 1) {
        i += 2;
      } else {
        i += 1;
      }
    }

    return i === array.length - 1;
  }
}
