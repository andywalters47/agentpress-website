import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const captureDirectory = process.argv[2] ?? '/tmp/agentpress-native-capture-full';
const projectRoot = path.resolve(import.meta.dirname, '..');
const outputPath = path.join(projectRoot, 'src/generated/designer-pages.json');
const legacyHomepagePath = path.resolve(projectRoot, '..', 'agentpress-website-new-3.legacy-index.html');

function walk(node, visit) {
  if (!node || typeof node === 'string') return;
  visit(node);
  for (const child of node.children ?? []) walk(child, visit);
}

function textContent(node) {
  if (typeof node === 'string') return node;
  return (node.children ?? []).map(textContent).join('');
}

function findFirst(root, predicate) {
  let match;
  walk(root, (node) => {
    if (!match && predicate(node)) match = node;
  });
  return match;
}

function removeNodes(root, predicate) {
  if (!root || typeof root === 'string') return;
  root.children = (root.children ?? []).filter((child) => (
    typeof child === 'string' || !predicate(child)
  ));
  for (const child of root.children) removeNodes(child, predicate);
}

function decodeHtmlText(value) {
  return value
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/&nbsp;/gi, '\u00a0')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/<[^>]+>/g, '');
}

function extractLegacyHomepageCopy(html) {
  const hero = html.match(/<h1 class="h1 herorise" style="([^"]+)">([\s\S]*?)<\/h1>/);
  const intro = html.match(
    /<div style="flex:1;max-width:620px">\s*<div[^>]*>([\s\S]*?)<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<p[^>]*>([\s\S]*?)<\/p>/,
  );

  if (!hero || !intro) {
    throw new Error(`Could not extract the authoritative homepage copy from ${legacyHomepagePath}`);
  }

  return {
    heroStyle: hero[1],
    heroTitle: decodeHtmlText(hero[2]),
    manifestoTitle: decodeHtmlText(intro[1]),
    manifestoParagraphs: [decodeHtmlText(intro[2]), decodeHtmlText(intro[3])],
  };
}

function wordNodes(text, className, style) {
  return text.split(/(\s+)/).filter(Boolean).map((part) => {
    if (/^\s+$/.test(part)) return part;
    return { tag: 'span', props: { class: className, style }, children: [part] };
  });
}

function applyLegacyHomepage(page, legacyCopy) {
  removeNodes(page.tree, (node) => (
    String(node.props?.class ?? '').split(/\s+/).includes('dtpin')
  ));

  const heroRow = findFirst(page.tree, (node) => (
    String(node.props?.class ?? '').split(/\s+/).includes('heropin')
  ));
  if (!heroRow) throw new Error('The resolved homepage is missing its hero row.');
  heroRow.props.style = heroRow.props.style.replace(
    'margin: 0px auto;',
    'margin: 0px auto 15svh;',
  );

  const heroTitle = findFirst(page.tree, (node) => (
    node.tag === 'h1' && textContent(node) === 'Win more deals with the team you already have.'
  ));
  if (!heroTitle) throw new Error('The resolved homepage is missing its hero heading.');
  heroTitle.props.style = legacyCopy.heroStyle;
  heroTitle.children = [legacyCopy.heroTitle];

  const intro = findFirst(page.tree, (node) => (
    node.tag === 'div' && String(node.props?.class ?? '').split(/\s+/).includes('introrow')
  ));
  const copyColumn = intro?.children?.find((node) => (
    typeof node !== 'string' && node.props?.style?.includes('max-width: 620px')
  ));
  if (!copyColumn || typeof copyColumn === 'string') {
    throw new Error('The resolved homepage is missing the manifesto copy column.');
  }

  const title = copyColumn.children.find((node) => typeof node !== 'string' && node.tag === 'div');
  const paragraphs = copyColumn.children.filter((node) => typeof node !== 'string' && node.tag === 'p');
  if (!title || typeof title === 'string' || paragraphs.length < 2) {
    throw new Error('The resolved homepage manifesto structure changed unexpectedly.');
  }

  title.props['data-ap-words-wrapped'] = 'true';
  title.children = wordNodes(
    legacyCopy.manifestoTitle,
    'ap-manifesto-word',
    'color: rgb(33, 33, 33); opacity: 0; text-shadow: rgba(174, 243, 200, 0) 0px 0px 26px; transform: translateY(8px) scale(0.97);',
  );

  legacyCopy.manifestoParagraphs.forEach((paragraphText, index) => {
    const paragraph = paragraphs[index];
    if (!paragraph || typeof paragraph === 'string') return;
    paragraph.props['data-ap-words-wrapped'] = 'true';
    paragraph.children = wordNodes(
      paragraphText,
      'ap-manifesto-supporting-word',
      'color: rgba(33, 33, 33, 0.32); opacity: 0; transform: translateY(7px);',
    );
  });
}

const legacyHomepage = await readFile(legacyHomepagePath, 'utf8');
const legacyCopy = extractLegacyHomepageCopy(legacyHomepage);
const files = (await readdir(captureDirectory)).filter((file) => file.endsWith('.json')).sort();
const pages = {};

for (const file of files) {
  const page = JSON.parse(await readFile(path.join(captureDirectory, file), 'utf8'));
  // This font face is injected by the Next development overlay and is not
  // part of the designer export. Every designer-authored style is retained.
  page.styles = page.styles.filter((css) => !css.includes("font-family:'__nextjs-Geist'"));
  if (page.key === 'home') applyLegacyHomepage(page, legacyCopy);
  pages[page.key] = page;
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(pages)}\n`, 'utf8');
console.log(`Compiled ${Object.keys(pages).length} designer pages to ${outputPath}`);
