import Image from 'next/image';

export default function OgPreview() {
  return (
    <div className="fixed inset-0 z-[999] bg-white flex items-center justify-center overflow-hidden">
      <div className="text-center max-w-6xl mx-auto px-8">
        <h1
          className="font-bold tracking-tight text-[#0a0e28] mb-24"
          style={{ fontSize: '5.625rem', lineHeight: 1.1 }}
        >
          Win Bigger Deals Without Manually Building Business Cases
        </h1>
        <div className="flex justify-center">
          <Image
            src="/AP_landscape.png"
            alt="AgentPress"
            width={1402}
            height={260}
            className="h-auto"
            style={{ width: '60%' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
