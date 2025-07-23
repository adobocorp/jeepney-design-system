const capitalize = ([firstLetter, ...restOfWord]) => {
    return firstLetter.toUpperCase() + restOfWord.join('');
};
const camelCase = (string) => {
    return string
        .split(/[\s-_\+]+/g)
        .map((part, index) => (index === 0 ? part : capitalize(part)))
        .join('');
};
/**
 * namePathToCameCase
 * @description convert the entire `path` to camel case and replaces the name
 */
export const namePathToCamelCase = {
    name: `name/pathToCamelCase`,
    type: `name`,
    transform: (token, platform) => {
        return camelCase([platform === null || platform === void 0 ? void 0 : platform.prefix, ...token.path].filter((part) => typeof part === 'string').join('-'));
    },
};
