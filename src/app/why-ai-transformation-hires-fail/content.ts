export const introduction = [
  "If your company is hiring an AI Transformation or Change Manager, or choosing an agency to lead the work, you’re making a bet. Before you write the job description, run a pre-mortem. Assume it’s eighteen months from now and the program failed, then ask why.",
  "I’ve been close to dozens of AI transformations, and the failures keep looking the same. Below are the five most common failure modes. For each one, I’ve listed the quality it means you should require in the person or firm you pick."
];

export const sections = [
  {
    "heading": "Failure mode 1: Deploying before there’s confidence in the solution",
    "paragraphs": [
      "The failed version goes like this: the demo looks great, leadership wants momentum, and the agent goes live in production. It then meets the edge cases the demo never covered. A few visible mistakes later, the business concludes that “AI doesn’t work here.”",
      "What to look for: someone who insists on a parallel shadow mode. The agent runs alongside the human process, and its outputs are compared against real outcomes until it handles the edge cases reliably. Only then does it go live. Ask the candidate how they decide an agent is ready. If the answer is a feeling instead of a measured threshold, keep looking."
    ]
  },
  {
    "heading": "Failure mode 2: Workflows nobody can inspect",
    "paragraphs": [
      "Real workflows connect multiple systems. If you can’t see what data enters and leaves each system, and what state the solution holds in between, you can’t debug it, audit it, or trust it. Well-intentioned security and compliance teams often make this worse when they are brought in late and forced to react.",
      "What to look for: a bias toward auditability and an instinct to bring your CISO in on day one, as a partner and not a gatekeeper. Ask to see how they’d trace a single record through a multi-system workflow. Strong candidates answer concretely."
    ]
  },
  {
    "heading": "Failure mode 3: Incoherent data",
    "paragraphs": [
      "Any AI workflow is only as accurate as the data it runs on. When the output is garbage, the model often gets the blame, but the real problem was upstream. Duplicate records, conflicting sources of truth, and fields that mean different things to different teams will undermine even a well-designed agent.",
      "What to look for: someone who audits the inputs before building anything and will tell you when the data isn’t ready. A candidate who says yes to every use case without asking about the data underneath is a risk."
    ]
  },
  {
    "heading": "Failure mode 4: Change management failures",
    "paragraphs": [
      "This is the one most people underestimate. Discovering, building, and supporting workflows is getting faster every month. The bottleneck is increasingly retraining staff and reshaping how people and processes work around the new capability. Companies that treat AI as a tool rollout instead of an organizational change end up with software nobody uses.",
      "There is a subtler version of this failure, too. AI-driven productivity doesn’t automatically produce a return. It produces operational margin: the capacity left over once the work gets faster. The return depends on what the team does with that capacity. They can redeploy it to more accounts, a cleared backlog, or higher quality. They can reserve it as headroom for demand spikes. Or they can waste it, in which case the economic value is zero. A culture that finds and owns additional high-value work when capacity appears is a large part of what makes a transformation pay off.",
      "What to look for: someone who can talk about people as fluently as they talk about technology, and who plans for what happens to reclaimed hours before the automation ships. The best candidates also treat the mundane work agents take on as a gain for employees. Most people don’t want to spend their careers triaging support tickets or chasing invoices, and a good change leader can make that case honestly."
    ]
  },
  {
    "heading": "Failure mode 5: Executive buy-in runs out before the workflow delivers",
    "paragraphs": [
      "Getting to strong performance takes time, iteration, and patience, and executive patience is rarely unlimited. Programs often die at month six because the sponsor lost faith one quarter before the system would have hit its stride.",
      "What to look for: someone who sets expectations carefully at the start, defines what “working” looks like at each stage, and reports progress in the business metrics your CFO already cares about. Ask how they would keep a skeptical sponsor on board through a rough patch."
    ]
  },
  {
    "heading": "One more filter: security realism",
    "paragraphs": [
      "I’d add a sixth screen, even though it isn’t a failure mode of the transformation itself. For midmarket firms, the AI safety risks that matter are mundane. Prompt injection and agent hijacking become real as agents touch emails and documents. Agents given broad data access can leak sensitive information to people who shouldn’t see it. Employees paste proprietary IP into unmanaged consumer AI accounts. Existential risk is mostly a distraction at your scale. The bigger risk is deploying agents carelessly, so look for someone who can talk about the unglamorous controls."
    ]
  },
  {
    "heading": "A note on agencies versus hires",
    "paragraphs": [
      "A few things separate strong agencies from weak ones.",
      "- They own the last mile. The gap isn’t the final 20% between a frontier model and the ideal outcome. It’s the hidden work of getting a large, risk-averse organization to actually adopt and trust automation: red tape, hidden requirements, and homegrown systems. A good partner takes responsibility for all of it.",
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
