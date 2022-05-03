import { compare, checkIfBigNumberEqualsToZero } from "../../src/helpers/big-number";

describe("compare", () => {
    test("compare 2 equal numbers", () => {
        const firstBigNumber: number[] = [3, 3, 2, 1];
        const secondBigNumber: number[] = [3, 3, 2, 1];

        const result = 0;

        expect(compare(firstBigNumber, secondBigNumber)).toBe(result);
    });

    test("compare 2 numbers where first number is lower than the second one", () => {
        const firstBigNumber: number[] = [3, 1, 2, 1];
        const secondBigNumber: number[] = [3, 1, 2, 2];

        const result = -1;

        expect(compare(firstBigNumber, secondBigNumber)).toBe(result);
    });

    test("compare 2 numbers where first number is greater than the second one", () => {
        const firstBigNumber: number[] = [3, 1, 2, 2];
        const secondBigNumber: number[] = [3, 0, 2, 2];

        const result = 1;

        expect(compare(firstBigNumber, secondBigNumber)).toBe(result);
    });
});

describe("checkIfBigNumberEqualsToZero", () => {
    test("check if [1, 0] equals to zero", () => {
        const zeroNumber: number[] = [1, 0];

        expect(checkIfBigNumberEqualsToZero(zeroNumber)).toBe(true);
    });

    test("check if [1, 5] equals to zero", () => {
        const bigNumber: number[] = [1, 5];

        expect(checkIfBigNumberEqualsToZero(bigNumber)).toBe(false);
    });
});