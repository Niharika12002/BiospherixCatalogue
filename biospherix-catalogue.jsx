import { useState, useEffect } from "react";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "c-chamber", name: "C-Chamber", subtitle: "Incubator Subchamber",
    category: "Chambers", filters: ["chamber"],
    gases: ["O₂", "CO₂"], mainApp: "Controlled microenvironment inside any standard incubator",
    tagline: "Protect cells from ambient air — inside any standard incubator.",
    summary: "The C-Chamber sits inside any standard incubator, shielding cells from room-air exposure caused by frequent door openings or movement between lab areas. Its compact, modular design upgrades existing lab space without new infrastructure.",
    applications: ["Tumor microenvironment", "Hypoxia studies", "Stem cell studies", "Ischemia & reoxygenation"],
    features: ["Fits any standard incubator", "Shields cells from room-air exposure", "Efficient gas consumption", "Compatible with all BioSpherix controllers", "Space-saving, portable design"],
    specs: [{ label: "Configurations", value: "1–4 shelves" }, { label: "Width × Depth", value: '14″ × 13″' }, { label: "Height range", value: '5.25″ – 10″' }],
    gasSupply: "Via controller (O₂ or N₂)", compatibleControllers: ["proox-p110","proox-p360","proco2-p120","proox-c21","oxycycler-c42","oxycycler-gt"],
    variants: [
      { no: "C174", label: "1-Shelf", dims: '14″W × 13″D × 5.25″H' },
      { no: "C274", label: "2-Shelf", dims: '14″W × 13″D × 6″H' },
      { no: "C374", label: "3-Shelf", dims: '14″W × 13″D × 8″H' },
      { no: "C474", label: "4-Shelf", dims: '14″W × 13″D × 10″H' },
    ],
    isBase: true,
  },
  {
    id: "proox-p110", name: "ProOx P110", subtitle: "Compact O₂ Controller",
    category: "Environmental Controllers", filters: ["o2","compact-controller"],
    gases: ["O₂", "N₂"], mainApp: "O₂ control for semi-sealable enclosures",
    tagline: "Reliable O₂ control from 0.1–99.9% in any semi-sealable enclosure.",
    summary: "A compact, reliable controller for oxygen-sensitive research. Adjusts O₂ by infusing nitrogen to lower or oxygen to raise concentrations. Precise sensor feedback minimises gas waste across the full control range.",
    applications: ["Hypoxia research", "Stem cell culture", "Cancer biology", "General O₂-controlled work"],
    features: ["Full O₂ range: 0.1–99.9%", "Gas infusion: 1–28 SCFH", "Compact 3.9 lb footprint", "Audible alarm + indicator", "Works with any semi-sealable enclosure"],
    specs: [{ label: "O₂ Range", value: "0.1–99.9% (±1–2%)" }, { label: "Infusion Rate", value: "1–28 SCFH" }, { label: "Footprint", value: '4⅜″H × 8⅞″W × 9″D' }, { label: "Weight", value: "3.9 lbs" }, { label: "Power", value: "12 VDC / 2.5 A" }],
    gasSupply: "Pressurized O₂ or N₂", compatibleBases: ["c-chamber"],
    isController: true, controlsO2: true,
  },
  {
    id: "proox-p360", name: "ProOx P360", subtitle: "High-Infusion O₂ Controller",
    category: "Environmental Controllers", filters: ["o2","compact-controller"],
    gases: ["O₂", "N₂"], mainApp: "High-volume O₂ control for large enclosures",
    tagline: "High-infusion O₂ control for large enclosures — in vivo and in vitro.",
    summary: "Same precise 0.1–99.9% oxygen control as the P110, at up to 140 SCFH. Designed for large enclosures including incubators, gloveboxes, refrigerators, and plant chambers. Uses sterile tank gas for efficient, waste-free operation.",
    applications: ["Large-volume incubators", "Gloveboxes", "Plant chambers", "In vivo applications"],
    features: ["Full O₂ range: 0.1–99.9%", "High infusion: 1–140 SCFH", "Sterile tank gas — no contamination risk", "Gloveboxes, refrigerators, incubators", "Audible alarm + indicator"],
    specs: [{ label: "O₂ Range", value: "0.1–99.9% (±1–2%)" }, { label: "Infusion Rate", value: "1–140 SCFH" }, { label: "Footprint", value: '4⅜″H × 8⅞″W × 9″D' }, { label: "Weight", value: "4.1 lbs" }, { label: "Power", value: "12 VDC / 2.5 A" }],
    gasSupply: "Pressurized O₂ or N₂", compatibleBases: ["c-chamber"],
    isController: true, controlsO2: true,
  },
  {
    id: "proco2-p120", name: "ProCO₂ P120", subtitle: "Compact CO₂ Controller",
    category: "Environmental Controllers", filters: ["co2","compact-controller"],
    gases: ["CO₂", "N₂"], mainApp: "CO₂ regulation for cell culture and assays",
    tagline: "Precise CO₂ regulation from 0.1–20% for any semi-sealable enclosure.",
    summary: "Versatile CO₂ control from 0.1–20.0% with tight accuracy of ±0.3–0.7%. Fits any semi-sealable enclosure, with flexible integration across a wide range of systems and protocols.",
    applications: ["Cell culture pH control", "CO₂-sensitive assays", "Metabolic studies"],
    features: ["CO₂ range: 0.1–20.0%", "Tight accuracy: ±0.3–0.7%", "Compact 3.9 lb form", "Fits any semi-sealable enclosure", "Audible alarm + indicator"],
    specs: [{ label: "CO₂ Range", value: "0.1–20% (±0.3–0.7%)" }, { label: "Footprint", value: '4⅜″H × 8⅞″W × 9″D' }, { label: "Weight", value: "3.9 lbs" }, { label: "Power", value: "12 VDC / 2.5 A" }],
    gasSupply: "Pressurized CO₂ and N₂", compatibleBases: ["c-chamber"],
    isController: true, controlsCO2: true,
  },
  {
    id: "proox-c21", name: "ProOx C21", subtitle: "Dual O₂ + CO₂ Controller",
    category: "Environmental Controllers", filters: ["o2","co2","compact-controller"],
    gases: ["O₂", "CO₂", "N₂"], mainApp: "Combined O₂ and CO₂ physiologic control",
    tagline: "O₂ and CO₂ control in one compact unit — pairs perfectly with the C-Chamber.",
    summary: "Combines oxygen and CO₂ control in one unit. Works with benchtop incubators and pairs ideally with the BioSpherix C-Chamber to simulate continuous physiologic gas environments without added lab footprint.",
    applications: ["Physiologic simulation", "Stem cell culture", "Hypoxia + CO₂ studies", "Benchtop incubator upgrade"],
    features: ["O₂: 0.1–99.9%; CO₂: 0.1–20%", "One unit, dual gas", "Benchtop incubator compatible", "Pairs with C-Chamber", "No added lab footprint"],
    specs: [{ label: "O₂ Range", value: "0.1–99.9% (±1–2%)" }, { label: "CO₂ Range", value: "0.1–20% (±1.5–2%)" }, { label: "Infusion Rate", value: "1–14 SCFH" }, { label: "Footprint", value: '4⅜″H × 8⅞″W × 9″D' }, { label: "Weight", value: "4.7 lbs" }, { label: "Power", value: "12 VDC / 2.5 A" }],
    gasSupply: "Pressurized CO₂, and/or O₂, N₂", compatibleBases: ["c-chamber"],
    isController: true, controlsO2: true, controlsCO2: true,
  },
  {
    id: "oxycycler-c42", name: "OxyCycler C42", subtitle: "Dynamic O₂ + CO₂ Controller",
    category: "Environmental Controllers", filters: ["o2","co2","dynamic-controller"],
    gases: ["O₂", "CO₂", "N₂"], mainApp: "Programmable multi-cycle gas control",
    tagline: "Programmable cycling with multiple setpoints — for complex physiologic protocols.",
    summary: "Dual-channel controller supporting multiple O₂ setpoints, ranges, and cycle counts. Makes complex oxygen cycling protocols straightforward. Controls O₂ and CO₂ in any semi-sealed subchamber, driving multiple chambers simultaneously.",
    applications: ["Intermittent hypoxia", "Ischemia/reperfusion", "Complex O₂ cycling", "Multi-chamber studies"],
    features: ["Dual-channel O₂ and CO₂", "Multiple setpoints and cycles", "Drives multiple chambers", "Compatible with C-Chamber", "12V alarm adaptable to external systems"],
    specs: [{ label: "O₂ Range", value: "0.1–99.9% (±1–2%)" }, { label: "CO₂ Range", value: "0.1–20% (±1.5–2%)" }, { label: "Footprint", value: '8⅓″H × 12¾″W × 14½″D' }, { label: "Weight", value: "17 lbs" }, { label: "Power", value: "12 VDC / 6.6 A" }],
    gasSupply: "Pressurized O₂, CO₂, and/or N₂", compatibleBases: ["c-chamber"],
    isController: true, controlsO2: true, controlsCO2: true, supportsCycling: true,
  },
  {
    id: "oxystreamer", name: "OxyStreamer", subtitle: "Gas Control for Live Cell Microscopy",
    category: "Environmental Controllers", filters: ["o2","co2","microscopy"],
    gases: ["O₂", "CO₂"], mainApp: "Dual gas streams for live cell microscopy",
    tagline: "Two simultaneous gas streams for live cell microscopy — no premixed cylinders.",
    summary: "Generates two identical streams of any O₂/CO₂ mix without premixed gas cylinders. Designed for live cell microscopy, conditioning both the chamber atmosphere and dissolved gases in media or perfusate simultaneously.",
    applications: ["Live cell microscopy", "Media conditioning", "Perfusate gas control", "Microscope stage chambers"],
    features: ["Dual simultaneous streams", "No premixed cylinders required", "Conditions chamber and media", "O₂: 0.1–99.9%; CO₂: 0.1–20%", "Audible alarm + indicator"],
    specs: [{ label: "O₂ Range", value: "0.1–99.9%" }, { label: "CO₂ Range", value: "0.1–20%" }, { label: "Footprint", value: '13″H × 9.3″W × 14.2″D' }, { label: "Weight", value: "10 lbs" }, { label: "Power", value: "12 VDC / 2.5 A" }],
    gasSupply: "Pressurized O₂, CO₂", compatibleBases: [],
    isController: true, controlsO2: true, controlsCO2: true,
  },
  {
    id: "oxycycler-gt", name: "OxyCycler GT Series", subtitle: "Bioactive Gas Controller",
    category: "Environmental Controllers", filters: ["o2","co2","co-no","dynamic-controller"],
    gases: ["O₂", "CO₂", "CO", "NO", "N₂"], mainApp: "Precision O₂, CO₂, CO, NO + humidity control",
    tagline: "Complete gas control — O₂, CO₂, CO, NO, and relative humidity.",
    summary: "The most advanced controller in the BioSpherix range. Precise O₂, CO₂, and relative humidity control (GT41), with optional expansion to CO (up to 400 ppm), NO (up to 50 ppm), or combined CO/NO. Both static and dynamic programming modes.",
    applications: ["Gasotransmitter research", "Pathophysiology models", "Ischemia/reperfusion", "NO/CO signaling", "Humidity protocols"],
    features: ["O₂: 0.1–99.9%; CO₂: 0.1–20%", "CO: 0–400 ppm (GT4181C/CN)", "NO: 0–50 ppm (GT4181N/CN)", "Relative humidity control", "Static and dynamic programming"],
    specs: [{ label: "O₂ Range", value: "0.1–99.9%" }, { label: "CO₂ Range", value: "0.1–20.0%" }, { label: "CO Range", value: "0–400 ppm" }, { label: "NO Range", value: "0–50 ppm" }, { label: "Dimensions", value: '9″H × 17″W × 17″D' }, { label: "Weight", value: "22 lbs" }, { label: "Power", value: "12 VDC / 6.6 A" }],
    gasSupply: "O₂, N₂, CO₂, NO/N₂ mixture, CO, O₂/CO₂ CAL gas",
    variants: [
      { no: "GT41", label: "O₂ + CO₂ + RH", dims: "O₂, N₂, CO₂" },
      { no: "GT4181C", label: "+ CO control", dims: "Adds CO/N₂ mix, CO cal gas" },
      { no: "GT4181N", label: "+ NO control", dims: "Adds NO/N₂ mix, cal gases" },
      { no: "GT4181CN", label: "+ CO & NO", dims: "NO/N₂, CO, O₂/CO₂ CAL gas" },
    ],
    compatibleBases: ["c-chamber"],
    isController: true, controlsO2: true, controlsCO2: true, supportsCycling: true,
  },
];

const APPLICATIONS = [
  { id: "hypoxia", label: "Hypoxia Studies", desc: "Low-oxygen environments for ischemia, stem cell work, and tumour biology", needs: ["o2"] },
  { id: "hyperoxia", label: "Hyperoxia", desc: "Elevated oxygen exposure for oxidative stress and reoxygenation studies", needs: ["o2"] },
  { id: "co2-control", label: "CO₂ Control", desc: "pH and metabolic control for general cell culture", needs: ["co2"] },
  { id: "dual-gas", label: "Dual Gas (O₂ + CO₂)", desc: "Simultaneous O₂ and CO₂ control for physiologic simulation", needs: ["o2","co2"] },
  { id: "cycling", label: "Dynamic Cycling", desc: "Intermittent hypoxia, ischemia/reperfusion, multi-setpoint protocols", needs: ["o2","co2","cycling"] },
  { id: "microscopy", label: "Live Cell Microscopy", desc: "Gas control for microscope stage incubators and media conditioning", needs: ["microscopy"] },
  { id: "bioactive", label: "CO / NO Studies", desc: "Gasotransmitter and pathophysiology research with CO and NO exposure", needs: ["co-no"] },
];

const OPTIONAL_COMPONENTS = [
  { id: "tubing", label: "Gas Tubing Kit", desc: "Pre-cut, labelled tubing for chamber-to-controller connection" },
  { id: "sensor-pod", label: "Sensor Pod", desc: "External O₂ / CO₂ verification sensor for quality assurance" },
  { id: "gas-supply", label: "Gas Supply Adapter", desc: "Regulator and fittings for pressurised gas cylinder connection" },
  { id: "adapter-plate", label: "Adapter Plate", desc: "Interface plate for non-standard incubator shelf dimensions" },
];

const FILTER_OPTIONS = [
  { id: "all", label: "All Products" },
  { id: "chamber", label: "Chambers" },
  { id: "o2", label: "O₂ Control" },
  { id: "co2", label: "CO₂ Control" },
  { id: "co-no", label: "CO / NO" },
  { id: "compact-controller", label: "Compact" },
  { id: "dynamic-controller", label: "Dynamic" },
  { id: "microscopy", label: "Microscopy" },
];

/* ─── PALETTE ──────────────────────────────────────────────────────────────── */
const C = {
  navy:"#1B3A6B", navy2:"#0D2244", orange:"#E8772E",
  bg:"#F4F7FB", surface:"#FFFFFF", border:"#E0E8F4",
  t2:"#4A6280", t3:"#8FA9C8",
};

/* ─── ILLUSTRATIONS ─────────────────────────────────────────────────────────── */
function Illo({ id, size = 160 }) {
  const h = Math.round(size * 0.65);
  const illo = {
    "c-chamber": (
      <svg width={size} height={h} viewBox="0 0 200 130" fill="none">
        <rect x="8" y="32" width="184" height="88" rx="5" fill="#EBF2FA" stroke="#1B3A6B" strokeWidth="1.8"/>
        <rect x="8" y="32" width="184" height="18" rx="5" fill="#C8D9EE" stroke="#1B3A6B" strokeWidth="1.8"/>
        {[60,80,100].map(y => <line key={y} x1="8" y1={y} x2="192" y2={y} stroke="#B0C6DF" strokeWidth="1.2"/>)}
        <rect x="22" y="63" width="55" height="11" rx="2" fill="#E8772E" opacity="0.75"/>
        <rect x="22" y="83" width="80" height="11" rx="2" fill="#1B3A6B" opacity="0.35"/>
        <rect x="22" y="103" width="65" height="11" rx="2" fill="#1B3A6B" opacity="0.25"/>
        <rect x="148" y="24" width="10" height="12" rx="2" fill="#8FA9C8"/>
        <rect x="52" y="24" width="10" height="12" rx="2" fill="#8FA9C8"/>
        <circle cx="180" cy="41" r="5" fill="#E8772E"/>
        <circle cx="20" cy="41" r="4" fill="#1B3A6B" opacity="0.5"/>
      </svg>
    ),
    "proox-p110": (
      <svg width={size} height={h} viewBox="0 0 200 130" fill="none">
        <rect x="14" y="24" width="172" height="84" rx="7" fill="#EBF2FA" stroke="#1B3A6B" strokeWidth="1.8"/>
        <rect x="14" y="24" width="172" height="30" rx="7" fill="#1B3A6B"/>
        <rect x="14" y="46" width="172" height="8" fill="#1B3A6B"/>
        <rect x="28" y="31" width="58" height="14" rx="3" fill="#E8772E" opacity="0.9"/>
        <text x="57" y="42" fill="white" fontSize="8.5" textAnchor="middle" fontFamily="monospace" fontWeight="700">P110</text>
        <rect x="126" y="33" width="7" height="7" rx="1" fill="#4CAF50"/>
        <rect x="139" y="33" width="7" height="7" rx="1" fill="#8FA9C8"/>
        <rect x="152" y="33" width="7" height="7" rx="1" fill="#E8772E"/>
        <rect x="28" y="62" width="48" height="30" rx="3" fill="#0D2244"/>
        <text x="52" y="80" fill="#00FF88" fontSize="13" textAnchor="middle" fontFamily="monospace">21.0</text>
        <circle cx="108" cy="77" r="17" fill="none" stroke="#1B3A6B" strokeWidth="2"/>
        <line x1="108" y1="77" x2="108" y2="64" stroke="#E8772E" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="140" y="62" width="34" height="11" rx="2" fill="#C8D9EE"/>
        <rect x="140" y="79" width="34" height="11" rx="2" fill="#C8D9EE"/>
      </svg>
    ),
    "proox-p360": (
      <svg width={size} height={h} viewBox="0 0 200 130" fill="none">
        <rect x="14" y="24" width="172" height="84" rx="7" fill="#EBF2FA" stroke="#1B3A6B" strokeWidth="1.8"/>
        <rect x="14" y="24" width="172" height="30" rx="7" fill="#1B3A6B"/>
        <rect x="14" y="46" width="172" height="8" fill="#1B3A6B"/>
        <rect x="28" y="31" width="58" height="14" rx="3" fill="#E8772E" opacity="0.9"/>
        <text x="57" y="42" fill="white" fontSize="8.5" textAnchor="middle" fontFamily="monospace" fontWeight="700">P360</text>
        <rect x="126" y="33" width="7" height="7" rx="1" fill="#4CAF50"/>
        <rect x="139" y="33" width="7" height="7" rx="1" fill="#8FA9C8"/>
        <rect x="152" y="33" width="7" height="7" rx="1" fill="#E8772E"/>
        <rect x="28" y="62" width="48" height="30" rx="3" fill="#0D2244"/>
        <text x="52" y="80" fill="#00FF88" fontSize="13" textAnchor="middle" fontFamily="monospace">21.0</text>
        <rect x="88" y="58" width="18" height="38" rx="3" fill="#C8D9EE" stroke="#8FA9C8" strokeWidth="1"/>
        <line x1="97" y1="86" x2="97" y2="60" stroke="#E8772E" strokeWidth="2"/>
        <rect x="112" y="58" width="18" height="38" rx="3" fill="#C8D9EE" stroke="#8FA9C8" strokeWidth="1"/>
        <line x1="121" y1="82" x2="121" y2="60" stroke="#1B3A6B" strokeWidth="2"/>
        <rect x="140" y="62" width="34" height="11" rx="2" fill="#C8D9EE"/>
        <rect x="140" y="79" width="34" height="11" rx="2" fill="#C8D9EE"/>
      </svg>
    ),
    "proco2-p120": (
      <svg width={size} height={h} viewBox="0 0 200 130" fill="none">
        <rect x="14" y="24" width="172" height="84" rx="7" fill="#FFF5EE" stroke="#E8772E" strokeWidth="1.8"/>
        <rect x="14" y="24" width="172" height="30" rx="7" fill="#E8772E"/>
        <rect x="14" y="46" width="172" height="8" fill="#E8772E"/>
        <text x="63" y="42" fill="white" fontSize="8" textAnchor="middle" fontFamily="monospace" fontWeight="700">ProCO₂ 120</text>
        <rect x="126" y="33" width="7" height="7" rx="1" fill="#4CAF50"/>
        <rect x="152" y="33" width="7" height="7" rx="1" fill="#FFD700"/>
        <rect x="28" y="62" width="48" height="30" rx="3" fill="#0D2244"/>
        <text x="52" y="80" fill="#00FF88" fontSize="13" textAnchor="middle" fontFamily="monospace">5.00</text>
        <circle cx="110" cy="77" r="17" fill="none" stroke="#E8772E" strokeWidth="2"/>
        <line x1="110" y1="77" x2="117" y2="66" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="142" y="62" width="32" height="9" rx="2" fill="#FFDECA"/>
        <rect x="142" y="77" width="32" height="9" rx="2" fill="#FFDECA"/>
        <rect x="142" y="92" width="32" height="9" rx="2" fill="#FFDECA"/>
      </svg>
    ),
    "proox-c21": (
      <svg width={size} height={h} viewBox="0 0 200 130" fill="none">
        <rect x="8" y="24" width="184" height="84" rx="7" fill="#EBF2FA" stroke="#1B3A6B" strokeWidth="1.8"/>
        <rect x="8" y="24" width="184" height="30" rx="7" fill="#1B3A6B"/>
        <rect x="8" y="46" width="184" height="8" fill="#1B3A6B"/>
        <text x="62" y="42" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle" fontFamily="monospace">Oxygen</text>
        <text x="142" y="42" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle" fontFamily="monospace">Carbon Dioxide</text>
        <rect x="18" y="62" width="76" height="34" rx="3" fill="#0D2244"/>
        <text x="56" y="83" fill="#00FF88" fontSize="14" textAnchor="middle" fontFamily="monospace">21.0</text>
        <rect x="106" y="62" width="76" height="34" rx="3" fill="#0D2244"/>
        <text x="144" y="83" fill="#4DB6FF" fontSize="14" textAnchor="middle" fontFamily="monospace">5.00</text>
        <circle cx="100" cy="108" r="6" fill="#E8772E"/>
        <rect x="20" y="102" width="13" height="7" rx="2" fill="#4CAF50"/>
        <rect x="162" y="102" width="13" height="7" rx="2" fill="#4CAF50"/>
      </svg>
    ),
    "oxycycler-c42": (
      <svg width={size} height={h} viewBox="0 0 200 130" fill="none">
        <rect x="8" y="14" width="184" height="106" rx="7" fill="#EBF2FA" stroke="#1B3A6B" strokeWidth="1.8"/>
        <rect x="8" y="14" width="184" height="28" rx="7" fill="#1B3A6B"/>
        <rect x="8" y="34" width="184" height="8" fill="#1B3A6B"/>
        <text x="76" y="31" fill="white" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="700">OxyCycler C42</text>
        <rect x="18" y="48" width="52" height="32" rx="3" fill="#0D2244"/>
        <text x="44" y="67" fill="#00FF88" fontSize="11" textAnchor="middle" fontFamily="monospace">21.0%</text>
        <text x="44" y="77" fill="#8FA9C8" fontSize="7" textAnchor="middle">O₂</text>
        <rect x="76" y="48" width="52" height="32" rx="3" fill="#0D2244"/>
        <text x="102" y="67" fill="#4DB6FF" fontSize="11" textAnchor="middle" fontFamily="monospace">5.00%</text>
        <text x="102" y="77" fill="#8FA9C8" fontSize="7" textAnchor="middle">CO₂</text>
        <rect x="136" y="48" width="48" height="32" rx="3" fill="#F5F8FC" stroke="#C8D9EE" strokeWidth="1"/>
        {[60,68,76].map(y => <line key={y} x1="140" y1={y} x2="180" y2={y} stroke="#C8D9EE" strokeWidth="1"/>)}
        {[145,155,165,175].map(x => <line key={x} x1={x} y1="48" x2={x} y2="80" stroke="#C8D9EE" strokeWidth="1"/>)}
        <rect x="18" y="90" width="20" height="20" rx="3" fill="#C8D9EE"/>
        <rect x="44" y="90" width="20" height="20" rx="3" fill="#C8D9EE"/>
        <rect x="70" y="90" width="20" height="20" rx="3" fill="#C8D9EE"/>
        <rect x="96" y="90" width="20" height="20" rx="3" fill="#C8D9EE"/>
        <circle cx="156" cy="100" r="9" fill="#E8772E" opacity="0.85"/>
        <circle cx="177" cy="100" r="7" fill="#4CAF50" opacity="0.85"/>
      </svg>
    ),
    "oxystreamer": (
      <svg width={size} height={h} viewBox="0 0 200 130" fill="none">
        <rect x="48" y="8" width="104" height="118" rx="7" fill="#EBF2FA" stroke="#1B3A6B" strokeWidth="1.8"/>
        <rect x="54" y="14" width="44" height="54" rx="3" fill="#C8D9EE"/>
        {[24,34,44,54].map(y => <line key={y} x1="56" y1={y} x2="96" y2={y} stroke="#EBF2FA" strokeWidth="1.5"/>)}
        <text x="76" y="76" fill="#1B3A6B" fontSize="8" textAnchor="middle" fontWeight="600">O₂</text>
        <rect x="102" y="14" width="44" height="54" rx="3" fill="#FFDECA"/>
        {[24,34,44,54].map(y => <line key={y} x1="104" y1={y} x2="144" y2={y} stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>)}
        <text x="124" y="76" fill="#E8772E" fontSize="8" textAnchor="middle" fontWeight="600">CO₂</text>
        <rect x="54" y="82" width="92" height="30" rx="3" fill="#0D2244"/>
        <text x="82" y="101" fill="#00FF88" fontSize="10" textAnchor="middle" fontFamily="monospace">21%</text>
        <text x="124" y="101" fill="#4DB6FF" fontSize="10" textAnchor="middle" fontFamily="monospace">5%</text>
        <circle cx="76" cy="120" r="5" fill="#8FA9C8"/>
        <circle cx="124" cy="120" r="5" fill="#8FA9C8"/>
      </svg>
    ),
    "oxycycler-gt": (
      <svg width={size*1.15} height={h} viewBox="0 0 230 130" fill="none">
        <rect x="8" y="10" width="214" height="114" rx="7" fill="#1B3A6B" stroke="#0D2244" strokeWidth="2"/>
        <rect x="16" y="17" width="198" height="18" rx="3" fill="#0D2244"/>
        <text x="115" y="29" fill="#E8772E" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="700">OxyCycler GT Series</text>
        {[
          {x:18,label:"O₂",col:"#00FF88"},{x:72,label:"CO₂",col:"#4DB6FF"},
          {x:126,label:"CO",col:"#FFD700"},{x:180,label:"NO",col:"#FF6B9D"},
        ].map(({x,label,col}) => (
          <g key={label}>
            <rect x={x} y="40" width="44" height="58" rx="3" fill="#0A1A35"/>
            <text x={x+22} y="58" fill={col} fontSize="8" textAnchor="middle" fontFamily="monospace">{label}</text>
            <rect x={x+8} y="62" width="10" height="28" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x={x+8} y={62+(label==="O₂"?14:label==="CO₂"?8:label==="CO"?18:20)} width="10" height={label==="O₂"?14:label==="CO₂"?20:label==="CO"?10:8} rx="1" fill={col} opacity="0.85"/>
            <rect x={x+26} y="62" width="10" height="28" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x={x+26} y={62+(label==="O₂"?6:label==="CO₂"?2:label==="CO"?12:16)} width="10" height={label==="O₂"?22:label==="CO₂"?26:label==="CO"?16:12} rx="1" fill={col} opacity="0.85"/>
          </g>
        ))}
        <rect x="16" y="104" width="198" height="14" rx="3" fill="#0D2244"/>
        <circle cx="30" cy="111" r="3.5" fill="#4CAF50"/>
        <circle cx="43" cy="111" r="3.5" fill="#E8772E"/>
        <text x="140" y="114" fill="#8FA9C8" fontSize="6.5" textAnchor="middle" fontFamily="monospace">Bioactive Gas Control</text>
      </svg>
    ),
  };
  return illo[id] || <svg width={size} height={h} viewBox={`0 0 ${size} ${h}`}><rect x="4" y="4" width={size-8} height={h-8} rx="6" fill="#EBF2FA" stroke="#1B3A6B" strokeWidth="1.5"/></svg>;
}

/* ─── SHARED UI ────────────────────────────────────────────────────────────── */
function GasPill({gas}) {
  const m = {"O₂":{bg:"#E8F0FF",c:"#1B3A6B",b:"#BDD0F5"},"CO₂":{bg:"#FFF3EC",c:"#B85A18",b:"#F5C9A0"},"N₂":{bg:"#EEF6EE",c:"#256625",b:"#AADCAA"},"CO":{bg:"#FFFAEC",c:"#7A5E00",b:"#F0DC90"},"NO":{bg:"#FFF0F6",c:"#8A0042",b:"#F5B0CF"}};
  const s = m[gas]||{bg:"#F0F0F0",c:"#555",b:"#DDD"};
  return <span style={{background:s.bg,color:s.c,border:`1px solid ${s.b}`,borderRadius:4,padding:"2px 8px",fontSize:11,fontWeight:700,letterSpacing:"0.03em",display:"inline-block",margin:"2px 2px"}}>{gas}</span>;
}

function Chip({children,color=C.navy}) {
  return <span style={{background:color+"12",color,border:`1px solid ${color}22`,borderRadius:4,padding:"3px 10px",fontSize:11,fontWeight:700,letterSpacing:"0.05em"}}>{children}</span>;
}

function Card({children,style={},onClick,hover=false}) {
  const [hov,setHov]=useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>hover&&setHov(true)} onMouseLeave={()=>hover&&setHov(false)}
      style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,
        boxShadow:hov?"0 8px 32px rgba(27,58,107,0.13)":"0 1px 6px rgba(27,58,107,0.06)",
        transform:hov?"translateY(-3px)":"none",transition:"all 0.2s",cursor:onClick?"pointer":"default",...style}}>
      {children}
    </div>
  );
}

function Expand({title,children}) {
  const [open,setOpen]=useState(false);
  return (
    <div style={{background:"white",border:`1px solid ${C.border}`,borderRadius:10}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",background:"none",border:"none",padding:"13px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"inherit"}}>
        <span style={{fontSize:13,fontWeight:600,color:C.navy}}>{title}</span>
        <span style={{color:C.t3,fontSize:16,lineHeight:1}}>{open?"−":"+"}</span>
      </button>
      {open&&<div style={{padding:"0 18px 16px",fontSize:13,color:C.t2,lineHeight:1.7}}>{children}</div>}
    </div>
  );
}

/* ─── BUILD SUMMARY ────────────────────────────────────────────────────────── */
function buildSummary({application,base,variant,controller,optionals}) {
  const app = APPLICATIONS.find(a=>a.id===application);
  const baseP = PRODUCTS.find(p=>p.id===base);
  const ctrlP = PRODUCTS.find(p=>p.id===controller);
  const varObj = baseP?.variants?.find(v=>v.no===variant);
  const appLabels = {
    hypoxia:"Hypoxia and low-O₂ research", hyperoxia:"Hyperoxia and reoxygenation studies",
    "co2-control":"CO₂-regulated cell culture", "dual-gas":"Physiologic O₂ and CO₂ simulation",
    cycling:"Intermittent hypoxia / ischemia-reperfusion cycling",
    microscopy:"Live cell microscopy with gas control", bioactive:"Gasotransmitter (CO/NO) research",
  };
  const caps = [];
  if(ctrlP?.controlsO2) caps.push("Controls O₂ levels (0.1–99.9%)");
  if(ctrlP?.controlsCO2) caps.push("Controls CO₂ levels (0.1–20%)");
  if(ctrlP?.supportsCycling) caps.push("Supports programmable gas cycling");
  if(controller==="oxycycler-gt") caps.push("Controls CO and/or NO (with GT4181C/N/CN)");
  caps.push("Protects cells from ambient air exposure");
  if(application==="microscopy") caps.push("Dual gas streams for live cell imaging");
  const comps = [
    baseP?.name+(varObj?` — ${varObj.no} (${varObj.label})`:"")||"",
    (ctrlP?.name||"")+" Controller",
    ...optionals.map(id=>OPTIONAL_COMPONENTS.find(o=>o.id===id)?.label).filter(Boolean),
  ];
  const sysName = `${ctrlP?.name||""} + ${baseP?.name||""} ${varObj?.label||""}`.trim()+" System";
  const explanation = `This configuration pairs a ${varObj?.no||variant} ${baseP?.name} with the ${ctrlP?.name} controller${varObj?`, providing a ${varObj.dims.toLowerCase()} workspace`:""}.`+
    ` Together, they create a controlled microenvironment optimised for ${appLabels[application]||"physiologic research"}, with continuous gas management throughout the cell culture workflow.`;
  return {sysName,explanation,caps,comps,app,baseP,ctrlP,varObj};
}

/* ─── APP ──────────────────────────────────────────────────────────────────── */
export default function App() {
  const [screen,setScreen]=useState("home");
  const [selProduct,setSelProduct]=useState(null);
  const [compareList,setCompareList]=useState([]);
  const [searchQ,setSearchQ]=useState("");
  const [filterTag,setFilterTag]=useState("all");
  const [navScrolled,setNavScrolled]=useState(false);
  const [cfg,setCfg]=useState({application:null,base:"c-chamber",variant:"C274",controller:null,optionals:[]});
  const [genSystem,setGenSystem]=useState(null);

  useEffect(()=>{
    const fn=()=>setNavScrolled(window.scrollY>10);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  const go=(s,extra={})=>{
    setScreen(s);
    if(extra.product) setSelProduct(extra.product);
    window.scrollTo(0,0);
  };
  const toggleCmp=(id)=>setCompareList(p=>p.includes(id)?p.filter(x=>x!==id):p.length<4?[...p,id]:p);
  const addToSystem=(product)=>{
    if(product.isController) setCfg(c=>({...c,controller:product.id}));
    else if(product.isBase) setCfg(c=>({...c,base:product.id}));
    go("builder");
  };

  return (
    <div style={{fontFamily:"'IBM Plex Sans','Helvetica Neue',sans-serif",background:C.bg,minHeight:"100vh",color:C.navy}}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet"/>
      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:200,background:navScrolled?"rgba(255,255,255,0.97)":"white",borderBottom:`1px solid ${navScrolled?C.border:"transparent"}`,boxShadow:navScrolled?"0 2px 20px rgba(27,58,107,0.08)":"none",transition:"all 0.2s",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60}}>
        <button onClick={()=>go("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:30,height:30,borderRadius:8,background:C.navy,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5"/><circle cx="9" cy="9" r="3" fill="#E8772E"/><path d="M9 2 C12 5,14 7,14 9 C14 12,12 14,9 14" stroke="white" strokeWidth="1.2" fill="none"/></svg>
          </div>
          <span style={{fontWeight:700,fontSize:14,letterSpacing:"-0.02em"}}>BioSpherix</span>
        </button>
        <div style={{display:"flex",gap:2,alignItems:"center"}}>
          {[["home","Home"],["library","Product Library"],["builder","System Builder"],["compare",`Compare${compareList.length?` (${compareList.length})`:""}`]].map(([s,lbl])=>(
            <button key={s} onClick={()=>go(s)} style={{background:screen===s?"#EAF2FF":"none",border:"none",cursor:"pointer",padding:"6px 13px",borderRadius:6,fontSize:13,fontWeight:screen===s?600:400,color:screen===s?C.navy:C.t2,transition:"all 0.15s",fontFamily:"inherit"}}>{lbl}</button>
          ))}
        </div>
      </nav>

      {screen==="home"&&<HomeScreen go={go}/>}
      {screen==="library"&&<LibraryScreen go={go} searchQ={searchQ} setSearchQ={setSearchQ} filterTag={filterTag} setFilterTag={setFilterTag} compareList={compareList} toggleCmp={toggleCmp} addToSystem={addToSystem}/>}
      {screen==="detail"&&selProduct&&<DetailScreen product={selProduct} go={go} compareList={compareList} toggleCmp={toggleCmp} addToSystem={addToSystem}/>}
      {screen==="builder"&&<BuilderScreen go={go} cfg={cfg} setCfg={setCfg} setGenSystem={setGenSystem}/>}
      {screen==="preview"&&genSystem&&<PreviewScreen go={go} system={genSystem}/>}
      {screen==="compare"&&<CompareScreen compareList={compareList} toggleCmp={toggleCmp} go={go}/>}
    </div>
  );
}

/* ─── HOME ─────────────────────────────────────────────────────────────────── */
function HomeScreen({go}) {
  return (
    <div>
      <div style={{background:C.navy,padding:"80px 32px 72px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-80,right:-80,width:360,height:360,borderRadius:"50%",background:"rgba(232,119,46,0.07)"}}/>
        <div style={{position:"absolute",bottom:-60,left:-40,width:260,height:260,borderRadius:"50%",background:"rgba(255,255,255,0.03)"}}/>
        <div style={{position:"relative",maxWidth:640,margin:"0 auto"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(232,119,46,0.15)",border:"1px solid rgba(232,119,46,0.3)",borderRadius:20,padding:"5px 14px",marginBottom:24}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:C.orange}}/>
            <span style={{fontSize:11,color:"#E8C4A0",fontWeight:600,letterSpacing:"0.07em"}}>IN VITRO PRODUCT CATALOGUE</span>
          </div>
          <h1 style={{fontSize:48,fontWeight:700,color:"white",margin:"0 0 14px",lineHeight:1.08,letterSpacing:"-0.04em"}}>BioSpherix<br/>Digital Catalogue</h1>
          <p style={{fontSize:17,color:"#A0BCDA",lineHeight:1.65,marginBottom:44,maxWidth:480,margin:"0 auto 44px"}}>
            Client-ready product catalogue and system preview tool. Browse instruments, build configurations, and generate polished system proposals.
          </p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>go("library")} style={{background:C.orange,color:"white",border:"none",borderRadius:9,padding:"13px 28px",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Browse Products</button>
            <button onClick={()=>go("builder")} style={{background:"rgba(255,255,255,0.1)",color:"white",border:"1.5px solid rgba(255,255,255,0.2)",borderRadius:9,padding:"13px 28px",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Build a System →</button>
            <button onClick={()=>go("compare")} style={{background:"transparent",color:"#A0BCDA",border:"1.5px solid rgba(255,255,255,0.12)",borderRadius:9,padding:"13px 28px",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit"}}>Compare Controllers</button>
          </div>
        </div>
      </div>

      <div style={{maxWidth:1080,margin:"0 auto",padding:"56px 28px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22,marginBottom:52}}>
          {[
            {title:"Product Library",desc:"Browse all 8 BioSpherix in vitro instruments with full specifications, applications, and compatibility information.",action:"Browse Products",target:"library",accent:false},
            {title:"System Builder",desc:"Select an application, choose a chamber and controller, add optional components, and generate a clean system preview.",action:"Build a System",target:"builder",accent:true},
            {title:"Compare Controllers",desc:"Place up to 4 controllers side-by-side to compare gas control range, infusion rate, footprint, and application fit.",action:"Start Comparing",target:"compare",accent:false},
          ].map(f=>(
            <Card key={f.title} hover style={{overflow:"hidden"}}>
              {f.accent&&<div style={{height:4,background:C.orange}}/>}
              <div style={{padding:"26px 24px"}}>
                                <h3 style={{fontSize:16,fontWeight:700,marginBottom:8,letterSpacing:"-0.02em"}}>{f.title}</h3>
                <p style={{fontSize:13,color:C.t2,lineHeight:1.6,marginBottom:18}}>{f.desc}</p>
                <button onClick={()=>go(f.target)} style={{background:f.accent?C.navy:"transparent",color:f.accent?"white":C.navy,border:f.accent?"none":`1.5px solid ${C.border}`,borderRadius:7,padding:"8px 16px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>
                  {f.action} →
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:20}}>
          <h2 style={{fontSize:20,fontWeight:700,letterSpacing:"-0.02em"}}>Featured Products</h2>
          <button onClick={()=>go("library")} style={{background:"none",border:"none",color:C.orange,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>View all →</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:18}}>
          {PRODUCTS.slice(0,4).map(p=>(
            <Card key={p.id} hover onClick={()=>{}}>
              <div style={{padding:18}}>
                <div style={{display:"flex",justifyContent:"center",background:C.bg,borderRadius:8,padding:"14px 8px",marginBottom:14}}><Illo id={p.id} size={120}/></div>
                <div style={{fontSize:15,fontWeight:700,marginBottom:3}}>{p.name}</div>
                <div style={{fontSize:12,color:C.t2,marginBottom:10}}>{p.subtitle}</div>
                <div style={{marginBottom:12}}>{p.gases.map(g=><GasPill key={g} gas={g}/>)}</div>
                <button onClick={()=>go("detail",{product:p})} style={{background:"none",border:"none",color:C.navy,fontSize:12,fontWeight:600,cursor:"pointer",padding:0,fontFamily:"inherit"}}>View Details →</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── LIBRARY ──────────────────────────────────────────────────────────────── */
function LibraryScreen({go,searchQ,setSearchQ,filterTag,setFilterTag,compareList,toggleCmp,addToSystem}) {
  const filtered = PRODUCTS.filter(p=>{
    const q=searchQ.toLowerCase();
    const mQ=!q||p.name.toLowerCase().includes(q)||p.subtitle.toLowerCase().includes(q)||p.applications.some(a=>a.toLowerCase().includes(q))||p.gases.some(g=>g.toLowerCase().includes(q));
    const mF=filterTag==="all"||p.filters.includes(filterTag);
    return mQ&&mF;
  });
  return (
    <div style={{maxWidth:1160,margin:"0 auto",padding:"40px 28px"}}>
      <h1 style={{fontSize:30,fontWeight:700,letterSpacing:"-0.03em",marginBottom:4}}>Product Library</h1>
      <p style={{color:C.t2,fontSize:14,marginBottom:28}}>BioSpherix in vitro chambers and environmental controllers</p>
      <div style={{display:"flex",gap:10,marginBottom:28,flexWrap:"wrap",alignItems:"center"}}>
        <div style={{position:"relative",flex:"1 1 220px"}}>
          <input value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder="Search products or applications..."
            style={{width:"100%",padding:"10px 16px 10px 38px",borderRadius:8,border:`1.5px solid ${C.border}`,fontSize:13,background:"white",outline:"none",boxSizing:"border-box",color:C.navy,fontFamily:"inherit"}}/>
          <svg style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)"}} width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke={C.t3} strokeWidth="2"/><path d="m21 21-4.35-4.35" stroke={C.t3} strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {FILTER_OPTIONS.map(f=>(
            <button key={f.id} onClick={()=>setFilterTag(f.id)} style={{padding:"8px 14px",borderRadius:7,border:`1.5px solid ${filterTag===f.id?C.navy:C.border}`,background:filterTag===f.id?C.navy:"white",color:filterTag===f.id?"white":C.t2,fontSize:12,fontWeight:500,cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"}}>{f.label}</button>
          ))}
        </div>
        <span style={{fontSize:12,color:C.t3,marginLeft:"auto"}}>{filtered.length} of {PRODUCTS.length}</span>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:22}}>
        {filtered.map(p=><ProdCard key={p.id} p={p} go={go} compareList={compareList} toggleCmp={toggleCmp} addToSystem={addToSystem}/>)}
      </div>
      {filtered.length===0&&(
        <div style={{textAlign:"center",padding:"80px 32px",color:C.t3}}>
          <p style={{fontSize:15,fontWeight:500}}>No products match "{searchQ}"</p>
          <button onClick={()=>{setSearchQ("");setFilterTag("all");}} style={{background:"none",border:"none",color:C.orange,cursor:"pointer",fontSize:13,fontWeight:600,marginTop:8,fontFamily:"inherit"}}>Clear filters</button>
        </div>
      )}
    </div>
  );
}

function ProdCard({p,go,compareList,toggleCmp,addToSystem}) {
  const inCmp=compareList.includes(p.id);
  return (
    <Card hover style={{overflow:"hidden",display:"flex",flexDirection:"column"}}>
      <div style={{background:C.bg,padding:"28px 16px 20px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",minHeight:140}}>
        <div style={{position:"absolute",top:10,left:12}}>
          <Chip color={p.category==="Chambers"?C.navy:C.orange}>{p.category==="Chambers"?"CHAMBER":"CONTROLLER"}</Chip>
        </div>
        <Illo id={p.id} size={148}/>
      </div>
      <div style={{padding:"18px 20px 20px",flex:1,display:"flex",flexDirection:"column"}}>
        <h3 style={{fontSize:16,fontWeight:700,marginBottom:3,letterSpacing:"-0.02em"}}>{p.name}</h3>
        <p style={{fontSize:12,color:C.t2,fontWeight:500,marginBottom:8}}>{p.subtitle}</p>
        <p style={{fontSize:13,color:C.t2,lineHeight:1.55,marginBottom:12,flex:1}}>{p.tagline}</p>
        <div style={{marginBottom:12}}>{p.gases.map(g=><GasPill key={g} gas={g}/>)}</div>
        <div style={{background:C.bg,borderRadius:6,padding:"8px 12px",marginBottom:14,fontSize:12,color:C.t2}}>
          <span style={{fontWeight:600,color:C.navy}}>Use case: </span>{p.mainApp}
        </div>
        <div style={{display:"flex",gap:7}}>
          <button onClick={()=>go("detail",{product:p})} style={{flex:1,background:C.navy,color:"white",border:"none",borderRadius:7,padding:"9px 0",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>View Details</button>
          <button onClick={()=>addToSystem(p)} style={{flex:1,background:"transparent",color:C.navy,border:`1.5px solid ${C.border}`,borderRadius:7,padding:"9px 0",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>+ Add to System</button>
          <button onClick={()=>toggleCmp(p.id)} style={{padding:"9px 10px",borderRadius:7,border:`1.5px solid ${inCmp?C.navy:C.border}`,background:inCmp?"#EAF2FF":"transparent",color:inCmp?C.navy:C.t3,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit"}}>{inCmp?"✓":"+"}</button>
        </div>
      </div>
    </Card>
  );
}

/* ─── DETAIL ───────────────────────────────────────────────────────────────── */
function DetailScreen({product:p,go,compareList,toggleCmp,addToSystem}) {
  const [tab,setTab]=useState("overview");
  const related=(p.compatibleControllers||[]).map(id=>PRODUCTS.find(x=>x.id===id)).filter(Boolean).slice(0,3);
  return (
    <div style={{maxWidth:1080,margin:"0 auto",padding:"36px 28px"}}>
      <button onClick={()=>go("library")} style={{background:"none",border:"none",color:C.t2,cursor:"pointer",fontSize:13,marginBottom:24,fontFamily:"inherit",display:"flex",alignItems:"center",gap:5}}>← Back to Library</button>
      <div style={{display:"grid",gridTemplateColumns:"400px 1fr",gap:48,marginBottom:44,alignItems:"start"}}>
        <div>
          <div style={{background:C.bg,borderRadius:14,padding:"44px 28px",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:14}}><Illo id={p.id} size={220}/></div>
          <div style={{background:"white",border:`1px solid ${C.border}`,borderRadius:10,padding:"13px 16px"}}>
            <div style={{fontSize:11,color:C.t3,fontWeight:600,letterSpacing:"0.04em",marginBottom:5}}>GAS SUPPLY</div>
            <div style={{fontSize:13,color:C.navy,lineHeight:1.5}}>{p.gasSupply}</div>
          </div>
        </div>
        <div>
          <div style={{marginBottom:14}}><Chip color={p.category==="Chambers"?C.navy:C.orange}>{p.category.toUpperCase()}</Chip></div>
          <h1 style={{fontSize:36,fontWeight:700,letterSpacing:"-0.035em",marginBottom:6}}>{p.name}</h1>
          <p style={{fontSize:17,color:C.t2,marginBottom:18}}>{p.subtitle}</p>
          <p style={{fontSize:14,color:"#3A5C8C",lineHeight:1.75,marginBottom:22,maxWidth:500}}>{p.summary}</p>
          <div style={{marginBottom:22}}>{p.gases.map(g=><GasPill key={g} gas={g}/>)}</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:22}}>
            {p.specs.slice(0,4).map(s=>(
              <div key={s.label} style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:8,padding:"11px 13px"}}>
                <div style={{fontSize:10,color:C.t3,fontWeight:600,letterSpacing:"0.04em",marginBottom:3}}>{s.label.toUpperCase()}</div>
                <div style={{fontSize:13,color:C.navy,fontWeight:600,fontFamily:"'IBM Plex Mono',monospace"}}>{s.value}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:9}}>
            <button onClick={()=>addToSystem(p)} style={{background:C.navy,color:"white",border:"none",borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>+ Add to System</button>
            <button onClick={()=>toggleCmp(p.id)} style={{background:compareList.includes(p.id)?"#EAF2FF":"transparent",color:compareList.includes(p.id)?C.navy:C.t2,border:`1.5px solid ${compareList.includes(p.id)?C.navy:C.border}`,borderRadius:8,padding:"10px 18px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{compareList.includes(p.id)?"✓ In Compare":"+ Compare"}</button>
          </div>
        </div>
      </div>

      <div style={{borderBottom:`1px solid ${C.border}`,marginBottom:28,display:"flex",gap:0}}>
        {[["overview","Overview"],["applications","Applications"],["specs","Full Specs"],...(p.variants?[["variants","Variants"]]:[])]
          .map(([id,lbl])=>(
            <button key={id} onClick={()=>setTab(id)} style={{background:"none",border:"none",borderBottom:`2.5px solid ${tab===id?C.orange:"transparent"}`,padding:"10px 18px",fontSize:13,fontWeight:tab===id?700:400,color:tab===id?C.navy:C.t3,cursor:"pointer",marginBottom:-1,fontFamily:"inherit",transition:"all 0.15s"}}>{lbl}</button>
          ))}
      </div>

      {tab==="overview"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {p.features.map((f,i)=>(
            <div key={i} style={{background:"white",border:`1px solid ${C.border}`,borderRadius:10,padding:"13px 16px",display:"flex",gap:10,alignItems:"flex-start"}}>
              <div style={{width:18,height:18,borderRadius:"50%",background:C.navy,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                <span style={{color:"white",fontSize:9,fontWeight:700}}>✓</span>
              </div>
              <span style={{fontSize:13,color:C.navy,lineHeight:1.5}}>{f}</span>
            </div>
          ))}
        </div>
      )}
      {tab==="applications"&&(
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          {p.applications.map((a,i)=>(
            <div key={i} style={{background:"white",border:`1.5px solid ${C.border}`,borderRadius:10,padding:"13px 20px",fontSize:14,color:C.navy,fontWeight:500,display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:7,height:7,borderRadius:"50%",background:C.orange}}/>{a}
            </div>
          ))}
        </div>
      )}
      {tab==="specs"&&(
        <div style={{background:"white",border:`1px solid ${C.border}`,borderRadius:12,overflow:"hidden"}}>
          {[...p.specs,{label:"Gas Supply",value:p.gasSupply}].map((s,i,arr)=>(
            <div key={s.label} style={{display:"flex",padding:"13px 22px",borderBottom:i<arr.length-1?`1px solid ${C.bg}`:"none",background:i%2===0?"white":"#FAFCFF"}}>
              <span style={{width:200,fontSize:13,color:C.t2,fontWeight:500}}>{s.label}</span>
              <span style={{fontSize:13,color:C.navy,fontWeight:600,fontFamily:"'IBM Plex Mono',monospace"}}>{s.value}</span>
            </div>
          ))}
        </div>
      )}
      {tab==="variants"&&p.variants&&(
        <div style={{background:"white",border:`1px solid ${C.border}`,borderRadius:12,overflow:"hidden"}}>
          <div style={{display:"grid",gridTemplateColumns:"120px 1fr 1fr",padding:"10px 22px",background:C.bg,borderBottom:`1px solid ${C.border}`}}>
            {["PART NO.","DESCRIPTION","DETAILS"].map(h=><span key={h} style={{fontSize:11,fontWeight:700,color:C.t3,letterSpacing:"0.05em"}}>{h}</span>)}
          </div>
          {p.variants.map((v,i)=>(
            <div key={v.no} style={{display:"grid",gridTemplateColumns:"120px 1fr 1fr",padding:"13px 22px",borderBottom:i<p.variants.length-1?`1px solid ${C.bg}`:"none",background:i%2===0?"white":"#FAFCFF"}}>
              <span style={{fontSize:13,fontWeight:700,color:C.orange,fontFamily:"'IBM Plex Mono',monospace"}}>{v.no}</span>
              <span style={{fontSize:13,color:C.navy,fontWeight:500}}>{v.label}</span>
              <span style={{fontSize:13,color:C.t2}}>{v.dims}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{marginTop:36,display:"flex",flexDirection:"column",gap:10}}>
        <Expand title="Compatible Systems">
          {p.compatibleControllers?.length
            ? `This product is compatible with: ${p.compatibleControllers.map(id=>PRODUCTS.find(x=>x.id===id)?.name).filter(Boolean).join(", ")}.`
            : "Compatible with C-Chamber base systems. Use the System Builder to configure a complete setup."}
        </Expand>
        <Expand title="Installation Notes">
          Connect gas supply lines to the labelled inlet ports before powering the unit. Ensure the enclosure is semi-sealed and tubing connections are secure. Calibrate the sensor to ambient before first use.
        </Expand>
        <Expand title="Example Control Scenarios">
          For hypoxia: set O₂ target to 1–5% with N₂ infusion. For normoxia: maintain 21% O₂. For cycling protocols (C42/GT only): define upper and lower O₂ setpoints and cycle duration in the programming interface.
        </Expand>
      </div>

      {related.length>0&&(
        <div style={{marginTop:48}}>
          <h2 style={{fontSize:18,fontWeight:700,marginBottom:16,letterSpacing:"-0.02em"}}>Compatible Products</h2>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            {related.map(rp=>(
              <div key={rp.id} onClick={()=>go("detail",{product:rp})} style={{background:"white",border:`1px solid ${C.border}`,borderRadius:11,padding:"14px 18px",cursor:"pointer",display:"flex",gap:12,alignItems:"center",transition:"all 0.2s",minWidth:220}}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 16px rgba(27,58,107,0.1)";}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";}}>
                <div style={{background:C.bg,borderRadius:7,padding:6,display:"flex"}}><Illo id={rp.id} size={44}/></div>
                <div>
                  <div style={{fontSize:13,fontWeight:700}}>{rp.name}</div>
                  <div style={{fontSize:11,color:C.t2}}>{rp.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── BUILDER ──────────────────────────────────────────────────────────────── */
function BuilderScreen({go,cfg,setCfg,setGenSystem}) {
  const [step,setStep]=useState(1);
  const set=(k,v)=>setCfg(c=>({...c,[k]:v}));
  const baseP=PRODUCTS.find(p=>p.id===cfg.base);
  const appNeeds=APPLICATIONS.find(a=>a.id===cfg.application)?.needs||[];
  const allCtrl=PRODUCTS.filter(p=>p.isController&&(p.compatibleBases?.includes(cfg.base)||cfg.base==="c-chamber"));
  const suggested=cfg.application?allCtrl.filter(p=>{
    if(appNeeds.includes("cycling")&&!p.supportsCycling) return false;
    if(appNeeds.includes("co-no")&&p.id!=="oxycycler-gt") return false;
    if(appNeeds.includes("microscopy")&&p.id!=="oxystreamer") return false;
    return true;
  }):allCtrl;
  const canGen=cfg.application&&cfg.base&&cfg.controller;
  const STEPS=["Application","Base Chamber","Controller","Options","Generate"];

  return (
    <div style={{maxWidth:820,margin:"0 auto",padding:"40px 28px"}}>
      <h1 style={{fontSize:30,fontWeight:700,letterSpacing:"-0.03em",marginBottom:4}}>System Builder</h1>
      <p style={{color:C.t2,fontSize:14,marginBottom:36}}>Configure a BioSpherix system for your application and generate a client-ready preview.</p>

      {/* Steps */}
      <div style={{display:"flex",alignItems:"center",marginBottom:40}}>
        {STEPS.map((s,i)=>{
          const n=i+1,done=n<step,active=n===step;
          return (
            <div key={s} style={{display:"flex",alignItems:"center",flex:i<STEPS.length-1?1:"none"}}>
              <div onClick={()=>done&&setStep(n)} style={{display:"flex",alignItems:"center",gap:7,cursor:done?"pointer":"default"}}>
                <div style={{width:28,height:28,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,background:done?C.navy:active?C.orange:C.bg,color:done||active?"white":C.t3,border:active?`2px solid ${C.orange}`:done?`2px solid ${C.navy}`:`1.5px solid ${C.border}`,transition:"all 0.2s"}}>
                  {done?"✓":n}
                </div>
                <span style={{fontSize:12,fontWeight:active?700:400,color:active?C.navy:done?C.t2:C.t3,whiteSpace:"nowrap"}}>{s}</span>
              </div>
              {i<STEPS.length-1&&<div style={{flex:1,height:1.5,background:done?C.navy:C.border,margin:"0 8px",minWidth:24}}/>}
            </div>
          );
        })}
      </div>

      {step===1&&(
        <div>
          <h2 style={{fontSize:20,fontWeight:700,marginBottom:4,letterSpacing:"-0.02em"}}>What is your application?</h2>
          <p style={{fontSize:13,color:C.t2,marginBottom:22}}>Select the primary research need for this system.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:24}}>
            {APPLICATIONS.map(a=>(
              <div key={a.id} onClick={()=>set("application",a.id)} style={{background:cfg.application===a.id?"#EAF2FF":"white",border:`1.5px solid ${cfg.application===a.id?C.navy:C.border}`,borderRadius:10,padding:"14px 16px",cursor:"pointer",transition:"all 0.15s"}}>
                                <div style={{fontSize:14,fontWeight:700,color:C.navy,marginBottom:4}}>{a.label}</div>
                <div style={{fontSize:12,color:C.t2,lineHeight:1.5}}>{a.desc}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <button onClick={()=>cfg.application&&setStep(2)} style={{background:cfg.application?C.navy:C.border,color:"white",border:"none",borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:600,cursor:cfg.application?"pointer":"default",fontFamily:"inherit"}}>Continue →</button>
          </div>
        </div>
      )}

      {step===2&&(
        <div>
          <h2 style={{fontSize:20,fontWeight:700,marginBottom:4,letterSpacing:"-0.02em"}}>Choose your base chamber</h2>
          <p style={{fontSize:13,color:C.t2,marginBottom:22}}>Select the chamber configuration for your workflow.</p>
          <div style={{background:"#EAF2FF",border:`1.5px solid ${C.navy}`,borderRadius:12,padding:"18px",display:"flex",gap:16,alignItems:"center",marginBottom:16}}>
            <div style={{background:C.bg,borderRadius:8,padding:8,flexShrink:0}}><Illo id="c-chamber" size={80}/></div>
            <div>
              <div style={{fontSize:15,fontWeight:700,marginBottom:3}}>C-Chamber</div>
              <div style={{fontSize:13,color:C.t2,marginBottom:10}}>Incubator Subchamber — available in 4 shelf configurations</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {(baseP?.variants||[]).map(v=>(
                  <button key={v.no} onClick={()=>set("variant",v.no)} style={{padding:"5px 12px",borderRadius:6,border:`1.5px solid ${cfg.variant===v.no?C.navy:C.border}`,background:cfg.variant===v.no?C.navy:"white",color:cfg.variant===v.no?"white":C.t2,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{v.no}</button>
                ))}
              </div>
            </div>
          </div>
          {cfg.variant&&<div style={{background:C.bg,borderRadius:8,padding:"10px 14px",fontSize:13,color:C.t2,marginBottom:20}}><span style={{fontWeight:600,color:C.navy}}>{cfg.variant}</span> — {baseP?.variants?.find(v=>v.no===cfg.variant)?.dims}</div>}
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <button onClick={()=>setStep(1)} style={{background:"transparent",color:C.navy,border:`1.5px solid ${C.border}`,borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
            <button onClick={()=>setStep(3)} style={{background:C.navy,color:"white",border:"none",borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Continue →</button>
          </div>
        </div>
      )}

      {step===3&&(
        <div>
          <h2 style={{fontSize:20,fontWeight:700,marginBottom:4,letterSpacing:"-0.02em"}}>Choose your controller</h2>
          <p style={{fontSize:13,color:C.t2,marginBottom:22}}>{cfg.application?`Recommended for: ${APPLICATIONS.find(a=>a.id===cfg.application)?.label}`:"Select a controller for your system."}</p>
          {suggested.length<allCtrl.length&&<div style={{background:"#EAF2FF",border:`1px solid ${C.border}`,borderRadius:8,padding:"8px 14px",fontSize:12,color:C.navy,marginBottom:16,fontWeight:500}}>Showing {suggested.length} recommended controllers for your application</div>}
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:20}}>
            {(suggested.length>0?suggested:allCtrl).map(p=>(
              <div key={p.id} onClick={()=>set("controller",p.id)} style={{background:cfg.controller===p.id?"#EAF2FF":"white",border:`1.5px solid ${cfg.controller===p.id?C.navy:C.border}`,borderRadius:11,padding:"14px 16px",cursor:"pointer",transition:"all 0.15s",display:"flex",alignItems:"center",gap:16}}>
                <div style={{background:C.bg,borderRadius:8,padding:6,flexShrink:0}}><Illo id={p.id} size={72}/></div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:700,marginBottom:2}}>{p.name}</div>
                  <div style={{fontSize:12,color:C.t2,marginBottom:6}}>{p.subtitle}</div>
                  <div>{p.gases.map(g=><GasPill key={g} gas={g}/>)}</div>
                </div>
                <div style={{textAlign:"right",flexShrink:0}}>
                  {p.specs.slice(0,2).map(s=><div key={s.label} style={{fontSize:11,color:C.t2,marginBottom:3}}><span style={{fontWeight:600}}>{s.label}:</span> {s.value}</div>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <button onClick={()=>setStep(2)} style={{background:"transparent",color:C.navy,border:`1.5px solid ${C.border}`,borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
            <button onClick={()=>cfg.controller&&setStep(4)} style={{background:cfg.controller?C.navy:C.border,color:"white",border:"none",borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:600,cursor:cfg.controller?"pointer":"default",fontFamily:"inherit"}}>Continue →</button>
          </div>
        </div>
      )}

      {step===4&&(
        <div>
          <h2 style={{fontSize:20,fontWeight:700,marginBottom:4,letterSpacing:"-0.02em"}}>Optional components</h2>
          <p style={{fontSize:13,color:C.t2,marginBottom:22}}>Add accessories to complete your system setup.</p>
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:20}}>
            {OPTIONAL_COMPONENTS.map(o=>{
              const sel=cfg.optionals.includes(o.id);
              return (
                <div key={o.id} onClick={()=>set("optionals",sel?cfg.optionals.filter(x=>x!==o.id):[...cfg.optionals,o.id])} style={{background:sel?"#EAF2FF":"white",border:`1.5px solid ${sel?C.navy:C.border}`,borderRadius:10,padding:"13px 16px",cursor:"pointer",transition:"all 0.15s",display:"flex",alignItems:"center",gap:14}}>
                  <div style={{width:22,height:22,borderRadius:5,border:`2px solid ${sel?C.navy:C.border}`,background:sel?C.navy:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>
                    {sel&&<span style={{color:"white",fontSize:12,fontWeight:700}}>✓</span>}
                  </div>
                  <div>
                    <div style={{fontSize:13,fontWeight:600}}>{o.label}</div>
                    <div style={{fontSize:12,color:C.t2}}>{o.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,padding:"14px 18px",marginBottom:20}}>
            <div style={{fontSize:12,fontWeight:700,color:C.t3,letterSpacing:"0.04em",marginBottom:10}}>SYSTEM SUMMARY</div>
            {[
              {label:"Application",value:APPLICATIONS.find(a=>a.id===cfg.application)?.label},
              {label:"Chamber",value:`C-Chamber ${cfg.variant||""}`},
              {label:"Controller",value:PRODUCTS.find(p=>p.id===cfg.controller)?.name},
              ...(cfg.optionals.length?[{label:"Extras",value:cfg.optionals.map(id=>OPTIONAL_COMPONENTS.find(o=>o.id===id)?.label).join(", ")}]:[]),
            ].map(r=>(
              <div key={r.label} style={{display:"flex",gap:10,fontSize:13,marginBottom:4}}>
                <span style={{color:C.t3,width:90,flexShrink:0}}>{r.label}</span>
                <span style={{color:C.navy,fontWeight:600}}>{r.value}</span>
              </div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <button onClick={()=>setStep(3)} style={{background:"transparent",color:C.navy,border:`1.5px solid ${C.border}`,borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>← Back</button>
            <button onClick={()=>{if(canGen){setGenSystem(buildSummary(cfg));go("preview");}}} style={{background:canGen?C.orange:C.border,color:"white",border:"none",borderRadius:8,padding:"11px 28px",fontSize:14,fontWeight:700,cursor:canGen?"pointer":"default",fontFamily:"inherit"}}>Generate System Preview →</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── PREVIEW ──────────────────────────────────────────────────────────────── */
function PreviewScreen({go,system}) {
  const {sysName,explanation,caps,comps,app,baseP,ctrlP,varObj}=system;
  return (
    <div style={{maxWidth:860,margin:"0 auto",padding:"40px 28px 60px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:28}}>
        <button onClick={()=>go("builder")} style={{background:"none",border:"none",color:C.t2,cursor:"pointer",fontSize:13,fontFamily:"inherit",display:"flex",alignItems:"center",gap:5}}>← Edit Configuration</button>
        <button onClick={()=>window.print()} style={{background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:7,padding:"7px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",color:C.t2}}>Export PDF</button>
      </div>

      {/* Header */}
      <div style={{background:C.navy,borderRadius:16,padding:"36px 36px 32px",marginBottom:24,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:200,height:200,borderRadius:"50%",background:"rgba(232,119,46,0.1)"}}/>
        <div style={{position:"relative"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <span style={{background:"rgba(232,119,46,0.2)",border:"1px solid rgba(232,119,46,0.4)",borderRadius:4,padding:"3px 10px",fontSize:11,color:"#E8C4A0",fontWeight:600,letterSpacing:"0.06em"}}>SYSTEM CONFIGURATION</span>
          </div>
          <h1 style={{fontSize:28,fontWeight:700,color:"white",letterSpacing:"-0.03em",marginBottom:8}}>{sysName}</h1>
          <p style={{fontSize:14,color:"#A0BCDA",lineHeight:1.65,maxWidth:580}}>{explanation}</p>
        </div>
      </div>

      {/* Visual */}
      <div style={{background:"white",border:`1px solid ${C.border}`,borderRadius:14,padding:"32px",marginBottom:20,display:"flex",justifyContent:"center",alignItems:"center",gap:40,flexWrap:"wrap"}}>
        <div style={{textAlign:"center"}}>
          <div style={{background:C.bg,borderRadius:12,padding:"22px 18px",marginBottom:10,display:"inline-block"}}><Illo id={baseP?.id||"c-chamber"} size={150}/></div>
          <div style={{fontSize:13,fontWeight:700,color:C.navy}}>{baseP?.name}</div>
          <div style={{fontSize:11,color:C.t2}}>{varObj?.label||""} Configuration</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",color:C.t3}}>
          <div style={{width:40,height:1.5,background:C.border,marginBottom:4}}/>
          <div style={{fontSize:10,fontWeight:600,letterSpacing:"0.06em",padding:"4px 0"}}>GAS CONTROL</div>
          <div style={{width:40,height:1.5,background:C.border,marginTop:4}}/>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{background:C.bg,borderRadius:12,padding:"22px 18px",marginBottom:10,display:"inline-block"}}><Illo id={ctrlP?.id||""} size={150}/></div>
          <div style={{fontSize:13,fontWeight:700,color:C.navy}}>{ctrlP?.name}</div>
          <div style={{fontSize:11,color:C.t2}}>{ctrlP?.subtitle}</div>
        </div>
      </div>

      {/* 3-col */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,marginBottom:20}}>
        <div style={{background:"white",border:`1px solid ${C.border}`,borderRadius:12,padding:"20px"}}>
          <div style={{fontSize:11,fontWeight:700,color:C.t3,letterSpacing:"0.05em",marginBottom:14}}>INCLUDED COMPONENTS</div>
          {comps.map((c,i)=>(
            <div key={i} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:9}}>
              <div style={{width:16,height:16,borderRadius:"50%",background:C.bg,border:`1.5px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                <div style={{width:5,height:5,borderRadius:"50%",background:C.orange}}/>
              </div>
              <span style={{fontSize:13,color:C.navy,lineHeight:1.45}}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{background:"#EAF2FF",border:`1px solid ${C.border}`,borderRadius:12,padding:"20px"}}>
          <div style={{fontSize:11,fontWeight:700,color:C.t3,letterSpacing:"0.05em",marginBottom:14}}>KEY CAPABILITIES</div>
          {caps.map((c,i)=>(
            <div key={i} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:9}}>
              <div style={{width:16,height:16,borderRadius:4,background:C.navy,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                <span style={{color:"white",fontSize:9,fontWeight:700}}>✓</span>
              </div>
              <span style={{fontSize:13,color:C.navy,lineHeight:1.45}}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{background:"white",border:`1px solid ${C.border}`,borderRadius:12,padding:"20px"}}>
          <div style={{fontSize:11,fontWeight:700,color:C.t3,letterSpacing:"0.05em",marginBottom:14}}>TECHNICAL SNAPSHOT</div>
          {[
            ...(ctrlP?.controlsO2?[{label:"O₂ Control",value:"0.1–99.9%"}]:[]),
            ...(ctrlP?.controlsCO2?[{label:"CO₂ Control",value:"0.1–20%"}]:[]),
            ...(varObj?[{label:"Chamber Size",value:varObj.dims}]:[]),
            ...(ctrlP?.specs.filter(s=>["Infusion Rate","Weight","Power"].includes(s.label)).slice(0,3)||[]),
          ].map(s=>(
            <div key={s.label} style={{marginBottom:9}}>
              <div style={{fontSize:10,color:C.t3,fontWeight:600,letterSpacing:"0.04em"}}>{s.label.toUpperCase()}</div>
              <div style={{fontSize:13,color:C.navy,fontWeight:600,fontFamily:"'IBM Plex Mono',monospace"}}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable details */}
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:24}}>
        <Expand title="Installation Overview">
          Connect the {ctrlP?.name} to the {varObj?.no||"C-Chamber"} using the gas inlet port. Ensure the incubator door is closed with the chamber properly sealed. Connect pressurized gas supply lines ({ctrlP?.gasSupply||"see spec sheet"}). Power on and verify readings on the front display before loading cells.
        </Expand>
        <Expand title="Example Control Scenarios">
          Hypoxia: set O₂ to 1–5% using nitrogen displacement. Dual-gas: simultaneously regulate CO₂ at 5% and O₂ at desired level using the C21 or C42. Dynamic cycling: program the OxyCycler C42 with upper and lower O₂ setpoints and cycle frequency for ischemia/reperfusion protocols.
        </Expand>
        <Expand title="Full Specification Reference">
          {ctrlP ? ctrlP.specs.map(s=>`${s.label}: ${s.value}`).join(" · ")+" · Gas Supply: "+ctrlP.gasSupply : "See product data sheet."}
        </Expand>
      </div>

      {/* Footer */}
      <div style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:12,padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
        <div>
          <div style={{fontSize:14,fontWeight:600,color:C.navy,marginBottom:2}}>Ready to discuss this configuration?</div>
          <div style={{fontSize:12,color:C.t2}}>Visit biospherix.com or contact a specialist to get a formal quotation.</div>
        </div>
        <div style={{display:"flex",gap:10}}>
          <button onClick={()=>go("builder")} style={{background:"transparent",color:C.navy,border:`1.5px solid ${C.border}`,borderRadius:7,padding:"7px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Edit System</button>
          <button onClick={()=>go("library")} style={{background:C.orange,color:"white",border:"none",borderRadius:7,padding:"7px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Browse More Products</button>
        </div>
      </div>
    </div>
  );
}

/* ─── COMPARE ──────────────────────────────────────────────────────────────── */
function CompareScreen({compareList,toggleCmp,go}) {
  const products=compareList.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
  const allKeys=Array.from(new Set(products.flatMap(p=>p.specs.map(s=>s.label))));
  return (
    <div style={{maxWidth:1100,margin:"0 auto",padding:"40px 28px"}}>
      <h1 style={{fontSize:30,fontWeight:700,letterSpacing:"-0.03em",marginBottom:4}}>Compare Controllers</h1>
      <p style={{color:C.t2,fontSize:14,marginBottom:28}}>Select up to 4 products from the Product Library to compare side-by-side.</p>
      {products.length===0?(
        <div style={{textAlign:"center",padding:"80px 32px",background:"white",borderRadius:16,border:`1px solid ${C.border}`}}>
          <h3 style={{fontSize:18,fontWeight:700,marginBottom:8}}>No products selected</h3>
          <p style={{color:C.t2,fontSize:14,marginBottom:22}}>Go to the Product Library and click "+" on product cards to add them here.</p>
          <button onClick={()=>go("library")} style={{background:C.navy,color:"white",border:"none",borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Browse Product Library</button>
        </div>
      ):(
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",background:"white",borderRadius:14,overflow:"hidden",border:`1px solid ${C.border}`,boxShadow:"0 2px 16px rgba(27,58,107,0.06)"}}>
            <thead>
              <tr>
                <th style={{padding:"14px 20px",textAlign:"left",background:C.bg,borderBottom:`1px solid ${C.border}`,width:160,fontSize:11,color:C.t3,fontWeight:700,letterSpacing:"0.05em"}}>SPECIFICATION</th>
                {products.map(p=>(
                  <th key={p.id} style={{padding:"16px 20px",textAlign:"left",background:C.bg,borderBottom:`1px solid ${C.border}`,borderLeft:`1px solid ${C.border}`,minWidth:180}}>
                    <div style={{fontSize:15,fontWeight:700,color:C.navy,marginBottom:2}}>{p.name}</div>
                    <div style={{fontSize:11,color:C.t2,marginBottom:8}}>{p.subtitle}</div>
                    <button onClick={()=>toggleCmp(p.id)} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:4,padding:"3px 8px",fontSize:11,color:C.t3,cursor:"pointer",fontFamily:"inherit"}}>Remove</button>
                  </th>
                ))}
                {products.length<4&&<th style={{padding:"16px 20px",background:C.bg,borderBottom:`1px solid ${C.border}`,borderLeft:`1px solid ${C.border}`}}><button onClick={()=>go("library")} style={{background:"none",border:`1.5px dashed ${C.border}`,borderRadius:8,padding:"10px 14px",fontSize:12,color:C.t3,cursor:"pointer",fontFamily:"inherit",width:"100%"}}>+ Add product</button></th>}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:"14px 20px",fontSize:11,color:C.t3,fontWeight:700,letterSpacing:"0.04em",background:"#FAFCFF",borderBottom:`1px solid ${C.bg}`}}>VISUAL</td>
                {products.map((p,i)=>(
                  <td key={p.id} style={{padding:"18px 20px",borderLeft:`1px solid ${C.border}`,borderBottom:`1px solid ${C.bg}`,background:i%2===0?"white":"#FAFCFF"}}>
                    <div style={{display:"flex",justifyContent:"center",background:C.bg,borderRadius:8,padding:"12px 8px"}}><Illo id={p.id} size={110}/></div>
                  </td>
                ))}
                {products.length<4&&<td style={{borderLeft:`1px solid ${C.border}`,borderBottom:`1px solid ${C.bg}`}}/>}
              </tr>
              <tr>
                <td style={{padding:"12px 20px",fontSize:11,color:C.t3,fontWeight:700,letterSpacing:"0.04em",background:"#FAFCFF",borderBottom:`1px solid ${C.bg}`}}>GASES</td>
                {products.map((p,i)=>(
                  <td key={p.id} style={{padding:"12px 20px",borderLeft:`1px solid ${C.border}`,borderBottom:`1px solid ${C.bg}`,background:i%2===0?"white":"#FAFCFF"}}>
                    {p.gases.map(g=><GasPill key={g} gas={g}/>)}
                  </td>
                ))}
                {products.length<4&&<td style={{borderLeft:`1px solid ${C.border}`,borderBottom:`1px solid ${C.bg}`}}/>}
              </tr>
              {allKeys.map((key)=>(
                <tr key={key}>
                  <td style={{padding:"12px 20px",fontSize:11,color:C.t3,fontWeight:700,letterSpacing:"0.04em",background:"#FAFCFF",borderBottom:`1px solid ${C.bg}`}}>{key.toUpperCase()}</td>
                  {products.map((p,ci)=>{
                    const val=p.specs.find(s=>s.label===key)?.value||"—";
                    return <td key={p.id} style={{padding:"12px 20px",borderLeft:`1px solid ${C.border}`,borderBottom:`1px solid ${C.bg}`,fontSize:13,color:val==="—"?C.t3:C.navy,fontWeight:500,fontFamily:"'IBM Plex Mono',monospace",background:ci%2===0?"white":"#FAFCFF"}}>{val}</td>;
                  })}
                  {products.length<4&&<td style={{borderLeft:`1px solid ${C.border}`,borderBottom:`1px solid ${C.bg}`}}/>}
                </tr>
              ))}
              <tr>
                <td style={{padding:"14px 20px",fontSize:11,color:C.t3,fontWeight:700,letterSpacing:"0.04em",background:"#FAFCFF"}}>APPLICATIONS</td>
                {products.map((p,ci)=>(
                  <td key={p.id} style={{padding:"14px 20px",borderLeft:`1px solid ${C.border}`,background:ci%2===0?"white":"#FAFCFF",verticalAlign:"top"}}>
                    {p.applications.map((a,i)=>(
                      <div key={i} style={{fontSize:12,color:"#3A5C8C",padding:"2px 0",display:"flex",alignItems:"center",gap:6}}>
                        <div style={{width:5,height:5,borderRadius:"50%",background:C.orange,flexShrink:0}}/>{a}
                      </div>
                    ))}
                  </td>
                ))}
                {products.length<4&&<td style={{borderLeft:`1px solid ${C.border}`}}/>}
              </tr>
              <tr>
                <td style={{padding:"12px 20px",background:C.bg}}/>
                {products.map(p=>(
                  <td key={p.id} style={{padding:"12px 20px",borderLeft:`1px solid ${C.border}`,background:C.bg}}>
                    <button onClick={()=>go("detail",{product:p})} style={{background:C.navy,color:"white",border:"none",borderRadius:7,padding:"8px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%"}}>View Details</button>
                  </td>
                ))}
                {products.length<4&&<td style={{borderLeft:`1px solid ${C.border}`,background:C.bg}}/>}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
