import { TransformedToken } from 'style-dictionary/types';
/**
 * Type definition for the new duration object format
 */
export interface DurationValue {
    value: number;
    unit: string;
}
/**
 * Type definition for duration values (old string or new object format)
 */
export type DurationTokenValue = string | DurationValue;
/**
 * Checks if a duration value is in the new object format
 */
export declare const isDurationValueObject: (value: DurationTokenValue) => value is DurationValue;
/**
 * Parses a duration string to extract value and unit
 * @param stringValue - string like "300ms" or "2s" or "0"
 * @returns object with value and unit
 */
export declare const parseDurationString: (stringValue: string) => DurationValue;
/**
 * Gets both value and unit from a duration token (supports both formats)
 * @param token - the token to extract data from
 * @returns object with value and unit
 */
export declare const getDurationValueAndUnit: (token: TransformedToken) => DurationValue;
/**
 * Logs a deprecation warning for using the old string format
 * @param token - the token using the old format
 */
export declare const logDurationDeprecationWarning: (token: TransformedToken) => void;
