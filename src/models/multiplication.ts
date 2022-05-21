import { BinaryOperator } from "./binary-operator";
import { checkIfBigNumberEqualsToZero, compare } from "../helpers/big-number";
import { assertBigNumber } from "../helpers/assertions-utils";

export class Multiplication extends BinaryOperator {
    getSymbol(): string {
        return "*";
    }

    /**
     * Multiplies two big numbers.
     *
     * Example: compute([3, 3, 2, 1], [2, 1, 2]) => [4, 3, 8, 5, 2]
     *
     * @param firstBigNumber - the first multiplicand
     * @param secondBigNumber - the second multiplicand
     */
    compute(firstBigNumber: number[], secondBigNumber: number[]): number[] {
        assertBigNumber(firstBigNumber);
        assertBigNumber(secondBigNumber);

        if (checkIfBigNumberEqualsToZero(firstBigNumber) || checkIfBigNumberEqualsToZero(secondBigNumber)) {
            console.assert(compare(firstBigNumber, [1, 0]) === 0 || compare(secondBigNumber, [1, 0]) === 0,
                "No 0*0 case.");
            return [1, 0];
        }

        console.assert(compare(firstBigNumber, [1, 0]) !== 0 || compare(secondBigNumber, [1, 0]) !== 0,
            "The 0*0 case was not handled properly.");

        const numberOfDigits: number = firstBigNumber[0] + secondBigNumber[0] - 1;
        let result: number[] = [numberOfDigits];
        let carry = 0;
        let intermediateProduct = 0;

        for (let i = 1; i <= firstBigNumber[0]; ++i) {
            console.assert(i >= 1, "i < 1");
            console.assert(i <= firstBigNumber[0], "i > firstBigNumber[0]");

            for (let j = 1; j <= secondBigNumber[0]; ++j) {
                console.assert(j >= 1, "j < 1");
                console.assert(j <= secondBigNumber[0], "j > secondBigNumber[0]");

                intermediateProduct = firstBigNumber[i] * secondBigNumber[j];
                if (result[i + j - 1]) {
                    result[i + j - 1] += intermediateProduct;
                } else {
                    result[i + j - 1] = intermediateProduct;
                }
            }
        }

        for (let i = 1; i <= result[0]; ++i, carry = Math.floor(carry / 10)) {
            console.assert(i >= 1, "i < 1");
            console.assert(i <= result[0], "i > result[0]");

            carry += result[i];
            result[i] = carry % 10;

            console.assert(result[i] >= 0 && result[i] <= 9, "The current result digit is wrong.");
        }

        if (carry > 0) {
            // http://www.numbernut.com/arithmetic/multiply-carry.html
            console.assert(carry >= 1 && carry <= 9, "carry value is wrong.");
            console.assert(result[0] === numberOfDigits, "The number of digits of result is wrong.");

            result[++result[0]] = carry;

            console.assert(result[0] === numberOfDigits + 1, "The number of digits of result is wrong.");
        }

        console.assert(result[0] === numberOfDigits || result[0] === numberOfDigits + 1,
            "The number of digits of result is wrong.");
        assertBigNumber(result);

        return result;
    }
}