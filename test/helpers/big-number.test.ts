import { compare, convertBigNumberToString } from "../../src/helpers/big-number";

describe("convertBigNumberToString", () => {
    test("convert 0 to string", () => {
        const zeroNumber: number[] = [1, 0];

        const result = "0";

        expect(convertBigNumberToString(zeroNumber)).toBe(result);
    });

    test("convert 123 to string", () => {
        const bigNumber: number[] = [3, 3, 2, 1];

        const result = "123";

        expect(convertBigNumberToString(bigNumber)).toBe(result);
    });

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
})