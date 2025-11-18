"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helpers_1 = require("../../modules/helpers");
describe("String Manipulation", () => {
    describe("1513. Number of Substrings With Only 1s", () => {
        let numberOfSubstringsWith1s;
        it("Returns 9 (1, 1, 1, 1, 1, 11, 11, 11, 111) according to the input '0110111' ", () => {
            numberOfSubstringsWith1s = (0, helpers_1.getLeetcodeResult)("NUMBER_OF_SUBSTRINGS_ONES", { s: "0110111" });
            (0, chai_1.expect)(numberOfSubstringsWith1s).equal(9);
        });
    });
});
