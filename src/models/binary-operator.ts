import {Operator} from "./operator";
import {convertBigNumberToString} from "../helpers/big-number";

export abstract class BinaryOperator extends Operator {
    apply(firstBigNumber: number[], secondBigNumber: number[]): number[] {
        const result: number[] = this.compute(firstBigNumber, secondBigNumber);
        this.printOperation(firstBigNumber, secondBigNumber, result);
        return result;
    }

    protected abstract compute(firstBigNumber: number[], secondBigNumber: number[]): number[];

    protected printOperation(firstBigNumber: number[], secondBigNumber: number[], result: number[]): void {
        const firstBigNumberAsString: string = convertBigNumberToString(firstBigNumber);
        const secondBigNumberAsString: string = convertBigNumberToString(secondBigNumber);
        const resultAsString: string = convertBigNumberToString(result);
        console.log(`${firstBigNumberAsString} ${this.getSymbol()} ${secondBigNumberAsString} = ${resultAsString}`);
    }
}