import { ExpressionConvertor } from "../../src/convertors/expression-convertor";
import { ExpressionTreeNode } from "../../src/models/tree-node";

describe("ExpressionConvertor", () => {
    const expressionConvertor: ExpressionConvertor = new ExpressionConvertor();

    describe("stringToNode", () => {
        test("convert sqrt(1) to node and back", () => {
            const original: string = "sqrt(1)";
            const node: ExpressionTreeNode = expressionConvertor.stringToNode(original);
            const converted: string = expressionConvertor.atomicNodeToString(node);
            expect(converted).toBe(original);
        });
    });
});