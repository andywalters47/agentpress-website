import path from "node:path";
import { fileURLToPath } from "node:url";
import { copyFile } from "node:fs/promises";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = path.join(root, "public", "assets", "AP_landscape_for_light_bg.svg");
const fontPath = path.join(root, "public", "fonts", "NeuSans-Book.woff2");
const outputPath = path.join(root, "public", "agentpress_og_ai_automation_v2.png");

const width = 1200;
const height = 630;
const inset = 64;
const headline = "We help mid-market companies grow revenue and reduce costs with AI";
const lines = [
  "We help mid-market",
  "companies grow revenue",
  "and reduce costs with AI",
];
if (lines.join(" ") !== headline) throw new Error("OG headline must match the homepage headline exactly");

// Real brand lockup and Neu Sans. No decorative rules, supporting copy or art.
const rendered = await sharp({
  text: {
    text: `<span foreground="#212121" weight="400">${lines.join("\n")}</span>`,
    font: "NeuSans Book, 88",
    fontfile: fontPath,
    spacing: 10,
    dpi: 72,
    rgba: true,
  },
}).png().toBuffer({ resolveWithObject: true });
const headlineTop = 226;
if (rendered.info.width > width - inset * 2 || headlineTop + rendered.info.height > height - inset) {
  throw new Error("OG headline exceeds its safe content area");
}
const logo = await sharp(logoPath).resize({ width: 380 }).png().toBuffer();
await sharp({ create: { width, height, channels: 4, background: "#FDFAF4" } })
  .composite([
    { input: logo, left: inset, top: 58 },
    { input: rendered.data, left: inset, top: headlineTop },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

// Also correct the previous image URL for clients that still have old metadata.
await copyFile(outputPath, path.join(root, "public", "agentpress_og_ai_automation_v1.png"));

const metadata = await sharp(outputPath).metadata();
if (metadata.width !== width || metadata.height !== height || metadata.format !== "png") {
  throw new Error("Open Graph asset must be a 1200×630 PNG");
}
console.log(JSON.stringify({ outputPath, headline, width, height, textWidth: rendered.info.width, textHeight: rendered.info.height }));
