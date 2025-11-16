"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongestCommonPrefixStrategy = void 0;
/**
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * constrains:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters if it is non-empty.
 *
 * @param params - Array of strings
 * @returns One string with longest common prefix
 */
class LongestCommonPrefixStrategy {
    function(params) {
        const { array } = params;
        if (!array.length)
            return "";
        const sortedLen = array.sort((a, b) => b.length - a.length);
        let currentWin = sortedLen[0];
        for (let i = 1; i < sortedLen.length; i++) {
            while (!sortedLen[i].startsWith(currentWin)) {
                currentWin = currentWin.slice(0, -1);
                if (currentWin === "")
                    return "";
            }
        }
        return currentWin;
    }
}
exports.LongestCommonPrefixStrategy = LongestCommonPrefixStrategy;
