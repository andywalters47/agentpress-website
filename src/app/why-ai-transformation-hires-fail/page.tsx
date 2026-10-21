import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { introduction, sections } from './content';
import styles from './post.module.css';

const title = 'Why AI transformation hires fail (and how to screen for it)';
const description = 'Five predictable AI transformation failures, the qualities to screen for in your next hire or agency, and the questions that reveal who can deliver a return.';
const path = '/why-ai-transformation-hires-fail';
const image = '/agentpress_og_ai_transformation_hires.png';
const consultation = 'https://calendar.app.google/AwUNqYVrSpUf1XeK8';
const labels = ['Agree on the ROI', 'Verify and inspect', 'Coherent data', 'Change management', 'Executive buy-in', 'Agencies versus hires', 'The takeaway'];

export const metadata: Metadata = {
  title: `${title} | AgentPress`,
  description,
  alternates: { canonical: path },
  openGraph: {
    title, description, url: path, siteName: 'AgentPress', type: 'article',
    authors: ['Andy Walters'],
    images: [{ url: image, width: 1200, height: 630, type: 'image/png', alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [{ url: image, alt: title }] },
};

export default function TransformationArticle() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#article">Skip to article</a>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" aria-label="AgentPress home"><Image src="/assets/AP_landscape_for_light_bg.svg" alt="AgentPress" width={188} height={36} priority /></Link>
          <a className={styles.button} href={consultation} target="_blank" rel="noopener noreferrer">Book Consultation <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="article">
        <div className={styles.hero}>
          <div className={styles.eyebrow}><span /> AI transformation · Field notes</div>
          <h1>Why AI transformation hires fail <span>(and how to screen for it)</span></h1>
          <div className={styles.meta}><span>By Andy Walters</span><span aria-hidden="true">/</span><span>6 min read</span></div>
        </div>
        <div className={styles.layout}>
          <aside className={styles.sidebar} aria-label="In this article">
            <div className={styles.contents}>
              <p>In this article</p>
              <ol>{labels.map((label, index) => <li key={label}><a href={`#section-${index + 1}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a></li>)}</ol>
              <Link className={styles.homeLink} href="/">← AgentPress home</Link>
            </div>
          </aside>
          <article className={styles.article}>
            <div className={styles.intro}>{introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {sections.map((section, index) => {
              const numbered = section.heading.match(/^Failure mode (\d): (.+)$/);
              const bullets = section.paragraphs.filter((paragraph) => paragraph.startsWith('- '));
              const numberedItems = section.paragraphs.filter((paragraph) => /^\d+\. /.test(paragraph));
              return (
                <section key={section.heading} id={`section-${index + 1}`} className={styles.section}>
                  {numbered && <div className={styles.sectionLabel}>Failure mode {numbered[1]} <span aria-hidden="true" /></div>}
                  <h2>{numbered ? numbered[2] : section.heading}</h2>
                  {section.paragraphs.filter((paragraph) => !paragraph.startsWith('- ')).map((paragraph) => /^\d+\. /.test(paragraph)
                    ? (paragraph === numberedItems[0] ? <ol key="capacity-paths">{numberedItems.map((item) => <li key={item}>{item.replace(/^\d+\. /, '')}</li>)}</ol> : null)
                    : paragraph.startsWith('What to look for: ')
                    ? <div className={styles.screen} key={paragraph}><h3>What to look for</h3><p>{paragraph.slice('What to look for: '.length)}</p></div>
                    : <p key={paragraph}>{paragraph}</p>)}
                  {bullets.length > 0 && <ul>{bullets.map((paragraph) => {
                    const sentenceEnd = paragraph.indexOf('. ');
                    return <li key={paragraph}><strong>{paragraph.slice(2, sentenceEnd + 1)}</strong>{paragraph.slice(sentenceEnd + 1)}</li>;
                  })}</ul>}
                </section>
              );
            })}
            <div className={styles.author}><span className={styles.monogram} aria-hidden="true">AW</span><div><strong>Andy Walters</strong><span>AgentPress</span></div></div>
          </article>
        </div>
        <section className={styles.cta} aria-labelledby="cta-heading"><div className={styles.eyebrow}>From strategy to working systems</div><h2 id="cta-heading">Put AI to work in your business.</h2><a className={styles.button} href={consultation} target="_blank" rel="noopener noreferrer">Book a Free Consultation <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer className={styles.footer}><Link href="/">agent.press</Link><span>© {new Date().getFullYear()} AgentPress, Inc.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description, image: `https://www.agent.press${image}`, author: { '@type': 'Person', name: 'Andy Walters' }, publisher: { '@type': 'Organization', name: 'AgentPress', url: 'https://www.agent.press' }, mainEntityOfPage: `https://www.agent.press${path}` }) }} />
    </div>
  );
}
