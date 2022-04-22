import {UnaryOperator} from "./unary-operator";

export class SquareRoot extends UnaryOperator {
    getSymbol(): string {
        return "sqrt";
    }

    protected compute(bigNumber: number[]): number[] {
        return [1, 0];
    }
}