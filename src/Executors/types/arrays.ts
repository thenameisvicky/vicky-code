import { binarySearchParams, containerWithMostWaterParams, countHillsAndValleysParams, findInsertPositionParams, fourSumParams, groupAnagramsParams, longestCommonPrefixParams, longSubStringNoDupParams, maxProductSubarrayParams, maxSumSubarrayParams, minSizeSubarraySumParams, moveZerosParams, nextPermutationParams, rotatedArraySearchParams, singleNumberParams, SumsUpToZeroParams, threeSumClosestParams, threeSumParams, twoSumParams, zeroFilledSubArrParams } from "../../leetCodeStyle/types";

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
  zeroFilledSubArray: zeroFilledSubArrParams;
  longestCommonPrefix: longestCommonPrefixParams;
  sumsUpToZero: SumsUpToZeroParams;
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
