'use client';

import React from 'react';

const Icons = {
  SDR: () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Copilot: () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Support: () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Planner: () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
};

const agents = [
  {
    title: 'AI SDR for Marketing Websites',
    headline: 'Increase qualified pipeline while also accelerating PLG',
    Icon: Icons.SDR,
    color: 'text-ap-teal',
    bgColor: 'bg-ap-teal',
    borderColor: 'border-ap-teal/10',
    lightColor: 'bg-white',
    hoverBg: 'group-hover:bg-slate-50',
  },
  {
    title: 'Team Copilot',
    headline: 'Shorten deal cycles by arming every rep with the right story.',
    Icon: Icons.Copilot,
    color: 'text-ap-blue',
    bgColor: 'bg-ap-blue',
    borderColor: 'border-ap-blue/10',
    lightColor: 'bg-white',
    hoverBg: 'group-hover:bg-slate-50',
  },
  {
    title: 'Deployment Planner',
    headline: 'Grow NRR by ensuring the value you deliver is the value you sold.',
    Icon: Icons.Planner,
    color: 'text-ap-sky-blue',
    bgColor: 'bg-ap-sky-blue',
    borderColor: 'border-ap-sky-blue/10',
    lightColor: 'bg-white',
    hoverBg: 'group-hover:bg-slate-50',
  },
  {
    title: 'Support Agent',
    headline: 'Reduce churn risk before it ever reaches your desk.',
    Icon: Icons.Support,
    color: 'text-ap-periwinkle',
    bgColor: 'bg-ap-periwinkle',
    borderColor: 'border-ap-periwinkle/10',
    lightColor: 'bg-white',
    hoverBg: 'group-hover:bg-slate-50',
  },
];

export const AdditionalAgents = () => {
  return (
    <section className="pb-32 pt-16 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col justify-start pt-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ap-dark-blue leading-[1.1]">
              Explore our other <span className="text-ap-teal">value-based agents</span>
            </h2>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {agents.map((agent, idx) => (
              <div 
                key={idx}
                className={`group relative flex flex-col h-[260px] p-8 rounded-[2.5rem] transition-all duration-700 overflow-hidden border border-slate-100 hover:border-transparent hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] bg-white`}
              >
                {/* Giant Background Icon */}
                <div className={`absolute -right-12 -bottom-12 w-64 h-64 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-1000 pointer-events-none ${agent.color}`}>
                  <agent.Icon />
                </div>

                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${agent.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="mb-4">
                     <div className={`w-10 h-10 rounded-xl ${agent.bgColor}/10 flex items-center justify-center p-2 ${agent.color}`}>
                      <agent.Icon />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-ap-dark-blue mb-2 tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">
                    {agent.title}
                  </h3>
                </div>

                <div className="mt-auto relative z-10">
                  <h4 className="text-base font-medium text-slate-500 leading-snug group-hover:text-slate-900 transition-colors duration-500">
                    {agent.headline}
                  </h4>
                </div>

                {/* Hover Glow */}
                <div className={`absolute -left-20 -bottom-20 w-60 h-60 rounded-full ${agent.bgColor}/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
