var findKthLargest = function (nums: Array<number>, k: number) {
    let sorted = [];
    let used = new Set();

    while (sorted.length < k) {
        let maxIndex = -1;
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            if (!used.has(i) && nums[i] > max) {
                max = nums[i];
                maxIndex = i;
            }
        }

        sorted.push(max);
        used.add(maxIndex);
    }

    return sorted[k - 1];
};