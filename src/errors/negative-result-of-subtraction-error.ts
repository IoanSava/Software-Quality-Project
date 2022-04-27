import {BigNumberConvertor} from "../convertors/big-number-convertor";

export class NegativeResultOfSubtractionError extends Error {
    constructor(firstBigNumber: number[], secondBigNumber: number[]) {
        const bigNumberConvertor: BigNumberConvertor = new BigNumberConvertor();
        const firstBigNumberAsString: string = bigNumberConvertor.convertBigNumberToString(firstBigNumber);
        const secondBigNumberAsString: string = bigNumberConvertor.convertBigNumberToString(secondBigNumber);
        const errorMessage: string = `Negative result of subtraction encountered: ${firstBigNumberAsString} - ${secondBigNumberAsString}`;
        super(errorMessage);
    }
}