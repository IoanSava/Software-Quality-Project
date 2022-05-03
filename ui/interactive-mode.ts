import { ArithmeticExpressionEvaluator } from "../src/services/arithmetic-expression-evaluator";
import { BigNumberConvertor } from "../src/convertors/big-number-convertor";
import { ExpressionConvertor } from "../src/convertors/expression-convertor";

function transformValuesToMap(values: string): Map<string, string> {
    let mapOfValues: Map<string, string> = new Map<string, string>();
    let params: string[] = values.split(",");
    for (let i = 0; i < params.length; ++i) {
        let parts: string[] = params[i].split('=');
        mapOfValues.set(parts[0], parts[1]);
    }

    return mapOfValues;
}

function addOperation(event: any): void {
    event.preventDefault();
    let expression: string = (<HTMLInputElement>document.getElementById('expression')).value;
    let values: string = (<HTMLInputElement>document.getElementById('values')).value;
    let mapOfValues: Map<string, string> = transformValuesToMap(values);

    const arithmeticExpressionEvaluator: ArithmeticExpressionEvaluator = new ArithmeticExpressionEvaluator(
        new BigNumberConvertor(), new ExpressionConvertor()
    );
    let result: string[] = arithmeticExpressionEvaluator.evaluate(expression, mapOfValues);
    let resultSection: any = document.querySelector('#result pre');
    resultSection.textContent = result.join("\n");
}

document.addEventListener('DOMContentLoaded', () => {
    (<HTMLInputElement>document.getElementById('interactive-button')).addEventListener('click', addOperation);
});

export {};