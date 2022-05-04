import { ExpressionConvertor } from "../../src/convertors/expression-convertor";
import { ExpressionTreeNode } from "../../src/models/tree-node";

const ATOMIC_EXPRESSIONS: string[][] = [
    ["1 + 2"],
    ["1 - 2"],
    ["1 * 2"],
    ["1 / 2"],
    ["1 ** 2"],
    ["sqrt(1)"]
]

const COMPOUND_EXPRESSIONS: string[][] = [
    ["1 + 1 + 1 + 1"],
    ["1 + 1 * 2"],
    ["10 ** 2 + 1"]
]

describe("ExpressionConvertor", () => {
    const expressionConvertor: ExpressionConvertor = new ExpressionConvertor();

    describe("atomicStringToNode", () => {
        it.each(ATOMIC_EXPRESSIONS)("convert '%s' to node and back", (original: string) => {
            const node: ExpressionTreeNode = expressionConvertor.stringToNode(original);
            const converted: string = expressionConvertor.atomicNodeToString(node);
            expect(converted).toBe(original);
        });
    });

    describe("stringToNode", () => {
        it.each(COMPOUND_EXPRESSIONS)("convert '%s' to node and back", (original: string) => {
            const node: ExpressionTreeNode = expressionConvertor.stringToNode(original);
            const converted: string = expressionConvertor.nodeToString(node);
            expect(converted).toBe(original);
        });
    });
});