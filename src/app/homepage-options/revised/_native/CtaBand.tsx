import Link from 'next/link';

export function CtaBand({
  heading = 'Put AI to work in your business',
  buttonLabel = 'Book a Free Consultation',
  href = 'https://calendar.app.google/AwUNqYVrSpUf1XeK8',
}: {
  heading?: string;
  buttonLabel?: string;
  href?: string;
}) {
  const external = href.startsWith('http');

  return (
    <section className="cta-band">
      <h2>{heading}</h2>
      <Link className="button button-mint" href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {buttonLabel}
      </Link>
    </section>
  );
}
