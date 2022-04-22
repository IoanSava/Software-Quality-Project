import {Addition} from "../../src/models/addition";

describe("Addition.apply", () => {
    test("321 + 0 = 321", () => {
        const bigNumber: number[] = [3, 1, 2, 3];
        const zeroNumber: number[] = [1, 0];

        expect(new Addition().apply(bigNumber, zeroNumber)).toEqual(bigNumber);
    });

    test("25 + 46 = 71", () => {
        const firstBigNumber: number[] = [2, 5, 2];
        const secondBigNumber: number[] = [2, 6, 4];

        const result: number[] = [2, 1, 7];

        expect(new Addition().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });

    test("21 + 99 = 120", () => {
        const firstBigNumber: number[] = [2, 1, 2];
        const secondBigNumber: number[] = [2, 9, 9];

        const result: number[] = [3, 0, 2, 1];

        expect(new Addition().apply(firstBigNumber, secondBigNumber)).toEqual(result);
    });
});