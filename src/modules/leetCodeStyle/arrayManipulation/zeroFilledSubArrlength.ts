import { BaseSingleArrayExecutionStrategy } from '../../../Executors/types/arrays'
import { zeroFilledSubArrParams } from '../types'

export class ZeroFilledSubArrayStrategy implements BaseSingleArrayExecutionStrategy<'zeroFilledSubArray'> {
  contextFunction (params: zeroFilledSubArrParams): any {
    const { nums } = params
    let count = 0; let streak = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        streak++
        count += streak
      } else {
        streak = 0
      }
    }
    return count
  }
}
