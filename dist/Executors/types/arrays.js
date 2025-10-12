"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.engineeringContextExecutor = exports.ContextExecutor = void 0;
class ContextExecutor {
    constructor(Strategy) {
        this.strategy = Strategy;
    }
    execute(params) {
        return this.strategy.contextFunction(params);
    }
}
exports.ContextExecutor = ContextExecutor;
class engineeringContextExecutor {
    constructor(Strategy) {
        this.strategy = Strategy;
    }
    execute(params) {
        return this.strategy.contextFunction(params);
    }
}
exports.engineeringContextExecutor = engineeringContextExecutor;
