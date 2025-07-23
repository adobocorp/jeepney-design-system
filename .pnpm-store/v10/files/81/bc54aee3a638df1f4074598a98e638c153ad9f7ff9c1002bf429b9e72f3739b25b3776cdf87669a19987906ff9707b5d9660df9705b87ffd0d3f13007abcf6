import { isBorder } from '../filter/isBorder.js';
import { getValue } from '../utilities/getValue.js';
/**
 * @description convert a w3c `border` token to a value that can be used with the css `border` property
 */
export const borderCss = {
    name: 'border/css',
    type: `value`,
    transitive: true,
    filter: isBorder,
    transform: (token) => {
        const tokenValue = getValue(token);
        if (!tokenValue)
            return;
        if (typeof tokenValue.style !== 'string')
            throw new Error('Only string stroke styles are supported for border tokens');
        return `${tokenValue.width} ${tokenValue.style} ${tokenValue.color}`;
    },
};
