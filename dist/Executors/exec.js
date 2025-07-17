"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exec;
const arrays_1 = require("./types/arrays");
function exec(strategy, params) {
    const executor = new arrays_1.contextExecutor(strategy);
    executor.execute(params).then((result) => {
        console.log(`Executed-${strategy.constructor.name} and Result: ${result}`);
    });
}
