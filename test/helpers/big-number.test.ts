import {convertBigNumberToString} from "../../src/helpers/big-number";

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
})