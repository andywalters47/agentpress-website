import Image from 'next/image';

const logos = [
  { name: 'Anaconda', src: '/logos/anaconda.png', width: 160, height: 44, extraClass: 'brightness-50 contrast-125' },
  { name: 'HiveMQ', src: '/logos/hivemq.png', width: 110, height: 32 },
  { name: 'Local Falcon', src: '/logos/localfalcon.png', width: 110, height: 32, extraClass: 'brightness-50 contrast-125' },
  { name: 'Advanse.io', src: '/logos/advanse.svg', width: 100, height: 28 },
];

export const SocialProofLogos = () => {
  return (
    <div className="w-full pt-4 pb-20 bg-linear-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-ap-blue/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-ap-teal/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="section-container !py-0 relative z-10">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-6">
          Trusted by SaaS Companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8 opacity-80 transition-all duration-500 max-w-4xl mx-auto">
          {logos.map((logo) => (
            <div 
              key={logo.name} 
              className={`relative h-8 sm:h-10 w-32 sm:w-36 md:w-40 flex items-center justify-center grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500 ${logo.extraClass || ''}`}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
