import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import type { UserConfig } from "vitest/config";

const viteConfig: UserConfig = {
  build: {
    target: "esnext",
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  test: {
    environment: "jsdom",
    exclude: ["**/node_modules/**", "**/playwright/**"],
    globals: true,
    setupFiles: ["src/setupTests.ts"],
  },
};

export default defineConfig(viteConfig);
