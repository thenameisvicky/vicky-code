"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongestSubStrWithNoRepeatCharStrategy = void 0;
class LongestSubStrWithNoRepeatCharStrategy {
    contextFunction(params) {
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
exports.LongestSubStrWithNoRepeatCharStrategy = LongestSubStrWithNoRepeatCharStrategy;
