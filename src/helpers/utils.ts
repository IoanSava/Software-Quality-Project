/**
 * Verifies if a string contains only digits.
 *
 * Examples: doesStringContainOnlyDigits("123") => true
 *           doesStringContainOnlyDigits("1a3") => false
 *
 * @param str
 */
export function doesStringContainOnlyDigits(str: string): boolean {
    return /^[0-9]*$/.test(str);
}

/**
 * https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
export function isFalsy(str: string): boolean {
    return !str;
}