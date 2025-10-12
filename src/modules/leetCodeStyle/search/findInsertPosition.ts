import { BaseSingleArrayExecutionStrategy } from '../../../Executors/types/arrays'
import { findInsertPositionParams } from '../types'

export class FindInsertPositionStrategy implements BaseSingleArrayExecutionStrategy<'findInsertPosition'> {
  contextFunction (params: findInsertPositionParams): any {
    const { nums, target } = params
    let left = 0; let right = nums.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] < target) {
        left++
      } else {
        right--
      }
    }
    return left
  }
}
