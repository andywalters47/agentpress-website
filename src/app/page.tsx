import Link from 'next/link';
import { BusinessValueAgentDemo } from '@/components/BusinessValueAgentDemo';
import { AdditionalAgents } from '@/components/AdditionalAgents';
import { SocialProofLogos } from '@/components/SocialProofLogos';
import { ValueMetricCards } from '@/components/ValueMetricCards';
import { ValueProcessFlow } from '@/components/ValueProcessFlow';
import { Testimonial } from '@/components/Testimonial';
import { Integrations } from '@/components/Integrations';
import { PersonaUseCases } from '@/components/PersonaUseCases';

// Simple SVG Icons to replace emojis without external dependencies - REMOVED AS UNUSED

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-10 md:pt-20 pb-0">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-7xl font-bold tracking-tight mb-8">
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
            <div className="text-center mb-16 pt-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
                Your team is <span className="relative inline-block whitespace-nowrap px-2">
                  <span className="relative z-10 text-ap-dark-blue">losing 35%</span>
                  <span className="absolute bottom-2 left-0 w-full h-[40%] bg-ap-teal/40 -rotate-1" />
                </span> on every deal because no one has time to build a business case.
              </h2>
            </div>

            {/* Visual: Revenue Leakage Progress Bar */}
            <div className="relative max-w-4xl mx-auto pt-0 pb-20 px-2 sm:px-0">
              
              <div className="relative h-auto md:h-24 w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-border overflow-hidden flex flex-col md:flex-row p-2 gap-2 md:gap-0">
                <div className="min-h-[112px] md:min-h-0 md:h-full bg-ap-teal rounded-2xl relative flex items-center px-6 md:px-8 group transition-all duration-700 shadow-inner w-full md:w-[65%]">
                   <div className="text-white py-4 md:py-0">
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-0.5">Revenue Captured</div>
                      <div className="text-3xl font-black leading-none">$65,000</div>
                   </div>
                   {/* Decorative Shine */}
                   <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                </div>
                
                <div className="min-h-[96px] md:min-h-0 md:h-full bg-slate-50 relative flex items-center px-6 md:px-8 overflow-hidden rounded-2xl md:rounded-l-none md:rounded-r-2xl w-full md:w-[35%]">
                  {/* Stripes Pattern for "Lost" area */}
                  <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)' , backgroundSize: '20px 20px' }} />
                  <div className="relative z-10 py-4 md:py-0">
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

      <PersonaUseCases />

      <section className="pt-8 pb-32 text-center bg-slate-50/30">
        <div className="section-container !pt-0">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-10">
              Ready to win more with <span className="relative inline-block whitespace-nowrap px-2">
                <span className="relative z-10 text-ap-dark-blue">value selling?</span>
                <span className="absolute bottom-2 left-0 w-full h-[40%] bg-ap-teal/40 -rotate-1" />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the forward-thinking revenue teams that use AgentPress to close bigger deals faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" className="btn-primary w-full sm:w-auto px-10 bg-black hover:bg-zinc-800 text-lg">
                Schedule Demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Agents Section */}
      <AdditionalAgents />
    </div>
  );
}
