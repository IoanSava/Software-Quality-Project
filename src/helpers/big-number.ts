import { assertBigNumber } from "./assertions-utils";

/**
 * Checks if a big number is equal to 0.
 *
 * Example: checkIfBigNumberEqualsToZero([1, 0]) => true
 *
 * @param bigNumber - the big number to be checked if it is equal to 0
 */
export function checkIfBigNumberEqualsToZero(bigNumber: number[]): boolean {
    assertBigNumber(bigNumber);

    return bigNumber[0] === 1 && bigNumber[1] === 0;
}

/**
 * Compares two big numbers.
 * Returns 0, if the numbers are equal
 *         -1, if the first number is lower than the second number
 *         1, if the first number is greater than the second number
 *
 * Examples: compare([2, 1, 2], [2, 1, 2]) => 0
 *           compare([2, 0, 2], [2, 1, 2]) => -1
 *           compare([2, 1, 2], [2, 0, 1]) => 1
 *
 * @param firstBigNumber - the first big number
 * @param secondBigNumber - the second big number
 */
export function compare(firstBigNumber: number[], secondBigNumber: number[]): number {
    while (firstBigNumber[0] > 1 && firstBigNumber[firstBigNumber[0]] === 0) {
        --firstBigNumber[0];
    }

    while (secondBigNumber[0] > 1 && secondBigNumber[secondBigNumber[0]] === 0) {
        --secondBigNumber[0];
    }

    assertBigNumber(firstBigNumber);
    assertBigNumber(secondBigNumber);

    if (firstBigNumber[0] !== secondBigNumber[0]) {
        return firstBigNumber[0] < secondBigNumber[0] ? -1 : 1;
    }

    console.assert(firstBigNumber[0] === secondBigNumber[0],
        "The big numbers don't have the same number of digits.");

    let i: number = firstBigNumber[0];
    while (firstBigNumber[i] === secondBigNumber[i] && i > 0) {
        console.assert(firstBigNumber[i] === secondBigNumber[i], "The current digit is different.");
        console.assert(i > 0, "i <= 0");

        --i;

        console.assert(i >= 0, "i < 0");
    }

    if (i === 0) {
        return 0;
    }

    console.assert(i !== 0, "i === 0");
    console.assert(firstBigNumber[i] !== secondBigNumber[i], "The big numbers are equal.");

    return firstBigNumber[i] < secondBigNumber[i] ? -1 : 1;
}