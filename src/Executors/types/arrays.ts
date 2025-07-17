import { binarySearchParams, findInsertPositionParams, longSubStringNoDupParams, minSizeSubarraySumParams, moveZerosParams, nextPermutationParams, twoSumParams } from "../../Strategies/type";

export interface paramsMap {
  twoSum: twoSumParams,
  binarySearch: binarySearchParams,
  minSizeSubarrSum: minSizeSubarraySumParams,
  moveZeros: moveZerosParams,
  longestSubStringNoDup: longSubStringNoDupParams;
  findInsertPosition: findInsertPositionParams;
  nextPermutation: nextPermutationParams;
}

export interface BaseSingleArrayExecutionStrategy<K extends keyof paramsMap> {
  contextFunction: (params: paramsMap[K]) => Promise<any>;
}

export class contextExecutor<K extends keyof paramsMap> {
  private strategy: BaseSingleArrayExecutionStrategy<K>;
  constructor(Strategy: BaseSingleArrayExecutionStrategy<K>) {
    this.strategy = Strategy;
  }

  async execute(params: paramsMap[K]): Promise<any> {
    return await this.strategy.contextFunction(params);
  }
}
