import { Subtraction } from "../../src/models/subtraction";
import { NegativeResultOfSubtractionError } from "../../src/errors/negative-result-of-subtraction-error";

describe("Subtraction.apply", () => {
    test("Negative difference should throw error", () => {
        const minuend: number[] = [2, 0, 4];
        const subtrahend: number[] = [3, 0, 4, 1];

        expect(() => new Subtraction().apply(minuend, subtrahend)).toThrow(new NegativeResultOfSubtractionError(minuend, subtrahend));
    });

    // Test is obsolete here, but checks lines 27, 31 for big-number.ts
    //
    test("Bigger sizes than the actual numbers, but subtraction is performed correctly", () => {
        const minuend: number[] = [5, 0, 2, 3, 0, 0];
        const subtrahend: number[] = [7, 5, 1, 3, 0, 0, 0, 0];

        const result: number[] = [1, 5];
        expect(new Subtraction().apply(minuend, subtrahend)).toEqual(result);
    })

    test("Subtracting 0 from a number has no effect on that number", () => {
        const minuend: number[] = [3, 0, 2, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Subtraction().apply(minuend, zeroNumber)).toEqual(minuend);
    });

    test("Subtracting the minuend from itself returns zero", () => {
        const minuend: number[] = [3, 0, 2, 1];
        const zeroNumber: number[] = [1, 0];

        expect(new Subtraction().apply(minuend, minuend)).toEqual(zeroNumber);
    });

    test("Difference of descending consecutive numbers is 1", () => {
        const minuend: number[] = [3, 1, 2, 1];
        const subtrahend: number[] = [3, 0, 2, 1];

        const result: number[] = [1, 1];
        expect(new Subtraction().apply(minuend, subtrahend)).toEqual(result);
    });

    test("342 - 179 = 163", () => {
        const minuend: number[] = [3, 2, 4, 3];
        const subtrahend: number[] = [3, 9, 7, 1];

        const result: number[] = [3, 3, 6, 1];
        expect(new Subtraction().apply(minuend, subtrahend)).toEqual(result);
    });

    test("99 - 44 = 55", () => {
        const minuend: number[] = [2, 9, 9];
        const subtrahend: number[] = [2, 4, 4];

        const result: number[] = [2, 5, 5];
        expect(new Subtraction().apply(minuend, subtrahend)).toEqual(result);
    });

    test("132471 - 53790 = 78681", () => {
        const minuend: number[] = [6, 1, 7, 4, 2, 3, 1];
        const subtrahend: number[] = [5, 0, 9, 7, 3, 5];

        const result: number[] = [5, 1, 8, 6, 8, 7];
        expect(new Subtraction().apply(minuend, subtrahend)).toEqual(result);
    });

    test("999999999 - 111111111 = 888888888", () => {
        const minuend: number[] = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
        const subtrahend: number[] = [9, 1, 1, 1, 1, 1, 1, 1, 1, 1];

        const result: number[] = [9, 8, 8, 8, 8, 8, 8, 8, 8, 8];
        expect(new Subtraction().apply(minuend, subtrahend)).toEqual(result);
    });
});