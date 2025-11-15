"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsecutiveOddsStrategy = void 0;
class ConsecutiveOddsStrategy {
    function(params) {
        const { array } = params;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0 &&
                array[i + 1] % 2 !== 0 &&
                array[i + 2] % 2 !== 0) {
                return true;
            }
        }
        return false;
    }
}
exports.ConsecutiveOddsStrategy = ConsecutiveOddsStrategy;
