/**
 * @description converts the [TransformedToken's](https://github.com/amzn/style-dictionary/blob/main/types/TransformedToken.d.ts) `.path` array to a PascalCase string, preserves casing of parts
 * @type name transformer — [StyleDictionary.NameTransform](https://github.com/amzn/style-dictionary/blob/main/types/Transform.d.ts)
 * @matcher omitted to match all tokens
 * @transformer returns `string` PascalCase
 */
export const namePathToPascalCase = {
    name: `name/pathToPascalCase`,
    type: `name`,
    transform: (token, options) => {
        return ([options === null || options === void 0 ? void 0 : options.prefix, ...token.path]
            // remove undefined if exists
            .filter((part) => typeof part === 'string' && part !== '@')
            .map(part => part[0].toUpperCase() + part.substring(1))
            .join(''));
    },
};
