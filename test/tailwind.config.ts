import type { Config } from "tailwindcss";

import radixThemePlugin from "../src/index";

const config: Config = {
  darkMode: "class",
  content: [],
  theme: {},
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true,
      useTailwindRadiusNames: true,
      mapMissingTailwindColors: true,
    }),
  ],
};

import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(config);

console.log("DEBUG: fullConfig", fullConfig);

export default config;
