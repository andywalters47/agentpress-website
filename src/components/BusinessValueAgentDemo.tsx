'use client';

import React, { useState, useEffect, useRef } from 'react';

type Step = 'input' | 'researching' | 'results' | 'financial_model' | 'full_report';

export const BusinessValueAgentDemo = () => {
  const [url, setUrl] = useState('');
  const [step, setStep] = useState<Step>('input');
  const [researchMessage, setResearchMessage] = useState('Initializing research...');
  const [progress, setProgress] = useState(25);
  const [sliderValue, setSliderValue] = useState(40);
  const [efficiencyValue, setEfficiencyValue] = useState(65);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetDemo = () => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    setUrl('');
    setStep('input');
    setResearchMessage('Initializing research...');
    setProgress(25);
    setSliderValue(40);
    setEfficiencyValue(65);
    setIsNextClicked(false);
  };

  useEffect(() => {
    if (step === 'input') {
      const targetUrl = 'acmecorp.com';
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= targetUrl.length) {
          setUrl(targetUrl.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setStep('researching');
          }, 800);
        }
      }, 100);
      
      return () => clearInterval(typeInterval);
    }

    if (step === 'researching') {
      const messages = [
        { msg: 'Scanning website for value prop...', p: 35 },
        { msg: 'Doing web research on industry trends...', p: 55 },
        { msg: 'Analyzing 10-K filings and financial reports...', p: 85 },
        { msg: 'Mapping findings to value model...', p: 95 }
      ];
      
      let msgIndex = 0;
      const researchInterval = setInterval(() => {
        if (msgIndex < messages.length) {
          setResearchMessage(messages[msgIndex].msg);
          setProgress(messages[msgIndex].p);
          msgIndex++;
        } else {
          clearInterval(researchInterval);
          setTimeout(() => {
            setStep('results');
          }, 1000);
        }
      }, 1500);

      return () => clearInterval(researchInterval);
    }

    if (step === 'results') {
      const timer = setTimeout(() => {
        setStep('financial_model');
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (step === 'financial_model') {
      // First animation: Security slider up
      const timer1 = setTimeout(() => {
        let current = 40;
        const target = 85;
        const interval = setInterval(() => {
          if (current < target) {
            current += 1;
            setSliderValue(current);
          } else {
            clearInterval(interval);
            
            // Second animation: Efficiency slider down
            let effCurrent = 65;
            const effTarget = 32;
            const effInterval = setInterval(() => {
              if (effCurrent > effTarget) {
                effCurrent -= 1;
                setEfficiencyValue(effCurrent);
              } else {
                clearInterval(effInterval);
                // Finish sequence
                setTimeout(() => {
                  setIsNextClicked(true);
                  setTimeout(() => {
                    setStep('full_report');
                    setIsNextClicked(false);
                  }, 400);
                }, 1000);
              }
            }, 20);
          }
        }, 20);
      }, 1000);
      return () => clearTimeout(timer1);
    }

    if (step === 'full_report') {
      // Very slow gradual scroll
      const timer = setTimeout(() => {
        if (reportRef.current) {
          const container = reportRef.current;
          const scrollSpeed = 0.68; // ~35% faster than 0.5
          let currentScroll = 0;
          
          scrollIntervalRef.current = setInterval(() => {
            if (currentScroll < container.scrollHeight - container.clientHeight) {
              currentScroll += scrollSpeed;
              container.scrollTop = currentScroll;
            } else {
              if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
            }
          }, 16); // ~60fps
        }
      }, 2500);
      return () => {
        clearTimeout(timer);
        if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
      };
    }
  }, [step]);

  const useCases = [
    {
      title: 'Standardizing Multi-Cloud Security Posture',
      driver: 'Risk Mitigation',
      value: '$450,000',
      help: 'AgentPress automates the mapping of multi-cloud configurations to your internal security standards, identifying gaps in real-time.'
    },
    {
      title: 'Reducing Network Complexity for M&A',
      driver: 'Operational Efficiency',
      value: '$320,000',
      help: 'AgentPress creates a unified value story for technical integration, accelerating time-to-value for newly acquired business units.'
    },
    {
      title: 'Automating Compliance across Distributed Teams',
      driver: 'Compliance Speed',
      value: '$430,000',
      help: 'Our agents generate real-time compliance reports grounded in local regulations, saving hundreds of manual audit hours.'
    }
  ];

  return (
    <div className="pt-24 pb-12 bg-white relative">
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        .animate-zoom-in { animation: zoomIn 0.5s ease-out forwards; }
      `}</style>

      <div className="max-w-4xl mb-12 text-left space-y-8 relative z-10">
        <div className="flex flex-wrap gap-3">
          <span className="badge bg-white text-ap-blue border border-ap-blue/20 shadow-sm uppercase tracking-widest text-[10px] font-black px-4 py-1.5">Marketing Website Lead Magnet</span>
          <span className="badge bg-white text-ap-teal border border-ap-teal/20 shadow-sm uppercase tracking-widest text-[10px] font-black px-4 py-1.5">In App Experience</span>
          <span className="badge bg-white text-ap-purple-muted border border-ap-purple-muted/20 shadow-sm uppercase tracking-widest text-[10px] font-black px-4 py-1.5">Team Copilot</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ap-dark-blue leading-[1.1]">
          Lift win rate and ACV with our <span className="text-ap-blue">Business Value Agent</span> that researches accounts and generates detailed business cases.
        </h2>
      </div>

      {/* Interactive Demo Area with FIXED HEIGHT to prevent jumping */}
      <div className="relative w-full h-[500px] md:h-[650px] bg-ap-dark-blue rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(2,11,38,0.4)] overflow-hidden border border-ap-blue/20 group text-white z-10">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square bg-ap-blue/20 blur-[120px] rounded-full opacity-60 transition-all duration-1000 group-hover:opacity-80" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] aspect-square bg-ap-teal/20 blur-[120px] rounded-full opacity-40 transition-all duration-1000 group-hover:opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-12">
          
          {step === 'input' && (
            <div className="w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-zoom-in">
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
                  className="w-full py-5 bg-ap-teal text-ap-dark-blue font-black text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-[0_15px_30px_rgba(45,196,168,0.3)]"
                >
                  Next
                  <svg 
                    className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {step === 'researching' && (
            <div className="w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-fade-in">
              <div className="flex flex-col items-center text-center gap-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 border-4 border-ap-teal/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-t-ap-teal rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-ap-teal animate-ping" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">{researchMessage}</h3>
                  <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mx-auto">
                    <div 
                      className="h-full bg-ap-teal transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm mt-4">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-[10px] text-white/40 uppercase font-bold tracking-widest">
                    Web Research
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-[10px] text-white/40 uppercase font-bold tracking-widest">
                    10-K Analysis
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 'results' && (
            <div className="w-full max-w-3xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-zoom-in">
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div className="space-y-1">
                    <span className="text-ap-teal text-[10px] font-bold uppercase tracking-[0.2em]">Analysis Complete</span>
                    <h3 className="text-2xl font-bold text-white">Acme Corp</h3>
                  </div>
                  <div className="bg-ap-teal/10 text-ap-teal text-[10px] font-black px-3 py-1 rounded-full border border-ap-teal/20 uppercase tracking-widest">
                    98% Confidence
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-2">Industry</label>
                      <p className="text-white text-lg font-medium">Enterprise Cloud Infrastructure & Cybersecurity</p>
                    </div>
                    <div>
                      <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-2">Description</label>
                      <p className="text-white/80 leading-relaxed">Leading provider of resilient multi-cloud networking and zero-trust security for global Fortune 500 enterprises.</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-3">Relevant Use Cases</label>
                    <ul className="space-y-3">
                      {useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5 group hover:border-ap-teal/30 transition-colors">
                          <div className="w-5 h-5 rounded-full bg-ap-teal/20 flex items-center justify-center text-ap-teal text-[10px] font-bold mt-0.5">
                            {i + 1}
                          </div>
                          <span className="text-white/90 text-sm font-medium">{useCase.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  className="w-full mt-4 py-5 bg-ap-teal text-ap-dark-blue font-black text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:bg-ap-teal/90 hover:shadow-[0_15px_30px_rgba(45,196,168,0.3)] group/btn"
                >
                  Next
                  <svg 
                    className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {step === 'financial_model' && (
            <div className="w-full max-w-4xl min-h-[560px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-zoom-in flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">Financial Model</h3>
                  </div>
                  <div className="flex gap-2">
                    {useCases.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-ap-teal' : 'bg-white/20'}`} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {useCases.map((useCase, i) => (
                    <span key={i} className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60">
                      {useCase.title}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-ap-teal-light">Value Drivers</h4>
                    
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-medium text-white/80">Operational Efficiency Gain</label>
                          <span className="text-ap-teal font-bold text-sm">{efficiencyValue}%</span>
                        </div>
                        <input 
                          type="range" 
                          className="w-full accent-ap-teal cursor-pointer" 
                          value={efficiencyValue}
                          onChange={(e) => setEfficiencyValue(parseInt(e.target.value))}
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-medium text-white/80">Security Incident Reduction</label>
                          <span className="text-ap-teal font-bold text-sm">{sliderValue}%</span>
                        </div>
                        <input 
                          type="range" 
                          className="w-full accent-ap-teal cursor-pointer" 
                          value={sliderValue}
                          onChange={(e) => setSliderValue(parseInt(e.target.value))}
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-medium text-white/80">Compliance Automation Speed</label>
                          <span className="text-ap-teal font-bold text-sm">45%</span>
                        </div>
                        <input type="range" className="w-full accent-ap-teal opacity-50 cursor-not-allowed" value="45" readOnly />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Estimated Annual Value</div>
                      <div className="text-4xl md:text-5xl font-black text-white">$1.2M</div>
                      <div className="text-ap-teal text-sm font-bold">+18% vs Baseline</div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">Cost Savings</span>
                        <span className="font-bold">$450k</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/60">Risk Mitigation</span>
                        <span className="font-bold">$750k</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  className={`w-full mt-2 py-5 bg-ap-teal text-ap-dark-blue font-black text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:bg-ap-teal/90 shadow-[0_15px_30px_rgba(45,196,168,0.3)] group/btn ${isNextClicked ? 'scale-95 bg-ap-teal-light' : ''}`}
                >
                  Next
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${isNextClicked ? 'translate-x-2' : 'group-hover/btn:translate-x-1.5'}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {step === 'full_report' && (
            <div className="w-full max-w-4xl h-[560px] bg-ap-dark-blue/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col animate-zoom-in text-white overflow-hidden">
              <div className="p-8 border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                    <span className="text-ap-teal font-bold">AP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Business Case: Acme Corp</h3>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Generated by AgentPress AI</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                   <div className="flex bg-white/5 rounded-lg border border-white/10 p-1">
                     <button className="px-3 py-1.5 rounded-md hover:bg-white/5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-colors">
                       <svg className="w-3 h-3 text-ap-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                       </svg>
                       Export: PDF
                     </button>
                     <div className="w-[1px] bg-white/10 my-1 mx-1" />
                     <button className="px-3 py-1.5 rounded-md hover:bg-white/5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-colors">
                       <svg className="w-3 h-3 text-[#00A1E0]" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M13.04 14.34l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.35 1.34-1.35 3.53 0 4.87zm-6.09 3.04l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.34 1.34-1.34 3.53 0 4.87zm-4.87-4.87l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.34 1.34-1.34 3.53 0 4.87z" />
                       </svg>
                       Salesforce
                     </button>
                   </div>
                   <button 
                     onClick={resetDemo}
                     className="h-[38px] w-[38px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all border border-white/10 group/reset"
                     title="Re-run Demo"
                   >
                     <svg className="w-4 h-4 transition-transform group-hover/reset:rotate-180 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                     </svg>
                   </button>
                </div>
              </div>

              <div 
                ref={reportRef}
                className="flex-1 overflow-y-auto p-8 space-y-12 custom-scrollbar scroll-smooth"
              >
                <div className="grid grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-center">
                    <span className="text-[10px] uppercase tracking-tighter text-white/40 font-bold">Total Annual Value</span>
                    <p className="text-2xl font-black text-ap-teal">$1,200,000</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-center">
                    <span className="text-[10px] uppercase tracking-tighter text-white/40 font-bold">ROI Period</span>
                    <p className="text-2xl font-black text-ap-teal">4.2 Months</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-center">
                    <span className="text-[10px] uppercase tracking-tighter text-white/40 font-bold">Efficiency Lift</span>
                    <p className="text-2xl font-black text-ap-teal">28%</p>
                  </div>
                </div>

                <div className="space-y-10">
                  <h4 className="text-sm font-black uppercase tracking-widest text-ap-teal-light border-b border-white/10 pb-2">Use Case Breakdown</h4>
                  
                  {useCases.map((useCase, i) => (
                    <div key={i} className="space-y-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h5 className="text-lg font-bold">{useCase.title}</h5>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-ap-teal uppercase">{useCase.driver}</span>
                            <span className="w-1 h-1 rounded-full bg-white/10" />
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                           <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Annual Impact</div>
                           <div className="text-3xl font-black text-ap-teal drop-shadow-[0_0_10px_rgba(45,196,168,0.3)]">{useCase.value}</div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8 bg-white/5 rounded-2xl p-8 border border-white/10">
                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Calculated Drivers</label>
                          <ul className="space-y-3">
                            <li className="flex justify-between text-xs border-b border-white/5 pb-2">
                              <span className="text-white/80">Reduced Manual Review Time</span>
                              <span className="font-bold text-ap-teal">+45%</span>
                            </li>
                            <li className="flex justify-between text-xs">
                              <span className="text-white/80">Standardized Documentation</span>
                              <span className="font-bold text-ap-teal">100%</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40">How We Can Help</label>
                          <p className="text-sm leading-relaxed text-white/70 italic">
                            {useCase.help}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-12 pb-8 border-t border-white/10 flex items-center justify-center gap-6">
                  <button className="flex-1 max-w-xs py-5 bg-white/10 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-white/20 border border-white/10 transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    Export to PDF
                  </button>
                  <button className="flex-1 max-w-xs py-5 bg-[#00A1E0] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#0081B0] transition-colors shadow-lg shadow-[#00A1E0]/20">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M13.04 14.34l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.35 1.34-1.35 3.53 0 4.87zm-6.09 3.04l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.34 1.34-1.34 3.53 0 4.87zm-4.87-4.87l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.34 1.34-1.34 3.53 0 4.87z" />
                    </svg>
                    Export to Salesforce
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(45, 196, 168, 0.3);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};
