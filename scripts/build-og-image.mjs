import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = path.join(root, "public", "assets", "AP_landscape_for_light_bg.svg");
const fontPath = path.join(root, "public", "fonts", "NeuSans-Book.woff2");
const outputPath = path.join(root, "public", "agentpress_og_ai_automation_v1.png");

const width = 1200;
const height = 630;
const inset = 64;

// Use the homepage's real brand lockup and typeface. The outcome headline is
// deliberately the only message, keeping it readable in a small link preview.
const background = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="mint" cx="1" cy="1" r="1">
        <stop offset="0" stop-color="#AEF3C8" stop-opacity=".48"/>
        <stop offset="1" stop-color="#AEF3C8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="#FDFAF4"/>
    <rect x="540" y="120" width="660" height="510" fill="url(#mint)"/>
    <rect x="${inset}" y="197" width="88" height="6" rx="3" fill="#AEF3C8"/>
  </svg>
`);

async function renderHeadline(text) {
  const rendered = await sharp({
    text: {
      text: `<span foreground="#212121" weight="400">${text}</span>`,
      font: "NeuSans Book, 96",
      fontfile: fontPath,
      dpi: 72,
      rgba: true,
    },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
  if (rendered.info.width > width - inset * 2) {
    throw new Error(`Open Graph headline exceeds its content area: ${text}`);
  }
  return rendered.data;
}

const logo = await sharp(logoPath)
  .resize({ width: 380 })
  .png()
  .toBuffer();
const firstLine = await renderHeadline("Grow revenue");
const secondLine = await renderHeadline("Reduce costs with AI");

await sharp(background)
  .composite([
    { input: logo, left: inset, top: 58 },
    { input: firstLine, left: inset, top: 246 },
    { input: secondLine, left: inset, top: 363 },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

const metadata = await sharp(outputPath).metadata();
if (metadata.width !== width || metadata.height !== height || metadata.format !== "png") {
  throw new Error("Open Graph asset must be a 1200×630 PNG");
}
console.log(outputPath);
