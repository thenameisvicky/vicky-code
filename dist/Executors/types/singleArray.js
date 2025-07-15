"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextExecutor = void 0;
class contextExecutor {
    constructor(Strategy) {
        this.strategy = Strategy;
    }
    async execute(nums, target) {
        return await this.strategy.contextFunction(nums, target);
    }
}
exports.contextExecutor = contextExecutor;
