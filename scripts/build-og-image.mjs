import path from "node:path";
import { fileURLToPath } from "node:url";
import { copyFile } from "node:fs/promises";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const backgroundPath = path.join(root, "public", "agentpress_og_background.png");
const logoPath = path.join(root, "public", "assets", "AP_landscape_for_light_bg.svg");
const fontPath = path.join(root, "public", "fonts", "NeuSans-Book.woff2");
const outputPath = path.join(root, "public", "agentpress_og_ai_chief_of_staff_v3.png");
const legacyOutputPath = path.join(root, "public", "agentpress_og_image.png");

const width = 1200;
const height = 630;

const homepageTexture = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.15" fill="#312C3D" fill-opacity="0.075"/>
      </pattern>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#dots)"/>
    <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="1" fill="none" stroke="#0A0A25" stroke-opacity="0.08"/>
  </svg>
`);

async function renderTagline(text) {
  return sharp({
    text: {
      text: `<span foreground="#080A22" weight="400">${text}</span>`,
      font: "NeuSans Book 44",
      fontfile: fontPath,
      dpi: 72,
      rgba: true,
    },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
}

const tagline = await renderTagline("AI Chief of Staff for Every Deal");

const logo = await sharp(logoPath)
  .resize({ width: 720 })
  .png()
  .toBuffer();

await sharp(backgroundPath)
  .resize(width, height, { fit: "cover", position: "centre" })
  .modulate({ saturation: 0.92, brightness: 0.99 })
  .composite([
    { input: homepageTexture, left: 0, top: 0 },
    { input: logo, left: 240, top: 209 },
    {
      input: tagline.data,
      left: Math.round((width - tagline.info.width) / 2),
      top: 381,
    },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

await copyFile(outputPath, legacyOutputPath);

console.log(outputPath);
