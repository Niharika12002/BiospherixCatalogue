<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>BioSpherix Layout Planner</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

<!-- React + Babel via CDN (Option A: single-file build for GitHub Pages) -->
<!-- Using development build for clearer error messages during testing -->
<script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.23.5/babel.min.js"></script>

<style>
:root {
  --navy:    #1B3A6B;
  --navy-d:  #122749;
  --orange:  #E8772E;
  --orange-d:#C75F1E;
  --bg:      #F4F6FA;
  --surface: #FFFFFF;
  --border:  #E2EAF4;
  --border-strong: #C7D3E3;
  --grid:    #EEF2F7;
  --text:    #1A2332;
  --text-2:  #5A6B82;
  --text-3:  #8B9AAE;
  --chamber-tint: #EFF4FB;
  --controller-tint: #FFF4EC;
  --third-tint: #F4F0EA;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  height: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button { font-family: inherit; cursor: pointer; }
input, textarea { font-family: inherit; }

.mono { font-family: 'IBM Plex Mono', monospace; }

#root { min-height: 100vh; }

/* ============================================================
   APP SHELL
============================================================ */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  background: var(--navy);
  color: #fff;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--orange);
}

.topbar-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.topbar-mark {
  width: 32px;
  height: 32px;
  border: 1.5px solid #fff;
  display: grid;
  place-items: center;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.04em;
}

.topbar-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.topbar-sub {
  font-size: 11px;
  color: #B7C6DE;
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 2px;
}

.topbar-actions { display: flex; gap: 8px; }

.btn {
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.15s ease;
  letter-spacing: 0.01em;
}
.btn-primary {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
}
.btn-primary:hover { background: var(--orange-d); border-color: var(--orange-d); }
.btn-ghost {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,0.3);
}
.btn-ghost:hover { background: rgba(255,255,255,0.1); }
.btn-quiet {
  background: transparent;
  color: var(--text-2);
  border-color: var(--border);
}
.btn-quiet:hover { background: var(--bg); color: var(--text); }

/* ============================================================
   PROJECT META BAR
============================================================ */
.metabar {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 14px 24px;
  display: grid;
  grid-template-columns: 1.4fr 1.4fr 1fr 1fr 1fr;
  gap: 18px;
  align-items: end;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.field-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
  font-family: 'IBM Plex Mono', monospace;
}

.field-input {
  background: transparent;
  border: none;
  border-bottom: 1.5px solid var(--border-strong);
  padding: 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  outline: none;
  transition: border-color 0.15s ease;
}
.field-input:focus { border-bottom-color: var(--navy); }

.field-input.mono { font-family: 'IBM Plex Mono', monospace; }

.field-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.field-num {
  width: 50px;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid var(--border-strong);
  padding: 4px 0;
  font-size: 14px;
  font-weight: 500;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--text);
  outline: none;
  text-align: center;
}
.field-num:focus { border-bottom-color: var(--navy); }

.field-sep {
  font-family: 'IBM Plex Mono', monospace;
  color: var(--text-3);
  font-size: 13px;
}

/* ============================================================
   MAIN LAYOUT
============================================================ */
.workspace {
  flex: 1;
  display: grid;
  grid-template-columns: 260px 1fr 340px;
  min-height: 0;
}

@media (max-width: 1200px) {
  .workspace { grid-template-columns: 220px 1fr 300px; }
}

/* ============================================================
   SIDEBAR — COMPONENT LIBRARY
============================================================ */
.sidebar {
  background: var(--surface);
  border-right: 1px solid var(--border);
  padding: 20px 16px;
  overflow-y: auto;
}

.section-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
  font-family: 'IBM Plex Mono', monospace;
  margin-bottom: 10px;
  padding-left: 4px;
}

.section-group {
  margin-bottom: 22px;
}

.lib-item {
  display: block;
  width: 100%;
  text-align: left;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 10px 12px;
  margin-bottom: 6px;
  cursor: pointer;
  transition: all 0.12s ease;
  position: relative;
}
.lib-item:hover {
  border-color: var(--navy);
  background: #FAFBFD;
  transform: translateX(2px);
}
.lib-item:active {
  transform: translateX(0);
  background: var(--chamber-tint);
}

.lib-item-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.005em;
}

.lib-item-meta {
  font-size: 10.5px;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--text-3);
  margin-top: 3px;
  letter-spacing: 0.02em;
}

.lib-item-part {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 10px;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--orange);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.lib-hint {
  font-size: 11px;
  color: var(--text-3);
  padding: 8px 4px;
  font-style: italic;
  line-height: 1.5;
}

/* ============================================================
   CANVAS AREA
============================================================ */
.canvas-area {
  background: var(--bg);
  padding: 24px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.canvas-frame {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(27,58,107,0.06);
  user-select: none;
}

/* Engineering blueprint ruler ticks around the canvas */
.ruler-x, .ruler-y {
  position: absolute;
  color: var(--text-3);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.canvas-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.canvas-empty {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: var(--text-3);
  font-size: 13px;
  text-align: center;
  line-height: 1.7;
  pointer-events: none;
  padding: 40px;
}

.placed {
  position: absolute;
  background: var(--surface);
  border: 1.5px solid var(--navy);
  border-radius: 2px;
  cursor: grab;
  display: flex;
  flex-direction: column;
  padding: 4px 6px;
  overflow: hidden;
  transition: box-shadow 0.12s ease, border-color 0.12s ease;
  box-shadow: 0 1px 2px rgba(27,58,107,0.08);
}
.placed:hover {
  box-shadow: 0 2px 6px rgba(27,58,107,0.18);
}
.placed.dragging {
  cursor: grabbing;
  box-shadow: 0 4px 14px rgba(27,58,107,0.25);
  z-index: 10;
}
.placed.selected {
  border-color: var(--orange);
  border-width: 2px;
  box-shadow: 0 0 0 2px rgba(232,119,46,0.18);
}

.placed.t-chamber { background: var(--chamber-tint); }
.placed.t-controller { background: var(--controller-tint); }
.placed.t-thirdparty {
  background: var(--third-tint);
  border-style: dashed;
  border-color: var(--text-2);
}

.placed-name {
  font-size: 10px;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--text);
}

.placed-dims {
  font-size: 9px;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--text-2);
  margin-top: 2px;
  letter-spacing: 0.02em;
}

.placed-part {
  position: absolute;
  bottom: 3px;
  right: 5px;
  font-size: 8.5px;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--orange);
  font-weight: 600;
}

.remove-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--orange);
  color: #fff;
  border: none;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  display: grid;
  place-items: center;
  line-height: 1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* ============================================================
   READOUT PANEL
============================================================ */
.panel {
  background: var(--surface);
  border-left: 1px solid var(--border);
  padding: 20px;
  overflow-y: auto;
}

.panel-section {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.panel-section:last-child { border-bottom: none; }

.panel-h {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
  font-family: 'IBM Plex Mono', monospace;
  margin-bottom: 12px;
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 18px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.stat-label {
  font-size: 10px;
  color: var(--text-3);
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.stat-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--navy);
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: -0.01em;
}

.stat-unit {
  font-size: 11px;
  color: var(--text-3);
  font-weight: 500;
  margin-left: 3px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
  background: var(--chamber-tint);
  color: var(--navy);
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.02em;
  border: 1px solid var(--border);
}

.tag.empty {
  color: var(--text-3);
  background: transparent;
  font-style: italic;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border: 1px dashed var(--border-strong);
}

.parts-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.parts-list li {
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  background: var(--bg);
  border-radius: 3px;
  font-size: 12px;
}

.parts-name {
  color: var(--text);
  font-weight: 500;
}

.parts-num {
  font-family: 'IBM Plex Mono', monospace;
  color: var(--orange);
  font-weight: 600;
  font-size: 11px;
}

.intent-body {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text);
  background: var(--bg);
  border-left: 3px solid var(--orange);
  padding: 14px 16px;
  border-radius: 0 4px 4px 0;
}

.intent-body em {
  font-style: normal;
  font-weight: 600;
  color: var(--navy);
}

.intent-empty {
  color: var(--text-3);
  font-style: italic;
}

/* ============================================================
   PRINT VIEW
============================================================ */
@media print {
  @page { size: letter; margin: 0.5in; }
  body { background: white; }
  .topbar, .sidebar, .panel-actions, .remove-btn, .metabar-actions { display: none !important; }
  .metabar {
    border-bottom: 2px solid var(--navy);
    padding: 0 0 14px 0;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .workspace {
    display: block;
    padding: 0;
  }
  .canvas-area {
    background: white;
    padding: 0;
    margin-bottom: 18px;
    page-break-inside: avoid;
  }
  .canvas-frame {
    box-shadow: none;
    border: 1.5px solid var(--navy);
  }
  .panel {
    border-left: none;
    padding: 0;
    background: white;
  }
  .panel-section { page-break-inside: avoid; }
  .placed { box-shadow: none !important; }
  .placed.selected { border-color: var(--navy) !important; box-shadow: none !important; }
  .print-only { display: block !important; }
  .print-header {
    border-bottom: 2px solid var(--navy);
    padding-bottom: 14px;
    margin-bottom: 18px;
    display: flex !important;
    justify-content: space-between;
    align-items: flex-end;
  }
  .print-header-title {
    font-size: 22px;
    font-weight: 700;
    color: var(--navy);
    letter-spacing: -0.02em;
  }
  .print-header-sub {
    font-size: 11px;
    color: var(--text-2);
    font-family: 'IBM Plex Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 3px;
  }
  .print-header-meta {
    text-align: right;
    font-size: 11px;
    font-family: 'IBM Plex Mono', monospace;
    color: var(--text-2);
  }
}

.print-only { display: none; }

</style>
</head>
<body>
<div id="root">
  <!-- Visible until React mounts. If you see this for >5 seconds, scripts didn't load. -->
  <div id="boot-fallback" style="position:fixed;inset:0;display:grid;place-items:center;font-family:'IBM Plex Sans',sans-serif;color:#5A6B82;background:#F4F6FA;">
    <div style="text-align:center;max-width:480px;padding:24px;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8B9AAE;margin-bottom:12px;">BioSpherix Layout Planner</div>
      <div style="font-size:14px;margin-bottom:18px;">Loading…</div>
      <div id="boot-status" style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#8B9AAE;line-height:1.7;text-align:left;background:white;border:1px solid #E2EAF4;border-radius:4px;padding:14px;">
        Checking dependencies…
      </div>
      <div id="boot-error" style="display:none;margin-top:14px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:#C75F1E;background:#FFF4EC;border:1px solid #E8772E;border-radius:4px;padding:14px;text-align:left;white-space:pre-wrap;"></div>
    </div>
  </div>
</div>

<!-- Diagnostic: runs before Babel processes the JSX block -->
<script>
  (function() {
    var status = document.getElementById('boot-status');
    var errBox = document.getElementById('boot-error');
    function setStatus(msg) { if (status) status.textContent = msg; }
    function showError(msg) {
      if (errBox) { errBox.style.display = 'block'; errBox.textContent = msg; }
    }
    // Capture any runtime errors during boot
    window.addEventListener('error', function(e) {
      showError('Error: ' + (e.message || e.error) + '\n\nOpen the browser console (F12) for details.');
    });
    // Check dependencies after a short delay
    setTimeout(function() {
      var checks = [];
      checks.push('React: ' + (typeof React !== 'undefined' ? 'loaded ✓' : 'FAILED'));
      checks.push('ReactDOM: ' + (typeof ReactDOM !== 'undefined' ? 'loaded ✓' : 'FAILED'));
      checks.push('Babel: ' + (typeof Babel !== 'undefined' ? 'loaded ✓' : 'FAILED'));
      setStatus(checks.join('\n'));
      if (typeof React === 'undefined' || typeof ReactDOM === 'undefined' || typeof Babel === 'undefined') {
        showError('One or more CDN scripts failed to load.\n\nCheck your internet connection, or try:\n1. Hard refresh (Cmd/Ctrl + Shift + R)\n2. Open in a different browser\n3. Serve via local server instead of file://');
      }
    }, 1500);
  })();
</script>

<script type="text/babel">
const { useState, useRef, useEffect, useMemo } = React;

/* ============================================================
   COMPONENT LIBRARY DATA — sourced from official BioSpherix PDFs
   Dimensions in inches.
============================================================ */
const COMPONENTS = [
  // Chambers
  { id: 'c174',     name: 'C-Chamber',         variant: '1-shelf',  type: 'chamber',    w: 14,    d: 13, h: 5.25, weight: null, gases: ['O₂','CO₂'], part: 'C174' },
  { id: 'c274',     name: 'C-Chamber',         variant: '2-shelf',  type: 'chamber',    w: 14,    d: 13, h: 6,    weight: null, gases: ['O₂','CO₂'], part: 'C274' },
  { id: 'c374',     name: 'C-Chamber',         variant: '3-shelf',  type: 'chamber',    w: 14,    d: 13, h: 8,    weight: null, gases: ['O₂','CO₂'], part: 'C374' },
  { id: 'c474',     name: 'C-Chamber',         variant: '4-shelf',  type: 'chamber',    w: 14,    d: 13, h: 10,   weight: null, gases: ['O₂','CO₂'], part: 'C474' },
  // Compact controllers
  { id: 'proxp110', name: 'ProOx P110',        variant: 'Compact O₂',                  type: 'controller', w: 8.875, d: 9, h: 4.375, weight: 3.9, gases: ['O₂'],         part: 'P110', cap: 'oxygen control' },
  { id: 'proxp360', name: 'ProOx P360',        variant: 'High-infusion O₂',            type: 'controller', w: 8.875, d: 9, h: 4.375, weight: 4.1, gases: ['O₂'],         part: 'P360', cap: 'high-infusion-rate oxygen control' },
  { id: 'proco2',   name: 'ProCO₂ P120',       variant: 'Compact CO₂',                 type: 'controller', w: 8.875, d: 9, h: 4.375, weight: 3.9, gases: ['CO₂'],        part: 'P120', cap: 'CO₂ regulation' },
  { id: 'proxc21',  name: 'ProOx C21',         variant: 'Compact O₂ + CO₂',            type: 'controller', w: 8.875, d: 9, h: 4.375, weight: 4.7, gases: ['O₂','CO₂'],   part: 'C21',  cap: 'combined O₂ and CO₂ control' },
  // Dynamic / advanced controllers
  { id: 'oxyc42',   name: 'OxyCycler C42',     variant: 'Dynamic O₂/CO₂/N₂',           type: 'controller', w: 11,    d: 10, h: 7,    weight: null, gases: ['O₂','CO₂','N₂'], part: 'C42',  cap: 'dynamic O₂/CO₂ cycling for paired experimental and control conditions' },
  { id: 'oxystr',   name: 'OxyStreamer',       variant: 'Perfusion gas pre-conditioner', type: 'controller', w: 7,    d: 9, h: 13,   weight: null, gases: ['O₂','CO₂','N₂'], part: 'OxyStreamer', cap: 'gas pre-conditioning for perfusion media' },
  { id: 'gt41',     name: 'OxyCycler GT41',    variant: 'Gasotransmitter-capable',     type: 'controller', w: 11,    d: 10, h: 7,    weight: null, gases: ['O₂','CO₂','RH'], part: 'GT41', cap: 'gasotransmitter-capable control (O₂, CO₂, RH, with optional CO/NO)' },
  // Placeholder for third-party
  { id: '3rd',      name: 'Third-party equipment', variant: 'placeholder',             type: 'thirdparty', w: 12,    d: 12, h: 12,   weight: null, gases: [],             part: '—' },
];

const findComp = (id) => COMPONENTS.find(c => c.id === id);

/* ============================================================
   DESIGN INTENT — auto-generated paragraph from current layout
============================================================ */
function generateDesignIntent({ placed, benchW, benchD, clientName }) {
  if (placed.length === 0) return null;

  const items = placed.map(p => findComp(p.componentId)).filter(Boolean);
  const chambers = items.filter(c => c.type === 'chamber');
  const controllers = items.filter(c => c.type === 'controller');
  const thirds = items.filter(c => c.type === 'thirdparty');

  // Bounding box of placed components
  const bbox = computeBoundingBox(placed);

  // Union of gases
  const gases = [...new Set(items.flatMap(c => c.gases))];

  // Chamber description
  let chamberPhrase = '';
  if (chambers.length === 1) {
    chamberPhrase = `a ${chambers[0].part} ${chambers[0].variant} C-Chamber`;
  } else if (chambers.length > 1) {
    const variants = chambers.map(c => c.variant).join(' / ');
    chamberPhrase = `${chambers.length} C-Chambers (${variants})`;
  }

  // Controller description
  let ctrlPhrase = '';
  if (controllers.length === 1) {
    ctrlPhrase = `the ${controllers[0].name} for ${controllers[0].cap || 'environmental control'}`;
  } else if (controllers.length > 1) {
    const names = controllers.map(c => c.name).join(', ');
    ctrlPhrase = `${controllers.length} controllers (${names})`;
  }

  // Build sentences
  let sentences = [];

  if (chambers.length && controllers.length) {
    const client = clientName ? ` for <em>${clientName}</em>` : '';
    sentences.push(`This configuration${client} pairs <em>${chamberPhrase}</em> with <em>${ctrlPhrase}</em>, occupying a bench footprint of <em>${bbox.w}″ × ${bbox.d}″</em>.`);
  } else if (chambers.length) {
    sentences.push(`This configuration includes <em>${chamberPhrase}</em>, occupying <em>${bbox.w}″ × ${bbox.d}″</em> of bench space. Add a controller from the library to enable gas regulation.`);
  } else if (controllers.length) {
    sentences.push(`This configuration includes <em>${ctrlPhrase}</em>, occupying <em>${bbox.w}″ × ${bbox.d}″</em>. Add a chamber from the library to define the controlled workspace.`);
  } else {
    sentences.push(`This configuration includes ${thirds.length} third-party component(s), occupying <em>${bbox.w}″ × ${bbox.d}″</em>.`);
  }

  // Capability sentence
  if (gases.length) {
    sentences.push(`The system supports control of <em>${gases.join(', ')}</em>, suitable for ${applicationPhrase(items)}.`);
  }

  // Third-party integration
  if (thirds.length) {
    sentences.push(`The layout integrates <em>${thirds.length}</em> third-party component${thirds.length > 1 ? 's' : ''} for workflow-specific equipment.`);
  }

  // Footprint vs bench remark
  const utilizationW = (bbox.w / benchW * 100).toFixed(0);
  const utilizationD = (bbox.d / benchD * 100).toFixed(0);
  if (bbox.w > 0 && bbox.d > 0) {
    sentences.push(`Total layout uses <em>${utilizationW}%</em> of bench width and <em>${utilizationD}%</em> of bench depth.`);
  }

  return sentences.join(' ');
}

function applicationPhrase(items) {
  const ids = new Set(items.map(i => i.id));
  if (ids.has('oxystr')) return 'live-cell microscopy and perfusion workflows';
  if (ids.has('gt41')) return 'gasotransmitter research (CO/NO/hypoxia studies)';
  if (ids.has('oxyc42')) return 'dynamic cycling protocols and ischemia/reperfusion studies';
  if (ids.has('proxp360')) return 'hypoxia, hyperoxia, and in vivo enclosure work';
  if (ids.has('proxp110') || ids.has('proxc21')) return 'hypoxia, stem cell, and tumor microenvironment studies';
  if (ids.has('proco2')) return 'CO₂-sensitive cell culture applications';
  return 'controlled cell culture and physiologic research';
}

function computeBoundingBox(placed) {
  if (placed.length === 0) return { w: 0, d: 0, x: 0, y: 0 };
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of placed) {
    const c = findComp(p.componentId);
    if (!c) continue;
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x + c.w);
    maxY = Math.max(maxY, p.y + c.d);
  }
  return {
    w: +(maxX - minX).toFixed(1),
    d: +(maxY - minY).toFixed(1),
    x: minX,
    y: minY,
  };
}

/* ============================================================
   MAIN APP
============================================================ */
function App() {
  const [projectName, setProjectName] = useState('Untitled system');
  const [clientName, setClientName]   = useState('');
  const [benchW, setBenchW] = useState(60);
  const [benchD, setBenchD] = useState(30);
  const [placed, setPlaced] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [draggingId, setDraggingId] = useState(null);

  const nextId = useRef(1);

  function addComponent(componentId) {
    const comp = findComp(componentId);
    if (!comp) return;
    const id = `p${nextId.current++}`;
    // Place near top-left, but offset to stack new items
    const offset = (placed.length % 5) * 2;
    const x = Math.min(2 + offset, benchW - comp.w);
    const y = Math.min(2 + offset, benchD - comp.d);
    setPlaced(prev => [...prev, { id, componentId, x: Math.max(0, x), y: Math.max(0, y) }]);
    setSelectedId(id);
  }

  function removePlaced(id) {
    setPlaced(prev => prev.filter(p => p.id !== id));
    if (selectedId === id) setSelectedId(null);
  }

  function clearAll() {
    if (placed.length === 0) return;
    if (!confirm('Clear all placed components?')) return;
    setPlaced([]);
    setSelectedId(null);
  }

  function handlePrint() { window.print(); }

  // Bench size handlers
  function setBenchWClamp(v) {
    const n = Math.max(12, Math.min(120, Math.round(Number(v) || 60)));
    setBenchW(n);
  }
  function setBenchDClamp(v) {
    const n = Math.max(12, Math.min(80, Math.round(Number(v) || 30)));
    setBenchD(n);
  }

  // Stats
  const stats = useMemo(() => {
    const items = placed.map(p => findComp(p.componentId)).filter(Boolean);
    const chambers = items.filter(c => c.type === 'chamber').length;
    const controllers = items.filter(c => c.type === 'controller').length;
    const thirds = items.filter(c => c.type === 'thirdparty').length;
    const bbox = computeBoundingBox(placed);
    const knownWeight = items.reduce((acc, c) => acc + (c.weight || 0), 0);
    const unknownWeightCount = items.filter(c => c.weight == null).length;
    const gases = [...new Set(items.flatMap(c => c.gases))];
    const partList = items.map(c => ({ name: c.name + (c.variant && c.variant !== 'placeholder' ? ` — ${c.variant}` : ''), part: c.part }));
    return { chambers, controllers, thirds, bbox, knownWeight, unknownWeightCount, gases, partList };
  }, [placed]);

  const intent = useMemo(
    () => generateDesignIntent({ placed, benchW, benchD, clientName }),
    [placed, benchW, benchD, clientName]
  );

  return (
    <div className="app">
      <TopBar projectName={projectName} onPrint={handlePrint} onClear={clearAll} />
      <MetaBar
        projectName={projectName} setProjectName={setProjectName}
        clientName={clientName}   setClientName={setClientName}
        benchW={benchW} setBenchW={setBenchWClamp}
        benchD={benchD} setBenchD={setBenchDClamp}
      />

      <div className="workspace">
        <Sidebar onPick={addComponent} />
        <CanvasArea
          benchW={benchW} benchD={benchD}
          placed={placed} setPlaced={setPlaced}
          selectedId={selectedId} setSelectedId={setSelectedId}
          draggingId={draggingId} setDraggingId={setDraggingId}
          removePlaced={removePlaced}
        />
        <ReadoutPanel stats={stats} intent={intent} clientName={clientName} projectName={projectName} />
      </div>
    </div>
  );
}

/* ============================================================
   TOP BAR
============================================================ */
function TopBar({ projectName, onPrint, onClear }) {
  return (
    <div className="topbar">
      <div className="topbar-brand">
        <div className="topbar-mark">BS</div>
        <div>
          <div className="topbar-title">BioSpherix Layout Planner</div>
          <div className="topbar-sub">Custom System · Bench Configuration</div>
        </div>
      </div>
      <div className="topbar-actions">
        <button className="btn btn-ghost" onClick={onClear}>Clear</button>
        <button className="btn btn-primary" onClick={onPrint}>Print proposal</button>
      </div>
    </div>
  );
}

/* ============================================================
   META BAR
============================================================ */
function MetaBar({ projectName, setProjectName, clientName, setClientName, benchW, setBenchW, benchD, setBenchD }) {
  return (
    <div className="metabar">
      <div className="field">
        <label className="field-label">Project</label>
        <input className="field-input" value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="System name" />
      </div>
      <div className="field">
        <label className="field-label">Client</label>
        <input className="field-input" value={clientName} onChange={e => setClientName(e.target.value)} placeholder="Optional" />
      </div>
      <div className="field">
        <label className="field-label">Bench width</label>
        <div className="field-row">
          <input className="field-num" type="number" min="12" max="120" value={benchW} onChange={e => setBenchW(e.target.value)} />
          <span className="field-sep">in</span>
        </div>
      </div>
      <div className="field">
        <label className="field-label">Bench depth</label>
        <div className="field-row">
          <input className="field-num" type="number" min="12" max="80" value={benchD} onChange={e => setBenchD(e.target.value)} />
          <span className="field-sep">in</span>
        </div>
      </div>
      <div className="field">
        <label className="field-label">Date</label>
        <div className="field-input mono" style={{ borderBottom: 'none', padding: 0 }}>
          {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SIDEBAR
============================================================ */
function Sidebar({ onPick }) {
  const chambers = COMPONENTS.filter(c => c.type === 'chamber');
  const controllers = COMPONENTS.filter(c => c.type === 'controller');
  const thirds = COMPONENTS.filter(c => c.type === 'thirdparty');

  return (
    <div className="sidebar">
      <div className="section-group">
        <div className="section-title">Chambers</div>
        {chambers.map(c => (
          <LibItem key={c.id} comp={c} onPick={onPick} />
        ))}
      </div>
      <div className="section-group">
        <div className="section-title">Controllers</div>
        {controllers.map(c => (
          <LibItem key={c.id} comp={c} onPick={onPick} />
        ))}
      </div>
      <div className="section-group">
        <div className="section-title">Other</div>
        {thirds.map(c => (
          <LibItem key={c.id} comp={c} onPick={onPick} />
        ))}
      </div>
      <div className="lib-hint">
        Click a component to add it to the bench. Drag placed items to position them.
      </div>
    </div>
  );
}

function LibItem({ comp, onPick }) {
  const dims = `${comp.w}″ × ${comp.d}″${comp.h ? ` × ${comp.h}″H` : ''}`;
  const showPart = comp.part && comp.part !== '—';
  return (
    <button className="lib-item" onClick={() => onPick(comp.id)}>
      <div className="lib-item-name">
        {comp.name}{comp.variant && comp.variant !== 'placeholder' ? <span style={{ color: 'var(--text-2)', fontWeight: 400 }}> · {comp.variant}</span> : ''}
      </div>
      <div className="lib-item-meta">{dims}</div>
      {showPart && <div className="lib-item-part">{comp.part}</div>}
    </button>
  );
}

/* ============================================================
   CANVAS AREA — bench grid + placed components
============================================================ */
function CanvasArea({ benchW, benchD, placed, setPlaced, selectedId, setSelectedId, draggingId, setDraggingId, removePlaced }) {
  // pxPerInch — adapt to fit roughly 720px wide while staying readable
  const MAX_W = 720;
  const MAX_H = 460;
  const pxPerInchByW = MAX_W / benchW;
  const pxPerInchByH = MAX_H / benchD;
  const pxPerInch = Math.min(pxPerInchByW, pxPerInchByH, 14);
  const canvasW = benchW * pxPerInch;
  const canvasH = benchD * pxPerInch;

  const canvasRef = useRef(null);
  const dragState = useRef(null); // { id, offsetXin, offsetYin }

  function onPlacedMouseDown(e, item) {
    e.stopPropagation();
    setSelectedId(item.id);
    setDraggingId(item.id);
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseXin = (e.clientX - rect.left) / pxPerInch;
    const mouseYin = (e.clientY - rect.top) / pxPerInch;
    dragState.current = {
      id: item.id,
      offsetXin: mouseXin - item.x,
      offsetYin: mouseYin - item.y,
    };
  }

  function onCanvasMouseMove(e) {
    if (!dragState.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseXin = (e.clientX - rect.left) / pxPerInch;
    const mouseYin = (e.clientY - rect.top) / pxPerInch;
    const { id, offsetXin, offsetYin } = dragState.current;
    const comp = findComp(placed.find(p => p.id === id)?.componentId);
    if (!comp) return;
    // Snap to 1-inch grid
    let newX = Math.round(mouseXin - offsetXin);
    let newY = Math.round(mouseYin - offsetYin);
    newX = Math.max(0, Math.min(benchW - comp.w, newX));
    newY = Math.max(0, Math.min(benchD - comp.d, newY));
    setPlaced(prev => prev.map(p => p.id === id ? { ...p, x: newX, y: newY } : p));
  }

  function onCanvasMouseUp() {
    dragState.current = null;
    setDraggingId(null);
  }

  function onCanvasClick() { setSelectedId(null); }

  useEffect(() => {
    window.addEventListener('mouseup', onCanvasMouseUp);
    return () => window.removeEventListener('mouseup', onCanvasMouseUp);
  }, []);

  // Grid lines
  const gridLines = [];
  for (let x = 0; x <= benchW; x++) {
    const isMajor = x % 6 === 0;
    gridLines.push(
      <line key={`vx${x}`} x1={x * pxPerInch} y1={0} x2={x * pxPerInch} y2={canvasH}
        stroke={isMajor ? '#D9E2EE' : '#EEF2F7'} strokeWidth={isMajor ? 1 : 0.5} />
    );
  }
  for (let y = 0; y <= benchD; y++) {
    const isMajor = y % 6 === 0;
    gridLines.push(
      <line key={`hy${y}`} x1={0} y1={y * pxPerInch} x2={canvasW} y2={y * pxPerInch}
        stroke={isMajor ? '#D9E2EE' : '#EEF2F7'} strokeWidth={isMajor ? 1 : 0.5} />
    );
  }

  return (
    <div className="canvas-area">
      <div
        ref={canvasRef}
        className="canvas-frame"
        style={{ width: canvasW, height: canvasH }}
        onMouseMove={onCanvasMouseMove}
        onClick={onCanvasClick}
      >
        <svg className="canvas-grid" width={canvasW} height={canvasH}>
          {gridLines}
        </svg>

        {placed.length === 0 && (
          <div className="canvas-empty">
            Empty bench<br/>
            <span style={{ fontSize: 11, color: 'var(--text-3)' }}>
              Click a component in the library to add it.<br/>
              Grid = 1 inch. Major gridlines = 6 inches.
            </span>
          </div>
        )}

        {placed.map(item => {
          const comp = findComp(item.componentId);
          if (!comp) return null;
          return (
            <div
              key={item.id}
              className={`placed t-${comp.type} ${selectedId === item.id ? 'selected' : ''} ${draggingId === item.id ? 'dragging' : ''}`}
              style={{
                left: item.x * pxPerInch,
                top: item.y * pxPerInch,
                width: comp.w * pxPerInch,
                height: comp.d * pxPerInch,
              }}
              onMouseDown={(e) => onPlacedMouseDown(e, item)}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="placed-name">
                {comp.name}{comp.variant && comp.variant !== 'placeholder' ? ` · ${comp.variant}` : ''}
              </div>
              <div className="placed-dims">{comp.w}″ × {comp.d}″</div>
              {comp.part && comp.part !== '—' && (
                <div className="placed-part">{comp.part}</div>
              )}
              {selectedId === item.id && (
                <button
                  className="remove-btn"
                  onClick={(e) => { e.stopPropagation(); removePlaced(item.id); }}
                  title="Remove"
                >×</button>
              )}
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 10, display: 'flex', justifyContent: 'space-between', width: canvasW,
        fontSize: 10, fontFamily: 'IBM Plex Mono, monospace', color: 'var(--text-3)',
        letterSpacing: '0.06em', textTransform: 'uppercase'
      }}>
        <span>Bench top-down view</span>
        <span>{benchW}″ × {benchD}″ · 1 div = 1 in</span>
      </div>
    </div>
  );
}

/* ============================================================
   READOUT PANEL
============================================================ */
function ReadoutPanel({ stats, intent, clientName, projectName }) {
  const { chambers, controllers, thirds, bbox, knownWeight, unknownWeightCount, gases, partList } = stats;
  const totalCount = chambers + controllers + thirds;

  return (
    <div className="panel">
      {/* Live readout */}
      <div className="panel-section">
        <div className="panel-h">Live Readout</div>
        <div className="stat-grid">
          <div className="stat">
            <span className="stat-label">Footprint</span>
            <span className="stat-value">
              {bbox.w || 0}<span className="stat-unit">×</span>{bbox.d || 0}<span className="stat-unit">in</span>
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Components</span>
            <span className="stat-value">{totalCount}<span className="stat-unit">total</span></span>
          </div>
          <div className="stat">
            <span className="stat-label">Chambers</span>
            <span className="stat-value">{chambers}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Controllers</span>
            <span className="stat-value">{controllers}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Weight</span>
            <span className="stat-value">
              {knownWeight > 0 ? knownWeight.toFixed(1) : '—'}
              {knownWeight > 0 && <span className="stat-unit">lbs</span>}
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Third-party</span>
            <span className="stat-value">{thirds}</span>
          </div>
        </div>
        {unknownWeightCount > 0 && (
          <div style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 8, fontFamily: 'IBM Plex Mono, monospace' }}>
            + {unknownWeightCount} item{unknownWeightCount > 1 ? 's' : ''} with unspecified weight
          </div>
        )}
      </div>

      {/* Gases */}
      <div className="panel-section">
        <div className="panel-h">Gases Required</div>
        <div className="tag-row">
          {gases.length > 0
            ? gases.map(g => <span key={g} className="tag">{g}</span>)
            : <span className="tag empty">None — add a controller</span>}
        </div>
      </div>

      {/* Parts list */}
      <div className="panel-section">
        <div className="panel-h">Parts List</div>
        {partList.length === 0
          ? <div style={{ fontSize: 12, color: 'var(--text-3)', fontStyle: 'italic' }}>No components placed yet.</div>
          : (
            <ul className="parts-list">
              {partList.map((p, i) => (
                <li key={i}>
                  <span className="parts-name">{p.name}</span>
                  <span className="parts-num">{p.part}</span>
                </li>
              ))}
            </ul>
          )}
      </div>

      {/* Design intent */}
      <div className="panel-section">
        <div className="panel-h">Design Intent</div>
        {intent
          ? <div className="intent-body" dangerouslySetInnerHTML={{ __html: intent }} />
          : <div className="intent-body intent-empty">Add components from the library to generate a system description.</div>}
      </div>
    </div>
  );
}

/* ============================================================
   MOUNT
============================================================ */
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
} catch (e) {
  document.body.innerHTML = '<div style="padding:40px;font-family:monospace;color:#C75F1E;background:#FFF4EC;"><h2>App failed to start</h2><pre>' + (e.stack || e.message) + '</pre></div>';
  console.error(e);
}
</script>
</body>
</html>
