"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommended = void 0;
const tslib_1 = require("tslib");
const node_module_1 = require("node:module");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const base_1 = require("./base");
const overrides = [
    Object.assign({ files: ['*.md', '*.mdx'], extends: 'plugin:mdx/overrides' }, base_1.base),
    {
        files: '**/*.{md,mdx}/**',
        extends: 'plugin:mdx/code-blocks',
    },
];
exports.recommended = {
    overrides,
};
const getImportMetaUrl = () => {
    try {
        return new Function('return import.meta.url')();
    }
    catch (_a) {
        return node_path_1.default.resolve(process.cwd(), '__test__.js');
    }
};
const cjsRequire = typeof require === 'undefined' ? (0, node_module_1.createRequire)(getImportMetaUrl()) : require;
const addPrettierRules = () => {
    try {
        cjsRequire.resolve('prettier');
        const { meta } = cjsRequire('eslint-plugin-prettier');
        const version = (meta === null || meta === void 0 ? void 0 : meta.version) || '';
        const [major, minor, patch] = version.split('.');
        if (+major > 5 ||
            (+major === 5 &&
                (+minor > 1 || (+minor === 1 && Number.parseInt(patch) >= 2)))) {
            return;
        }
        overrides.push({
            files: '*.md',
            rules: {
                'prettier/prettier': [
                    'error',
                    {
                        parser: 'markdown',
                    },
                ],
            },
        }, {
            files: '*.mdx',
            rules: {
                'prettier/prettier': [
                    'error',
                    {
                        parser: 'mdx',
                    },
                ],
            },
        });
    }
    catch (_a) { }
};
addPrettierRules();
//# sourceMappingURL=recommended.js.map