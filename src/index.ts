import { exec } from "./Executors/exec";
import { MoveZeroStrategy } from "./Strategies/moveZeros";
import { TwoSumStrategy1 } from "./Strategies/twoSum1";
import { TwoSumStrategy2 } from "./Strategies/twoSum2";

//TwoSum1
const twoSum1 = new TwoSumStrategy1();
exec([1, 2, 3, 4, 5], twoSum1, 10);
//TwoSum2
const twoSum2 = new TwoSumStrategy2();
exec([1, 2, 3, 4, 5], twoSum2, 9);
//MovedZeros
const moveZeros = new MoveZeroStrategy();
exec([1, 0, 2, 0, 9, 0, 12], moveZeros);
