# Leetcode-Repo

A collaborative TypeScript project for implementing, testing, and sharing algorithmic solutions to Leetcode-style problems and real-world engineering challenges. Designed for team growth, learning, and code quality.

## 📁 Project Structure

```
Leetcode-Repo/
  ├── src/
  │   ├── leetCodeStyle/      # Algorithm implementations organized by category
  │   │     ├── arrayManipulation/  # Array manipulation algorithms
  │   │     │     ├── moveZeros.ts
  │   │     │     ├── nextPermutation.ts
  │   │     │     └── maxSumSubarray.ts
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
  │   │     │     └── minSizeSubarraySum.ts
  │   │     ├── types.ts            # Common types and interfaces
  │   │     └── index.ts            # Strategy execution and testing
  │   ├── engineeringDrills/   # Real-world engineering problems and solutions
  │   │     ├── systemDesign/      # System architecture and design problems
  │   │     ├── dataStructures/    # Custom data structure implementations
  │   │     ├── optimization/      # Performance and efficiency problems
  │   │     ├── integration/       # API integration and microservice problems
  │   │     └── testing/           # Testing strategies and test-driven development
  │   ├── Executors/          # Code to run strategies and handle input/output
  │   │     ├── problemSolvingExec.ts
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

## 🏭 Engineering Drills

Beyond traditional algorithmic challenges, this section focuses on real-world engineering problems and production-ready solutions.

### System Design
- **Rate Limiting:** Implement various rate limiting strategies (Token Bucket, Leaky Bucket, Fixed Window)
- **Caching Strategies:** LRU, LFU, and distributed caching implementations
- **Load Balancing:** Round-robin, least connections, and weighted algorithms

### Data Structures
- **Custom Implementations:** Specialized data structures for specific use cases
- **Performance Optimization:** Memory-efficient and fast data structure variants
- **Concurrent Structures:** Thread-safe data structures for multi-threaded environments

### Performance & Optimization
- **Database Query Optimization:** Index strategies, query planning, and performance tuning
- **Memory Management:** Efficient memory allocation and garbage collection strategies
- **Algorithm Complexity:** Time and space complexity optimization techniques

### API & Integration
- **RESTful API Design:** Best practices, versioning, and error handling
- **Microservice Communication:** Service discovery, load balancing, and fault tolerance
- **Authentication & Authorization:** JWT, OAuth, and role-based access control

### Testing & Quality
- **Test-Driven Development:** Writing tests before implementation
- **Performance Testing:** Load testing, stress testing, and benchmarking
- **Security Testing:** Vulnerability assessment and penetration testing

## 🏗️ Adding New Solutions

### LeetCode Strategies
1. **Choose the appropriate category** in `src/leetCodeStyle/` based on the algorithm type
2. **Create a new class** implementing the appropriate interface (see `types.ts`)
3. **Export your class** and implement the `contextFunction` method
4. **Update `src/leetCodeStyle/index.ts`** to register and execute your new strategy
5. **(Optional) Add types** in `src/leetCodeStyle/types.ts` if needed

### Engineering Drills
1. **Choose the appropriate category** in `src/engineeringDrills/` based on the problem type
2. **Create a new module** with clear problem description and solution
3. **Include tests** and performance benchmarks
4. **Document the approach** and real-world applications
5. **Update the relevant section** in this README

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