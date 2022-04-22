import {convertBigNumberToString} from "../helpers/big-number";

export class NegativeResultOfSubtractionError extends Error {
    constructor(firstBigNumber: number[], secondBigNumber: number[]) {
        const firstBigNumberAsString: string = convertBigNumberToString(firstBigNumber);
        const secondBigNumberAsString: string = convertBigNumberToString(secondBigNumber);
        const errorMessage: string = `Negative result of subtraction encountered: ${firstBigNumberAsString} - ${secondBigNumberAsString}`;
        super(errorMessage);
    }
}