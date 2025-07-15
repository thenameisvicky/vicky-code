"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoSumStrategy1 = void 0;
class TwoSumStrategy1 {
    async contextFunction(params) {
        const { nums, target } = params;
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const completement = target && target - nums[i];
            if (map.has(completement)) {
                return Promise.resolve([map.get(completement), i]);
            }
            map.set(nums[i], i);
        }
        return Promise.resolve([-1, -1]);
    }
}
exports.TwoSumStrategy1 = TwoSumStrategy1;
