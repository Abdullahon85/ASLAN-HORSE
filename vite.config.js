import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    // Генерация статичного HTML при сборке: `npm run build:ssg`
    script: "async",
    formatting: "minify",
    mock: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
  },
});
