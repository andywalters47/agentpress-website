/* @ds-bundle: {"format":4,"namespace":"AgentPressDesignSystem_a7a079","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Logo","sourcePath":"components/marketing/Logo.jsx"},{"name":"SocialIcon","sourcePath":"components/marketing/SocialIcon.jsx"},{"name":"MenuItem","sourcePath":"components/navigation/MenuItem.jsx"},{"name":"RolloverMenu","sourcePath":"components/navigation/RolloverMenu.jsx"},{"name":"SidebarItem","sourcePath":"components/navigation/SidebarItem.jsx"},{"name":"ApprovalPill","sourcePath":"components/status/ApprovalPill.jsx"},{"name":"Badge","sourcePath":"components/status/Badge.jsx"},{"name":"StatusGlyph","sourcePath":"components/status/StatusGlyph.jsx"},{"name":"Card","sourcePath":"components/structure/Card.jsx"},{"name":"Row","sourcePath":"components/structure/Row.jsx"},{"name":"SectionLabel","sourcePath":"components/structure/SectionLabel.jsx"},{"name":"StatCallout","sourcePath":"components/structure/StatCallout.jsx"},{"name":"Tabs","sourcePath":"components/structure/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"3870499f0b8b","components/brand/Eyebrow.jsx":"4581b30eb374","components/brand/Icon.jsx":"1922ebba62fb","components/brand/Wordmark.jsx":"fdbf21423b64","components/chat/ChatBubble.jsx":"8c019adf0ca2","components/forms/Checkbox.jsx":"2bb62d24002a","components/forms/Input.jsx":"74e6277bca3e","components/forms/Radio.jsx":"eb1ba715356e","components/forms/SearchInput.jsx":"4d640b9a7e9d","components/forms/Select.jsx":"7031bd5043f5","components/forms/Slider.jsx":"62cc84a5e94a","components/forms/Switch.jsx":"374ce9172b51","components/forms/Textarea.jsx":"17e103e5fa02","components/marketing/Logo.jsx":"09ef6cce6c27","components/marketing/SocialIcon.jsx":"2185928cc089","components/marketing/icon-data-core.js":"02f80a639564","components/marketing/icon-data-extra.js":"c9cbbcef98c5","components/navigation/MenuItem.jsx":"fadf80582e99","components/navigation/RolloverMenu.jsx":"1a0dc86a6da2","components/navigation/SidebarItem.jsx":"bc658f2a5e33","components/status/ApprovalPill.jsx":"b5c81cb6c4ac","components/status/Badge.jsx":"687101720f08","components/status/StatusGlyph.jsx":"6ed5948bf296","components/structure/Card.jsx":"49624842e792","components/structure/Row.jsx":"df9c26f0e6dd","components/structure/SectionLabel.jsx":"75808d1fd5d8","components/structure/StatCallout.jsx":"1e1a5234d512","components/structure/Tabs.jsx":"ca75fa5eeaed"},"inlinedExternals":[],"unexposedExports":[{"name":"coreNames","sourcePath":"components/marketing/icon-data-core.js"},{"name":"extra","sourcePath":"components/marketing/icon-data-extra.js"},{"name":"extraNames","sourcePath":"components/marketing/icon-data-extra.js"},{"name":"pick","sourcePath":"components/marketing/icon-data-extra.js"},{"name":"registerIcons","sourcePath":"components/marketing/icon-data-core.js"},{"name":"registry","sourcePath":"components/marketing/icon-data-core.js"}]} */

(() => {

const __ds_ns = (window.AgentPressDesignSystem_a7a079 = window.AgentPressDesignSystem_a7a079 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
// Action family. Fills = primary (purple) / secondary (mint); ghost family =
// outline + ink, no color in any state (labeled and icon-only share one rule
// set); destructive = red-orange ink on text/ghost, solid red ONLY in a
// destructive-confirm dialog. Hover shifts background only — never opacity.
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  icon = null,
  iconOnly = false,
  disabled = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const pad = iconOnly ? {
    lg: 11,
    md: 8,
    sm: 6,
    xs: 5
  }[size] : {
    lg: '13px 26px',
    md: '10px 20px',
    sm: '7px 14px',
    xs: '5px 10px'
  }[size];
  const fs = {
    lg: 15,
    md: 14,
    sm: 13,
    xs: 12
  }[size];
  const V = {
    primary: {
      background: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--action-primary-ink)',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover ? 'var(--action-secondary-hover)' : 'var(--action-secondary)',
      color: 'var(--action-secondary-ink)',
      border: '1px solid transparent'
    },
    ghost: {
      background: hover ? 'var(--action-tertiary-hover-bg)' : 'transparent',
      color: hover ? 'var(--action-tertiary-hover-ink)' : 'var(--action-tertiary-ink)',
      border: 'var(--action-tertiary-border)'
    },
    text: {
      background: hover ? 'var(--action-text-hover-bg)' : 'transparent',
      color: hover ? 'var(--action-text-hover-ink)' : 'var(--action-text-ink)',
      border: '1px solid transparent'
    },
    destructive: {
      background: hover ? 'var(--action-destructive-hover-bg)' : 'transparent',
      color: 'var(--action-destructive-ink)',
      border: '1px solid transparent'
    },
    destructiveSolid: {
      background: 'var(--action-destructive-solid)',
      color: '#FFFFFF',
      border: '1px solid transparent'
    },
    dark: {
      background: '#1B1536',
      color: '#fff',
      border: '1px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: iconOnly ? 0 : 7,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: fs,
      padding: pad,
      lineHeight: 1.2,
      borderRadius: pill ? 999 : 'var(--radius-control)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background 0.15s ease-out, color 0.15s ease-out',
      ...V,
      ...style
    }
  }, icon, !iconOnly && children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
// Marketing-only. The hairline pill is a marketing device; in-app it becomes
// SectionLabel (components/structure), which has no container at all.
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: '0.03em',
      color: 'var(--ink-muted)',
      border: '1px solid var(--hairline)',
      borderRadius: 999,
      padding: '5px 14px',
      background: 'transparent',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
// Tabler Icons — THE icon set (ships in current designs incl. the left nav).
// Stroke-only, currentColor, never filled. Requires the Tabler webfont CSS,
// loaded globally via tokens/icons.css.
// TI_MAP aliases internal semantic names to Tabler names so callers keep
// passing semantic names and only this map changes if an icon is swapped.
const TI_MAP = {
  bot: 'robot',
  settings: 'settings',
  send: 'send',
  search: 'search',
  'layout-grid': 'layout-grid',
  'alert-circle': 'alert-circle',
  'chevron-down': 'chevron-down',
  'chevron-right': 'chevron-right',
  'layout-panel-left': 'layout-sidebar',
  sliders: 'adjustments',
  'caret-updown': 'selector'
};
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  style
}) {
  if (!name) return null;
  return /*#__PURE__*/React.createElement("i", {
    className: 'ti ti-' + (TI_MAP[name] || name),
    style: {
      fontSize: size,
      width: size,
      height: size,
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color,
      flex: 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
// Asset-only logo — never render the brand name as plain type.
// Consumers not at the project root set window.__AP_ASSET_BASE to the path
// prefix that reaches assets/ (e.g. '../../').
function Wordmark({
  size = 22,
  onDark = false,
  iconOnly = false,
  assetBase = '',
  style
}) {
  const base = assetBase || window.__AP_ASSET_BASE || '';
  if (iconOnly) return /*#__PURE__*/React.createElement("img", {
    src: base + 'assets/AP_icon_circle.svg',
    alt: "AgentPress",
    style: {
      height: size * 1.4,
      width: size * 1.4,
      display: 'inline-block',
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("img", {
    src: base + (onDark ? 'assets/AP_landscape_for_dark_bg.svg' : 'assets/AP_landscape_for_light_bg.svg'),
    alt: "agent.press",
    style: {
      height: size * 1.18,
      display: 'inline-block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatBubble.jsx
try { (() => {
// Bubbles are occasional: the USER gets one (their input echoed back — a
// distinct functional zone), the AGENT gets none — agent turns are type on
// the rail background. Type: 13.5px / 1.6 line-height / 0.01em tracking.
// Stack turns with a 24px gap (the rail's flex `gap`, not this component's
// concern — set it on the list container).
function ChatBubble({
  role = 'agent',
  name = 'AgentPress',
  time,
  children,
  style
}) {
  if (role === 'user') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '80%',
      backgroundColor: '#EBE8E475',
      borderRadius: 'var(--radius-card-web)',
      padding: '10px 14px',
      fontSize: 13.5,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
      color: '#212121CC'
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.__AP_ASSET_BASE || '') + 'assets/AP_icon_circle.svg',
    alt: "",
    style: {
      width: 20,
      height: 20,
      borderRadius: 999
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-muted)'
    }
  }, name), time && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-faint)'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
      color: 'var(--ink-body)',
      marginTop: 6
    }
  }, children));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
// 15px / 4px radius / transparent at rest — matching what the table ships.
function Checkbox({
  label,
  checked = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: 4,
      flex: 'none',
      border: `1.5px solid ${checked ? 'var(--action-primary)' : 'var(--app-track-fill)'}`,
      background: checked ? 'var(--action-primary)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      transition: 'background 0.15s ease-out'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 11
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
// Field sits on app cream, defined by its hairline — no white box. Label is
// the section-label role so the VALUE is the loudest thing in the field.
function Input({
  label,
  placeholder,
  value,
  onChange,
  size = 'md',
  invalid = false,
  surface = 'app',
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const bg = surface === 'app' ? 'var(--app-bg)' : 'var(--web-surface)';
  const border = invalid ? 'var(--status-negative-glyph)' : focus ? 'var(--action-primary)' : 'var(--hairline)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: size === 'sm' ? 12.5 : 14,
      padding: size === 'sm' ? '5px 10px' : '11px 14px',
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${border}`,
      background: bg,
      color: 'var(--ink)',
      outline: 'none',
      transition: 'border-color 0.15s ease-out'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => onChange && onChange(true),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: 999,
      flex: 'none',
      border: `1.5px solid ${checked ? 'var(--action-primary)' : 'var(--app-track-fill)'}`,
      background: 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--action-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
// ⌘K is bare muted type (no chip-in-a-chip) and disappears on focus.
function SearchInput({
  placeholder = 'Search…',
  value,
  onChange,
  size = 'md',
  shortcut = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: size === 'sm' ? '7px 12px' : '11px 14px',
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${focus ? 'var(--action-primary)' : 'var(--hairline)'}`,
      background: 'var(--app-bg)',
      transition: 'border-color 0.15s ease-out',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 15,
    color: "var(--ink-faint)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: size === 'sm' ? 12.5 : 14,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--ink)',
      flex: 1,
      minWidth: 0
    }
  }), shortcut && !focus && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-faint)'
    }
  }, "\u2318K"));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
// A slider is an action → accent is --action-primary, never a status color.
function Slider({
  label,
  min = 0,
  max = 10,
  step = 0.1,
  value,
  onChange,
  showValue = true,
  style
}) {
  const v = value ?? max * 0.6;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      minWidth: 200,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, Number(v).toFixed(1))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      accentColor: 'var(--action-primary)',
      width: '100%',
      height: 4,
      cursor: 'pointer'
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
// On is an action state: --action-primary. One tone — two tones for one
// meaning is drift.
function Switch({
  checked = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 34,
      height: 19,
      borderRadius: 999,
      flex: 'none',
      cursor: 'pointer',
      background: checked ? 'var(--action-primary)' : 'rgba(33,33,33,0.18)',
      position: 'relative',
      display: 'inline-block',
      transition: 'background 0.18s ease-out',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 17 : 2,
      width: 15,
      height: 15,
      borderRadius: 999,
      background: '#fff',
      transition: 'left 0.18s ease-out'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      padding: '11px 14px',
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${focus ? 'var(--action-primary)' : 'var(--hairline)'}`,
      background: 'var(--app-bg)',
      color: 'var(--ink)',
      outline: 'none',
      resize: 'vertical',
      transition: 'border-color 0.15s ease-out'
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Logo.jsx
try { (() => {
// figma node: 1:3 logo
function Logo(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 179.511,
      height: 31.818,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32.626,
      height: 31.818,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 32.626,
    height: 31.818,
    viewBox: "0 0 32.626 31.818",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32.626,
      height: 31.818
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.626 15.91 C 32.626 24.696 25.321 31.818 16.311 31.818 C 7.303 31.818 0 24.696 0 15.91 C 0 7.123 7.303 0 16.311 0 C 25.321 0 32.626 7.123 32.626 15.91 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.24,
      top: 7.324,
      width: 26.145,
      height: 17.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 26.145,
    height: 17.170,
    viewBox: "0 0 26.145 17.170",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 26.145,
      height: 17.17,
      color: "rgb(5,7,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.131 6.669 C 26.131 6.274 26.055 5.824 25.777 5.513 C 25.687 5.413 25.594 5.326 25.498 5.255 L 25.496 5.253 L 25.492 5.249 C 25.448 5.211 25.401 5.181 25.351 5.149 C 25.046 4.95 24.7 4.863 24.28 4.863 L 23.005 4.863 C 22.298 4.863 21.91 4.415 21.91 3.614 C 21.91 3.157 21.901 2.701 21.891 2.243 C 21.878 1.688 21.986 1.033 21.517 0.619 C 21.216 0.351 20.806 0.245 20.42 0.147 C 19.696 -0.029 18.84 -0.104 18.152 0.252 C 17.551 0.57 17.131 1.277 16.389 1.292 C 15.559 1.308 13.909 1.323 13.909 1.323 L 6.92 1.323 C 6.481 1.323 6.025 1.294 5.603 1.421 C 4.642 1.713 4.499 2.769 4.499 3.613 C 4.499 4.415 4.085 4.867 3.337 4.867 L 1.98 4.867 C 1.564 4.867 1.146 4.933 0.796 5.149 C 0.744 5.181 0.696 5.21 0.653 5.249 C 0.648 5.249 0.645 5.255 0.645 5.255 C 0.551 5.326 0.458 5.413 0.368 5.513 C 0.089 5.824 0.012 6.274 0.01 6.669 C 0.006 6.948 0.006 7.232 0.006 7.51 C 0 8.072 0 8.634 0 9.195 L 0 9.292 C 0 9.72 0 10.146 0.004 10.58 C 0.004 11.005 0.006 11.43 0.01 11.853 C 0.01 12.508 0.356 13.168 0.989 13.442 C 1.166 13.521 1.343 13.564 1.524 13.589 C 1.53 13.589 1.54 13.591 1.55 13.591 C 1.598 13.599 1.646 13.605 1.689 13.607 C 1.785 13.622 1.884 13.626 1.98 13.626 L 3.204 13.626 C 3.869 13.651 4.235 14.103 4.235 14.876 C 4.235 15.342 4.213 15.829 4.429 16.254 C 4.565 16.516 4.744 16.756 4.983 16.941 C 5.257 17.149 5.548 17.17 5.882 17.17 L 6.28 17.17 C 6.863 17.17 7.882 17.17 7.882 17.17 C 7.892 17.17 7.892 17.17 7.904 17.17 C 7.904 17.17 17.756 17.17 17.768 17.17 L 19.861 17.17 C 20.548 17.17 21.105 16.929 21.435 16.258 C 21.668 15.781 21.608 15.216 21.652 14.705 C 21.684 14.336 21.821 13.954 22.175 13.768 C 22.356 13.671 22.601 13.626 22.808 13.626 L 22.941 13.626 L 24.163 13.626 C 24.262 13.626 24.36 13.619 24.455 13.607 C 24.503 13.605 24.551 13.599 24.597 13.592 C 24.786 13.566 24.975 13.525 25.156 13.442 C 25.761 13.178 26.103 12.565 26.129 11.934 C 26.129 11.903 26.131 11.876 26.131 11.849 C 26.139 11.001 26.145 10.145 26.145 9.296 L 26.145 9.198 C 26.145 8.354 26.139 7.512 26.131 6.669 Z M 22.378 7.991 L 22.378 10.432 L 22.378 11.87 C 22.378 12.976 21.459 13.873 20.322 13.873 L 5.822 13.873 C 4.688 13.873 3.766 12.976 3.766 11.87 L 3.766 10.432 L 3.766 7.991 L 3.766 6.555 C 3.766 5.449 4.688 4.553 5.822 4.553 L 20.322 4.553 C 21.459 4.553 22.378 5.449 22.378 6.555 L 22.378 7.991 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.795,
      top: 7.348,
      width: 12.555,
      height: 3.728,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.811,
    height: 3.728,
    viewBox: "0 0 3.811 3.728",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.743,
      top: 0,
      width: 3.811,
      height: 3.728,
      color: "rgb(5,7,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.849 C 0.002 0.827 0.864 -0.003 1.914 0 C 2.951 0.005 3.821 0.86 3.811 1.872 C 3.805 2.873 2.909 3.738 1.889 3.728 C 0.85 3.715 -0.004 2.867 0 1.849 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.813,
    height: 3.728,
    viewBox: "0 0 3.813 3.728",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.813,
      height: 3.728,
      color: "rgb(5,7,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.849 C 0.002 0.827 0.862 -0.003 1.914 0 C 2.951 0.005 3.821 0.86 3.813 1.872 C 3.807 2.873 2.909 3.738 1.89 3.728 C 0.849 3.715 -0.004 2.867 0 1.849 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.556,
    height: 3.470,
    viewBox: "0 0 3.556 3.470",
    fill: "none",
    style: {
      position: "absolute",
      left: 109.867,
      top: 18.835,
      width: 3.556,
      height: 3.47,
      color: "rgb(45,196,168)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.777 3.47 C 0.796 3.47 0 2.692 0 1.735 C 0 0.776 0.796 0 1.777 0 C 2.76 0 3.556 0.776 3.556 1.735 C 3.556 2.692 2.76 3.47 1.777 3.47 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.760,
    height: 13.591,
    viewBox: "0 0 11.760 13.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.971,
      top: 8.157,
      width: 11.76,
      height: 13.591,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.147 13.38 L 9.147 10.805 C 8.304 12.582 6.453 13.591 4.493 13.591 C 1.852 13.591 0 11.973 0 9.664 C 0 6.769 1.906 5.442 5.5 5.442 L 7.486 5.442 C 8.765 5.442 9.01 4.672 8.928 4.062 C 8.793 3.106 7.896 2.23 5.989 2.23 C 4.192 2.23 2.778 3.08 2.615 4.566 L 0.109 4.141 C 0.599 1.381 3.186 0 5.99 0 C 8.957 0 11.76 1.009 11.76 5.893 L 11.76 13.38 L 9.147 13.38 Z M 5.798 7.513 C 3.158 7.513 2.615 8.468 2.615 9.477 C 2.615 10.432 3.377 11.254 4.929 11.254 C 6.752 11.254 8.956 10.007 9.147 7.513 L 5.798 7.513 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.720,
    height: 21.982,
    viewBox: "0 0 13.720 21.982",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.902,
      top: 5.29,
      width: 13.72,
      height: 21.982,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.261 15.663 C 1.117 15.317 0.436 14.415 0.436 13.565 C 0.436 12.344 1.226 11.521 2.697 11.176 C 1.445 10.38 0.655 9.158 0.655 7.539 C 0.655 4.938 2.806 2.867 6.643 2.867 C 8.358 2.867 9.584 3.318 10.509 4.008 C 10.318 3.69 10.019 3.08 10.019 2.336 C 10.019 1.566 10.481 0 12.741 0 L 13.504 0 L 13.504 2.336 L 13.149 2.336 C 11.406 2.336 11.544 4.008 12.278 5.814 C 12.495 6.371 12.632 6.929 12.632 7.539 C 12.632 10.141 10.427 12.211 6.642 12.211 L 4.682 12.211 C 3.321 12.211 2.831 12.503 2.831 12.981 C 2.831 13.486 3.214 13.804 4.356 13.804 L 8.821 13.804 C 11.979 13.804 13.72 15.265 13.72 17.361 C 13.72 20.334 11.243 21.982 6.805 21.982 L 5.99 21.982 C 1.853 21.982 0 20.468 0 18.477 C 0 17.069 0.981 16.06 2.261 15.663 Z M 5.691 19.856 L 6.617 19.856 C 9.12 19.856 11.108 19.167 11.108 17.653 C 11.108 16.406 9.964 16.033 8.358 16.033 L 5.363 16.033 C 3.377 16.033 2.261 16.882 2.261 17.865 C 2.261 19.167 3.349 19.856 5.691 19.856 Z M 6.643 10.088 C 8.794 10.088 10.019 8.946 10.019 7.539 C 10.019 6.132 8.794 4.991 6.643 4.991 C 4.466 4.991 3.268 6.132 3.268 7.539 C 3.268 8.946 4.466 10.088 6.643 10.088 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.502,
    height: 13.591,
    viewBox: "0 0 13.502 13.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 70.49,
      top: 8.157,
      width: 13.502,
      height: 13.591,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.941 0 C 10.155 0 13.502 1.938 13.502 6.61 C 13.502 6.981 13.474 7.273 13.42 7.566 L 2.587 7.566 C 2.858 9.982 4.601 11.254 6.997 11.254 C 9.092 11.254 10.099 10.193 10.67 9.079 L 13.203 9.609 C 12.548 11.414 10.644 13.591 6.996 13.591 C 2.45 13.591 0 10.538 0 6.796 C 0 2.84 2.832 0 6.941 0 Z M 10.889 5.415 C 10.644 3.318 9.064 2.23 6.969 2.23 C 4.464 2.23 3.268 3.398 2.75 5.415 L 10.889 5.415 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.759,
    height: 13.380,
    viewBox: "0 0 11.759 13.380",
    fill: "none",
    style: {
      position: "absolute",
      left: 86.168,
      top: 8.157,
      width: 11.759,
      height: 13.38,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.38 L 0 0.213 L 2.613 0.213 L 2.613 2.097 C 3.347 0.929 4.79 0 6.643 0 C 9.2 0 11.759 1.327 11.759 5.893 L 11.759 13.38 L 9.146 13.38 L 9.146 6.132 C 9.146 3.053 7.594 2.23 5.988 2.23 C 4.247 2.23 2.613 3.239 2.613 6.025 L 2.613 13.38 L 0 13.38 L 0 13.38 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.276,
    height: 17.095,
    viewBox: "0 0 8.276 17.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 99.447,
      top: 4.547,
      width: 8.276,
      height: 17.095,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.053 L 0 3.823 L 1.524 3.823 C 2.368 3.823 2.832 3.372 2.832 2.549 L 2.832 0 L 5.228 0 L 5.228 3.823 L 8.276 3.823 L 8.276 6.053 L 5.228 6.053 L 5.228 12.397 C 5.228 14.706 7.022 15.103 8.276 14.574 L 8.276 16.911 C 7.95 17.016 7.376 17.095 6.915 17.095 C 4.219 17.095 2.613 15.663 2.613 12.397 L 2.613 6.053 L 0 6.053 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.202,
    height: 18.901,
    viewBox: "0 0 16.202 18.901",
    fill: "none",
    style: {
      position: "absolute",
      left: 114.631,
      top: 8.157,
      width: 16.202,
      height: 18.901,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.901 L 3.377 0.213 L 5.99 0.213 L 5.554 2.522 C 6.67 0.876 8.684 0 10.644 0 C 14.347 0 16.687 2.893 16.116 6.796 C 15.543 10.698 12.387 13.591 8.684 13.591 C 6.67 13.591 4.927 12.662 4.03 11.07 L 2.615 18.901 L 0 18.901 Z M 8.493 11.255 C 11.08 11.255 13.149 9.211 13.501 6.796 C 13.855 4.38 12.387 2.337 9.8 2.337 C 7.213 2.337 5.146 4.38 4.791 6.796 C 4.437 9.211 5.908 11.255 8.493 11.255 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.969,
    height: 13.379,
    viewBox: "0 0 6.969 13.379",
    fill: "none",
    style: {
      position: "absolute",
      left: 133.354,
      top: 8.157,
      width: 6.969,
      height: 13.379,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.969 2.655 C 4.573 2.097 2.613 3.424 2.613 6.238 L 2.613 13.379 L 0 13.379 L 0 0.212 L 2.613 0.212 L 2.613 2.628 C 3.267 0.956 4.547 0 6.397 0 C 6.589 0 6.833 0.026 6.969 0.053 L 6.969 2.655 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.501,
    height: 13.591,
    viewBox: "0 0 13.501 13.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 140.756,
      top: 8.157,
      width: 13.501,
      height: 13.591,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.94 0 C 10.154 0 13.501 1.938 13.501 6.61 C 13.501 6.981 13.474 7.273 13.42 7.566 L 2.587 7.566 C 2.857 9.982 4.601 11.254 6.997 11.254 C 9.092 11.254 10.099 10.193 10.67 9.079 L 13.203 9.609 C 12.548 11.414 10.644 13.591 6.997 13.591 C 2.449 13.591 0 10.538 0 6.796 C 0 2.84 2.831 0 6.94 0 Z M 10.889 5.415 C 10.644 3.318 9.064 2.23 6.968 2.23 C 4.463 2.23 3.267 3.398 2.75 5.415 L 10.889 5.415 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.888,
    height: 13.591,
    viewBox: "0 0 10.888 13.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 155.998,
      top: 8.157,
      width: 10.888,
      height: 13.591,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.505 8.734 C 2.531 9.982 3.349 11.362 5.526 11.362 C 7.213 11.362 8.276 10.75 8.276 9.716 C 8.276 8.495 7.213 8.177 4.573 7.698 C 1.552 7.141 0.436 5.681 0.436 3.902 C 0.436 1.858 2.34 0 5.526 0 C 8.493 0 10.481 1.513 10.67 3.982 L 8.167 4.433 C 8.085 3.424 7.351 2.23 5.445 2.23 C 3.811 2.23 3.049 2.999 3.049 3.77 C 3.049 4.698 3.729 5.15 5.934 5.522 C 9.174 6.079 10.888 7.167 10.888 9.53 C 10.888 12.291 8.465 13.591 5.526 13.591 C 2.286 13.591 0.135 12.025 0 9.184 L 2.505 8.734 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.888,
    height: 13.591,
    viewBox: "0 0 10.888 13.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 168.623,
      top: 8.157,
      width: 10.888,
      height: 13.591,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.505 8.734 C 2.533 9.982 3.349 11.362 5.526 11.362 C 7.215 11.362 8.276 10.75 8.276 9.716 C 8.276 8.495 7.215 8.177 4.575 7.698 C 1.552 7.141 0.436 5.681 0.436 3.902 C 0.436 1.858 2.342 0 5.526 0 C 8.495 0 10.481 1.513 10.671 3.982 L 8.166 4.433 C 8.085 3.424 7.35 2.23 5.444 2.23 C 3.812 2.23 3.05 2.999 3.05 3.77 C 3.05 4.698 3.731 5.15 5.936 5.522 C 9.175 6.079 10.888 7.167 10.888 9.53 C 10.888 12.291 8.467 13.591 5.526 13.591 C 2.288 13.591 0.137 12.025 0 9.184 L 2.505 8.734 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}
Object.assign(__ds_scope, { Logo, __ds_default_components_marketing_Logo_12oamgs: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Logo.jsx", error: String((e && e.message) || e) }); }

// components/marketing/icon-data-core.js
try { (() => {
// The 24 glyphs this design system's own components and screens render.
// The other 48 live in ./icon-data-extra.js, which nothing imports — so a
// consuming project only carries these. To use an extra glyph, register it first:
//   import { pick } from '<ds>/components/marketing/icon-data-extra.js';
//   import { registerIcons } from '<ds>/components/marketing/icon-data-core.js';
//   registerIcons(pick('SocialIconPlatformRedditStyleBrandState'));
// Register before first render — SocialIcon reads the registry synchronously.
const core = {
  "MaterialSymbolsLightCloudDone": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 8.35 11.308 L 13.308 6.35 L 12.588 5.63 L 8.344 9.875 L 6.206 7.737 L 5.492 8.45 L 8.35 11.308 Z M 4.5 14 C 3.253 14 2.191 13.565 1.315 12.694 C 0.438 11.825 0 10.766 0 9.517 C 0 8.371 0.392 7.354 1.175 6.466 C 1.958 5.578 2.932 5.101 4.096 5.035 C 4.321 3.578 4.991 2.375 6.106 1.425 C 7.221 0.475 8.519 0 10 0 C 11.668 0 13.085 0.583 14.251 1.749 C 15.417 2.915 16 4.332 16 6 L 16 7 L 16.616 7 C 17.573 7.031 18.377 7.382 19.026 8.055 C 19.675 8.728 20 9.543 20 10.5 C 20 11.481 19.662 12.309 18.986 12.986 C 18.309 13.662 17.48 14 16.5 14 L 4.5 14 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 2.000 5)\"/>"
  },
  "MenuProperty1Bold": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 14.19 0 L 5.81 0 C 2.17 0 0 2.17 0 5.81 L 0 14.18 C 0 17.83 2.17 20 5.81 20 L 14.18 20 C 17.82 20 19.99 17.83 19.99 14.19 L 19.99 5.81 C 20 2.17 17.83 0 14.19 0 Z M 15 15.25 L 5 15.25 C 4.59 15.25 4.25 14.91 4.25 14.5 C 4.25 14.09 4.59 13.75 5 13.75 L 15 13.75 C 15.41 13.75 15.75 14.09 15.75 14.5 C 15.75 14.91 15.41 15.25 15 15.25 Z M 15 10.75 L 5 10.75 C 4.59 10.75 4.25 10.41 4.25 10 C 4.25 9.59 4.59 9.25 5 9.25 L 15 9.25 C 15.41 9.25 15.75 9.59 15.75 10 C 15.75 10.41 15.41 10.75 15 10.75 Z M 15 6.25 L 5 6.25 C 4.59 6.25 4.25 5.91 4.25 5.5 C 4.25 5.09 4.59 4.75 5 4.75 L 15 4.75 C 15.41 4.75 15.75 5.09 15.75 5.5 C 15.75 5.91 15.41 6.25 15 6.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/>"
  },
  "MenuProperty1Broken": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 18 0.75 C 18.414 0.75 18.75 0.414 18.75 0 C 18.75 -0.414 18.414 -0.75 18 -0.75 L 18 0 L 18 0.75 Z M 0 0 L 0 0.75 L 18 0.75 L 18 0 L 18 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 7)\"/><path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 11.51 0.75 C 11.924 0.75 12.26 0.414 12.26 0 C 12.26 -0.414 11.924 -0.75 11.51 -0.75 L 11.51 0 L 11.51 0.75 Z M 0 0 L 0 0.75 L 11.51 0.75 L 11.51 0 L 11.51 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 9.490 12)\"/><path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 2.99 0.75 C 3.404 0.75 3.74 0.414 3.74 0 C 3.74 -0.414 3.404 -0.75 2.99 -0.75 L 2.99 0 L 2.99 0.75 Z M 0 0 L 0 0.75 L 2.99 0.75 L 2.99 0 L 2.99 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 12)\"/><path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 18 0.75 C 18.414 0.75 18.75 0.414 18.75 0 C 18.75 -0.414 18.414 -0.75 18 -0.75 L 18 0 L 18 0.75 Z M 0 0 L 0 0.75 L 18 0.75 L 18 0 L 18 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 17)\"/>"
  },
  "MenuProperty1Bulk": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 14.19 0 L 5.81 0 C 2.17 0 0 2.17 0 5.81 L 0 14.18 C 0 17.83 2.17 20 5.81 20 L 14.18 20 C 17.82 20 19.99 17.83 19.99 14.19 L 19.99 5.81 C 20 2.17 17.83 0 14.19 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 2)\"/><path d=\"M 10.75 1.5 L 0.75 1.5 C 0.34 1.5 0 1.16 0 0.75 C 0 0.34 0.34 0 0.75 0 L 10.75 0 C 11.16 0 11.5 0.34 11.5 0.75 C 11.5 1.16 11.16 1.5 10.75 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6.250 6.750)\"/><path d=\"M 10.75 1.5 L 0.75 1.5 C 0.34 1.5 0 1.16 0 0.75 C 0 0.34 0.34 0 0.75 0 L 10.75 0 C 11.16 0 11.5 0.34 11.5 0.75 C 11.5 1.16 11.16 1.5 10.75 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6.250 11.250)\"/><path d=\"M 10.75 1.5 L 0.75 1.5 C 0.34 1.5 0 1.16 0 0.75 C 0 0.34 0.34 0 0.75 0 L 10.75 0 C 11.16 0 11.5 0.34 11.5 0.75 C 11.5 1.16 11.16 1.5 10.75 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 6.250 15.750)\"/>"
  },
  "MenuProperty1Linear": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 18 0.75 C 18.414 0.75 18.75 0.414 18.75 0 C 18.75 -0.414 18.414 -0.75 18 -0.75 L 18 0 L 18 0.75 Z M 0 0 L 0 0.75 L 18 0.75 L 18 0 L 18 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 7)\"/><path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 18 0.75 C 18.414 0.75 18.75 0.414 18.75 0 C 18.75 -0.414 18.414 -0.75 18 -0.75 L 18 0 L 18 0.75 Z M 0 0 L 0 0.75 L 18 0.75 L 18 0 L 18 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 12)\"/><path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 18 0.75 C 18.414 0.75 18.75 0.414 18.75 0 C 18.75 -0.414 18.414 -0.75 18 -0.75 L 18 0 L 18 0.75 Z M 0 0 L 0 0.75 L 18 0.75 L 18 0 L 18 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 17)\"/>"
  },
  "MenuProperty1Outline": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 18.75 1.5 L 0.75 1.5 C 0.34 1.5 0 1.16 0 0.75 C 0 0.34 0.34 0 0.75 0 L 18.75 0 C 19.16 0 19.5 0.34 19.5 0.75 C 19.5 1.16 19.16 1.5 18.75 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.250 6.250)\"/><path d=\"M 18.75 1.5 L 0.75 1.5 C 0.34 1.5 0 1.16 0 0.75 C 0 0.34 0.34 0 0.75 0 L 18.75 0 C 19.16 0 19.5 0.34 19.5 0.75 C 19.5 1.16 19.16 1.5 18.75 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.250 11.250)\"/><path d=\"M 18.75 1.5 L 0.75 1.5 C 0.34 1.5 0 1.16 0 0.75 C 0 0.34 0.34 0 0.75 0 L 18.75 0 C 19.16 0 19.5 0.34 19.5 0.75 C 19.5 1.16 19.16 1.5 18.75 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.250 16.250)\"/>"
  },
  "MenuProperty1Twotone": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 18 0.75 C 18.414 0.75 18.75 0.414 18.75 0 C 18.75 -0.414 18.414 -0.75 18 -0.75 L 18 0 L 18 0.75 Z M 0 0 L 0 0.75 L 18 0.75 L 18 0 L 18 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 7)\"/><path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 18 0.75 C 18.414 0.75 18.75 0.414 18.75 0 C 18.75 -0.414 18.414 -0.75 18 -0.75 L 18 0 L 18 0.75 Z M 0 0 L 0 0.75 L 18 0.75 L 18 0 L 18 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 12)\"/><path d=\"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 18 0.75 C 18.414 0.75 18.75 0.414 18.75 0 C 18.75 -0.414 18.414 -0.75 18 -0.75 L 18 0 L 18 0.75 Z M 0 0 L 0 0.75 L 18 0.75 L 18 0 L 18 -0.75 L 0 -0.75 L 0 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 17)\"/>"
  },
  "SocialIconPlatformDiscordStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 1.224 0 C 0.54 0 0 0.6 0 1.332 C 0 2.064 0.552 2.664 1.224 2.664 C 1.908 2.664 2.448 2.064 2.448 1.332 C 2.46 0.6 1.908 0 1.224 0 Z M 5.604 0 C 4.92 0 4.38 0.6 4.38 1.332 C 4.38 2.064 4.932 2.664 5.604 2.664 C 6.288 2.664 6.828 2.064 6.828 1.332 C 6.828 0.6 6.288 0 5.604 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.560 0) matrix(1 0 0 1 7.104 10.068)\"/><path d=\"M 18.54 0 L 2.46 0 C 1.104 0 0 1.104 0 2.472 L 0 18.696 C 0 20.064 1.104 21.168 2.46 21.168 L 16.068 21.168 L 15.432 18.948 L 16.968 20.376 L 18.42 21.72 L 21 24 L 21 2.472 C 21 1.104 19.896 0 18.54 0 Z M 13.908 15.672 C 13.908 15.672 13.476 15.156 13.116 14.7 C 14.688 14.256 15.288 13.272 15.288 13.272 C 14.796 13.596 14.328 13.824 13.908 13.98 C 13.308 14.232 12.732 14.4 12.168 14.496 C 11.016 14.712 9.96 14.652 9.06 14.484 C 8.376 14.352 7.788 14.16 7.296 13.968 C 7.02 13.86 6.72 13.728 6.42 13.56 C 6.384 13.536 6.348 13.524 6.312 13.5 C 6.288 13.488 6.276 13.476 6.264 13.464 C 6.048 13.344 5.928 13.26 5.928 13.26 C 5.928 13.26 6.504 14.22 8.028 14.676 C 7.668 15.132 7.224 15.672 7.224 15.672 C 4.572 15.588 3.564 13.848 3.564 13.848 C 3.564 9.984 5.292 6.852 5.292 6.852 C 7.02 5.556 8.664 5.592 8.664 5.592 L 8.784 5.736 C 6.624 6.36 5.628 7.308 5.628 7.308 C 5.628 7.308 5.892 7.164 6.336 6.96 C 7.62 6.396 8.64 6.24 9.06 6.204 C 9.132 6.192 9.192 6.18 9.264 6.18 C 9.996 6.084 10.824 6.06 11.688 6.156 C 12.828 6.288 14.052 6.624 15.3 7.308 C 15.3 7.308 14.352 6.408 12.312 5.784 L 12.48 5.592 C 12.48 5.592 14.124 5.556 15.852 6.852 C 15.852 6.852 17.58 9.984 17.58 13.848 C 17.58 13.848 16.56 15.588 13.908 15.672 L 13.908 15.672 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.560 0)\"/>"
  },
  "SocialIconPlatformFacebookStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 17.989 4.388 22.954 10.125 23.854 L 10.125 15.469 L 7.078 15.469 L 7.078 12 L 10.125 12 L 10.125 9.356 C 10.125 6.349 11.917 4.688 14.658 4.688 C 15.97 4.688 17.344 4.922 17.344 4.922 L 17.344 7.875 L 15.831 7.875 C 14.34 7.875 13.875 8.8 13.875 9.75 L 13.875 12 L 17.203 12 L 16.671 15.469 L 13.875 15.469 L 13.875 23.854 C 19.612 22.954 24 17.989 24 12 Z\" fill=\"rgb(24,119,242)\" fill-rule=\"nonzero\"/><path d=\"M 9.593 10.781 L 10.125 7.313 L 6.797 7.313 L 6.797 5.063 C 6.797 4.114 7.262 3.188 8.753 3.188 L 10.266 3.188 L 10.266 0.234 C 10.266 0.234 8.892 0 7.579 0 C 4.838 0 3.047 1.661 3.047 4.669 L 3.047 7.313 L 0 7.313 L 0 10.781 L 3.047 10.781 L 3.047 19.167 C 4.289 19.361 5.554 19.361 6.797 19.167 L 6.797 10.781 L 9.593 10.781 Z\" fill=\"rgb(255,255,255)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 7.078 4.688)\"/>"
  },
  "SocialIconPlatformFigmaStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 4 8 C 6.208 8 8 6.208 8 4 L 8 0 L 4 0 C 1.792 0 0 1.792 0 4 C 0 6.208 1.792 8 4 8 Z\" fill=\"rgb(10,207,131)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 16)\"/><path d=\"M 0 4 C 0 1.792 1.792 0 4 0 L 8 0 L 8 8 L 4 8 C 1.792 8 0 6.208 0 4 Z\" fill=\"rgb(162,89,255)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 8)\"/><path d=\"M 0 4 C 0 1.792 1.792 0 4 0 L 8 0 L 8 8 L 4 8 C 1.792 8 0 6.208 0 4 Z\" fill=\"rgb(242,78,30)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4 0)\"/><path d=\"M 0 0 L 4 0 C 6.208 0 8 1.792 8 4 C 8 6.208 6.208 8 4 8 L 0 8 L 0 0 Z\" fill=\"rgb(255,114,98)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 12 0)\"/><path d=\"M 8 4 C 8 6.208 6.208 8 4 8 C 1.792 8 0 6.208 0 4 C 0 1.792 1.792 0 4 0 C 6.208 0 8 1.792 8 4 Z\" fill=\"rgb(26,188,254)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 12 8)\"/>"
  },
  "SocialIconPlatformGitHubStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 5.372 0 0 5.381 0 12.02 C 0 17.33 3.438 21.836 8.207 23.425 C 8.807 23.536 9.025 23.165 9.025 22.846 C 9.025 22.561 9.016 21.804 9.01 20.802 C 5.671 21.528 4.967 19.19 4.967 19.19 C 4.422 17.801 3.635 17.431 3.635 17.431 C 2.545 16.687 3.718 16.702 3.718 16.702 C 4.921 16.786 5.555 17.94 5.555 17.94 C 6.625 19.776 8.364 19.246 9.047 18.938 C 9.157 18.162 9.467 17.633 9.81 17.333 C 7.146 17.029 4.344 15.997 4.344 11.392 C 4.344 10.08 4.812 9.006 5.579 8.166 C 5.455 7.862 5.044 6.64 5.696 4.986 C 5.696 4.986 6.704 4.662 8.996 6.217 C 9.975 5.95 10.985 5.814 12 5.813 C 13.02 5.818 14.046 5.951 15.005 6.217 C 17.296 4.662 18.301 4.985 18.301 4.985 C 18.956 6.64 18.544 7.862 18.421 8.166 C 19.189 9.006 19.655 10.08 19.655 11.392 C 19.655 16.009 16.848 17.026 14.176 17.323 C 14.606 17.694 14.989 18.427 14.989 19.549 C 14.989 21.155 14.975 22.452 14.975 22.846 C 14.975 23.167 15.191 23.542 15.8 23.424 C 18.19 22.623 20.267 21.09 21.739 19.044 C 23.21 16.998 24.001 14.541 24 12.02 C 24 5.381 18.626 0 12 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"
  },
  "SocialIconPlatformGitHubStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 5.372 0 0 5.381 0 12.02 C 0 17.33 3.438 21.836 8.207 23.425 C 8.807 23.536 9.025 23.165 9.025 22.846 C 9.025 22.561 9.016 21.804 9.01 20.802 C 5.671 21.528 4.967 19.19 4.967 19.19 C 4.422 17.801 3.635 17.431 3.635 17.431 C 2.545 16.687 3.718 16.702 3.718 16.702 C 4.921 16.786 5.555 17.94 5.555 17.94 C 6.625 19.776 8.364 19.246 9.047 18.938 C 9.157 18.162 9.467 17.633 9.81 17.333 C 7.146 17.029 4.344 15.997 4.344 11.392 C 4.344 10.08 4.812 9.006 5.579 8.166 C 5.455 7.862 5.044 6.64 5.696 4.986 C 5.696 4.986 6.704 4.662 8.996 6.217 C 9.975 5.95 10.985 5.814 12 5.813 C 13.02 5.818 14.046 5.951 15.005 6.217 C 17.296 4.662 18.301 4.985 18.301 4.985 C 18.956 6.64 18.544 7.862 18.421 8.166 C 19.189 9.006 19.655 10.08 19.655 11.392 C 19.655 16.009 16.848 17.026 14.176 17.323 C 14.606 17.694 14.989 18.427 14.989 19.549 C 14.989 21.155 14.975 22.452 14.975 22.846 C 14.975 23.167 15.191 23.542 15.8 23.424 C 18.19 22.623 20.267 21.09 21.739 19.044 C 23.21 16.998 24.001 14.541 24 12.02 C 24 5.381 18.626 0 12 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"
  },
  "SocialIconPlatformGoogleStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 11.526 2.438 C 11.526 1.623 11.46 0.802 11.319 0 L 0 0 L 0 4.621 L 6.482 4.621 C 6.213 6.111 5.349 7.43 4.083 8.267 L 4.083 11.266 L 7.95 11.266 C 10.221 9.176 11.526 6.089 11.526 2.438 Z\" fill=\"rgb(66,133,244)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 12.240 9.838)\"/><path d=\"M 10.724 9.701 C 13.96 9.701 16.689 8.638 18.678 6.804 L 14.811 3.805 C 13.735 4.537 12.346 4.952 10.728 4.952 C 7.597 4.952 4.943 2.84 3.99 0 L 0 0 L 0 3.091 C 2.037 7.143 6.186 9.701 10.724 9.701 L 10.724 9.701 Z\" fill=\"rgb(52,168,83)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.516 14.300)\"/><path d=\"M 5.263 7.685 C 4.76 6.195 4.76 4.581 5.263 3.091 L 5.263 0 L 1.277 0 C -0.426 3.391 -0.426 7.386 1.277 10.776 L 5.263 7.685 L 5.263 7.685 Z\" fill=\"rgb(251,188,4)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.240 6.615)\"/><path d=\"M 10.723 4.75 C 12.434 4.723 14.088 5.367 15.327 6.549 L 18.753 3.123 C 16.584 1.086 13.704 -0.034 10.723 0.001 C 6.186 0.001 2.037 2.558 0 6.615 L 3.986 9.706 C 4.934 6.862 7.593 4.75 10.723 4.75 L 10.723 4.75 Z\" fill=\"rgb(234,67,53)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.516 0)\"/>"
  },
  "SocialIconPlatformInstagramStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 2.161 C 15.206 2.161 15.586 2.175 16.847 2.231 C 18.019 2.283 18.652 2.48 19.073 2.644 C 19.631 2.859 20.034 3.122 20.452 3.539 C 20.873 3.961 21.131 4.359 21.347 4.917 C 21.511 5.339 21.708 5.977 21.759 7.144 C 21.816 8.409 21.83 8.789 21.83 11.991 C 21.83 15.197 21.816 15.577 21.759 16.838 C 21.708 18.009 21.511 18.642 21.347 19.064 C 21.131 19.622 20.869 20.025 20.452 20.442 C 20.03 20.864 19.631 21.122 19.073 21.338 C 18.652 21.502 18.014 21.698 16.847 21.75 C 15.581 21.806 15.202 21.82 12 21.82 C 8.794 21.82 8.414 21.806 7.153 21.75 C 5.981 21.698 5.348 21.502 4.927 21.338 C 4.369 21.122 3.966 20.859 3.548 20.442 C 3.127 20.02 2.869 19.622 2.653 19.064 C 2.489 18.642 2.292 18.005 2.241 16.838 C 2.184 15.572 2.17 15.192 2.17 11.991 C 2.17 8.784 2.184 8.405 2.241 7.144 C 2.292 5.972 2.489 5.339 2.653 4.917 C 2.869 4.359 3.131 3.956 3.548 3.539 C 3.97 3.117 4.369 2.859 4.927 2.644 C 5.348 2.48 5.986 2.283 7.153 2.231 C 8.414 2.175 8.794 2.161 12 2.161 Z M 12 0 C 8.742 0 8.334 0.014 7.055 0.07 C 5.78 0.127 4.903 0.333 4.144 0.628 C 3.352 0.937 2.681 1.345 2.016 2.016 C 1.345 2.681 0.938 3.352 0.628 4.139 C 0.333 4.903 0.127 5.775 0.07 7.05 C 0.014 8.334 0 8.742 0 12 C 0 15.258 0.014 15.666 0.07 16.945 C 0.127 18.22 0.333 19.097 0.628 19.856 C 0.938 20.648 1.345 21.319 2.016 21.984 C 2.681 22.65 3.352 23.063 4.139 23.367 C 4.903 23.663 5.775 23.869 7.05 23.925 C 8.33 23.981 8.738 23.995 11.995 23.995 C 15.253 23.995 15.661 23.981 16.941 23.925 C 18.216 23.869 19.092 23.663 19.852 23.367 C 20.639 23.063 21.309 22.65 21.975 21.984 C 22.641 21.319 23.053 20.648 23.358 19.861 C 23.653 19.097 23.859 18.225 23.916 16.95 C 23.972 15.67 23.986 15.263 23.986 12.005 C 23.986 8.747 23.972 8.339 23.916 7.059 C 23.859 5.784 23.653 4.908 23.358 4.148 C 23.063 3.352 22.655 2.681 21.984 2.016 C 21.319 1.35 20.648 0.938 19.861 0.633 C 19.097 0.337 18.225 0.131 16.95 0.075 C 15.666 0.014 15.258 0 12 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 6.164 0 C 2.761 0 0 2.761 0 6.164 C 0 9.567 2.761 12.328 6.164 12.328 C 9.567 12.328 12.328 9.567 12.328 6.164 C 12.328 2.761 9.567 0 6.164 0 Z M 6.164 10.162 C 3.956 10.162 2.166 8.372 2.166 6.164 C 2.166 3.956 3.956 2.166 6.164 2.166 C 8.372 2.166 10.162 3.956 10.162 6.164 C 10.162 8.372 8.372 10.162 6.164 10.162 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5.836 5.836)\"/><path d=\"M 2.878 1.439 C 2.878 2.236 2.231 2.878 1.439 2.878 C 0.642 2.878 0 2.231 0 1.439 C 0 0.642 0.647 0 1.439 0 C 2.231 0 2.878 0.647 2.878 1.439 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 16.969 4.153)\"/>"
  },
  "SocialIconPlatformInstagramStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 2.161 C 15.206 2.161 15.586 2.175 16.847 2.231 C 18.019 2.283 18.652 2.48 19.073 2.644 C 19.631 2.859 20.034 3.122 20.452 3.539 C 20.873 3.961 21.131 4.359 21.347 4.917 C 21.511 5.339 21.708 5.977 21.759 7.144 C 21.816 8.409 21.83 8.789 21.83 11.991 C 21.83 15.197 21.816 15.577 21.759 16.838 C 21.708 18.009 21.511 18.642 21.347 19.064 C 21.131 19.622 20.869 20.025 20.452 20.442 C 20.03 20.864 19.631 21.122 19.073 21.338 C 18.652 21.502 18.014 21.698 16.847 21.75 C 15.581 21.806 15.202 21.82 12 21.82 C 8.794 21.82 8.414 21.806 7.153 21.75 C 5.981 21.698 5.348 21.502 4.927 21.338 C 4.369 21.122 3.966 20.859 3.548 20.442 C 3.127 20.02 2.869 19.622 2.653 19.064 C 2.489 18.642 2.292 18.005 2.241 16.838 C 2.184 15.572 2.17 15.192 2.17 11.991 C 2.17 8.784 2.184 8.405 2.241 7.144 C 2.292 5.972 2.489 5.339 2.653 4.917 C 2.869 4.359 3.131 3.956 3.548 3.539 C 3.97 3.117 4.369 2.859 4.927 2.644 C 5.348 2.48 5.986 2.283 7.153 2.231 C 8.414 2.175 8.794 2.161 12 2.161 Z M 12 0 C 8.742 0 8.334 0.014 7.055 0.07 C 5.78 0.127 4.903 0.333 4.144 0.628 C 3.352 0.937 2.681 1.345 2.016 2.016 C 1.345 2.681 0.938 3.352 0.628 4.139 C 0.333 4.903 0.127 5.775 0.07 7.05 C 0.014 8.334 0 8.742 0 12 C 0 15.258 0.014 15.666 0.07 16.945 C 0.127 18.22 0.333 19.097 0.628 19.856 C 0.938 20.648 1.345 21.319 2.016 21.984 C 2.681 22.65 3.352 23.063 4.139 23.367 C 4.903 23.663 5.775 23.869 7.05 23.925 C 8.33 23.981 8.738 23.995 11.995 23.995 C 15.253 23.995 15.661 23.981 16.941 23.925 C 18.216 23.869 19.092 23.663 19.852 23.367 C 20.639 23.063 21.309 22.65 21.975 21.984 C 22.641 21.319 23.053 20.648 23.358 19.861 C 23.653 19.097 23.859 18.225 23.916 16.95 C 23.972 15.67 23.986 15.263 23.986 12.005 C 23.986 8.747 23.972 8.339 23.916 7.059 C 23.859 5.784 23.653 4.908 23.358 4.148 C 23.063 3.352 22.655 2.681 21.984 2.016 C 21.319 1.35 20.648 0.938 19.861 0.633 C 19.097 0.337 18.225 0.131 16.95 0.075 C 15.666 0.014 15.258 0 12 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 6.164 0 C 2.761 0 0 2.761 0 6.164 C 0 9.567 2.761 12.328 6.164 12.328 C 9.567 12.328 12.328 9.567 12.328 6.164 C 12.328 2.761 9.567 0 6.164 0 Z M 6.164 10.162 C 3.956 10.162 2.166 8.372 2.166 6.164 C 2.166 3.956 3.956 2.166 6.164 2.166 C 8.372 2.166 10.162 3.956 10.162 6.164 C 10.162 8.372 8.372 10.162 6.164 10.162 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5.836 5.836)\"/><path d=\"M 2.878 1.439 C 2.878 2.236 2.231 2.878 1.439 2.878 C 0.642 2.878 0 2.231 0 1.439 C 0 0.642 0.647 0 1.439 0 C 2.231 0 2.878 0.647 2.878 1.439 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 16.969 4.153)\"/>"
  },
  "SocialIconPlatformLinkedInStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 22.228 0 L 1.772 0 C 1.302 0 0.851 0.187 0.519 0.519 C 0.187 0.851 0 1.302 0 1.772 L 0 22.228 C 0 22.698 0.187 23.149 0.519 23.481 C 0.851 23.813 1.302 24 1.772 24 L 22.228 24 C 22.698 24 23.149 23.813 23.481 23.481 C 23.813 23.149 24 22.698 24 22.228 L 24 1.772 C 24 1.302 23.813 0.851 23.481 0.519 C 23.149 0.187 22.698 0 22.228 0 Z M 7.153 20.445 L 3.545 20.445 L 3.545 8.983 L 7.153 8.983 L 7.153 20.445 Z M 5.347 7.395 C 4.937 7.393 4.538 7.269 4.199 7.04 C 3.86 6.811 3.596 6.487 3.441 6.108 C 3.286 5.729 3.247 5.313 3.328 4.911 C 3.409 4.51 3.608 4.142 3.898 3.854 C 4.189 3.565 4.558 3.369 4.959 3.29 C 5.361 3.212 5.777 3.254 6.155 3.411 C 6.533 3.568 6.856 3.834 7.082 4.175 C 7.309 4.515 7.43 4.916 7.43 5.325 C 7.434 5.599 7.383 5.871 7.279 6.125 C 7.176 6.379 7.022 6.609 6.828 6.802 C 6.633 6.995 6.402 7.147 6.147 7.249 C 5.893 7.351 5.621 7.401 5.347 7.395 Z M 20.453 20.455 L 16.847 20.455 L 16.847 14.193 C 16.847 12.347 16.062 11.777 15.048 11.777 C 13.978 11.777 12.928 12.583 12.928 14.24 L 12.928 20.455 L 9.32 20.455 L 9.32 8.992 L 12.79 8.992 L 12.79 10.58 L 12.837 10.58 C 13.185 9.875 14.405 8.67 16.267 8.67 C 18.28 8.67 20.455 9.865 20.455 13.365 L 20.453 20.455 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformLinkedInStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 22.223 0 L 1.772 0 C 0.792 0 0 0.773 0 1.73 L 0 22.266 C 0 23.222 0.792 24 1.772 24 L 22.223 24 C 23.203 24 24 23.222 24 22.27 L 24 1.73 C 24 0.773 23.203 0 22.223 0 Z M 7.12 20.452 L 3.558 20.452 L 3.558 8.995 L 7.12 8.995 L 7.12 20.452 Z M 5.339 7.434 C 4.195 7.434 3.272 6.511 3.272 5.372 C 3.272 4.233 4.195 3.309 5.339 3.309 C 6.478 3.309 7.402 4.233 7.402 5.372 C 7.402 6.506 6.478 7.434 5.339 7.434 Z M 20.452 20.452 L 16.894 20.452 L 16.894 14.883 C 16.894 13.556 16.87 11.845 15.042 11.845 C 13.191 11.845 12.909 13.294 12.909 14.789 L 12.909 20.452 L 9.356 20.452 L 9.356 8.995 L 12.769 8.995 L 12.769 10.561 L 12.816 10.561 C 13.289 9.661 14.452 8.709 16.181 8.709 C 19.786 8.709 20.452 11.081 20.452 14.166 L 20.452 20.452 L 20.452 20.452 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformTelegramStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 24 C 18.627 24 24 18.627 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 0.896 4.649 C 4.394 3.125 6.727 2.12 7.894 1.635 C 11.227 0.249 11.919 0.008 12.37 0 C 12.47 -0.002 12.692 0.023 12.835 0.14 C 12.957 0.238 12.99 0.371 13.006 0.465 C 13.022 0.558 13.042 0.771 13.026 0.937 C 12.846 2.834 12.064 7.439 11.667 9.564 C 11.498 10.464 11.167 10.765 10.847 10.795 C 10.15 10.859 9.621 10.334 8.946 9.892 C 7.889 9.199 7.293 8.768 6.268 8.093 C 5.083 7.312 5.851 6.883 6.526 6.182 C 6.703 5.998 9.773 3.205 9.833 2.952 C 9.84 2.92 9.847 2.802 9.777 2.74 C 9.707 2.677 9.603 2.699 9.528 2.716 C 9.422 2.74 7.735 3.855 4.467 6.061 C 3.988 6.39 3.554 6.55 3.165 6.542 C 2.737 6.533 1.913 6.3 1.3 6.101 C 0.548 5.856 -0.049 5.727 0.003 5.312 C 0.03 5.096 0.328 4.875 0.896 4.649 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 4.536 7.224)\"/>"
  },
  "SocialIconPlatformXTwitterStyleBrand": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 15.436 22 L 9.886 14.09 L 2.939 22 L 0 22 L 8.582 12.231 L 0 0 L 7.546 0 L 12.776 7.455 L 19.329 0 L 22.269 0 L 14.085 9.316 L 22.982 22 L 15.436 22 Z M 18.709 19.77 L 16.73 19.77 L 4.208 2.23 L 6.187 2.23 L 11.202 9.253 L 12.07 10.472 L 18.709 19.77 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.510 1)\"/>"
  },
  "SocialIconPlatformXTwitterStyleGray": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 15.436 22 L 9.886 14.09 L 2.939 22 L 0 22 L 8.582 12.231 L 0 0 L 7.546 0 L 12.776 7.455 L 19.329 0 L 22.269 0 L 14.085 9.316 L 22.982 22 L 15.436 22 Z M 18.709 19.77 L 16.73 19.77 L 4.208 2.23 L 6.187 2.23 L 11.202 9.253 L 12.07 10.472 L 18.709 19.77 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.510 1)\"/>"
  },
  "SocialIconPlatformYouTubeStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 23.498 2.64 C 23.362 2.129 23.095 1.663 22.723 1.289 C 22.35 0.914 21.886 0.644 21.376 0.505 C 19.5 0 12 0 12 0 C 12 0 4.5 0 2.624 0.505 C 2.114 0.644 1.65 0.914 1.277 1.289 C 0.905 1.663 0.638 2.129 0.502 2.64 C 0 4.525 0 8.455 0 8.455 C 0 8.455 0 12.385 0.502 14.269 C 0.638 14.78 0.905 15.246 1.277 15.62 C 1.65 15.995 2.114 16.266 2.624 16.405 C 4.5 16.909 12 16.909 12 16.909 C 12 16.909 19.5 16.909 21.376 16.405 C 21.886 16.266 22.35 15.995 22.723 15.62 C 23.095 15.246 23.362 14.78 23.498 14.269 C 24 12.385 24 8.455 24 8.455 C 24 8.455 24 4.525 23.498 2.64 Z\" fill=\"rgb(255,3,2)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.024 3.545)\"/><path d=\"M 0 7.137 L 0 0 L 6.273 3.569 L 0 7.137 Z\" fill=\"rgb(254,254,254)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 9.569 8.431)\"/>"
  },
  "SocialIconPlatformYouTubeStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 23.761 3.642 C 23.761 3.642 23.527 1.988 22.805 1.261 C 21.891 0.305 20.869 0.3 20.4 0.244 C 17.044 0 12.005 0 12.005 0 L 11.995 0 C 11.995 0 6.956 0 3.6 0.244 C 3.131 0.3 2.109 0.305 1.195 1.261 C 0.473 1.988 0.244 3.642 0.244 3.642 C 0.244 3.642 0 5.588 0 7.528 L 0 9.347 C 0 11.287 0.239 13.233 0.239 13.233 C 0.239 13.233 0.473 14.888 1.191 15.614 C 2.105 16.57 3.305 16.538 3.839 16.641 C 5.761 16.823 12 16.88 12 16.88 C 12 16.88 17.044 16.87 20.4 16.631 C 20.869 16.575 21.891 16.57 22.805 15.614 C 23.527 14.888 23.761 13.233 23.761 13.233 C 23.761 13.233 24 11.292 24 9.347 L 24 7.528 C 24 5.588 23.761 3.642 23.761 3.642 Z M 9.52 11.555 L 9.52 4.809 L 16.003 8.194 L 9.52 11.555 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 3.558)\"/>"
  },
  "SolarCopyrightOutline": {
    viewBox: "0 0 16 16",
    body: "<path d=\"M 0 7.167 C 0 3.209 3.209 0 7.167 0 C 11.125 0 14.333 3.209 14.333 7.167 C 14.333 11.125 11.125 14.333 7.167 14.333 C 3.209 14.333 0 11.125 0 7.167 Z M 7.167 1 C 5.531 1 3.963 1.65 2.806 2.806 C 1.65 3.963 1 5.531 1 7.167 C 1 8.802 1.65 10.371 2.806 11.527 C 3.963 12.684 5.531 13.333 7.167 13.333 C 8.802 13.333 10.371 12.684 11.527 11.527 C 12.684 10.371 13.333 8.802 13.333 7.167 C 13.333 5.531 12.684 3.963 11.527 2.806 C 10.371 1.65 8.802 1 7.167 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.833 0.833)\"/><path d=\"M 3.357 1 C 2.022 1 1 2.002 1 3.167 C 1 4.331 2.022 5.333 3.357 5.333 C 3.698 5.333 4.021 5.267 4.311 5.149 C 4.371 5.124 4.437 5.111 4.502 5.112 C 4.568 5.112 4.633 5.125 4.693 5.151 C 4.754 5.176 4.809 5.213 4.855 5.26 C 4.901 5.307 4.938 5.362 4.963 5.423 C 4.987 5.483 5 5.549 5 5.614 C 4.999 5.68 4.986 5.745 4.961 5.805 C 4.935 5.866 4.898 5.921 4.851 5.967 C 4.805 6.013 4.749 6.05 4.689 6.075 C 4.266 6.246 3.814 6.334 3.357 6.333 C 1.536 6.333 0 4.947 0 3.167 C 0 1.386 1.536 0 3.357 0 C 3.814 -0.001 4.266 0.087 4.689 0.259 C 4.812 0.309 4.91 0.406 4.961 0.528 C 5.013 0.65 5.013 0.788 4.963 0.911 C 4.913 1.034 4.816 1.132 4.694 1.183 C 4.572 1.235 4.434 1.235 4.311 1.185 C 4.008 1.063 3.684 1 3.357 1 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.833 0.833) matrix(1 0 0 1 4 4)\"/>"
  },
  "UPlus": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 15 7 L 9 7 L 9 1 C 9 0.735 8.895 0.48 8.707 0.293 C 8.52 0.105 8.265 0 8 0 C 7.735 0 7.48 0.105 7.293 0.293 C 7.105 0.48 7 0.735 7 1 L 7 7 L 1 7 C 0.735 7 0.48 7.105 0.293 7.293 C 0.105 7.48 0 7.735 0 8 C 0 8.265 0.105 8.52 0.293 8.707 C 0.48 8.895 0.735 9 1 9 L 7 9 L 7 15 C 7 15.265 7.105 15.52 7.293 15.707 C 7.48 15.895 7.735 16 8 16 C 8.265 16 8.52 15.895 8.707 15.707 C 8.895 15.52 9 15.265 9 15 L 9 9 L 15 9 C 15.265 9 15.52 8.895 15.707 8.707 C 15.895 8.52 16 8.265 16 8 C 16 7.735 15.895 7.48 15.707 7.293 C 15.52 7.105 15.265 7 15 7 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 4 4)\"/>"
  }
};
const registry = {
  ...core
};
function registerIcons(more) {
  Object.assign(registry, more);
  return registry;
}
const coreNames = Object.keys(core);
Object.assign(__ds_scope, { registerIcons, coreNames, registry, __ds_default_components_marketing_icon_data_core_axir2p: registry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/icon-data-core.js", error: String((e && e.message) || e) }); }

__ds_scope.__ds_default_components_marketing_icon_data_core_axir2p$1gpem0a = __ds_scope.__ds_default_components_marketing_icon_data_core_axir2p;

// components/marketing/SocialIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Marketing-site glyphs extracted from the Figma file: the "Social icon" family
// (21 platforms × Brand/Gray × states), the "menu" family (6 variants), and the
// misc marks (cloud-done, copyright, u:plus). The 24 glyphs used by this system ship
// in icon-data-core.js; the other 48 are opt-in from icon-data-extra.js via
// registerIcons(). NOT the app icon set — the app uses Tabler via components/brand/Icon.
function SocialIcon({
  name,
  size = 24,
  ...rest
}) {
  const d = __ds_scope.__ds_default_components_marketing_icon_data_core_axir2p$1gpem0a[name];
  // Unknown or not-yet-registered name: render nothing rather than an invalid element.
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { SocialIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SocialIcon.jsx", error: String((e && e.message) || e) }); }

// components/marketing/icon-data-extra.js
try { (() => {
// The long tail of the Figma glyph export (48 icons) — NOT imported by any
// component, so it stays out of every consumer's bundle. Opt in with registerIcons()
// from ./icon-data-core.js; see that file for the recipe.
const extra = {
  "SocialIconPlatformAngelListStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 14.109 10.097 C 14.658 8.569 16.238 4.148 16.238 2.733 C 16.238 1.486 15.502 0.441 14.189 0.441 C 12.098 0.441 10.223 6.614 9.638 8.086 C 9.183 6.75 7.055 0 5.18 0 C 3.722 0 3.038 1.073 3.038 2.423 C 3.038 4.078 4.641 8.367 5.222 10.017 C 4.927 9.909 4.608 9.816 4.284 9.816 C 3.188 9.816 2.02 11.18 2.02 12.281 C 2.02 12.698 2.25 13.284 2.395 13.673 C 0.666 14.142 0 15.295 0 17.034 C -0.005 20.419 3.202 24 7.711 24 C 13.242 24 16.683 19.847 16.683 14.489 C 16.683 12.469 16.359 10.645 14.109 10.097 L 14.109 10.097 Z M 12.45 5.063 C 12.638 4.486 13.439 2.048 14.189 2.048 C 14.592 2.048 14.7 2.466 14.7 2.798 C 14.7 3.694 12.891 8.639 12.492 9.736 L 10.898 9.455 L 12.45 5.063 L 12.45 5.063 Z M 4.509 2.264 C 4.509 1.706 5.189 0.122 6.68 4.472 L 8.302 9.173 C 7.57 9.113 7.003 9.033 6.642 9.239 C 6.131 7.889 4.509 3.628 4.509 2.264 L 4.509 2.264 Z M 4.402 11.438 C 5.775 11.438 7.547 15.872 7.547 16.472 C 7.547 16.711 7.317 17.006 7.05 17.006 C 6.07 17.006 3.445 13.402 3.445 12.427 C 3.45 12.066 4.041 11.438 4.402 11.438 L 4.402 11.438 Z M 13.041 20.17 C 11.677 21.67 9.933 22.448 7.898 22.448 C 5.114 22.448 2.916 20.92 1.856 18.309 C 1.055 16.275 2.034 15.108 2.822 15.108 C 3.356 15.108 5.367 17.934 5.367 18.534 C 5.367 18.764 5.006 18.923 4.819 18.923 C 4.064 18.923 3.769 18.197 2.423 16.514 C 1.031 17.906 3.384 20.588 5.156 20.588 C 6.38 20.588 7.177 19.453 6.938 18.619 C 7.111 18.619 7.327 18.633 7.486 18.591 C 7.538 19.861 7.913 21.375 9.441 21.483 C 9.441 21.441 9.534 21.15 9.534 21.136 C 9.534 20.32 9.038 19.608 9.038 18.778 C 9.038 17.452 10.055 16.167 11.086 15.417 C 11.461 15.136 11.916 14.962 12.356 14.803 C 12.811 14.63 13.294 14.428 13.641 14.081 C 13.589 13.556 13.373 13.092 12.848 13.092 C 11.55 13.092 7.195 13.28 7.195 11.231 C 7.195 10.917 7.2 10.617 8.011 10.617 C 9.525 10.617 13.369 10.992 14.494 11.981 C 15.342 12.736 15.633 17.287 13.041 20.17 L 13.041 20.17 Z M 8.419 14.264 C 8.873 14.409 9.342 14.452 9.811 14.545 C 9.464 14.798 9.155 15.108 8.859 15.441 C 8.728 15.042 8.569 14.653 8.419 14.264 L 8.419 14.264 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.661 0)\"/>"
  },
  "SocialIconPlatformAngelListStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 14.109 10.097 C 14.658 8.569 16.238 4.148 16.238 2.733 C 16.238 1.486 15.502 0.441 14.189 0.441 C 12.098 0.441 10.223 6.614 9.638 8.086 C 9.183 6.75 7.055 0 5.18 0 C 3.722 0 3.038 1.073 3.038 2.423 C 3.038 4.078 4.641 8.367 5.222 10.017 C 4.927 9.909 4.608 9.816 4.284 9.816 C 3.188 9.816 2.02 11.18 2.02 12.281 C 2.02 12.698 2.25 13.284 2.395 13.673 C 0.666 14.142 0 15.295 0 17.034 C -0.005 20.419 3.202 24 7.711 24 C 13.242 24 16.683 19.847 16.683 14.489 C 16.683 12.469 16.359 10.645 14.109 10.097 L 14.109 10.097 Z M 12.45 5.063 C 12.638 4.486 13.439 2.048 14.189 2.048 C 14.592 2.048 14.7 2.466 14.7 2.798 C 14.7 3.694 12.891 8.639 12.492 9.736 L 10.898 9.455 L 12.45 5.063 L 12.45 5.063 Z M 4.509 2.264 C 4.509 1.706 5.189 0.122 6.68 4.472 L 8.302 9.173 C 7.57 9.113 7.003 9.033 6.642 9.239 C 6.131 7.889 4.509 3.628 4.509 2.264 L 4.509 2.264 Z M 4.402 11.438 C 5.775 11.438 7.547 15.872 7.547 16.472 C 7.547 16.711 7.317 17.006 7.05 17.006 C 6.07 17.006 3.445 13.402 3.445 12.427 C 3.45 12.066 4.041 11.438 4.402 11.438 L 4.402 11.438 Z M 13.041 20.17 C 11.677 21.67 9.933 22.448 7.898 22.448 C 5.114 22.448 2.916 20.92 1.856 18.309 C 1.055 16.275 2.034 15.108 2.822 15.108 C 3.356 15.108 5.367 17.934 5.367 18.534 C 5.367 18.764 5.006 18.923 4.819 18.923 C 4.064 18.923 3.769 18.197 2.423 16.514 C 1.031 17.906 3.384 20.588 5.156 20.588 C 6.38 20.588 7.177 19.453 6.938 18.619 C 7.111 18.619 7.327 18.633 7.486 18.591 C 7.538 19.861 7.913 21.375 9.441 21.483 C 9.441 21.441 9.534 21.15 9.534 21.136 C 9.534 20.32 9.038 19.608 9.038 18.778 C 9.038 17.452 10.055 16.167 11.086 15.417 C 11.461 15.136 11.916 14.962 12.356 14.803 C 12.811 14.63 13.294 14.428 13.641 14.081 C 13.589 13.556 13.373 13.092 12.848 13.092 C 11.55 13.092 7.195 13.28 7.195 11.231 C 7.195 10.917 7.2 10.617 8.011 10.617 C 9.525 10.617 13.369 10.992 14.494 11.981 C 15.342 12.736 15.633 17.287 13.041 20.17 L 13.041 20.17 Z M 8.419 14.264 C 8.873 14.409 9.342 14.452 9.811 14.545 C 9.464 14.798 9.155 15.108 8.859 15.441 C 8.728 15.042 8.569 14.653 8.419 14.264 L 8.419 14.264 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.661 0)\"/>"
  },
  "SocialIconPlatformAngelListStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 14.109 10.097 C 14.658 8.569 16.238 4.148 16.238 2.733 C 16.238 1.486 15.502 0.441 14.189 0.441 C 12.098 0.441 10.223 6.614 9.638 8.086 C 9.183 6.75 7.055 0 5.18 0 C 3.722 0 3.038 1.073 3.038 2.423 C 3.038 4.078 4.641 8.367 5.222 10.017 C 4.927 9.909 4.608 9.816 4.284 9.816 C 3.188 9.816 2.02 11.18 2.02 12.281 C 2.02 12.698 2.25 13.284 2.395 13.673 C 0.666 14.142 0 15.295 0 17.034 C -0.005 20.419 3.202 24 7.711 24 C 13.242 24 16.683 19.847 16.683 14.489 C 16.683 12.469 16.359 10.645 14.109 10.097 L 14.109 10.097 Z M 12.45 5.063 C 12.638 4.486 13.439 2.048 14.189 2.048 C 14.592 2.048 14.7 2.466 14.7 2.798 C 14.7 3.694 12.891 8.639 12.492 9.736 L 10.898 9.455 L 12.45 5.063 L 12.45 5.063 Z M 4.509 2.264 C 4.509 1.706 5.189 0.122 6.68 4.472 L 8.302 9.173 C 7.57 9.113 7.003 9.033 6.642 9.239 C 6.131 7.889 4.509 3.628 4.509 2.264 L 4.509 2.264 Z M 4.402 11.438 C 5.775 11.438 7.547 15.872 7.547 16.472 C 7.547 16.711 7.317 17.006 7.05 17.006 C 6.07 17.006 3.445 13.402 3.445 12.427 C 3.45 12.066 4.041 11.438 4.402 11.438 L 4.402 11.438 Z M 13.041 20.17 C 11.677 21.67 9.933 22.448 7.898 22.448 C 5.114 22.448 2.916 20.92 1.856 18.309 C 1.055 16.275 2.034 15.108 2.822 15.108 C 3.356 15.108 5.367 17.934 5.367 18.534 C 5.367 18.764 5.006 18.923 4.819 18.923 C 4.064 18.923 3.769 18.197 2.423 16.514 C 1.031 17.906 3.384 20.588 5.156 20.588 C 6.38 20.588 7.177 19.453 6.938 18.619 C 7.111 18.619 7.327 18.633 7.486 18.591 C 7.538 19.861 7.913 21.375 9.441 21.483 C 9.441 21.441 9.534 21.15 9.534 21.136 C 9.534 20.32 9.038 19.608 9.038 18.778 C 9.038 17.452 10.055 16.167 11.086 15.417 C 11.461 15.136 11.916 14.962 12.356 14.803 C 12.811 14.63 13.294 14.428 13.641 14.081 C 13.589 13.556 13.373 13.092 12.848 13.092 C 11.55 13.092 7.195 13.28 7.195 11.231 C 7.195 10.917 7.2 10.617 8.011 10.617 C 9.525 10.617 13.369 10.992 14.494 11.981 C 15.342 12.736 15.633 17.287 13.041 20.17 L 13.041 20.17 Z M 8.419 14.264 C 8.873 14.409 9.342 14.452 9.811 14.545 C 9.464 14.798 9.155 15.108 8.859 15.441 C 8.728 15.042 8.569 14.653 8.419 14.264 L 8.419 14.264 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3.661 0)\"/>"
  },
  "SocialIconPlatformAppleStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 18.143 17.145 C 17.81 17.913 17.416 18.621 16.96 19.271 C 16.338 20.158 15.829 20.772 15.436 21.113 C 14.828 21.672 14.176 21.959 13.478 21.975 C 12.977 21.975 12.373 21.832 11.669 21.543 C 10.963 21.255 10.315 21.113 9.722 21.113 C 9.1 21.113 8.433 21.255 7.719 21.543 C 7.005 21.832 6.429 21.983 5.989 21.998 C 5.32 22.027 4.652 21.732 3.986 21.113 C 3.561 20.742 3.03 20.106 2.393 19.206 C 1.71 18.245 1.148 17.13 0.708 15.859 C 0.236 14.486 0 13.156 0 11.869 C 0 10.395 0.319 9.123 0.957 8.058 C 1.458 7.202 2.125 6.526 2.96 6.031 C 3.795 5.535 4.698 5.283 5.669 5.266 C 6.201 5.266 6.898 5.431 7.765 5.754 C 8.628 6.078 9.183 6.243 9.426 6.243 C 9.608 6.243 10.225 6.05 11.269 5.667 C 12.257 5.312 13.091 5.164 13.774 5.222 C 15.625 5.372 17.016 6.101 17.94 7.416 C 16.285 8.419 15.466 9.824 15.482 11.626 C 15.497 13.03 16.007 14.198 17.007 15.125 C 17.461 15.556 17.967 15.889 18.531 16.125 C 18.409 16.479 18.28 16.819 18.143 17.145 L 18.143 17.145 Z M 13.898 0.44 C 13.898 1.54 13.496 2.568 12.694 3.519 C 11.728 4.649 10.558 5.302 9.29 5.199 C 9.274 5.067 9.264 4.928 9.264 4.782 C 9.264 3.726 9.724 2.596 10.541 1.671 C 10.948 1.203 11.467 0.814 12.096 0.504 C 12.723 0.198 13.316 0.029 13.874 0 C 13.891 0.147 13.898 0.294 13.898 0.44 L 13.898 0.44 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.700 0.000)\"/>"
  },
  "SocialIconPlatformAppleStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 18.143 17.145 C 17.81 17.913 17.416 18.621 16.96 19.271 C 16.338 20.158 15.829 20.772 15.436 21.113 C 14.828 21.672 14.176 21.959 13.478 21.975 C 12.977 21.975 12.373 21.832 11.669 21.543 C 10.963 21.255 10.315 21.113 9.722 21.113 C 9.1 21.113 8.433 21.255 7.719 21.543 C 7.005 21.832 6.429 21.983 5.989 21.998 C 5.32 22.027 4.652 21.732 3.986 21.113 C 3.561 20.742 3.03 20.106 2.393 19.206 C 1.71 18.245 1.148 17.13 0.708 15.859 C 0.236 14.486 0 13.156 0 11.869 C 0 10.395 0.319 9.123 0.957 8.058 C 1.458 7.202 2.125 6.526 2.96 6.031 C 3.795 5.535 4.698 5.283 5.669 5.266 C 6.201 5.266 6.898 5.431 7.765 5.754 C 8.628 6.078 9.183 6.243 9.426 6.243 C 9.608 6.243 10.225 6.05 11.269 5.667 C 12.257 5.312 13.091 5.164 13.774 5.222 C 15.625 5.372 17.016 6.101 17.94 7.416 C 16.285 8.419 15.466 9.824 15.482 11.626 C 15.497 13.03 16.007 14.198 17.007 15.125 C 17.461 15.556 17.967 15.889 18.531 16.125 C 18.409 16.479 18.28 16.819 18.143 17.145 L 18.143 17.145 Z M 13.898 0.44 C 13.898 1.54 13.496 2.568 12.694 3.519 C 11.728 4.649 10.558 5.302 9.29 5.199 C 9.274 5.067 9.264 4.928 9.264 4.782 C 9.264 3.726 9.724 2.596 10.541 1.671 C 10.948 1.203 11.467 0.814 12.096 0.504 C 12.723 0.198 13.316 0.029 13.874 0 C 13.891 0.147 13.898 0.294 13.898 0.44 L 13.898 0.44 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.700 0.000)\"/>"
  },
  "SocialIconPlatformAppleStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 18.143 17.145 C 17.81 17.913 17.416 18.621 16.96 19.271 C 16.338 20.158 15.829 20.772 15.436 21.113 C 14.828 21.672 14.176 21.959 13.478 21.975 C 12.977 21.975 12.373 21.832 11.669 21.543 C 10.963 21.255 10.315 21.113 9.722 21.113 C 9.1 21.113 8.433 21.255 7.719 21.543 C 7.005 21.832 6.429 21.983 5.989 21.998 C 5.32 22.027 4.652 21.732 3.986 21.113 C 3.561 20.742 3.03 20.106 2.393 19.206 C 1.71 18.245 1.148 17.13 0.708 15.859 C 0.236 14.486 0 13.156 0 11.869 C 0 10.395 0.319 9.123 0.957 8.058 C 1.458 7.202 2.125 6.526 2.96 6.031 C 3.795 5.535 4.698 5.283 5.669 5.266 C 6.201 5.266 6.898 5.431 7.765 5.754 C 8.628 6.078 9.183 6.243 9.426 6.243 C 9.608 6.243 10.225 6.05 11.269 5.667 C 12.257 5.312 13.091 5.164 13.774 5.222 C 15.625 5.372 17.016 6.101 17.94 7.416 C 16.285 8.419 15.466 9.824 15.482 11.626 C 15.497 13.03 16.007 14.198 17.007 15.125 C 17.461 15.556 17.967 15.889 18.531 16.125 C 18.409 16.479 18.28 16.819 18.143 17.145 L 18.143 17.145 Z M 13.898 0.44 C 13.898 1.54 13.496 2.568 12.694 3.519 C 11.728 4.649 10.558 5.302 9.29 5.199 C 9.274 5.067 9.264 4.928 9.264 4.782 C 9.264 3.726 9.724 2.596 10.541 1.671 C 10.948 1.203 11.467 0.814 12.096 0.504 C 12.723 0.198 13.316 0.029 13.874 0 C 13.891 0.147 13.898 0.294 13.898 0.44 L 13.898 0.44 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.700 0.000)\"/>"
  },
  "SocialIconPlatformClubhouseStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 1.742 0 C 0.783 0 0 0.783 0 1.742 C 0 2.7 0.783 3.483 1.742 3.483 C 2.7 3.483 3.483 2.7 3.483 1.742 C 3.483 0.783 2.708 0 1.742 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 17.875)\"/><path d=\"M 22.792 0 L 11.825 3.5 L 11.825 0.042 L 0 3.817 L 0 13.842 L 10.2 10.583 L 10.2 14.025 L 23.608 9.75 L 19.975 6.2 L 22.792 0 Z M 10.2 8.867 L 1.633 11.6 L 1.633 5.008 L 10.2 2.275 L 10.2 8.867 Z M 20.575 9.008 L 11.825 11.8 L 11.825 5.217 L 19.883 2.642 L 18.033 6.542 L 20.575 9.008 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.392 2.667)\"/>"
  },
  "SocialIconPlatformClubhouseStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 1.742 0 C 0.783 0 0 0.783 0 1.742 C 0 2.7 0.783 3.483 1.742 3.483 C 2.7 3.483 3.483 2.7 3.483 1.742 C 3.483 0.783 2.708 0 1.742 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 17.875)\"/><path d=\"M 22.792 0 L 11.825 3.5 L 11.825 0.042 L 0 3.817 L 0 13.842 L 10.2 10.583 L 10.2 14.025 L 23.608 9.75 L 19.975 6.2 L 22.792 0 Z M 10.2 8.867 L 1.633 11.6 L 1.633 5.008 L 10.2 2.275 L 10.2 8.867 Z M 20.575 9.008 L 11.825 11.8 L 11.825 5.217 L 19.883 2.642 L 18.033 6.542 L 20.575 9.008 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.392 2.667)\"/>"
  },
  "SocialIconPlatformClubhouseStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 1.742 0 C 0.783 0 0 0.783 0 1.742 C 0 2.7 0.783 3.483 1.742 3.483 C 2.7 3.483 3.483 2.7 3.483 1.742 C 3.483 0.783 2.708 0 1.742 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 17.875)\"/><path d=\"M 22.792 0 L 11.825 3.5 L 11.825 0.042 L 0 3.817 L 0 13.842 L 10.2 10.583 L 10.2 14.025 L 23.608 9.75 L 19.975 6.2 L 22.792 0 Z M 10.2 8.867 L 1.633 11.6 L 1.633 5.008 L 10.2 2.275 L 10.2 8.867 Z M 20.575 9.008 L 11.825 11.8 L 11.825 5.217 L 19.883 2.642 L 18.033 6.542 L 20.575 9.008 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.392 2.667)\"/>"
  },
  "SocialIconPlatformDiscordStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 1.224 0 C 0.54 0 0 0.6 0 1.332 C 0 2.064 0.552 2.664 1.224 2.664 C 1.908 2.664 2.448 2.064 2.448 1.332 C 2.46 0.6 1.908 0 1.224 0 Z M 5.604 0 C 4.92 0 4.38 0.6 4.38 1.332 C 4.38 2.064 4.932 2.664 5.604 2.664 C 6.288 2.664 6.828 2.064 6.828 1.332 C 6.828 0.6 6.288 0 5.604 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.560 0) matrix(1 0 0 1 7.104 10.068)\"/><path d=\"M 18.54 0 L 2.46 0 C 1.104 0 0 1.104 0 2.472 L 0 18.696 C 0 20.064 1.104 21.168 2.46 21.168 L 16.068 21.168 L 15.432 18.948 L 16.968 20.376 L 18.42 21.72 L 21 24 L 21 2.472 C 21 1.104 19.896 0 18.54 0 Z M 13.908 15.672 C 13.908 15.672 13.476 15.156 13.116 14.7 C 14.688 14.256 15.288 13.272 15.288 13.272 C 14.796 13.596 14.328 13.824 13.908 13.98 C 13.308 14.232 12.732 14.4 12.168 14.496 C 11.016 14.712 9.96 14.652 9.06 14.484 C 8.376 14.352 7.788 14.16 7.296 13.968 C 7.02 13.86 6.72 13.728 6.42 13.56 C 6.384 13.536 6.348 13.524 6.312 13.5 C 6.288 13.488 6.276 13.476 6.264 13.464 C 6.048 13.344 5.928 13.26 5.928 13.26 C 5.928 13.26 6.504 14.22 8.028 14.676 C 7.668 15.132 7.224 15.672 7.224 15.672 C 4.572 15.588 3.564 13.848 3.564 13.848 C 3.564 9.984 5.292 6.852 5.292 6.852 C 7.02 5.556 8.664 5.592 8.664 5.592 L 8.784 5.736 C 6.624 6.36 5.628 7.308 5.628 7.308 C 5.628 7.308 5.892 7.164 6.336 6.96 C 7.62 6.396 8.64 6.24 9.06 6.204 C 9.132 6.192 9.192 6.18 9.264 6.18 C 9.996 6.084 10.824 6.06 11.688 6.156 C 12.828 6.288 14.052 6.624 15.3 7.308 C 15.3 7.308 14.352 6.408 12.312 5.784 L 12.48 5.592 C 12.48 5.592 14.124 5.556 15.852 6.852 C 15.852 6.852 17.58 9.984 17.58 13.848 C 17.58 13.848 16.56 15.588 13.908 15.672 L 13.908 15.672 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.560 0)\"/>"
  },
  "SocialIconPlatformDiscordStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 1.224 0 C 0.54 0 0 0.6 0 1.332 C 0 2.064 0.552 2.664 1.224 2.664 C 1.908 2.664 2.448 2.064 2.448 1.332 C 2.46 0.6 1.908 0 1.224 0 Z M 5.604 0 C 4.92 0 4.38 0.6 4.38 1.332 C 4.38 2.064 4.932 2.664 5.604 2.664 C 6.288 2.664 6.828 2.064 6.828 1.332 C 6.828 0.6 6.288 0 5.604 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.560 0) matrix(1 0 0 1 7.104 10.068)\"/><path d=\"M 18.54 0 L 2.46 0 C 1.104 0 0 1.104 0 2.472 L 0 18.696 C 0 20.064 1.104 21.168 2.46 21.168 L 16.068 21.168 L 15.432 18.948 L 16.968 20.376 L 18.42 21.72 L 21 24 L 21 2.472 C 21 1.104 19.896 0 18.54 0 Z M 13.908 15.672 C 13.908 15.672 13.476 15.156 13.116 14.7 C 14.688 14.256 15.288 13.272 15.288 13.272 C 14.796 13.596 14.328 13.824 13.908 13.98 C 13.308 14.232 12.732 14.4 12.168 14.496 C 11.016 14.712 9.96 14.652 9.06 14.484 C 8.376 14.352 7.788 14.16 7.296 13.968 C 7.02 13.86 6.72 13.728 6.42 13.56 C 6.384 13.536 6.348 13.524 6.312 13.5 C 6.288 13.488 6.276 13.476 6.264 13.464 C 6.048 13.344 5.928 13.26 5.928 13.26 C 5.928 13.26 6.504 14.22 8.028 14.676 C 7.668 15.132 7.224 15.672 7.224 15.672 C 4.572 15.588 3.564 13.848 3.564 13.848 C 3.564 9.984 5.292 6.852 5.292 6.852 C 7.02 5.556 8.664 5.592 8.664 5.592 L 8.784 5.736 C 6.624 6.36 5.628 7.308 5.628 7.308 C 5.628 7.308 5.892 7.164 6.336 6.96 C 7.62 6.396 8.64 6.24 9.06 6.204 C 9.132 6.192 9.192 6.18 9.264 6.18 C 9.996 6.084 10.824 6.06 11.688 6.156 C 12.828 6.288 14.052 6.624 15.3 7.308 C 15.3 7.308 14.352 6.408 12.312 5.784 L 12.48 5.592 C 12.48 5.592 14.124 5.556 15.852 6.852 C 15.852 6.852 17.58 9.984 17.58 13.848 C 17.58 13.848 16.56 15.588 13.908 15.672 L 13.908 15.672 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.560 0)\"/>"
  },
  "SocialIconPlatformDribbbleStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 11.625 23.25 C 18.045 23.25 23.25 18.045 23.25 11.625 C 23.25 5.205 18.045 0 11.625 0 C 5.205 0 0 5.205 0 11.625 C 0 18.045 5.205 23.25 11.625 23.25 Z\" fill=\"rgb(234,76,137)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.375 0.375)\"/><path d=\"M 12 0 C 5.375 0 0 5.375 0 12 C 0 18.625 5.375 24 12 24 C 18.612 24 24 18.625 24 12 C 24 5.375 18.612 0 12 0 Z M 19.926 5.531 C 21.358 7.275 22.217 9.501 22.243 11.909 C 21.905 11.844 18.521 11.154 15.111 11.584 C 15.033 11.414 14.967 11.232 14.889 11.05 C 14.681 10.555 14.447 10.048 14.213 9.566 C 17.987 8.03 19.705 5.818 19.926 5.531 Z M 12 1.77 C 14.603 1.77 16.985 2.746 18.794 4.347 C 18.612 4.607 17.063 6.677 13.419 8.043 C 11.74 4.959 9.879 2.434 9.592 2.043 C 10.36 1.861 11.167 1.77 12 1.77 Z M 7.64 2.733 C 7.913 3.098 9.735 5.636 11.44 8.655 C 6.651 9.931 2.421 9.905 1.965 9.905 C 2.629 6.729 4.777 4.087 7.64 2.733 Z M 1.744 12.013 C 1.744 11.909 1.744 11.805 1.744 11.701 C 2.187 11.714 7.158 11.779 12.273 10.243 C 12.573 10.816 12.846 11.401 13.106 11.987 C 12.976 12.026 12.833 12.065 12.703 12.104 C 7.419 13.809 4.607 18.469 4.373 18.859 C 2.746 17.05 1.744 14.642 1.744 12.013 Z M 12 22.256 C 9.631 22.256 7.445 21.449 5.714 20.095 C 5.896 19.718 7.978 15.709 13.757 13.692 C 13.783 13.679 13.796 13.679 13.822 13.666 C 15.267 17.401 15.853 20.538 16.009 21.436 C 14.772 21.97 13.419 22.256 12 22.256 Z M 17.714 20.499 C 17.61 19.874 17.063 16.881 15.722 13.197 C 18.937 12.69 21.748 13.523 22.1 13.64 C 21.657 16.49 20.017 18.95 17.714 20.499 Z\" fill=\"rgb(195,35,97)\" fill-rule=\"evenodd\"/>"
  },
  "SocialIconPlatformDribbbleStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 5.375 0 0 5.375 0 12 C 0 18.625 5.375 24 12 24 C 18.612 24 24 18.625 24 12 C 24 5.375 18.612 0 12 0 Z M 19.926 5.531 C 21.358 7.275 22.217 9.501 22.243 11.909 C 21.905 11.844 18.521 11.154 15.111 11.584 C 15.033 11.414 14.967 11.232 14.889 11.05 C 14.681 10.555 14.447 10.048 14.213 9.566 C 17.987 8.03 19.705 5.818 19.926 5.531 Z M 12 1.77 C 14.603 1.77 16.985 2.746 18.794 4.347 C 18.612 4.607 17.063 6.677 13.419 8.043 C 11.74 4.959 9.879 2.434 9.592 2.043 C 10.36 1.861 11.167 1.77 12 1.77 Z M 7.64 2.733 C 7.913 3.098 9.735 5.636 11.44 8.655 C 6.651 9.931 2.421 9.905 1.965 9.905 C 2.629 6.729 4.777 4.087 7.64 2.733 Z M 1.744 12.013 C 1.744 11.909 1.744 11.805 1.744 11.701 C 2.187 11.714 7.158 11.779 12.273 10.243 C 12.573 10.816 12.846 11.401 13.106 11.987 C 12.976 12.026 12.833 12.065 12.703 12.104 C 7.419 13.809 4.607 18.469 4.373 18.859 C 2.746 17.05 1.744 14.642 1.744 12.013 Z M 12 22.256 C 9.631 22.256 7.445 21.449 5.714 20.095 C 5.896 19.718 7.978 15.709 13.757 13.692 C 13.783 13.679 13.796 13.679 13.822 13.666 C 15.267 17.401 15.853 20.538 16.009 21.436 C 14.772 21.97 13.419 22.256 12 22.256 Z M 17.714 20.499 C 17.61 19.874 17.063 16.881 15.722 13.197 C 18.937 12.69 21.748 13.523 22.1 13.64 C 21.657 16.49 20.017 18.95 17.714 20.499 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"
  },
  "SocialIconPlatformDribbbleStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 5.375 0 0 5.375 0 12 C 0 18.625 5.375 24 12 24 C 18.612 24 24 18.625 24 12 C 24 5.375 18.612 0 12 0 Z M 19.926 5.531 C 21.358 7.275 22.217 9.501 22.243 11.909 C 21.905 11.844 18.521 11.154 15.111 11.584 C 15.033 11.414 14.967 11.232 14.889 11.05 C 14.681 10.555 14.447 10.048 14.213 9.566 C 17.987 8.03 19.705 5.818 19.926 5.531 Z M 12 1.77 C 14.603 1.77 16.985 2.746 18.794 4.347 C 18.612 4.607 17.063 6.677 13.419 8.043 C 11.74 4.959 9.879 2.434 9.592 2.043 C 10.36 1.861 11.167 1.77 12 1.77 Z M 7.64 2.733 C 7.913 3.098 9.735 5.636 11.44 8.655 C 6.651 9.931 2.421 9.905 1.965 9.905 C 2.629 6.729 4.777 4.087 7.64 2.733 Z M 1.744 12.013 C 1.744 11.909 1.744 11.805 1.744 11.701 C 2.187 11.714 7.158 11.779 12.273 10.243 C 12.573 10.816 12.846 11.401 13.106 11.987 C 12.976 12.026 12.833 12.065 12.703 12.104 C 7.419 13.809 4.607 18.469 4.373 18.859 C 2.746 17.05 1.744 14.642 1.744 12.013 Z M 12 22.256 C 9.631 22.256 7.445 21.449 5.714 20.095 C 5.896 19.718 7.978 15.709 13.757 13.692 C 13.783 13.679 13.796 13.679 13.822 13.666 C 15.267 17.401 15.853 20.538 16.009 21.436 C 14.772 21.97 13.419 22.256 12 22.256 Z M 17.714 20.499 C 17.61 19.874 17.063 16.881 15.722 13.197 C 18.937 12.69 21.748 13.523 22.1 13.64 C 21.657 16.49 20.017 18.95 17.714 20.499 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"
  },
  "SocialIconPlatformFacebookStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 17.989 4.388 22.954 10.125 23.854 L 10.125 15.469 L 7.078 15.469 L 7.078 12 L 10.125 12 L 10.125 9.356 C 10.125 6.349 11.917 4.688 14.658 4.688 C 15.97 4.688 17.344 4.922 17.344 4.922 L 17.344 7.875 L 15.831 7.875 C 14.34 7.875 13.875 8.8 13.875 9.75 L 13.875 12 L 17.203 12 L 16.671 15.469 L 13.875 15.469 L 13.875 23.854 C 19.612 22.954 24 17.989 24 12 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformFacebookStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 17.989 4.388 22.954 10.125 23.854 L 10.125 15.469 L 7.078 15.469 L 7.078 12 L 10.125 12 L 10.125 9.356 C 10.125 6.349 11.917 4.688 14.658 4.688 C 15.97 4.688 17.344 4.922 17.344 4.922 L 17.344 7.875 L 15.831 7.875 C 14.34 7.875 13.875 8.8 13.875 9.75 L 13.875 12 L 17.203 12 L 16.671 15.469 L 13.875 15.469 L 13.875 23.854 C 19.612 22.954 24 17.989 24 12 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformFigmaStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 4.75 2 C 4.013 2 3.312 2.286 2.797 2.789 C 2.284 3.291 2 3.967 2 4.667 C 2 5.367 2.284 6.042 2.797 6.544 C 3.312 7.047 4.013 7.333 4.75 7.333 L 7.5 7.333 L 7.5 2 L 4.75 2 Z M 9.5 2 L 9.5 7.333 L 12.25 7.333 C 12.614 7.333 12.974 7.263 13.31 7.127 C 13.645 6.992 13.948 6.793 14.202 6.544 C 14.457 6.296 14.657 6.002 14.794 5.68 C 14.93 5.358 15 5.014 15 4.667 C 15 4.32 14.93 3.975 14.794 3.654 C 14.657 3.332 14.457 3.038 14.202 2.789 C 13.948 2.54 13.645 2.342 13.31 2.206 C 12.974 2.07 12.614 2 12.25 2 L 9.5 2 Z M 15.188 8.333 C 15.332 8.222 15.47 8.102 15.601 7.974 C 16.043 7.542 16.395 7.028 16.635 6.46 C 16.876 5.892 17 5.283 17 4.667 C 17 4.051 16.876 3.441 16.635 2.873 C 16.395 2.306 16.043 1.791 15.601 1.359 C 15.159 0.927 14.635 0.585 14.06 0.352 C 13.486 0.12 12.871 0 12.25 0 L 4.75 0 C 3.497 0 2.292 0.486 1.399 1.359 C 0.506 2.232 0 3.422 0 4.667 C 0 5.912 0.506 7.101 1.399 7.974 C 1.53 8.102 1.668 8.222 1.812 8.333 C 1.668 8.444 1.53 8.564 1.399 8.692 C 0.506 9.566 0 10.755 0 12 C 0 13.245 0.506 14.434 1.399 15.308 C 1.53 15.436 1.668 15.556 1.812 15.667 C 1.668 15.778 1.53 15.898 1.399 16.026 C 0.506 16.899 0 18.088 0 19.333 C 0 20.578 0.506 21.768 1.399 22.641 C 2.292 23.514 3.497 24 4.75 24 C 6.003 24 7.208 23.514 8.101 22.641 C 8.994 21.768 9.5 20.578 9.5 19.333 L 9.5 15.805 C 9.792 16.009 10.107 16.18 10.439 16.314 C 11.014 16.547 11.629 16.667 12.25 16.667 C 12.871 16.667 13.486 16.547 14.06 16.314 C 14.635 16.082 15.159 15.74 15.601 15.308 C 16.043 14.875 16.395 14.361 16.635 13.793 C 16.876 13.225 17 12.616 17 12 C 17 11.384 16.876 10.775 16.635 10.207 C 16.395 9.639 16.043 9.125 15.601 8.692 C 15.47 8.565 15.332 8.445 15.188 8.333 Z M 7.5 14.667 L 7.5 9.333 L 4.75 9.333 C 4.013 9.333 3.312 9.62 2.797 10.122 C 2.284 10.624 2 11.3 2 12 C 2 12.7 2.284 13.376 2.797 13.878 C 3.312 14.38 4.013 14.667 4.75 14.667 L 7.5 14.667 Z M 7.5 16.667 L 4.75 16.667 C 4.013 16.667 3.312 16.953 2.797 17.456 C 2.284 17.958 2 18.633 2 19.333 C 2 20.033 2.284 20.709 2.797 21.211 C 3.312 21.714 4.013 22 4.75 22 C 5.487 22 6.188 21.714 6.703 21.211 C 7.216 20.709 7.5 20.033 7.5 19.333 L 7.5 16.667 Z M 12.25 9.333 C 11.886 9.333 11.526 9.404 11.19 9.539 C 10.855 9.675 10.552 9.874 10.297 10.122 C 10.043 10.371 9.843 10.665 9.706 10.987 C 9.57 11.309 9.5 11.653 9.5 12 C 9.5 12.347 9.57 12.691 9.706 13.013 C 9.843 13.335 10.043 13.629 10.297 13.878 C 10.552 14.126 10.855 14.325 11.19 14.461 C 11.526 14.597 11.886 14.667 12.25 14.667 C 12.614 14.667 12.974 14.597 13.31 14.461 C 13.645 14.325 13.948 14.126 14.202 13.878 C 14.457 13.629 14.657 13.335 14.794 13.013 C 14.93 12.691 15 12.347 15 12 C 15 11.653 14.93 11.309 14.794 10.987 C 14.657 10.665 14.457 10.371 14.202 10.122 C 13.948 9.874 13.645 9.675 13.31 9.539 C 12.974 9.404 12.614 9.333 12.25 9.333 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.500 0)\"/>"
  },
  "SocialIconPlatformFigmaStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 4.75 2 C 4.013 2 3.312 2.286 2.797 2.789 C 2.284 3.291 2 3.967 2 4.667 C 2 5.367 2.284 6.042 2.797 6.544 C 3.312 7.047 4.013 7.333 4.75 7.333 L 7.5 7.333 L 7.5 2 L 4.75 2 Z M 9.5 2 L 9.5 7.333 L 12.25 7.333 C 12.614 7.333 12.974 7.263 13.31 7.127 C 13.645 6.992 13.948 6.793 14.202 6.544 C 14.457 6.296 14.657 6.002 14.794 5.68 C 14.93 5.358 15 5.014 15 4.667 C 15 4.32 14.93 3.975 14.794 3.654 C 14.657 3.332 14.457 3.038 14.202 2.789 C 13.948 2.54 13.645 2.342 13.31 2.206 C 12.974 2.07 12.614 2 12.25 2 L 9.5 2 Z M 15.188 8.333 C 15.332 8.222 15.47 8.102 15.601 7.974 C 16.043 7.542 16.395 7.028 16.635 6.46 C 16.876 5.892 17 5.283 17 4.667 C 17 4.051 16.876 3.441 16.635 2.873 C 16.395 2.306 16.043 1.791 15.601 1.359 C 15.159 0.927 14.635 0.585 14.06 0.352 C 13.486 0.12 12.871 0 12.25 0 L 4.75 0 C 3.497 0 2.292 0.486 1.399 1.359 C 0.506 2.232 0 3.422 0 4.667 C 0 5.912 0.506 7.101 1.399 7.974 C 1.53 8.102 1.668 8.222 1.812 8.333 C 1.668 8.444 1.53 8.564 1.399 8.692 C 0.506 9.566 0 10.755 0 12 C 0 13.245 0.506 14.434 1.399 15.308 C 1.53 15.436 1.668 15.556 1.812 15.667 C 1.668 15.778 1.53 15.898 1.399 16.026 C 0.506 16.899 0 18.088 0 19.333 C 0 20.578 0.506 21.768 1.399 22.641 C 2.292 23.514 3.497 24 4.75 24 C 6.003 24 7.208 23.514 8.101 22.641 C 8.994 21.768 9.5 20.578 9.5 19.333 L 9.5 15.805 C 9.792 16.009 10.107 16.18 10.439 16.314 C 11.014 16.547 11.629 16.667 12.25 16.667 C 12.871 16.667 13.486 16.547 14.06 16.314 C 14.635 16.082 15.159 15.74 15.601 15.308 C 16.043 14.875 16.395 14.361 16.635 13.793 C 16.876 13.225 17 12.616 17 12 C 17 11.384 16.876 10.775 16.635 10.207 C 16.395 9.639 16.043 9.125 15.601 8.692 C 15.47 8.565 15.332 8.445 15.188 8.333 Z M 7.5 14.667 L 7.5 9.333 L 4.75 9.333 C 4.013 9.333 3.312 9.62 2.797 10.122 C 2.284 10.624 2 11.3 2 12 C 2 12.7 2.284 13.376 2.797 13.878 C 3.312 14.38 4.013 14.667 4.75 14.667 L 7.5 14.667 Z M 7.5 16.667 L 4.75 16.667 C 4.013 16.667 3.312 16.953 2.797 17.456 C 2.284 17.958 2 18.633 2 19.333 C 2 20.033 2.284 20.709 2.797 21.211 C 3.312 21.714 4.013 22 4.75 22 C 5.487 22 6.188 21.714 6.703 21.211 C 7.216 20.709 7.5 20.033 7.5 19.333 L 7.5 16.667 Z M 12.25 9.333 C 11.886 9.333 11.526 9.404 11.19 9.539 C 10.855 9.675 10.552 9.874 10.297 10.122 C 10.043 10.371 9.843 10.665 9.706 10.987 C 9.57 11.309 9.5 11.653 9.5 12 C 9.5 12.347 9.57 12.691 9.706 13.013 C 9.843 13.335 10.043 13.629 10.297 13.878 C 10.552 14.126 10.855 14.325 11.19 14.461 C 11.526 14.597 11.886 14.667 12.25 14.667 C 12.614 14.667 12.974 14.597 13.31 14.461 C 13.645 14.325 13.948 14.126 14.202 13.878 C 14.457 13.629 14.657 13.335 14.794 13.013 C 14.93 12.691 15 12.347 15 12 C 15 11.653 14.93 11.309 14.794 10.987 C 14.657 10.665 14.457 10.371 14.202 10.122 C 13.948 9.874 13.645 9.675 13.31 9.539 C 12.974 9.404 12.614 9.333 12.25 9.333 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 3.500 0)\"/>"
  },
  "SocialIconPlatformGitHubStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 5.372 0 0 5.381 0 12.02 C 0 17.33 3.438 21.836 8.207 23.425 C 8.807 23.536 9.025 23.165 9.025 22.846 C 9.025 22.561 9.016 21.804 9.01 20.802 C 5.671 21.528 4.967 19.19 4.967 19.19 C 4.422 17.801 3.635 17.431 3.635 17.431 C 2.545 16.687 3.718 16.702 3.718 16.702 C 4.921 16.786 5.555 17.94 5.555 17.94 C 6.625 19.776 8.364 19.246 9.047 18.938 C 9.157 18.162 9.467 17.633 9.81 17.333 C 7.146 17.029 4.344 15.997 4.344 11.392 C 4.344 10.08 4.812 9.006 5.579 8.166 C 5.455 7.862 5.044 6.64 5.696 4.986 C 5.696 4.986 6.704 4.662 8.996 6.217 C 9.975 5.95 10.985 5.814 12 5.813 C 13.02 5.818 14.046 5.951 15.005 6.217 C 17.296 4.662 18.301 4.985 18.301 4.985 C 18.956 6.64 18.544 7.862 18.421 8.166 C 19.189 9.006 19.655 10.08 19.655 11.392 C 19.655 16.009 16.848 17.026 14.176 17.323 C 14.606 17.694 14.989 18.427 14.989 19.549 C 14.989 21.155 14.975 22.452 14.975 22.846 C 14.975 23.167 15.191 23.542 15.8 23.424 C 18.19 22.623 20.267 21.09 21.739 19.044 C 23.21 16.998 24.001 14.541 24 12.02 C 24 5.381 18.626 0 12 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"
  },
  "SocialIconPlatformGoogleStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 16.603 6.549 C 15.364 5.367 13.711 4.723 12 4.75 C 8.869 4.75 6.211 6.862 5.263 9.706 L 5.263 9.706 C 4.76 11.196 4.76 12.81 5.263 14.3 L 5.267 14.3 C 6.219 17.14 8.874 19.252 12.004 19.252 C 13.62 19.252 15.008 18.839 16.083 18.109 L 16.083 18.106 C 17.349 17.268 18.213 15.949 18.482 14.459 L 12 14.459 L 12 9.838 L 23.319 9.838 C 23.46 10.641 23.526 11.461 23.526 12.276 C 23.526 15.926 22.222 19.012 19.952 21.102 L 19.954 21.104 C 17.966 22.938 15.236 24.001 12 24.001 C 7.463 24.001 3.314 21.443 1.276 17.391 L 1.276 17.391 C -0.426 14 -0.425 10.006 1.277 6.615 L 1.277 6.615 L 1.276 6.615 C 3.314 2.558 7.463 0.001 12 0.001 C 14.981 -0.034 17.86 1.086 20.029 3.123 L 16.603 6.549 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.239 -0.001)\"/>"
  },
  "SocialIconPlatformGoogleStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 16.603 6.549 C 15.364 5.367 13.711 4.723 12 4.75 C 8.869 4.75 6.211 6.862 5.263 9.706 L 5.263 9.706 C 4.76 11.196 4.76 12.81 5.263 14.3 L 5.267 14.3 C 6.219 17.14 8.874 19.252 12.004 19.252 C 13.62 19.252 15.008 18.839 16.083 18.109 L 16.083 18.106 C 17.349 17.268 18.213 15.949 18.482 14.459 L 12 14.459 L 12 9.838 L 23.319 9.838 C 23.46 10.641 23.526 11.461 23.526 12.276 C 23.526 15.926 22.222 19.012 19.952 21.102 L 19.954 21.104 C 17.966 22.938 15.236 24.001 12 24.001 C 7.463 24.001 3.314 21.443 1.276 17.391 L 1.276 17.391 C -0.426 14 -0.425 10.006 1.277 6.615 L 1.277 6.615 L 1.276 6.615 C 3.314 2.558 7.463 0.001 12 0.001 C 14.981 -0.034 17.86 1.086 20.029 3.123 L 16.603 6.549 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.239 -0.001)\"/>"
  },
  "SocialIconPlatformInstagramStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 2.161 C 15.206 2.161 15.586 2.175 16.847 2.231 C 18.019 2.283 18.652 2.48 19.073 2.644 C 19.631 2.859 20.034 3.122 20.452 3.539 C 20.873 3.961 21.131 4.359 21.347 4.917 C 21.511 5.339 21.708 5.977 21.759 7.144 C 21.816 8.409 21.83 8.789 21.83 11.991 C 21.83 15.197 21.816 15.577 21.759 16.838 C 21.708 18.009 21.511 18.642 21.347 19.064 C 21.131 19.622 20.869 20.025 20.452 20.442 C 20.03 20.864 19.631 21.122 19.073 21.338 C 18.652 21.502 18.014 21.698 16.847 21.75 C 15.581 21.806 15.202 21.82 12 21.82 C 8.794 21.82 8.414 21.806 7.153 21.75 C 5.981 21.698 5.348 21.502 4.927 21.338 C 4.369 21.122 3.966 20.859 3.548 20.442 C 3.127 20.02 2.869 19.622 2.653 19.064 C 2.489 18.642 2.292 18.005 2.241 16.838 C 2.184 15.572 2.17 15.192 2.17 11.991 C 2.17 8.784 2.184 8.405 2.241 7.144 C 2.292 5.972 2.489 5.339 2.653 4.917 C 2.869 4.359 3.131 3.956 3.548 3.539 C 3.97 3.117 4.369 2.859 4.927 2.644 C 5.348 2.48 5.986 2.283 7.153 2.231 C 8.414 2.175 8.794 2.161 12 2.161 Z M 12 0 C 8.742 0 8.334 0.014 7.055 0.07 C 5.78 0.127 4.903 0.333 4.144 0.628 C 3.352 0.937 2.681 1.345 2.016 2.016 C 1.345 2.681 0.938 3.352 0.628 4.139 C 0.333 4.903 0.127 5.775 0.07 7.05 C 0.014 8.334 0 8.742 0 12 C 0 15.258 0.014 15.666 0.07 16.945 C 0.127 18.22 0.333 19.097 0.628 19.856 C 0.938 20.648 1.345 21.319 2.016 21.984 C 2.681 22.65 3.352 23.063 4.139 23.367 C 4.903 23.663 5.775 23.869 7.05 23.925 C 8.33 23.981 8.738 23.995 11.995 23.995 C 15.253 23.995 15.661 23.981 16.941 23.925 C 18.216 23.869 19.092 23.663 19.852 23.367 C 20.639 23.063 21.309 22.65 21.975 21.984 C 22.641 21.319 23.053 20.648 23.358 19.861 C 23.653 19.097 23.859 18.225 23.916 16.95 C 23.972 15.67 23.986 15.263 23.986 12.005 C 23.986 8.747 23.972 8.339 23.916 7.059 C 23.859 5.784 23.653 4.908 23.358 4.148 C 23.063 3.352 22.655 2.681 21.984 2.016 C 21.319 1.35 20.648 0.938 19.861 0.633 C 19.097 0.337 18.225 0.131 16.95 0.075 C 15.666 0.014 15.258 0 12 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/><path d=\"M 6.164 0 C 2.761 0 0 2.761 0 6.164 C 0 9.567 2.761 12.328 6.164 12.328 C 9.567 12.328 12.328 9.567 12.328 6.164 C 12.328 2.761 9.567 0 6.164 0 Z M 6.164 10.162 C 3.956 10.162 2.166 8.372 2.166 6.164 C 2.166 3.956 3.956 2.166 6.164 2.166 C 8.372 2.166 10.162 3.956 10.162 6.164 C 10.162 8.372 8.372 10.162 6.164 10.162 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5.836 5.836)\"/><path d=\"M 2.878 1.439 C 2.878 2.236 2.231 2.878 1.439 2.878 C 0.642 2.878 0 2.231 0 1.439 C 0 0.642 0.647 0 1.439 0 C 2.231 0 2.878 0.647 2.878 1.439 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 16.969 4.153)\"/>"
  },
  "SocialIconPlatformLinkedInStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 22.223 0 L 1.772 0 C 0.792 0 0 0.773 0 1.73 L 0 22.266 C 0 23.222 0.792 24 1.772 24 L 22.223 24 C 23.203 24 24 23.222 24 22.27 L 24 1.73 C 24 0.773 23.203 0 22.223 0 Z M 7.12 20.452 L 3.558 20.452 L 3.558 8.995 L 7.12 8.995 L 7.12 20.452 Z M 5.339 7.434 C 4.195 7.434 3.272 6.511 3.272 5.372 C 3.272 4.233 4.195 3.309 5.339 3.309 C 6.478 3.309 7.402 4.233 7.402 5.372 C 7.402 6.506 6.478 7.434 5.339 7.434 Z M 20.452 20.452 L 16.894 20.452 L 16.894 14.883 C 16.894 13.556 16.87 11.845 15.042 11.845 C 13.191 11.845 12.909 13.294 12.909 14.789 L 12.909 20.452 L 9.356 20.452 L 9.356 8.995 L 12.769 8.995 L 12.769 10.561 L 12.816 10.561 C 13.289 9.661 14.452 8.709 16.181 8.709 C 19.786 8.709 20.452 11.081 20.452 14.166 L 20.452 20.452 L 20.452 20.452 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformPinterestStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 24 C 18.627 24 24 18.627 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 Z\" fill=\"rgb(255,255,255)\" fill-rule=\"nonzero\"/><path d=\"M 12 0 C 5.373 0 0 5.373 0 12 C 0 17.086 3.16 21.432 7.625 23.18 C 7.516 22.232 7.427 20.77 7.664 19.733 C 7.881 18.795 9.067 13.768 9.067 13.768 C 9.067 13.768 8.711 13.047 8.711 11.99 C 8.711 10.321 9.679 9.077 10.884 9.077 C 11.911 9.077 12.405 9.847 12.405 10.765 C 12.405 11.793 11.753 13.333 11.407 14.765 C 11.121 15.96 12.01 16.938 13.185 16.938 C 15.319 16.938 16.958 14.686 16.958 11.447 C 16.958 8.573 14.894 6.568 11.941 6.568 C 8.523 6.568 6.519 9.126 6.519 11.773 C 6.519 12.8 6.914 13.906 7.407 14.509 C 7.506 14.627 7.516 14.736 7.486 14.854 C 7.398 15.23 7.19 16.049 7.151 16.217 C 7.101 16.435 6.973 16.484 6.746 16.375 C 5.244 15.674 4.306 13.491 4.306 11.723 C 4.306 7.941 7.052 4.464 12.237 4.464 C 16.395 4.464 19.635 7.427 19.635 11.398 C 19.635 15.536 17.027 18.864 13.412 18.864 C 12.198 18.864 11.052 18.232 10.667 17.481 C 10.667 17.481 10.064 19.773 9.916 20.336 C 9.649 21.383 8.919 22.686 8.425 23.486 C 9.551 23.832 10.736 24.02 11.98 24.02 C 18.607 24.02 23.98 18.647 23.98 12.02 C 24 5.373 18.627 0 12 0 Z\" fill=\"rgb(230,0,25)\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformPinterestStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 5.372 0 0 5.372 0 12 C 0 17.086 3.164 21.427 7.627 23.175 C 7.523 22.223 7.425 20.77 7.669 19.734 C 7.889 18.797 9.075 13.772 9.075 13.772 C 9.075 13.772 8.714 13.055 8.714 11.991 C 8.714 10.322 9.68 9.075 10.884 9.075 C 11.906 9.075 12.403 9.844 12.403 10.767 C 12.403 11.798 11.747 13.336 11.409 14.761 C 11.128 15.956 12.009 16.931 13.186 16.931 C 15.319 16.931 16.959 14.681 16.959 11.438 C 16.959 8.564 14.897 6.553 11.948 6.553 C 8.536 6.553 6.53 9.112 6.53 11.761 C 6.53 12.792 6.928 13.898 7.425 14.498 C 7.523 14.616 7.537 14.723 7.509 14.841 C 7.42 15.22 7.214 16.036 7.177 16.2 C 7.125 16.42 7.003 16.467 6.773 16.359 C 5.273 15.661 4.336 13.472 4.336 11.709 C 4.336 7.922 7.088 4.448 12.263 4.448 C 16.425 4.448 19.659 7.416 19.659 11.381 C 19.659 15.516 17.053 18.844 13.434 18.844 C 12.22 18.844 11.077 18.211 10.683 17.466 C 10.683 17.466 10.083 19.758 9.938 20.32 C 9.666 21.361 8.934 22.669 8.447 23.466 C 9.572 23.813 10.762 24 12 24 C 18.628 24 24 18.628 24 12 C 24 5.372 18.628 0 12 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformPinterestStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 5.372 0 0 5.372 0 12 C 0 17.086 3.164 21.427 7.627 23.175 C 7.523 22.223 7.425 20.77 7.669 19.734 C 7.889 18.797 9.075 13.772 9.075 13.772 C 9.075 13.772 8.714 13.055 8.714 11.991 C 8.714 10.322 9.68 9.075 10.884 9.075 C 11.906 9.075 12.403 9.844 12.403 10.767 C 12.403 11.798 11.747 13.336 11.409 14.761 C 11.128 15.956 12.009 16.931 13.186 16.931 C 15.319 16.931 16.959 14.681 16.959 11.438 C 16.959 8.564 14.897 6.553 11.948 6.553 C 8.536 6.553 6.53 9.112 6.53 11.761 C 6.53 12.792 6.928 13.898 7.425 14.498 C 7.523 14.616 7.537 14.723 7.509 14.841 C 7.42 15.22 7.214 16.036 7.177 16.2 C 7.125 16.42 7.003 16.467 6.773 16.359 C 5.273 15.661 4.336 13.472 4.336 11.709 C 4.336 7.922 7.088 4.448 12.263 4.448 C 16.425 4.448 19.659 7.416 19.659 11.381 C 19.659 15.516 17.053 18.844 13.434 18.844 C 12.22 18.844 11.077 18.211 10.683 17.466 C 10.683 17.466 10.083 19.758 9.938 20.32 C 9.666 21.361 8.934 22.669 8.447 23.466 C 9.572 23.813 10.762 24 12 24 C 18.628 24 24 18.628 24 12 C 24 5.372 18.628 0 12 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformRedditStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 24 C 18.627 24 24 18.627 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 Z\" fill=\"rgb(255,69,0)\" fill-rule=\"nonzero\"/><path d=\"M 15.972 7.256 C 15.972 6.288 15.186 5.502 14.218 5.502 C 13.74 5.502 13.319 5.684 13.011 5.993 C 11.818 5.137 10.161 4.575 8.337 4.505 L 9.137 0.758 L 11.733 1.305 C 11.761 1.965 12.309 2.498 12.982 2.498 C 13.67 2.498 14.232 1.937 14.232 1.249 C 14.232 0.561 13.67 0 12.982 0 C 12.491 0 12.07 0.281 11.874 0.702 L 8.968 0.084 C 8.884 0.07 8.8 0.084 8.73 0.126 C 8.66 0.168 8.618 0.239 8.589 0.323 L 7.705 4.505 C 5.839 4.561 4.168 5.109 2.961 5.993 C 2.653 5.698 2.218 5.502 1.754 5.502 C 0.786 5.502 0 6.288 0 7.256 C 0 7.972 0.421 8.575 1.039 8.856 C 1.011 9.025 0.996 9.207 0.996 9.389 C 0.996 12.084 4.126 14.26 8 14.26 C 11.874 14.26 15.004 12.084 15.004 9.389 C 15.004 9.207 14.989 9.039 14.961 8.87 C 15.537 8.589 15.972 7.972 15.972 7.256 Z M 3.972 8.505 C 3.972 7.818 4.533 7.256 5.221 7.256 C 5.909 7.256 6.47 7.818 6.47 8.505 C 6.47 9.193 5.909 9.754 5.221 9.754 C 4.533 9.754 3.972 9.193 3.972 8.505 Z M 10.947 11.804 C 10.091 12.66 8.463 12.716 7.986 12.716 C 7.509 12.716 5.867 12.646 5.025 11.804 C 4.898 11.677 4.898 11.467 5.025 11.34 C 5.151 11.214 5.361 11.214 5.488 11.34 C 6.021 11.874 7.172 12.07 8 12.07 C 8.828 12.07 9.965 11.874 10.512 11.34 C 10.639 11.214 10.849 11.214 10.975 11.34 C 11.074 11.481 11.074 11.677 10.947 11.804 Z M 10.723 9.754 C 10.035 9.754 9.474 9.193 9.474 8.505 C 9.474 7.818 10.035 7.256 10.723 7.256 C 11.411 7.256 11.972 7.818 11.972 8.505 C 11.972 9.193 11.411 9.754 10.723 9.754 Z\" fill=\"rgb(255,255,255)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.028 4.744)\"/>"
  },
  "SocialIconPlatformRedditStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 C 0 5.373 5.373 0 12 0 Z M 17.011 4.744 C 16.52 4.744 16.099 5.024 15.902 5.445 L 12.997 4.828 C 12.913 4.814 12.828 4.828 12.758 4.87 C 12.688 4.912 12.646 4.982 12.618 5.066 L 11.733 9.249 C 9.867 9.305 8.196 9.853 6.989 10.737 C 6.68 10.443 6.245 10.245 5.782 10.245 C 4.814 10.245 4.028 11.032 4.028 12 C 4.028 12.716 4.45 13.319 5.067 13.6 C 5.039 13.768 5.024 13.951 5.024 14.134 C 5.025 16.828 8.155 19.004 12.028 19.004 C 15.902 19.004 19.032 16.828 19.032 14.134 C 19.032 13.951 19.017 13.783 18.989 13.614 C 19.565 13.334 20 12.716 20 12 C 20 11.032 19.214 10.245 18.246 10.245 C 17.769 10.245 17.348 10.429 17.039 10.737 C 15.846 9.881 14.19 9.319 12.365 9.249 L 13.165 5.502 L 15.762 6.049 C 15.79 6.708 16.337 7.242 17.011 7.242 C 17.698 7.242 18.26 6.681 18.26 5.993 C 18.26 5.305 17.698 4.744 17.011 4.744 Z M 14.541 16.084 C 14.667 15.958 14.878 15.958 15.004 16.084 C 15.102 16.224 15.102 16.421 14.976 16.547 C 14.12 17.403 12.492 17.46 12.015 17.46 C 11.537 17.46 9.895 17.389 9.053 16.547 C 8.927 16.421 8.927 16.21 9.053 16.084 C 9.179 15.958 9.389 15.958 9.516 16.084 C 10.049 16.617 11.2 16.814 12.028 16.814 C 12.856 16.814 13.994 16.617 14.541 16.084 Z M 9.249 12 C 9.937 12 10.498 12.561 10.498 13.249 C 10.498 13.937 9.937 14.498 9.249 14.498 C 8.561 14.498 8 13.937 8 13.249 C 8 12.561 8.561 12 9.249 12 Z M 14.751 12 C 15.439 12 16 12.561 16 13.249 C 16 13.937 15.439 14.498 14.751 14.498 C 14.063 14.498 13.502 13.937 13.502 13.249 C 13.502 12.561 14.063 12 14.751 12 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformRedditStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 C 0 5.373 5.373 0 12 0 Z M 17.011 4.744 C 16.52 4.744 16.099 5.024 15.902 5.445 L 12.997 4.828 C 12.913 4.814 12.828 4.828 12.758 4.87 C 12.688 4.912 12.646 4.982 12.618 5.066 L 11.733 9.249 C 9.867 9.305 8.196 9.853 6.989 10.737 C 6.68 10.443 6.245 10.245 5.782 10.245 C 4.814 10.245 4.028 11.032 4.028 12 C 4.028 12.716 4.45 13.319 5.067 13.6 C 5.039 13.768 5.024 13.951 5.024 14.134 C 5.025 16.828 8.155 19.004 12.028 19.004 C 15.902 19.004 19.032 16.828 19.032 14.134 C 19.032 13.951 19.017 13.783 18.989 13.614 C 19.565 13.334 20 12.716 20 12 C 20 11.032 19.214 10.245 18.246 10.245 C 17.769 10.245 17.348 10.429 17.039 10.737 C 15.846 9.881 14.19 9.319 12.365 9.249 L 13.165 5.502 L 15.762 6.049 C 15.79 6.708 16.337 7.242 17.011 7.242 C 17.698 7.242 18.26 6.681 18.26 5.993 C 18.26 5.305 17.698 4.744 17.011 4.744 Z M 14.541 16.084 C 14.667 15.958 14.878 15.958 15.004 16.084 C 15.102 16.224 15.102 16.421 14.976 16.547 C 14.12 17.403 12.492 17.46 12.015 17.46 C 11.537 17.46 9.895 17.389 9.053 16.547 C 8.927 16.421 8.927 16.21 9.053 16.084 C 9.179 15.958 9.389 15.958 9.516 16.084 C 10.049 16.617 11.2 16.814 12.028 16.814 C 12.856 16.814 13.994 16.617 14.541 16.084 Z M 9.249 12 C 9.937 12 10.498 12.561 10.498 13.249 C 10.498 13.937 9.937 14.498 9.249 14.498 C 8.561 14.498 8 13.937 8 13.249 C 8 12.561 8.561 12 9.249 12 Z M 14.751 12 C 15.439 12 16 12.561 16 13.249 C 16 13.937 15.439 14.498 14.751 14.498 C 14.063 14.498 13.502 13.937 13.502 13.249 C 13.502 12.561 14.063 12 14.751 12 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformSignalStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 9.119 0.35 L 9.388 1.441 C 8.327 1.704 7.311 2.124 6.375 2.689 L 5.798 1.724 C 6.829 1.1 7.949 0.637 9.119 0.35 L 9.119 0.35 Z M 14.881 0.35 L 14.612 1.441 C 15.673 1.704 16.689 2.124 17.625 2.689 L 18.208 1.724 C 17.175 1.101 16.053 0.637 14.881 0.35 L 14.881 0.35 Z M 1.724 5.795 C 1.101 6.827 0.637 7.948 0.35 9.119 L 1.441 9.388 C 1.704 8.327 2.124 7.311 2.689 6.375 L 1.724 5.795 Z M 1.124 12 C 1.124 11.454 1.165 10.91 1.247 10.37 L 0.136 10.2 C -0.045 11.392 -0.045 12.605 0.136 13.797 L 1.247 13.63 C 1.165 13.09 1.124 12.546 1.124 12 L 1.124 12 Z M 18.202 22.272 L 17.625 21.311 C 16.691 21.876 15.676 22.297 14.615 22.559 L 14.884 23.65 C 16.053 23.36 17.172 22.896 18.202 22.272 Z M 22.876 12 C 22.876 12.546 22.835 13.09 22.753 13.63 L 23.864 13.797 C 24.045 12.605 24.045 11.392 23.864 10.2 L 22.753 10.37 C 22.835 10.91 22.876 11.454 22.876 12 L 22.876 12 Z M 23.65 14.877 L 22.559 14.608 C 22.297 15.671 21.876 16.688 21.311 17.625 L 22.276 18.205 C 22.9 17.172 23.363 16.05 23.65 14.877 L 23.65 14.877 Z M 13.63 22.753 C 12.549 22.917 11.451 22.917 10.37 22.753 L 10.203 23.864 C 11.394 24.045 12.606 24.045 13.797 23.864 L 13.63 22.753 Z M 20.755 18.45 C 20.107 19.329 19.33 20.105 18.45 20.752 L 19.119 21.659 C 20.088 20.945 20.945 20.092 21.662 19.126 L 20.755 18.45 Z M 18.45 3.245 C 19.33 3.893 20.107 4.67 20.755 5.55 L 21.662 4.875 C 20.947 3.908 20.092 3.053 19.126 2.338 L 18.45 3.245 Z M 3.245 5.55 C 3.893 4.67 4.67 3.893 5.55 3.245 L 4.874 2.338 C 3.908 3.053 3.053 3.908 2.338 4.875 L 3.245 5.55 Z M 22.276 5.795 L 21.311 6.375 C 21.876 7.309 22.297 8.324 22.559 9.385 L 23.65 9.116 C 23.363 7.946 22.899 6.826 22.276 5.795 L 22.276 5.795 Z M 10.37 1.247 C 11.451 1.083 12.549 1.083 13.63 1.247 L 13.797 0.136 C 12.606 -0.045 11.394 -0.045 10.203 0.136 L 10.37 1.247 Z M 3.821 21.959 L 1.499 22.497 L 2.041 20.176 L 0.947 19.92 L 0.405 22.242 C 0.371 22.386 0.366 22.535 0.39 22.681 C 0.413 22.827 0.466 22.967 0.544 23.092 C 0.621 23.218 0.723 23.327 0.844 23.413 C 0.964 23.5 1.1 23.561 1.244 23.595 C 1.412 23.633 1.587 23.633 1.755 23.595 L 4.077 23.06 L 3.821 21.959 Z M 1.179 18.918 L 2.277 19.17 L 2.652 17.561 C 2.104 16.642 1.696 15.647 1.441 14.608 L 0.35 14.877 C 0.596 15.872 0.967 16.831 1.455 17.731 L 1.179 18.918 Z M 6.429 21.352 L 4.82 21.727 L 5.076 22.825 L 6.259 22.548 C 7.158 23.038 8.118 23.409 9.112 23.653 L 9.382 22.562 C 8.346 22.304 7.355 21.894 6.439 21.345 L 6.429 21.352 Z M 12 2.249 C 6.613 2.253 2.253 6.62 2.253 12.003 C 2.256 13.837 2.774 15.633 3.749 17.186 L 2.812 21.188 L 6.811 20.251 C 11.369 23.118 17.39 21.751 20.257 17.196 C 23.125 12.641 21.761 6.62 17.206 3.749 C 15.647 2.769 13.842 2.249 12 2.249\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformSignalStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 9.119 0.35 L 9.388 1.441 C 8.327 1.704 7.311 2.124 6.375 2.689 L 5.798 1.724 C 6.829 1.1 7.949 0.637 9.119 0.35 L 9.119 0.35 Z M 14.881 0.35 L 14.612 1.441 C 15.673 1.704 16.689 2.124 17.625 2.689 L 18.208 1.724 C 17.175 1.101 16.053 0.637 14.881 0.35 L 14.881 0.35 Z M 1.724 5.795 C 1.101 6.827 0.637 7.948 0.35 9.119 L 1.441 9.388 C 1.704 8.327 2.124 7.311 2.689 6.375 L 1.724 5.795 Z M 1.124 12 C 1.124 11.454 1.165 10.91 1.247 10.37 L 0.136 10.2 C -0.045 11.392 -0.045 12.605 0.136 13.797 L 1.247 13.63 C 1.165 13.09 1.124 12.546 1.124 12 L 1.124 12 Z M 18.202 22.272 L 17.625 21.311 C 16.691 21.876 15.676 22.297 14.615 22.559 L 14.884 23.65 C 16.053 23.36 17.172 22.896 18.202 22.272 Z M 22.876 12 C 22.876 12.546 22.835 13.09 22.753 13.63 L 23.864 13.797 C 24.045 12.605 24.045 11.392 23.864 10.2 L 22.753 10.37 C 22.835 10.91 22.876 11.454 22.876 12 L 22.876 12 Z M 23.65 14.877 L 22.559 14.608 C 22.297 15.671 21.876 16.688 21.311 17.625 L 22.276 18.205 C 22.9 17.172 23.363 16.05 23.65 14.877 L 23.65 14.877 Z M 13.63 22.753 C 12.549 22.917 11.451 22.917 10.37 22.753 L 10.203 23.864 C 11.394 24.045 12.606 24.045 13.797 23.864 L 13.63 22.753 Z M 20.755 18.45 C 20.107 19.329 19.33 20.105 18.45 20.752 L 19.119 21.659 C 20.088 20.945 20.945 20.092 21.662 19.126 L 20.755 18.45 Z M 18.45 3.245 C 19.33 3.893 20.107 4.67 20.755 5.55 L 21.662 4.875 C 20.947 3.908 20.092 3.053 19.126 2.338 L 18.45 3.245 Z M 3.245 5.55 C 3.893 4.67 4.67 3.893 5.55 3.245 L 4.874 2.338 C 3.908 3.053 3.053 3.908 2.338 4.875 L 3.245 5.55 Z M 22.276 5.795 L 21.311 6.375 C 21.876 7.309 22.297 8.324 22.559 9.385 L 23.65 9.116 C 23.363 7.946 22.899 6.826 22.276 5.795 L 22.276 5.795 Z M 10.37 1.247 C 11.451 1.083 12.549 1.083 13.63 1.247 L 13.797 0.136 C 12.606 -0.045 11.394 -0.045 10.203 0.136 L 10.37 1.247 Z M 3.821 21.959 L 1.499 22.497 L 2.041 20.176 L 0.947 19.92 L 0.405 22.242 C 0.371 22.386 0.366 22.535 0.39 22.681 C 0.413 22.827 0.466 22.967 0.544 23.092 C 0.621 23.218 0.723 23.327 0.844 23.413 C 0.964 23.5 1.1 23.561 1.244 23.595 C 1.412 23.633 1.587 23.633 1.755 23.595 L 4.077 23.06 L 3.821 21.959 Z M 1.179 18.918 L 2.277 19.17 L 2.652 17.561 C 2.104 16.642 1.696 15.647 1.441 14.608 L 0.35 14.877 C 0.596 15.872 0.967 16.831 1.455 17.731 L 1.179 18.918 Z M 6.429 21.352 L 4.82 21.727 L 5.076 22.825 L 6.259 22.548 C 7.158 23.038 8.118 23.409 9.112 23.653 L 9.382 22.562 C 8.346 22.304 7.355 21.894 6.439 21.345 L 6.429 21.352 Z M 12 2.249 C 6.613 2.253 2.253 6.62 2.253 12.003 C 2.256 13.837 2.774 15.633 3.749 17.186 L 2.812 21.188 L 6.811 20.251 C 11.369 23.118 17.39 21.751 20.257 17.196 C 23.125 12.641 21.761 6.62 17.206 3.749 C 15.647 2.769 13.842 2.249 12 2.249\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformSignalStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 9.119 0.35 L 9.388 1.441 C 8.327 1.704 7.311 2.124 6.375 2.689 L 5.798 1.724 C 6.829 1.1 7.949 0.637 9.119 0.35 L 9.119 0.35 Z M 14.881 0.35 L 14.612 1.441 C 15.673 1.704 16.689 2.124 17.625 2.689 L 18.208 1.724 C 17.175 1.101 16.053 0.637 14.881 0.35 L 14.881 0.35 Z M 1.724 5.795 C 1.101 6.827 0.637 7.948 0.35 9.119 L 1.441 9.388 C 1.704 8.327 2.124 7.311 2.689 6.375 L 1.724 5.795 Z M 1.124 12 C 1.124 11.454 1.165 10.91 1.247 10.37 L 0.136 10.2 C -0.045 11.392 -0.045 12.605 0.136 13.797 L 1.247 13.63 C 1.165 13.09 1.124 12.546 1.124 12 L 1.124 12 Z M 18.202 22.272 L 17.625 21.311 C 16.691 21.876 15.676 22.297 14.615 22.559 L 14.884 23.65 C 16.053 23.36 17.172 22.896 18.202 22.272 Z M 22.876 12 C 22.876 12.546 22.835 13.09 22.753 13.63 L 23.864 13.797 C 24.045 12.605 24.045 11.392 23.864 10.2 L 22.753 10.37 C 22.835 10.91 22.876 11.454 22.876 12 L 22.876 12 Z M 23.65 14.877 L 22.559 14.608 C 22.297 15.671 21.876 16.688 21.311 17.625 L 22.276 18.205 C 22.9 17.172 23.363 16.05 23.65 14.877 L 23.65 14.877 Z M 13.63 22.753 C 12.549 22.917 11.451 22.917 10.37 22.753 L 10.203 23.864 C 11.394 24.045 12.606 24.045 13.797 23.864 L 13.63 22.753 Z M 20.755 18.45 C 20.107 19.329 19.33 20.105 18.45 20.752 L 19.119 21.659 C 20.088 20.945 20.945 20.092 21.662 19.126 L 20.755 18.45 Z M 18.45 3.245 C 19.33 3.893 20.107 4.67 20.755 5.55 L 21.662 4.875 C 20.947 3.908 20.092 3.053 19.126 2.338 L 18.45 3.245 Z M 3.245 5.55 C 3.893 4.67 4.67 3.893 5.55 3.245 L 4.874 2.338 C 3.908 3.053 3.053 3.908 2.338 4.875 L 3.245 5.55 Z M 22.276 5.795 L 21.311 6.375 C 21.876 7.309 22.297 8.324 22.559 9.385 L 23.65 9.116 C 23.363 7.946 22.899 6.826 22.276 5.795 L 22.276 5.795 Z M 10.37 1.247 C 11.451 1.083 12.549 1.083 13.63 1.247 L 13.797 0.136 C 12.606 -0.045 11.394 -0.045 10.203 0.136 L 10.37 1.247 Z M 3.821 21.959 L 1.499 22.497 L 2.041 20.176 L 0.947 19.92 L 0.405 22.242 C 0.371 22.386 0.366 22.535 0.39 22.681 C 0.413 22.827 0.466 22.967 0.544 23.092 C 0.621 23.218 0.723 23.327 0.844 23.413 C 0.964 23.5 1.1 23.561 1.244 23.595 C 1.412 23.633 1.587 23.633 1.755 23.595 L 4.077 23.06 L 3.821 21.959 Z M 1.179 18.918 L 2.277 19.17 L 2.652 17.561 C 2.104 16.642 1.696 15.647 1.441 14.608 L 0.35 14.877 C 0.596 15.872 0.967 16.831 1.455 17.731 L 1.179 18.918 Z M 6.429 21.352 L 4.82 21.727 L 5.076 22.825 L 6.259 22.548 C 7.158 23.038 8.118 23.409 9.112 23.653 L 9.382 22.562 C 8.346 22.304 7.355 21.894 6.439 21.345 L 6.429 21.352 Z M 12 2.249 C 6.613 2.253 2.253 6.62 2.253 12.003 C 2.256 13.837 2.774 15.633 3.749 17.186 L 2.812 21.188 L 6.811 20.251 C 11.369 23.118 17.39 21.751 20.257 17.196 C 23.125 12.641 21.761 6.62 17.206 3.749 C 15.647 2.769 13.842 2.249 12 2.249\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformSnapchatStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 20.893 16.163 C 17.177 14.363 16.584 11.585 16.558 11.379 C 16.526 11.129 16.49 10.933 16.765 10.679 C 17.031 10.434 18.209 9.704 18.535 9.476 C 19.076 9.098 19.314 8.721 19.138 8.257 C 19.016 7.936 18.717 7.816 18.402 7.816 C 18.303 7.816 18.204 7.827 18.107 7.849 C 17.514 7.978 16.937 8.275 16.604 8.355 C 16.564 8.366 16.523 8.371 16.481 8.372 C 16.303 8.372 16.236 8.293 16.253 8.079 C 16.295 7.43 16.383 6.163 16.281 4.98 C 16.14 3.352 15.615 2.546 14.993 1.832 C 14.692 1.486 13.294 0 10.596 0 C 7.898 0 6.502 1.486 6.202 1.828 C 5.578 2.541 5.054 3.348 4.915 4.976 C 4.812 6.159 4.904 7.425 4.942 8.074 C 4.954 8.278 4.892 8.368 4.714 8.368 C 4.673 8.367 4.632 8.361 4.591 8.351 C 4.258 8.271 3.682 7.973 3.089 7.844 C 2.992 7.823 2.893 7.812 2.794 7.811 C 2.478 7.811 2.18 7.934 2.058 8.253 C 1.882 8.717 2.119 9.094 2.661 9.472 C 2.988 9.7 4.166 10.429 4.431 10.675 C 4.706 10.929 4.671 11.125 4.639 11.374 C 4.612 11.584 4.019 14.362 0.303 16.159 C 0.086 16.264 -0.285 16.488 0.368 16.848 C 1.394 17.415 2.076 17.354 2.607 17.696 C 3.057 17.986 2.79 18.612 3.118 18.837 C 3.52 19.115 4.709 18.818 6.245 19.325 C 7.533 19.749 8.315 20.949 10.599 20.949 C 12.882 20.949 13.688 19.744 14.953 19.325 C 16.486 18.818 17.677 19.115 18.08 18.837 C 18.407 18.612 18.141 17.986 18.591 17.696 C 19.122 17.354 19.804 17.415 20.829 16.848 C 21.481 16.492 21.111 16.269 20.893 16.163 Z\" fill=\"rgb(255,255,255)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.404 1.517)\"/><path d=\"M 23.914 17.294 C 23.747 16.84 23.43 16.597 23.068 16.396 C 23 16.356 22.937 16.324 22.884 16.299 C 22.776 16.243 22.666 16.189 22.556 16.132 C 21.428 15.534 20.548 14.78 19.937 13.886 C 19.764 13.634 19.613 13.367 19.488 13.088 C 19.435 12.939 19.438 12.855 19.475 12.777 C 19.512 12.718 19.561 12.667 19.619 12.627 C 19.813 12.499 20.013 12.369 20.149 12.281 C 20.39 12.125 20.582 12.001 20.705 11.913 C 21.168 11.589 21.491 11.245 21.694 10.86 C 21.835 10.595 21.917 10.302 21.935 10.001 C 21.953 9.701 21.906 9.4 21.797 9.12 C 21.491 8.312 20.729 7.811 19.805 7.811 C 19.61 7.811 19.416 7.832 19.226 7.873 C 19.175 7.884 19.124 7.895 19.074 7.908 C 19.083 7.356 19.071 6.774 19.022 6.2 C 18.847 4.184 18.142 3.127 17.406 2.284 C 16.935 1.756 16.38 1.309 15.763 0.962 C 14.646 0.324 13.38 0 12 0 C 10.62 0 9.359 0.324 8.242 0.962 C 7.624 1.309 7.067 1.757 6.596 2.287 C 5.86 3.129 5.154 4.188 4.98 6.202 C 4.931 6.776 4.919 7.362 4.927 7.911 C 4.877 7.898 4.827 7.886 4.776 7.875 C 4.585 7.834 4.391 7.814 4.196 7.814 C 3.272 7.814 2.509 8.315 2.204 9.122 C 2.094 9.403 2.047 9.704 2.064 10.004 C 2.082 10.305 2.164 10.599 2.305 10.865 C 2.508 11.249 2.831 11.593 3.294 11.917 C 3.417 12.003 3.609 12.127 3.851 12.285 C 3.981 12.37 4.172 12.494 4.359 12.618 C 4.424 12.66 4.48 12.716 4.522 12.782 C 4.561 12.862 4.562 12.948 4.504 13.108 C 4.38 13.381 4.232 13.642 4.062 13.889 C 3.465 14.763 2.61 15.504 1.519 16.097 C 0.94 16.403 0.339 16.608 0.086 17.298 C -0.106 17.819 0.019 18.412 0.506 18.911 C 0.684 19.097 0.891 19.254 1.119 19.375 C 1.593 19.636 2.097 19.837 2.619 19.976 C 2.727 20.004 2.83 20.049 2.922 20.111 C 3.099 20.267 3.074 20.5 3.31 20.842 C 3.429 21.019 3.579 21.173 3.754 21.294 C 4.25 21.636 4.807 21.658 5.396 21.68 C 5.929 21.701 6.533 21.724 7.223 21.951 C 7.509 22.046 7.806 22.229 8.15 22.442 C 8.976 22.95 10.106 23.645 11.999 23.645 C 13.891 23.645 15.03 22.946 15.862 22.437 C 16.203 22.227 16.498 22.046 16.776 21.954 C 17.466 21.726 18.07 21.703 18.603 21.683 C 19.193 21.66 19.749 21.639 20.245 21.296 C 20.452 21.152 20.625 20.963 20.75 20.744 C 20.92 20.455 20.916 20.254 21.075 20.113 C 21.162 20.054 21.258 20.01 21.36 19.983 C 21.89 19.844 22.4 19.64 22.88 19.377 C 23.122 19.247 23.34 19.076 23.524 18.872 L 23.53 18.865 C 23.987 18.377 24.101 17.801 23.914 17.294 Z M 22.232 18.198 C 21.206 18.764 20.524 18.704 19.994 19.045 C 19.543 19.335 19.81 19.961 19.483 20.187 C 19.08 20.465 17.891 20.167 16.355 20.674 C 15.089 21.093 14.28 22.298 12.002 22.298 C 9.723 22.298 8.934 21.096 7.646 20.671 C 6.113 20.164 4.922 20.462 4.519 20.184 C 4.192 19.958 4.458 19.332 4.008 19.042 C 3.477 18.701 2.795 18.761 1.769 18.198 C 1.116 17.837 1.487 17.614 1.704 17.508 C 5.42 15.709 6.013 12.93 6.04 12.724 C 6.072 12.474 6.107 12.278 5.832 12.024 C 5.567 11.779 4.389 11.049 4.062 10.821 C 3.521 10.443 3.283 10.066 3.459 9.602 C 3.581 9.282 3.881 9.161 4.195 9.161 C 4.294 9.161 4.393 9.172 4.49 9.194 C 5.083 9.323 5.659 9.62 5.992 9.701 C 6.033 9.711 6.074 9.716 6.115 9.717 C 6.293 9.717 6.355 9.628 6.343 9.424 C 6.305 8.774 6.213 7.508 6.316 6.325 C 6.456 4.697 6.98 3.891 7.603 3.177 C 7.903 2.834 9.309 1.348 11.997 1.348 C 14.686 1.348 16.096 2.828 16.395 3.17 C 17.019 3.883 17.544 4.69 17.683 6.318 C 17.785 7.501 17.697 8.768 17.655 9.417 C 17.641 9.631 17.706 9.71 17.883 9.71 C 17.925 9.709 17.966 9.704 18.006 9.693 C 18.34 9.613 18.916 9.315 19.51 9.187 C 19.606 9.165 19.705 9.154 19.805 9.153 C 20.12 9.153 20.418 9.276 20.54 9.595 C 20.716 10.059 20.479 10.436 19.938 10.814 C 19.611 11.042 18.433 11.771 18.167 12.017 C 17.892 12.271 17.928 12.467 17.96 12.716 C 17.986 12.926 18.579 15.704 22.295 17.501 C 22.515 17.611 22.885 17.834 22.232 18.198 Z\" fill=\"rgb(0,0,0)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0.174)\"/>"
  },
  "SocialIconPlatformSnapchatStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 23.913 17.283 C 23.748 16.829 23.429 16.584 23.067 16.388 C 23 16.351 22.939 16.314 22.884 16.29 C 22.773 16.235 22.663 16.179 22.553 16.124 C 21.425 15.524 20.543 14.776 19.936 13.881 C 19.764 13.63 19.611 13.36 19.488 13.085 C 19.433 12.937 19.439 12.852 19.476 12.772 C 19.513 12.711 19.562 12.662 19.623 12.619 C 19.819 12.49 20.015 12.361 20.15 12.276 C 20.389 12.116 20.585 11.994 20.708 11.908 C 21.168 11.583 21.492 11.24 21.695 10.854 C 21.983 10.314 22.019 9.683 21.799 9.113 C 21.492 8.304 20.732 7.808 19.807 7.808 C 19.611 7.808 19.421 7.826 19.225 7.869 C 19.176 7.881 19.121 7.894 19.072 7.906 C 19.078 7.354 19.066 6.772 19.016 6.196 C 18.845 4.18 18.134 3.126 17.399 2.286 C 16.927 1.759 16.375 1.312 15.756 0.962 C 14.641 0.325 13.372 0 11.993 0 C 10.614 0 9.352 0.325 8.236 0.962 C 7.617 1.312 7.066 1.759 6.594 2.286 C 5.858 3.126 5.154 4.186 4.976 6.196 C 4.927 6.772 4.915 7.354 4.921 7.906 C 4.872 7.894 4.823 7.881 4.768 7.869 C 4.578 7.826 4.381 7.808 4.191 7.808 C 3.266 7.808 2.506 8.31 2.2 9.113 C 1.979 9.683 2.016 10.314 2.304 10.854 C 2.506 11.24 2.831 11.583 3.291 11.908 C 3.413 11.994 3.603 12.116 3.848 12.276 C 3.977 12.361 4.167 12.484 4.357 12.607 C 4.424 12.649 4.479 12.705 4.522 12.772 C 4.559 12.852 4.565 12.937 4.504 13.097 C 4.381 13.366 4.234 13.63 4.063 13.875 C 3.468 14.745 2.61 15.487 1.519 16.081 C 0.943 16.388 0.343 16.59 0.085 17.283 C -0.105 17.804 0.018 18.392 0.502 18.894 C 0.68 19.078 0.888 19.238 1.115 19.36 C 1.587 19.618 2.089 19.82 2.616 19.961 C 2.727 19.991 2.825 20.034 2.917 20.096 C 3.094 20.249 3.07 20.482 3.303 20.825 C 3.419 21.003 3.572 21.156 3.744 21.278 C 4.24 21.622 4.798 21.64 5.387 21.665 C 5.92 21.683 6.52 21.707 7.213 21.934 C 7.501 22.026 7.795 22.21 8.138 22.425 C 8.966 22.933 10.093 23.626 11.987 23.626 C 13.881 23.626 15.015 22.927 15.848 22.418 C 16.191 22.21 16.485 22.026 16.761 21.934 C 17.448 21.707 18.054 21.683 18.587 21.665 C 19.176 21.64 19.734 21.622 20.23 21.278 C 20.438 21.131 20.61 20.948 20.732 20.727 C 20.904 20.439 20.898 20.237 21.057 20.096 C 21.143 20.034 21.241 19.991 21.339 19.967 C 21.866 19.826 22.381 19.624 22.859 19.36 C 23.098 19.232 23.319 19.06 23.503 18.858 L 23.509 18.852 C 23.987 18.361 24.103 17.785 23.913 17.283 Z M 22.234 18.184 C 21.211 18.747 20.524 18.686 19.997 19.029 C 19.544 19.317 19.813 19.942 19.488 20.169 C 19.084 20.445 17.895 20.151 16.363 20.659 C 15.094 21.076 14.291 22.284 12.012 22.284 C 9.732 22.284 8.947 21.082 7.66 20.659 C 6.128 20.151 4.939 20.451 4.535 20.169 C 4.21 19.942 4.473 19.317 4.026 19.029 C 3.493 18.686 2.813 18.747 1.789 18.184 C 1.133 17.822 1.507 17.601 1.722 17.497 C 5.436 15.701 6.03 12.925 6.055 12.717 C 6.085 12.466 6.122 12.269 5.846 12.018 C 5.583 11.773 4.406 11.044 4.075 10.817 C 3.536 10.437 3.297 10.063 3.474 9.597 C 3.597 9.279 3.897 9.156 4.21 9.156 C 4.308 9.156 4.406 9.168 4.504 9.187 C 5.098 9.315 5.675 9.61 6.005 9.695 C 6.048 9.708 6.085 9.714 6.128 9.714 C 6.306 9.714 6.367 9.622 6.355 9.42 C 6.318 8.77 6.226 7.508 6.33 6.325 C 6.471 4.701 6.992 3.892 7.617 3.181 C 7.918 2.838 9.321 1.354 12.012 1.354 C 14.702 1.354 16.105 2.831 16.406 3.175 C 17.031 3.886 17.552 4.694 17.693 6.319 C 17.797 7.501 17.705 8.764 17.662 9.414 C 17.65 9.628 17.711 9.708 17.889 9.708 C 17.932 9.708 17.969 9.702 18.011 9.689 C 18.342 9.61 18.918 9.309 19.513 9.181 C 19.611 9.156 19.709 9.15 19.807 9.15 C 20.12 9.15 20.42 9.273 20.543 9.591 C 20.72 10.057 20.481 10.431 19.942 10.811 C 19.617 11.038 18.44 11.767 18.171 12.012 C 17.895 12.263 17.932 12.459 17.962 12.711 C 17.987 12.919 18.581 15.695 22.295 17.491 C 22.516 17.595 22.884 17.822 22.234 18.184 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0.174)\"/>"
  },
  "SocialIconPlatformSnapchatStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 23.913 17.283 C 23.748 16.829 23.429 16.584 23.067 16.388 C 23 16.351 22.939 16.314 22.884 16.29 C 22.773 16.235 22.663 16.179 22.553 16.124 C 21.425 15.524 20.543 14.776 19.936 13.881 C 19.764 13.63 19.611 13.36 19.488 13.085 C 19.433 12.937 19.439 12.852 19.476 12.772 C 19.513 12.711 19.562 12.662 19.623 12.619 C 19.819 12.49 20.015 12.361 20.15 12.276 C 20.389 12.116 20.585 11.994 20.708 11.908 C 21.168 11.583 21.492 11.24 21.695 10.854 C 21.983 10.314 22.019 9.683 21.799 9.113 C 21.492 8.304 20.732 7.808 19.807 7.808 C 19.611 7.808 19.421 7.826 19.225 7.869 C 19.176 7.881 19.121 7.894 19.072 7.906 C 19.078 7.354 19.066 6.772 19.016 6.196 C 18.845 4.18 18.134 3.126 17.399 2.286 C 16.927 1.759 16.375 1.312 15.756 0.962 C 14.641 0.325 13.372 0 11.993 0 C 10.614 0 9.352 0.325 8.236 0.962 C 7.617 1.312 7.066 1.759 6.594 2.286 C 5.858 3.126 5.154 4.186 4.976 6.196 C 4.927 6.772 4.915 7.354 4.921 7.906 C 4.872 7.894 4.823 7.881 4.768 7.869 C 4.578 7.826 4.381 7.808 4.191 7.808 C 3.266 7.808 2.506 8.31 2.2 9.113 C 1.979 9.683 2.016 10.314 2.304 10.854 C 2.506 11.24 2.831 11.583 3.291 11.908 C 3.413 11.994 3.603 12.116 3.848 12.276 C 3.977 12.361 4.167 12.484 4.357 12.607 C 4.424 12.649 4.479 12.705 4.522 12.772 C 4.559 12.852 4.565 12.937 4.504 13.097 C 4.381 13.366 4.234 13.63 4.063 13.875 C 3.468 14.745 2.61 15.487 1.519 16.081 C 0.943 16.388 0.343 16.59 0.085 17.283 C -0.105 17.804 0.018 18.392 0.502 18.894 C 0.68 19.078 0.888 19.238 1.115 19.36 C 1.587 19.618 2.089 19.82 2.616 19.961 C 2.727 19.991 2.825 20.034 2.917 20.096 C 3.094 20.249 3.07 20.482 3.303 20.825 C 3.419 21.003 3.572 21.156 3.744 21.278 C 4.24 21.622 4.798 21.64 5.387 21.665 C 5.92 21.683 6.52 21.707 7.213 21.934 C 7.501 22.026 7.795 22.21 8.138 22.425 C 8.966 22.933 10.093 23.626 11.987 23.626 C 13.881 23.626 15.015 22.927 15.848 22.418 C 16.191 22.21 16.485 22.026 16.761 21.934 C 17.448 21.707 18.054 21.683 18.587 21.665 C 19.176 21.64 19.734 21.622 20.23 21.278 C 20.438 21.131 20.61 20.948 20.732 20.727 C 20.904 20.439 20.898 20.237 21.057 20.096 C 21.143 20.034 21.241 19.991 21.339 19.967 C 21.866 19.826 22.381 19.624 22.859 19.36 C 23.098 19.232 23.319 19.06 23.503 18.858 L 23.509 18.852 C 23.987 18.361 24.103 17.785 23.913 17.283 Z M 22.234 18.184 C 21.211 18.747 20.524 18.686 19.997 19.029 C 19.544 19.317 19.813 19.942 19.488 20.169 C 19.084 20.445 17.895 20.151 16.363 20.659 C 15.094 21.076 14.291 22.284 12.012 22.284 C 9.732 22.284 8.947 21.082 7.66 20.659 C 6.128 20.151 4.939 20.451 4.535 20.169 C 4.21 19.942 4.473 19.317 4.026 19.029 C 3.493 18.686 2.813 18.747 1.789 18.184 C 1.133 17.822 1.507 17.601 1.722 17.497 C 5.436 15.701 6.03 12.925 6.055 12.717 C 6.085 12.466 6.122 12.269 5.846 12.018 C 5.583 11.773 4.406 11.044 4.075 10.817 C 3.536 10.437 3.297 10.063 3.474 9.597 C 3.597 9.279 3.897 9.156 4.21 9.156 C 4.308 9.156 4.406 9.168 4.504 9.187 C 5.098 9.315 5.675 9.61 6.005 9.695 C 6.048 9.708 6.085 9.714 6.128 9.714 C 6.306 9.714 6.367 9.622 6.355 9.42 C 6.318 8.77 6.226 7.508 6.33 6.325 C 6.471 4.701 6.992 3.892 7.617 3.181 C 7.918 2.838 9.321 1.354 12.012 1.354 C 14.702 1.354 16.105 2.831 16.406 3.175 C 17.031 3.886 17.552 4.694 17.693 6.319 C 17.797 7.501 17.705 8.764 17.662 9.414 C 17.65 9.628 17.711 9.708 17.889 9.708 C 17.932 9.708 17.969 9.702 18.011 9.689 C 18.342 9.61 18.918 9.309 19.513 9.181 C 19.611 9.156 19.709 9.15 19.807 9.15 C 20.12 9.15 20.42 9.273 20.543 9.591 C 20.72 10.057 20.481 10.431 19.942 10.811 C 19.617 11.038 18.44 11.767 18.171 12.012 C 17.895 12.263 17.932 12.459 17.962 12.711 C 17.987 12.919 18.581 15.695 22.295 17.491 C 22.516 17.595 22.884 17.822 22.234 18.184 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 0.174)\"/>"
  },
  "SocialIconPlatformTelegramStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 C 0 5.373 5.373 0 12 0 Z M 16.906 7.224 C 16.455 7.232 15.762 7.473 12.43 8.859 C 11.262 9.345 8.929 10.349 5.432 11.873 C 4.864 12.099 4.566 12.32 4.539 12.536 C 4.487 12.951 5.084 13.08 5.836 13.324 C 6.449 13.523 7.273 13.756 7.701 13.766 C 8.09 13.774 8.524 13.614 9.003 13.285 C 12.271 11.079 13.959 9.963 14.064 9.939 C 14.139 9.923 14.242 9.902 14.313 9.964 C 14.383 10.026 14.376 10.144 14.368 10.176 C 14.309 10.429 11.243 13.218 11.063 13.405 C 10.387 14.107 9.619 14.536 10.804 15.316 C 11.829 15.992 12.425 16.423 13.481 17.115 C 14.156 17.558 14.686 18.083 15.383 18.019 C 15.703 17.989 16.035 17.687 16.203 16.788 C 16.601 14.663 17.382 10.059 17.563 8.161 C 17.578 7.995 17.558 7.782 17.542 7.688 C 17.526 7.595 17.492 7.462 17.371 7.363 C 17.227 7.247 17.005 7.222 16.906 7.224 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformTelegramStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 C 0 5.373 5.373 0 12 0 Z M 16.906 7.224 C 16.455 7.232 15.762 7.473 12.43 8.859 C 11.262 9.345 8.929 10.349 5.432 11.873 C 4.864 12.099 4.566 12.32 4.539 12.536 C 4.487 12.951 5.084 13.08 5.836 13.324 C 6.449 13.523 7.273 13.756 7.701 13.766 C 8.09 13.774 8.524 13.614 9.003 13.285 C 12.271 11.079 13.959 9.963 14.064 9.939 C 14.139 9.923 14.242 9.902 14.313 9.964 C 14.383 10.026 14.376 10.144 14.368 10.176 C 14.309 10.429 11.243 13.218 11.063 13.405 C 10.387 14.107 9.619 14.536 10.804 15.316 C 11.829 15.992 12.425 16.423 13.481 17.115 C 14.156 17.558 14.686 18.083 15.383 18.019 C 15.703 17.989 16.035 17.687 16.203 16.788 C 16.601 14.663 17.382 10.059 17.563 8.161 C 17.578 7.995 17.558 7.782 17.542 7.688 C 17.526 7.595 17.492 7.462 17.371 7.363 C 17.227 7.247 17.005 7.222 16.906 7.224 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>"
  },
  "SocialIconPlatformTikTokStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 12.456 7.704 C 14 8.811 15.891 9.462 17.933 9.462 L 17.933 5.519 C 17.546 5.519 17.161 5.478 16.783 5.398 L 16.783 8.502 C 14.741 8.502 12.85 7.851 11.306 6.743 L 11.306 14.791 C 11.306 18.817 8.055 22.08 4.043 22.08 C 2.547 22.08 1.156 21.626 0 20.847 C 1.319 22.2 3.158 23.04 5.193 23.04 C 9.205 23.04 12.457 19.777 12.457 15.751 L 12.457 7.704 L 12.456 7.704 L 12.456 7.704 Z M 13.875 3.725 C 13.086 2.86 12.569 1.743 12.456 0.507 L 12.456 0 L 11.367 0 C 11.641 1.57 12.577 2.912 13.875 3.725 Z M 2.537 17.758 C 2.096 17.178 1.858 16.469 1.859 15.739 C 1.859 13.898 3.347 12.405 5.182 12.405 C 5.524 12.405 5.864 12.458 6.19 12.561 L 6.19 8.53 C 5.809 8.477 5.424 8.455 5.04 8.463 L 5.04 11.601 C 4.714 11.498 4.374 11.445 4.032 11.445 C 2.197 11.445 0.709 12.938 0.709 14.779 C 0.709 16.081 1.453 17.209 2.537 17.758 Z\" fill=\"rgb(255,0,79)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 4.720 0.960)\"/><path d=\"M 13.377 6.743 C 14.92 7.85 16.811 8.502 18.853 8.502 L 18.853 5.398 C 17.713 5.154 16.704 4.556 15.945 3.725 C 14.647 2.912 13.711 1.57 13.437 0 L 10.574 0 L 10.574 15.751 C 10.568 17.587 9.083 19.074 7.252 19.074 C 6.173 19.074 5.214 18.557 4.607 17.758 C 3.523 17.209 2.779 16.081 2.779 14.779 C 2.779 12.938 4.267 11.445 6.102 11.445 C 6.453 11.445 6.792 11.5 7.11 11.601 L 7.11 8.463 C 3.169 8.545 0 11.777 0 15.751 C 0 17.735 0.789 19.533 2.07 20.847 C 3.226 21.626 4.617 22.08 6.114 22.08 C 10.125 22.08 13.377 18.817 13.377 14.791 L 13.377 6.743 L 13.377 6.743 Z\" fill=\"rgb(0,0,0)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2.650 0.960)\"/><path d=\"M 20.003 6.358 L 20.003 5.518 C 18.975 5.52 17.967 5.231 17.095 4.685 C 17.867 5.533 18.884 6.118 20.003 6.358 Z M 14.587 0.96 C 14.561 0.81 14.54 0.659 14.526 0.507 L 14.526 0 L 10.574 0 L 10.574 15.751 C 10.568 17.587 9.083 19.074 7.252 19.074 C 6.714 19.074 6.206 18.945 5.757 18.718 C 6.364 19.517 7.323 20.034 8.402 20.034 C 10.233 20.034 11.718 18.547 11.724 16.711 L 11.724 0.96 L 14.587 0.96 Z M 8.26 9.423 L 8.26 8.53 C 7.93 8.485 7.597 8.462 7.264 8.462 C 3.252 8.462 0 11.725 0 15.751 C 0 18.275 1.278 20.499 3.22 21.807 C 1.939 20.493 1.15 18.694 1.15 16.711 C 1.15 12.737 4.319 9.505 8.26 9.423 Z\" fill=\"rgb(0,242,234)\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 1.500 0)\"/>"
  },
  "SocialIconPlatformTikTokStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 15.073 0 L 11.028 0 L 11.028 16.348 C 11.028 18.296 9.472 19.896 7.536 19.896 C 5.6 19.896 4.045 18.296 4.045 16.348 C 4.045 14.435 5.566 12.87 7.433 12.8 L 7.433 8.696 C 3.319 8.765 0 12.139 0 16.348 C 0 20.591 3.388 24 7.571 24 C 11.754 24 15.142 20.557 15.142 16.348 L 15.142 7.965 C 16.663 9.078 18.529 9.739 20.5 9.774 L 20.5 5.67 C 17.458 5.565 15.073 3.061 15.073 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 0)\"/>"
  },
  "SocialIconPlatformTikTokStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 15.073 0 L 11.028 0 L 11.028 16.348 C 11.028 18.296 9.472 19.896 7.536 19.896 C 5.6 19.896 4.045 18.296 4.045 16.348 C 4.045 14.435 5.566 12.87 7.433 12.8 L 7.433 8.696 C 3.319 8.765 0 12.139 0 16.348 C 0 20.591 3.388 24 7.571 24 C 11.754 24 15.142 20.557 15.142 16.348 L 15.142 7.965 C 16.663 9.078 18.529 9.739 20.5 9.774 L 20.5 5.67 C 17.458 5.565 15.073 3.061 15.073 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 2 0)\"/>"
  },
  "SocialIconPlatformTumblrStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 9.6 24 C 6 24 3.3 22.15 3.3 17.7 L 3.3 10.6 L 0 10.6 L 0 6.75 C 3.6 5.8 5.1 2.7 5.3 0 L 9.05 0 L 9.05 6.1 L 13.4 6.1 L 13.4 10.6 L 9.05 10.6 L 9.05 16.8 C 9.05 18.65 10 19.3 11.5 19.3 L 13.6 19.3 L 13.6 24 L 9.6 24 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 0)\"/>"
  },
  "SocialIconPlatformTumblrStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 9.6 24 C 6 24 3.3 22.15 3.3 17.7 L 3.3 10.6 L 0 10.6 L 0 6.75 C 3.6 5.8 5.1 2.7 5.3 0 L 9.05 0 L 9.05 6.1 L 13.4 6.1 L 13.4 10.6 L 9.05 10.6 L 9.05 16.8 C 9.05 18.65 10 19.3 11.5 19.3 L 13.6 19.3 L 13.6 24 L 9.6 24 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 0)\"/>"
  },
  "SocialIconPlatformTumblrStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 9.6 24 C 6 24 3.3 22.15 3.3 17.7 L 3.3 10.6 L 0 10.6 L 0 6.75 C 3.6 5.8 5.1 2.7 5.3 0 L 9.05 0 L 9.05 6.1 L 13.4 6.1 L 13.4 10.6 L 9.05 10.6 L 9.05 16.8 C 9.05 18.65 10 19.3 11.5 19.3 L 13.6 19.3 L 13.6 24 L 9.6 24 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 5 0)\"/>"
  },
  "SocialIconPlatformTwitterStyleBrandState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 7.548 19.501 C 16.604 19.501 21.558 11.998 21.558 5.491 C 21.558 5.278 21.558 5.066 21.543 4.855 C 22.507 4.157 23.339 3.294 24 2.306 C 23.101 2.704 22.148 2.965 21.172 3.08 C 22.2 2.465 22.969 1.497 23.337 0.357 C 22.37 0.931 21.313 1.335 20.21 1.552 C 19.468 0.763 18.486 0.24 17.416 0.065 C 16.347 -0.11 15.249 0.072 14.294 0.583 C 13.339 1.095 12.578 1.907 12.131 2.893 C 11.683 3.88 11.574 4.987 11.819 6.043 C 9.861 5.945 7.946 5.436 6.197 4.55 C 4.449 3.663 2.907 2.419 1.67 0.898 C 1.041 1.982 0.848 3.266 1.131 4.487 C 1.414 5.708 2.152 6.775 3.195 7.471 C 2.411 7.449 1.645 7.237 0.96 6.855 L 0.96 6.918 C 0.96 8.054 1.354 9.156 2.074 10.036 C 2.794 10.916 3.796 11.519 4.91 11.744 C 4.185 11.942 3.425 11.971 2.687 11.829 C 3.002 12.807 3.614 13.663 4.439 14.276 C 5.264 14.889 6.26 15.229 7.287 15.248 C 6.266 16.051 5.097 16.644 3.847 16.994 C 2.596 17.345 1.289 17.445 0 17.289 C 2.252 18.734 4.872 19.501 7.548 19.497\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 2.249)\"/>"
  },
  "SocialIconPlatformTwitterStyleGrayState": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 7.55 19.501 C 16.605 19.501 21.558 11.997 21.558 5.493 C 21.558 5.282 21.554 5.066 21.544 4.855 C 22.508 4.158 23.339 3.295 24 2.306 C 23.103 2.705 22.15 2.966 21.174 3.079 C 22.201 2.464 22.971 1.496 23.339 0.356 C 22.373 0.929 21.316 1.333 20.213 1.551 C 19.471 0.762 18.489 0.24 17.42 0.065 C 16.35 -0.11 15.253 0.072 14.298 0.583 C 13.342 1.094 12.582 1.905 12.134 2.892 C 11.686 3.879 11.575 4.985 11.82 6.041 C 9.862 5.943 7.948 5.434 6.2 4.549 C 4.452 3.663 2.91 2.42 1.673 0.9 C 1.044 1.984 0.852 3.266 1.135 4.487 C 1.418 5.707 2.155 6.774 3.196 7.471 C 2.415 7.446 1.65 7.235 0.966 6.857 L 0.966 6.918 C 0.965 8.055 1.358 9.157 2.078 10.038 C 2.799 10.918 3.801 11.521 4.916 11.746 C 4.192 11.944 3.432 11.973 2.695 11.83 C 3.009 12.808 3.622 13.664 4.446 14.277 C 5.27 14.891 6.265 15.231 7.292 15.252 C 5.548 16.622 3.394 17.365 1.177 17.361 C 0.783 17.361 0.39 17.337 0 17.289 C 2.253 18.734 4.874 19.502 7.55 19.501 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 2.249)\"/>"
  },
  "SocialIconPlatformTwitterStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 7.55 19.501 C 16.605 19.501 21.558 11.997 21.558 5.493 C 21.558 5.282 21.554 5.066 21.544 4.855 C 22.508 4.158 23.339 3.295 24 2.306 C 23.103 2.705 22.15 2.966 21.174 3.079 C 22.201 2.464 22.971 1.496 23.339 0.356 C 22.373 0.929 21.316 1.333 20.213 1.551 C 19.471 0.762 18.489 0.24 17.42 0.065 C 16.35 -0.11 15.253 0.072 14.298 0.583 C 13.342 1.094 12.582 1.905 12.134 2.892 C 11.686 3.879 11.575 4.985 11.82 6.041 C 9.862 5.943 7.948 5.434 6.2 4.549 C 4.452 3.663 2.91 2.42 1.673 0.9 C 1.044 1.984 0.852 3.266 1.135 4.487 C 1.418 5.707 2.155 6.774 3.196 7.471 C 2.415 7.446 1.65 7.235 0.966 6.857 L 0.966 6.918 C 0.965 8.055 1.358 9.157 2.078 10.038 C 2.799 10.918 3.801 11.521 4.916 11.746 C 4.192 11.944 3.432 11.973 2.695 11.83 C 3.009 12.808 3.622 13.664 4.446 14.277 C 5.27 14.891 6.265 15.231 7.292 15.252 C 5.548 16.622 3.394 17.365 1.177 17.361 C 0.783 17.361 0.39 17.337 0 17.289 C 2.253 18.734 4.874 19.502 7.55 19.501 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 2.249)\"/>"
  },
  "SocialIconPlatformXTwitterStyleGray2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 15.436 22 L 9.886 14.09 L 2.939 22 L 0 22 L 8.582 12.231 L 0 0 L 7.546 0 L 12.776 7.455 L 19.329 0 L 22.269 0 L 14.085 9.316 L 22.982 22 L 15.436 22 Z M 18.709 19.77 L 16.73 19.77 L 4.208 2.23 L 6.187 2.23 L 11.202 9.253 L 12.07 10.472 L 18.709 19.77 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.510 1)\"/>"
  },
  "SocialIconPlatformYouTubeStyleGrayState2": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 23.761 3.642 C 23.761 3.642 23.527 1.988 22.805 1.261 C 21.891 0.305 20.869 0.3 20.4 0.244 C 17.044 0 12.005 0 12.005 0 L 11.995 0 C 11.995 0 6.956 0 3.6 0.244 C 3.131 0.3 2.109 0.305 1.195 1.261 C 0.473 1.988 0.244 3.642 0.244 3.642 C 0.244 3.642 0 5.588 0 7.528 L 0 9.347 C 0 11.287 0.239 13.233 0.239 13.233 C 0.239 13.233 0.473 14.888 1.191 15.614 C 2.105 16.57 3.305 16.538 3.839 16.641 C 5.761 16.823 12 16.88 12 16.88 C 12 16.88 17.044 16.87 20.4 16.631 C 20.869 16.575 21.891 16.57 22.805 15.614 C 23.527 14.888 23.761 13.233 23.761 13.233 C 23.761 13.233 24 11.292 24 9.347 L 24 7.528 C 24 5.588 23.761 3.642 23.761 3.642 Z M 9.52 11.555 L 9.52 4.809 L 16.003 8.194 L 9.52 11.555 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0 3.558)\"/>"
  }
};
/** Pick a subset by name — pick('A','B') → { A: …, B: … } */
function pick(...names) {
  const out = {};
  for (const n of names) if (extra[n]) out[n] = extra[n];
  return out;
}
const extraNames = Object.keys(extra);
Object.assign(__ds_scope, { pick, extraNames, extra, __ds_default_components_marketing_icon_data_extra_5m8dd8: extra });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/icon-data-extra.js", error: String((e && e.message) || e) }); }

// components/navigation/RolloverMenu.jsx
try { (() => {
// The one component that keeps a shadow — it floats over content, which is
// what --shadow-float is for.
function RolloverMenu({
  items = [],
  selected = -1,
  onSelect,
  style
}) {
  const [hover, setHover] = React.useState(-1);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      minWidth: 160,
      background: 'var(--app-bg)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-control)',
      boxShadow: 'var(--shadow-float)',
      padding: 4,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => onSelect && onSelect(i),
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 400,
      textAlign: 'left',
      padding: '7px 10px',
      borderRadius: 6,
      border: 'none',
      cursor: 'pointer',
      color: i === selected ? 'var(--state-selected-ink)' : 'var(--ink-body)',
      background: i === selected ? 'var(--state-selected-bg)' : hover === i ? 'var(--state-hover-bg)' : 'transparent'
    }
  }, it)));
}
Object.assign(__ds_scope, { RolloverMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/RolloverMenu.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
// The dropdown panel IS RolloverMenu — one floating-menu implementation.
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  size = 'md',
  style
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: size === 'sm' ? 12.5 : 14,
      padding: size === 'sm' ? '5px 10px' : '11px 14px',
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${open ? 'var(--action-primary)' : 'var(--hairline)'}`,
      background: 'var(--app-bg)',
      color: value ? 'var(--ink)' : 'var(--ink-muted)',
      cursor: 'pointer',
      transition: 'border-color 0.15s ease-out'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textAlign: 'left'
    }
  }, value || placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--ink-faint)",
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.15s ease-out'
    }
  })), open && /*#__PURE__*/React.createElement(__ds_scope.RolloverMenu, {
    items: options,
    selected: options.indexOf(value),
    onSelect: i => {
      setOpen(false);
      onChange && onChange(options[i]);
    },
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      minWidth: '100%',
      marginTop: 4,
      zIndex: 20
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarItem.jsx
try { (() => {
// LOCKED left-nav row (app surface only). Structure and spacing come from the
// shipping Opportunities sidebar: 24px icon slot, 6px gap, 4px/8px padding, 13.5px label.
// Active = purple selection TINT + full-ink label + purple ICON. Never a
// purple label, never an opaque fill.
// Labels are Title Case ("Pipeline Overview") — the one deliberate exception to the
// app's sentence-case rule (design.md §2). Section headers stay uppercase, unaffected.
function SidebarItem({
  icon = 'bot',
  label,
  active = false,
  iconColor,
  tag,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px',
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 400,
      color: active ? 'var(--state-selected-ink)' : 'var(--ink-body)',
      background: active ? 'var(--state-selected-bg)' : hover ? 'var(--state-hover-bg)' : 'transparent',
      transition: 'background 0.15s ease-out',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 7,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: active ? 'var(--state-selected-glyph)' : iconColor || 'inherit'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      color: active ? 'var(--ink)' : 'var(--ink-body)'
    }
  }, label), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--ink-muted)',
      flex: 'none'
    }
  }, tag));
}
Object.assign(__ds_scope, { SidebarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarItem.jsx", error: String((e && e.message) || e) }); }

// components/status/ApprovalPill.jsx
try { (() => {
// APP ONLY. The agent-approval state pill (design.md §7). Outlined + glyph + label — the
// second of the two pill classes: filled means you clicked it (filter pills), outlined
// means the system is telling you something (this). Values match
// screens/3-MeetingDetail.card.html exactly: 6px radius, 1px border, 6px/10px padding,
// 12px glyph, 12px/500 sentence-case label. Pending is loud (full ink label, and the row
// keeps its visible Reject / Accept controls); accepted and rejected are quiet; `neutral`
// is the group-level "All reviewed" summary. Never a partial-fill ring here — approval is
// a fork, not a sequence.
const STATES = {
  pending: {
    label: 'Pending',
    icon: 'circle',
    border: 'var(--status-warning-glyph)',
    background: 'color-mix(in srgb, var(--status-warning-glyph) 9%, transparent)',
    glyph: 'var(--status-warning-glyph)',
    color: 'var(--ink-65)'
  },
  accepted: {
    label: 'Accepted',
    icon: 'check',
    border: 'color-mix(in srgb, var(--brand-mint) 78%, var(--brand-teal))',
    background: 'color-mix(in srgb, var(--brand-mint) 20%, transparent)',
    glyph: 'var(--status-positive-ink)',
    color: 'var(--status-positive-ink)'
  },
  rejected: {
    label: 'Rejected',
    icon: 'x',
    border: 'color-mix(in srgb, var(--status-negative-glyph) 55%, transparent)',
    background: 'color-mix(in srgb, var(--status-negative-glyph) 7%, transparent)',
    glyph: 'var(--status-negative-ink)',
    color: 'var(--status-negative-ink)'
  },
  neutral: {
    label: 'All reviewed',
    icon: 'check',
    border: 'rgba(33, 33, 33, 0.15)',
    background: 'transparent',
    glyph: 'var(--ink-muted)',
    color: 'var(--ink-muted)'
  }
};
function ApprovalPill({
  state = 'pending',
  children,
  style
}) {
  const s = STATES[state] || STATES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      border: `1px solid ${s.border}`,
      background: s.background,
      color: s.color,
      borderRadius: 6,
      padding: '6px 10px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 12,
    color: s.glyph
  }), children || s.label);
}
Object.assign(__ds_scope, { ApprovalPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/ApprovalPill.jsx", error: String((e && e.message) || e) }); }

// components/status/StatusGlyph.jsx
try { (() => {
// The one precise color per row. Every status meaning renders through this;
// nothing else in a row is colored. Progression inside one meaning is
// `filled` (ring → dot), never a new hue.
const GLYPH = {
  positive: 'var(--status-positive-glyph)',
  info: 'var(--status-info-glyph)',
  engaged: 'var(--status-engaged-glyph)',
  warning: 'var(--status-warning-glyph)',
  negative: 'var(--status-negative-glyph)',
  neutral: 'var(--status-neutral-glyph)'
};
function StatusGlyph({
  tone = 'neutral',
  filled = true,
  size = 6,
  style
}) {
  const c = GLYPH[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      flex: 'none',
      display: 'inline-block',
      background: filled ? c : 'transparent',
      boxShadow: filled ? 'none' : `inset 0 0 0 1.5px ${c}`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { StatusGlyph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/StatusGlyph.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MenuItem.jsx
try { (() => {
// Menu items in a list don't each need an outline; the list is the container.
// Confirmed collapses to one 6px positive glyph.
function MenuItem({
  state = 'default',
  icon,
  label,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const look = {
    default: {
      bg: hover ? 'var(--state-hover-bg)' : 'transparent',
      fg: 'var(--ink-body)'
    },
    selected: {
      bg: 'var(--state-selected-bg)',
      fg: 'var(--state-selected-ink)'
    },
    confirmed: {
      bg: hover ? 'var(--state-hover-bg)' : 'transparent',
      fg: 'var(--ink)'
    }
  }[state];
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 10px',
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 400,
      background: look.bg,
      color: look.fg,
      transition: 'background 0.15s ease-out',
      ...style
    }
  }, state === 'confirmed' ? /*#__PURE__*/React.createElement(__ds_scope.StatusGlyph, {
    tone: "positive"
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, label));
}
Object.assign(__ds_scope, { MenuItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MenuItem.jsx", error: String((e && e.message) || e) }); }

// components/status/Badge.jsx
try { (() => {
// APP ONLY. Three forms: `glyph` (default, ~90% of usage), `tint` (a cell that must carry
// its state without an adjacent label), and `pill` (bordered + faintly tinted — for
// actionable status that is also a primary scanning target, e.g. Opportunities Stage
// column; design.md "Status vs. actionable status"). `actionable` adds the PERSISTENT
// caret — the one licensed mark that lets a status read as changeable. Pure status never
// gets it.
function Badge({
  tone = 'neutral',
  form = 'glyph',
  filled = true,
  actionable = false,
  pill = false,
  onClick,
  children,
  style,
  glyphStyle
}) {
  const caret = actionable ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12,
    color: "var(--status-caret-ink)",
    style: {
      marginLeft: 1
    }
  }) : null;
  const act = actionable ? {
    cursor: 'pointer'
  } : null;
  if (form === 'glyph' && !pill) return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--ink-body)',
      whiteSpace: 'nowrap',
      ...act,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusGlyph, {
    tone: tone,
    filled: filled,
    style: glyphStyle
  }), children, caret);
  if (pill) return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      fontWeight: 400,
      lineHeight: 1.4,
      padding: '3px 6px',
      borderRadius: 'var(--stage-pill-radius)',
      whiteSpace: 'nowrap',
      background: `color-mix(in srgb, var(--status-${tone}-tint) var(--stage-pill-tint-strength), transparent)`,
      border: `1px solid var(--status-${tone}-border)`,
      color: 'var(--ink-body)',
      ...act,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusGlyph, {
    tone: tone,
    filled: filled,
    style: glyphStyle
  }), children, actionable && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12,
    color: "var(--status-caret-ink)",
    style: {
      marginLeft: -2
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      fontWeight: 400,
      lineHeight: 1.4,
      padding: '3px 8px',
      borderRadius: 'var(--radius-control)',
      whiteSpace: 'nowrap',
      background: `var(--status-${tone}-tint)`,
      border: `1px solid var(--status-${tone}-border)`,
      color: `var(--status-${tone}-ink)`,
      ...act,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusGlyph, {
    tone: tone,
    filled: filled,
    style: glyphStyle
  }), children, caret);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Badge.jsx", error: String((e && e.message) || e) }); }

// components/structure/Row.jsx
try { (() => {
// The unit the app is actually made of. No border, no card: glyph + type
// roles + hover-revealed actions. Rules only between rows, and only in true
// tables. Action space is reserved at rest (opacity 0) so nothing reflows.
function Row({
  tone,
  filled = true,
  title,
  description,
  metric,
  meta,
  actions,
  rule = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 48,
      padding: '0 12px',
      borderBottom: rule ? '1px solid var(--hairline)' : 'none',
      background: hover ? 'var(--state-hover-bg)' : 'transparent',
      transition: 'background 0.15s ease-out',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, tone && /*#__PURE__*/React.createElement(__ds_scope.StatusGlyph, {
    tone: tone,
    filled: filled
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13.5,
      fontWeight: 500,
      color: 'var(--ink)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      color: 'var(--ink-muted)',
      marginTop: 1
    }
  }, description)), metric && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--ink)',
      textAlign: 'right'
    }
  }, metric), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      textAlign: 'right',
      fontSize: 12.5,
      color: 'var(--ink-muted)'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2,
      opacity: hover ? 1 : 0,
      transition: 'opacity 0.15s ease-out',
      pointerEvents: hover ? 'auto' : 'none'
    }
  }, actions));
}
Object.assign(__ds_scope, { Row });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Row.jsx", error: String((e && e.message) || e) }); }

// components/structure/SectionLabel.jsx
try { (() => {
// The app's section delimiter — the load-bearing one. A section = generous
// top gap + this label. No rule, no card, no fill. Replaces bordered card
// headers, border-bottom rules, and tinted header bars.
function SectionLabel({
  children,
  gap = 32,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)',
      marginTop: gap,
      marginBottom: 8,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/structure/Card.jsx
try { (() => {
// Three variants; `bare` is the DEFAULT. A container marks a genuinely
// distinct functional zone. Before adding a boundary, ask in order: can space
// do it? can type? can alignment? can a tonal shift? Only then an outline —
// and never inside another one (data-container-level is lintable: an outline
// or tint card may not contain another outline or tint card).
function Card({
  variant = 'bare',
  label,
  title,
  meta,
  trailing,
  padding,
  children,
  onClick,
  style
}) {
  const V = {
    bare: {
      background: 'transparent',
      border: 'none',
      padding: padding ?? 0
    },
    outline: {
      background: 'transparent',
      border: 'var(--border-card-strong)',
      borderRadius: 'var(--radius-card)',
      padding: padding ?? 20
    },
    tint: {
      background: 'var(--app-bg-alt)',
      border: 'none',
      borderRadius: 'var(--radius-control)',
      padding: padding ?? 20
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    "data-container-level": "1",
    style: {
      fontFamily: 'var(--font-body)',
      cursor: onClick ? 'pointer' : 'default',
      ...V,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, {
    gap: 0
  }, label), (title || trailing) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, title), trailing), children, meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)',
      marginTop: 8
    }
  }, meta));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Card.jsx", error: String((e && e.message) || e) }); }

// components/structure/StatCallout.jsx
try { (() => {
// Generated-document stat callout (design.md §6): display figure + small
// uppercase label + body + source link PINNED to the bottom baseline so
// side-by-side callouts share a baseline whether or not they carry a source.
// Document mode: Archivo only; figure is a metric, not display type.
function StatCallout({
  figure,
  label,
  sourceLabel,
  sourceHref,
  figureSize = 40,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: figureSize,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      color: 'var(--ink)'
    }
  }, figure), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--ink-muted)',
      marginTop: 10
    }
  }, label), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-body)',
      marginTop: 10
    }
  }, children), sourceHref && /*#__PURE__*/React.createElement("a", {
    href: sourceHref,
    target: "_blank",
    rel: "noreferrer",
    style: {
      marginTop: 'auto',
      paddingTop: 14,
      fontSize: 12.5,
      color: 'var(--brand-teal)',
      textDecoration: 'underline',
      textDecorationColor: 'rgba(45,196,168,0.4)',
      textUnderlineOffset: 3,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      alignSelf: 'flex-start'
    }
  }, sourceLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link",
    size: 13
  })));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/StatCallout.jsx", error: String((e && e.message) || e) }); }

// components/structure/Tabs.jsx
try { (() => {
// Active label is ink at 500, not colored — color stays on the 2px rule so
// nine tabs don't produce nine colored words.
function Tabs({
  items = [],
  active = 0,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 28,
      borderBottom: '1px solid var(--hairline)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, items.map((t, i) => {
    const label = typeof t === 'string' ? t : t.label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => onChange && onChange(i),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        fontWeight: i === active ? 500 : 400,
        color: i === active ? 'var(--ink)' : 'var(--ink-muted)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 2px 9px',
        marginBottom: -1,
        borderBottom: `2px solid ${i === active ? 'var(--action-primary)' : 'transparent'}`,
        transition: 'color 0.15s ease-out'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Tabs.jsx", error: String((e && e.message) || e) }); }

if (__ds_scope.__ds_default_components_marketing_icon_data_core_axir2p$1gpem0a === undefined) __ds_scope.__ds_default_components_marketing_icon_data_core_axir2p$1gpem0a = __ds_scope.__ds_default_components_marketing_icon_data_core_axir2p;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.RolloverMenu = __ds_scope.RolloverMenu;

__ds_ns.SidebarItem = __ds_scope.SidebarItem;

__ds_ns.ApprovalPill = __ds_scope.ApprovalPill;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatusGlyph = __ds_scope.StatusGlyph;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Row = __ds_scope.Row;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
