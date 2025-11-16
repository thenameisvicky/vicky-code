"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoSumStrategy1 = void 0;
class TwoSumStrategy1 {
    function(params) {
        const { nums, target } = params;
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const completement = target && target - nums[i];
            if (map.has(completement)) {
                return [map.get(completement), i];
            }
            map.set(nums[i], i);
        }
        return [-1, -1];
    }
}
exports.TwoSumStrategy1 = TwoSumStrategy1;
