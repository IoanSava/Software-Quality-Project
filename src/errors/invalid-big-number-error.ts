export class InvalidBigNumberError extends Error {
    constructor(bigNumber: string) {
        const errorMessage: string = `Invalid big number: ${bigNumber}`;
        super(errorMessage);
    }
}