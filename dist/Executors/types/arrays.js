"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextExecutor = void 0;
class contextExecutor {
    constructor(Strategy) {
        this.strategy = Strategy;
    }
    execute(params) {
        return this.strategy.contextFunction(params);
    }
}
exports.contextExecutor = contextExecutor;
