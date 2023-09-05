import resolveConfig from "tailwindcss/resolveConfig";
import config from "../tailwind.config";
import { Config, RecursiveKeyValuePair } from "tailwindcss/types/config";
import { objKeys } from "./utils";

export function ColorPaletteReference() {
  const fullConfig = resolveConfig(config as Config);

  const availableColors: {
    [key: string]: RecursiveKeyValuePair<string, string>;
  } = {};

  Object.entries(fullConfig.theme?.colors || {}).forEach(([key, value]) => {
    const forbiddenKeys = ["panel", "surface", "accent"];

    if (typeof value !== "string" && !forbiddenKeys.includes(key)) {
      availableColors[key] = value;
    }
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
      {Object.entries(availableColors).map(([key, value]) => {
        return (
          <div key={key} className="2xl:contents">
            <div className="text-sm font-semibold 2xl:col-end-1 2xl:pt-2.5 capitalize">
              {key}
            </div>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-12 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
              {objKeys(value).map((scale, j) => {
                scale = scale.toString();

                const forbiddenKeys = [
                  "DEFAULT",
                  "700-contrast",
                  "surface",
                  "50-translucent",
                ];

                return (
                  scale.endsWith("A") ||
                  (!forbiddenKeys.includes(scale) && (
                    <ColorPalette
                      key={j}
                      name={scale}
                      value={availableColors[key][scale].toString()}
                    />
                  ))
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ColorPalette({ name, value }: { name: string; value: string }) {
  return (
    <div className="relative flex">
      <div className="flex items-center gap-x-3 w-full sm:block sm:space-y-1.5">
        <div
          className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
          style={{ backgroundColor: value }}
        />
        <div className="px-0.5">
          <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
            {name}
          </div>
          <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
            {value.replace(/var\(--/, "").replace(")", "")}
          </div>
        </div>
      </div>
    </div>
  );
}
