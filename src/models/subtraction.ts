import { NegativeResultOfSubtractionError } from "../errors/negative-result-of-subtraction-error";
import { BinaryOperator } from "./binary-operator";
import { compare } from "../helpers/big-number";
import { assertBigNumber } from "src/helpers/assertions-utils";

export class Subtraction extends BinaryOperator {
    getSymbol(): string {
        return "-";
    }

    /**
     * Subtracts two big numbers.
     *
     * Example: compute([3, 2, 4, 3], [3, 9, 7, 1]) => [3, 3, 6, 1]
     *
     * @param firstBigNumber - the minuend
     * @param secondBigNumber - the subtrahend
     * @returns the difference left when subtracting the subtrahend from the minuend.
     */
    protected compute(firstBigNumber: number[], secondBigNumber: number[]): number[] {
        assertBigNumber(firstBigNumber);
        assertBigNumber(secondBigNumber);

        if (compare(firstBigNumber, secondBigNumber) === -1) {
            console.assert(compare(firstBigNumber, secondBigNumber) === -1, "No negative result case");

            throw new NegativeResultOfSubtractionError(firstBigNumber, secondBigNumber);
        }

        console.assert(compare(firstBigNumber, secondBigNumber) !== -1, "Negative result not handled properly");

        let numberOfDigits = firstBigNumber[0];
        let result: number[] = [numberOfDigits]
        let carry = 0;

        for (let i = 1; i <= numberOfDigits; ++i) {
            console.assert(i >= 0, "i < 0");
            console.assert(i <= numberOfDigits, "i > numberOfDigits");

            result[i] = firstBigNumber[i] < ((secondBigNumber[i] || 0) + carry) ?
                (10 + firstBigNumber[i] - ((secondBigNumber[i] || 0) + carry)) : firstBigNumber[i] - ((secondBigNumber[i] || 0) + carry);
            carry = firstBigNumber[i] < ((secondBigNumber[i] || 0) + carry) ? 1 : 0;
        }

        while (result[0] > 1 && result[result[0]] === 0) {
            console.assert(result[0] > 1 && result[result[0]] === 0, "The current result no longer meets criteria");
            result.pop();
            --result[0];
        }

        assertBigNumber(result);
        return result;
    }
}