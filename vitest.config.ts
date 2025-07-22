import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    exclude: ["**/node_modules/**", "**/playwright/**"],
    globals: true,
    setupFiles: ["src/setupTests.ts"],
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
