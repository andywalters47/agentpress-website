import { workflowArtwork } from './AutomationArtwork';
import { ExpenseReductionArt, RevenueIncreaseArt } from './RoiArtwork';

const workflows = [
  { title: 'Revenue increase', description: 'Increase average order value with relevant cross-sell and upsell offers.', Illustration: RevenueIncreaseArt, height: 174 },
  { title: 'Expense reduction', description: 'Lower staffing costs by automating data entry and invoice processing.', Illustration: ExpenseReductionArt, height: 174 },
  { title: 'Productivity increase', description: 'Process more invoices, reports and requests without adding headcount.', ...workflowArtwork[4] },
  { title: 'Risk reduction', description: 'Reduce costly payment errors with automated invoice checks and approval controls.', ...workflowArtwork[5] },
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
    const { Illustration, height } = workflow;
    const lines = titleLines(workflow.title);
    // Center the artwork between the title's lower edge and the card's lower
    // edge. Each composition includes its badges in its full visual height.
    const titleBottom = 46 + (lines.length - 1) * 21;
    const illustrationTop = (titleBottom + 319 - height) / 2;
    return <div className="ap-timeline-card-anchor ap-revenue-card-anchor" style={{ zIndex: 19 - index, aspectRatio: "360 / 380" }} key={workflow.title}>
      <svg className="ap-timeline-flight-card ap-revenue-card" viewBox="0 0 360 380" role="img" aria-label={`${workflow.title} ${workflow.description}`} style={{ transform: `translate3d(${-50 - index * 0.8}vw, 0, 0) perspective(1500px) rotateX(5.25deg) rotateY(-15deg) skewY(-10deg) scale(0.96)` }}>
        <title>{workflow.title}</title>
        <desc>{workflow.description}</desc>
        <rect x="1" y="1" width="358" height="378" rx="20" className="ap-workflow-frame" />
        <text x="28" y="42" className="ap-workflow-title" fontSize="18">{lines.map((line, i) => <tspan key={line} x="28" dy={i === 0 ? 0 : 21}>{line}</tspan>)}</text>
        <g className="ap-workflow-art" transform={`translate(0 ${illustrationTop})`} data-art-height={height} data-title-bottom={titleBottom}><Illustration /></g>
        <text x="28" y="307" fill="var(--ink-body)" fontSize="16">{titleLines(workflow.description).map((line, i) => <tspan key={line} x="28" dy={i === 0 ? 0 : 20}>{line}</tspan>)}</text>
      </svg>
    </div>;
  });
}
