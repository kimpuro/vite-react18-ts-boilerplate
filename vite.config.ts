import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  assetsInclude: ["**/*.jpg"],
  resolve: {
    alias: [
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/components" },
      { find: "@assets", replacement: "/src/assets" },
    ],
  },
});
