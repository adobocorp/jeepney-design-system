import { isFontFamily } from '../filter/isFontFamily.js';
import { getValue } from '../utilities/getValue.js';
const hasSpaceInName = (string) => /\s/g.test(string);
/**
 * fontFamilyCss
 * @description if fontFamily is an array, join it with commas and wrap font names with spaces in quotes
 */
export const fontFamilyCss = {
    name: 'fontFamily/css',
    type: `value`,
    transitive: true,
    filter: (token) => isFontFamily(token),
    transform: (token) => {
        const tokenValue = getValue(token);
        // if the value is not an array, return it as is
        if (!Array.isArray(tokenValue))
            return tokenValue;
        // if the value is an array, join it with commas
        return tokenValue.map((string) => (hasSpaceInName(string) ? `'${string}'` : string)).join(', ');
    },
};
