import * as radixTheme from "@radix-ui/themes";

export const accentColorNames: string[] = [];
export const grayColorNames: string[] = [];
const radixColorScales = 12;
type RadixColorScales = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

radixTheme.themeAccentColorsGrouped.map((group) => {
  accentColorNames.push(...group.values.filter((color) => color !== "gray"));
});
radixTheme.themeGrayColorsGrouped.map((group) => {
  grayColorNames.push(...group.values.filter((color) => color !== "auto"));
});

export function getColorTokenName(
  number: RadixColorScales,
  useTailwindColorNames?: boolean,
  alpha?: boolean
): number | string {
  const map: Record<number, number> = {
    1: 25,
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
    return alpha ? number + "A" : number;
  }

  return alpha ? ((map[number] + "A") as string) : (map[number] as number);
}

export const getColorDefinitions = (
  color: string,
  alpha?: boolean,
  useTailwindColorNames?: boolean
) => {
  const colors = Array.from(Array(radixColorScales).keys()).reduce(
    (acc, _, i) => {
      acc[
        getColorTokenName(
          (i + 1) as RadixColorScales,
          useTailwindColorNames,
          alpha
        )
      ] = `var(--${color}-${alpha ? "a" : ""}${i + 1})`;
      return acc;
    },
    {} as Record<string, string>
  );

  if (!alpha) {
    colors[
      `${getColorTokenName(9, useTailwindColorNames, alpha)}-contrast`
    ] = `var(--${color}-9-contrast)`;
    colors["surface"] = `var(--${color}-surface)`;
    colors["DEFAULT"] = `var(--${color}-9)`;
  }

  return colors;
};

type RadixColors = Exclude<
  | (typeof radixTheme.themeAccentColorsOrdered)[number]
  | (typeof radixTheme.themeGrayColorsGrouped)[0]["values"][number],
  "auto"
>;

export const tailwindColorsToRadixMap: Record<
  "zinc" | "neutral" | "stone" | "emerald" | "fuchsia" | "rose",
  RadixColors | Record<string, string>
> = {
  zinc: "sand",
  neutral: "sage",
  stone: "sand",
  emerald: "grass",
  fuchsia: "plum",
  rose: "crimson",
};

const radixRadiusToTailwindMap = {
  1: "xxs",
  2: "xs",
  3: "sm",
  4: "md",
  5: "lg",
  6: "xl",
} as const;

export function getRadiusTokenName(
  radius: keyof typeof radixRadiusToTailwindMap,
  useTailwindColorNames?: boolean
): string | number {
  return useTailwindColorNames ? radixRadiusToTailwindMap[radius] : radius;
}
