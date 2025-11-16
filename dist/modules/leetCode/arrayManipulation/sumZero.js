"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumsUpToZeroStrategy = void 0;
/**
 * Find N Unique Integers Sum up to Zero (LeetCode 1304)
 *
 * Problem: Given an integer n, return any array containing n unique integers such that they add up to 0.
 *
 * Example:
 * Input: 5
 * Output: [-7, -1, 1, 3, 4] or [-5, -1, 1, 2, 3] or [-3, -1, 2, -2, 4]
 *
 * Input: 3
 * Output: [-1, 0, 1]
 *
 * Input: 1
 * Output: [0]
 *
 * @param params - Object containing length (n) of the desired array
 * @returns Array of n unique integers that sum to zero
 */
class SumsUpToZeroStrategy {
    function(params) {
        const { length } = params;
        if (length === 1)
            return [0];
        const array = [];
        if (length % 2 === 0) {
            for (let i = 1; i < length; i++) {
                array.push(i * -1);
                array.push(i);
            }
        }
        else {
            for (let i = 1; i < length; i++) {
                array.push(i * -1);
                array.push(i);
            }
            array.splice(length - 2, 0, 0);
        }
        return array.slice(0, length);
    }
}
exports.SumsUpToZeroStrategy = SumsUpToZeroStrategy;
