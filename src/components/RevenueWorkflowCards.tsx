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

function Icon({ kind, x, y, size = 16 }: { kind: 'document' | 'mail' | 'check' | 'folder' | 'arrow' | 'account'; x: number; y: number; size?: number }) {
  const paths = {
    document: <><path d="M6 3h8l4 4v14H6zM14 3v5h4" /><path d="M9 12h6M9 16h6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    folder: <path d="M3 7V5a2 2 0 0 1 2-2h5l3 3h6a2 2 0 0 1 2 2v11H3z" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    account: <><rect x="4" y="3" width="16" height="18" rx="3" /><circle cx="12" cy="9" r="2.5" /><path d="M8 17a4 4 0 0 1 8 0" /></>,
  };
  return <g transform={`translate(${x} ${y}) scale(${size / 24})`} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[kind]}</g>;
}

function Label({ x, y, children, muted = false, size = 10.5, bold = false }: { x: number; y: number; children: ReactNode; muted?: boolean; size?: number; bold?: boolean }) {
  return <text x={x} y={y} className={muted ? 'ap-workflow-muted' : 'ap-workflow-ink'} fontSize={size} fontWeight={bold ? 600 : 400}>{children}</text>;
}

function Panel({ x = 25, y, width = 310, height, children, accent = false }: { x?: number; y: number; width?: number; height: number; children?: ReactNode; accent?: boolean }) {
  return <g><rect x={x} y={y} width={width} height={height} rx="10" className={accent ? 'ap-workflow-panel ap-workflow-panel--accent' : 'ap-workflow-panel'} />{children}</g>;
}

function Badge({ x, y, width, children, tone = 'positive' }: { x: number; y: number; width: number; children: ReactNode; tone?: 'positive' | 'neutral' | 'warning' | 'purple' }) {
  return <g className={`ap-workflow-badge ap-workflow-badge--${tone}`}><rect x={x} y={y} width={width} height="23" rx="11.5" /><circle cx={x + 11} cy={y + 11.5} r="2.5" /><text x={x + 20} y={y + 15} fontSize="10" fontWeight="500">{children}</text></g>;
}

function Connector({ x = 180, y, height = 17 }: { x?: number; y: number; height?: number }) {
  return <path d={`M${x} ${y}v${height}m-3-3 3 3 3-3`} className="ap-workflow-connector" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />;
}

function DocumentRow({ y, label, received = true }: { y: number; label: string; received?: boolean }) {
  return <g>
    <g className={received ? 'ap-workflow-positive' : 'ap-workflow-muted'}><circle cx="49" cy={y - 3} r="7" className={received ? 'ap-workflow-check-bg' : 'ap-workflow-empty-check'} />{received && <Icon kind="check" x={43} y={y - 9} size={12} />}</g>
    <Label x={64} y={y}>{label}</Label>
    <Label x={271} y={y} muted size={9}>{received ? 'Received' : 'Missing'}</Label>
  </g>;
}

function Onboarding() {
  return <>
    <Panel y={93} height={33} accent><g className="ap-workflow-purple"><Icon kind="document" x={37} y={101} /></g><Label x={61} y={114}>Signed agreement received</Label><g className="ap-workflow-positive"><Icon kind="check" x={305} y={101} /></g></Panel>
    <Connector y={128} />
    <Panel y={150} height={106}>
      <Label x={39} y={170} bold>Client onboarding</Label><Label x={284} y={170} muted size={9}>4 / 4</Label>
      <path d="M39 180h281" className="ap-workflow-rule" />
      <DocumentRow y={195} label="Signed agreement" /><DocumentRow y={213} label="Company documents" /><DocumentRow y={231} label="Billing details" /><DocumentRow y={249} label="Activation paperwork" />
    </Panel>
    <Connector y={257} height={10} /><Badge x={111} y={274} width={138}>Ready to activate</Badge>
  </>;
}

function Quotes() {
  return <>
    <Panel y={93} height={44}><g className="ap-workflow-purple"><Icon kind="mail" x={38} y={104} /></g><Label x={63} y={110} muted size={9}>New quote request</Label><Label x={63} y={125}>“Can you quote 25 licenses?”</Label></Panel>
    <Connector y={140} height={12} />
    <Panel y={159} height={143}>
      <Label x={40} y={180} bold>Proposal #1042</Label><Label x={263} y={180} muted size={9}>Draft ready</Label>
      <path d="M40 190h280M40 236h280" className="ap-workflow-rule" />
      <Label x={40} y={205} muted size={9}>ITEM</Label><Label x={230} y={205} muted size={9}>QTY</Label><Label x={281} y={205} muted size={9}>PRICE</Label>
      <Label x={40} y={224}>Platform licenses</Label><Label x={236} y={224}>25</Label><Label x={277} y={224}>$2,500</Label>
      <Label x={40} y={253} bold>Total</Label><Label x={277} y={253} bold>$2,500</Label>
      <rect x="40" y="268" width="280" height="23" rx="6" className="ap-workflow-button" /><text x="180" y="283" textAnchor="middle" fontSize="10" fontWeight="500" className="ap-workflow-button-label">Approve quote</text>
    </Panel>
  </>;
}

function CustomerRequests() {
  return <>
    <Panel y={93} height={46}><g className="ap-workflow-purple"><Icon kind="mail" x={38} y={105} /></g><Label x={62} y={110} muted size={9}>Customer request</Label><Label x={62} y={127}>“Please update our billing address”</Label></Panel>
    <path d="M180 140v15H100v13m80-13h80v13" className="ap-workflow-connector" fill="none" strokeWidth="1.25" />
    {[{ x: 25, label: 'CRM account' }, { x: 185, label: 'Billing account' }].map(({ x, label }) => <Panel key={label} x={x} y={172} width={150} height={72}><g className="ap-workflow-muted"><Icon kind="account" x={x + 11} y={183} /></g><Label x={x + 32} y={195} size={10}>{label}</Label><Badge x={x + 12} y={207} width={87}>Updated</Badge></Panel>)}
    <path d="M100 245v12h160v-12M180 257v10" className="ap-workflow-connector" fill="none" strokeWidth="1.25" />
    <Panel y={271} height={33} accent><g className="ap-workflow-purple"><Icon kind="mail" x={38} y={279} /></g><Label x={62} y={285} size={10}>“Your billing address is updated.”</Label><Label x={62} y={297} size={8.5} muted>Confirmation sent</Label></Panel>
  </>;
}

function Renewals() {
  return <>
    <Panel y={93} height={134}>
      <g className="ap-workflow-purple"><Icon kind="folder" x={39} y={105} /></g><Label x={64} y={118} bold>Renewal documents</Label><Label x={284} y={118} muted size={9}>3 / 4</Label>
      <path d="M39 130h281" className="ap-workflow-rule" />
      <DocumentRow y={149} label="Renewal agreement" /><DocumentRow y={172} label="Insurance certificate" /><DocumentRow y={195} label="Updated company details" /><DocumentRow y={218} label="Purchase order" received={false} />
    </Panel>
    <Connector y={230} height={13} />
    <Panel y={250} height={54} accent><g className="ap-workflow-purple"><Icon kind="mail" x={38} y={261} /></g><Label x={63} y={265} bold>Just following up…</Label><Label x={63} y={279} size={9.5} muted>Could you send the purchase order?</Label><Label x={63} y={294} size={9} muted>Outgoing email · Sent</Label></Panel>
  </>;
}

function BillingDetails() {
  return <>
    <Panel y={93} height={66}><g className="ap-workflow-muted"><Icon kind="document" x={39} y={106} /></g><Label x={64} y={118} bold>Invoice #2084</Label><Label x={270} y={118}>$4,800</Label><Badge x={40} y={127} width={163} tone="warning">Missing purchase order</Badge></Panel>
    <Connector y={162} height={13} />
    <Panel y={181} height={47} accent><g className="ap-workflow-purple"><Icon kind="document" x={39} y={195} /></g><Label x={64} y={199} bold>PO-4821 matched</Label><Label x={64} y={214} size={9.5} muted>Same customer · $4,800</Label><g className="ap-workflow-positive"><Icon kind="check" x={303} y={196} /></g></Panel>
    <Connector y={231} height={13} />
    <Panel y={251} height={53}><Label x={40} y={273} bold>Invoice #2084</Label><Badge x={211} y={260} width={111}>Ready to send</Badge><Label x={40} y={291} size={9} muted>Purchase order attached</Label></Panel>
  </>;
}

function Collections() {
  return <>
    <Panel y={93} height={48}><Label x={40} y={113} bold>Invoice #1963</Label><Label x={40} y={129} muted size={9}>$3,200 outstanding</Label><Badge x={228} y={104} width={94} tone="warning">Overdue</Badge></Panel>
    <path d="M180 143v16H100v17m80-17h80v17" className="ap-workflow-connector" fill="none" strokeWidth="1.25" />
    <Panel x={25} y={179} width={150} height={75}><g className="ap-workflow-purple"><Icon kind="mail" x={39} y={191} /></g><Label x={64} y={203} size={10}>Follow-up email</Label><Badge x={37} y={217} width={124}>Reminder sent</Badge></Panel>
    <Panel x={185} y={179} width={150} height={75}><g className="ap-workflow-purple"><Icon kind="account" x={199} y={191} /></g><Label x={223} y={203} size={10}>Billing specialist</Label><Badge x={197} y={217} width={127} tone="purple">Dispute assigned</Badge></Panel>
    <Connector x={260} y={256} height={9} />
    <Panel x={121} y={272} width={214} height={32} accent><g className="ap-workflow-purple"><Icon kind="mail" x={131} y={280} size={13} /></g><Label x={151} y={286} size={9}>“The billed amount looks incorrect.”</Label><Label x={151} y={297} muted size={8}>Customer reply attached</Label></Panel>
  </>;
}

const illustrations = [Onboarding, Quotes, CustomerRequests, Renewals, BillingDetails, Collections];

function titleLines(title: string) {
  const lines: string[] = [];
  for (const word of title.split(' ')) {
    const previous = lines.at(-1);
    if (previous && `${previous} ${word}`.length <= 38) lines[lines.length - 1] += ` ${word}`;
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
        <text x="25" y="31" className="ap-workflow-title" fontSize="15" fontWeight="600">{titleLines(workflow.title).map((line, i) => <tspan key={line} x="25" dy={i === 0 ? 0 : 19}>{line}</tspan>)}</text>
        <Illustration />
      </svg>
    </div>;
  });
}
