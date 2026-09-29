import { workflowArtwork } from '@/components/AutomationArtwork';

const workflows = [
  { title: 'Handle customer conversations and follow-through.', description: 'A short email exchange ending with a green Resolved badge.' },
  { title: 'Turn documents and emails into completed work.', description: 'An email and a document flow into a checked-off task.' },
  { title: 'Coordinate work across your existing systems.', description: 'Three connected application icons, each with a green check.' },
  { title: 'Apply your business rules to everyday decisions.', description: 'A request passes through a checklist labeled Your rules.' },
  { title: 'Keep processes moving from start to finish.', description: 'Four connected steps light up in sequence, ending with Complete.' },
  { title: 'Bring your team in when judgment is needed.', description: 'An agent hands a flagged item to a person, with Approve and Review controls.' },
];

function titleLines(title: string) {
  const lines: string[] = [];
  for (const word of title.split(' ')) {
    const previous = lines.at(-1);
    if (previous && `${previous} ${word}`.length <= 32) lines[lines.length - 1] += ` ${word}`;
    else lines.push(word);
  }
  return lines;
}

export function RevenueWorkflowCards() {
  return workflows.map((workflow, index) => {
    const { Illustration, height } = workflowArtwork[index];
    const lines = titleLines(workflow.title);
    // Center the artwork between the title's lower edge and the card's lower
    // edge. Each composition includes its badges in its full visual height.
    const titleBottom = 46 + (lines.length - 1) * 21;
    const illustrationTop = (titleBottom + 319 - height) / 2;
    return <div className="ap-timeline-card-anchor ap-revenue-card-anchor" style={{ zIndex: 19 - index }} key={workflow.title}>
      <svg className="ap-timeline-flight-card ap-revenue-card" viewBox="0 0 360 320" role="img" aria-label={`${workflow.title} ${workflow.description}`} style={{ transform: `translate3d(${-50 - index * 0.8}vw, 0, 0) perspective(1500px) rotateX(5.25deg) rotateY(-15deg) skewY(-10deg) scale(0.96)` }}>
        <title>{workflow.title}</title>
        <desc>{workflow.description}</desc>
        <rect x="1" y="1" width="358" height="318" rx="20" className="ap-workflow-frame" />
        <text x="28" y="42" className="ap-workflow-title" fontSize="18">{lines.map((line, i) => <tspan key={line} x="28" dy={i === 0 ? 0 : 21}>{line}</tspan>)}</text>
        <g className="ap-workflow-art" transform={`translate(0 ${illustrationTop})`} data-art-height={height} data-title-bottom={titleBottom}><Illustration /></g>
      </svg>
    </div>;
  });
}
