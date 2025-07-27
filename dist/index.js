"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exec_1 = require("./Executors/exec");
const binarySearch_1 = require("./Strategies/binarySearch");
const findInsertPosition_1 = require("./Strategies/findInsertPosition");
const fourSum_1 = require("./Strategies/fourSum");
const longSubStringNoDup_1 = require("./Strategies/longSubStringNoDup");
const minSizeSubarraySum_1 = require("./Strategies/minSizeSubarraySum");
const moveZeros_1 = require("./Strategies/moveZeros");
const nextPermutation_1 = require("./Strategies/nextPermutation");
const singleNumber_1 = require("./Strategies/singleNumber");
const threeSum_1 = require("./Strategies/threeSum");
const threeSumClosest_1 = require("./Strategies/threeSumClosest");
const twoSum1_1 = require("./Strategies/twoSum1");
const twoSum2_1 = require("./Strategies/twoSum2");
const containerWithMostWater_1 = require("./Strategies/containerWithMostWater");
const groupAnagrams_1 = require("./Strategies/groupAnagrams");
// TwoSum1: No pair adds to 100
const twoSum1 = new twoSum1_1.TwoSumStrategy1();
(0, exec_1.exec)(twoSum1, { nums: [1, 2, 3, 4, 5], target: 100 }); // ➞ [-1,-1]
// TwoSum2: Multiple duplicates that sum to target
const twoSum2 = new twoSum2_1.TwoSumStrategy2();
(0, exec_1.exec)(twoSum2, { nums: [2, 3, 3, 4, 5], target: 6 }); // ➞ [0,3]
// MoveZeros: All zeros
const moveZeros = new moveZeros_1.MoveZeroStrategy();
(0, exec_1.exec)(moveZeros, { nums: [0, 0, 0, 0] }); // ➞ [0, 0, 0, 0]
// BinarySearch: Target not found
const binarySearch = new binarySearch_1.BinarySearchStrategy();
(0, exec_1.exec)(binarySearch, { nums: [1, 2, 4, 5, 6], target: 3 }); // ➞ -1
// MinimumSizeSubarraySum: No subarray meets target
const minSizesubarrSum = new minSizeSubarraySum_1.MinimumSizeSubarraySumStrategy();
(0, exec_1.exec)(minSizesubarrSum, { nums: [1, 1, 1, 1], target: 10 }); // ➞ 0
// LongestSubStringNoDup: All same characters
const longSizesubstrNoDupLen = new longSubStringNoDup_1.LongestSubStrWithNoRepeatCharStrategy();
(0, exec_1.exec)(longSizesubstrNoDupLen, { s: 'aaaaaa' }); // ➞ 1
// FindInsertPosition: Insert in middle
const findInserPosition = new findInsertPosition_1.FindInsertPositionStrategy();
(0, exec_1.exec)(findInserPosition, { nums: [1, 3, 5, 6], target: 4 }); // ➞ 2
// NextPermutation: Already in descending order
const nextPermutation = new nextPermutation_1.NextPermutationStrategy();
(0, exec_1.exec)(nextPermutation, { nums: [3, 2, 1] }); // ➞ [1, 2, 3]
// SingleOccuringNumber: Only one unique
const singleNumber = new singleNumber_1.SingleOccuringNumberStrategy();
(0, exec_1.exec)(singleNumber, { num: [7, 3, 3, 7, 1, 1, 4, 4, 9] }); // ➞ 9
// ThreeSum: Only valid triplet
const threeSum = new threeSum_1.ThreeSumStrategy();
(0, exec_1.exec)(threeSum, { nums: [-1, 0, 1, 2, -1, -4] }); // ➞ [[-1, -1, 2], [-1, 0, 1]]
//FourSum: All elements same, only one unique quadruplet
const fourSum = new fourSum_1.FourSumStrategy();
(0, exec_1.exec)(fourSum, { nums: [2, 2, 2, 2, 2], target: 8 }); // ➞ [[2, 2, 2, 2]]
//ThreeSumClosest: Return the closest 3Sum values
const threeSumClosest = new threeSumClosest_1.ThreeSumClosestStrategy();
(0, exec_1.exec)(threeSumClosest, { nums: [-8, -6, -5, -3, -1], target: 2 }); // ➞ -9 (closest to 2)
//ContainerWithMostWater: All heights zero
const containerWithMostWater = new containerWithMostWater_1.ContainerWithMostWaterStrategy();
(0, exec_1.exec)(containerWithMostWater, { nums: [0, 0, 0, 0, 0] }); // ➞ 0 
//GroupAnagrams: Empty array - no anagrams to group
const groupAnagrams = new groupAnagrams_1.GroupAnagramsStrategy();
(0, exec_1.exec)(groupAnagrams, { strings: [] }); // ➞ []
