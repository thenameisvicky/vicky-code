import { expect } from "chai";
import { getLeetcodeResult } from "../../modules/helpers";

describe("Sliding Window", () => {
  describe("14. Longest Common Prefix", () => {
    it("Returns the longest common prefix 'fl' according to the input ['flower','flow','flight']", () => {
      const longestCommonPrefix = getLeetcodeResult("LONGEST_COMMON_PREFIX", {
        array: ["flower", "flow", "flight"],
      });
      expect(longestCommonPrefix).equal("fl");
    });

    it("Returns the longest common prefix '' according to the input ['dog','racecar','car']", () => {
      const longestCommonPrefix = getLeetcodeResult("LONGEST_COMMON_PREFIX", {
        array: ["dog", "racecar", "car"],
      });
      expect(longestCommonPrefix).equal("");
    });
  });
});
