'use client';

import React from 'react';
import Image from 'next/image';

const integrations = [
  { name: 'Salesforce', logo: '/logos/salesforce_logomark.png', color: '#00A1E0' },
  { name: 'HubSpot', logo: '/logos/hubspot_logomark.png', color: '#FF7A59' },
  { name: 'Gong', logo: '/logos/gong_logomark.png', color: '#E81066' },
];

export const Integrations = () => {
  return (
    <div className="py-24 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ap-dark-blue leading-tight mb-6">
              Fits into your existing tech stack
            </h2>
            <p className="text-slate-500 text-lg mb-8 max-w-xl">
              AgentPress integrates directly with your CRM and revenue intelligence tools to automate data entry and keep your revenue model grounded in real-time reality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {integrations.map((item) => (
                <div key={item.name} className="flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl">
                  <div className="relative w-6 h-6 shrink-0">
                    <Image
                      src={item.logo}
                      alt={`${item.name} logomark`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-ap-dark-blue">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual Representation of Integrations */}
            <div className="relative aspect-video rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden shadow-sm flex items-center justify-center p-12">
               {/* Central AgentPress Logo/Icon Placeholder */}
               <div className="relative z-10 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 p-2">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/AP_icon_circle.png" 
                      alt="AgentPress Logo" 
                      fill 
                      className="object-contain rounded-2xl" 
                    />
                  </div>
               </div>

               {/* Connection Lines */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[1px] bg-linear-to-r from-transparent via-slate-200 to-transparent rotate-[30deg]" />
                  <div className="w-[85%] h-[1px] bg-linear-to-r from-transparent via-slate-200 to-transparent -rotate-[30deg]" />
                  <div className="w-[85%] h-[1px] bg-linear-to-r from-transparent via-slate-200 to-transparent rotate-90" />
               </div>

               {/* Orbital Logos */}
               <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-3">
                  <div className="relative w-full h-full">
                    <Image src="/logos/salesforce_logomark.png" alt="Salesforce" fill className="object-contain" />
                  </div>
               </div>
               <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-3">
                  <div className="relative w-full h-full">
                    <Image src="/logos/hubspot_logomark.png" alt="HubSpot" fill className="object-contain" />
                  </div>
               </div>
               <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center p-3">
                  <div className="relative w-full h-full">
                    <Image src="/logos/gong_logomark.png" alt="Gong" fill className="object-contain" />
                  </div>
               </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-ap-blue/5 blur-[100px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-ap-teal/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
