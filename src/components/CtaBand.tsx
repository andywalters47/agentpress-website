import Link from 'next/link';

export function CtaBand({
  heading = 'See it run on your own pipeline',
  buttonLabel = 'Book a Demo',
}: {
  heading?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="cta-band">
      <h2>{heading}</h2>
      <Link className="button button-mint" href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">
        {buttonLabel}
      </Link>
    </section>
  );
}
