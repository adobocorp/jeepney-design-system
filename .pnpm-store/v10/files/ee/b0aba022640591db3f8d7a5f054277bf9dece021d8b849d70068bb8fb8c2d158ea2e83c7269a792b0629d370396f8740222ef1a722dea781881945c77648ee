import { isGradient } from '../filter/isGradient.js';
import { getValue } from '../utilities/getValue.js';
export const gradientCss = {
    name: 'gradient/css',
    type: `value`,
    transitive: true,
    filter: isGradient,
    transform: (token) => {
        const tokenValue = getValue(token);
        // combine stops to string
        const stops = tokenValue
            .map((stop) => `${stop.color}${stop.position ? ` ${Math.floor(stop.position * 100)}%` : ''}`)
            .join(', ');
        // return gradient value
        return `${token.angle ? `${token.angle}, ` : ''}${stops}`;
    },
};
