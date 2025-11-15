# LeetCode Practice Repository

A comprehensive TypeScript project for implementing, testing, and sharing algorithmic solutions to LeetCode problems. This repository is designed for learning, practicing, and improving algorithmic problem-solving skills with a focus on clean, maintainable code.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd Leetcode

# Install dependencies
npm install

# Build the project
npm run build

# Run LeetCode solutions
npm run leetcodeDev
```

## 📁 Project Structure

```bash
Leetcode/
├── src/
│   ├── modules/
│   │   ├── helpers.ts           # Core strategy interface and executor
│   │   ├── leetCodeStyle/       # Algorithm implementations by category
│   │   │   ├── arrayManipulation/   # Array manipulation algorithms
│   │   │   │   ├── moveZeros.ts     # Move zeroes to end (LeetCode 283)
│   │   │   │   ├── nextPermutation.ts # Next permutation (LeetCode 31)
│   │   │   │   ├── maxSumSubarray.ts # Maximum subarray sum (LeetCode 53)
│   │   │   │   ├── zeroFilledSubArrlength.ts # Zero-filled subarrays (LeetCode 2348)
│   │   │   │   ├── sumZero.ts       # Find N unique integers sum up to zero (LeetCode 1304)
│   │   │   │   ├── bestTimeStockActivities.ts # Best time to buy/sell stock (LeetCode 121)
│   │   │   │   ├── permutations.ts  # Permutations (LeetCode 46)
│   │   │   │   └── consecutiveOdds.ts # Consecutive odds check
│   │   │   ├── hashMap/             # Hash map based solutions
│   │   │   │   ├── twoSum1.ts       # Two sum - hash map approach (LeetCode 1)
│   │   │   │   ├── twoSum2.ts       # Two sum - two pointers approach
│   │   │   │   ├── groupAnagrams.ts # Group anagrams (LeetCode 49)
│   │   │   │   ├── singleNumber.ts  # Single number (LeetCode 136)
│   │   │   │   └── countMaximumFrequence.ts # Count elements with max frequency
│   │   │   ├── pointers/            # Two-pointer and multi-pointer techniques
│   │   │   │   ├── containerWithMostWater.ts # Container with most water (LeetCode 11)
│   │   │   │   ├── threeSum.ts      # Three sum (LeetCode 15)
│   │   │   │   ├── threeSumClosest.ts # Three sum closest (LeetCode 16)
│   │   │   │   ├── fourSum.ts       # Four sum (LeetCode 18)
│   │   │   │   ├── maxProductSubarry.ts # Maximum product subarray (LeetCode 152)
│   │   │   │   └── hillsAndValleysCount.ts # Count hills and valleys (LeetCode 2210)
│   │   │   ├── search/              # Binary search and search algorithms
│   │   │   │   ├── binarySearch.ts  # Binary search (LeetCode 704)
│   │   │   │   ├── findInsertPosition.ts # Search insert position (LeetCode 35)
│   │   │   │   └── rotatedArraySearch.ts # Search in rotated array (LeetCode 33)
│   │   │   ├── slidingWindow/       # Sliding window technique
│   │   │   │   ├── longSubStringNoDup.ts # Longest substring without repeating (LeetCode 3)
│   │   │   │   ├── minSizeSubarraySum.ts # Minimum size subarray sum (LeetCode 209)
│   │   │   │   └── longestCommonPrefix.ts # Longest common prefix (LeetCode 14)
│   │   │   └── index.ts             # Strategy execution examples
│   │   └── engineeringDrills/       # Real-world engineering problems
│   │       ├── binaryTree.ts
│   │       ├── taskManager.ts
│   │       ├── kthLargestHeap.ts
│   │       └── bankSystem.ts
├── dist/                            # Compiled JavaScript output
├── Memory/                          # Personal progress tracking
├── package.json                     # NPM scripts and dependencies
└── tsconfig.json                    # TypeScript configuration
```

## 🧩 Implemented Algorithms

### Array Manipulation (8 problems)

- **Move Zeroes** (LeetCode 283): Move all zeroes to the end while maintaining relative order
- **Next Permutation** (LeetCode 31): Rearrange numbers into the next lexicographically greater permutation
- **Maximum Subarray Sum** (LeetCode 53): Find the contiguous subarray with maximum sum (Kadane's Algorithm)
- **Zero-Filled Subarrays** (LeetCode 2348): Count the number of zero-filled subarrays
- **Find N Unique Integers Sum up to Zero** (LeetCode 1304): Construct array of n unique integers that sum to zero
- **Best Time to Buy and Sell Stock** (LeetCode 121): Maximum profit from one transaction
- **Permutations** (LeetCode 46): Generate all permutations of an array
- **Consecutive Odds**: Check if array contains three consecutive odd numbers

### Hash Map Solutions (5 problems)

- **Two Sum** (LeetCode 1): Find indices of two numbers that add up to a target
  - Strategy 1: Hash map approach for unsorted arrays
  - Strategy 2: Two pointers approach for sorted arrays
- **Group Anagrams** (LeetCode 49): Group strings that are anagrams of each other
- **Single Number** (LeetCode 136): Find the element that appears only once using bitwise XOR
- **Count Elements With Maximum Frequency**: Count elements that appear at maximum frequency

### Two-Pointer Techniques (6 problems)

- **Container With Most Water** (LeetCode 11): Find two lines that form the largest container
- **Three Sum** (LeetCode 15): Find all unique triplets that sum to zero
- **Three Sum Closest** (LeetCode 16): Find three integers whose sum is closest to target
- **Four Sum** (LeetCode 18): Find all unique quadruplets that sum to target
- **Maximum Product Subarray** (LeetCode 152): Find the contiguous subarray with maximum product
- **Count Hills and Valleys** (LeetCode 2210): Count the number of hills and valleys in an array

### Search Algorithms (3 problems)

- **Binary Search** (LeetCode 704): Find the position of a target in a sorted array
- **Search Insert Position** (LeetCode 35): Find the index to insert a target in a sorted array
- **Search in Rotated Sorted Array** (LeetCode 33): Search in a rotated sorted array

### Sliding Window (3 problems)

- **Longest Substring Without Repeating Characters** (LeetCode 3): Find longest substring without duplicates
- **Minimum Size Subarray Sum** (LeetCode 209): Find minimal length of contiguous subarray with sum ≥ target
- **Longest Common Prefix** (LeetCode 14): Find the longest common prefix string amongst an array of strings

**Total: 25 LeetCode problems implemented with unified strategy pattern**

## 🏗️ Architecture & Design Patterns

### Unified Strategy Pattern

The repository uses a **unified Strategy pattern** with a centralized executor:

#### Core Components

1. **`LeetcodeStrategy<T, K>` Interface**
   - Generic interface where `T` is the input parameter type and `K` is the return type
   - All strategies implement a single `function(params: T): K` method
   - Ensures type safety and consistent interface across all solutions

2. **`StrategyExecutor` Class**
   - Centralized executor with a static `strategyMap` containing all registered strategies
   - Each strategy is instantiated once and reused
   - Provides consistent execution, logging, and error handling

3. **`getLeetcodeResult()` Function**
   - Simple, type-safe function to execute any strategy
   - Usage: `getLeetcodeResult("STRATEGY_NAME", params)`
   - Automatically handles execution and logging

#### Architecture Benefits

- **Type Safety**: Full TypeScript generics ensure compile-time type checking
- **Consistency**: All strategies follow the same interface pattern
- **Maintainability**: Easy to add new strategies without modifying existing code
- **Testability**: Each strategy can be tested independently
- **Scalability**: Centralized registry makes it easy to manage 25+ strategies

#### Example Usage

```typescript
import { getLeetcodeResult } from "../helpers";

// Execute any strategy with type-safe parameters
getLeetcodeResult("TWO_SUM_1", { nums: [2, 7, 11, 15], target: 9 });
getLeetcodeResult("BINARY_SEARCH", { nums: [1, 2, 3, 4, 5], target: 3 });
getLeetcodeResult("THREE_SUM", { nums: [-1, 0, 1, 2, -1, -4] });
```

## 🚀 Running Solutions

### Development Mode

```bash
npm run leetcodeDev
```

This runs all implemented algorithms with predefined test cases and displays results.

### Build & Run

```bash
# Build TypeScript to JavaScript
npm run build

# Run the compiled version
node dist/leetCodeStyle/index.js
```

## 📝 Adding New Solutions

### 1. Choose the Right Category

Place your solution in the appropriate directory based on the algorithm type:

- `arrayManipulation/` - Array manipulation problems
- `hashMap/` - Hash map based solutions
- `pointers/` - Two-pointer techniques
- `search/` - Binary search and search algorithms
- `slidingWindow/` - Sliding window problems

### 2. Implement the Strategy Interface

Create a new file in the appropriate category directory:

```typescript
import { LeetcodeStrategy } from "../../helpers";

export class YourStrategyNameStrategy
  implements LeetcodeStrategy<{ param1: type1; param2: type2 }, ReturnType>
{
  function(params: { param1: type1; param2: type2 }): ReturnType {
    // Your implementation here
    const { param1, param2 } = params;
    // ... algorithm logic
    return result;
  }
}
```

### 3. Register in Strategy Map

Add your strategy to `src/modules/helpers.ts`:

```typescript
// 1. Import your strategy
import { YourStrategyNameStrategy } from "./leetCodeStyle/category/yourFile";

// 2. Add to strategyMap
export class StrategyExecutor {
  static strategyMap = {
    // ... existing strategies
    YOUR_STRATEGY_NAME: new YourStrategyNameStrategy(),
  };
}
```

### 4. Add Execution Example

Add an example in `src/modules/leetCodeStyle/index.ts`:

```typescript
import { getLeetcodeResult } from "../helpers";

// Your strategy example
getLeetcodeResult("YOUR_STRATEGY_NAME", {
  param1: value1,
  param2: value2,
});
```

### 5. Test Your Solution

Run the project to test your new strategy:

```bash
npm run leetcodeDev
```

### Strategy Naming Convention

- Strategy class: `YourProblemStrategy` (PascalCase)
- Strategy key: `YOUR_PROBLEM_NAME` (UPPER_SNAKE_CASE)
- File name: `yourProblem.ts` (camelCase)

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-algorithm-name`
3. **Implement your solution** following the existing patterns
4. **Add appropriate tests** and edge cases
5. **Update documentation** if needed
6. **Submit a pull request** with a clear description

### Pull Request Guidelines

- Use the provided PR template
- Include the LeetCode problem number and link
- Describe your approach and time/space complexity
- Test with multiple edge cases
- Ensure code follows the existing style

## 🎯 Learning Goals

This repository is designed to help you:

- **Master fundamental algorithms** and data structures
- **Understand different problem-solving approaches** (two pointers, sliding window, etc.)
- **Practice clean, maintainable code** with TypeScript
- **Learn from others** through code reviews and discussions
- **Build a portfolio** of algorithmic solutions

## DSA you should master

| Area                         | Key Topics                         | LeetCode practice count |
| ---------------------------- | ---------------------------------- | ----------------------- |
| **Arrays & Strings**         | Two pointers, sliding window       | 30                      |
| **Hashing**                  | HashMap, frequency maps            | 20                      |
| **Linked Lists**             | Reverse, detect cycle, merge       | 15                      |
| **Stacks & Queues**          | Monotonic stack, min stack         | 15                      |
| **Trees / BST / Graphs**     | DFS, BFS, recursion, shortest path | 40                      |
| **Dynamic Programming**      | Knapsack, subsequence, grid paths  | 30                      |
| **Greedy / Sorting**         | Interval, activity selection       | 15                      |
| **System Design (optional)** | REST APIs, microservices, scaling  | 10 small case studies   |

## 📚 Resources

- [LeetCode](https://leetcode.com/) - Practice problems
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Language reference
- [Algorithm Visualization](https://visualgo.net/) - Visual learning

---

**Happy coding and happy learning!** 🚀

*Remember: The best way to learn algorithms is to implement them yourself and then discuss different approaches with others.*
