import { doesStringContainOnlyDigits, isFalsy } from "../../src/helpers/utils";

describe("doesStringContainOnlyDigits", () => {
    test("should return true when an empty string is given", () => {
        expect(doesStringContainOnlyDigits("")).toBe(true);
    });

    test("should return true when a digit is given", () => {
        expect(doesStringContainOnlyDigits("1")).toBe(true);
    });

    test("should return true when a number is given", () => {
        expect(doesStringContainOnlyDigits("123")).toBe(true);
    });

    test("should return false when a string with whitespaces is given", () => {
        expect(doesStringContainOnlyDigits("  ")).toBe(false);
    });

    test("should return false when a string with letters is given", () => {
        expect(doesStringContainOnlyDigits("abc")).toBe(false);
    });

    test("should return false when a string with both letters and digits is given", () => {
        expect(doesStringContainOnlyDigits("a1b2c")).toBe(false);
    });
});

describe("isFalsy", () => {
    test("should return true when undefined is given", () => {
        expect(isFalsy(undefined)).toBe(true);
    });

    test("should return true when an empty string is given", () => {
        expect(isFalsy("")).toBe(true);
    });

    test("should return false when a string is given", () => {
        expect(isFalsy("test")).toBe(false);
    });
});