export class IllegalStateError extends Error {
    constructor() {
        super("Illegal state encountered.");
    }
}