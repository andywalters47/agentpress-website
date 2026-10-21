export const introduction = [
  "If your company is about to hire an AI Transformation Manager, or pick an agency to lead the work, you’re making a bet. Before you write the job description, run a pre-mortem. Assume it’s eighteen months from now and the program failed, then ask why.",
  "I’ve been close to dozens of AI transformations, and the failures keep looking the same. Below are the five most common failure modes. For each one, I’ve listed the quality it means you should require in the person or firm you pick."
];

export const sections = [
  {
    "heading": "Failure mode 1: Workflows get automated without anyone agreeing on the ROI",
    "paragraphs": [
      "This is the failure that gets a CFO’s attention, because it’s the one that ends the budget. A team automates a workflow, hours are saved, everyone is pleased, and a year later nobody can say what the company got for the money.",
      "Some workflows have an indisputable, straight-line return. If you can staff 30% fewer contractors to do the same work, the ROI is labor savings. But many don’t, and that’s where programs get into trouble. Say AI automates 100 hours a month for a team, and the whole team is still needed. Was that a good investment? It depends on one thing: what the team does with the reclaimed time.",
      "AI doesn’t create ROI by making people more productive. It creates operational margin, which is the capacity left over once the work gets faster. That margin can go three ways:",
      "1. Redeploy it. More accounts serviced, a cleared backlog, higher quality.",
      "2. Reserve it. Deliberate headroom to absorb demand spikes and surprises without adding headcount.",
      "3. Waste it. The same work gets done at the same quality, and the economic value is zero.",
      "What to look for: someone who asks “what happens to the hours?” before they build anything. They should be able to name the ROI case for a workflow, get finance to sign off on it up front, and say which of the three paths the freed capacity will take. If a candidate talks only about time saved, they’re measuring the wrong thing."
    ]
  },
  {
    "heading": "Failure mode 2: Deploying what you can’t verify or inspect",
    "paragraphs": [
      "The failed version goes like this: the demo looks great, leadership wants momentum, and the agent goes live. It then meets edge cases the demo never covered. A few visible mistakes later, the business concludes that “AI doesn’t work here.” The problem is made worse when the workflow spans several systems and nobody can see what data enters and leaves each one, or what state the solution holds in between. You can’t debug, audit, or trust what you can’t inspect.",
      "What to look for: someone who insists on a shadow mode, where the agent runs in parallel with the human process until it handles edge cases reliably, and only then goes live. Ask how they decide an agent is ready. A feeling isn’t an answer. Look for a measured threshold. They should also bring your CISO in on day one as a partner, not a gatekeeper they meet at launch. Well-meaning security reviews that arrive late are a common way these projects get stuck.",
      "At midmarket scale, the real security risks are the unglamorous ones: prompt injection and agent hijacking as agents touch emails and documents, sensitive data leaking to people who shouldn’t see it, and employees pasting proprietary IP into unmanaged consumer AI accounts. Existential AI risk is mostly a distraction here. The bigger risk is deploying agents carelessly, so look for someone who can talk about the controls."
    ]
  },
  {
    "heading": "Failure mode 3: Incoherent data",
    "paragraphs": [
      "Any AI workflow is only as accurate as the data it runs on. When the output is garbage, the model usually takes the blame, but the problem was upstream. Duplicate records, conflicting sources of truth, and fields that mean different things to different teams undermine even a well-designed agent.",
      "What to look for: someone who audits the inputs before building and will tell you when the data isn’t ready. A candidate who says yes to every use case without asking what’s underneath is a risk."
    ]
  },
  {
    "heading": "Failure mode 4: Change management failures",
    "paragraphs": [
      "Discovering, building, and supporting workflows is getting faster every month. The bottleneck is increasingly retraining staff and reshaping how people and processes work around the new capability. Companies that treat AI as a tool rollout, not an organizational change, end up with software nobody uses. This is also the failure that decides how failure mode 1 turns out: a culture that doesn’t own new high-value work will waste its margin no matter how good the automation is.",
      "What to look for: someone as fluent in people as they are in technology. A good change leader can also make the honest case to employees. Most people don’t want to spend their careers triaging support tickets or chasing unpaid invoices, and agents taking that work on is good news for them."
    ]
  },
  {
    "heading": "Failure mode 5: Executive buy-in runs out before the workflow delivers",
    "paragraphs": [
      "Getting to strong performance takes time, iteration, and patience, and executive patience is rarely unlimited. Programs often die at month six because the sponsor lost faith one quarter before the system would have hit its stride.",
      "What to look for: someone who sets expectations carefully at the start, defines what “working” looks like at each stage, and reports progress in the business metrics your CFO already tracks. Ask how they would keep a skeptical sponsor on board through a rough patch."
    ]
  },
  {
    "heading": "A note on agencies versus hires",
    "paragraphs": [
      "A few things separate strong agencies from weak ones.",
      "- They own the last mile. The gap isn’t the final 20% between a frontier model and the ideal outcome. It’s the hidden work of getting a large, risk-averse organization to adopt and trust automation: red tape, hidden requirements, and homegrown systems. A good partner takes responsibility for all of it.",
      "- They can show you the working system. Be skeptical of anyone whose pitch is a thin layer over a prompt. Your own engineers will see through it.",
      "- They’re honest about build versus buy. Increasingly, the right answer for a midmarket company is software built around how the business actually runs, not another off-the-shelf tool that forces the business to adapt."
    ]
  },
  {
    "heading": "The takeaway",
    "paragraphs": [
      "Each of these failure modes is predictable, and each has a corresponding quality you can screen for. Write your job description and interview questions as the inverse of this list. Ask how candidates have prevented each failure, and ask for evidence. The person or firm who can answer all five with specifics is the one who will carry the transformation through to a return."
    ]
  }
];
