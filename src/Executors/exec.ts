import {
  BaseSingleArrayExecutionStrategy,
  contextExecutor,
} from "./types/arrays";
import type { paramsMap } from "./types/arrays";

export function exec<K extends keyof paramsMap>(
  strategy: BaseSingleArrayExecutionStrategy<K>,
  params: paramsMap[K]
) {
  const executor = new contextExecutor<K>(strategy);
  executor.execute(params).then((result) => {
    console.log(`Executed-${strategy.constructor.name} and Result: ${result}`);
  });
}
