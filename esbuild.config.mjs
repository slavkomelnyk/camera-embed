import esbuild from "esbuild";
import process from "process";

const isProd = process.argv.includes("production");

const context = await esbuild.context({
  entryPoints: ["main.ts"],
  bundle: true,
  external: ["obsidian"],
  format: "cjs",
  target: "es2018",
  logLevel: "info",
  sourcemap: isProd ? false : "inline",
  outfile: "main.js",
});

if (isProd) {
  await context.rebuild();
  await context.dispose();
} else {
  await context.watch();
}
