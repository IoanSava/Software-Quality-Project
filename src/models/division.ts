import { BinaryOperator } from "./binary-operator";
import { Subtraction } from "./subtraction";
import { Addition } from "./addition";
import { checkIfBigNumberEqualsToZero, compare } from "../helpers/big-number";
import { DivisionByZeroError } from "../errors/division-by-zero-error";
import { assertBigNumber } from "../helpers/assertions-utils";

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
    protected compute(firstBigNumber: number[], secondBigNumber: number[]): number[] {
        assertBigNumber(firstBigNumber);
        assertBigNumber(secondBigNumber);

        if (checkIfBigNumberEqualsToZero(secondBigNumber)) {
            console.assert(compare(secondBigNumber, [1, 0]) === 0,
                "No division by zero case.");

            throw new DivisionByZeroError(
                this.bigNumberConvertor.convertBigNumberToString(firstBigNumber),
                "0"
            );
        }

        console.assert(compare(secondBigNumber, [1, 0]) !== 0,
            "The division by zero case was not handled properly.");

        let clone: number[] = [...firstBigNumber];
        let counter: number[] = [1, 0];
        const one: number[] = [1, 1];
        const zero: number[] = [1, 0];

        while (compare(clone, zero) === 1) {
            console.assert(compare(clone, zero) === 1,
                "The current clone value is wrong.");

            if (compare(clone, secondBigNumber) === -1) {
                console.assert(compare(clone, secondBigNumber) === -1,
                    "The current clone value is wrong.");

                return counter;
            }
            clone = new Subtraction().apply(clone, secondBigNumber);
            counter = new Addition().apply(counter, one);

            console.assert(compare(clone, zero) === 1 || compare(clone, zero) === 0,
                "The current clone value is wrong.");
        }

        console.assert(compare(counter, zero) === 1,
            "The counter value is wrong.");
        assertBigNumber(counter);
        return counter;
    }
}
