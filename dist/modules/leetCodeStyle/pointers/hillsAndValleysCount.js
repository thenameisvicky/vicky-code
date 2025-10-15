"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountHillsAndValleysStrategy = void 0;
class CountHillsAndValleysStrategy {
    contextFunction(params) {
        const { nums } = params;
        let count = 0;
        for (let i = 1; i < nums.length - 1; i++) {
            if (nums[i] === nums[i - 1])
                continue;
            let left = i - 1;
            while (left >= 0 && nums[left] === nums[i]) {
                left--;
            }
            let right = i + 1;
            while (right < nums.length && nums[right] === nums[i]) {
                right++;
            }
            if ((nums[left] < nums[i] && nums[i] > nums[right]) ||
                (nums[left] > nums[i] && nums[i] < nums[right])) {
                count++;
            }
        }
        return count;
    }
}
exports.CountHillsAndValleysStrategy = CountHillsAndValleysStrategy;
