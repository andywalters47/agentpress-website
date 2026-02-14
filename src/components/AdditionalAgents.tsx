'use client';

import React from 'react';

const Icons = {
  SDR: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Copilot: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Support: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

const agents = [
  {
    title: 'AI SDR for Marketing Website',
    headline: 'Increase qualified pipeline while also accelerating PLG',
    subhead: 'Engages visitors in real time, qualifies on value fit — not just firmographics — and books meetings your AEs actually want to take.',
    Icon: Icons.SDR,
    color: 'text-ap-teal',
    bgColor: 'bg-ap-teal',
    borderColor: 'border-ap-teal/20',
    lightColor: 'bg-ap-teal/[0.03]',
    hoverBg: 'group-hover:bg-ap-teal/[0.06]',
  },
  {
    title: 'Team Copilot',
    headline: 'Shorten deal cycles by arming every rep with the right story.',
    subhead: 'Surfaces proof points, talk tracks, and financial context for any account — inside the tools your team already lives in.',
    Icon: Icons.Copilot,
    color: 'text-ap-blue',
    bgColor: 'bg-ap-blue',
    borderColor: 'border-ap-blue/20',
    lightColor: 'bg-ap-blue/[0.03]',
    hoverBg: 'group-hover:bg-ap-blue/[0.06]',
  },
  {
    title: 'Support Agent',
    headline: 'Reduce churn risk before it ever reaches your desk.',
    subhead: 'Resolves issues in the language of business outcomes, turning support interactions into retention moments.',
    Icon: Icons.Support,
    color: 'text-ap-periwinkle',
    bgColor: 'bg-ap-periwinkle',
    borderColor: 'border-ap-periwinkle/20',
    lightColor: 'bg-ap-periwinkle/[0.03]',
    hoverBg: 'group-hover:bg-ap-periwinkle/[0.06]',
  },
];

export const AdditionalAgents = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] aspect-square bg-ap-teal/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] aspect-square bg-ap-blue/5 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ap-dark-blue text-white text-[10px] font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ap-teal animate-pulse" />
            Complete Revenue Coverage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ap-dark-blue mb-8 leading-[1.1]">
            The rest of your team, <span className="text-ap-teal">now value-fluent.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Deploy specialized agents across every touchpoint to maintain a consistent, value-driven story throughout the entire customer journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <div 
              key={idx}
              className={`group p-10 rounded-[2.5rem] border ${agent.borderColor} ${agent.lightColor} ${agent.hoverBg} transition-all duration-700 flex flex-col h-full relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2`}
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full ${agent.bgColor}/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="mb-10 relative">
                <div className={`w-16 h-16 rounded-2xl ${agent.bgColor}/10 flex items-center justify-center border ${agent.borderColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${agent.color}`}>
                  <agent.Icon />
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{agent.title}</span>
                </div>
                <h4 className="text-2xl font-bold text-ap-dark-blue mb-6 leading-tight group-hover:text-black transition-colors">
                  {agent.headline}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {agent.subhead}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-black/5 flex items-center justify-between relative z-10">
                <button className="text-sm font-black uppercase tracking-widest text-ap-dark-blue flex items-center gap-2 group/btn">
                    Explore Agent
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                <div className={`w-2 h-2 rounded-full ${agent.bgColor} opacity-20 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 flex flex-col items-center justify-center gap-6">
            <div className="h-16 w-[1px] bg-linear-to-b from-ap-teal to-transparent mb-4" />
            <button className="group relative px-8 py-4 bg-ap-dark-blue text-white rounded-full font-bold text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-ap-dark-blue/30">
                <div className="absolute inset-0 bg-linear-to-r from-ap-teal to-ap-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                    View full agent ecosystem
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </span>
            </button>
        </div>
      </div>
    </section>
  );
};
