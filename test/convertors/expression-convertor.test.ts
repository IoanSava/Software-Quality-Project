import { ExpressionConvertor } from "../../src/convertors/expression-convertor";
import { ExpressionTreeNode } from "../../src/models/tree-node";

const ATOMIC_EXPRESSIONS: string[][] = [
    ["1 + 2"],
    ["1 - 2"],
    ["1 * 2"],
    ["1 / 2"],
    ["1 ** 2"],
    ["sqrt(1)"]
];

const COMPOUND_EXPRESSIONS: string[][] = [
    ["1 + 1 + 1 + 1"],
    ["1 + 1 * 2"],
    ["10 ** 2 + 1"],
    ["10 - 9 / 3"]
];

describe("ExpressionConvertor", () => {
    const expressionConvertor: ExpressionConvertor = new ExpressionConvertor();

    describe("atomicStringToNode", () => {
        test.each(ATOMIC_EXPRESSIONS)("convert '%s' to node and back", (original: string) => {
            const node: ExpressionTreeNode = expressionConvertor.stringToNode(original);
            const converted: string = expressionConvertor.atomicNodeToString(node);
            expect(converted).toBe(original);
        });
    });

    describe("stringToNode", () => {
        test.each(COMPOUND_EXPRESSIONS)("convert '%s' to node and back", (original: string) => {
            const node: ExpressionTreeNode = expressionConvertor.stringToNode(original);
            const converted: string = expressionConvertor.nodeToString(node);
            expect(converted).toBe(original);
        });
    });
});