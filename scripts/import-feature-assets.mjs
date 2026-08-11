import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { optimize } from 'svgo';
import svgoConfig from '../svgo.config.mjs';

const sourceDirectory = process.argv[2];
if (!sourceDirectory) {
  throw new Error('Pass the extracted Featured/assets directory.');
}

const projectRoot = path.resolve(import.meta.dirname, '..');
const destinationDirectory = path.join(projectRoot, 'public', 'assets');
await mkdir(destinationDirectory, { recursive: true });

for (const filename of ['feature-1-approval.svg', 'feature-3-pipeline.svg']) {
  const source = await readFile(path.join(sourceDirectory, filename), 'utf8');
  const optimized = optimize(source, svgoConfig);
  await writeFile(path.join(destinationDirectory, filename), optimized.data, 'utf8');
}

const agentPortrait = await readFile(path.join(sourceDirectory, 'agent-1.png'));
const roleplaySource = await readFile(path.join(sourceDirectory, 'feature-2-roleplay.svg'), 'utf8');
const embeddedRoleplay = roleplaySource.replace(
  'xlink:href="agent-1.png"',
  `xlink:href="data:image/png;base64,${agentPortrait.toString('base64')}"`,
);

if (embeddedRoleplay === roleplaySource) {
  throw new Error('The roleplay SVG no longer references agent-1.png as expected.');
}

await writeFile(
  path.join(destinationDirectory, 'feature-2-roleplay.svg'),
  optimize(embeddedRoleplay, svgoConfig).data,
  'utf8',
);

console.log(`Imported feature assets from ${sourceDirectory}`);
