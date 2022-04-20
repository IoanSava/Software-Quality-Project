import {BinaryOperator} from "./binary-operator";

export class Addition extends BinaryOperator {
    getSymbol(): string {
        return "+";
    }

    /**
     * Adds two big numbers.
     *
     * Example: compute([3, 3, 2, 1], [2, 1, 2]) => [3, 4, 4, 1]
     *
     * @param firstBigNumber - the first addend
     * @param secondBigNumber - the second addend
     */
    compute(firstBigNumber: number[], secondBigNumber: number[]): number[] {
        const numberOfDigits: number = firstBigNumber[0] < secondBigNumber[0] ? secondBigNumber[0] : firstBigNumber[0];
        let result: number[] = [numberOfDigits];
        let carry = 0;

        for (let i = 1; i <= result[0]; ++i, carry = Math.floor(carry / 10)) {
            carry += (firstBigNumber[i] || 0) + (secondBigNumber[i] || 0);
            result[i] = carry % 10;
        }

        if (carry > 0) {
            result[++result[0]] = carry;
        }

        return result;
    }
}