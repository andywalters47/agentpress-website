import { permanentRedirect } from 'next/navigation';

// Pricing is retired. Preserve old inbound links without serving stale offers.
export default function PricingPage() {
  permanentRedirect('/');
}
