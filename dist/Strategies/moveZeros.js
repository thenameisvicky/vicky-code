"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveZeroStrategy = void 0;
class MoveZeroStrategy {
    async contextFunction(params) {
        const { nums } = params;
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
        return nums;
    }
}
exports.MoveZeroStrategy = MoveZeroStrategy;
