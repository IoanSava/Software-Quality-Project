import { doesStringContainOnlyDigits, isFalsy, transformValuesToMap } from "../../src/helpers/utils";

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

describe("transformValuesToMap", () => {
    test("should return an empty map when undefined is given", () => {
        let expectedMap: Map<string, string> = new Map();
        expect(transformValuesToMap(undefined)).toEqual(expectedMap);
    });

    test("should return an empty map when an empty string is given", () => {
        let expectedMap: Map<string, string> = new Map();
        expect(transformValuesToMap("")).toEqual(expectedMap);
    });

    test("should return an empty map with when a string containig only a variable is given", () => {
        let values = "a";
        let expectedMap: Map<string, string> = new Map();
        expect(transformValuesToMap(values)).toEqual(expectedMap);
    });

    test("should return an empty map when a string containig multiple variables without values is given", () => {
        let values = "x,y,z";
        let expectedMap: Map<string, string> = new Map();
        expect(transformValuesToMap(values)).toEqual(expectedMap);
    });

    test("should return a map with a single tuple when a string with multiple commas is given", () => {
        let values = "test=8365,,,,";
        let expectedMap: Map<string, string> = new Map();
        expectedMap.set("test", "8365");
        expect(transformValuesToMap(values)).toEqual(expectedMap);
    });

    test("should return a map with a single tuple when a string with commas and equal signs is given", () => {
        let values = "test=87402,=,,=,";
        let expectedMap: Map<string, string> = new Map();
        expectedMap.set("test", "87402");
        expect(transformValuesToMap(values)).toEqual(expectedMap);
    });

    test("should return an empty map when a string with only the variable is given", () => {
        let values = "test=,";
        let expectedMap: Map<string, string> = new Map();
        expect(transformValuesToMap(values)).toEqual(expectedMap);
    });

    test("should return a map with the corresponding variables and values when a string containig variables, values and spaces is given", () => {
        let values = "  a=123,  b=456,   c=789 ";
        let expectedMap: Map<string, string> = new Map();
        expectedMap.set("a", "123");
        expectedMap.set("b", "456");
        expectedMap.set("c", "789");
        expect(transformValuesToMap(values)).toEqual(expectedMap);
    });

    test("should return a map with the corresponding variables and values when a string containig variables and values is given", () => {
        let values = "first=630,second=19273";
        let expectedMap: Map<string, string> = new Map();
        expectedMap.set("first", "630");
        expectedMap.set("second", "19273");
        expect(transformValuesToMap(values)).toEqual(expectedMap);
    });
});