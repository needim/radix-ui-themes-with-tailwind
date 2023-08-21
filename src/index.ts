import plugin from "tailwindcss/plugin";
import * as radixTheme from "@radix-ui/themes";
import * as colors from "tailwindcss/colors";

const accentColorNames: string[] = [];
const grayColorNames: string[] = [];

radixTheme.themeAccentColorsGrouped.map((group) => {
  accentColorNames.push(...group.values.filter((color) => color !== "gray"));
});
radixTheme.themeGrayColorsGrouped.map((group) => {
  grayColorNames.push(...group.values.filter((color) => color !== "auto"));
});

function getColorTokenName(
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  useTailwindColorNames?: boolean,
  alpha?: boolean
): number | string {
  const map: Record<number, number> = {
    1: 50,
    2: 50,
    3: 100,
    4: 200,
    5: 300,
    6: 400,
    7: 500,
    8: 600,
    9: 700,
    10: 800,
    11: 900,
    12: 950,
  } as const;

  if (!useTailwindColorNames) {
    return alpha ? "a" + number : number;
  }

  return alpha ? (("a" + map[number]) as string) : (map[number] as number);
}

const defaultTailwindColorsToRadixColorsMap: Record<
  string,
  string | Record<string, string>
> = {
  zinc: "sand",
  neutral: "sage",
  stone: "sand",
  emerald: "grass",
  fuchsia: "plum",
  rose: "crimson",
};

export const radixThemePlugin = plugin.withOptions(
  ({
    useTailwindColorNames = false,
    mapMissingTailwindColors = false,
  }: {
    useTailwindColorNames?: boolean;
    mapMissingTailwindColors?:
      | boolean
      | typeof defaultTailwindColorsToRadixColorsMap;
  } = {}) => {
    return function () {};
  },
  ({ useTailwindColorNames, mapMissingTailwindColors }) => {
    function generateTailwindColors(colorName: string) {
      const c = {
        surface: `var(--color-surface-${colorName})`,
        [getColorTokenName(1, useTailwindColorNames)]: `var(--${colorName}-1)`,
        [getColorTokenName(2, useTailwindColorNames)]: `var(--${colorName}-2)`,
        [getColorTokenName(3, useTailwindColorNames)]: `var(--${colorName}-3)`,
        [getColorTokenName(4, useTailwindColorNames)]: `var(--${colorName}-4)`,
        [getColorTokenName(5, useTailwindColorNames)]: `var(--${colorName}-5)`,
        [getColorTokenName(6, useTailwindColorNames)]: `var(--${colorName}-6)`,
        [getColorTokenName(7, useTailwindColorNames)]: `var(--${colorName}-7)`,
        [getColorTokenName(8, useTailwindColorNames)]: `var(--${colorName}-8)`,
        [getColorTokenName(9, useTailwindColorNames)]: `var(--${colorName}-9)`,
        "9-contrast": `var(--${colorName}-9-contrast)`,
        [getColorTokenName(
          10,
          useTailwindColorNames
        )]: `var(--${colorName}-10)`,
        [getColorTokenName(
          11,
          useTailwindColorNames
        )]: `var(--${colorName}-11)`,
        [getColorTokenName(
          12,
          useTailwindColorNames
        )]: `var(--${colorName}-12)`,
        DEFAULT: `var(--${colorName}-9)`,
        [getColorTokenName(
          1,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a1)`,
        [getColorTokenName(
          2,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a2)`,
        [getColorTokenName(
          3,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a3)`,
        [getColorTokenName(
          4,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a4)`,
        [getColorTokenName(
          5,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a5)`,
        [getColorTokenName(
          6,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a6)`,
        [getColorTokenName(
          7,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a7)`,
        [getColorTokenName(
          8,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a8)`,
        [getColorTokenName(
          9,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a9)`,
        [getColorTokenName(
          10,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a10)`,
        [getColorTokenName(
          11,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a11)`,
        [getColorTokenName(
          12,
          useTailwindColorNames,
          true
        )]: `var(--${colorName}-a12)`,
      };

      if (grayColorNames.includes(colorName)) {
        (c as any)[`2-translucent`] = `var(--${colorName}-2-translucent)`;
      }

      return c;
    }

    const allRadixColors = [...accentColorNames, ...grayColorNames].reduce<
      Record<string, Record<string, string>>
    >((acc, colorName) => {
      acc[colorName] = generateTailwindColors(colorName);
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
          none: "0",
          xsmall: "var(--radius-1)",
          small: "var(--radius-3)",
          medium: "var(--radius-4)",
          DEFAULT: "var(--radius-4)",
          large: "var(--radius-5)",
          full: "var(--radius-6)",
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
          accent: {
            surface: "var(--color-surface-accent)",
            1: "var(--accent-1)",
            2: "var(--accent-2)",
            3: "var(--accent-3)",
            4: "var(--accent-4)",
            5: "var(--accent-5)",
            6: "var(--accent-6)",
            7: "var(--accent-7)",
            8: "var(--accent-8)",
            9: "var(--accent-9)",
            "9-contrast": "var(--accent-9-contrast)",
            10: "var(--accent-10)",
            11: "var(--accent-11)",
            12: "var(--accent-12)",
            DEFAULT: "var(--accent-9)",
            a1: "var(--accent-a1)",
            a2: "var(--accent-a2)",
            a3: "var(--accent-a3)",
            a4: "var(--accent-a4)",
            a5: "var(--accent-a5)",
            a6: "var(--accent-a6)",
            a7: "var(--accent-a7)",
            a8: "var(--accent-a8)",
            a9: "var(--accent-a9)",
            a10: "var(--accent-a10)",
            a11: "var(--accent-a11)",
            a12: "var(--accent-a12)",
          },
          gray: {
            surface: "var(--gray-surface)",
            1: "var(--gray-1)",
            2: "var(--gray-2)",
            "2-translucent": "var(--gray-2-translucent)",
            3: "var(--gray-3)",
            4: "var(--gray-4)",
            5: "var(--gray-5)",
            6: "var(--gray-6)",
            7: "var(--gray-7)",
            8: "var(--gray-8)",
            9: "var(--gray-9)",
            "9-contrast": "var(--gray-9-contrast)",
            10: "var(--gray-10)",
            11: "var(--gray-11)",
            12: "var(--gray-12)",
            DEFAULT: "var(--gray-9)",
            a1: "var(--gray-a1)",
            a2: "var(--gray-a2)",
            a3: "var(--gray-a3)",
            a4: "var(--gray-a4)",
            a5: "var(--gray-a5)",
            a6: "var(--gray-a6)",
            a7: "var(--gray-a7)",
            a8: "var(--gray-a8)",
            a9: "var(--gray-a9)",
            a10: "var(--gray-a10)",
            a11: "var(--gray-a11)",
            a12: "var(--gray-a12)",
          },
          ...allRadixColors,
          ...mappingsOfMissingTailwindColors,
        },
      },
    };
  }
);

export default radixThemePlugin;
