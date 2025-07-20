import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "fs";

// Read the generated tokens
const tokensPath = "./build/tokens.ts";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    // Custom plugin to copy generated tokens to src before build
    {
      name: "copy-tokens",
      buildStart() {
        try {
          // Copy the generated tokens to src directory for rollup to process
          const tokensContent = readFileSync(tokensPath, "utf8");
          this.emitFile({
            type: "asset",
            fileName: "tokens.ts",
            source: tokensContent,
          });
        } catch (error) {
          this.warn(`Could not read tokens file: ${error.message}`);
        }
      },
    },
    typescript({
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
      include: ["src/**/*", "build/tokens.ts"],
    }),
  ],
  external: [],
};
