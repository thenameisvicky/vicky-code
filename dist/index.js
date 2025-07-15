"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exec_1 = require("./Executors/exec");
const binarySearch_1 = require("./Strategies/binarySearch");
const minSizeSubarraySum_1 = require("./Strategies/minSizeSubarraySum");
const moveZeros_1 = require("./Strategies/moveZeros");
const twoSum1_1 = require("./Strategies/twoSum1");
const twoSum2_1 = require("./Strategies/twoSum2");
//TwoSum1
const twoSum1 = new twoSum1_1.TwoSumStrategy1();
(0, exec_1.exec)([1, 2, 3, 4, 5], twoSum1, 10);
//TwoSum2
const twoSum2 = new twoSum2_1.TwoSumStrategy2();
(0, exec_1.exec)([1, 2, 3, 4, 5], twoSum2, 9);
//MovedZeros
const moveZeros = new moveZeros_1.MoveZeroStrategy();
(0, exec_1.exec)([1, 0, 2, 0, 9, 0, 12], moveZeros);
//BinarySearch
const binarySearch = new binarySearch_1.BinarySearchStrategy();
(0, exec_1.exec)([1, 2, 3, 4, 4], binarySearch, 4);
//MinimumSizeSubarraySum
const minSizesubarrSum = new minSizeSubarraySum_1.MinimumSizeSubarraySum();
(0, exec_1.exec)([1, 2, 3, 4, 5], minSizesubarrSum, 10);
