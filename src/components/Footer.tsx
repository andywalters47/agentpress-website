import Image from 'next/image';
import Link from 'next/link';

const footerGroups = [
  {
    title: 'News',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'Latest insights', href: '/resources/enterprise-deals-between-meetings' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Docs', href: 'https://docs.agent.press/' },
      { label: 'Demo', href: 'https://calendar.app.google/AwUNqYVrSpUf1XeK8' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Careers', href: '/careers' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div className="footer-main">
          <Link href="/" className="footer-brand" aria-label="AgentPress home">
            <Image src="/v3/assets/AP_icon_circle.svg" alt="" width={34} height={34} />
            <span>agent<span>.</span>press</span>
          </Link>

          <div className="footer-groups">
            {footerGroups.map((group) => (
              <div className="footer-group" key={group.title}>
                <strong>{group.title}</strong>
                {group.links.map((link) => {
                  const external = link.href.startsWith('http');
                  return (
                    <Link key={link.href} href={link.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bar">
          <span>Copyright © 2026 AgentPress Labs, Inc. All rights reserved</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <span>SOC 2 Type II</span>
        </div>
      </div>
    </footer>
  );
}
