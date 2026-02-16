'use client';

import React, { useState, useEffect } from 'react';

const personas = [
  {
    id: 'ae',
    role: 'Account Executive',
    title: 'Account Executive',
    description: 'Use AgentPress in the middle and bottom of the funnel to work with your business champion. Provide them with a rock-solid value case that ultimately pushes the deal across the finish line.',
    benefits: ['Accelerate procurement cycles', 'Empower champions with ROI data', 'Standardize business case quality'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-ap-blue'
  },
  {
    id: 'sdr',
    role: 'Sales Development Rep',
    title: 'Sales Development Rep',
    description: 'Leverage AgentPress at the top of the funnel to generate high-quality interest. Stand out from the noise by leading with account-specific value from the very first touchpoint.',
    benefits: ['Higher meeting conversion rates', 'Instant account research', 'Personalized outreach at scale'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-ap-teal'
  },
  {
    id: 'cro',
    role: 'Chief Revenue Officer',
    title: 'Chief Revenue Officer',
    description: 'Standardize the value story your entire organization tells. Ensure every representative is empowered to sell like your top performer by institutionalizing your best value frameworks.',
    benefits: ['Drive consistency across the org', 'Improve win rates company-wide', 'Shorten ramp time for new reps'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-ap-dark-blue'
  },
  {
    id: 'cmo',
    role: 'Chief Marketing Officer',
    title: 'Chief Marketing Officer',
    description: 'Deploy AgentPress as a powerful lead magnet on your website. Capture high-intent leads by offering instant, personalized value reports that prove ROI before the first call.',
    benefits: ['High-conversion lead magnets', 'Identify high-intent accounts', 'Bridge the gap between MQL and SQL'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    color: 'bg-ap-periwinkle'
  }
];

export const PersonaUseCases = () => {
  const [activeTab, setActiveTab] = useState(personas[0].id);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const activePersona = personas.find(p => p.id === activeTab) || personas[0];

  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ap-dark-blue leading-tight">
            AgentPress is for your whole revenue team
          </h2>
        </div>

        <div className="bg-slate-50/50 rounded-[3rem] p-4 border border-slate-100 shadow-sm">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-12">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-4 border-r border-slate-100 p-6 flex flex-col justify-start bg-slate-50/30">
                <div className="space-y-2">
                  {personas.map((persona) => (
                    <button
                      key={persona.id}
                      onClick={() => setActiveTab(persona.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                        activeTab === persona.id
                          ? 'bg-white shadow-md border border-slate-100 text-ap-dark-blue z-10'
                          : 'text-slate-400 hover:text-slate-600 hover:bg-white/50 border border-transparent'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${
                        activeTab === persona.id 
                          ? persona.color + ' text-white shadow-inner' 
                          : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                      }`}>
                        {persona.icon}
                      </div>
                      <div>
                        <div className="font-bold text-base leading-tight">{persona.role}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-8 p-10 lg:p-14 flex flex-col justify-start">
                <div 
                  className={`max-w-xl transition-all duration-500 ${
                    isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl font-black text-ap-dark-blue mb-6 leading-tight">
                    {activePersona.title}
                  </h3>
                  
                  <p className="text-slate-500 text-lg mb-8 max-w-xl">
                    {activePersona.description}
                  </p>
                  
                  <div className="grid gap-4">
                    {activePersona.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0 ${activePersona.color}`}>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-bold text-ap-dark-blue">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
