import { BinaryOperator } from "./binary-operator";
import { assertBigNumber } from "../helpers/assertions-utils";

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
        assertBigNumber(firstBigNumber);
        assertBigNumber(secondBigNumber);

        const numberOfDigits: number = firstBigNumber[0] < secondBigNumber[0] ? secondBigNumber[0] : firstBigNumber[0];

        console.assert(numberOfDigits === firstBigNumber[0] || numberOfDigits === secondBigNumber[0],
            "The number of digits is wrong.");

        let result: number[] = [numberOfDigits];
        let carry = 0;

        for (let i = 1; i <= result[0]; ++i, carry = Math.floor(carry / 10)) {
            console.assert(i >= 1, "i < 1");
            console.assert(i <= result[0], "i > result[0]");
            // https://math.stackexchange.com/questions/3735812/is-it-proven-that-the-maximum-carry-in-an-addition-is-always-1-whatever-the-base
            console.assert(carry === 1 || carry === 0, "carry value is wrong.");

            carry += (firstBigNumber[i] || 0) + (secondBigNumber[i] || 0);
            result[i] = carry % 10;

            console.assert(result[i] >= 0 && result[i] <= 9, "Current result digit is wrong.");
        }

        if (carry > 0) {
            console.assert(carry === 1, "carry value is wrong.");
            console.assert(result[0] === numberOfDigits, "The number of digits of result is wrong.");

            result[++result[0]] = carry;

            console.assert(result[0] === numberOfDigits + 1, "The number of digits of result is wrong.");
            console.assert(result[numberOfDigits + 1] === 1, "The first digit of the result is wrong.");
        }

        console.assert(result[0] === numberOfDigits || result[0] === numberOfDigits + 1,
            "The number of digits of result is wrong.");
        assertBigNumber(result);

        return result;
    }
}