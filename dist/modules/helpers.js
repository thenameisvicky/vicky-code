"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.Heap = exports.TreeNode = exports.StrategyExecutor = void 0;
exports.getLeetcodeResult = getLeetcodeResult;
exports.getRoot = getRoot;
const moveZeros_1 = require("./leetCode/arrayManipulation/moveZeros");
const maxSumSubarray_1 = require("./leetCode/arrayManipulation/maxSumSubarray");
const nextPermutation_1 = require("./leetCode/arrayManipulation/nextPermutation");
const sumZero_1 = require("./leetCode/arrayManipulation/sumZero");
const zeroFilledSubArrlength_1 = require("./leetCode/arrayManipulation/zeroFilledSubArrlength");
const bestTimeStockActivities_1 = require("./leetCode/arrayManipulation/bestTimeStockActivities");
const permutations_1 = require("./leetCode/arrayManipulation/permutations");
const consecutiveOdds_1 = require("./leetCode/arrayManipulation/consecutiveOdds");
const twoSum1_1 = require("./leetCode/hashMap/twoSum1");
const twoSum2_1 = require("./leetCode/hashMap/twoSum2");
const singleNumber_1 = require("./leetCode/hashMap/singleNumber");
const groupAnagrams_1 = require("./leetCode/hashMap/groupAnagrams");
const countMaximumFrequence_1 = require("./leetCode/hashMap/countMaximumFrequence");
const threeSum_1 = require("./leetCode/pointers/threeSum");
const threeSumClosest_1 = require("./leetCode/pointers/threeSumClosest");
const fourSum_1 = require("./leetCode/pointers/fourSum");
const containerWithMostWater_1 = require("./leetCode/pointers/containerWithMostWater");
const hillsAndValleysCount_1 = require("./leetCode/pointers/hillsAndValleysCount");
const maxProductSubarry_1 = require("./leetCode/pointers/maxProductSubarry");
const binarySearch_1 = require("./leetCode/search/binarySearch");
const findInsertPosition_1 = require("./leetCode/search/findInsertPosition");
const rotatedArraySearch_1 = require("./leetCode/search/rotatedArraySearch");
const longestCommonPrefix_1 = require("./leetCode/slidingWindow/longestCommonPrefix");
const minSizeSubarraySum_1 = require("./leetCode/slidingWindow/minSizeSubarraySum");
const longSubStringNoDup_1 = require("./leetCode/slidingWindow/longSubStringNoDup");
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
class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
class Heap {
    // Class constructor
    constructor(compareFn) {
        this.data = [];
        this.compare = compareFn;
    }
    insert(element) {
        this.data.push(element);
        this.bubbleUp(this.data.length - 1);
    }
    peek() {
        return this.data[0];
    }
    remove(element) {
        const index = this.data.findIndex((elem) => elem === element);
        if (index === -1)
            return;
        const last = this.data.pop();
        if (index < this.data.length && last) {
            this.data[index] = last;
            this.bubbleUp(index);
            this.bubbleDown(index);
        }
    }
    poll() {
        if (this.data.length === 0)
            return undefined;
        const root = this.data[0];
        const last = this.data.pop();
        if (this.data.length > 0 && last) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return root;
    }
    size() {
        return this.data.length;
    }
    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.compare(this.data[index], this.data[parent]) < 0) {
                [this.data[index], this.data[parent]] = [
                    this.data[parent],
                    this.data[index],
                ];
                index = parent;
            }
            else {
                break;
            }
        }
    }
    bubbleDown(index) {
        const length = this.data.length;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let effecientIndex = index;
            if (leftIndex < length &&
                this.compare(this.data[leftIndex], this.data[effecientIndex]) < 0) {
                effecientIndex = leftIndex;
            }
            if (rightIndex < length &&
                this.compare(this.data[rightIndex], this.data[effecientIndex]) < 0) {
                effecientIndex = rightIndex;
            }
            if (effecientIndex !== index) {
                [this.data[index], this.data[effecientIndex]] = [
                    this.data[effecientIndex],
                    this.data[index],
                ];
                index = effecientIndex;
            }
            else {
                break;
            }
        }
    }
}
exports.Heap = Heap;
class BinaryTree {
    constructor(root) {
        this.root = root;
    }
    preOrder(node = this.root, result) {
        if (!node)
            return result;
        result.push(node.value);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }
    postOrder(node = this.root, result) {
        if (!node)
            return result;
        this.postOrder(node.right, result);
        this.postOrder(node.left, result);
        result.push(node.value);
        return result;
    }
    inOrder(node = this.root, result) {
        if (!node)
            return result;
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
        return result;
    }
    levelOrder(node = this.root, result) {
        if (!node)
            return result;
        const queue = [node];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            if (currentNode) {
                result.push(currentNode.value);
                if (currentNode.left)
                    queue.push(currentNode.left);
                if (currentNode.right)
                    queue.push(currentNode.right);
            }
        }
        return result;
    }
}
exports.BinaryTree = BinaryTree;
// functions
function getLeetcodeResult(name, param) {
    return new StrategyExecutor(name).execute(param);
}
function getRoot(array) {
    if (array.length === 0 || array[0] === null)
        return null;
    const root = new TreeNode(array[0]);
    const queue = [root];
    let i = 1;
    while (i < array.length) {
        const current = queue.shift();
        if (!current)
            break;
        const leftVal = array[i];
        i++;
        if (leftVal !== null) {
            const leftNode = new TreeNode(leftVal);
            current.left = leftNode;
            queue.push(leftNode);
        }
        if (i >= array.length)
            break;
        const rightVal = array[i];
        i++;
        if (rightVal !== null) {
            const rightNode = new TreeNode(rightVal);
            current.right = rightNode;
            queue.push(rightNode);
        }
    }
    return root;
}
