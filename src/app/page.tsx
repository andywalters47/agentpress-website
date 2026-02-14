import Link from 'next/link';
import { BusinessValueAgentDemo } from '@/components/BusinessValueAgentDemo';
import { DeploymentPlannerDemo } from '@/components/DeploymentPlannerDemo';
import { AdditionalAgents } from '@/components/AdditionalAgents';
import { SocialProofLogos } from '@/components/SocialProofLogos';

// Simple SVG Icons to replace emojis without external dependencies
const Icons = {
  Marketing: () => (
    <svg className="w-5 h-5 text-ap-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  SDRs: () => (
    <svg className="w-5 h-5 text-ap-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  AEs: () => (
    <svg className="w-5 h-5 text-ap-sky-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  CS: () => (
    <svg className="w-5 h-5 text-ap-periwinkle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Support: () => (
    <svg className="w-5 h-5 text-ap-gray-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  AI: () => (
    <svg className="w-5 h-5 text-ap-purple-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-0">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              AI Agents <span className="text-ap-teal">Fluent In Your Value Story</span>, from Inbound to Renewal
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Grow revenue across every touchpoint with customer facing agents and team copilots grounded in your value model.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="btn-primary w-full sm:w-auto px-8 bg-ap-dark-blue hover:bg-black">
                Request Demo
              </Link>
            </div>
          </div>
          
          <div className="mt-20">
          </div>
          
          {/* Visual Divider / Breakage */}
          <div className="mt-40 mb-20 flex justify-center">
            <div className="relative">
              <div className="w-1 h-24 bg-linear-to-b from-ap-teal to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ap-teal shadow-[0_0_15px_rgba(45,196,168,0.5)]" />
            </div>
          </div>
          
          {/* Value Story Highlight */}
          <div className="mb-20 max-w-5xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
                Your B2B revenue team is telling six different value stories. The result is <span className="relative inline-block whitespace-nowrap px-2">
                  <span className="relative z-10 text-ap-dark-blue">revenue leakage</span>
                  <span className="absolute bottom-2 left-0 w-full h-[40%] bg-ap-teal/40 -rotate-1" />
                </span>
              </h2>
            </div>

            {/* Visual: Six Fragmented Stories */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {[
                  { role: 'Marketing', story: 'The "Visionary" Narrative', color: 'bg-ap-blue', Icon: Icons.Marketing },
                  { role: 'SDRs', story: 'The "Feature-Rich" Pitch', color: 'bg-ap-teal', Icon: Icons.SDRs },
                  { role: 'AEs', story: 'The "ROI-First" Case', color: 'bg-ap-sky-blue', Icon: Icons.AEs },
                  { role: 'CS', story: 'The "Implementation" Story', color: 'bg-ap-periwinkle', Icon: Icons.CS },
                  { role: 'Support', story: 'The "Technical" Reality', color: 'bg-ap-gray-light', Icon: Icons.Support },
                  { role: 'AI Point Solutions', story: 'The "Automated" Script', color: 'bg-ap-purple-muted', Icon: Icons.AI },
                ].map((item) => (
                  <div key={item.role} 
                    className="p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-full h-[2px] ${item.color} opacity-30`} />
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-2 rounded-lg bg-muted group-hover:bg-white group-hover:shadow-sm transition-colors`}>
                        <item.Icon />
                      </div>
                      <span className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.role}</span>
                    </div>
                    <p className="text-xl font-medium text-ap-dark-blue italic">&quot;{item.story}&quot;</p>
                    
                    <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                       <svg className="w-5 h-5 text-red-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Background decorative elements to show fragmentation */}
              <div className="absolute inset-0 -m-20 flex items-center justify-center -z-0 opacity-[0.03] pointer-events-none">
                <div className="w-[1000px] h-[1000px] border-[2px] border-ap-dark-blue rounded-full animate-[spin_100s_linear_infinite]" />
                <div className="absolute w-[700px] h-[700px] border-[2px] border-ap-dark-blue rounded-full animate-[spin_70s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>

          {/* Visual Divider */}
          <div className="mt-20 mb-20 flex justify-center">
            <div className="relative">
              <div className="w-1 h-24 bg-linear-to-b from-ap-teal to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ap-teal shadow-[0_0_15px_rgba(45,196,168,0.5)]" />
            </div>
          </div>

          <BusinessValueAgentDemo />
        </div>
      </section>

      <SocialProofLogos />

      {/* Deployment Planner Section - Full Width Background */}
      <DeploymentPlannerDemo />

      {/* Additional Agents Section */}
      <AdditionalAgents />

      {/* Feature Grid (Hero Bottom) - Commented out
      <section className="relative overflow-hidden">
        <div className="section-container">
          <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Deal Rooms', 'Enablement Agent', 'AI Documents', 'Content Library', 'Customer Onboarding', 'Learning Playbooks'].map((item) => (
              <div key={item} className="p-4 rounded-xl border border-border bg-white text-center hover:border-ap-teal transition-colors cursor-pointer group">
                <span className="text-sm font-semibold group-hover:text-ap-teal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Sections below are commented out
      <section className="bg-muted py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why revenue teams are switching to AgentPress</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border">
              <div className="text-ap-blue text-4xl font-bold mb-2">+25%</div>
              <div className="text-lg font-bold mb-2">win rate</div>
              <Link href="#" className="text-sm font-medium text-ap-teal hover:underline">How they did it →</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border">
              <div className="text-ap-teal text-4xl font-bold mb-2">+22%</div>
              <div className="text-lg font-bold mb-2">deals closed</div>
              <Link href="#" className="text-sm font-medium text-ap-teal hover:underline">How they did it →</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border">
              <div className="text-ap-sky-blue text-4xl font-bold mb-2">2 hours</div>
              <div className="text-lg font-bold mb-2">saved per customer</div>
              <Link href="#" className="text-sm font-medium text-ap-teal hover:underline">How they did it →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="badge mb-6">Client Workspaces</div>
              <h2 className="text-4xl font-bold mb-6">Create a repeatable sales and onboarding process.</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-3">Enable your team</h3>
                  <p className="text-muted-foreground">
                    Create reusable templates that auto-personalize with customer data to standardize what gets shared, save reps hours of follow-up time, and eliminate messy handoffs.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <span className="text-sm font-semibold border-b-2 border-ap-teal pb-1">Deal Rooms</span>
                    <span className="text-sm font-semibold text-muted-foreground">Onboarding</span>
                    <span className="text-sm font-semibold text-muted-foreground">Client Portal</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Enable your customers</h3>
                  <p className="text-muted-foreground">
                    Empower buyer champions to sell internally and simplify new client onboarding by giving your customers everything they need in one link.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-ap-gray-light/20 rounded-3xl aspect-square flex items-center justify-center border border-border relative overflow-hidden">
               <div className="w-[80%] h-[70%] bg-white rounded-xl shadow-2xl border border-border p-6">
                  <div className="w-1/3 h-4 bg-muted rounded mb-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-muted rounded-lg" />
                    <div className="aspect-video bg-muted rounded-lg" />
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="w-full h-3 bg-muted rounded" />
                    <div className="w-full h-3 bg-muted rounded" />
                    <div className="w-2/3 h-3 bg-muted rounded" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ap-dark-blue text-white overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-ap-teal flex items-center justify-center">
                    <span className="font-bold text-ap-dark-blue">AI</span>
                  </div>
                  <div className="font-semibold">AgentPress AI</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-3 text-sm">Find Asset</div>
                  <div className="bg-white/5 rounded-lg p-3 text-sm">Create workspace</div>
                  <div className="bg-ap-teal/20 text-ap-teal rounded-lg p-3 text-sm font-bold">Deal review</div>
                  <div className="bg-white/5 rounded-lg p-3 text-sm">Product FAQ</div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-ap-blue/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ap-teal/20 blur-3xl rounded-full" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="badge mb-6 bg-ap-teal/20 text-ap-teal border-ap-teal/20">AI Enablement Agent</div>
              <h2 className="text-4xl font-bold mb-6">Enable your team on-demand with an AI assistant</h2>
              <p className="text-ap-gray-light text-lg mb-8">
                Connect your CRM, content library, and call data. AgentPress AI does the rest. No DIY workflows required.
              </p>
              <ul className="space-y-4">
                {['Manage content', 'Draft emails', 'Meeting summary', 'Business case'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-ap-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 text-center">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to modernize your revenue enablement?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the forward-thinking revenue teams that use AgentPress to close deals faster and onboard customers better.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="btn-primary w-full sm:w-auto px-10 bg-ap-dark-blue hover:bg-black text-lg">
              Get started for free
            </Link>
            <Link href="/demo" className="btn-secondary w-full sm:w-auto px-10 text-lg">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
