import { BinaryOperator } from "./binary-operator";
import { checkIfBigNumberEqualsToZero, compare } from "../helpers/big-number";
import { ZeroToThePowerOfZeroError } from "../errors/zero-to-the-power-of-zero-error";
import { Multiplication } from "./multiplication";
import { Addition } from "./addition";
import { assertBigNumber } from "../helpers/assertions-utils";

export class Power extends BinaryOperator {
    getSymbol(): string {
        return "**";
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
        assertBigNumber(firstBigNumber);
        assertBigNumber(secondBigNumber);

        if (checkIfBigNumberEqualsToZero(firstBigNumber) && checkIfBigNumberEqualsToZero(secondBigNumber)) {
            console.assert(compare(firstBigNumber, [1, 0]) === 0 && compare(secondBigNumber, [1, 0]) === 0,
                "No 0^0 case.");

            throw new ZeroToThePowerOfZeroError();
        }

        console.assert(compare(firstBigNumber, [1, 0]) !== 0 || compare(secondBigNumber, [1, 0]) !== 0,
            "0^0 case was not handled properly.");

        if (checkIfBigNumberEqualsToZero(firstBigNumber)) {
            console.assert(compare(firstBigNumber, [1, 0]) === 0, "The base value is not 0.");

            return [1, 0];
        }

        console.assert(compare(firstBigNumber, [1, 0]) !== 0, "0^n case was not handled properly.");

        if (checkIfBigNumberEqualsToZero(secondBigNumber)) {
            console.assert(compare(secondBigNumber, [1, 0]) === 0, "The power value is not 0");

            return [1, 1];
        }

        console.assert(compare(secondBigNumber, [1, 0]) !== 0, "x^0 case was not handled properly.");

        let result: number[] = [1, 1];
        let currentPower: number[] = [1, 0];

        while (compare(currentPower, secondBigNumber) === -1) {
            console.assert(compare(currentPower, secondBigNumber) === -1,
                "The current power value is wrong.");

            result = new Multiplication().apply(result, firstBigNumber);
            currentPower = new Addition().apply(currentPower, [1, 1]);

            console.assert(compare(currentPower, secondBigNumber) === -1 || compare(currentPower, secondBigNumber) === 0,
                "The current power value is wrong.");
        }

        console.assert(compare(currentPower, secondBigNumber) === 0,
            "The current power and the given power value are different.");
        assertBigNumber(result);

        return result;
    }
}