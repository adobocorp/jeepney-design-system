import { toRgba } from 'color2k';
import { isColor } from '../filter/isColor.js';
import { alpha } from '../utilities/alpha.js';
import { getValue } from '../utilities/getValue.js';
/**
 * colorAlphaToRgba
 * @description convert a token of type `color` to a rgba value
 */
export const colorAlphaToRgba = {
    name: 'color/rgbAlpha',
    type: `value`,
    transitive: true,
    filter: isColor,
    transform: (token) => {
        const tokenValue = getValue(token);
        if (token.alpha !== undefined)
            return alpha(tokenValue, token.alpha);
        return toRgba(tokenValue);
    },
};
