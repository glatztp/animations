import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/lib/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "gsap"],
  outDir: "dist",
  minify: true,
  treeshake: true,
  target: "es2020",
  tsconfig: "./tsconfig.lib.json",
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
    options.jsx = "automatic";
  },
});
