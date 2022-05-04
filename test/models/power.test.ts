import { Power } from "../../src/models/power";
import { ZeroToThePowerOfZeroError } from "../../src/errors/zero-to-the-power-of-zero-error";

describe("Power.apply", () => {
    test("0 ** 0 should throw error", () => {
        const zeroNumber: number[] = [1, 0];

        expect(() => new Power().apply(zeroNumber, zeroNumber)).toThrow(new ZeroToThePowerOfZeroError());
    });

    test("1 ** 0 = 1", () => {
        const bigNumber: number[] = [1, 1];
        const zeroNumber: number[] = [1, 0];

        const result: number[] = [1, 1];

        expect(new Power().apply(bigNumber, zeroNumber)).toEqual(result);
    });

    test("5 ** 0 = 1", () => {
        const bigNumber: number[] = [1, 5];
        const zeroNumber: number[] = [1, 0];

        const result: number[] = [1, 1];

        expect(new Power().apply(bigNumber, zeroNumber)).toEqual(result);
    });

    test("0 ** 1 = 0", () => {
        const zeroNumber: number[] = [1, 0];
        const bigNumber: number[] = [1, 1];

        const result: number[] = [1, 0];

        expect(new Power().apply(zeroNumber, bigNumber)).toEqual(result);
    });

    test("0 ** 5 = 0", () => {
        const zeroNumber: number[] = [1, 0];
        const bigNumber: number[] = [1, 5];

        const result: number[] = [1, 0];

        expect(new Power().apply(zeroNumber, bigNumber)).toEqual(result);
    });

    test("1 ** 1 = 1", () => {
        const firstBigNumber: number[] = [1, 1];
        const secondBigNumber: number[] = [1, 1];

        const result: number[] = [1, 1];

        expect(new Power().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("5 ** 1 = 5", () => {
        const firstBigNumber: number[] = [1, 5];
        const secondBigNumber: number[] = [1, 1];

        const result: number[] = [1, 5];

        expect(new Power().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("5 ** 3 = 125", () => {
        const firstBigNumber: number[] = [1, 5];
        const secondBigNumber: number[] = [1, 3];

        const result: number[] = [3, 5, 2, 1];

        expect(new Power().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("3 ** 5 = 243", () => {
        const firstBigNumber: number[] = [1, 3];
        const secondBigNumber: number[] = [1, 5];

        const result: number[] = [3, 3, 4, 2];

        expect(new Power().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("15 ** 5 = 759375", () => {
        const firstBigNumber: number[] = [2, 5, 1];
        const secondBigNumber: number[] = [1, 5];

        const result: number[] = [6, 5, 7, 3, 9, 5, 7];

        expect(new Power().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("5 ** 15 = 30517578125", () => {
        const firstBigNumber: number[] = [1, 5];
        const secondBigNumber: number[] = [2, 5, 1];

        const result: number[] = [11, 5, 2, 1, 8, 7, 5, 7, 1, 5, 0, 3];

        expect(new Power().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });
});