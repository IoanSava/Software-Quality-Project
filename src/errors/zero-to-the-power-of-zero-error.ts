export class ZeroToThePowerOfZeroError extends Error {
    constructor() {
        const errorMessage: string = "Zero to the power of zero encountered";
        super(errorMessage);
    }
}