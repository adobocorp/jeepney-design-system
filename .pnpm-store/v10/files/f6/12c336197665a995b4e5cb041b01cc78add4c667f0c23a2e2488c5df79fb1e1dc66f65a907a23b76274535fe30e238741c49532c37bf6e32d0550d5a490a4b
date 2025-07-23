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
 * namePathToDotNotation
 * @description convert the entire `path` to dot notation, parts are converted to camelCase
 * and replaces the `name` with the dot notation path
 */
export const namePathToDotNotation = {
    name: `name/pathToDotNotation`,
    type: `name`,
    transform: (token, platform) => {
        return [platform === null || platform === void 0 ? void 0 : platform.prefix, ...token.path]
            .filter((part) => typeof part === 'string')
            .map(part => camelCase(part))
            .join('.');
    },
};
