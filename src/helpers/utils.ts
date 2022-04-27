export function doesStringContainOnlyDigits(str: string): boolean {
    return /^[0-9]*$/.test(str);
}

export function isFalsy(str: string): boolean {
    return !str;
}