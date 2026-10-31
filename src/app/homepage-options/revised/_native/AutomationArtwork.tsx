import type { ReactNode } from 'react';

// Static marketing artwork, not interactive app controls. Paths are the Tabler
// outlines used by ApIcon. Treatments follow ApBadge, ApButton and ApCard.
function Glyph({ x, y, children, size = 24 }: { x: number; y: number; children: ReactNode; size?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${size / 24})`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{children}</g>;
}

const mail = <><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" /><path d="M3 7l9 6l9 -6" /></>;
const document = <path d="M14 3v4a1 1 0 0 0 1 1h4M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2M9 9l1 0M9 13l6 0M9 17l6 0" />;
const system = <path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4" />;
const person = <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />;
const flag = <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9M5 21v-7" />;
const check = <path d="M5 12l5 5l10 -10" />;

function Caption({ x, y, children, anchor = 'start', muted = false }: { x: number; y: number; children: ReactNode; anchor?: 'start' | 'middle'; muted?: boolean }) {
  return <text x={x} y={y} textAnchor={anchor} className={muted ? 'ap-art-meta' : 'ap-art-label'}>{children}</text>;
}

function Success({ x, y, label, width }: { x: number; y: number; label: string; width: number }) {
  return <g className="ap-art-success">
    <rect x={x} y={y} width={width} height="24" rx="6" />
    <Glyph x={x + 6} y={y + 5} size={14}>{check}</Glyph>
    <text x={x + 25} y={y + 16} className="ap-art-status-label">{label}</text>
  </g>;
}

function Arrow({ d }: { d: string }) {
  return <path d={d} className="ap-art-connector" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />;
}

function Conversations() {
  return <>
    <rect x="35" y="0" width="236" height="44" rx="12" className="ap-art-panel" />
    <Glyph x={49} y={10}>{mail}</Glyph>
    <Caption x={85} y={27}>Can you help with this?</Caption>
    <path d="M62 44v12h23" className="ap-art-connector" fill="none" />
    <rect x="85" y="61" width="240" height="44" rx="12" className="ap-art-panel" />
    <Glyph x={99} y={71}>{mail}</Glyph>
    <Caption x={135} y={88}>All taken care of.</Caption>
    <Success x={126} y={126} width={108} label="Resolved" />
  </>;
}

function CompletedWork() {
  return <>
    <rect x="28" y="0" width="68" height="56" rx="12" className="ap-art-panel" />
    <Glyph x={48} y={14} size={28}>{mail}</Glyph>
    <rect x="28" y="84" width="68" height="56" rx="12" className="ap-art-panel" />
    <Glyph x={48} y={98} size={28}>{document}</Glyph>
    <Arrow d="M98 28h39v42h48m-4-4 4 4-4 4M98 112h39V70" />
    <rect x="197" y="40" width="135" height="60" rx="12" className="ap-art-panel" />
    <g className="ap-art-check"><Glyph x={212} y={58}>{check}</Glyph></g>
    <Caption x={247} y={76}>Task done</Caption>
  </>;
}

function ConnectedSystems() {
  return <>
    <Arrow d="M108 40h32M220 40h32" />
    {[{ x: 28, glyph: mail, label: 'Email' }, { x: 140, glyph: document, label: 'Documents' }, { x: 252, glyph: system, label: 'Systems' }].map(({ x, glyph, label }) => <g key={label}>
      <rect x={x} y="0" width="80" height="80" rx="12" className="ap-art-panel" />
      <Glyph x={x + 24} y={24} size={32}>{glyph}</Glyph>
      <circle cx={x + 68} cy="12" r="10" className="ap-art-check-ground" />
      <g className="ap-art-check"><Glyph x={x + 61} y={5} size={14}>{check}</Glyph></g>
      <Caption x={x + 40} y={107} anchor="middle" muted>{label}</Caption>
    </g>)}
  </>;
}

function BusinessRules() {
  return <>
    <rect x="28" y="31" width="95" height="54" rx="12" className="ap-art-panel" />
    <Caption x={75.5} y={63} anchor="middle">Request</Caption>
    <Arrow d="M125 58h35m-4-4 4 4-4 4" />
    <rect x="173" y="0" width="159" height="116" rx="12" className="ap-art-panel" />
    <Caption x={190} y={27}>Your rules</Caption>
    {[48, 72, 96].map(y => <g key={y}>
      <g className="ap-art-check"><Glyph x={190} y={y - 10} size={14}>{check}</Glyph></g>
      <path d={`M214 ${y - 3}h${y === 72 ? 64 : 88}`} className="ap-art-placeholder" />
    </g>)}
  </>;
}

function ProcessFlow() {
  return <>
    <Arrow d="M78 26h35M163 26h35M248 26h34" />
    {[28, 113, 198, 282].map((x, index) => <g key={x} className={`ap-art-step ap-art-step--${index + 1}`}>
      <rect x={x} y="0" width="50" height="52" rx="12" />
      <Glyph x={x + 13} y={14}>{check}</Glyph>
    </g>)}
    <g className="ap-art-process-result"><Success x={126} y={84} width={108} label="Complete" /></g>
  </>;
}

function HumanJudgment() {
  return <>
    <image href="/assets/AP_icon_circle.svg" x="28" y="4" width="52" height="52" />
    <Arrow d="M85 30h27m-4-4 4 4-4 4M225 30h30m-4-4 4 4-4 4" />
    <rect x="123" y="0" width="92" height="60" rx="12" className="ap-art-panel" />
    <g className="ap-art-flag"><Glyph x={156} y={17} size={26}>{flag}</Glyph></g>
    <rect x="270" y="0" width="62" height="60" rx="12" className="ap-art-panel" />
    <Glyph x={287} y={16} size={28}>{person}</Glyph>
    <Caption x={54} y={82} anchor="middle" muted>Agent</Caption>
    <Caption x={301} y={82} anchor="middle" muted>You</Caption>
    <rect x="91" y="109" width="84" height="32" rx="8" className="ap-art-control" />
    <rect x="185" y="109" width="84" height="32" rx="8" className="ap-art-control" />
    <text x="133" y="129" textAnchor="middle" className="ap-art-control-label">Approve</text>
    <text x="227" y="129" textAnchor="middle" className="ap-art-control-label">Review</text>
  </>;
}

export const workflowArtwork = [
  { Illustration: Conversations, height: 150 },
  { Illustration: CompletedWork, height: 140 },
  { Illustration: ConnectedSystems, height: 110 },
  { Illustration: BusinessRules, height: 116 },
  { Illustration: ProcessFlow, height: 108 },
  { Illustration: HumanJudgment, height: 141 },
];

function BuiltAroundBusiness({ compact = false }: { compact?: boolean }) {
  if (compact) return <>
    <Arrow d="M122 200h82V98h45M204 200h45M204 200v102h45" />
    <image href="/assets/AP_icon_circle.svg" x="52" y="165" width="70" height="70" />
    {[{ y: 66, glyph: mail, label: 'Email' }, { y: 168, glyph: document, label: 'Documents' }, { y: 270, glyph: system, label: 'Internal systems' }].map(({ y, glyph, label }) => <g key={label}>
      <rect x="253" y={y} width="64" height="64" rx="12" className="ap-art-panel" />
      <Glyph x={269} y={y + 16} size={32}>{glyph}</Glyph>
      <text x="285" y={y + 85} textAnchor="middle" className="ap-feature-art-label">{label}</text>
    </g>)}
  </>;
  return <>
    <Arrow d="M234 320h90V170h85M324 320h85M324 320v150h85" />
    <image href="/assets/AP_icon_circle.svg" x="120" y="263" width="114" height="114" />
    {[{ y: 130, glyph: mail, label: 'Email' }, { y: 280, glyph: document, label: 'Documents' }, { y: 430, glyph: system, label: 'Internal systems' }].map(({ y, glyph, label }) => <g key={label}>
      <rect x="420" y={y} width="80" height="80" rx="12" className="ap-art-panel" />
      <Glyph x={440} y={y + 20} size={40}>{glyph}</Glyph>
      <text x="460" y={y + 108} textAnchor="middle" className="ap-feature-art-label">{label}</text>
    </g>)}
  </>;
}

function Visibility({ compact = false }: { compact?: boolean }) {
  if (compact) return <>
    <rect x="22" y="62" width="356" height="276" rx="16" className="ap-art-panel" />
    <text x="42" y="98" className="ap-feature-art-heading">Agent activity</text>
    <path d="M22 118h356M42 190h316M42 254h316" className="ap-art-divider" />
    {[{ y: 143, label: 'Workflow completed' }, { y: 207, label: 'Systems updated' }, { y: 271, label: 'Decision flagged' }].map(({ y, label }, index) => <g key={label}>
      <text x="42" y={y + 17} className="ap-feature-art-label ap-feature-art-row-label">{label}</text>
      {index < 2 ? <Success x={231} y={y} width={125} label="Completed" /> : <g className="ap-art-pending">
        <rect x="196" y={y} width="160" height="24" rx="6" />
        <circle cx="208" cy={y + 12} r="3" />
        <text x="219" y={y + 16} className="ap-art-status-label">Awaiting approval</text>
      </g>}
    </g>)}
  </>;
  return <>
    <rect x="62" y="167" width="516" height="306" rx="16" className="ap-art-panel" />
    <text x="90" y="212" className="ap-feature-art-heading">Agent activity</text>
    <path d="M62 233h516M90 308h460M90 379h460" className="ap-art-divider" />
    {[{ y: 262, label: 'Workflow completed', status: 'Completed' }, { y: 333, label: 'Systems updated', status: 'Completed' }, { y: 404, label: 'Decision flagged', status: 'Awaiting approval' }].map(({ y, label, status }, index) => <g key={label}>
      <text x="90" y={y + 19} className="ap-feature-art-label">{label}</text>
      {index < 2 ? <Success x={425} y={y} width={125} label={status} /> : <g className="ap-art-pending">
        <rect x="390" y={y} width="160" height="24" rx="6" />
        <circle cx="402" cy={y + 12} r="3" />
        <text x="413" y={y + 16} className="ap-art-status-label">{status}</text>
      </g>}
    </g>)}
  </>;
}

function Capacity({ compact = false }: { compact?: boolean }) {
  if (compact) return <>
    <rect x="22" y="62" width="356" height="276" rx="16" className="ap-art-panel" />
    <path d="M48 112v186h306M48 166h306M48 211h306M48 254h306" className="ap-art-divider" fill="none" />
    <path d="M48 252C99 252 124 226 156 210S218 169 250 148S294 127 332 114" className="ap-art-growth-line" fill="none" strokeWidth="3" strokeLinecap="round" />
    <text x="130" y="123" className="ap-feature-art-label ap-art-growth-label">Work completed</text>
    <path d="M48 275h284" className="ap-art-team-line" strokeWidth="2" strokeLinecap="round" />
    <text x="241" y="259" className="ap-feature-art-label ap-art-meta">Team size</text>
  </>;
  return <>
    <rect x="62" y="142" width="516" height="356" rx="16" className="ap-art-panel" />
    <path d="M100 195v260h438M100 251h438M100 319h438M100 387h438" className="ap-art-divider" fill="none" />
    <path d="M100 386C170 386 185 363 229 340S302 296 350 260S419 217 476 198" className="ap-art-growth-line" fill="none" strokeWidth="3" strokeLinecap="round" />
    <text x="307" y="185" className="ap-feature-art-label ap-art-growth-label">Work completed</text>
    <path d="M100 425h376" className="ap-art-team-line" strokeWidth="2" strokeLinecap="round" />
    <text x="375" y="411" className="ap-feature-art-label ap-art-meta">Team size</text>
  </>;
}

const featureArtwork = [
  { Illustration: BuiltAroundBusiness, label: 'AgentPress connected to email, documents, and your internal systems.' },
  { Illustration: Visibility, label: 'An activity log with two Completed actions and one Awaiting approval.' },
  { Illustration: Capacity, label: 'Work completed rises while team size remains flat. Illustrative, not measured customer results.' },
];

export function AutomationFeatureArt({ step }: { step: number }) {
  const { Illustration, label } = featureArtwork[step];
  return <>
    <svg className="ap-business-illustration ap-business-illustration--large" viewBox="0 0 640 640" role="img" aria-label={label}><title>{label}</title><Illustration /></svg>
    <svg className="ap-business-illustration ap-business-illustration--compact" viewBox="0 0 400 400" role="img" aria-label={label}><title>{label}</title><Illustration compact /></svg>
  </>;
}
