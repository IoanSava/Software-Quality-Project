import { NegativeResultOfSubtractionError } from "../errors/negative-result-of-subtraction-error";
import { BinaryOperator } from "./binary-operator";
import { compare } from "../helpers/big-number";

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
        if (compare(firstBigNumber, secondBigNumber) === -1) {
            throw new NegativeResultOfSubtractionError(firstBigNumber, secondBigNumber);
        }

        let numberOfDigits = firstBigNumber[0];
        let result: number[] = [numberOfDigits]
        let carry = 0;

        for (let i = 1; i <= numberOfDigits; ++i) {
            result[i] = firstBigNumber[i] < ((secondBigNumber[i] || 0) + carry) ?
                (10 + firstBigNumber[i] - ((secondBigNumber[i] || 0) + carry)) : firstBigNumber[i] - ((secondBigNumber[i] || 0) + carry);
            carry = firstBigNumber[i] < ((secondBigNumber[i] || 0) + carry) ? 1 : 0;
        }

        while (result[0] > 1 && result[result[0]] === 0) {
            result.pop();
            --result[0];
        }
        return result;
    }
}