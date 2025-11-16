"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helpers_1 = require("../../modules/helpers");
describe("Array Manipulation", () => {
    describe("121. Best Time to Buy and Sell Stock", () => {
        let maximumProfit;
        it("Returns 0 according to the input [9, 7, 5, 3, 1]", () => {
            maximumProfit = (0, helpers_1.getLeetcodeResult)("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
                array: [9, 7, 5, 3, 1],
            });
            (0, chai_1.expect)(maximumProfit).equal(0);
        });
        it("Returns 4 according to the input [1, 2, 3, 4, 5]", () => {
            maximumProfit = (0, helpers_1.getLeetcodeResult)("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
                array: [1, 2, 3, 4, 5],
            });
            (0, chai_1.expect)(maximumProfit).equal(4);
        });
        it("Returns 5 according to the input [7, 1, 5, 3, 6, 4]", () => {
            maximumProfit = (0, helpers_1.getLeetcodeResult)("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
                array: [7, 1, 5, 3, 6, 4],
            });
            (0, chai_1.expect)(maximumProfit).equal(5);
        });
        it("Returns 0 according to the input [5]", () => {
            maximumProfit = (0, helpers_1.getLeetcodeResult)("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
                array: [5],
            });
            (0, chai_1.expect)(maximumProfit).equal(0);
        });
        it("Returns 0 according to the input [5, 5, 5, 5, 5]", () => {
            maximumProfit = (0, helpers_1.getLeetcodeResult)("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
                array: [5, 5, 5, 5, 5],
            });
            (0, chai_1.expect)(maximumProfit).equal(0);
        });
    });
    describe("1550. Three Consecutive Odds", () => {
        let threeConsecutiveOdds;
        it("Returns false according to the input [2,6,4,1]", () => {
            threeConsecutiveOdds = (0, helpers_1.getLeetcodeResult)("CONSECUTIVE_ODDS", {
                array: [2, 6, 4, 1],
            });
            (0, chai_1.expect)(threeConsecutiveOdds).equal(false);
        });
        it("Returns true according to the input [7,2,5,10,13,17,22,25,31,47]", () => {
            threeConsecutiveOdds = (0, helpers_1.getLeetcodeResult)("CONSECUTIVE_ODDS", {
                array: [7, 2, 5, 10, 13, 17, 22, 25, 31, 47],
            });
            (0, chai_1.expect)(threeConsecutiveOdds).equal(true);
        });
        it("Returns true according to the input [0, 0.1, 0.3, 0.5, 5, 7, 9, 0.9, 11, 13, 15]", () => {
            threeConsecutiveOdds = (0, helpers_1.getLeetcodeResult)("CONSECUTIVE_ODDS", {
                array: [0, 0.1, 0.3, 0.5, 5, 7, 9, 0.9, 11, 13, 15],
            });
            (0, chai_1.expect)(threeConsecutiveOdds).equal(true);
        });
        it("Returns false according to the input [0, 0, 100, 100000, 1000000, 10, 2000000, 7600000, 9400000, 130, 120]", () => {
            threeConsecutiveOdds = (0, helpers_1.getLeetcodeResult)("CONSECUTIVE_ODDS", {
                array: [
                    0, 0, 100, 100000, 1000000, 10, 2000000, 7600000, 9400000, 130, 120,
                ],
            });
            (0, chai_1.expect)(threeConsecutiveOdds).equal(false);
        });
        it("Returns true according to the input [1.5, 3.7, 5.9]", () => {
            threeConsecutiveOdds = (0, helpers_1.getLeetcodeResult)("CONSECUTIVE_ODDS", {
                array: [1.5, 3.7, 5.9],
            });
            (0, chai_1.expect)(threeConsecutiveOdds).equal(true);
        });
    });
});
