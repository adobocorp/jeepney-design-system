import { Config } from "tailwindcss";
import themeColors from "@adobo-network/tokens/build/tailwind/themeColors.js";
import cssVarsPlugin from "@adobo-network/tokens/build/tailwind/cssVarsPlugin";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "node_modules/@adobo-network/authentication-forms/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        ...themeColors, // <-- theme colors defined here
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-autofill"),
    require("tailwindcss-text-fill"),
    require("tailwindcss-shadow-fill"),
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        ".wrap-anywhere": {
          "overflow-wrap": "anywhere",
        },
        ".hide-scrollbar": {
          /* For Firefox */
          "scrollbar-width": "none",
          /* For Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
    cssVarsPlugin,
  ], // <-- plugin imported here
};

export default config;
