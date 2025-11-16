"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BestTimeToBuyAndSellStockStrategy = void 0;
/**
 * Best Time to Buy and Sell Stock (LeetCode 121)
 *
 * Problem: You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different
 * day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Constraints:
 * - You can only hold at most one share of the stock at any time.
 * - You can buy it then immediately sell it on the same day.
 *
 * Example:
 * Input: [7, 1, 5, 3, 6, 4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *
 * @param params - Object containing array of stock prices
 * @returns Maximum profit that can be achieved
 */
class BestTimeToBuyAndSellStockStrategy {
    function(params) {
        const { array } = params;
        let min = Infinity;
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            min = Math.min(array[i], min);
            if (min < array[i]) {
                const profit = array[i] - min;
                max = Math.max(profit, max);
            }
        }
        return max;
    }
}
exports.BestTimeToBuyAndSellStockStrategy = BestTimeToBuyAndSellStockStrategy;
