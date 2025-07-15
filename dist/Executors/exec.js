"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exec;
const singleArray_1 = require("./singleArray");
function exec(nums, strategy, target) {
    const executor = new singleArray_1.contextExecutor(strategy);
    executor.execute(nums, target).then((result) => {
        console.log(`Executed-${strategy.constructor.name} and Result: ${result}`);
    });
}
