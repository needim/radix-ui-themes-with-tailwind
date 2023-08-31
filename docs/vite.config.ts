import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    build: {
      outDir: "../docs-serve",
    },
  };

  if (command !== "serve") {
    config.base = "/radix-ui-themes-with-tailwind/";
  }

  return config;
});
