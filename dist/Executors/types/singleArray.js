"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextExecutor = void 0;
class contextExecutor {
    constructor(Strategy) {
        this.strategy = Strategy;
    }
    async execute(params) {
        return await this.strategy.contextFunction(params);
    }
}
exports.contextExecutor = contextExecutor;
