import { BinaryOperator } from "./binary-operator";
import { Subtraction } from "./subtraction";
import { Addition } from "./addition";
import { checkIfBigNumberEqualsToZero, compare } from "../helpers/big-number";
import { DivisionByZeroError } from "../errors/division-by-zero-error";

export class Division extends BinaryOperator {
    getSymbol(): string {
        return "/";
    }

    /**
     * Divides two big numbers by repeatedly subtraction them.
     *
     * Example: compute([2, 0, 1], [1, 2]) => [1, 5]
     *
     * @param firstBigNumber - The number to be divided
     * @param secondBigNumber - The number to divide with
     */
    protected compute(
        firstBigNumber: number[],
        secondBigNumber: number[]
    ): number[] {
        if (checkIfBigNumberEqualsToZero(secondBigNumber)) {
            throw new DivisionByZeroError(
                this.bigNumberConvertor.convertBigNumberToString(firstBigNumber),
                "0"
            );
        }

        let clone: number[] = [...firstBigNumber];
        let counter: number[] = [1, 0];
        const one = [1, 1], zero = [1, 0];

        while (compare(clone, zero) > 0) {
            if (compare(clone, secondBigNumber) == -1) return counter;
            clone = new Subtraction().apply(clone, secondBigNumber);
            counter = new Addition().apply(counter, one);
        }

        return counter;
    }
}
