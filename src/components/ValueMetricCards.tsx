'use client';

import React from 'react';

const Icons = {
  Chart: () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Trophy: () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-2.066 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 2.066 3.42 3.42 0 010 4.606 3.42 3.42 0 00-2.066 1.946 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-2.066 3.42 3.42 0 010-4.606z" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const metrics = [
  {
    heading: (
      <>
        Grow average deal size{' '}
        <span className="relative inline-block whitespace-nowrap px-1">
          <span className="relative z-10">35%</span>
          <span className="absolute bottom-1 left-0 w-full h-[40%] bg-ap-teal/40 -rotate-1" />
        </span>
      </>
    ),
    subhead: 'Every rep sells on value when the business case builds itself.',
    Icon: Icons.Chart,
    color: 'text-ap-teal',
    bgColor: 'bg-ap-teal',
    highlightColor: 'bg-ap-teal/40',
  },
  {
    heading: (
      <>
        Increase close rate{' '}
        <span className="relative inline-block whitespace-nowrap px-1">
          <span className="relative z-10">48%</span>
          <span className="absolute bottom-1 left-0 w-full h-[40%] bg-ap-blue/40 -rotate-1" />
        </span>
      </>
    ),
    subhead: 'Give your champion a tailored case ready for the CFO.',
    Icon: Icons.Trophy,
    color: 'text-ap-blue',
    bgColor: 'bg-ap-blue',
    highlightColor: 'bg-ap-blue/40',
  },
  {
    heading: (
      <>
        Shorten sales cycles{' '}
        <span className="relative inline-block whitespace-nowrap px-1">
          <span className="relative z-10">25%</span>
          <span className="absolute bottom-1 left-0 w-full h-[40%] bg-ap-periwinkle/40 -rotate-1" />
        </span>
      </>
    ),
    subhead: 'Accelerate deals with internal justification on day one.',
    Icon: Icons.Clock,
    color: 'text-ap-periwinkle',
    bgColor: 'bg-ap-periwinkle',
    highlightColor: 'bg-ap-periwinkle/40',
  },
];

export const ValueMetricCards = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-20">
      {metrics.map((metric, idx) => (
        <div 
          key={idx}
          className="group relative flex flex-col h-[420px] p-12 rounded-[3rem] transition-all duration-700 overflow-hidden border border-slate-100 hover:border-transparent hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] bg-white"
        >
          {/* Giant Background Icon */}
          <div className={`absolute -right-12 -bottom-12 w-64 h-64 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-1000 pointer-events-none ${metric.color}`}>
            <metric.Icon />
          </div>

          {/* Top Accent Bar */}
          <div className={`absolute top-0 left-0 w-full h-1.5 ${metric.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

          <div className="relative z-10">
            <div className="mb-8">
               <div className={`w-12 h-12 rounded-2xl ${metric.bgColor}/10 flex items-center justify-center p-2.5 ${metric.color}`}>
                <metric.Icon />
              </div>
            </div>

            <h3 className="text-[32px] md:text-[44px] font-bold text-ap-dark-blue mb-6 tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">
              {metric.heading}
            </h3>
          </div>

          <div className="mt-auto relative z-10">
            <h4 className="text-xl font-medium text-slate-500 leading-snug group-hover:text-slate-900 transition-colors duration-500">
              {metric.subhead}
            </h4>
          </div>

          {/* Hover Glow */}
          <div className={`absolute -left-20 -bottom-20 w-60 h-60 rounded-full ${metric.bgColor}/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
        </div>
      ))}
    </div>
  );
};
