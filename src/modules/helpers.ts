import { MoveZeroStrategy } from "./leetCode/arrayManipulation/moveZeros";
import { MaximumSumSubArrayStrategy } from "./leetCode/arrayManipulation/maxSumSubarray";
import { NextPermutationStrategy } from "./leetCode/arrayManipulation/nextPermutation";
import { SumsUpToZeroStrategy } from "./leetCode/arrayManipulation/sumZero";
import { ZeroFilledSubArrayStrategy } from "./leetCode/arrayManipulation/zeroFilledSubArrlength";
import { BestTimeToBuyAndSellStockStrategy } from "./leetCode/arrayManipulation/bestTimeStockActivities";
import { PermutationsStrategy } from "./leetCode/arrayManipulation/permutations";
import { ConsecutiveOddsStrategy } from "./leetCode/arrayManipulation/consecutiveOdds";
import { TwoSumStrategy1 } from "./leetCode/hashMap/twoSum1";
import { TwoSumStrategy2 } from "./leetCode/hashMap/twoSum2";
import { SingleOccuringNumberStrategy } from "./leetCode/hashMap/singleNumber";
import { GroupAnagramsStrategy } from "./leetCode/hashMap/groupAnagrams";
import { CountElementsWithMaximumFrequencyStrategy } from "./leetCode/hashMap/countMaximumFrequence";
import { ThreeSumStrategy } from "./leetCode/pointers/threeSum";
import { ThreeSumClosestStrategy } from "./leetCode/pointers/threeSumClosest";
import { FourSumStrategy } from "./leetCode/pointers/fourSum";
import { ContainerWithMostWaterStrategy } from "./leetCode/pointers/containerWithMostWater";
import { CountHillsAndValleysStrategy } from "./leetCode/pointers/hillsAndValleysCount";
import { MaximumProductSubArrayStrategy } from "./leetCode/pointers/maxProductSubarry";
import { BinarySearchStrategy } from "./leetCode/search/binarySearch";
import { FindInsertPositionStrategy } from "./leetCode/search/findInsertPosition";
import { RotatedArraySearchStrategy } from "./leetCode/search/rotatedArraySearch";
import { LongestCommonPrefixStrategy } from "./leetCode/slidingWindow/longestCommonPrefix";
import { MinimumSizeSubarraySumStrategy } from "./leetCode/slidingWindow/minSizeSubarraySum";
import { LongestSubStrWithNoRepeatCharStrategy } from "./leetCode/slidingWindow/longSubStringNoDup";

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

  execute(data: any) {
    const result = this.strategy.function(data);
    // console.log(`[EXE]- ${this.strategyName} [RES]- ${result}`);
    return result;
  }
}

export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

export class Heap<T> {
  public data: T[];
  public compare: (a: T, b: T) => number;

  // Class constructor
  constructor(compareFn: (a: T, b: T) => number) {
    this.data = [];
    this.compare = compareFn;
  }

  insert(element: T): void {
    this.data.push(element);
    this.bubbleUp(this.data.length - 1);
  }

  peek(): T {
    return this.data[0];
  }

  remove(element: T): void {
    const index = this.data.findIndex((elem) => elem === element);
    if (index === -1) return;

    const last = this.data.pop();
    if (index < this.data.length && last) {
      this.data[index] = last;
      this.bubbleUp(index);
      this.bubbleDown(index);
    }
  }

  poll(): T | undefined {
    if (this.data.length === 0) return undefined;
    const root = this.data[0];
    const last = this.data.pop();

    if (this.data.length > 0 && last) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return root;
  }

  size(): number {
    return this.data.length;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.data[index], this.data[parent]) < 0) {
        [this.data[index], this.data[parent]] = [
          this.data[parent],
          this.data[index],
        ];
        index = parent;
      } else {
        break;
      }
    }
  }

  private bubbleDown(index: number): void {
    const length = this.data.length;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let effecientIndex = index;

      if (
        leftIndex < length &&
        this.compare(this.data[leftIndex], this.data[effecientIndex]) < 0
      ) {
        effecientIndex = leftIndex;
      }

      if (
        rightIndex < length &&
        this.compare(this.data[rightIndex], this.data[effecientIndex]) < 0
      ) {
        effecientIndex = rightIndex;
      }

      if (effecientIndex !== index) {
        [this.data[index], this.data[effecientIndex]] = [
          this.data[effecientIndex],
          this.data[index],
        ];
        index = effecientIndex;
      } else {
        break;
      }
    }
  }
}

export class BinaryTree<T> {
  private root: TreeNode<T> | null;

  constructor(root: TreeNode<T> | null) {
    this.root = root;
  }

  preOrder(
    node: TreeNode<T> | null = this.root,
    result: Array<T>
  ): Array<T> | undefined {
    if (!node) return result;
    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  postOrder(
    node: TreeNode<T> | null = this.root,
    result: Array<T>
  ): Array<T> | undefined {
    if (!node) return result;
    this.postOrder(node.right, result);
    this.postOrder(node.left, result);
    result.push(node.value);
    return result;
  }

  inOrder(
    node: TreeNode<T> | null = this.root,
    result: Array<T>
  ): Array<T> | undefined {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }

  levelOrder(node: TreeNode<T> | null = this.root, result: Array<T>): Array<T> {
    if (!node) return result;
    const queue: Array<TreeNode<T>> = [node];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode) {
        result.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }

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

export function getRoot<T>(array: Array<T | null>): TreeNode<T> | null {
  if (array.length === 0 || array[0] === null) return null;

  const root = new TreeNode<T>(array[0]);
  const queue: Array<TreeNode<T>> = [root];

  let i = 1;

  while (i < array.length) {
    const current = queue.shift();
    if (!current) break;

    const leftVal = array[i];
    i++;

    if (leftVal !== null) {
      const leftNode = new TreeNode<T>(leftVal);
      current.left = leftNode;
      queue.push(leftNode);
    }

    if (i >= array.length) break;

    const rightVal = array[i];
    i++;

    if (rightVal !== null) {
      const rightNode = new TreeNode<T>(rightVal);
      current.right = rightNode;
      queue.push(rightNode);
    }
  }

  return root;
}
