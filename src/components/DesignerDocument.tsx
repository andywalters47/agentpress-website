import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Script from 'next/script';

type DesignerDocumentProps = {
  source: string;
  animations?: boolean;
};

function extractBody(documentHtml: string, source: string) {
  const match = documentHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);

  if (!match) {
    throw new Error(`Designer document ${source} does not contain a body element.`);
  }

  return match[1];
}

/**
 * Renders the designer export through a Next/React route without rewriting,
 * approximating, or duplicating its source markup. The Design Components
 * runtime resolves the document's imports and control-flow templates exactly
 * as it does in the original exported HTML document.
 */
export async function DesignerDocument({ source, animations = false }: DesignerDocumentProps) {
  const sourcePath = path.join(process.cwd(), 'public', source);
  const documentHtml = await readFile(sourcePath, 'utf8');
  const bodyMarkup = extractBody(documentHtml, source);

  return (
    <>
      {animations ? <link rel="stylesheet" href="/designer-animations.css" /> : null}
      <div
        data-designer-document={source}
        style={{ display: 'contents' }}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bodyMarkup }}
      />
      {animations ? <Script src="/designer-animations.js" strategy="afterInteractive" /> : null}
    </>
  );
}
