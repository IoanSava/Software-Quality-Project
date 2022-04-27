import { doesStringContainOnlyDigits, isFalsy } from "../../src/helpers/utils";

describe("doesStringContainOnlyDigits", () => {
    test("should be defined", () => {
        expect(doesStringContainOnlyDigits).toBeDefined();
    });
});

describe("isFalsy", () => {
    test("should be defined", () => {
        expect(isFalsy).toBeDefined();
    });
});