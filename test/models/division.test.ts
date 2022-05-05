import { Division } from "../../src/models/division";
import { DivisionByZeroError } from "../../src/errors/division-by-zero-error";

describe("Division.apply", () => {
    test("0 / 0 = DivisionByZeroError", () => {
        const zeroNumber: number[] = [1, 0];

        expect(() => {
            new Division().apply(zeroNumber, zeroNumber)
        }).toThrow(new DivisionByZeroError("0", "0"))
    });

    test("1 / 0 = DivisionByZeroError", () => {
        const bigNumber: number[] = [1, 1];
        const zeroNumber: number[] = [1, 0];

        expect(() => {
            new Division().apply(bigNumber, zeroNumber)
        }).toThrow(new DivisionByZeroError("1", "0"))
    });

    test("123456789 / 0 = DivisionByZeroError", () => {
        const bigNumber: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const zeroNumber: number[] = [1, 0];

        expect(() => {
            new Division().apply(bigNumber, zeroNumber)
        }).toThrow(new DivisionByZeroError("123456789", "0"))
    });

    test("0 / 1 = 0", () => {
        const bigNumber: number[] = [1, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Division().apply(zeroNumber, bigNumber)).toEqual(zeroNumber);
    });

    test("0 / 123456789 = 0", () => {
        const bigNumber: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Division().apply(zeroNumber, bigNumber)).toEqual(zeroNumber);
    });

    test("10 / 0 = DivisionByZeroError", () => {
        const bigNumber: number[] = [2, 0, 1];
        const zeroNumber: number[] = [1, 0];

        expect(() => {
            new Division().apply(bigNumber, zeroNumber)
        }).toThrow(new DivisionByZeroError("10", "0"));
    });

    test("99 / 1 = 99", () => {
        const firstBigNumber: number[] = [2, 9, 9];
        const secondBigNumber: number[] = [1, 1];

        expect(new Division().apply(firstBigNumber, secondBigNumber)).toEqual(firstBigNumber);
    });

    test("100 / 2 = 50", () => {
        const firstBigNumber: number[] = [3, 0, 0, 1];
        const secondBigNumber: number[] = [1, 2];

        const result: number[] = [2, 0, 5];

        expect(new Division().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("10 / 3 = 3", () => {
        const firstBigNumber: number[] = [2, 0, 1];
        const secondBigNumber: number[] = [1, 3];

        expect(new Division().apply(firstBigNumber, secondBigNumber)).toEqual(secondBigNumber);
    });

    test("12345 / 2 = 6172", () => {
        const firstBigNumber: number[] = [5, 5, 4, 3, 2, 1];
        const secondBigNumber: number[] = [1, 2];

        const result: number[] = [4, 2, 7, 1, 6];

        expect(new Division().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("20 / 20 = 1", () => {
        const bigNumber: number[] = [2, 0, 2];

        const result: number[] = [1, 1];

        expect(new Division().apply(bigNumber, bigNumber)).toEqual(result);
    });

    test("26 / 73 = 0", () => {
        const firstBigNumber: number[] = [2, 6, 2];
        const secondBigNumber: number[] = [2, 3, 7];

        const result: number[] = [1, 0];

        expect(new Division().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });
});
