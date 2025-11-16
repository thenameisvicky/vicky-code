import { expect } from "chai";
import { getLeetcodeResult } from "../../modules/helpers";

describe("Sliding Window", () => {
  describe("14. Longest Common Prefix", () => {
    let longestCommonPrefix;
    it("Returns 'fl' according to the input ['flower','flow','flight']", () => {
      longestCommonPrefix = getLeetcodeResult("LONGEST_COMMON_PREFIX", {
        array: ["flower", "flow", "flight"],
      });
      expect(longestCommonPrefix).equal("fl");
    });

    it("Returns '' according to the input ['dog','racecar','car']", () => {
      longestCommonPrefix = getLeetcodeResult("LONGEST_COMMON_PREFIX", {
        array: ["dog", "racecar", "car"],
      });
      expect(longestCommonPrefix).equal("");
    });

    it("Returns 'd' according to the input  ['daughter', 'doctor','dawn', 'danger', 'damn', 'dam', 'dummy', 'dumb']", () => {
      longestCommonPrefix = getLeetcodeResult("LONGEST_COMMON_PREFIX", {
        array: [
          "daughter",
          "doctor",
          "dawn",
          "danger",
          "damn",
          "dam",
          "dummy",
          "dumb",
          "dummy",
        ],
      });
      expect(longestCommonPrefix).equal("d");
    });

    it("Returns 'inter' according to the input ['interview', 'internet', 'internal', 'interval']", () => {
      longestCommonPrefix = getLeetcodeResult("LONGEST_COMMON_PREFIX", {
        array: ["interview", "internet", "internal", "interval"],
      });
      expect(longestCommonPrefix).equal("inter");
    });

    it("Returns '' according to the input ['','','','']", () => {
      longestCommonPrefix = getLeetcodeResult("LONGEST_COMMON_PREFIX", {
        array: ["", "", "", ""],
      });
      expect(longestCommonPrefix).equal("");
    });
  });

  describe("3. Longest Substring Without Repeating Characters", () => {
    let longestSubstringWithoutDuplicate;
    it("Returns 3 ( abc ) according to the input 'abcabcbb'", () => {
      longestSubstringWithoutDuplicate = getLeetcodeResult(
        "LONGEST_SUBSTRING_NO_REPEAT_CHAR",
        { s: "abcabcbb" }
      );
      expect(longestSubstringWithoutDuplicate).equal(3);
    });

    it("Returns 3 ( qre ) according to the input 'aaccbbddppooiikklllmmooppqqrerr'", () => {
      longestSubstringWithoutDuplicate = getLeetcodeResult(
        "LONGEST_SUBSTRING_NO_REPEAT_CHAR",
        { s: "aaccbbddppooiikklllmmooppqqrerr" }
      );
      expect(longestSubstringWithoutDuplicate).equal(3);
    });

    it("Returns 0 ( '' ) according to the input '' ", () => {
      longestSubstringWithoutDuplicate = getLeetcodeResult(
        "LONGEST_SUBSTRING_NO_REPEAT_CHAR",
        { s: "" }
      );
      expect(longestSubstringWithoutDuplicate).equal(0);
    });

    it("Returns 2 ( cd ) according to the input 'eeccd' ", () => {
      longestSubstringWithoutDuplicate = getLeetcodeResult(
        "LONGEST_SUBSTRING_NO_REPEAT_CHAR",
        { s: "eeccd" }
      );
      expect(longestSubstringWithoutDuplicate).equal(2);
    });

    it("Returns 1 ( e ) according to the input 'e' ", () => {
      longestSubstringWithoutDuplicate = getLeetcodeResult(
        "LONGEST_SUBSTRING_NO_REPEAT_CHAR",
        { s: "e" }
      );
      expect(longestSubstringWithoutDuplicate).equal(1);
    });
  });
});
