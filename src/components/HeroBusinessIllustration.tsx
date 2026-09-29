import type { ReactNode } from 'react';
import './HeroBusinessIllustration.css';

// Non-interactive marketing artwork. Tabler outlines and existing ApCard /
// ApButton treatments, composed locally rather than creating app primitives.
function ContextGlyph({ children }: { children: ReactNode }) {
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="60" height="60" rx="18" className="ap-hero-context-icon-ground" />
    <g transform="translate(11 11) scale(1.75)">{children}</g>
  </svg>;
}

export function HeroBusinessIllustration() {
  return <div className="ap-business-hero-art" role="img" aria-label="AgentPress reviews your business context, checks your rules, and completes approved work. A separate request is held for your approval before proceeding.">
    <div className="ap-business-hero-stack" aria-hidden="true">
      <div className="ap-hero-context">
        <div className="ap-hero-context-mini"><ContextGlyph><path d="M14 3v4a1 1 0 0 0 1 1h4M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2M9 13h6M9 17h6" /></ContextGlyph><span>Documents</span></div>
        <div className="ap-hero-context-mini"><ContextGlyph><path d="M8 9h8M8 13h6M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-6l-5 3v-3h-1a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" /></ContextGlyph><span>Conversations</span></div>
        <div className="ap-hero-context-mini"><ContextGlyph><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 17h7M17.5 14v7" /></ContextGlyph><span>Connected systems</span></div>
      </div>

      <div className="ap-hero-work ap-hero-ui-card">
        <div className="ap-hero-work-heading">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/AP_icon_circle.svg" width="36" height="36" alt="" />
          <div className="ap-hero-ui-title">AgentPress is working...</div>
        </div>
        <ul className="ap-hero-activity">
          {['Context reviewed', 'Business rules checked', 'Systems updated'].map((label, index) => <li key={label}>
            <span>{label}</span>
            <span className={`ap-hero-completion ap-hero-completion--${index + 1}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
          </li>)}
        </ul>
      </div>

      <div className="ap-hero-approval ap-hero-ui-card">
        <div className="ap-hero-ui-title">Your approval needed</div>
        <div className="ap-hero-approval-controls"><span>Approve</span><span>Review</span></div>
      </div>
    </div>
  </div>;
}
