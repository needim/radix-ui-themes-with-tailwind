import plugin from "tailwindcss/plugin";

import * as colors from "tailwindcss/colors";
import {
  accentColorNames,
  getColorDefinitions,
  getColorTokenName,
  getRadiusTokenName,
  grayColorNames,
  tailwindColorsToRadixMap,
} from "./utils";

const radixThemePlugin = plugin.withOptions(
  ({
    useTailwindColorNames = false,
    useTailwindRadiusNames = false,
    mapMissingTailwindColors = false,
  }: {
    useTailwindColorNames?: boolean;
    useTailwindRadiusNames?: boolean;
    mapMissingTailwindColors?:
      | boolean
      | Partial<typeof tailwindColorsToRadixMap>;
  } = {}) => {
    return function () {};
  },
  ({
    useTailwindColorNames,
    useTailwindRadiusNames,
    mapMissingTailwindColors,
  }) => {
    function generateTailwindColors(colorName: string) {
      const c = {
        ...getColorDefinitions(colorName, false, useTailwindColorNames),
        ...getColorDefinitions(colorName, true, useTailwindColorNames),
      };

      if (grayColorNames.includes(colorName)) {
        c[
          `${getColorTokenName(2, useTailwindColorNames, false)}-translucent`
        ] = `var(--${colorName}-2-translucent)`;
      }

      return c;
    }

    const allRadixColors = [...accentColorNames, ...grayColorNames].reduce<
      Record<string, Record<string, string>>
    >((acc, colorName) => {
      acc[colorName] = { ...generateTailwindColors(colorName) };
      return acc;
    }, {});

    let mappingsOfMissingTailwindColors = {};
    if (typeof mapMissingTailwindColors === "boolean") {
      mappingsOfMissingTailwindColors = {
        zinc: generateTailwindColors("sand"),
        neutral: generateTailwindColors("sage"),
        stone: generateTailwindColors("mauve"),
        emerald: generateTailwindColors("grass"),
        fuchsia: generateTailwindColors("plum"),
        rose: generateTailwindColors("crimson"),
      };
    } else if (typeof mapMissingTailwindColors === "object") {
      mappingsOfMissingTailwindColors = {
        zinc:
          typeof mapMissingTailwindColors["zinc"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["zinc"])
            : mapMissingTailwindColors["zinc"],
        neutral:
          typeof mapMissingTailwindColors["neutral"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["neutral"])
            : mapMissingTailwindColors["neutral"],
        stone:
          typeof mapMissingTailwindColors["stone"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["stone"])
            : mapMissingTailwindColors["stone"],
        emerald:
          typeof mapMissingTailwindColors["emerald"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["emerald"])
            : mapMissingTailwindColors["emerald"],
        fuchsia:
          typeof mapMissingTailwindColors["fuchsia"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["fuchsia"])
            : mapMissingTailwindColors["fuchsia"],
        rose:
          typeof mapMissingTailwindColors["rose"] === "string"
            ? generateTailwindColors(mapMissingTailwindColors["rose"])
            : mapMissingTailwindColors["rose"],
      };
    }

    return {
      theme: {
        spacing: {
          "0": "0px",
          px: "1px",
          "0.5": "calc(2px * var(--scaling))",
          "1": "var(--space-1)",
          "1.5": "calc(6px * var(--scaling))",
          "2": "var(--space-2)",
          "2.5": "calc(10px * var(--scaling))",
          "3": "var(--space-3)",
          "3.5": "calc(14px * var(--scaling))",
          "4": "var(--space-4)",
          "5": "calc(20px * var(--scaling))",
          "6": "var(--space-5)",
          "7": "calc(28px * var(--scaling))",
          "8": "var(--space-6)",
          "9": "calc(36px * var(--scaling))",
          "10": "var(--space-7)",
          "11": "calc(44px * var(--scaling))",
          "12": "var(--space-8)",
          "14": "calc(56px * var(--scaling))",
          "16": "var(--space-9)",
          "20": "calc(80px * var(--scaling))",
          "24": "calc(96px * var(--scaling))",
          "28": "calc(112px * var(--scaling))",
          "32": "calc(128px * var(--scaling))",
          "36": "calc(144px * var(--scaling))",
          "40": "calc(160px * var(--scaling))",
          "44": "calc(176px * var(--scaling))",
          "48": "calc(192px * var(--scaling))",
          "52": "calc(208px * var(--scaling))",
          "56": "calc(224px * var(--scaling))",
          "60": "calc(240px * var(--scaling))",
          "64": "calc(256px * var(--scaling))",
          "72": "calc(288px * var(--scaling))",
          "80": "calc(320px * var(--scaling))",
          "96": "calc(384px * var(--scaling))",
        },
        borderRadius: {
          none: "0px",
          [getRadiusTokenName(1, useTailwindRadiusNames)]: "var(--radius-1)",
          [getRadiusTokenName(2, useTailwindRadiusNames)]: "var(--radius-2)",
          [getRadiusTokenName(3, useTailwindRadiusNames)]: "var(--radius-3)",
          DEFAULT: "var(--radius-3)",
          [getRadiusTokenName(4, useTailwindRadiusNames)]: "var(--radius-4)",
          [getRadiusTokenName(5, useTailwindRadiusNames)]: "var(--radius-5)",
          [getRadiusTokenName(6, useTailwindRadiusNames)]: "var(--radius-6)",
          full: "99999px",
        },
        colors: {
          inherit: "inherit",
          transparent: "transparent",
          current: "currentColor",
          background: "var(--color-background)",
          white: colors.white,
          black: colors.black,
          surface: {
            DEFAULT: "var(--color-surface)",
            accent: "var(--color-surface-accent)",
          },
          overlay: "var(--color-overlay)",
          panel: {
            solid: "var(--color-panel-solid)",
            translucent: "var(--color-panel-translucent)",
          },
          selection: "var(--color-selection-root)",
          ...allRadixColors,
          ...mappingsOfMissingTailwindColors,
          accent: generateTailwindColors("accent"),
          gray: generateTailwindColors("gray"),
        },
      },
    };
  }
);

export default radixThemePlugin;
