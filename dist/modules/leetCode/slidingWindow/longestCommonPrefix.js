"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongestCommonPrefixStrategy = void 0;
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
