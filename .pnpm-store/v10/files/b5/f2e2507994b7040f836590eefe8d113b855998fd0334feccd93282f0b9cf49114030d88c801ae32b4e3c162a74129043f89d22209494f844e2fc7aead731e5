import { isShadow } from '../filter/isShadow.js';
import { getValue } from '../utilities/getValue.js';
const formatShadow = ({ offsetX = '0', offsetY = '0', blur = '0', spread = '0', color, inset = false, }) => `${offsetX} ${offsetY} ${blur} ${spread} ${color} ${inset ? 'inset' : ''}`.trim();
export const shadowCss = {
    name: 'shadow/css',
    type: `value`,
    transitive: true,
    filter: isShadow,
    transform: (token) => {
        const tokenValue = getValue(token);
        if (Array.isArray(tokenValue)) {
            return tokenValue.map(formatShadow).join(', ');
        }
        if (typeof tokenValue === 'object') {
            return formatShadow(tokenValue);
        }
        return tokenValue;
    },
};
