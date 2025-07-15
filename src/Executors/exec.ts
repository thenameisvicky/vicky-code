import {
  BaseSingleArrayExecutionStrategy,
  contextExecutor,
} from "./types/singleArray";

export function exec<T extends BaseSingleArrayExecutionStrategy>(
  nums: Array<number>,
  strategy: T,
  target?: number,
) {
  const executor = new contextExecutor<T>(strategy);
  executor.execute(nums, target).then((result) => {
    console.log(`Executed-${strategy.constructor.name} and Result: ${result}`);
  });
}
