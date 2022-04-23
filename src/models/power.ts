import {BinaryOperator} from "./binary-operator";
import {checkIfBigNumberEqualsToZero, compare} from "../helpers/big-number";
import {ZeroToThePowerOfZeroError} from "../errors/zero-to-the-power-of-zero-error";
import {Multiplication} from "./multiplication";
import {Addition} from "./addition";

export class Power extends BinaryOperator {
    getSymbol(): string {
        return "^";
    }

    /**
     * Computes a given big number raised to a specified power.
     *
     * Example: compute([2, 5, 1], [1, 5]) => [6, 5, 7, 3, 9, 5, 7]
     *
     * @param firstBigNumber - the base value
     * @param secondBigNumber - the power value
     */
    protected compute(firstBigNumber: number[], secondBigNumber: number[]): number[] {
        if (checkIfBigNumberEqualsToZero(firstBigNumber) && checkIfBigNumberEqualsToZero(secondBigNumber)) {
            throw new ZeroToThePowerOfZeroError();
        }

        if (checkIfBigNumberEqualsToZero(firstBigNumber)) {
            return [1, 0];
        }

        if (checkIfBigNumberEqualsToZero(secondBigNumber)) {
            return [1, 1];
        }

        let result: number[] = [1, 1];
        let currentPower: number[] = [1, 0];

        while (compare(currentPower, secondBigNumber) === -1) {
            result = new Multiplication().apply(result, firstBigNumber);
            currentPower = new Addition().apply(currentPower, [1, 1]);
        }

        return result;
    }
}