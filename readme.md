# Radix UI Themes Integration with Tailwind CSS

## Key Features

- **Tailwind Color Naming**: You have the option to utilize the Tailwind naming convention for colors and radius helpers. This means you can still use familiar classes like `bg-red-500` and `bg-blue-500`, which will be linked to corresponding Radix colors.

- **Color Token Mapping**: Another optional feature allows you to map missing color tokens from Tailwind to Radix colors. For example, you can map tailwind `zinc` to radix `sand` and tailwind `neutral` to radix `sage`, enabling a seamless transition between the two color systems.

## Usage

```bash
pnpm install radix-ui-themes-with-tailwind
```

or

```bash
npm install radix-ui-themes-with-tailwind
```

or

```bash
yarn add radix-ui-themes-with-tailwind
```

then in your `tailwind.config.js` or `tailwind.config.ts` file:

```js
import { radixThemePlugin } from "radix-ui-themes-with-tailwind";

export default {
  darkMode: ["class"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true, // optional
      useTailwindRadiusNames: true, // optional
      mapMissingTailwindColors: true, // optional
    }),
  ],
};
```

## Frequently Asked Questions

**What Are Radix Themes?**

Radix Themes serve as a styled and opinionated component library built on top of the Radix UI primitives. They are designed to expedite project initiation with pre-designed, extensively tested components. (source: [Radix UI Twitter](https://twitter.com/radix_ui/status/1692574289860477432))

**Is This Plugin Necessary for Using Radix Themes?**

No, the plugin is not mandatory. If you're accustomed to Tailwind and prefer not to use Radix Themes' layout utilities (such as `<Box />`, `<Flex />`, `<Grid />`), you can still develop using Tailwind classes (e.g., `className="flex items-center gap-2"`).

## Acknowledgements

- [Radix UI Themes](https://www.radix-ui.com/)
- [Radix UI Colors](https://www.radix-ui.com/colors)
- [Tailwind CSS](https://tailwindcss.com/)
