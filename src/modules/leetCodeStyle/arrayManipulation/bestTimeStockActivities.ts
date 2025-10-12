import { BaseSingleArrayExecutionStrategy } from '../../../Executors/types/arrays'
import { bestTimeToBuyAndSellStockParams } from '../types'

export class BestTimeToBuyAndSellStockStrategy implements BaseSingleArrayExecutionStrategy<'bestTimeToSell'> {
  contextFunction (params: bestTimeToBuyAndSellStockParams): any {
    const { array } = params
    let min = Infinity
    let max = 0
    for (let i = 0; i < array.length; i++) {
      min = Math.min(array[i], min)
      if (min < array[i]) {
        const profit = array[i] - min
        max = Math.max(profit, max)
      }
    }
    return max
  }
}
