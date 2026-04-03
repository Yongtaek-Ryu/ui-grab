import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const uiGrabSourceRoot = resolve(__dirname, "../ui-grab-runtime/src");
const uiGrabCoreEntry = resolve(uiGrabSourceRoot, "core/index.tsx");
const uiGrabSourceStyles = resolve(uiGrabSourceRoot, "styles.css");

const normalizePath = (value: string) => value.replaceAll("\\", "/");

export default defineConfig({
  plugins: [
    {
      name: "ui-grab-runtime-css-text",
      enforce: "pre",
      resolveId(source, importer) {
        if (source !== "../../dist/styles.css" || !importer) return null;
        if (normalizePath(importer) !== normalizePath(uiGrabCoreEntry)) {
          return null;
        }
        return `${uiGrabSourceStyles}?inline`;
      },
    },
    react({
      exclude: [/packages\/ui-grab-runtime\/src\/.*\.[jt]sx?$/],
    }),
    solid({
      include: [/packages\/ui-grab-runtime\/src\/.*\.[jt]sx?$/],
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sample: resolve(__dirname, "sample.html"),
      },
    },
  },
  server: {
    port: 5175,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": "/src",
      "ui-grab": resolve(uiGrabSourceRoot, "index.ts"),
      "ui-grab/core": resolve(uiGrabSourceRoot, "core/index.tsx"),
      "ui-grab/primitives": resolve(uiGrabSourceRoot, "primitives.ts"),
      "ui-grab/styles.css": resolve(uiGrabSourceRoot, "styles.css"),
    },
  },
});
