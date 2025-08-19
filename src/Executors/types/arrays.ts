import { binarySearchParams, containerWithMostWaterParams, countHillsAndValleysParams, findInsertPositionParams, fourSumParams, groupAnagramsParams, longSubStringNoDupParams, maxProductSubarrayParams, maxSumSubarrayParams, minSizeSubarraySumParams, moveZerosParams, nextPermutationParams, rotatedArraySearchParams, singleNumberParams, threeSumClosestParams, threeSumParams, twoSumParams } from "../../ProblemSolvingStrategies/type";

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
  countHillsAndValley: countHillsAndValleysParams;
  maxProductSubarray: maxProductSubarrayParams;
  rotatedArraySearch: rotatedArraySearchParams;
}

export interface BaseSingleArrayExecutionStrategy<K extends keyof paramsMap> {
  contextFunction: (params: paramsMap[K]) => any;
}

export class contextExecutor<K extends keyof paramsMap> {
  private strategy: BaseSingleArrayExecutionStrategy<K>;
  constructor(Strategy: BaseSingleArrayExecutionStrategy<K>) {
    this.strategy = Strategy;
  }

  execute(params: paramsMap[K]): any {
    return this.strategy.contextFunction(params);
  }
}
