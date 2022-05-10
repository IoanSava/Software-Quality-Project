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
        ]);
    });

    test("1 + 1 + 1 = 3", () => {
        const expression: string = "1 + 1 + 1";
        const variables: Map<string, string> = new Map<string, string>();
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "1 + 1 = 2",
            "1 + 2 = 3"
        ])
    });

    test("sqrt(2 + x) = 2", () => {
        const expression: string = "sqrt(2 + 2)";
        const variables: Map<string, string> = new Map<string, string>([["x", "2"]]);
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "2 + 2 = 4",
            "sqrt(4) = 2"
        ]);
    });

    test("5 + 5 * 3 - 10 = 10", () => {
        const expression: string = "5 + 5 * 3 - 10";
        const variables: Map<string, string> = new Map<string, string>();
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "5 * 3 = 15",
            "15 - 10 = 5",
            "5 + 5 = 10"
        ]);
    });

    test("(1 + 1 + 1) * 2 ** 5 / 2 - sqrt(4)", () => {
        const expression: string = "(1 + 1 + 1) * 2 ** 5 / 2 - sqrt(4)";
        const variables: Map<string, string> = new Map<string, string>();
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "1 + 1 = 2",
            "1 + 2 = 3",
            "2 ** 5 = 32",
            "32 / 2 = 16",
            "3 * 16 = 48",
            "sqrt(4) = 2",
            "48 - 2 = 46"
        ]);
    });

    test("1 / 0 * 1 = error", () => {
        const expression: string = "1 / 0 * 1";
        const variables: Map<string, string> = new Map<string, string>();
        const expectedMessage: string = "Division by zero encountered in: 1 / 0";
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "0 * 1 = 0",
            "1 / 0 = error",
            expectedMessage
        ])
    });

    test("123 123 = parsing error", () => {
        const expression: string = "123 123";
        const variables: Map<string, string> = new Map<string, string>();
        const expected: string[] = ["parsing error"];
        expect(evaluator.evaluate(expression, variables)).toEqual(expected);
    });

    test("whitespaces", () => {
        const expression: string = " ( 1)+    \t\n2 /sqrt(\t\t\t\t4)";
        const variables: Map<string, string> = new Map<string, string>();
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "sqrt(4) = 2",
            "2 / 2 = 1",
            "1 + 1 = 2"
        ]);
    });

    test("empty string", () => {
        const expression: string = "";
        const variables: Map<string, string> = new Map<string, string>();
        expect(evaluator.evaluate(expression, variables)).toEqual([
            "parsing error"
        ]);
    });
});
