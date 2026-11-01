import path from "node:path";
import { fileURLToPath } from "node:url";
import { copyFile } from "node:fs/promises";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = path.join(root, "public", "assets", "AP_landscape_for_light_bg.svg");
const fontPath = path.join(root, "public", "fonts", "NeuSans-Book.woff2");
const outputPath = path.join(root, "public", "agentpress_og_ai_automation_v3.png");

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
const logo = await sharp(logoPath).resize({ width: 440 }).png().toBuffer();

// Position visible artwork, including the logo's transparent SVG padding.
async function visibleBounds(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let left = info.width, top = info.height, right = -1, bottom = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * info.channels + 3] <= 8) continue;
      left = Math.min(left, x); top = Math.min(top, y);
      right = Math.max(right, x); bottom = Math.max(bottom, y);
    }
  }
  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}
const logoBounds = await visibleBounds(logo);
const textBounds = await visibleBounds(rendered.data);
let gap = 96;
if ((height - logoBounds.height - gap - textBounds.height) % 2) gap++;
const compositionHeight = logoBounds.height + gap + textBounds.height;
const outerMargin = (height - compositionHeight) / 2;
const headlineTop = outerMargin + logoBounds.height + gap - textBounds.top;
if (textBounds.width > width - inset * 2 || outerMargin < inset) {
  throw new Error("OG composition exceeds its safe content area");
}
await sharp({ create: { width, height, channels: 4, background: "#FDFAF4" } })
  .composite([
    { input: logo, left: inset - logoBounds.left, top: outerMargin - logoBounds.top },
    { input: rendered.data, left: inset - textBounds.left, top: headlineTop },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

// Keep previous image URLs consistent for clients with older metadata.
await Promise.all([1, 2].map(version => copyFile(outputPath, path.join(root, "public", `agentpress_og_ai_automation_v${version}.png`))));

const metadata = await sharp(outputPath).metadata();
if (metadata.width !== width || metadata.height !== height || metadata.format !== "png") {
  throw new Error("Open Graph asset must be a 1200×630 PNG");
}
const pixels = await sharp(outputPath).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const background = [253, 250, 244];
let firstInkRow = height, lastInkRow = -1;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const offset = (y * width + x) * pixels.info.channels;
    if (background.some((channel, index) => Math.abs(pixels.data[offset + index] - channel) > 8)) {
      firstInkRow = Math.min(firstInkRow, y); lastInkRow = Math.max(lastInkRow, y); break;
    }
  }
}
const margins = { top: firstInkRow, bottom: height - lastInkRow - 1 };
if (Math.abs(margins.top - margins.bottom) > 1) throw new Error("OG visible top and bottom margins must match");
console.log(JSON.stringify({ outputPath, headline, width, height, logoWidth: 440, margins, gap, textWidth: textBounds.width, textHeight: textBounds.height }));
