import {BinaryOperator} from "./binary-operator";

export class Subtraction extends BinaryOperator {
    getSymbol(): string {
        return "-";
    }

    protected compute(firstBigNumber: number[], secondBigNumber: number[]): number[] {
        return [1, 0];
    }
}