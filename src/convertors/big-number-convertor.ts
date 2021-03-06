import { doesStringContainOnlyDigits, isFalsy } from "../helpers/utils";
import { InvalidBigNumberError } from "../errors/invalid-big-number-error";
import { assertBigNumber } from "../helpers/assertions-utils";

export class BigNumberConvertor {
    /**
     * Converts a big number stored as array to string.
     *
     * Example: convertBigNumberToString([3, 1, 2, 3]) => "321"
     *
     * @param bigNumber - the big number to be converted to string
     */
    convertBigNumberToString(bigNumber: number[]): string {
        assertBigNumber(bigNumber);

        return bigNumber.slice(1, bigNumber[0] + 1).reverse().join('');
    }

    /**
     * Converts a string to a big number.
     *
     * Example: convertStringToBigNumber("123") => [3, 3, 2, 1]
     *
     * @param str - the string to be converted to big number
     */
    convertStringToBigNumber(str: string): number[] {
        if (isFalsy(str)) {
            return [1, 0];
        }

        console.assert(str, "String is falsy.");

        str = str.trim();

        if (!doesStringContainOnlyDigits(str)) {
            throw new InvalidBigNumberError(str);
        }

        console.assert(doesStringContainOnlyDigits(str), "String does not contain only digits.");

        let result: number[] = [str.length];
        for (let i = result[0] - 1; i >= 0; --i) {
            result[result[0] - i] = parseInt(str[i]);
        }

        assertBigNumber(result);

        return result;
    }
}