import { ArithmeticExpressionEvaluator } from "../src/services/arithmetic-expression-evaluator";
import { BigNumberConvertor } from "../src/convertors/big-number-convertor";
import { ExpressionConvertor } from "../src/convertors/expression-convertor";
import { transformValuesToMap } from "../src/helpers/utils";

function addOperation(event: any): void {
    event.preventDefault();
    let expression: string = (<HTMLInputElement>document.getElementById('expression')).value;
    let values: string = (<HTMLInputElement>document.getElementById('values')).value;
    let mapOfValues: Map<string, string> = transformValuesToMap(values);

    const arithmeticExpressionEvaluator: ArithmeticExpressionEvaluator = new ArithmeticExpressionEvaluator(
        new BigNumberConvertor(), new ExpressionConvertor()
    );
    let result: string[] = arithmeticExpressionEvaluator.evaluate(expression, mapOfValues);
    let resultSection: any = document.querySelector('#result');
    resultSection.textContent = result.join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
    (<HTMLFormElement>(
        document.getElementById("interactive-form")
    )).addEventListener("submit", addOperation);
});

export {};