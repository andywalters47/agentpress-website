'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
  { href: 'https://docs.agent.press/', label: 'Docs', external: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="site-nav-wrap">
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/" className="site-logo" aria-label="AgentPress home">
            <Image
              src="/v3/assets/AP_landscape_for_light_bg.svg"
              alt="AgentPress"
              width={146}
              height={25}
              priority
            />
          </Link>

          <div className="site-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                aria-current={!link.external && pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="https://console.agent.press/sign-in" target="_blank" rel="noreferrer">
              Login
            </Link>
            <Link className="button button-mint button-nav" href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">
              Start Now
            </Link>
          </div>

          <button
            className="site-menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? '×' : '☰'}
          </button>

          <div id="mobile-menu" className={`site-mobile-menu${open ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="https://console.agent.press/sign-in" target="_blank" rel="noreferrer">Login</Link>
            <Link className="button button-mint" href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">
              Start Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
