import {
  tailwindCssVarsPlugin,
  themeColors,
} from "@jeepney-design-system/tokens";
import { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "node_modules/@jeepney-design-system/ui/**/*.tsx",
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
    tailwindCssVarsPlugin,
  ], // <-- plugin imported here
};

export default config;
