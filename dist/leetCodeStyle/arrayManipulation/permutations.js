"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermutationsStrategy = void 0;
class PermutationsStrategy {
    contextFunction(params) {
        const { nums } = params;
        const resultArr = [];
        const length = getCount();
        for (let i = 0; i <= length; i++) {
            resultArr.push([...nums]);
            permutate();
        }
        return resultArr;
        function getCount() {
            let count = 1;
            for (let i = 2; i <= nums.length; i++) {
                count *= i;
            }
            return count;
        }
        function permutate() {
            let i = nums.length - 2;
            while (i >= 0 && nums[i] >= nums[i + 1]) {
                i--;
            }
            if (i >= 0) {
                let j = nums.length - 1;
                while (nums[i] >= nums[j]) {
                    j--;
                }
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
            return nums;
        }
    }
}
exports.PermutationsStrategy = PermutationsStrategy;
