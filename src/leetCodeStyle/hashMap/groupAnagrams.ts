import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { groupAnagramsParams } from "../types";

export class GroupAnagramsStrategy implements BaseSingleArrayExecutionStrategy<'groupAnagrams'> {
    contextFunction(params: groupAnagramsParams): any {
        const { strings } = params;
        const map = new Map();
        for (let i = 0; i < strings.length; i++) {
            const generalized = strings[i].split('').sort().join('');
            if(!map.has(generalized)){
                map.set(generalized,[]);
            }
            map.get(generalized).push(strings[i]);
         }
         return Array.from(map.values());
    }
}