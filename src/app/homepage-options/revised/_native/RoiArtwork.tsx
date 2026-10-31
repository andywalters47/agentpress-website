// Outcome examples for the private homepage comp. Reuses the site's existing
// SVG panel, label, chart and status treatments, without customer metrics.
export function RevenueIncreaseArt() {
  return <>
    <rect x="28" y="0" width="304" height="174" rx="12" className="ap-art-panel" />
    <text x="48" y="27" className="ap-art-label">Order value</text>
    <path d="M52 140h256" className="ap-art-divider" />
    <rect x="82" y="94" width="64" height="46" rx="5" className="ap-art-check-ground" />
    <rect x="212" y="94" width="64" height="46" rx="5" className="ap-art-check-ground" />
    <path d="M212 94V58a5 5 0 0 1 5-5h54a5 5 0 0 1 5 5v36Z" fill="var(--ap-chart-1)" />
    <text x="244" y="79" textAnchor="middle" fontSize="12" fill="var(--ap-surface-card)">Add-on</text>
    <text x="114" y="161" textAnchor="middle" className="ap-art-meta">Base order</text>
    <text x="244" y="161" textAnchor="middle" className="ap-art-meta">With cross-sell</text>
  </>;
}

export function ExpenseReductionArt() {
  return <>
    <rect x="28" y="0" width="304" height="174" rx="12" className="ap-art-panel" />
    <text x="48" y="27" className="ap-art-label">Staff costs per invoice</text>
    <path d="M52 140h256" className="ap-art-divider" />
    <rect x="82" y="53" width="64" height="87" rx="5" fill="var(--ap-chart-1)" />
    <rect x="212" y="104" width="64" height="36" rx="5" className="ap-art-check-ground" />
    <path d="M158 65l39 27m-13-1 13 1-3-13" className="ap-art-growth-line" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="114" y="161" textAnchor="middle" className="ap-art-meta">Manual</text>
    <text x="244" y="161" textAnchor="middle" className="ap-art-meta">Automated</text>
  </>;
}
