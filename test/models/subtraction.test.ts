import {Subtraction} from "../../src/models/subtraction";
import {NegativeResultOfSubtractionError} from "../../src/errors/negative-result-of-subtraction-error";

describe("Subtraction.apply", () => {
    test("Negative difference should throw error", () => {
        const minuend: number[] = [2, 0, 4];
        const subtrahend: number[] = [3, 0, 4, 1];

        expect(() => new Subtraction().apply(minuend, subtrahend)).toThrow(new NegativeResultOfSubtractionError(minuend, subtrahend));
    });

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
});