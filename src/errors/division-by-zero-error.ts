export class DivisionByZeroError extends Error {
    constructor(firstBigNumber: string, secondBigNumber: string) {
        const errorMessage: string = `Division by zero encountered in: ${firstBigNumber} / ${secondBigNumber}`;
        super(errorMessage);
    }
}