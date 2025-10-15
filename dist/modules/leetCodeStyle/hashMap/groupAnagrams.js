"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAnagramsStrategy = void 0;
class GroupAnagramsStrategy {
    contextFunction(params) {
        const { strings } = params;
        const map = new Map();
        for (let i = 0; i < strings.length; i++) {
            const generalized = strings[i].split("").sort().join("");
            if (!map.has(generalized)) {
                map.set(generalized, []);
            }
            map.get(generalized).push(strings[i]);
        }
        return Array.from(map.values());
    }
}
exports.GroupAnagramsStrategy = GroupAnagramsStrategy;
