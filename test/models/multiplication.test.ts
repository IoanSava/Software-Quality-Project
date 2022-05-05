import { Multiplication } from "../../src/models/multiplication";

describe("Multiplication.apply", () => {
    test("0 * 0 = 0", () => {
        const zeroNumber: number[] = [1, 0];

        expect(new Multiplication().apply(zeroNumber, zeroNumber)).toEqual(zeroNumber);
    });

    test("1 * 0 = 0", () => {
        const bigNumber: number[] = [1, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Multiplication().apply(bigNumber, zeroNumber)).toEqual(zeroNumber);
    });

    test("123456789 * 0 = 0", () => {
        const bigNumber: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Multiplication().apply(bigNumber, zeroNumber)).toEqual(zeroNumber);
    });

    test("0 * 1 = 0", () => {
        const bigNumber: number[] = [1, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Multiplication().apply(zeroNumber, bigNumber)).toEqual(zeroNumber);
    });

    test("0 * 123456789 = 0", () => {
        const bigNumber: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Multiplication().apply(zeroNumber, bigNumber)).toEqual(zeroNumber);
    });

    test("19 * 0 = 0", () => {
        const bigNumber: number[] = [2, 9, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Multiplication().apply(bigNumber, zeroNumber)).toEqual(zeroNumber);
    });

    test("54 * 1 = 54", () => {
        const bigNumber: number[] = [2, 4, 5];
        const unityNumber: number[] = [1, 1];

        expect(new Multiplication().apply(bigNumber, unityNumber)).toEqual(bigNumber);
    });

    test("87 * 321 = 27144", () => {
        const firstBigNumber: number[] = [2, 7, 8];
        const secondBigNumber: number[] = [3, 2, 1, 3];

        const result: number[] = [5, 4, 4, 1, 7, 2];

        expect(new Multiplication().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("123 * 21 = 2583", () => {
        const firstBigNumber: number[] = [3, 3, 2, 1];
        const secondBigNumber: number[] = [2, 1, 2];

        const result: number[] = [4, 3, 8, 5, 2];

        expect(new Multiplication().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("998 * 997 = 995006", () => {
        const firstBigNumber: number[] = [3, 8, 9, 9];
        const secondBigNumber: number[] = [3, 7, 9, 9];

        const result: number[] = [6, 6, 0, 0, 5, 9, 9];

        expect(new Multiplication().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });
});