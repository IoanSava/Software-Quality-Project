import { BinaryOperator } from "./binary-operator";

export class Division extends BinaryOperator {
    getSymbol(): string {
        return "/";
    }

    protected compute(firstBigNumber: number[], secondBigNumber: number[]): number[] {
        return [];
    }
}