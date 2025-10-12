import { BaseSingleArrayExecutionStrategy } from '../../../Executors/types/arrays'
import { longSubStringNoDupParams } from '../types'

export class LongestSubStrWithNoRepeatCharStrategy implements BaseSingleArrayExecutionStrategy<'longestSubStringNoDup'> {
  contextFunction (params: longSubStringNoDupParams): any {
    const { s } = params
    let left = 0; const map = new Map(); let max = 0
    for (let i = 0; i < s.length; i++) {
      while (map.has(s[i])) {
        map.delete(s[left])
        left++
      }
      map.set(s[i], i)
      max = Math.max(i - left + 1, max)
    }
    return max
  }
}
