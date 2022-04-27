import { ArithmeticExpressionEvaluator } from "../../src/services/arithmetic-expression-evaluator";
import { ExpressionConvertor } from "../../src/convertors/expression-convertor";
import { BigNumberConvertor } from "../../src/convertors/big-number-convertor";

const evaluator = new ArithmeticExpressionEvaluator(
    new BigNumberConvertor(),
    new ExpressionConvertor()
)

describe("ArithmeticExpressionEvaluator.evaluate", () => {
    test("1 + 1 = 2", () => {
        const expression: string = "1 + 1";
        const variables: Map<string, string> = new Map<string, string>();
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "1 + 1 = 2"
        ])
    });

    test("1 + 1 + 1 = 3", () => {
        const expression: string = "1 + 1 + 1";
        const variables: Map<string, string> = new Map<string, string>();
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "1 + 1 = 2",
            "1 + 2 = 3"
        ])
    });

    test("1 + 1 + 1 * 2 = 3", () => {
        const expression: string = "1 + 1 + 1 * 2";
        const variables: Map<string, string> = new Map<string, string>();
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "1 * 2 = 2",
            "1 + 2 = 3",
            "1 + 3 = 4"
        ])
    });
});
