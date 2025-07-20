# Leetcode-Repo

A collaborative TypeScript project for implementing, testing, and sharing algorithmic solutions to Leetcode-style problems. Designed for team growth, learning, and code quality.

## 📁 Project Structure

```
Leetcode-Repo/
  ├── src/
  │   ├── Strategies/         # Individual algorithm implementations (Strategy pattern)
  │   │     ├── binarySearch.ts
  │   │     ├── findInsertPosition.ts
  │   │     ├── longSubStringNoDup.ts
  │   │     ├── minSizeSubarraySum.ts
  │   │     ├── moveZeros.ts
  │   │     ├── nextPermutation.ts
  │   │     ├── singleNumber.ts
  │   │     ├── twoSum1.ts
  │   │     ├── twoSum2.ts
  │   │     └── type.ts
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
- Fully Functioning Human Brain
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
- **Two Sum (two approaches):** Find indices of two numbers that add up to a target (hash map, two-pointer)
- **Binary Search:** Find the position of a target in a sorted array
- **Move Zeroes:** Move all zeroes to the end of the array while maintaining order
- **Minimum Size Subarray Sum:** Find the minimal length of a contiguous subarray with sum ≥ target (sliding window)
- **Longest Substring Without Repeating Characters:** Find the length of the longest substring without duplicates (hash map, sliding window)
- **Find Insert Position:** Find the index to insert a target in a sorted array (binary search)
- **Next Permutation:** Rearrange numbers into the next lexicographically greater permutation
- **Single Number:** Find the element that appears only once when all others appear twice (bitwise XOR)

## 🏗️ Adding a New Strategy
1. **Create a new class** in `src/Strategies/` (e.g., `myNewStrategy.ts`) implementing the appropriate interface (see `type.ts` or `arrays.ts`).
2. **Export your class** and implement the `contextFunction` method for your algorithm.
3. **Update `src/index.ts`** to register and execute your new strategy.
4. **(Optional) Add types** in `src/Executors/types/` if your strategy needs custom input/output types.

## 💡 Why This Structure?
- **Separation of Concerns:** Strategies are independent and reusable.
- **Type Safety:** TypeScript ensures fewer bugs and better collaboration.
- **Scalability:** Easy to add, test, and compare multiple solutions.

## 🤝 Let's Lock In!
Share your solutions, review each other's code, and discuss different approaches. This repo is for learning, experimenting, and improving as a team.

---

**Happy coding!** 