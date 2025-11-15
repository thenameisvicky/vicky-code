"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helpers");
// TwoSum1: No pair adds to 100
(0, helpers_1.getLeetcodeResult)("TWO_SUM_1", { nums: [1, 2, 3, 4, 5], target: 100 }); // ➞ [-1,-1]
// TwoSum2: Multiple duplicates that sum to target
(0, helpers_1.getLeetcodeResult)("TWO_SUM_2", { nums: [2, 3, 3, 4, 5], target: 6 }); // ➞ [0,3]
// MoveZeros: All zeros
(0, helpers_1.getLeetcodeResult)("MOVE_ZEROS", { nums: [0, 0, 0, 0] }); // ➞ [0, 0, 0, 0]
// BinarySearch: Target not found
(0, helpers_1.getLeetcodeResult)("BINARY_SEARCH", { nums: [1, 2, 4, 5, 6], target: 3 }); // ➞ -1
// MinimumSizeSubarraySum: No subarray meets target
(0, helpers_1.getLeetcodeResult)("MINIMUM_SIZE_SUBARRAY_SUM", {
    nums: [1, 1, 1, 1],
    target: 10,
}); // ➞ 0
// LongestSubStringNoDup: All same characters
(0, helpers_1.getLeetcodeResult)("LONGEST_SUBSTRING_NO_REPEAT_CHAR", { s: "aaaaaa" }); // ➞ 1
// FindInsertPosition: Insert in middle
(0, helpers_1.getLeetcodeResult)("FIND_INSERT_POSITION", {
    nums: [1, 3, 5, 6],
    target: 4,
}); // ➞ 2
// NextPermutation: Already in descending order
(0, helpers_1.getLeetcodeResult)("NEXT_PERMUTATION", { nums: [3, 2, 1] }); // ➞ [1, 2, 3]
// SingleOccuringNumber: Only one unique
(0, helpers_1.getLeetcodeResult)("SINGLE_OCCURRING_NUMBER", {
    num: [7, 3, 3, 7, 1, 1, 4, 4, 9],
}); // ➞ 9
// ThreeSum: Only valid triplet
(0, helpers_1.getLeetcodeResult)("THREE_SUM", { nums: [-1, 0, 1, 2, -1, -4] }); // ➞ [[-1, -1, 2], [-1, 0, 1]]
// FourSum: All elements same, only one unique quadruplet
(0, helpers_1.getLeetcodeResult)("FOUR_SUM", { nums: [2, 2, 2, 2, 2], target: 8 }); // ➞ [[2, 2, 2, 2]]
// ThreeSumClosest: Return the closest 3Sum values
(0, helpers_1.getLeetcodeResult)("THREE_SUM_CLOSEST", {
    nums: [-8, -6, -5, -3, -1],
    target: 2,
}); // ➞ -9 (closest to 2)
// ContainerWithMostWater: All heights zero
(0, helpers_1.getLeetcodeResult)("CONTAINER_WITH_MOST_WATER", {
    nums: [0, 0, 0, 0, 0],
}); // ➞ 0
// GroupAnagrams: Empty array - no anagrams to group
(0, helpers_1.getLeetcodeResult)("GROUP_ANAGRAMS", { strings: [] }); // ➞ []
// MaximumSumSubArray: Edge Case 1000000
(0, helpers_1.getLeetcodeResult)("MAX_SUM_SUBARRAY", {
    nums: [1000000, -1000000, 1000000],
}); // ➞ 1000000
// CountHillsAndValleys: All elements are the same
(0, helpers_1.getLeetcodeResult)("COUNT_HILLS_AND_VALLEYS", { nums: [5, 5, 5, 5, 5] }); // ➞ 0
// MaximumProductSubArray: Expected 0 as output
(0, helpers_1.getLeetcodeResult)("MAX_PRODUCT_SUBARRAY", { nums: [-2, 0, -2] }); // ➞ 4
// RotatedArraySearch: Edge Case handling with all Duplicate
(0, helpers_1.getLeetcodeResult)("ROTATED_ARRAY_SEARCH", {
    nums: [1, 1, 3, 1, 1],
    target: 3,
});
// ZeroFilledSubArray: Expected 6 as output
(0, helpers_1.getLeetcodeResult)("ZERO_FILLED_SUBARRAY", {
    nums: [1, 3, 0, 0, 2, 0, 0, 4],
});
// LongestCommonPrefix: Expected "" as output
(0, helpers_1.getLeetcodeResult)("LONGEST_COMMON_PREFIX", {
    array: ["hello", "", "world", "help"],
});
// SumsUpToZero: Expected [-1, 0, 1] as output
(0, helpers_1.getLeetcodeResult)("SUMS_UP_TO_ZERO", { length: 3 });
// BestTimeToBuyAndSellStock: Expected 0 as output
(0, helpers_1.getLeetcodeResult)("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
    array: [9, 7, 5, 3, 1],
});
// CountElementsWithMostFrequency: Expected 4 as output
(0, helpers_1.getLeetcodeResult)("COUNT_ELEMENTS_WITH_MAXIMUM_FREQUENCY", {
    array: [1, 2, 2, 3, 1, 4],
});
// Permutations: Expected [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ] as output in any order
(0, helpers_1.getLeetcodeResult)("PERMUTATIONS", { nums: [1, 2, 3] });
// Consecutive Odds: Expected true
(0, helpers_1.getLeetcodeResult)("CONSECUTIVE_ODDS", {
    array: [0, 0, 0, 0, 0, 1, 23, 5, 0, 0, 0, 7, 5, 3],
});
