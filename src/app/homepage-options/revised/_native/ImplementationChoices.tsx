import { PrebuiltWorkflowGraphic } from './PrebuiltWorkflows';

const choices = [
  { label: 'Build internally', copy: 'Give your team the workflow requirements, business case and implementation plan to guide the build.' },
  { label: 'Build with AgentPress', copy: 'We customize our prebuilt AI workflows, software and integrations around your systems and approval rules. That means less development time and lower build costs.' },
];

/** Two implementation options, with the prebuilt workflow illustration
 * belonging to the AgentPress option rather than a separate section. */
export function ImplementationChoices() {
  return <section className="hp-implementation-native hp-screen-stage" id="implementation" aria-labelledby="hp-implementation-heading">
    <div className="hp-restored-container hp-implementation-layout">
      <h2 className="hp-implementation-heading" id="hp-implementation-heading">Implement the findings internally, or hire <img className="hp-inline-wordmark" src="/assets/agentpress-wordmark.svg" alt="AgentPress" /> to customize prebuilt AI workflows for your business</h2>
      <div className="hp-implementation-options">
        {choices.map((choice, index) => <div className={`hp-implementation-option${index === 1 ? ' hp-implementation-option--agentpress' : ''}`} key={choice.label}>
          <h3>{index === 1 ? <>Build with <img className="hp-inline-wordmark" src="/assets/agentpress-wordmark.svg" alt="AgentPress" /></> : choice.label}</h3><p>{choice.copy}</p>
          {index === 1 && <PrebuiltWorkflowGraphic />}
        </div>)}
      </div>
    </div>
  </section>;
}
