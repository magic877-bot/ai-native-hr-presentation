import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const assets = new URL("../dist/assets/", import.meta.url);
const publicDir = new URL("../public/", import.meta.url);
const output = new URL("../AI-Native-HR-完整演示-双击打开.html", import.meta.url);
const pagesDir = new URL("../docs/", import.meta.url);
const pagesOutput = new URL("index.html", pagesDir);

const files = await readdir(assets);
const cssFile = files.find((file) => file.endsWith(".css"));
const jsFile = files.find((file) => file.endsWith(".js"));
if (!cssFile || !jsFile) throw new Error("Built CSS or JS asset is missing.");

const css = await readFile(new URL(`assets/${cssFile}`, dist), "utf8");
let js = await readFile(new URL(`assets/${jsFile}`, dist), "utf8");

for (const [urlPath, filePath] of [
  ["/visuals/cover-glass-city-v2.png", "visuals/cover-glass-city-v2.png"],
  ["/brand/hrenjia-logo-on-dark.png", "brand/hrenjia-logo-on-dark.png"],
]) {
  const data = await readFile(new URL(filePath, publicDir));
  js = js.replaceAll(urlPath, `data:image/png;base64,${data.toString("base64")}`);
}

if (/\/(?:visuals|brand|assets)\//.test(js)) throw new Error("Standalone build still contains external asset paths.");

const html = `<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="color-scheme" content="dark"><title>AI-Native HR 演示</title><style>${css}</style></head><body><div id="root"></div><script>${js}</script></body></html>`;
await writeFile(output, html);
await mkdir(pagesDir, { recursive: true });
await writeFile(pagesOutput, html);
console.log("Standalone HTML and GitHub Pages entry updated.");
