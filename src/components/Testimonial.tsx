'use client';

import React from 'react';
import Image from 'next/image';

export const Testimonial = () => {
  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Main Portrait Image */}
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white">
              <Image 
                src="/david_hunter.jpeg" 
                alt="David Hunter, CEO at Local Falcon" 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* Floating Metric Card */}
            <div className="absolute -bottom-8 -right-8 z-20 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-[240px]">
              <div className="text-4xl font-black text-ap-teal mb-2">-36%</div>
              <p className="text-sm font-bold text-ap-dark-blue leading-tight uppercase tracking-wider">
                Reduction in Customer Churn
              </p>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-ap-teal/10 blur-[100px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200/50 rounded-full opacity-20 pointer-events-none" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm mb-8">
                <div className="relative w-24 h-6">
                  <Image 
                    src="/logos/localfalcon.png" 
                    alt="Local Falcon logo" 
                    fill 
                    className="object-contain brightness-50 contrast-125 grayscale" 
                  />
                </div>
                <div className="w-px h-4 bg-slate-200" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case Study</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ap-dark-blue leading-[1.1] mb-8 italic">
                &ldquo;By using AgentPress, we were able to reduce churn by 36%.&rdquo;
              </h2>
              
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xl font-bold text-ap-dark-blue">David Hunter</p>
                  <p className="text-slate-500 font-medium">CEO at Local Falcon</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
                {/* Visual indicator of success / Gartner-style badge placeholder */}
                <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-ap-teal/10 flex items-center justify-center text-ap-teal">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-2.066 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 2.066 3.42 3.42 0 010 4.606 3.42 3.42 0 00-2.066 1.946 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-2.066 3.42 3.42 0 010-4.606z" />
                        </svg>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-ap-dark-blue">High Performer 2026</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-ap-blue/10 flex items-center justify-center text-ap-blue">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-ap-dark-blue">Easiest to setup</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
