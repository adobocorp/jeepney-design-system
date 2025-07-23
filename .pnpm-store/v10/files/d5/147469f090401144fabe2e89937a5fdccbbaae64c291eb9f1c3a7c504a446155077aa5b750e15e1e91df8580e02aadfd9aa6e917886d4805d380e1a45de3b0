import { isTypography } from '../filter/isTypography.js';
import { getValue } from '../utilities/getValue.js';
/**
 * @description convert a w3c `typography` token to a value that can be used with the css `font` property
 */
export const fontCss = {
    name: 'font/css',
    type: `value`,
    transitive: true,
    filter: isTypography,
    transform: (token) => {
        const tokenValue = getValue(token);
        if (!tokenValue)
            return;
        // font: font-style font-variant font-weight font-size/line-height font-family;
        return [
            tokenValue.fontStyle,
            tokenValue.fontWeight,
            `${tokenValue.fontSize}${tokenValue.lineHeight ? '/' + tokenValue.lineHeight : ''}`,
            tokenValue.fontFamily,
        ]
            .filter(Boolean)
            .join(' ');
    },
};
