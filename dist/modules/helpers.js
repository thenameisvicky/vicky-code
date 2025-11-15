"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyExecutor = void 0;
exports.getLeetcodeResult = getLeetcodeResult;
// Array Manipulation
const moveZeros_1 = require("./leetCodeStyle/arrayManipulation/moveZeros");
const maxSumSubarray_1 = require("./leetCodeStyle/arrayManipulation/maxSumSubarray");
const nextPermutation_1 = require("./leetCodeStyle/arrayManipulation/nextPermutation");
const sumZero_1 = require("./leetCodeStyle/arrayManipulation/sumZero");
const zeroFilledSubArrlength_1 = require("./leetCodeStyle/arrayManipulation/zeroFilledSubArrlength");
const bestTimeStockActivities_1 = require("./leetCodeStyle/arrayManipulation/bestTimeStockActivities");
const permutations_1 = require("./leetCodeStyle/arrayManipulation/permutations");
const consecutiveOdds_1 = require("./leetCodeStyle/arrayManipulation/consecutiveOdds");
// HashMap
const twoSum1_1 = require("./leetCodeStyle/hashMap/twoSum1");
const twoSum2_1 = require("./leetCodeStyle/hashMap/twoSum2");
const singleNumber_1 = require("./leetCodeStyle/hashMap/singleNumber");
const groupAnagrams_1 = require("./leetCodeStyle/hashMap/groupAnagrams");
const countMaximumFrequence_1 = require("./leetCodeStyle/hashMap/countMaximumFrequence");
// Pointers
const threeSum_1 = require("./leetCodeStyle/pointers/threeSum");
const threeSumClosest_1 = require("./leetCodeStyle/pointers/threeSumClosest");
const fourSum_1 = require("./leetCodeStyle/pointers/fourSum");
const containerWithMostWater_1 = require("./leetCodeStyle/pointers/containerWithMostWater");
const hillsAndValleysCount_1 = require("./leetCodeStyle/pointers/hillsAndValleysCount");
const maxProductSubarry_1 = require("./leetCodeStyle/pointers/maxProductSubarry");
// Search
const binarySearch_1 = require("./leetCodeStyle/search/binarySearch");
const findInsertPosition_1 = require("./leetCodeStyle/search/findInsertPosition");
const rotatedArraySearch_1 = require("./leetCodeStyle/search/rotatedArraySearch");
// Sliding Window
const longestCommonPrefix_1 = require("./leetCodeStyle/slidingWindow/longestCommonPrefix");
const minSizeSubarraySum_1 = require("./leetCodeStyle/slidingWindow/minSizeSubarraySum");
const longSubStringNoDup_1 = require("./leetCodeStyle/slidingWindow/longSubStringNoDup");
// classes
class StrategyExecutor {
    constructor(name) {
        this.strategyName = name;
        this.strategy = StrategyExecutor.strategyMap[this.strategyName];
    }
    async execute(data) {
        const result = this.strategy.function(data);
        console.log(`[EXE] - ${this.strategyName} [RES] - ${result}`);
        return result;
    }
}
exports.StrategyExecutor = StrategyExecutor;
StrategyExecutor.strategyMap = {
    // Array Manipulation
    MOVE_ZEROS: new moveZeros_1.MoveZeroStrategy(),
    MAX_SUM_SUBARRAY: new maxSumSubarray_1.MaximumSumSubArrayStrategy(),
    NEXT_PERMUTATION: new nextPermutation_1.NextPermutationStrategy(),
    SUMS_UP_TO_ZERO: new sumZero_1.SumsUpToZeroStrategy(),
    ZERO_FILLED_SUBARRAY: new zeroFilledSubArrlength_1.ZeroFilledSubArrayStrategy(),
    BEST_TIME_TO_BUY_AND_SELL_STOCK: new bestTimeStockActivities_1.BestTimeToBuyAndSellStockStrategy(),
    PERMUTATIONS: new permutations_1.PermutationsStrategy(),
    CONSECUTIVE_ODDS: new consecutiveOdds_1.ConsecutiveOddsStrategy(),
    // HashMap
    TWO_SUM_1: new twoSum1_1.TwoSumStrategy1(),
    TWO_SUM_2: new twoSum2_1.TwoSumStrategy2(),
    SINGLE_OCCURRING_NUMBER: new singleNumber_1.SingleOccuringNumberStrategy(),
    GROUP_ANAGRAMS: new groupAnagrams_1.GroupAnagramsStrategy(),
    COUNT_ELEMENTS_WITH_MAXIMUM_FREQUENCY: new countMaximumFrequence_1.CountElementsWithMaximumFrequencyStrategy(),
    // Pointers
    THREE_SUM: new threeSum_1.ThreeSumStrategy(),
    THREE_SUM_CLOSEST: new threeSumClosest_1.ThreeSumClosestStrategy(),
    FOUR_SUM: new fourSum_1.FourSumStrategy(),
    CONTAINER_WITH_MOST_WATER: new containerWithMostWater_1.ContainerWithMostWaterStrategy(),
    COUNT_HILLS_AND_VALLEYS: new hillsAndValleysCount_1.CountHillsAndValleysStrategy(),
    MAX_PRODUCT_SUBARRAY: new maxProductSubarry_1.MaximumProductSubArrayStrategy(),
    // Search
    BINARY_SEARCH: new binarySearch_1.BinarySearchStrategy(),
    FIND_INSERT_POSITION: new findInsertPosition_1.FindInsertPositionStrategy(),
    ROTATED_ARRAY_SEARCH: new rotatedArraySearch_1.RotatedArraySearchStrategy(),
    // Sliding Window
    LONGEST_COMMON_PREFIX: new longestCommonPrefix_1.LongestCommonPrefixStrategy(),
    MINIMUM_SIZE_SUBARRAY_SUM: new minSizeSubarraySum_1.MinimumSizeSubarraySumStrategy(),
    LONGEST_SUBSTRING_NO_REPEAT_CHAR: new longSubStringNoDup_1.LongestSubStrWithNoRepeatCharStrategy(),
};
// functions
function getLeetcodeResult(name, param) {
    return new StrategyExecutor(name).execute(param);
}
