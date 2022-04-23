/**
 * Converts a big number stored as array to string.
 *
 * Example: convertBigNumberToString([3, 1, 2, 3]) => "321"
 *
 * @param bigNumber - the big number to be converted to string
 */
export function convertBigNumberToString(bigNumber: number[]): string {
    return bigNumber.slice(1, bigNumber[0] + 1).reverse().join('');
}

/**
 * Checks if a big number is equal to 0.
 *
 * Example: checkIfBigNumberEqualsToZero([1, 0]) => true
 *
 * @param bigNumber - the big number to be checked if it is equal to 0
 */
export function checkIfBigNumberEqualsToZero(bigNumber: number[]): boolean {
    return bigNumber[0] === 1 && bigNumber[1] === 0;
}