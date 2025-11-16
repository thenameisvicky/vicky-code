"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helpers_1 = require("../../modules/helpers");
describe("Sliding Window", () => {
    describe("14. Longest Common Prefix", () => {
        let longestCommonPrefix;
        it("Returns 'fl' according to the input ['flower','flow','flight']", () => {
            longestCommonPrefix = (0, helpers_1.getLeetcodeResult)("LONGEST_COMMON_PREFIX", {
                array: ["flower", "flow", "flight"],
            });
            (0, chai_1.expect)(longestCommonPrefix).equal("fl");
        });
        it("Returns '' according to the input ['dog','racecar','car']", () => {
            longestCommonPrefix = (0, helpers_1.getLeetcodeResult)("LONGEST_COMMON_PREFIX", {
                array: ["dog", "racecar", "car"],
            });
            (0, chai_1.expect)(longestCommonPrefix).equal("");
        });
        it("Returns 'd' according to the input  ['daughter', 'doctor','dawn', 'danger', 'damn', 'dam', 'dummy', 'dumb']", () => {
            longestCommonPrefix = (0, helpers_1.getLeetcodeResult)("LONGEST_COMMON_PREFIX", {
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
            (0, chai_1.expect)(longestCommonPrefix).equal("d");
        });
        it("Returns 'inter' according to the input ['interview', 'internet', 'internal', 'interval']", () => {
            longestCommonPrefix = (0, helpers_1.getLeetcodeResult)("LONGEST_COMMON_PREFIX", {
                array: ["interview", "internet", "internal", "interval"],
            });
            (0, chai_1.expect)(longestCommonPrefix).equal("inter");
        });
        it("Returns '' according to the input ['','','','']", () => {
            longestCommonPrefix = (0, helpers_1.getLeetcodeResult)("LONGEST_COMMON_PREFIX", {
                array: ["", "", "", ""],
            });
            (0, chai_1.expect)(longestCommonPrefix).equal("");
        });
    });
    describe("3. Longest Substring Without Repeating Characters", () => {
        let longestSubstringWithoutDuplicate;
        it("Returns 3 ( abc ) according to the input 'abcabcbb'", () => {
            longestSubstringWithoutDuplicate = (0, helpers_1.getLeetcodeResult)("LONGEST_SUBSTRING_NO_REPEAT_CHAR", { s: "abcabcbb" });
            (0, chai_1.expect)(longestSubstringWithoutDuplicate).equal(3);
        });
        it("Returns 3 ( qre ) according to the input 'aaccbbddppooiikklllmmooppqqrerr'", () => {
            longestSubstringWithoutDuplicate = (0, helpers_1.getLeetcodeResult)("LONGEST_SUBSTRING_NO_REPEAT_CHAR", { s: "aaccbbddppooiikklllmmooppqqrerr" });
            (0, chai_1.expect)(longestSubstringWithoutDuplicate).equal(3);
        });
        it("Returns 0 ( '' ) according to the input '' ", () => {
            longestSubstringWithoutDuplicate = (0, helpers_1.getLeetcodeResult)("LONGEST_SUBSTRING_NO_REPEAT_CHAR", { s: "" });
            (0, chai_1.expect)(longestSubstringWithoutDuplicate).equal(0);
        });
        it("Returns 2 ( cd ) according to the input 'eeccd' ", () => {
            longestSubstringWithoutDuplicate = (0, helpers_1.getLeetcodeResult)("LONGEST_SUBSTRING_NO_REPEAT_CHAR", { s: "eeccd" });
            (0, chai_1.expect)(longestSubstringWithoutDuplicate).equal(2);
        });
        it("Returns 1 ( e ) according to the input 'e' ", () => {
            longestSubstringWithoutDuplicate = (0, helpers_1.getLeetcodeResult)("LONGEST_SUBSTRING_NO_REPEAT_CHAR", { s: "e" });
            (0, chai_1.expect)(longestSubstringWithoutDuplicate).equal(1);
        });
    });
});
