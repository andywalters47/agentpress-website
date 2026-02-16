import Link from 'next/link';
import { BusinessValueAgentDemo } from '@/components/BusinessValueAgentDemo';
import { DeploymentPlannerDemo } from '@/components/DeploymentPlannerDemo';
import { AdditionalAgents } from '@/components/AdditionalAgents';
import { SocialProofLogos } from '@/components/SocialProofLogos';
import { ValueMetricCards } from '@/components/ValueMetricCards';
import { ValueProcessFlow } from '@/components/ValueProcessFlow';
import { Testimonial } from '@/components/Testimonial';
import { Integrations } from '@/components/Integrations';

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
              <Link href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" className="btn-primary w-full sm:w-auto px-8 bg-black hover:bg-zinc-800">
                Schedule Demo →
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
        <div className="section-container !pt-0 !pb-0">
          
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

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ap-dark-blue leading-[1.1] max-w-5xl">
              AgentPress uses patented AI to generate accurate business cases that <span className="relative inline-block px-2">
                <span className="relative z-10">win</span>
                <span className="absolute bottom-2 left-0 w-full h-[35%] bg-ap-teal/40 -rotate-1" />
              </span>
            </h2>
          </div>

          <ValueMetricCards />

          <ValueProcessFlow />
        </div>
      </section>

      <Testimonial />

      <Integrations />

      <section className="relative pt-0 pb-0">
        <div className="section-container !pt-0">
          {/* CTA Section */}
          <div className="mt-20">
            <div className="flex flex-col items-center text-center gap-6 p-12 rounded-[3rem] bg-slate-50 border border-slate-100 w-full mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-ap-dark-blue">
                Ready to win more deals with value?
              </h3>
              <p className="text-slate-500 text-lg max-w-xl">
                Join the top-performing sales teams using AgentPress to build accurate business cases in seconds.
              </p>
              <Link 
                href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" 
                className="btn-primary px-10 py-4 bg-black hover:bg-zinc-800 text-lg shadow-xl shadow-black/5"
              >
                Schedule Demo →
              </Link>
            </div>
          </div>

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

      <section className="py-32 text-center">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to modernize your revenue enablement?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the forward-thinking revenue teams that use AgentPress to close deals faster and onboard customers better.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" className="btn-primary w-full sm:w-auto px-10 bg-black hover:bg-zinc-800 text-lg">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
