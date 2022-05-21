export function assertBigNumber(bigNumber: number[]): void {
    const INVALID_BIG_NUMBER = "Invalid big number.";

    console.assert(bigNumber.length > 1, INVALID_BIG_NUMBER);
    if (bigNumber[0] > 1) {
        console.assert(bigNumber[bigNumber[0]] !== 0, INVALID_BIG_NUMBER);
    }
    for (let i = 1; i <= bigNumber[0]; ++i) {
        console.assert(bigNumber[i] >= 0 && bigNumber[i] <= 9, INVALID_BIG_NUMBER);
    }
}