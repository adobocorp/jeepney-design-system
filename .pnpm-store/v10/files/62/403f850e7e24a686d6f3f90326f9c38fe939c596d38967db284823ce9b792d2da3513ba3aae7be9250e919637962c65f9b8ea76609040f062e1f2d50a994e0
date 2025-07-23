var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fileHeader, formattedVariables } from 'style-dictionary/utils';
import { format } from 'prettier';
export const cssAdvanced = (_a) => __awaiter(void 0, [_a], void 0, function* ({ dictionary: originalDictionary, options = {
    rules: [],
}, file, }) {
    var _b, _c, _d, _e, _f;
    // get options
    const { outputReferences, outputReferenceFallbacks, formatting, usesDtcg } = options;
    // selector
    const defaultSelector = ((_b = file === null || file === void 0 ? void 0 : file.options) === null || _b === void 0 ? void 0 : _b.selector) !== undefined ? (_c = file === null || file === void 0 ? void 0 : file.options) === null || _c === void 0 ? void 0 : _c.selector : ':root';
    // query extension property
    const queryExtProp = ((_d = file === null || file === void 0 ? void 0 : file.options) === null || _d === void 0 ? void 0 : _d.queryExtensionProperty) || 'mediaQuery';
    // get queries from file options
    const rules = ((_e = file === null || file === void 0 ? void 0 : file.options) === null || _e === void 0 ? void 0 : _e.rules) || [
        {
            atRule: undefined,
            selector: undefined,
            matcher: () => true,
        },
    ];
    // set formatting
    const mergedFormatting = Object.assign({ commentStyle: 'long' }, formatting);
    // clone dictioxnary
    const dictionary = Object.assign({}, originalDictionary);
    // get queries from tokens
    for (const designToken of dictionary.allTokens) {
        const atRule = (_f = designToken.$extensions) === null || _f === void 0 ? void 0 : _f[queryExtProp];
        // early abort if query does not exist on token
        if (!atRule)
            continue;
        // if query exists already from other token
        const currentQueryIndex = rules.findIndex((q) => q.atRule === atRule);
        // if query exists
        if (currentQueryIndex > -1) {
            rules[currentQueryIndex] = Object.assign(Object.assign({}, rules[currentQueryIndex]), { matcher: (token) => rules[currentQueryIndex].matcher(token) ||
                    token.$extensions[queryExtProp] === rules[currentQueryIndex].atRule });
        }
        // if query does not exist
        else {
            rules.push({
                atRule,
                matcher: (token) => { var _a; return ((_a = token.$extensions) === null || _a === void 0 ? void 0 : _a[queryExtProp]) === atRule; },
            });
        }
    }
    // add file header
    const output = [yield fileHeader({ file })];
    // add single theme css
    for (const { atRule, selector, matcher } of rules) {
        let preludes = !Array.isArray(atRule) ? [atRule] : atRule;
        // add selectors to preludes
        preludes.push(typeof selector === 'string' || selector === false ? selector : defaultSelector);
        // remove invalid preludes
        preludes = preludes.filter(Boolean);
        // filter tokens to only include the ones that pass the matcher
        const filteredDictionary = Object.assign(Object.assign({}, dictionary), { allTokens: dictionary.allTokens.filter(matcher || (() => true)) });
        // early abort if no matches
        if (!filteredDictionary.allTokens.length)
            continue;
        // add tokens into root
        const css = formattedVariables({
            format: 'css',
            dictionary: filteredDictionary,
            outputReferences,
            outputReferenceFallbacks,
            formatting: mergedFormatting,
            usesDtcg,
        });
        // atRule css
        let cssWithSelector = css;
        for (const prelude of preludes.reverse()) {
            cssWithSelector = `${prelude} { ${cssWithSelector} }`;
        }
        // add css with or without query
        output.push(cssWithSelector);
    }
    // return prettified
    return format(output.join('\n'), { parser: 'css', printWidth: 500 });
});
