import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <Image 
                src="/AP_landscape.png" 
                alt="AgentPress Logo" 
                width={140} 
                height={35} 
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            
            {/* <div className="hidden md:flex items-center gap-8">
              <div className="relative group py-4">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer">
                  Agents
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col">
                    {[
                      { label: 'Business Case Agent', description: 'Win bigger deals with ROI data' },
                      { label: 'AI SDR', description: 'Scale high-quality outreach' },
                      { label: 'Team Copilot', description: 'Shorten sales cycles instantly' },
                      { label: 'Deployment Planner', description: 'Ensure value delivered' },
                      { label: 'Support Agent', description: 'Reduce churn automatically' }
                    ].map((agent) => (
                      <Link
                        key={agent.label}
                        href="#"
                        className="p-3 hover:bg-slate-50 rounded-xl transition-colors group/item"
                      >
                        <div className="font-bold text-ap-dark-blue text-sm group-hover/item:text-ap-teal transition-colors">{agent.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{agent.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
            </div> */}
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="https://console.agent.press" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
              Log in
            </Link>
            <Link href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" className="btn-primary py-2 px-6 text-sm bg-black hover:bg-zinc-800">
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
