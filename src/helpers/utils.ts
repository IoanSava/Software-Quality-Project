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

/**
 * Transforms a string containig the variables and their values in a map 
 * 
 * Example: transformValuesToMap("a=123, b=456") => {"a": "123", "b": "456"}
 * 
 * @param values - a string containig variables and their values
 */
export function transformValuesToMap(values: string): Map<string, string> {
    let mapOfValues: Map<string, string> = new Map<string, string>();
    if (values) {
        console.assert(values, "There are no specified values for the variables.");

        values = values.replace(/\s/g, "");
        let params: string[] = values.split(",");
        for (let i = 0; i < params.length; ++i) {
            console.assert(i >= 0, "i < 0");
            console.assert(i < params.length, "i >= params.length");

            if (params[i]) {
                console.assert(params[i],
                    "The parameters have an inccorect format.");

                let parts: string[] = params[i].split('=');
                if (parts[0] && parts[1]) {
                    console.assert(parts[0] && parts[1],
                        "The declaration of the variables has an incorrect format.");

                    mapOfValues.set(parts[0], parts[1]);
                }
            }
        }
    }

    return mapOfValues;
}