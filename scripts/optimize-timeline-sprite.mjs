import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { optimize } from 'svgo';
import svgoConfig from '../svgo.config.mjs';

const spritePath = new URL('../public/v3/assets/timeline-sprite.svg', import.meta.url);
let sprite = await readFile(spritePath, 'utf8');

const targetSizes = [
  { width: 70, height: 72 },
  { width: 64, height: 68 },
  { width: 80, height: 80 },
];

const embeddedImages = [...sprite.matchAll(/data:image\/png;base64,([^"']+)/g)];
if (embeddedImages.length !== targetSizes.length) {
  throw new Error(`Expected ${targetSizes.length} embedded PNGs, found ${embeddedImages.length}`);
}

for (let index = embeddedImages.length - 1; index >= 0; index -= 1) {
  const match = embeddedImages[index];
  const source = Buffer.from(match[1], 'base64');
  const optimized = await sharp(source)
    .resize(targetSizes[index])
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toBuffer();
  const replacement = `data:image/png;base64,${optimized.toString('base64')}`;
  sprite = `${sprite.slice(0, match.index)}${replacement}${sprite.slice(match.index + match[0].length)}`;
}

for (const unusedCard of [3, 7, 10]) {
  sprite = sprite.replace(
    new RegExp(`\\s*<symbol id="timeline-card-${unusedCard}"[\\s\\S]*?<\\/symbol>`),
    '',
  );
}

sprite = sprite
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/>\s+</g, '><')
  .trim();

const optimizedSprite = optimize(sprite, svgoConfig);
await writeFile(spritePath, optimizedSprite.data);
