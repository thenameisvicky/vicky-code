"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const problemSolvingExec_1 = require("../Executors/problemSolvingExec");
const binarySearch_1 = require("./search/binarySearch");
const findInsertPosition_1 = require("./search/findInsertPosition");
const fourSum_1 = require("./pointers/fourSum");
const longSubStringNoDup_1 = require("./slidingWindow/longSubStringNoDup");
const minSizeSubarraySum_1 = require("./slidingWindow/minSizeSubarraySum");
const maxSumSubarray_1 = require("./arrayManipulation/maxSumSubarray");
const moveZeros_1 = require("./arrayManipulation/moveZeros");
const nextPermutation_1 = require("./arrayManipulation/nextPermutation");
const singleNumber_1 = require("./hashMap/singleNumber");
const threeSum_1 = require("./pointers/threeSum");
const threeSumClosest_1 = require("./pointers/threeSumClosest");
const twoSum1_1 = require("./hashMap/twoSum1");
const twoSum2_1 = require("./hashMap/twoSum2");
const containerWithMostWater_1 = require("./pointers/containerWithMostWater");
const groupAnagrams_1 = require("./hashMap/groupAnagrams");
const hillsAndValleysCount_1 = require("./pointers/hillsAndValleysCount");
const maxProductSubarry_1 = require("./pointers/maxProductSubarry");
const rotatedArraySearch_1 = require("./search/rotatedArraySearch");
const zeroFilledSubArrlength_1 = require("./arrayManipulation/zeroFilledSubArrlength");
const longestCommonPrefix_1 = require("./slidingWindow/longestCommonPrefix");
const sumZero_1 = require("./arrayManipulation/sumZero");
const bestTimeStockActivities_1 = require("./arrayManipulation/bestTimeStockActivities");
const countMaximumFrequence_1 = require("./hashMap/countMaximumFrequence");
const permutations_1 = require("./arrayManipulation/permutations");
const consecutiveOdds_1 = require("./arrayManipulation/consecutiveOdds");
// TwoSum1: No pair adds to 100
const twoSum1 = new twoSum1_1.TwoSumStrategy1();
(0, problemSolvingExec_1.exec)(twoSum1, { nums: [1, 2, 3, 4, 5], target: 100 }); // ➞ [-1,-1]
// TwoSum2: Multiple duplicates that sum to target
const twoSum2 = new twoSum2_1.TwoSumStrategy2();
(0, problemSolvingExec_1.exec)(twoSum2, { nums: [2, 3, 3, 4, 5], target: 6 }); // ➞ [0,3]
// MoveZeros: All zeros
const moveZeros = new moveZeros_1.MoveZeroStrategy();
(0, problemSolvingExec_1.exec)(moveZeros, { nums: [0, 0, 0, 0] }); // ➞ [0, 0, 0, 0]
// BinarySearch: Target not found
const binarySearch = new binarySearch_1.BinarySearchStrategy();
(0, problemSolvingExec_1.exec)(binarySearch, { nums: [1, 2, 4, 5, 6], target: 3 }); // ➞ -1
// MinimumSizeSubarraySum: No subarray meets target
const minSizesubarrSum = new minSizeSubarraySum_1.MinimumSizeSubarraySumStrategy();
(0, problemSolvingExec_1.exec)(minSizesubarrSum, { nums: [1, 1, 1, 1], target: 10 }); // ➞ 0
// LongestSubStringNoDup: All same characters
const longSizesubstrNoDupLen = new longSubStringNoDup_1.LongestSubStrWithNoRepeatCharStrategy();
(0, problemSolvingExec_1.exec)(longSizesubstrNoDupLen, { s: 'aaaaaa' }); // ➞ 1
// FindInsertPosition: Insert in middle
const findInserPosition = new findInsertPosition_1.FindInsertPositionStrategy();
(0, problemSolvingExec_1.exec)(findInserPosition, { nums: [1, 3, 5, 6], target: 4 }); // ➞ 2
// NextPermutation: Already in descending order
const nextPermutation = new nextPermutation_1.NextPermutationStrategy();
(0, problemSolvingExec_1.exec)(nextPermutation, { nums: [3, 2, 1] }); // ➞ [1, 2, 3]
// SingleOccuringNumber: Only one unique
const singleNumber = new singleNumber_1.SingleOccuringNumberStrategy();
(0, problemSolvingExec_1.exec)(singleNumber, { num: [7, 3, 3, 7, 1, 1, 4, 4, 9] }); // ➞ 9
// ThreeSum: Only valid triplet
const threeSum = new threeSum_1.ThreeSumStrategy();
(0, problemSolvingExec_1.exec)(threeSum, { nums: [-1, 0, 1, 2, -1, -4] }); // ➞ [[-1, -1, 2], [-1, 0, 1]]
//FourSum: All elements same, only one unique quadruplet
const fourSum = new fourSum_1.FourSumStrategy();
(0, problemSolvingExec_1.exec)(fourSum, { nums: [2, 2, 2, 2, 2], target: 8 }); // ➞ [[2, 2, 2, 2]]
//ThreeSumClosest: Return the closest 3Sum values
const threeSumClosest = new threeSumClosest_1.ThreeSumClosestStrategy();
(0, problemSolvingExec_1.exec)(threeSumClosest, { nums: [-8, -6, -5, -3, -1], target: 2 }); // ➞ -9 (closest to 2)
//ContainerWithMostWater: All heights zero
const containerWithMostWater = new containerWithMostWater_1.ContainerWithMostWaterStrategy();
(0, problemSolvingExec_1.exec)(containerWithMostWater, { nums: [0, 0, 0, 0, 0] }); // ➞ 0 
//GroupAnagrams: Empty array - no anagrams to group
const groupAnagrams = new groupAnagrams_1.GroupAnagramsStrategy();
(0, problemSolvingExec_1.exec)(groupAnagrams, { strings: [] }); // ➞ []
// MaximumSumSubArray: Edge Case 1000000
const maxSumSubarray = new maxSumSubarray_1.MaximumSumSubArrayStrategy();
(0, problemSolvingExec_1.exec)(maxSumSubarray, { nums: [1000000, -1000000, 1000000] }); // ➞ 1000000
// CountHillsAndValleys: All elements are the same 
const countHillsAndValleys = new hillsAndValleysCount_1.CountHillsAndValleysStrategy();
(0, problemSolvingExec_1.exec)(countHillsAndValleys, { nums: [5, 5, 5, 5, 5] }); // ➞ 0
// MaximumProductSubArray: Expected 0 as output
const maximumProductSubarray = new maxProductSubarry_1.MaximumProductSubArrayStrategy();
(0, problemSolvingExec_1.exec)(maximumProductSubarray, { nums: [-2, 0 - 2] }); // ➞ 4
//RotatedArraySearch: Edge Case handling with all Duplicate
const rotatedArraySearch = new rotatedArraySearch_1.RotatedArraySearchStrategy();
(0, problemSolvingExec_1.exec)(rotatedArraySearch, { nums: [1, 1, 3, 1, 1], target: 3 });
//ZeroFilledSubArray: Expected 6 as output
const zeroFilledSubArray = new zeroFilledSubArrlength_1.zeroFilledSubArrayStrategy();
(0, problemSolvingExec_1.exec)(zeroFilledSubArray, { nums: [1, 3, 0, 0, 2, 0, 0, 4] });
//LongestCommonPrefix: Expected "" as output
const longestCommonPrefix = new longestCommonPrefix_1.LongestCommonPrefixStrategy();
(0, problemSolvingExec_1.exec)(longestCommonPrefix, { array: ["hello", "", "world", "help"] });
//SumsUpToZero: Expected [-1, 0, 1] as output
const sumUpToZero = new sumZero_1.SumsUpToZeroStrategy();
(0, problemSolvingExec_1.exec)(sumUpToZero, { length: 3 });
//BestTimeToBuyAndSellStock: Expected 0 as output
const bestTimeToBuyAndSell = new bestTimeStockActivities_1.BestTimeToBuyAndSellStockStrategy();
(0, problemSolvingExec_1.exec)(bestTimeToBuyAndSell, { array: [9, 7, 5, 3, 1] });
//CountElementsWithMostFrequency: Expected 4 as output
const countElemWithMostFre = new countMaximumFrequence_1.CountElementsWithMaximumFrequencyStrategy();
(0, problemSolvingExec_1.exec)(countElemWithMostFre, { array: [1, 2, 2, 3, 1, 4] });
//Permutations: Expected [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ] as output in any order
const permutations = new permutations_1.PermutationsStrategy();
(0, problemSolvingExec_1.exec)(permutations, { nums: [1, 2, 3] });
//Consecutive Odds: Expected true
const consecutiveOdds = new consecutiveOdds_1.ConsecutiveOddsStrategy();
(0, problemSolvingExec_1.exec)(consecutiveOdds, { array: [0, 0, 0, 0, 0, 1, 23, 5, 0, 0, 0, 7, 5, 3] });
