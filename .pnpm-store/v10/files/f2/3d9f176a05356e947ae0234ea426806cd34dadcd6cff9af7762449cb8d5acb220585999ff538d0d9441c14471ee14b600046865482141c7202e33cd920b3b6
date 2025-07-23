import { getValue } from '../utilities/getValue.js';
/**
 * @name isClamp
 * @type filter
 * @description only returns tokens of type `shadow`
 */
export const isClamp = (token) => {
    const tokenValue = getValue(token);
    return (((token === null || token === void 0 ? void 0 : token.$type) === 'clamp' || (token === null || token === void 0 ? void 0 : token.type) === 'clamp') &&
        tokenValue !== null &&
        typeof tokenValue === 'object' &&
        'min' in tokenValue &&
        'ideal' in tokenValue &&
        'max' in tokenValue);
};
