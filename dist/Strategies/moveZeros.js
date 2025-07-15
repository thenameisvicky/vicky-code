"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveZeroStrategy = void 0;
class MoveZeroStrategy {
    async function(nums) {
        let k = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                nums[k] = nums[i];
                k++;
            }
        }
        for (let i = k; i < nums.length; i++) {
            nums[i] = 0;
        }
        console.log(`Array after Moved Zeros: ${nums}`);
    }
}
exports.MoveZeroStrategy = MoveZeroStrategy;
