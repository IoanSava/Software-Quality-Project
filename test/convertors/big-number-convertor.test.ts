import { BigNumberConvertor } from "../../src/convertors/big-number-convertor";
import { InvalidBigNumberError } from "../../src/errors/invalid-big-number-error";

describe("BigNumberConvertor", () => {
    const bigNumberConvertor: BigNumberConvertor = new BigNumberConvertor();

    describe("convertBigNumberToString", () => {
        test("convert 0 to string", () => {
            const zeroNumber: number[] = [1, 0];

            const result = "0";

            expect(bigNumberConvertor.convertBigNumberToString(zeroNumber)).toBe(result);
        });

        test("convert 123 to string", () => {
            const bigNumber: number[] = [3, 3, 2, 1];

            const result = "123";

            expect(bigNumberConvertor.convertBigNumberToString(bigNumber)).toBe(result);
        });
    });

    describe("convertStringToBigNumber", () => {
        test("convert non-numeric string to big number", () => {
            const nonNumericString: string = "1ab";

            expect(() => bigNumberConvertor.convertStringToBigNumber(nonNumericString))
                .toThrow(new InvalidBigNumberError(nonNumericString));
        });

        test("convert empty string to big number", () => {
            const emptyString: string = "";

            const result: number[] = [1, 0];

            expect(bigNumberConvertor.convertStringToBigNumber(emptyString)).toEqual(result);
        });

        test(`convert "10" to big number`, () => {
            const testString: string = "10";

            const result: number[] = [2, 0, 1];

            expect(bigNumberConvertor.convertStringToBigNumber(testString)).toEqual(result);
        });

        test(`convert "12345" to big number`, () => {
            const testString: string = "12345";

            const result: number[] = [5, 5, 4, 3, 2, 1];

            expect(bigNumberConvertor.convertStringToBigNumber(testString)).toEqual(result);
        });
    });
});