import {
  BaseSingleArrayExecutionStrategy,
  ContextExecutor
} from './types/arrays'
import type { paramsMap } from './types/arrays'

export async function exec<K extends keyof paramsMap> (
  strategy: BaseSingleArrayExecutionStrategy<K>,
  params: paramsMap[K]
) {
  const executor = new ContextExecutor<K>(strategy)
  const result = await executor.execute(params)
  console.log(`Executed-${strategy.constructor.name} and Result: ${result}`)
}
