"use strict";
// Best time to buy and sell stock
function bestTimeToSellStock(array = [9, 7, 5, 3, 1]) {
    let minPrice = 0;
    let maxPrice = 0;
    for (let i = 0; i < array.length; i++) {
        minPrice = Math.min(minPrice, array[i]);
        if (array[i] < minPrice) {
            minPrice = Math.min(minPrice, array[i]);
            const profit = Math.floor(minPrice - array[i]);
            maxPrice = Math.max(maxPrice, profit);
        }
    }
    return maxPrice;
}
// Consecutive Odds
function consecutiveOdds(array = [0, 0, 0, 0, 0, 1, 23, 5, 0, 0, 0, 7, 5, 3]) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 && array[i + 1] % 2 && array[i + 3] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
// Maximum sum subarray sum
function maxSumSubarray(nums = [1000000, -1000000, 1000000]) {
    let maxSum = nums[0];
    let currentSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
}
// move zeros to end
function moveToEnd(nums = [0, 0, 1, 0, 2]) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[k] = nums[i];
            k++;
        }
    }
    for (let i = k + 1; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}
// Next permutation
function nextPermutate(nums = [1, 2, 3]) {
    // Second greatest from the end
    let i = nums.length - 2;
    while (i > 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    // First greatest from the end
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[i] >= nums[j]) {
            j--;
        }
        // Now Swap to get next permutation
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // Swapping other pairs
    const left = i + 1;
    const right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    return nums;
}
// Sumuptozero
function sumUpToZero(length = 2) {
    const array = [];
    if (length % 2 == 0) {
        for (let i = 0; i <= length; i++) {
            array.push(i * -1);
            array.push(i);
        }
    }
    else {
        for (let i = 0; i <= length; i++) {
            array.push(i * -1);
            array.push(i);
        }
        array.splice(length - 2, 0, 0);
    }
    array.splice(0, length);
}
