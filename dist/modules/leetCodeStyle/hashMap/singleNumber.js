"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleOccuringNumberStrategy = void 0;
class SingleOccuringNumberStrategy {
    function(params) {
        const { num } = params;
        let result = 0;
        for (const n of num) {
            result ^= n;
        }
        return result;
    }
}
exports.SingleOccuringNumberStrategy = SingleOccuringNumberStrategy;
