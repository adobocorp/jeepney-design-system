import { isDeprecated } from '../filter/isDeprecated.js';
/**
 * commentDeprecated
 * @description replaces the comment of a token with the deprecated comment
 */
export const commentDeprecated = {
    name: 'comment/deprecated',
    type: `attribute`,
    transitive: true,
    filter: isDeprecated,
    transform: (token) => {
        token.$description = `DEPRECATED${typeof token.$deprecated === 'string' ? `: ${token.$deprecated}` : ''}`;
        return token;
    },
};
