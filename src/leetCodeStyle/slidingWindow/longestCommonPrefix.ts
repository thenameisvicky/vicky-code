import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { longestCommonPrefixParams } from "../types";

export class LongestCommonPrefixStrategy implements BaseSingleArrayExecutionStrategy<'longestCommonPrefix'> {
    contextFunction(params: longestCommonPrefixParams): any {
        const { array } = params;
        if (!array.length) return "";
        const sortedLen = array.sort((a, b) => b.length - a.length);
        let currentWin = sortedLen[0];
        for (let i = 1; i < sortedLen.length; i++) {
            while (!sortedLen[i].startsWith(currentWin)) {
                currentWin = currentWin.slice(0, -1);
                if (currentWin == "") return "";
            }
        }
        return currentWin;
    }
}