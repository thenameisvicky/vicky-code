// Array Manipulation
import { MoveZeroStrategy } from "./leetCodeStyle/arrayManipulation/moveZeros";
import { MaximumSumSubArrayStrategy } from "./leetCodeStyle/arrayManipulation/maxSumSubarray";
import { NextPermutationStrategy } from "./leetCodeStyle/arrayManipulation/nextPermutation";
import { SumsUpToZeroStrategy } from "./leetCodeStyle/arrayManipulation/sumZero";
import { ZeroFilledSubArrayStrategy } from "./leetCodeStyle/arrayManipulation/zeroFilledSubArrlength";
import { BestTimeToBuyAndSellStockStrategy } from "./leetCodeStyle/arrayManipulation/bestTimeStockActivities";
import { PermutationsStrategy } from "./leetCodeStyle/arrayManipulation/permutations";
import { ConsecutiveOddsStrategy } from "./leetCodeStyle/arrayManipulation/consecutiveOdds";

// HashMap
import { TwoSumStrategy1 } from "./leetCodeStyle/hashMap/twoSum1";
import { TwoSumStrategy2 } from "./leetCodeStyle/hashMap/twoSum2";
import { SingleOccuringNumberStrategy } from "./leetCodeStyle/hashMap/singleNumber";
import { GroupAnagramsStrategy } from "./leetCodeStyle/hashMap/groupAnagrams";
import { CountElementsWithMaximumFrequencyStrategy } from "./leetCodeStyle/hashMap/countMaximumFrequence";

// Pointers
import { ThreeSumStrategy } from "./leetCodeStyle/pointers/threeSum";
import { ThreeSumClosestStrategy } from "./leetCodeStyle/pointers/threeSumClosest";
import { FourSumStrategy } from "./leetCodeStyle/pointers/fourSum";
import { ContainerWithMostWaterStrategy } from "./leetCodeStyle/pointers/containerWithMostWater";
import { CountHillsAndValleysStrategy } from "./leetCodeStyle/pointers/hillsAndValleysCount";
import { MaximumProductSubArrayStrategy } from "./leetCodeStyle/pointers/maxProductSubarry";

// Search
import { BinarySearchStrategy } from "./leetCodeStyle/search/binarySearch";
import { FindInsertPositionStrategy } from "./leetCodeStyle/search/findInsertPosition";
import { RotatedArraySearchStrategy } from "./leetCodeStyle/search/rotatedArraySearch";

// Sliding Window
import { LongestCommonPrefixStrategy } from "./leetCodeStyle/slidingWindow/longestCommonPrefix";
import { MinimumSizeSubarraySumStrategy } from "./leetCodeStyle/slidingWindow/minSizeSubarraySum";
import { LongestSubStrWithNoRepeatCharStrategy } from "./leetCodeStyle/slidingWindow/longSubStringNoDup";

// Interfaces
export interface LeetcodeStrategy<T, K> {
  function(params: T): K;
}

// classes
export class StrategyExecutor {
  static strategyMap = {
    // Array Manipulation
    MOVE_ZEROS: new MoveZeroStrategy(),
    MAX_SUM_SUBARRAY: new MaximumSumSubArrayStrategy(),
    NEXT_PERMUTATION: new NextPermutationStrategy(),
    SUMS_UP_TO_ZERO: new SumsUpToZeroStrategy(),
    ZERO_FILLED_SUBARRAY: new ZeroFilledSubArrayStrategy(),
    BEST_TIME_TO_BUY_AND_SELL_STOCK: new BestTimeToBuyAndSellStockStrategy(),
    PERMUTATIONS: new PermutationsStrategy(),
    CONSECUTIVE_ODDS: new ConsecutiveOddsStrategy(),

    // HashMap
    TWO_SUM_1: new TwoSumStrategy1(),
    TWO_SUM_2: new TwoSumStrategy2(),
    SINGLE_OCCURRING_NUMBER: new SingleOccuringNumberStrategy(),
    GROUP_ANAGRAMS: new GroupAnagramsStrategy(),
    COUNT_ELEMENTS_WITH_MAXIMUM_FREQUENCY:
      new CountElementsWithMaximumFrequencyStrategy(),

    // Pointers
    THREE_SUM: new ThreeSumStrategy(),
    THREE_SUM_CLOSEST: new ThreeSumClosestStrategy(),
    FOUR_SUM: new FourSumStrategy(),
    CONTAINER_WITH_MOST_WATER: new ContainerWithMostWaterStrategy(),
    COUNT_HILLS_AND_VALLEYS: new CountHillsAndValleysStrategy(),
    MAX_PRODUCT_SUBARRAY: new MaximumProductSubArrayStrategy(),

    // Search
    BINARY_SEARCH: new BinarySearchStrategy(),
    FIND_INSERT_POSITION: new FindInsertPositionStrategy(),
    ROTATED_ARRAY_SEARCH: new RotatedArraySearchStrategy(),

    // Sliding Window
    LONGEST_COMMON_PREFIX: new LongestCommonPrefixStrategy(),
    MINIMUM_SIZE_SUBARRAY_SUM: new MinimumSizeSubarraySumStrategy(),
    LONGEST_SUBSTRING_NO_REPEAT_CHAR:
      new LongestSubStrWithNoRepeatCharStrategy(),
  };

  private strategy: (typeof StrategyExecutor.strategyMap)[keyof typeof StrategyExecutor.strategyMap];

  private strategyName: keyof typeof StrategyExecutor.strategyMap;

  constructor(name: keyof typeof StrategyExecutor.strategyMap) {
    this.strategyName = name;
    this.strategy = StrategyExecutor.strategyMap[this.strategyName];
  }

  async execute(data: any) {
    const result = this.strategy.function(data);
    console.log(`[EXE] - ${this.strategyName} [RES] - ${result}`);
    return result;
  }
}

// functions
export function getLeetcodeResult<T>(
  name: keyof typeof StrategyExecutor.strategyMap,
  param: T
) {
  return new StrategyExecutor(name).execute(param);
}
