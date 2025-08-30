"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroFilledSubArrayStrategy = void 0;
class zeroFilledSubArrayStrategy {
    contextFunction(params) {
        const { nums } = params;
        let count = 0, streak = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                streak++;
                count += streak;
            }
            else {
                streak = 0;
            }
        }
        return count;
    }
}
exports.zeroFilledSubArrayStrategy = zeroFilledSubArrayStrategy;
