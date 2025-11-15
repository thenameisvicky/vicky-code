"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BestTimeToBuyAndSellStockStrategy = void 0;
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
