'use client';

import React from 'react';
import Image from 'next/image';

export const Testimonial = () => {
  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      {/* Visual Interest: Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-ap-teal/10 blur-[120px] rounded-full -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-ap-blue/10 blur-[120px] rounded-full translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Decorative Quote Mark */}
        <div className="absolute -top-10 -left-6 text-[180px] font-serif text-slate-100 leading-none select-none italic">
          &ldquo;
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="relative flex-shrink-0">
            {/* Main Portrait Image */}
            <div className="relative z-10 w-[200px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white">
              <Image 
                src="/david_hunter.jpg" 
                alt="David Hunter, CEO at Local Falcon" 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* Floating Metric Card */}
            <div className="absolute -bottom-4 -right-12 z-20 bg-white p-5 rounded-[1.5rem] shadow-xl border border-slate-100 max-w-[150px]">
              <div className="text-3xl font-black text-ap-teal mb-0.5 tracking-tight">-36%</div>
              <p className="text-[9px] font-bold text-ap-dark-blue leading-tight uppercase tracking-wider">
                Reduction in Churn
              </p>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="mb-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50/80 backdrop-blur-sm rounded-full border border-slate-100 shadow-sm mb-6">
                <div className="relative w-24 h-6">
                  <Image 
                    src="/logos/localfalcon.png" 
                    alt="Local Falcon logo" 
                    fill 
                    className="object-contain brightness-50 contrast-125 grayscale" 
                  />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ap-dark-blue leading-tight mb-8 italic relative z-10">
                &ldquo;By using AgentPress, we were able to reduce churn by 36%.&rdquo;
              </h2>
              
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-6">
                <div>
                  <p className="text-lg font-bold text-ap-dark-blue">David Hunter</p>
                  <p className="text-slate-500 text-sm font-medium">CEO at Local Falcon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
