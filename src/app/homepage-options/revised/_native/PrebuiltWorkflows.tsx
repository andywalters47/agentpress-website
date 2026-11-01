import './PrebuiltWorkflows.css';

function WorkflowIcon({ kind }: { kind: 'invoice' | 'email' | 'review' }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'invoice' ? <path d="M14 3v5h5M7 3h7l5 5v13H5V3h2M9 12h6M9 16h6" /> :
      kind === 'email' ? <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></> :
        <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>}
  </svg>;
}

const steps = [
  { kind: 'invoice', title: 'Invoice due' },
  { kind: 'email', title: 'Send reminder' },
  { kind: 'review', title: 'Review exceptions' },
] as const;

/** Compact presentation artwork, not a live workflow editor. */
export function PrebuiltWorkflowGraphic() {
  return <figure className="hp-prebuilt-art" id="prebuilt-workflows" role="img" aria-label="A prebuilt invoice follow-up workflow, customized for your systems, timing and approval rules.">
    <div className="hp-prebuilt-window" aria-hidden="true">
      <div className="hp-prebuilt-title">Invoice follow-up</div>
      <div className="hp-prebuilt-flow">
        {steps.map((step, index) => <div className="hp-prebuilt-flow-part" key={step.kind}>
          <div className="hp-prebuilt-node">
            <span className="hp-prebuilt-node-icon"><WorkflowIcon kind={step.kind} /></span>
            <span>{step.title}</span>
          </div>
          {index < steps.length - 1 && <svg className="hp-prebuilt-arrow" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 8h21m-6-6 6 6-6 6" /></svg>}
        </div>)}
      </div>
      <div className="hp-prebuilt-settings">
        <span>Your systems</span><span>Your timing</span><span>Your rules</span>
      </div>
    </div>
  </figure>;
}
