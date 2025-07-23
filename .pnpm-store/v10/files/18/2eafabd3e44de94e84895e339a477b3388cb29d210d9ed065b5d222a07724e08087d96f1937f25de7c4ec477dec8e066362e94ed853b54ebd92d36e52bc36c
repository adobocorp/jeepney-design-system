import { isDimension } from '../filter/isDimension.js';
import { getDimensionValue } from '../utilities/getDimensionValue.js';
/**
 * @description base font size from options or 16
 * @param options
 * @returns number
 */
const getBasePxFontSize = (options) => ((options === null || options === void 0 ? void 0 : options.basePxFontSize) ? options.basePxFontSize : 16);
/**
 * @description checks if token value has a specific unit
 * @param value token value
 * @param unit unit string like px or value
 * @returns boolean
 */
const hasUnit = (value, unit) => {
    if (typeof value === 'number') {
        return false;
    }
    return value.indexOf(unit) > -1;
};
/**
 * @description converts dimension tokens value to float without unit, ignores `em` as they are relative to the font size of the parent element
 * @type value transformer — [StyleDictionary.ValueTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher matches all tokens of $type `dimension`
 * @transformer returns a float number
 */
export const dimensionToPixelUnitless = {
    name: 'dimension/pixelUnitless',
    type: `value`,
    transitive: true,
    filter: isDimension,
    transform: (token, options) => {
        const dimensionValue = getDimensionValue(token);
        const baseFont = getBasePxFontSize(options);
        const floatVal = parseFloat(dimensionValue);
        if (isNaN(floatVal)) {
            throw new Error(`Invalid dimension token: '${token.name}: ${dimensionValue}' is not valid and cannot be transform to 'float' \n`);
        }
        if (floatVal === 0) {
            return 0;
        }
        if (hasUnit(dimensionValue, 'rem')) {
            return floatVal * baseFont;
        }
        if (hasUnit(dimensionValue, 'px')) {
            return floatVal;
        }
        return dimensionValue;
    },
};
