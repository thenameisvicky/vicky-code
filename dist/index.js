"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exec_1 = require("./Executors/exec");
const binarySearch_1 = require("./Strategies/binarySearch");
const findInsertPosition_1 = require("./Strategies/findInsertPosition");
const longSubStringNoDup_1 = require("./Strategies/longSubStringNoDup");
const minSizeSubarraySum_1 = require("./Strategies/minSizeSubarraySum");
const moveZeros_1 = require("./Strategies/moveZeros");
const nextPermutation_1 = require("./Strategies/nextPermutation");
const twoSum1_1 = require("./Strategies/twoSum1");
const twoSum2_1 = require("./Strategies/twoSum2");
// TwoSum1
const twoSum1 = new twoSum1_1.TwoSumStrategy1();
(0, exec_1.exec)(twoSum1, { nums: [1, 2, 3, 4, 5], target: 10 });
// TwoSum2
const twoSum2 = new twoSum2_1.TwoSumStrategy2();
(0, exec_1.exec)(twoSum2, { nums: [1, 2, 3, 4, 5], target: 9 });
// MoveZeros
const moveZeros = new moveZeros_1.MoveZeroStrategy();
(0, exec_1.exec)(moveZeros, { nums: [1, 0, 2, 0, 9, 0, 12] });
// BinarySearch
const binarySearch = new binarySearch_1.BinarySearchStrategy();
(0, exec_1.exec)(binarySearch, { nums: [1, 2, 3, 4, 4], target: 4 });
// MinimumSizeSubarraySum
const minSizesubarrSum = new minSizeSubarraySum_1.MinimumSizeSubarraySumStrategy();
(0, exec_1.exec)(minSizesubarrSum, { nums: [1, 2, 3, 4, 5], target: 10 });
//LongestSubStringNoDupLength
const longSizesubstrNoDupLen = new longSubStringNoDup_1.LongestSubStrWithNoRepeatCharStrategy();
(0, exec_1.exec)(longSizesubstrNoDupLen, { s: 'pwwke' });
//FindInsertPosition
const findInserPosition = new findInsertPosition_1.FindInsertPositionStrategy();
(0, exec_1.exec)(findInserPosition, { nums: [1, 2, 3, 4, 6], target: 5 });
//NextPermutation
const nextPermutation = new nextPermutation_1.NextPermutationStrategy();
(0, exec_1.exec)(nextPermutation, { nums: [1, 2, 3, 4] });
