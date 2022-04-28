import {Division} from "../../src/models/division";
import {DivisionByZeroError} from "../../src/errors/division-by-zero-error";

describe("Division.apply", () => {
    test("10 / 0 = DivisionByZeroError", () => {
        const zero = [1, 0], ten = [2, 0, 1];
        expect(() => {
            new Division().apply(ten, zero)
        }).toThrow(new DivisionByZeroError("10", "0"));
    });

    test("99 / 1 = 99", () => {
        const someNumber = [2, 9, 9], one = [1, 1];
        expect(new Division().apply(someNumber, one)).toEqual(someNumber);
    })

    test("100 / 2 = 50", () => {
        expect(new Division().apply([3, 0, 0, 1], [2, 0, 5])).toEqual([1, 2]);
    })

    test("10 / 3 = 3", () => {
        expect(new Division().apply([2, 0, 1], [1, 3])).toEqual([1, 3]);
    })
});
