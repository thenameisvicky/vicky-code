"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroFilledSubArrayStrategy = void 0;
class ZeroFilledSubArrayStrategy {
    contextFunction(params) {
        const { nums } = params;
        let count = 0;
        let streak = 0;
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
exports.ZeroFilledSubArrayStrategy = ZeroFilledSubArrayStrategy;
