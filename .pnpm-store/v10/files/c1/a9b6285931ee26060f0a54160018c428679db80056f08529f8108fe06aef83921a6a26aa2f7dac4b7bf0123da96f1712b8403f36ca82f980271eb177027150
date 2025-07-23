import { isClamp } from '../filter/isClamp.js';
import { getValue } from '../utilities/getValue.js';
export const clampCss = {
    name: 'clamp/css',
    type: `value`,
    transitive: true,
    filter: isClamp,
    transform: (token) => {
        const tokenValue = getValue(token);
        if (!tokenValue)
            return;
        return `clamp(${tokenValue.min}, ${tokenValue.ideal}, ${tokenValue.max})`;
    },
};
