import { UnaryOperator } from "./unary-operator";
import { Addition } from "./addition";
import { Subtraction } from "./subtraction";
import { Multiplication } from "./multiplication";
import { checkIfBigNumberEqualsToZero, compare } from "../helpers/big-number";

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
        if (checkIfBigNumberEqualsToZero(bigNumber)) {
            return [1, 0];
        }

        const increment: number[] = [1, 1];
        let squareRootCandidate: number[] = [1, 1];
        let square = new Multiplication().apply(squareRootCandidate, squareRootCandidate);

        while (compare(square, bigNumber) === -1) {
            squareRootCandidate = new Addition().apply(squareRootCandidate, increment);
            square = new Multiplication().apply(squareRootCandidate, squareRootCandidate);
        }

        if (compare(square, bigNumber) === 0) {
            return squareRootCandidate;
        }

        return new Subtraction().apply(squareRootCandidate, increment);
    }
}