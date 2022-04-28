import {SquareRoot} from "../../src/models/square-root";

describe("SquareRoot.apply", () => {
    test("sqrt(0) = 0", () => {
        const testNumber: number[] = [1, 0];
        const result: number[] = [1, 0];
        
        expect(new SquareRoot().apply(testNumber)).toEqual(result);
    });

    test("sqrt(1) = 1", () => {
        const testNumber: number[] = [1, 1];
        const result: number[] = [1, 1];
        
        expect(new SquareRoot().apply(testNumber)).toEqual(result);
    });

    test("sqrt(121) = 11", () => {
        const testNumber: number[] = [3, 1, 2, 1];
        const result: number[] = [2, 1, 1];
        
        expect(new SquareRoot().apply(testNumber)).toEqual(result);
    });

    test("sqrt(40) approximately equal to 6", () => {
        const testNumber: number[] = [2, 0, 4];
        const result: number[] = [1, 6];
        
        expect(new SquareRoot().apply(testNumber)).toEqual(result);
    })
});