import { Addition } from "../../src/models/addition";

describe("Addition.apply", () => {
    test("0 + 0 = 0", () => {
        const zeroNumber: number[] = [1, 0];

        expect(new Addition().apply(zeroNumber, zeroNumber)).toEqual(zeroNumber);
    });

    test("1 + 0 = 1", () => {
        const bigNumber: number[] = [1, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Addition().apply(bigNumber, zeroNumber)).toEqual(bigNumber);
    });

    test("123456789 + 0 = 123456789", () => {
        const bigNumber: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Addition().apply(bigNumber, zeroNumber)).toEqual(bigNumber);
    });

    test("0 + 1 = 1", () => {
        const bigNumber: number[] = [1, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Addition().apply(zeroNumber, bigNumber)).toEqual(bigNumber);
    });

    test("0 + 123456789 = 123456789", () => {
        const bigNumber: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Addition().apply(zeroNumber, bigNumber)).toEqual(bigNumber);
    });

    test("25 + 46 = 71", () => {
        const firstBigNumber: number[] = [2, 5, 2];
        const secondBigNumber: number[] = [2, 6, 4];

        const result: number[] = [2, 1, 7];

        expect(new Addition().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("21 + 99 = 120", () => {
        const firstBigNumber: number[] = [2, 1, 2];
        const secondBigNumber: number[] = [2, 9, 9];

        const result: number[] = [3, 0, 2, 1];

        expect(new Addition().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("21 + 199 = 220", () => {
        const firstBigNumber: number[] = [2, 1, 2];
        const secondBigNumber: number[] = [3, 9, 9, 1];

        const result: number[] = [3, 0, 2, 2];

        expect(new Addition().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("199 + 21 = 220", () => {
        const firstBigNumber: number[] = [3, 9, 9, 1];
        const secondBigNumber: number[] = [2, 1, 2];

        const result: number[] = [3, 0, 2, 2];

        expect(new Addition().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });
});