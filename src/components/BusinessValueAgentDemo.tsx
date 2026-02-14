'use client';

import React, { useState, useEffect } from 'react';

export const BusinessValueAgentDemo = () => {
  const [url, setUrl] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Animation: Type acmecorp.com then click
    const targetUrl = 'acmecorp.com';
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= targetUrl.length) {
        setUrl(targetUrl.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        // After typing, wait a bit and then click the button
        setTimeout(() => {
          setIsClicked(true);
        }, 800);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="max-w-4xl mb-12 text-left">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ap-dark-blue leading-tight">
          Our Business Value Agent researches your prospect, maps their needs to your value model, and generates a detailed business case.
        </h2>
      </div>

      {/* Interactive Demo Area */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-ap-dark-blue rounded-[2.5rem] shadow-2xl overflow-hidden border border-ap-blue/20 group">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square bg-ap-blue/20 blur-[120px] rounded-full opacity-60 transition-all duration-1000 group-hover:opacity-80" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] aspect-square bg-ap-teal/20 blur-[120px] rounded-full opacity-40 transition-all duration-1000 group-hover:opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-12">
          {/* The Input Card */}
          <div className={`w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ${isClicked ? 'scale-[0.98] border-ap-teal/30' : 'hover:border-white/20'}`}>
            <div className="flex flex-col gap-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between ml-1">
                  <label htmlFor="url-input" className="text-ap-teal-light text-xs font-bold uppercase tracking-widest">
                    Business Value Analysis
                  </label>
                </div>
                
                <div className="relative group/input">
                  <input
                    id="url-input"
                    type="text"
                    placeholder="https://company-to-research.com"
                    value={url}
                    readOnly
                    className="w-full bg-ap-dark-blue/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none transition-all text-lg font-medium shadow-inner"
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-ap-teal shadow-[0_0_10px_#2dc4a8] animate-pulse" />
                  </div>
                </div>
              </div>

              <button 
                className={`w-full py-5 text-ap-dark-blue font-black text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-[0_10px_20px_rgba(45,196,168,0.2)] ${isClicked ? 'bg-ap-teal/80 scale-95 shadow-inner' : 'bg-ap-teal hover:bg-ap-teal/90 hover:-translate-y-0.5 shadow-[0_15px_30px_rgba(45,196,168,0.3)]'}`}
              >
                Next
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${isClicked ? 'translate-x-2' : 'group-hover/btn:translate-x-1.5'}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <div className="flex items-center justify-center gap-6 opacity-40">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
                <span className="text-[10px] text-white font-medium uppercase tracking-[0.2em] whitespace-nowrap">Powered by AgentPress Value Model</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
              </div>
            </div>
          </div>
          
          {/* Mapping Value Box */}
          <div className="absolute bottom-12 right-12 hidden lg:block">
            <div className="flex flex-col gap-2 bg-white/5 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/10 shadow-xl">
              <div className="w-12 h-1 bg-ap-teal/30 rounded-full overflow-hidden">
                <div className="w-[25%] h-full bg-ap-teal" />
              </div>
              <div className="text-[10px] font-bold text-ap-teal uppercase tracking-widest">Mapping Value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
