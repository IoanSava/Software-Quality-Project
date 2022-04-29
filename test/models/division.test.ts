import { Division } from "../../src/models/division";
import { DivisionByZeroError } from "../../src/errors/division-by-zero-error";

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
    });

    test("100 / 2 = 50", () => {
        const hundred = [3, 0, 0, 1], fifty = [2, 0, 5], two = [1, 2];
        expect(new Division().apply(hundred, two)).toEqual(fifty);
    });

    test("10 / 3 = 3", () => {
        const ten = [2, 0, 1], three = [1, 3];
        expect(new Division().apply(ten, three)).toEqual(three);
    });
});
