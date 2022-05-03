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

        test("convert 1 to string", () => {
            const bigNumber: number[] = [1, 1];

            const result = "1";

            expect(bigNumberConvertor.convertBigNumberToString(bigNumber)).toBe(result);
        });

        test("convert 123456789 to string", () => {
            const bigNumber: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

            const result = "123456789";

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

        test(`convert "0" to big number`, () => {
            const testString: string = "0";

            const result: number[] = [1, 0];

            expect(bigNumberConvertor.convertStringToBigNumber(testString)).toEqual(result);
        });

        test(`convert "1" to big number`, () => {
            const testString: string = "1";

            const result: number[] = [1, 1];

            expect(bigNumberConvertor.convertStringToBigNumber(testString)).toEqual(result);
        });

        test(`convert "10" to big number`, () => {
            const testString: string = "10";

            const result: number[] = [2, 0, 1];

            expect(bigNumberConvertor.convertStringToBigNumber(testString)).toEqual(result);
        });

        test(`convert "123456789" to big number`, () => {
            const testString: string = "123456789";

            const result: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

            expect(bigNumberConvertor.convertStringToBigNumber(testString)).toEqual(result);
        });

        test(`convert " 123456789  " to big number`, () => {
            const testString: string = " 123456789  ";

            const result: number[] = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

            expect(bigNumberConvertor.convertStringToBigNumber(testString)).toEqual(result);
        });
    });
});