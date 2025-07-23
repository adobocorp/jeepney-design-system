import { isCubicBezier } from '../filter/isCubicBezier.js';
import { getValue } from '../utilities/getValue.js';
export const cubicBezierCss = {
    name: 'cubicBezier/css',
    type: `value`,
    transitive: true,
    filter: (token) => {
        const tokenValue = getValue(token);
        return isCubicBezier(token) && Array.isArray(tokenValue);
    },
    transform: (token) => {
        const tokenValue = getValue(token);
        const [x1, y1, x2, y2] = tokenValue;
        return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
    },
};
