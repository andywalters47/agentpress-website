const choices = [
  { label: 'Build internally', copy: 'Give your team the workflow requirements, business case and implementation plan to guide the build.' },
  { label: 'Build with AgentPress', copy: 'Our engineers build on our agent platform, integrations and workflow components, configuring them around your systems and approval rules.' },
];

/** The existing marketing FAQ's two-column anatomy, with static editorial
 * rows instead of introducing a separate tab/card design language. */
export function ImplementationChoices() {
  return <section className="hp-implementation-native hp-screen-stage" id="implementation">
    <div className="faqrow" style={{boxSizing:'border-box',width:1376,maxWidth:'100%',padding:'0 56px',display:'flex',justifyContent:'space-between',gap:'clamp(96px,10vw,160px)'}}>
      <div style={{width:340,maxWidth:'100%',flex:'0 0 auto'}}>
        <h2 className="h1" style={{fontSize:'var(--web-size-h2)',margin:0,letterSpacing:0}}>Use the findings with your own team, or have us implement</h2>
      </div>
      <div className="hp-implementation-options" style={{flex:'1 1 0%',maxWidth:560}}>
        {choices.map((choice, index) => <div className={`hp-implementation-option${index === 1 ? ' hp-implementation-option--agentpress' : ''}`} key={choice.label}>
          <h3>{index === 1 ? <>Build with <img className="hp-inline-wordmark" src="/assets/agentpress-wordmark.svg" alt="AgentPress" /></> : choice.label}</h3><p>{choice.copy}</p>
        </div>)}
      </div>
    </div>
  </section>;
}
