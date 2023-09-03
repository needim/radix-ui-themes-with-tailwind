import { Heading, Text } from "@radix-ui/themes";
import React from "react";
// import { useTheme } from "../useTheme";

import Refractor from "react-refractor";
import ts from "refractor/lang/typescript";
import bash from "refractor/lang/bash";

Refractor.registerLanguage(ts);
Refractor.registerLanguage(bash);

const installationCode = `pnpm install radix-ui-themes-with-tailwind -D
# or
npm install radix-ui-themes-with-tailwind -D
# or
yarn install radix-ui-themes-with-tailwind -D
`;

export function Usage(): React.ReactElement {
  // const { theme } = useTheme();
  return (
    <React.Fragment>
      <Heading size="5" className="mb-2 mt-10">
        Usage
      </Heading>
      <Text>
        To get started, install the plugin using your preferred package manager.
      </Text>

      <Refractor
        className="rounded mt-4 !bg-gray-100 Pre"
        language="bash"
        value={installationCode}
      />

      <Text className="mt-8 block">
        Then, add the plugin to your Tailwind config file.
      </Text>

      <Refractor
        language="ts"
        markers={[3, 11, 12, 13, 14, 15]}
        className="rounded mt-4 !bg-gray-100 Pre"
        value={`import type { Config } from "tailwindcss";

import { radixThemePlugin } from "radix-ui-themes-with-tailwind";

const config: Config = {
  content: [
    // ...
  ],
  theme: {},
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true,
      useTailwindRadiusNames: true,
      mapMissingTailwindColors: true,
    }),
  ],
};
export default config;`}
      />
    </React.Fragment>
  );
}
