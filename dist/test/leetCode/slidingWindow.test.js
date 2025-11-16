"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helpers_1 = require("../../modules/helpers");
describe("Sliding Window", () => {
    describe("14. Longest Common Prefix", () => {
        it("Returns the longest common prefix 'fl' according to the input ['flower','flow','flight']", () => {
            const longestCommonPrefix = (0, helpers_1.getLeetcodeResult)("LONGEST_COMMON_PREFIX", {
                array: ["flower", "flow", "flight"],
            });
            (0, chai_1.expect)(longestCommonPrefix).equal("fl");
        });
    });
});
