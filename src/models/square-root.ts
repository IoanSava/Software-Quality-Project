import { UnaryOperator } from "./unary-operator";
import { Addition } from "./addition";
import { Subtraction } from "./subtraction";
import { Multiplication } from "./multiplication";
import { checkIfBigNumberEqualsToZero, compare } from "../helpers/big-number";
import { assertBigNumber } from "../helpers/assertions-utils";

export class SquareRoot extends UnaryOperator {
    getSymbol(): string {
        return "sqrt";
    }

    /**
     * Computes the square root of a number (if the number is not a perfect square, the result is truncated)
     *
     * Example: compute([3, 1, 2, 1]) => [2, 1, 1]
     *
     * @param bigNumber - the radicand (the number whose square root is being considered)
     * @returns the square root of the given number
     */
    protected compute(bigNumber: number[]): number[] {
        assertBigNumber(bigNumber);

        if (checkIfBigNumberEqualsToZero(bigNumber)) {
            console.assert(checkIfBigNumberEqualsToZero(bigNumber), "Number is not 0");

            return [1, 0];
        }

        console.assert(!checkIfBigNumberEqualsToZero(bigNumber), "0 case not handled properly");

        const increment: number[] = [1, 1];
        let squareRootCandidate: number[] = [1, 1];
        let square = new Multiplication().apply(squareRootCandidate, squareRootCandidate);

        while (compare(square, bigNumber) === -1) {
            console.assert(compare(square, bigNumber) === -1, "The square surpassed the given number");

            squareRootCandidate = new Addition().apply(squareRootCandidate, increment);
            square = new Multiplication().apply(squareRootCandidate, squareRootCandidate);
        }

        if (compare(square, bigNumber) === 0) {
            console.assert(compare(square, bigNumber) === 0, "Number needs more processing since it's not a perfect square");
            assertBigNumber(squareRootCandidate);

            return squareRootCandidate;
        }

        return new Subtraction().apply(squareRootCandidate, increment);
    }
}