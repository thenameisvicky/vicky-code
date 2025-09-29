import { bestTimeToBuyAndSellStockParams, binarySearchParams, consecutiveOddsParams, containerWithMostWaterParams, countElementsWithMaximumFrequencyParams, countHillsAndValleysParams, findInsertPositionParams, fourSumParams, groupAnagramsParams, longestCommonPrefixParams, longSubStringNoDupParams, maxProductSubarrayParams, maxSumSubarrayParams, minSizeSubarraySumParams, moveZerosParams, nextPermutationParams, rotatedArraySearchParams, singleNumberParams, sumsUpToZeroParams, threeSumClosestParams, threeSumParams, twoSumParams, zeroFilledSubArrParams } from "../../modules/leetCodeStyle/types";

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
  sumsUpToZero: sumsUpToZeroParams;
  bestTimeToSell: bestTimeToBuyAndSellStockParams;
  countElemWithMostFrequency: countElementsWithMaximumFrequencyParams;
  consecutiveOdds: consecutiveOddsParams;
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

// Engineering drills have different input structures and should use a different executor and params map.
// We keep LeetCode executor intact and export engineering types separately to avoid coupling.

export interface engineeringParamsMap {
  // Example: add engineering drill task manager operations when implemented
  // taskManagerInit: { tasks: number[][] };
}

export interface BaseEngineeringExecutionStrategy<K extends keyof engineeringParamsMap> {
  contextFunction: (params: engineeringParamsMap[K]) => any;
}

export class engineeringContextExecutor<K extends keyof engineeringParamsMap> {
  private strategy: BaseEngineeringExecutionStrategy<K>;
  constructor(Strategy: BaseEngineeringExecutionStrategy<K>) {
    this.strategy = Strategy;
  }

  execute(params: engineeringParamsMap[K]): any {
    return this.strategy.contextFunction(params);
  }
}
