# AgentPress illustration token snapshot

`tokens.css` and `semantics.css` are unchanged copies of the current files in
`/Users/andy/dev/AgentPress/packages/design-system/src/styles/`, captured on
2026-09-29. They provide the actual app surface, status, action and chart tokens
for the static homepage illustrations, without coupling the website deployment
to an external local checkout or installing the application monorepo.

The illustrated UI follows the existing `ApBadge` outline/status treatments,
`ApButton` outline and success-action treatment, and `ApCard` neutral surfaces.
These drawings are non-interactive SVG illustrations, not live app controls.
Their Tabler paths come from the same icon set registered by `ApIcon`.

Marketing titles follow `.design-sync/project/guidelines/design.md`: NeuSans
Book, weight 400. Mini-app text uses the website's existing Archivo font asset.
The existing AgentPress icon asset is reused. No new color palette is defined.

To refresh this snapshot, copy the two source stylesheets unchanged and verify
the illustrated treatments against the source components and guidelines.
