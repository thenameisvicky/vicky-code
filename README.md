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

```
Leetcode/
├── src/
│   ├── leetCodeStyle/           # Algorithm implementations by category
│   │   ├── arrayManipulation/   # Array manipulation algorithms
│   │   │   ├── moveZeros.ts     # Move zeroes to end (LeetCode 283)
│   │   │   ├── nextPermutation.ts # Next permutation (LeetCode 31)
│   │   │   ├── maxSumSubarray.ts # Maximum subarray sum (LeetCode 53)
│   │   │   └── zeroFilledSubArrlength.ts # Zero-filled subarrays (LeetCode 2348)
│   │   ├── hashMap/             # Hash map based solutions
│   │   │   ├── twoSum1.ts       # Two sum - no duplicates (LeetCode 1)
│   │   │   ├── twoSum2.ts       # Two sum - with duplicates
│   │   │   ├── groupAnagrams.ts # Group anagrams (LeetCode 49)
│   │   │   └── singleNumber.ts  # Single number (LeetCode 136)
│   │   ├── pointers/            # Two-pointer and multi-pointer techniques
│   │   │   ├── containerWithMostWater.ts # Container with most water (LeetCode 11)
│   │   │   ├── threeSum.ts      # Three sum (LeetCode 15)
│   │   │   ├── threeSumClosest.ts # Three sum closest (LeetCode 16)
│   │   │   ├── fourSum.ts       # Four sum (LeetCode 18)
│   │   │   ├── maxProductSubarry.ts # Maximum product subarray (LeetCode 152)
│   │   │   └── hillsAndValleysCount.ts # Count hills and valleys (LeetCode 2210)
│   │   ├── search/              # Binary search and search algorithms
│   │   │   ├── binarySearch.ts  # Binary search (LeetCode 704)
│   │   │   ├── findInsertPosition.ts # Search insert position (LeetCode 35)
│   │   │   └── rotatedArraySearch.ts # Search in rotated array (LeetCode 33)
│   │   ├── slidingWindow/       # Sliding window technique
│   │   │   ├── longSubStringNoDup.ts # Longest substring without repeating (LeetCode 3)
│   │   │   └── minSizeSubarraySum.ts # Minimum size subarray sum (LeetCode 209)
│   │   ├── types.ts             # Common types and interfaces
│   │   └── index.ts             # Strategy execution and testing
│   ├── Executors/               # Code execution framework
│   │   ├── problemSolvingExec.ts # Main execution logic
│   │   └── types/
│   │       └── arrays.ts        # Base types and interfaces
│   └── engineeringDrills/       # Real-world engineering problems (planned)
├── dist/                        # Compiled JavaScript output
├── package.json                 # NPM scripts and dependencies
└── tsconfig.json               # TypeScript configuration
```

## 🧩 Implemented Algorithms

### Array Manipulation
- **Move Zeroes** (LeetCode 283): Move all zeroes to the end while maintaining relative order
- **Next Permutation** (LeetCode 31): Rearrange numbers into the next lexicographically greater permutation
- **Maximum Subarray Sum** (LeetCode 53): Find the contiguous subarray with maximum sum
- **Zero-Filled Subarrays** (LeetCode 2348): Count the number of zero-filled subarrays

### Hash Map Solutions
- **Two Sum** (LeetCode 1): Find indices of two numbers that add up to a target
  - Strategy 1: Handles cases with no valid pairs
  - Strategy 2: Handles cases with duplicate elements
- **Group Anagrams** (LeetCode 49): Group strings that are anagrams of each other
- **Single Number** (LeetCode 136): Find the element that appears only once using bitwise XOR

### Two-Pointer Techniques
- **Container With Most Water** (LeetCode 11): Find two lines that form the largest container
- **Three Sum** (LeetCode 15): Find all unique triplets that sum to zero
- **Three Sum Closest** (LeetCode 16): Find three integers whose sum is closest to target
- **Four Sum** (LeetCode 18): Find all unique quadruplets that sum to target
- **Maximum Product Subarray** (LeetCode 152): Find the contiguous subarray with maximum product
- **Count Hills and Valleys** (LeetCode 2210): Count the number of hills and valleys in an array

### Search Algorithms
- **Binary Search** (LeetCode 704): Find the position of a target in a sorted array
- **Search Insert Position** (LeetCode 35): Find the index to insert a target in a sorted array
- **Search in Rotated Sorted Array** (LeetCode 33): Search in a rotated sorted array

### Sliding Window
- **Longest Substring Without Repeating Characters** (LeetCode 3): Find longest substring without duplicates
- **Minimum Size Subarray Sum** (LeetCode 209): Find minimal length of contiguous subarray with sum ≥ target

## 🏗️ Architecture & Design Patterns

### Strategy Pattern
The repository uses the Strategy pattern to organize different algorithmic approaches:
- Each algorithm implements a common interface (`BaseSingleArrayExecutionStrategy`)
- Easy to add new solutions without modifying existing code
- Consistent parameter handling and result formatting

### Type Safety
- Full TypeScript implementation with strict type checking
- Comprehensive interface definitions for all algorithm parameters
- Generic execution framework that maintains type safety

### Execution Framework
- Centralized execution through `contextExecutor` class
- Consistent logging and result handling
- Easy to test and debug individual algorithms

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
```typescript
import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { yourParams } from "../types";

export class YourStrategy implements BaseSingleArrayExecutionStrategy<'yourKey'> {
  contextFunction(params: yourParams): Promise<YourReturnType> {
    // Your implementation here
    return Promise.resolve(result);
  }
}
```

### 3. Add Types
Update `src/leetCodeStyle/types.ts` with your parameter interface:
```typescript
export interface yourParams {
  // Your parameter types
}
```

### 4. Update the Executor
Add your strategy to `src/Executors/types/arrays.ts`:
```typescript
export interface paramsMap {
  // ... existing mappings
  yourKey: yourParams;
}
```

### 5. Register and Test
Add your strategy to `src/leetCodeStyle/index.ts` and test it.

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

## 📚 Resources

- [LeetCode](https://leetcode.com/) - Practice problems
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Language reference
- [Algorithm Visualization](https://visualgo.net/) - Visual learning

---

**Happy coding and happy learning!** 🚀

*Remember: The best way to learn algorithms is to implement them yourself and then discuss different approaches with others.* 