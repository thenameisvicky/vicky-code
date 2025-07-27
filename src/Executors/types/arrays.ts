import { binarySearchParams, containerWithMostWaterParams, findInsertPositionParams, fourSumParams, groupAnagramsParams, longSubStringNoDupParams, maxSumSubarrayParams, minSizeSubarraySumParams, moveZerosParams, nextPermutationParams, singleNumberParams, threeSumClosestParams, threeSumParams, twoSumParams } from "../../Strategies/type";

export interface paramsMap {
  twoSum: twoSumParams,
  binarySearch: binarySearchParams,
  minSizeSubarrSum: minSizeSubarraySumParams,
  moveZeros: moveZerosParams,
  longestSubStringNoDup: longSubStringNoDupParams;
  findInsertPosition: findInsertPositionParams;
  nextPermutation: nextPermutationParams;
  singleOccuringNumber: singleNumberParams;
  threeSum: threeSumParams;
  fourSum: fourSumParams;
  threeSumClosest: threeSumClosestParams;
  containerWithMostWater: containerWithMostWaterParams;
  groupAnagrams: groupAnagramsParams;
  maxSumSubarray: maxSumSubarrayParams;
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
