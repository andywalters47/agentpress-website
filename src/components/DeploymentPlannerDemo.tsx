'use client';

import React, { useEffect, useRef } from 'react';

export const DeploymentPlannerDemo = () => {
  const reportRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Gradual scroll through the deployment plan
    const timer = setTimeout(() => {
      if (reportRef.current) {
        const container = reportRef.current;
        const scrollSpeed = 0.5; 
        let currentScroll = 0;
        
        scrollIntervalRef.current = setInterval(() => {
          if (currentScroll < container.scrollHeight - container.clientHeight) {
            currentScroll += scrollSpeed;
            container.scrollTop = currentScroll;
          } else {
            // Pause at bottom for a bit then reset to top or just stop
            if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
            setTimeout(() => {
                if (reportRef.current) {
                    reportRef.current.scrollTop = 0;
                    currentScroll = 0;
                    // Restart scroll after a pause
                    // (Optional: loop it)
                }
            }, 5000);
          }
        }, 16);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, []);

  const milestones = [
    {
      id: 1,
      title: 'Foundation & Infrastructure Alignment',
      valueProgress: '30%',
      description: 'Establishing the core multi-cloud connectivity and security baseline.',
      useCaseLink: 'Standardizing Multi-Cloud Security Posture',
      tasks: [
        { task: 'Map AWS/Azure VPC configurations to security standards', owner: 'Cloud Architect', status: 'In Progress' },
        { task: 'Deploy AgentPress Security Mapping nodes', owner: 'AgentPress Team', status: 'Pending' },
        { task: 'Initialize real-time drift detection for compliance', owner: 'SecOps', status: 'Pending' }
      ],
      risks: [
        { risk: 'Delayed IAM role approvals from InfoSec', mitigation: 'Pre-validated template documentation provided' }
      ]
    },
    {
      id: 2,
      title: 'Operational Efficiency Acceleration',
      valueProgress: '65%',
      description: 'Streamlining network complexity and automating manual compliance workflows.',
      useCaseLink: 'Reducing Network Complexity for M&A',
      tasks: [
        { task: 'Integrate M&A business unit network telemetry', owner: 'Network Eng', status: 'Pending' },
        { task: 'Automate weekly compliance report generation', owner: 'Compliance Officer', status: 'Pending' },
        { task: 'Optimize cross-region routing tables', owner: 'Cloud Architect', status: 'Pending' }
      ],
      risks: [
        { risk: 'Data format mismatch from legacy M&A systems', mitigation: 'AgentPress auto-normalizer enabled' }
      ]
    },
    {
      id: 3,
      title: 'Enterprise-Wide Value Realization',
      valueProgress: '100%',
      description: 'Full automation of compliance across all distributed teams and value story validation.',
      useCaseLink: 'Automating Compliance across Distributed Teams',
      tasks: [
        { task: 'Final validation of $1.2M annual value target', owner: 'CFO / Sponsor', status: 'Pending' },
        { task: 'Onboard distributed dev teams to self-service portal', owner: 'Product Ops', status: 'Pending' },
        { task: 'Configure Salesforce executive value dashboard', owner: 'Sales Ops', status: 'Pending' }
      ],
      risks: [
        { risk: 'User adoption across non-technical teams', mitigation: 'In-app AI guidance agents enabled' }
      ]
    }
  ];

  return (
    <div className="pt-12 pb-32 bg-slate-50/50 overflow-hidden relative">
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(241 245 249 / 1)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Unique Background Decorations for this section */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ap-teal/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ap-blue/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-8 mb-20">
          <div className="flex flex-wrap gap-3">
            <span className="badge bg-white text-ap-teal border border-ap-teal/20 shadow-sm uppercase tracking-widest text-[10px] font-black px-4 py-1.5">In-App Experience</span>
            <span className="badge bg-white text-ap-purple-muted border border-ap-purple-muted/20 shadow-sm uppercase tracking-widest text-[10px] font-black px-4 py-1.5">Team Copilot</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ap-dark-blue leading-[1.1]">
            Drive net revenue retention with a <span className="text-ap-teal">Deployment Planner</span> that turns the value you sold into the value you deliver.
          </h2>
        </div>

        {/* Demo Area */}
        <div className="relative group">
          <div className="relative w-full h-[600px] bg-ap-dark-blue rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(2,11,38,0.4)] overflow-hidden border border-ap-blue/20 group text-white">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square bg-ap-teal/10 blur-[120px] rounded-full opacity-60" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] aspect-square bg-ap-blue/10 blur-[120px] rounded-full opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        </div>

        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="p-8 border-b border-white/10 flex items-center justify-between bg-ap-dark-blue/60 backdrop-blur-xl shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-ap-teal/20 flex items-center justify-center border border-ap-teal/30">
                <svg className="w-6 h-6 text-ap-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Deployment Plan: Acme Corp</h3>
                <p className="text-xs text-ap-teal font-bold uppercase tracking-widest">Post-Sales Value Delivery</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
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
            </div>
          </div>

          {/* Scrolling Content */}
          <div 
            ref={reportRef}
            className="flex-1 overflow-y-auto p-8 space-y-12 custom-scrollbar scroll-smooth"
          >
            {milestones.map((milestone, idx) => (
              <div key={milestone.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-white/10 pb-4 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold border border-white/10">
                      {milestone.id}
                    </div>
                    <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Value Realized</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-ap-teal transition-all duration-1000" 
                            style={{ width: milestone.valueProgress }} 
                          />
                        </div>
                        <span className="text-ap-teal text-xs font-black">{milestone.valueProgress}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Tasks Section */}
                  <div className="lg:col-span-2 space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Action Items & Tasks</label>
                    <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 border-b border-white/10">
                          <tr>
                            <th className="px-4 py-3 font-bold text-white/60">Task</th>
                            <th className="px-4 py-3 font-bold text-white/60">Owner</th>
                            <th className="px-4 py-3 font-bold text-white/60 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {milestone.tasks.map((t, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-4 font-medium text-white/90">{t.task}</td>
                              <td className="px-4 py-4 text-white/60">{t.owner}</td>
                              <td className="px-4 py-4 text-right">
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${t.status === 'In Progress' ? 'bg-ap-blue/20 text-ap-blue' : 'bg-white/5 text-white/40'}`}>
                                  {t.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Risks & Details */}
                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-3">Deployment Risk</label>
                      {milestone.risks.map((r, i) => (
                        <div key={i} className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 space-y-2">
                          <p className="text-xs font-bold text-red-400">{r.risk}</p>
                          <div className="pt-2 border-t border-red-500/10">
                            <p className="text-[10px] text-white/60 uppercase font-bold tracking-tighter mb-1">AgentPress Mitigation:</p>
                            <p className="text-xs text-white/80 italic">{r.mitigation}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block">Grounded In Business Case</label>
                      <p className="text-xs font-bold text-ap-teal">{milestone.useCaseLink}</p>
                      <p className="text-[11px] leading-relaxed text-white/60 italic">
                        &quot;{milestone.description}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Export Area */}
            <div className="pt-12 pb-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="flex-1 w-full max-w-xs py-5 bg-white/10 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-white/20 border border-white/10 transition-all">
                    <svg className="w-5 h-5 text-ap-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    Export Plan to PDF
                </button>
                <button className="flex-1 w-full max-w-xs py-5 bg-[#00A1E0] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#0081B0] transition-colors shadow-lg shadow-[#00A1E0]/20">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.04 14.34l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.35 1.34-1.35 3.53 0 4.87zm-6.09 3.04l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.34 1.34-1.34 3.53 0 4.87zm-4.87-4.87l.07.07c1.34 1.34 3.53 1.34 4.87 0l4.87-4.87c1.34-1.34 1.34-3.53 0-4.87l-.07-.07a3.444 3.444 0 00-4.87 0l-4.87 4.87c-1.34 1.34-1.34 3.53 0 4.87z" />
                    </svg>
                    Sync to Salesforce
                </button>
            </div>
          </div>
        </div>
      </div>
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
