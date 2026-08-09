# AgentPress Design System

**AgentPress (agent.press)** is an AI-native CRM for enterprise sales teams.
Register: *"Most CRMs record what happened. AgentPress does the work that happens next."*
Well-funded seed stage: confident, not corporate. Polished, not overdone. Minimal, calm, warm, light.

**One system, two surfaces.** Underneath: shared brand, ink ladder, and color meanings. On top, the **marketing website** and the **app** diverge on purpose — density, neutral ramps, type sizes, and containers all differ. Never blend their conventions into one averaged set. See `guidelines/design.md` §4 for the full divergence table.

## Apply the surface first

Every screen is **marketing** or **app**, and the rules differ (`guidelines/design.md §4`). One derived mode exists: **generated buyer-facing documents** (Deal Room, proposals — `design.md §6`) share the app's tokens and color meanings but follow document conventions. Shared: brand color meanings, ink ladder, form discipline, type families, Tabler icons, sentence case. Determine the surface, then apply only that surface's rules — never blend them.

App-only conventions:

- **Actionable status** (a status the user can change that is also a control — Opportunity stage) = glyph + text + **persistent caret** (`<Badge actionable>`). **Pure status** = glyph + text, no caret. A primary-scanning-target stage (a dense table's stage column) may take the bordered, ~45%-tinted **pill** variant (`<Badge actionable pill>`) — allowed, not default. The caret is the one licensed mark that lets a status read as changeable; the menu it opens stays hidden until clicked.
- **Tint vs bare:** control zones (filter bars, toolbars, segmented controls) take the tonal tint `--app-bg-alt` #F4F2EF, no border; content (rows, data) stays bare. Test: does the region act on other content, or is it content? Never tint-on-tint, never tint plus outline.
- **Sidebar is locked:** light cream collar, Tabler icons, purple-tint selection, active icon in `--action-primary` (`SidebarItem`). No dark collar. Nav item labels are **Title Case** — the one exception to sentence case — at 13.5px.
- **Table rows have no separator lines by default** (`Row`'s `rule` prop is the opt-in exception for dense financial data).

Marketing-only: the one footer gradient, photo/card panels, weight 400, 96–160px section rhythm, large radii — and no status family.

## Sources

- **Figma:** "Marketing site.fig" (attached to this project) — the BRAND mockup frame (1440px marketing site), the logo component, the Social icon family (63 variants), the menu family (6 variants), and 3 standalone icon marks. All materialized/copied in.
- **Docs (authority order):** `tokens/tokens.css` + `tokens/app-color-semantics.css` (source of truth for values) → `guidelines/design.md` (brand rules) → `guidelines/component-code.md` (component reference) → `guidelines/screens.md` + `uploads/*.png` (references only; the before-state screenshots show the OLD app and must never be reproduced).
- Where anything disagrees, tokens and docs win over screens.

## Content fundamentals

- **Sentence case everywhere** — headings, buttons, nav, labels. Never all-caps display (only the 10–11px section-label role is uppercase).
- **Plain active verbs** on actions: "Generate prep", "Sync meetings", "Roleplay this meeting". In-app, labels are nouns, actions are verbs; a status never reads as a command ("Closed lost", never "Close").
- **Confident and specific, never salesy or cute.** The copy names the work: "The ROI engine quantifies what the deal is worth using the buyer's own numbers, pulled from your calls and emails."
- **Second person** ("you/your"); the product speaks as AgentPress.
- **Headlines are benefit-plain, not clever:** "Your AI wingman for selling into enterprise."
- **No emoji. No exclamation marks** except rare warm support copy.

## Visual foundations

- **Color:** primary trio — purple `#814ADE`, mint `#AEF3C8`, teal `#2DC4A8` — all three primary. `#322371` is removed; never use it. Blue stays blue. The wider bright palette is app-only and small-element-only (glyphs, tints, chart series) — never a surface, never on marketing.
- **Form discipline** (replaces "one accent per element"): action colors appear as **fills** (purple, mint) or as **nothing** (ghost); status colors appear as **glyphs, quiet tints or text** — never a full-strength fill, never on anything clickable-looking. Hence mint (button fill ≥32px) and teal (≤9px glyph/tint/type) can never be misread.
- **Neutrals:** two separate cream ramps — marketing `#FDFAF4/#F7F5F0`, app `#FCFAF7/#F4F2EF/#FBFBFA/#EBE8E4`. No white pages, no gray. Ink is opacity steps of `#212121` (72/55/35/8%), never separate grays.
- **Type:** NeuSans Book for headlines/metrics/figures, Archivo for everything else. Marketing is weight 400 throughout (display 24–38px, body 16px lh 1.6–1.75); the app uses 400/500/600 + one 700 (titles 16–20px, body 13–13.5px, metrics 30–44px). Hierarchy is size, space and ink opacity first; weight is the smallest lever.
- **Backgrounds:** flat creams. Exactly one gradient exists — the marketing footer band `linear-gradient(180deg,#271E53,#1B143A)`. **The app contains no gradients**; its dark surfaces are flat (`#1B1536` value panel).
- **Imagery:** marketing gets one warm lifestyle photo in a 24px-radius panel plus gradient feature panels that ship as bitmaps (assets/fig/); the app gets none — charts are the only graphics, on muted `--chart-*` tokens.
- **Shape:** radii 8px controls / 12px app cards / 14px web cards / 24px panels / 999px pills. Nothing sharp.
- **Elevation:** shadows barely exist; separation is fill or hairline. `--shadow-float` is for floating overlays only (menus, popovers). Cards never get shadows — a 2px light-neutral outline or a tonal shift instead.
- **States:** hover = neutral 4–5% tint (background shift only, never opacity); focus/selection = 1px purple border, no glow; selection fill = purple 10% tint.
- **Motion:** fades and gentle eases, 0.15–0.25s ease-out. No bounce, no spring, no scale-on-press.
- **The app's organizing principle:** space delimits, type groups, alignment implies columns, one precise color glyph per row. Before adding a boundary ask in order: space? type? alignment? tonal shift? Only then an outline — never nested inside another.

## Iconography

- **Tabler Icons is the icon set** — thin-line outline, ~1.5px stroke, rounded caps, always `currentColor`. Loaded globally via `tokens/icons.css` (CDN webfont, pinned 3.31.0); rendered via `components/brand/Icon.jsx`. Never filled icons, never emoji, never unicode-as-icon, never a second thin-line set.
- **Marketing-site glyphs** extracted from Figma live in `components/marketing/icon-data-core.js` (the 24 this system renders; the other 48 sit in `icon-data-extra.js`, unimported, opt-in via `registerIcons(pick(…))` so consumers don't carry them) (Social icon family — 21 platforms × Brand/Gray, menu family — 6 variants, cloud-done, copyright, u:plus), rendered via `SocialIcon`.
- **Logo:** extracted from the Figma logo component into `assets/AP_landscape_for_light_bg.svg` (dark letters), `assets/AP_landscape_for_dark_bg.svg` (white letters), `assets/AP_icon_circle.svg` (mark only). Use the `Wordmark` component; never set the brand name as plain type.

## Index

- `styles.css` — global entry (imports only)
- `tokens/` — `tokens.css` (full audit: colors, type, spacing, radii, app text roles), `app-color-semantics.css` (action/status/chart meanings — UI code references Layer 2 only; a raw hex in a component is a bug), `fonts.css`, `icons.css`
- `assets/` — logo SVGs, `partner-logos.png` (Figma logo-section strip); `assets/fig/` — marketing photos/panels/avatars copied verbatim from Figma
- `guidelines/` — specimen cards (Colors/Type/Spacing/Brand groups) + `design.md`, `component-code.md`, `screens.md`, `open-items.md` (authored docs, copied from the consolidation drop)
- `components/` — see below
- `screens/` — the **working screens** as plain, self-contained editable cards, numbered for Design System tab order: `1-App.card.html` (locked nav + Opportunities view + chat rail), `2-Meetings.card.html`, `3-MeetingDetail.card.html` (detail view inside a record — record context persists, three surface planes carry level, one accordion set; reference for the approval-state pattern, design.md §7), `4-OpportunityDetail.card.html`, `5-ValueModel.card.html` (record sub-page — joined segmented view switcher on a tinted bar, label-less control bar, muted `--chart-*` graphics), `6-DealRoom.card.html` (generated buyer-facing document — Deal Room mode, the reference for design.md §6 generated-document conventions), `7-AppConventions.card.html` (app-surface conventions, moved here from `guidelines/` for ordering). Plus `Marketing.card.html` (full marketing page). Built directly from tokens + the component conventions (no runtime composition); the partner-logo strip ships as `assets/partner-logos.png`, captured from the Figma logo section. They carry no `@template` marker on purpose — re-templatize a pattern only once it has settled

## Components

- `brand/` — **Wordmark**, **Icon** (Tabler), **Eyebrow**
- `actions/` — **Button** (primary/secondary/ghost/text/destructive/destructiveSolid/dark)
- `forms/` — **Input**, **Textarea**, **SearchInput**, **Select**, **Checkbox**, **Radio**, **Switch**, **Slider**
- `structure/` — **SectionLabel**, **Card** (bare/outline/tint — bare is default), **Row**, **Tabs**, **StatCallout** (generated-document stat pattern, design.md §6)
- `status/` — **StatusGlyph**, **Badge**, **ApprovalPill** (agent-approval state pill, design.md §7 — values match `screens/3-MeetingDetail.card.html`)
- `navigation/` — **SidebarItem**, **MenuItem**, **RolloverMenu**
- `chat/` — **ChatBubble**
- `marketing/` — **Logo**, **SocialIcon** (both extracted from the Figma file)

Component inventory provenance: `Logo`, `SocialIcon` and the icon-data glyphs come from the Figma file (its complete component inventory: 2 families + 4 standalone marks).

## Intentional additions

Confirmed intentional — the following 22 components are named after nothing in the .fig because they don't come from it: they are transcribed verbatim from `guidelines/component-code.md`, the built component reference supplied with the system (the .fig covers only the marketing site). Do not rename them to the .fig's vocabulary.

Wordmark, Icon, Eyebrow, Button, Input, Textarea, SearchInput, Select, Checkbox, Radio, Switch, Slider, SectionLabel, Card, Row, Tabs, StatusGlyph, Badge, SidebarItem, MenuItem, RolloverMenu, ChatBubble.

Nothing was invented beyond those two sources, plus **StatCallout** — added later as the generated-document stat pattern (design.md §6) — and **ApprovalPill**, added as the agent-approval state pill defined on `screens/3-MeetingDetail.card.html` (design.md §7).

## Open items / caveats

- **NeuSans Book font files are now loaded** (`assets/fonts/`, `tokens/fonts.css`). Instrument Sans remains only as a fallback.
- Avatar/account hues currently borrow status colors (`--app-avatar-*` in tokens.css) — a separate identity ramp is an open design item.
- Hover-reveal grammar is binding (see `tokens/app-color-semantics.css` rules); the per-surface action inventory is open.
- Empty/loading/error states, destructive dialogs, responsive breakpoints: not yet defined anywhere in the source material (see `guidelines/open-items.md` §6).
