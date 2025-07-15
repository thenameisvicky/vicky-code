"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exec;
const singleArray_1 = require("./types/singleArray");
function exec(strategy, params) {
    const executor = new singleArray_1.contextExecutor(strategy);
    executor.execute(params).then((result) => {
        console.log(`Executed-${strategy.constructor.name} and Result: ${result}`);
    });
}
