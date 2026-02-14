import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Client-Facing Workspaces', href: '#' },
        { label: 'Sales Content Management', href: '#' },
        { label: 'Dock AI', href: '#' },
        { label: 'Order Forms & Price Quotes', href: '#' },
        { label: 'Client Project Plans', href: '#' },
        { label: 'Chrome Extension', href: '#' },
        { label: 'Integrations', href: '#' },
      ],
    },
    {
      title: 'Sales',
      links: [
        { label: 'Digital Sales Rooms', href: '#' },
        { label: 'Mutual Action Plans', href: '#' },
        { label: 'Sales Portals', href: '#' },
      ],
    },
    {
      title: 'Enablement',
      links: [
        { label: 'Sales Enablement', href: '#' },
        { label: 'Buyer Enablement', href: '#' },
      ],
    },
    {
      title: 'Customer Success',
      links: [
        { label: 'Customer Onboarding', href: '#' },
        { label: 'Client Portals', href: '#' },
        { label: 'White-Label Client Portals', href: '#' },
        { label: 'Client Project Management', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/AP_landscape.png" 
                alt="AgentPress Logo" 
                width={140} 
                height={35} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
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
