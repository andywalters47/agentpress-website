import interviewer from '../../_assets/employee-interview.png';

/** Match the interview asset's actual canvas and offset panel, including its
 * unchanged gradient border. The opaque panel replaces all interview UI. */
export function RoadmapReportArt() {
  return <div className="hp-roadmap-report-art">
    <svg viewBox="0 0 1276 1233" role="img" aria-label="Invoice approval workflow: receive an invoice, match the purchase order, and request approval">
      <defs>
        <pattern id="hp-workflow-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1.5" fill="#dddcd6" />
        </pattern>
      </defs>
      <image href={interviewer.src} x="0" y="0" width="1276" height="1233" />
      <rect data-process-art-panel="" x="100" y="100" width="1276" height="1033" rx="40" fill="#fff" />
      <image href="/assets/AP_landscape_for_light_bg.svg" x="136" y="136" width="285" height="54" />
      <text x="1200" y="174" textAnchor="end" fontFamily="var(--font-body)" fontSize="30" fill="var(--ink-body)">Invoice approval</text>
      <path d="M100 244H1376" stroke="var(--hairline)" strokeWidth="2" />
      <rect x="116" y="260" width="1144" height="856" fill="url(#hp-workflow-grid)" />
      <path d="M688 490V598M688 762V870" fill="none" stroke="var(--raw-teal-700)" strokeWidth="6" />
      <path d="m676 578 12 14 12-14m-24 272 12 14 12-14" fill="none" stroke="var(--raw-teal-700)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {[
        { y: 326, label: 'Receive invoice', icon: 'mail' },
        { y: 598, label: 'Match purchase order', icon: 'document' },
        { y: 870, label: 'Request approval', icon: 'check' },
      ].map(step => <g key={step.icon}>
        <rect x="256" y={step.y} width="864" height="164" rx="24" fill="#fff" stroke="#d3d8d1" strokeWidth="3" />
        <rect x="288" y={step.y + 34} width="96" height="96" rx="24" fill="#e2f3e9" />
        <g transform={`translate(312 ${step.y + 58}) scale(2)`} fill="none" stroke="var(--raw-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {step.icon === 'mail' ? <><rect x="1" y="3" width="22" height="18" rx="3" /><path d="m2 5 10 8L22 5" /></> :
            step.icon === 'document' ? <><path d="M6 1h9l5 5v17H4V1zM14 1v6h6M8 12h8M8 17h8" /></> :
              <><circle cx="12" cy="12" r="10" /><path d="m7 12 3 3 7-7" /></>}
        </g>
        <text x="424" y={step.y + 100} fontFamily="var(--font-body)" fontSize="48" fontWeight="500" fill="var(--ink)">{step.label}</text>
      </g>)}
    </svg>
  </div>;
}
