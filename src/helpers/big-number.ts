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