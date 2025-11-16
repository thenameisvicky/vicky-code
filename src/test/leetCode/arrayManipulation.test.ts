import { expect } from "chai";
import { getLeetcodeResult } from "../../modules/helpers";

describe("arrayManipulation", () => {
  describe("121. Best Time to Buy and Sell Stock", () => {
    it("should return 0 when prices are strictly decreasing", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [9, 7, 5, 3, 1],
        }
      );
      expect(maximumProfit).equal(0);
    });

    it("should return maximum profit when prices are strictly increasing", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [1, 2, 3, 4, 5],
        }
      );
      expect(maximumProfit).equal(4);
    });

    it("should return correct profit for mixed prices", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [7, 1, 5, 3, 6, 4],
        }
      );
      expect(maximumProfit).equal(5);
    });

    it("should return 0 when there is only one price", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [5],
        }
      );
      expect(maximumProfit).equal(0);
    });

    it("should return 0 when prices are all the same", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [5, 5, 5, 5, 5],
        }
      );
      expect(maximumProfit).equal(0);
    });

    it("should return correct profit for two prices with profit opportunity", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [1, 2],
        }
      );
      expect(maximumProfit).equal(1);
    });

    it("should return 0 for two prices without profit opportunity", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [2, 1],
        }
      );
      expect(maximumProfit).equal(0);
    });

    it("should return maximum profit when best buy is early and sell is late", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [2, 4, 1, 7, 3, 9],
        }
      );
      expect(maximumProfit).equal(8);
    });

    it("should handle prices with multiple profit opportunities correctly", async () => {
      const maximumProfit = await getLeetcodeResult(
        "BEST_TIME_TO_BUY_AND_SELL_STOCK",
        {
          array: [3, 3, 5, 0, 0, 3, 1, 4],
        }
      );
      expect(maximumProfit).equal(4);
    });
  });
});
