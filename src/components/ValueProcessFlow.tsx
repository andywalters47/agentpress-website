'use client';

import React from 'react';

export const ValueProcessFlow = () => {
  return (
    <div className="pt-8 pb-12 bg-white overflow-hidden">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ap-dark-blue leading-tight">
          How it Works
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Step 1 */}
        <div className="flex justify-start">
          <div className="w-full md:w-[85%] bg-slate-50/50 border border-slate-100 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl font-black text-ap-teal shrink-0 shadow-sm">1</div>
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-ap-dark-blue leading-tight">Our AI learns your use cases, products, and ICPs automatically.</h3>
              <p className="text-slate-500 text-lg">AgentPress uses public information about your company, but you can tweak your value model easily.</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex justify-center">
          <div className="w-full md:w-[85%] bg-slate-50/50 border border-slate-100 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl font-black text-ap-blue shrink-0 shadow-sm">2</div>
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-ap-dark-blue leading-tight">Enter a URL, get a business case.</h3>
              <p className="text-slate-500 text-lg">Drop the URL of any prospect or existing customer and get a customized business value case instantly.</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex justify-end">
          <div className="w-full md:w-[85%] bg-slate-50/50 border border-slate-100 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center md:items-center shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl font-black text-ap-periwinkle shrink-0 shadow-sm">3</div>
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-ap-dark-blue leading-tight">Share with your prospect or customer.</h3>
              <p className="text-slate-500 text-lg">Present it live on a call or export a PDF they can take to their CFO.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
