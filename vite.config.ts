import { fileURLToPath, URL } from "node:url";
// element-plus
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
//unocss
import UnoCSS from "unocss/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    vueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [ElementPlusResolver()],
      dts: "./src/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "./src/types/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
