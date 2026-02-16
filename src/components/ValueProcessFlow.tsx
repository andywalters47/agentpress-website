'use client';

import React from 'react';

export const ValueProcessFlow = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="max-w-4xl mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ap-dark-blue leading-tight">
            Win bigger deals with a <span className="text-ap-teal">Business Value Agent</span> that builds custom cases in seconds.
          </h2>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="md:ml-0 max-w-3xl">
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl font-black text-ap-teal shrink-0 shadow-sm">1</div>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-ap-dark-blue leading-tight">Our AI builds your value model automatically.</h3>
                <p className="text-slate-500 text-lg">Products, pricing, industries, and use cases — ready in minutes.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="md:ml-20 lg:ml-32 max-w-3xl">
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl font-black text-ap-blue shrink-0 shadow-sm">2</div>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-ap-dark-blue leading-tight">Enter a URL, get a business case.</h3>
                <p className="text-slate-500 text-lg">Drop in any prospect&apos;s URL and get a custom ROI case instantly.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="md:ml-40 lg:ml-64 max-w-3xl">
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl font-black text-ap-periwinkle shrink-0 shadow-sm">3</div>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-ap-dark-blue leading-tight">Share with your prospect or customer.</h3>
                <p className="text-slate-500 text-lg">Present it live on a call or export a PDF they can take to their CFO.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
