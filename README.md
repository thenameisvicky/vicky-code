# Leetcode-Repo

A collaborative TypeScript project for implementing, testing, and sharing algorithmic solutions to Leetcode-style problems. Designed for team growth, learning, and code quality.

## 📁 Project Structure

```
Leetcode-Repo/
  ├── src/
  │   ├── Strategies/         # Individual algorithm implementations
  │   │     ├── binarySearch.ts
  │   │     ├── minSizeSubarraySum.ts
  │   │     ├── moveZeros.ts
  │   │     ├── twoSum1.ts
  │   │     └── twoSum2.ts
  │   ├── Executors/          # Code to run strategies and handle input/output
  │   │     ├── exec.ts
  │   │     └── types/
  │   │           └── singleArray.ts
  │   └── index.ts            # Main entry point
  ├── dist/                   # Compiled JavaScript output
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

## 🧩 Adding a New Strategy
1. **Create a new file** in `src/Strategies/` (e.g., `myNewStrategy.ts`).
2. **Export a function** that implements your algorithm.
3. **Update `src/index.ts`** to import and execute your new strategy.
4. **(Optional) Add types** in `src/Executors/types/` if your strategy needs custom input/output types.

## 🏗️ Contributing as a Team
- **Branch off** for new features or strategies.
- **Write clear, modular code** and use TypeScript types.
- **Test your strategy** by running `npm run dev` and checking the output.
- **Document your approach** in code comments for team learning.
- **Open a PR** for review and feedback.

## 💡 Why This Structure?
- **Separation of Concerns:** Strategies are independent and reusable.
- **Type Safety:** TypeScript ensures fewer bugs and better collaboration.
- **Scalability:** Easy to add, test, and compare multiple solutions.

## 🤝 Let's Grow Together!
Share your solutions, review each other's code, and discuss different approaches. This repo is for learning, experimenting, and improving as a team.

---

**Happy coding!** 