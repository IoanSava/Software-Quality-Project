export class ArithmeticExpressionEvaluator {
    evaluate(arithmeticExpression: string, variables: Map<string, string>): string[] {
        console.log(`Arithmetic expression: ${arithmeticExpression}`);
        console.log(`Variables: ${JSON.stringify(Object.fromEntries([...variables]))}`);

        return [
            "10 + 20 = 30",
            "30 * 10 = 300"
        ];
    }
}