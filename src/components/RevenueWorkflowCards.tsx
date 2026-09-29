import type { ReactNode } from 'react';

const workflows = [
  {
    title: 'Collect documents and complete paperwork to onboard clients faster.',
    description: 'Documents arrive, the onboarding checklist completes, and a green Ready to activate badge appears.',
  },
  {
    title: 'Turn incoming quote requests into proposals ready for approval.',
    description: 'An incoming quote email becomes a proposal with line items, pricing, and an Approve quote button.',
  },
  {
    title: 'Complete customer requests across your systems and send the reply.',
    description: 'A billing address request updates two account records, followed by a confirmation reply.',
  },
  {
    title: 'Gather renewal documents and follow up on missing information.',
    description: 'A renewal folder has three received documents, one missing document, and a follow-up email.',
  },
  {
    title: 'Resolve missing billing details so invoices go out sooner.',
    description: 'An invoice missing a purchase order receives the matching PO and becomes Ready to send.',
  },
  {
    title: 'Follow up on unpaid invoices and route disputes for resolution.',
    description: 'An overdue invoice branches into Reminder sent and Dispute assigned, with a customer reply attached to the dispute.',
  },
];

function Icon({ kind, x, y, size = 18 }: { kind: 'document' | 'mail' | 'check' | 'folder' | 'account'; x: number; y: number; size?: number }) {
  const paths = {
    document: <><path d="M6 3h8l4 4v14H6zM14 3v5h4" /><path d="M9 12h6M9 16h6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    folder: <path d="M3 7V5a2 2 0 0 1 2-2h5l3 3h6a2 2 0 0 1 2 2v11H3z" />,
    account: <><rect x="4" y="3" width="16" height="18" rx="3" /><circle cx="12" cy="9" r="2.5" /><path d="M8 17a4 4 0 0 1 8 0" /></>,
  };
  return <g transform={`translate(${x} ${y}) scale(${size / 24})`} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[kind]}</g>;
}

function Label({ x, y, children, muted = false, size = 12, bold = false }: { x: number; y: number; children: ReactNode; muted?: boolean; size?: number; bold?: boolean }) {
  return <text x={x} y={y} className={muted ? 'ap-workflow-muted' : 'ap-workflow-ink'} fontSize={size} fontWeight={bold ? 600 : 400}>{children}</text>;
}

function Panel({ x = 28, y, width = 304, height, children }: { x?: number; y: number; width?: number; height: number; children?: ReactNode }) {
  return <g><rect x={x} y={y} width={width} height={height} rx="10" className="ap-workflow-panel" />{children}</g>;
}

function Badge({ x, y, width, children, tone = 'positive' }: { x: number; y: number; width: number; children: ReactNode; tone?: 'positive' | 'warning' | 'purple' }) {
  return <g className={`ap-workflow-badge ap-workflow-badge--${tone}`}><rect x={x} y={y} width={width} height="27" rx="13.5" /><circle cx={x + 12} cy={y + 13.5} r="2.5" /><text x={x + 23} y={y + 17.5} fontSize="11.5" fontWeight="500">{children}</text></g>;
}

function Connector({ x = 180, y, height = 17 }: { x?: number; y: number; height?: number }) {
  return <path d={`M${x} ${y}v${height}m-3-3 3 3 3-3`} className="ap-workflow-connector" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />;
}

function DocumentRow({ y, label, received = true }: { y: number; label: string; received?: boolean }) {
  return <g>
    <g className={received ? 'ap-workflow-positive' : 'ap-workflow-muted'}><circle cx="49" cy={y - 4} r="7" className={received ? 'ap-workflow-check-bg' : 'ap-workflow-empty-check'} />{received && <Icon kind="check" x={42} y={y - 11} size={14} />}</g>
    <Label x={66} y={y} muted={!received}>{label}</Label>
    {!received && <Label x={274} y={y} muted size={10}>Missing</Label>}
  </g>;
}

function Onboarding() {
  return <>
    <Panel y={122} height={122}>
      <Label x={44} y={146} bold>Onboarding checklist</Label>
      <DocumentRow y={174} label="Agreement" />
      <DocumentRow y={200} label="Client details" />
      <DocumentRow y={226} label="Paperwork" />
    </Panel>
    <Connector y={246} height={13} />
    <Badge x={101} y={267} width={158}>Ready to activate</Badge>
  </>;
}

function Quotes() {
  return <>
    <Panel y={118} height={35}>
      <g className="ap-workflow-muted"><Icon kind="mail" x={44} y={126} /></g>
      <Label x={71} y={141}>Quote request</Label>
    </Panel>
    <Connector y={155} height={12} />
    <Panel y={176} height={118}>
      <Label x={44} y={199} bold>Proposal</Label>
      <Label x={44} y={222}>25 licenses</Label><Label x={274} y={222}>$2,500</Label>
      <Label x={44} y={243}>Setup</Label><Label x={287} y={243}>$500</Label>
      <rect x="44" y="259" width="272" height="25" rx="6" className="ap-workflow-button" />
      <text x="180" y="276" textAnchor="middle" fontSize="12" fontWeight="500" className="ap-workflow-button-label">Approve quote</text>
    </Panel>
  </>;
}

function CustomerRequests() {
  return <>
    <Panel y={118} height={38}>
      <g className="ap-workflow-muted"><Icon kind="mail" x={44} y={128} /></g>
      <Label x={69} y={142} size={11.5}>“Please update our billing address”</Label>
    </Panel>
    <path d="M180 158v13H101v12m79-12h79v12" className="ap-workflow-connector" fill="none" strokeWidth="1.25" />
    {[{ x: 28, label: 'CRM account' }, { x: 187, label: 'Billing account' }].map(({ x, label }) => <Panel key={label} x={x} y={187} width={145} height={57}>
      <Label x={x + 14} y={208}>{label}</Label>
      <Badge x={x + 14} y={216} width={98}>Updated</Badge>
    </Panel>)}
    <path d="M101 246v10h158v-10M180 256v10" className="ap-workflow-connector" fill="none" strokeWidth="1.25" />
    <Panel y={272} height={32}>
      <g className="ap-workflow-muted"><Icon kind="mail" x={44} y={279} /></g>
      <Label x={71} y={292}>Address updated. Reply sent.</Label>
    </Panel>
  </>;
}

function Renewals() {
  return <>
    <Panel y={118} height={128}>
      <g className="ap-workflow-muted"><Icon kind="folder" x={44} y={131} /></g>
      <Label x={70} y={145} bold>Renewal documents</Label>
      <DocumentRow y={169} label="Agreement" />
      <DocumentRow y={191} label="Insurance" />
      <DocumentRow y={213} label="Company details" />
      <DocumentRow y={235} label="Purchase order" received={false} />
    </Panel>
    <Connector y={249} height={10} />
    <Panel y={268} height={30}>
      <g className="ap-workflow-muted"><Icon kind="mail" x={44} y={274} /></g>
      <Label x={71} y={288}>Just following up…</Label>
    </Panel>
  </>;
}

function BillingDetails() {
  return <>
    <Panel y={118} height={62}>
      <Label x={44} y={140} bold>Invoice</Label>
      <Badge x={44} y={148} width={188} tone="warning">Missing purchase order</Badge>
    </Panel>
    <Connector y={182} height={13} />
    <Panel y={203} height={35}>
      <g className="ap-workflow-muted"><Icon kind="document" x={44} y={211} /></g>
      <Label x={71} y={226}>Matching PO attached</Label>
      <g className="ap-workflow-positive"><Icon kind="check" x={299} y={211} /></g>
    </Panel>
    <Connector y={241} height={15} />
    <Badge x={116} y={267} width={128}>Ready to send</Badge>
  </>;
}

function Collections() {
  return <>
    <Panel y={126} height={45}>
      <Label x={44} y={154} bold>Invoice</Label>
      <Badge x={218} y={135} width={98} tone="warning">Overdue</Badge>
    </Panel>
    <path d="M180 173v18H98v13m82-13h79v13" className="ap-workflow-connector" fill="none" strokeWidth="1.25" />
    <Badge x={28} y={210} width={139}>Reminder sent</Badge>
    <Badge x={186} y={210} width={146} tone="purple">Dispute assigned</Badge>
    <Connector x={259} y={240} height={11} />
    <Panel x={170} y={258} width={162} height={43}>
      <Label x={182} y={277} size={11}>“Amount looks wrong.”</Label>
      <Label x={182} y={292} size={10} muted>Customer reply attached</Label>
    </Panel>
  </>;
}

const illustrations = [Onboarding, Quotes, CustomerRequests, Renewals, BillingDetails, Collections];

function titleLines(title: string) {
  const lines: string[] = [];
  for (const word of title.split(' ')) {
    const previous = lines.at(-1);
    if (previous && `${previous} ${word}`.length <= 36) lines[lines.length - 1] += ` ${word}`;
    else lines.push(word);
  }
  return lines;
}

export function RevenueWorkflowCards() {
  return workflows.map((workflow, index) => {
    const Illustration = illustrations[index];
    return <div className="ap-timeline-card-anchor ap-revenue-card-anchor" style={{ zIndex: 19 - index }} key={workflow.title}>
      <svg className="ap-timeline-flight-card ap-revenue-card" viewBox="0 0 360 320" role="img" aria-label={`${workflow.title} ${workflow.description}`} style={{ transform: `translate3d(${-50 - index * 0.8}vw, 0, 0) perspective(1500px) rotateX(5.25deg) rotateY(-15deg) skewY(-10deg) scale(0.96)` }}>
        <title>{workflow.title}</title>
        <desc>{workflow.description}</desc>
        <rect x="1" y="1" width="358" height="318" rx="20" className="ap-workflow-frame" />
        <text x="28" y="41" className="ap-workflow-title" fontSize="16" fontWeight="600">{titleLines(workflow.title).map((line, i) => <tspan key={line} x="28" dy={i === 0 ? 0 : 20}>{line}</tspan>)}</text>
        <Illustration />
      </svg>
    </div>;
  });
}
