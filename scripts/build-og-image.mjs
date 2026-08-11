import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const backgroundPath = path.join(root, "public", "agentpress_og_background.png");
const logoPath = path.join(root, "public", "assets", "AP_landscape_for_light_bg.svg");
const fontPath = path.join(root, "public", "fonts", "ArchivoVariable.woff2");
const outputPath = path.join(root, "public", "agentpress_og_ai_chief_of_staff.png");

const width = 1200;
const height = 630;

const leftReadabilityWash = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wash" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#FAF8F2" stop-opacity="0.98"/>
        <stop offset="0.45" stop-color="#FAF8F2" stop-opacity="0.88"/>
        <stop offset="0.66" stop-color="#FAF8F2" stop-opacity="0.28"/>
        <stop offset="0.79" stop-color="#FAF8F2" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.18"/>
        <stop offset="1" stop-color="#D7F4EA" stop-opacity="0.12"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#wash)"/>
    <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="1" fill="none" stroke="#0A0A25" stroke-opacity="0.08"/>
    <rect width="${width}" height="${height}" fill="url(#edge)"/>
  </svg>
`);

const accent = Buffer.from(`
  <svg width="70" height="12" viewBox="0 0 70 12" xmlns="http://www.w3.org/2000/svg">
    <rect width="52" height="5" y="3.5" rx="2.5" fill="#2DC4A8"/>
    <circle cx="64" cy="6" r="6" fill="#ADF2C7"/>
  </svg>
`);

const headline = await sharp({
  text: {
    text: '<span foreground="#080A22" weight="600">AI Chief of Staff\nfor Every Deal</span>',
    font: "Archivo 62",
    fontfile: fontPath,
    width: 650,
    align: "left",
    dpi: 72,
    rgba: true,
  },
})
  .png()
  .toBuffer();

const logo = await sharp(logoPath)
  .resize({ width: 310 })
  .png()
  .toBuffer();

await sharp(backgroundPath)
  .resize(width, height, { fit: "cover", position: "centre" })
  .modulate({ saturation: 0.92, brightness: 0.99 })
  .composite([
    { input: leftReadabilityWash, left: 0, top: 0 },
    { input: logo, left: 68, top: 66 },
    { input: accent, left: 70, top: 209 },
    { input: headline, left: 66, top: 246 },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

console.log(outputPath);
