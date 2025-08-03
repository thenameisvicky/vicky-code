# Leetcode-Repo

A collaborative TypeScript project for implementing, testing, and sharing algorithmic solutions to Leetcode-style problems. Designed for team growth, learning, and code quality.

## 📁 Project Structure

```
Leetcode-Repo/
  ├── src/
  │   ├── Strategies/         # Algorithm implementations organized by category
  │   │     ├── arrayManipulation/  # Array manipulation algorithms
  │   │     │     ├── moveZeros.ts
  │   │     │     └── nextPermutation.ts
  │   │     ├── hashMap/            # Hash map based solutions
  │   │     │     ├── groupAnagrams.ts
  │   │     │     ├── singleNumber.ts
  │   │     │     ├── twoSum1.ts
  │   │     │     └── twoSum2.ts
  │   │     ├── pointers/           # Two-pointer and multi-pointer techniques
  │   │     │     ├── containerWithMostWater.ts
  │   │     │     ├── fourSum.ts
  │   │     │     ├── hillsAndValleysCount.ts
  │   │     │     ├── maxProductSubarry.ts
  │   │     │     ├── threeSum.ts
  │   │     │     └── threeSumClosest.ts
  │   │     ├── search/             # Binary search and search algorithms
  │   │     │     ├── binarySearch.ts
  │   │     │     ├── findInsertPosition.ts
  │   │     │     └── rotatedArraySearch.ts
  │   │     ├── slidingWindow/      # Sliding window technique
  │   │     │     ├── longSubStringNoDup.ts
  │   │     │     ├── maxSumSubarray.ts
  │   │     │     └── minSizeSubarraySum.ts
  │   │     └── type.ts             # Common types and interfaces
  │   ├── Executors/          # Code to run strategies and handle input/output
  │   │     ├── exec.ts
  │   │     └── types/
  │   │           └── arrays.ts
  │   └── index.ts            # Main entry point
  ├── package.json            # NPM scripts and dependencies
  └── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Install Dependencies
```bash
npm install
```

### Build the Project
```bash
npm run build
```

### Run the Project
```bash
npm run dev
```

## 🧩 Implemented Strategies

### Array Manipulation
- **Move Zeroes:** Move all zeroes to the end while maintaining order
- **Next Permutation:** Rearrange numbers into the next lexicographically greater permutation

### Hash Map Solutions
- **Two Sum (two approaches):** Find indices of two numbers that add up to a target
- **Group Anagrams:** Group strings that are anagrams of each other
- **Single Number:** Find the element that appears only once (bitwise XOR)

### Two-Pointer Techniques
- **Container With Most Water:** Find two lines that together with x-axis forms a container
- **Three Sum:** Find all unique triplets that sum to zero
- **Three Sum Closest:** Find three integers whose sum is closest to target
- **Four Sum:** Find all unique quadruplets that sum to target
- **Max Product Subarray:** Find the contiguous subarray with maximum product
- **Hills and Valleys Count:** Count the number of hills and valleys in an array

### Search Algorithms
- **Binary Search:** Find the position of a target in a sorted array
- **Find Insert Position:** Find the index to insert a target in a sorted array
- **Rotated Array Search:** Search in a rotated sorted array

### Sliding Window
- **Longest Substring Without Repeating Characters:** Find longest substring without duplicates
- **Maximum Sum Subarray:** Find contiguous subarray with maximum sum
- **Minimum Size Subarray Sum:** Find minimal length of contiguous subarray with sum ≥ target

## 🏗️ Adding a New Strategy

1. **Choose the appropriate category** in `src/Strategies/` based on the algorithm type
2. **Create a new class** implementing the appropriate interface (see `type.ts`)
3. **Export your class** and implement the `contextFunction` method
4. **Update `src/index.ts`** to register and execute your new strategy
5. **(Optional) Add types** in `src/Executors/types/` if needed

## 💡 Why This Structure?

- **Organized by Technique:** Strategies are grouped by algorithmic approach for easier navigation
- **Separation of Concerns:** Each strategy is independent and reusable
- **Type Safety:** TypeScript ensures fewer bugs and better collaboration
- **Scalability:** Easy to add, test, and compare multiple solutions
- **Learning Focus:** Clear categorization helps understand different algorithmic patterns

## 🤝 Contributing

Share your solutions, review each other's code, and discuss different approaches. This repo is for learning, experimenting, and improving as a team.

---

**Happy coding!** 🚀 