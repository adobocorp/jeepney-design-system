import { toRgba } from 'color2k';
import { isColor } from '../filter/isColor.js';
import { getValue } from '../utilities/getValue.js';
/**
 * colorToRgba
 * @description convert a token of type `color` to a rgba value
 */
export const colorToRgba = {
    name: 'color/rgba',
    type: `value`,
    transitive: true,
    filter: isColor,
    transform: (token) => toRgba(getValue(token)),
};
