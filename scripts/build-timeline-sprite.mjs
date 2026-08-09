import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const sourcePath = join(projectRoot, 'public/v3/assets/hero-graphic-v4.svg');
const outputPath = join(projectRoot, 'public/v3/assets/timeline-sprite.svg');
const sourceLines = readFileSync(sourcePath, 'utf8').split('\n');

// The original illustration is a flattened Figma export. Each range below is
// one complete card, in paint order. Keeping them as symbols lets the page load
// one SVG and animate ten independent card instances without raster crops.
const cardRanges = [
  [24, 59],
  [60, 68],
  [69, 90],
  [91, 102],
  [103, 128],
  [129, 141],
  [142, 155],
  [156, 169],
  [170, 204],
  [205, 215],
];

const takeLines = (start, end) => sourceLines.slice(start - 1, end).join('\n');
const defs = takeLines(232, sourceLines.length - 1);
const backdrop = [takeLines(2, 23), takeLines(216, 231)].join('\n');

const cardSymbols = cardRanges.map(([start, end], index) => {
  const cropX = 82 + (119 * index);
  const cropY = -4 + (35 * index);
  return [
    `  <symbol id="timeline-card-${index + 1}" viewBox="0 0 254 306">`,
    `    <g transform="translate(${-cropX} ${-cropY})">`,
    takeLines(start, end),
    '    </g>',
    '  </symbol>',
  ].join('\n');
}).join('\n');

const sprite = [
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
  defs,
  '  <symbol id="timeline-backdrop" viewBox="0 0 1400 711">',
  backdrop,
  '  </symbol>',
  cardSymbols,
  '</svg>',
  '',
].join('\n');

writeFileSync(outputPath, sprite);
console.log(`Wrote ${outputPath}`);
