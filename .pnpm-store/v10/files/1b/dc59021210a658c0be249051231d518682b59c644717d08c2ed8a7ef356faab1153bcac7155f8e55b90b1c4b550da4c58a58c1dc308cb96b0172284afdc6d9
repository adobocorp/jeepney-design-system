import { toHex } from 'color2k';
import { alpha } from '../utilities/alpha.js';
import { isColor } from '../filter/isColor.js';
import { getValue } from '../utilities/getValue.js';
/**
 * colorAlphaToHex
 * @description convert a token of type `color` to a hex8 value if alpha < 1 and hex6 if alpha is 1
 */
export const colorAlphaToHex = {
    name: 'color/hexAlpha',
    type: `value`,
    transitive: true,
    filter: isColor,
    transform: (token) => {
        const tokenValue = getValue(token);
        if (token.alpha)
            return toHex(alpha(tokenValue, token.alpha));
        return toHex(tokenValue);
    },
};
