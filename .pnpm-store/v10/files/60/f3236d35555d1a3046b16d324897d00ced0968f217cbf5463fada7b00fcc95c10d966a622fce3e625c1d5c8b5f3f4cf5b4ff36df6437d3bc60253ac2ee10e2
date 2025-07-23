var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { format } from 'prettier';
import { fileHeader } from 'style-dictionary/utils';
import { jsonToNestedValue } from '../utilities/jsonToNestedValue.js';
import { jsonToTypes } from '../utilities/jsonToTypes.js';
export const typescriptEsmDeclarations = (_a) => __awaiter(void 0, [_a], void 0, function* ({ dictionary, file, options, platform = {}, }) {
    var _b;
    const { prefix } = platform;
    const tokens = prefix ? { [prefix]: dictionary.tokens } : dictionary.tokens;
    // get root name from file options or use default
    const rootName = ((_b = file.options) === null || _b === void 0 ? void 0 : _b.rootName) || 'DesignToken';
    // convert to typescript type definition
    const values = jsonToTypes(jsonToNestedValue(tokens), '  ', rootName, true);
    const output = (yield fileHeader({ file })) + `${values}\n`;
    // return prettified
    return format(output, Object.assign({ parser: 'typescript', printWidth: 500 }, options === null || options === void 0 ? void 0 : options.prettier));
});
