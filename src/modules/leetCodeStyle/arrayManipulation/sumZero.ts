import { BaseSingleArrayExecutionStrategy } from "../../../Executors/types/arrays";
import { sumsUpToZeroParams } from "../types";

export class SumsUpToZeroStrategy implements BaseSingleArrayExecutionStrategy<'sumsUpToZero'> {
    contextFunction(params: sumsUpToZeroParams) {
        const { length } = params;
        if (length == 1) return [0];
        let array = [];
        if (length % 2 == 0) {
            for (let i = 1; i < length; i++) {
                array.push(i * -1);
                array.push(i);
            }
        } else {
            for (let i = 1; i < length; i++) {
                array.push(i * -1);
                array.push(i);
            }

            array.splice(length - 2, 0, 0);
        }

        return array.slice(0, length);
    }
}