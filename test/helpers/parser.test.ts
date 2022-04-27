import { parse } from "../../src/helpers/parser";
import example1 from "./data/example1.json";
import example2 from "./data/example2.json";
import example3 from "./data/example3.json";
import example4 from "./data/example4.json";

describe("parser", () => {
    test("1 + 2", () => {
        const expression = "1 + 2";
        expect(parse(expression)).toEqual(example1);
    });

    test("1 + 2 + 3 + 4", () => {
        const expression = "1 + 2 + 3 + 4";
        expect(parse(expression)).toEqual(example2);
    });

    test("1 * 2 + 3", () => {
        const expression = "1 * 2 + 3";
        expect(parse(expression)).toEqual(example3);
    });

    test("1 * (2 + 3)", () => {
        const expression = "1 * (2 + 3)";
        expect(parse(expression)).toEqual(example4);
    });
});