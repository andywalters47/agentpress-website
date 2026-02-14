import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image 
                src="/AP_landscape.png" 
                alt="AgentPress Logo" 
                width={140} 
                height={35} 
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer">
                  Product
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link href="/customers" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Customers
              </Link>
              <div className="relative group">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer">
                  Resources
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
              Log in
            </Link>
            <Link href="/demo" className="btn-secondary py-2 text-sm hidden lg:block">
              Request Demo
            </Link>
            <Link href="/signup" className="btn-primary py-2 text-sm bg-ap-dark-blue hover:bg-black">
              Start for Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
