import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import type { UserConfig } from "vite";

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
};

export default defineConfig(viteConfig);
