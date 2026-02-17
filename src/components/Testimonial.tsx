'use client';

import React from 'react';
import Image from 'next/image';

export const Testimonial = () => {
  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-32 bg-white relative overflow-hidden">
      {/* Decorative Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-ap-blue/30 to-transparent" />
      
      {/* Visual Interest: Modern Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,rgba(45,196,168,0.12),transparent_50%),radial-gradient(at_bottom_left,rgba(87,109,241,0.12),transparent_50%)]" />
      
      {/* Subtle Grid Pattern with brand color */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-ap-blue) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Decorative Quote Mark */}
        <div className="absolute -top-12 -left-8 text-[200px] font-serif text-ap-blue/5 leading-none select-none italic">
          &ldquo;
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="relative flex-shrink-0">
            {/* Main Portrait Image */}
            <div className="relative z-10 w-[320px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-4 border-white">
              <Image 
                src="/david_hunter.jpg" 
                alt="David Hunter, CEO at Local Falcon" 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* Floating Metric Card */}
            <div className="absolute -bottom-6 -right-8 z-20 bg-white p-6 rounded-[1.5rem] shadow-2xl border border-slate-100 max-w-[160px]">
              <div className="text-4xl font-black text-ap-teal mb-1 tracking-tight">-36%</div>
              <p className="text-[10px] font-bold text-ap-dark-blue leading-tight uppercase tracking-widest">
                Reduction in Churn
              </p>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="mb-4">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full border border-ap-blue/10 shadow-sm mb-8 transition-transform hover:scale-105 duration-500">
                <div className="relative w-28 h-7">
                  <Image 
                    src="/logos/localfalcon.png" 
                    alt="Local Falcon logo" 
                    fill 
                    className="object-contain brightness-50 contrast-125 grayscale" 
                  />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ap-dark-blue leading-[1.15] mb-8 italic relative z-10">
                &ldquo;By using AgentPress, we increased ACV by 23%.&rdquo;
              </h2>
              
              <div className="flex items-center gap-5 border-t border-ap-blue/10 pt-6 mt-6">
                <div>
                  <p className="text-xl font-bold text-ap-dark-blue leading-none mb-2">David Hunter</p>
                  <p className="text-ap-blue/70 text-base font-semibold uppercase tracking-wider">CEO at Local Falcon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
