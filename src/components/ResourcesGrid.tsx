'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

const posts = [
  {
    category: 'Value selling',
    date: 'July 28, 2026',
    title: 'Enterprise deals do not stall in meetings. They stall in the days between them.',
    href: '/resources/enterprise-deals-between-meetings',
    image: '/v3/uploads/slot-article-hero.webp',
  },
  {
    category: 'Enterprise sales',
    date: 'June 14, 2026',
    title: 'What we learned building a value model that survives contact with a real enterprise procurement team',
    href: '/resources/enterprise-deals-between-meetings',
    image: '/v3/assets/grad1.jpg',
  },
  {
    category: 'AI & GTM',
    date: 'June 2, 2026',
    title: 'Prep, not notes',
    href: '/resources/enterprise-deals-between-meetings',
    image: '/v3/assets/grad2.jpg',
  },
  {
    category: 'Product',
    date: 'May 21, 2026',
    title: 'Changelog: mutual action plans, stakeholder maps, and a faster deal room',
    href: '/resources/enterprise-deals-between-meetings',
    image: '/v3/assets/grad3.jpg',
  },
  {
    category: 'Value selling',
    date: 'May 6, 2026',
    title: 'The business case is the deal',
    href: '/resources/enterprise-deals-between-meetings',
    image: '/v3/assets/feature-3-screenshot.png',
  },
];

const categories = ['All', 'Value selling', 'Enterprise sales', 'AI & GTM', 'Product', 'Customer stories'];

export function ResourcesGrid() {
  const [active, setActive] = useState('All');
  const visible = useMemo(() => active === 'All' ? posts : posts.filter((post) => post.category === active), [active]);

  return (
    <>
      <div className="resource-filters" aria-label="Filter resources">
        {categories.map((category) => {
          const count = category === 'All' ? posts.length : posts.filter((post) => post.category === category).length;
          return (
            <button className={active === category ? 'active' : ''} type="button" key={category} onClick={() => setActive(category)}>
              {category} <span>{count}</span>
            </button>
          );
        })}
      </div>

      {visible.length ? (
        <div className="resource-grid">
          {visible.map((post, index) => (
            <article className="resource-card" key={`${post.title}-${index}`}>
              <Link href={post.href} className="resource-image" aria-label={post.title}>
                <Image src={post.image} alt="" width={560} height={350} />
              </Link>
              <div className="resource-card-copy">
                <span>{post.category}</span>
                <Link href={post.href}>{post.title}</Link>
                <time>{post.date}</time>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="resource-empty">
          <h2>Nothing published here yet</h2>
          <p>We are writing the first {active.toLowerCase()} post now. In the meantime, browse everything else.</p>
          <button type="button" onClick={() => setActive('All')}>Show all posts</button>
        </div>
      )}
    </>
  );
}
