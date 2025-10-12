import { BaseSingleArrayExecutionStrategy } from '../../../Executors/types/arrays'
import { countElementsWithMaximumFrequencyParams } from '../types'

export class CountElementsWithMaximumFrequencyStrategy implements BaseSingleArrayExecutionStrategy<'countElemWithMostFrequency'> {
  contextFunction (params: countElementsWithMaximumFrequencyParams) {
    const { array } = params
    const map = new Map()
    let maxFreCount = 0; let maxFre = 0

    for (const element of array) {
      if (map.has(element)) {
        map.set(element, map.get(element) + 1)
      } else {
        map.set(element, 1)
      }
    }

    for (const [value] of map) {
      if (value === maxFre) {
        maxFreCount += value
      } else if (value > maxFre) {
        maxFre = value
        maxFreCount = maxFre
      }
    }

    return maxFreCount
  }
}
