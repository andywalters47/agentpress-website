import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Deployment Planner', href: '/deployment-planner' },
        { label: 'Client-Facing Workspaces', href: '#' },
        { label: 'Sales Content Management', href: '#' },
        { label: 'Integrations', href: '#' },
      ],
    },
    {
      title: 'Pricing',
      links: [
        { label: 'Starter', href: '#' },
        { label: 'Professional', href: '#' },
        { label: 'Enterprise', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/AP_landscape.png" 
                alt="AgentPress Logo" 
                width={140} 
                height={35} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Grow revenue across every touchpoint with customer agents and team copilots grounded in your value model.
            </p>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            Copyright © 2026 AgentPress Labs, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
