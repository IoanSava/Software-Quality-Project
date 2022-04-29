import { BinaryOperator } from "./binary-operator";
import { checkIfBigNumberEqualsToZero } from "../helpers/big-number";

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
        if (checkIfBigNumberEqualsToZero(firstBigNumber) || checkIfBigNumberEqualsToZero(secondBigNumber)) {
            return [1, 0];
        }

        const numberOfDigits: number = firstBigNumber[0] + secondBigNumber[0] - 1;
        let result: number[] = [numberOfDigits];
        let carry = 0;
        let intermediateProduct = 0;

        for (let i = 1; i <= firstBigNumber[0]; ++i) {
            for (let j = 1; j <= secondBigNumber[0]; ++j) {
                intermediateProduct = firstBigNumber[i] * secondBigNumber[j];
                if (result[i + j - 1]) {
                    result[i + j - 1] += intermediateProduct;
                } else {
                    result[i + j - 1] = intermediateProduct;
                }
            }
        }

        for (let i = 1; i <= result[0]; ++i) {
            carry += result[i];
            result[i] = carry % 10;
            carry = Math.floor(carry / 10);
        }

        if (carry > 0) {
            result[++result[0]] = carry;
        }

        return result;
    }
}