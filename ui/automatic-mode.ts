import { ArithmeticExpressionEvaluator } from "../src/services/arithmetic-expression-evaluator";
import { XMLParser } from "../src/services/xml-parser";
import { XMLCreator } from "../src/services/xml-creator";
import { ExpressionConvertor } from "../src/convertors/expression-convertor";
import { BigNumberConvertor } from "../src/convertors/big-number-convertor";

function triggerDownloadWindow(xmlFileContent: string): void {
    let element: HTMLAnchorElement = document.createElement('a');
    element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(xmlFileContent));
    element.setAttribute('download', "output.xml");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadResult(event: any): void {
    event.preventDefault();
    const file: File = (<HTMLInputElement>(
        document.getElementById("expression-file")
    )).files[0];
    if (file) {
        let reader: FileReader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (readerEvent) {
            let xmlContent: string | ArrayBuffer = readerEvent.target.result;
            if (typeof xmlContent === "object") {
                xmlContent = new TextDecoder().decode(xmlContent);
            }

            const xmlParser: XMLParser = new XMLParser(new DOMParser());
            const expression: string = xmlParser.extractExpression(xmlContent);
            const variables: Map<string, string> =
                xmlParser.extractVariables(xmlContent);

            const arithmeticExpressionEvaluator: ArithmeticExpressionEvaluator =
                new ArithmeticExpressionEvaluator(
                    new BigNumberConvertor(), new ExpressionConvertor()
                );
            let result: string[] = arithmeticExpressionEvaluator.evaluate(
                expression,
                variables
            );

            const xmlCreator: XMLCreator = new XMLCreator();
            const xmlFileContent: string = xmlCreator.createResultXML(result);
            triggerDownloadWindow(xmlFileContent);
        };
    }
}

document.addEventListener("DOMContentLoaded", () => {
    (<HTMLFormElement>(
        document.getElementById("automatic-form")
    )).addEventListener("submit", downloadResult);
});

export {};