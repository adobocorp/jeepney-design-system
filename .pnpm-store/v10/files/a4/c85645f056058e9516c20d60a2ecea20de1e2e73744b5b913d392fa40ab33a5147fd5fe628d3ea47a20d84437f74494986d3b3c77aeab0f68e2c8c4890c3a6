import { isDimension } from '../filter/isDimension.js';
import { getDimensionValue } from '../utilities/getDimensionValue.js';
/**
 * dimensionRemToPixel
 * @description convert all dimensions that use rem value to pixels, uses `platform.options.basePxFontSize`
 * as the base font, or `16` if not provided
 */
export const dimensionRemToPixel = {
    name: 'dimension/remToPixel',
    type: `value`,
    transitive: true,
    filter: (token) => {
        const dimensionValue = getDimensionValue(token);
        return isDimension(token) && dimensionValue.substring(dimensionValue.length - 3) === 'rem';
    },
    transform: (token, platform) => {
        const dimensionValue = getDimensionValue(token);
        const baseFont = (platform === null || platform === void 0 ? void 0 : platform.basePxFontSize) || 16;
        const floatVal = parseFloat(dimensionValue);
        if (isNaN(floatVal)) {
            throw `Invalid Number: '${token.name}: ${dimensionValue}' is not a valid number, cannot transform to rem \n`;
        }
        if (floatVal === 0) {
            return '0';
        }
        return `${baseFont * floatVal}px`;
    },
};
