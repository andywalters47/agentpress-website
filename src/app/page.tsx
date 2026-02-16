import Link from 'next/link';
import { BusinessValueAgentDemo } from '@/components/BusinessValueAgentDemo';
import { DeploymentPlannerDemo } from '@/components/DeploymentPlannerDemo';
import { AdditionalAgents } from '@/components/AdditionalAgents';
import { SocialProofLogos } from '@/components/SocialProofLogos';
import { ValueMetricCards } from '@/components/ValueMetricCards';

// Simple SVG Icons to replace emojis without external dependencies - REMOVED AS UNUSED

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-0">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Win Bigger Deals Without Manually Building Business Cases
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              AgentPress helps AEs sell on value by researching accounts and building custom business cases in seconds
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="btn-primary w-full sm:w-auto px-8 bg-black hover:bg-zinc-800">
                Request Demo →
              </Link>
            </div>
          </div>
          
          <div className="mt-8">
            <BusinessValueAgentDemo />
          </div>
        </div>
      </section>

      <SocialProofLogos />

      <section className="relative pt-0 pb-0">
        <div className="section-container !pt-0">
          
          {/* Revenue Leakage Highlight */}
          <div className="mb-20 max-w-5xl mx-auto px-4">
            <div className="text-center mb-16 pt-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
                Your team is <span className="relative inline-block whitespace-nowrap px-2">
                  <span className="relative z-10 text-ap-dark-blue">losing 35%</span>
                  <span className="absolute bottom-2 left-0 w-full h-[40%] bg-ap-teal/40 -rotate-1" />
                </span> on every deal because no one has time to build a business case.
              </h2>
            </div>

            {/* Visual: Revenue Leakage Progress Bar */}
            <div className="relative max-w-4xl mx-auto pt-0 pb-20">
              
              <div className="relative h-24 w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-border overflow-hidden flex p-2">
                <div className="h-full bg-ap-teal rounded-2xl relative flex items-center px-8 group transition-all duration-700 shadow-inner" style={{ width: '65%' }}>
                   <div className="text-white">
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-0.5">Revenue Captured</div>
                      <div className="text-3xl font-black leading-none">$65,000</div>
                   </div>
                   {/* Decorative Shine */}
                   <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                </div>
                
                <div className="h-full bg-slate-50 relative flex items-center px-8 overflow-hidden rounded-r-2xl" style={{ width: '35%' }}>
                  {/* Stripes Pattern for "Lost" area */}
                  <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)' , backgroundSize: '20px 20px' }} />
                  <div className="relative z-10">
                      <div className="text-red-500/80 text-[10px] font-black uppercase tracking-widest mb-0.5">Lost Opportunity</div>
                      <div className="text-3xl font-black text-red-500 leading-none">$35,000</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <ValueMetricCards />

          {/* Visual Divider */}
          <div className="mt-20 mb-20 flex justify-center">
            <div className="relative">
              <div className="w-1 h-24 bg-linear-to-b from-ap-teal to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ap-teal shadow-[0_0_15px_rgba(45,196,168,0.5)]" />
            </div>
          </div>

        </div>
      </section>

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
