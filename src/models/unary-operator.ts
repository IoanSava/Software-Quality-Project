import {Operator} from "./operator";
import {convertBigNumberToString} from "../helpers/big-number";

export abstract class UnaryOperator extends Operator {
    apply(bigNumber: number[]): number[] {
        const result: number[] = this.compute(bigNumber);
        this.printOperation(bigNumber, result);
        return result;
    }

    protected abstract compute(bigNumber: number[]): number[];

    private printOperation(bigNumber: number[], result: number[]): void {
        const bigNumberAsString: string = convertBigNumberToString(bigNumber);
        const resultAsString: string = convertBigNumberToString(result);
        console.log(`${this.getSymbol()}(${bigNumberAsString}) = ${resultAsString}`);
    }
}