import { exec } from "./Executors/exec";
import { BinarySearchStrategy } from "./Strategies/binarySearch";
import { FindInsertPositionStrategy } from "./Strategies/findInsertPosition";
import { LongestSubStrWithNoRepeatCharStrategy } from "./Strategies/longSubStringNoDup";
import { MinimumSizeSubarraySumStrategy } from "./Strategies/minSizeSubarraySum";
import { MoveZeroStrategy } from "./Strategies/moveZeros";
import { NextPermutationStrategy } from "./Strategies/nextPermutation";
import { TwoSumStrategy1 } from "./Strategies/twoSum1";
import { TwoSumStrategy2 } from "./Strategies/twoSum2";

// TwoSum1
const twoSum1 = new TwoSumStrategy1();
exec<'twoSum'>(twoSum1, { nums: [1, 2, 3, 4, 5], target: 10 });

// TwoSum2
const twoSum2 = new TwoSumStrategy2();
exec<'twoSum'>(twoSum2, { nums: [1, 2, 3, 4, 5], target: 9 });

// MoveZeros
const moveZeros = new MoveZeroStrategy();
exec<'moveZeros'>(moveZeros, { nums: [1, 0, 2, 0, 9, 0, 12] });

// BinarySearch
const binarySearch = new BinarySearchStrategy();
exec<'binarySearch'>(binarySearch, { nums: [1, 2, 3, 4, 4], target: 4 });

// MinimumSizeSubarraySum
const minSizesubarrSum = new MinimumSizeSubarraySumStrategy();
exec<'minSizeSubarrSum'>(minSizesubarrSum, { nums: [1, 2, 3, 4, 5], target: 10 });

//LongestSubStringNoDupLength
const longSizesubstrNoDupLen = new LongestSubStrWithNoRepeatCharStrategy();
exec<'longestSubStringNoDup'>(longSizesubstrNoDupLen, { s: 'pwwke' })

//FindInsertPosition
const findInserPosition = new FindInsertPositionStrategy();
exec<'findInsertPosition'>(findInserPosition, { nums: [1, 2, 3, 4, 6], target: 5 });

//NextPermutation
const nextPermutation = new NextPermutationStrategy();
exec<'nextPermutation'>(nextPermutation, {nums:[1,2,3,4]});