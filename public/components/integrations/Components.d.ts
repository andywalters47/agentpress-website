// Components.d.ts — the complete catalog of the 1 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ConnectedLogos) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Connected logos" (node 1:186)
export interface ConnectedLogosProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const ConnectedLogos: React.FC<ConnectedLogosProps>;
declare global {
  interface Window {
    ConnectedLogos: React.FC<ConnectedLogosProps>;
  }
}
