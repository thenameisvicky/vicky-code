"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumsUpToZeroStrategy = void 0;
class SumsUpToZeroStrategy {
    contextFunction(params) {
        const { length } = params;
        if (length === 1)
            return [0];
        const array = [];
        if (length % 2 === 0) {
            for (let i = 1; i < length; i++) {
                array.push(i * -1);
                array.push(i);
            }
        }
        else {
            for (let i = 1; i < length; i++) {
                array.push(i * -1);
                array.push(i);
            }
            array.splice(length - 2, 0, 0);
        }
        return array.slice(0, length);
    }
}
exports.SumsUpToZeroStrategy = SumsUpToZeroStrategy;
