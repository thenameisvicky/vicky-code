import { BaseSingleArrayExecutionStrategy } from "../Executors/types/arrays";
import { longSubStringNoDupParams } from "./type";

export class LongestSubStrWithNoRepeatCharStrategy implements BaseSingleArrayExecutionStrategy<'longestSubStringNoDup'> {
    async contextFunction(params: longSubStringNoDupParams): Promise<any> {
        const { s } = params;
        let left = 0, map = new Map(), max = 0;
        for (let i = 0; i < s.length; i++) {
            while (map.has(s[i])) {
                map.delete(s[left]);
                left++
            }
            map.set(s[i], i);
            max = Math.max(i - left + 1, max);
        }
        return max;
    }
}