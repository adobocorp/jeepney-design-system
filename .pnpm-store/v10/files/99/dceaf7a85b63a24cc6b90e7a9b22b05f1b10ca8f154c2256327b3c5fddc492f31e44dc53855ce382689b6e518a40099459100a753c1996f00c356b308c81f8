import { getValue } from './getValue.js';
/**
 * Checks if a duration value is in the new object format
 */
export const isDurationValueObject = (value) => {
    return typeof value === 'object' && value !== null && 'value' in value && 'unit' in value;
};
/**
 * Parses a duration string to extract value and unit
 * @param stringValue - string like "300ms" or "2s" or "0"
 * @returns object with value and unit
 */
export const parseDurationString = (stringValue) => {
    // Handle unitless numbers (like "0" or "1.5")
    const unitlessMatch = stringValue.match(/^([\d.-]+)$/);
    if (unitlessMatch) {
        const value = parseFloat(unitlessMatch[1]);
        if (isNaN(value)) {
            throw new Error(`Invalid numeric value in duration string: "${stringValue}"`);
        }
        return { value, unit: '' };
    }
    // Handle values with units
    const match = stringValue.match(/^([\d.-]+)([a-zA-Z%]+)$/);
    if (!match) {
        throw new Error(`Invalid duration string: "${stringValue}"`);
    }
    const value = parseFloat(match[1]);
    const unit = match[2].trim();
    if (isNaN(value)) {
        throw new Error(`Invalid numeric value in duration string: "${stringValue}"`);
    }
    return { value, unit };
};
/**
 * Gets both value and unit from a duration token (supports both formats)
 * @param token - the token to extract data from
 * @returns object with value and unit
 */
export const getDurationValueAndUnit = (token) => {
    const tokenValue = getValue(token);
    if (isDurationValueObject(tokenValue)) {
        return tokenValue;
    }
    // Log deprecation warning for old string format
    logDurationDeprecationWarning(token);
    // Parse old string format
    return parseDurationString(tokenValue);
};
/**
 * Logs a deprecation warning for using the old string format
 * @param token - the token using the old format
 */
export const logDurationDeprecationWarning = (token) => {
    const tokenValue = getValue(token);
    console.error(`DEPRECATED: Token "${token.name}" uses the old string format "${tokenValue}" for duration tokens. ` +
        `Please update to the new object format: {"value": number, "unit": "string"}. ` +
        `This format will be removed in a future major release.`);
};
