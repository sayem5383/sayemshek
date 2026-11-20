import type { Project } from "@/lib/site-data"

function PortfolioPreview() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="h-full w-full"
      role="img"
      aria-label="Preview of the Portfolio Website project"
    >
      <defs>
        <linearGradient id="pp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#141319" />
          <stop offset="1" stopColor="#08080a" />
        </linearGradient>
        <linearGradient id="pp-orange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff9a4d" />
          <stop offset="1" stopColor="#ff5a00" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#pp-bg)" />
      <circle cx="530" cy="60" r="120" fill="#ff6b1a" opacity="0.1" />
      <rect x="28" y="26" width="584" height="308" rx="16" fill="#ffffff" opacity="0.025" />
      <rect x="28" y="26" width="584" height="42" rx="16" fill="#ffffff" opacity="0.04" />
      <circle cx="54" cy="47" r="7" fill="#ff6b1a" />
      <rect x="72" y="43" width="44" height="7" rx="3.5" fill="#ffffff" opacity="0.55" />
      <rect x="392" y="43" width="28" height="6" rx="3" fill="#ffffff" opacity="0.18" />
      <rect x="430" y="43" width="28" height="6" rx="3" fill="#ffffff" opacity="0.18" />
      <rect x="468" y="43" width="28" height="6" rx="3" fill="#ffffff" opacity="0.18" />
      <rect x="516" y="36" width="72" height="22" rx="11" fill="url(#pp-orange)" />
      <rect x="64" y="110" width="220" height="16" rx="8" fill="#ffffff" opacity="0.22" />
      <rect x="64" y="140" width="268" height="30" rx="12" fill="#ffffff" opacity="0.85" />
      <rect x="64" y="182" width="180" height="8" rx="4" fill="url(#pp-orange)" />
      <rect x="64" y="212" width="230" height="7" rx="3.5" fill="#ffffff" opacity="0.25" />
      <rect x="64" y="230" width="190" height="7" rx="3.5" fill="#ffffff" opacity="0.2" />
      <rect x="64" y="264" width="104" height="30" rx="15" fill="url(#pp-orange)" />
      <rect x="180" y="264" width="92" height="30" rx="15" fill="#ffffff" opacity="0.06" />
      <circle cx="470" cy="200" r="86" fill="none" stroke="#ff6b1a" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="7 8" />
      <circle cx="470" cy="200" r="66" fill="#1b1a20" stroke="#ff6b1a" strokeOpacity="0.6" strokeWidth="2" />
      <circle cx="470" cy="182" r="20" fill="#ffffff" opacity="0.7" />
      <path d="M428 246c8-26 22-38 42-38s34 12 42 38" fill="#ffffff" opacity="0.45" />
    </svg>
  )
}

function EcommercePreview() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="h-full w-full"
      role="img"
      aria-label="Preview of the E-Commerce Store project"
    >
      <defs>
        <linearGradient id="ec-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#171218" />
          <stop offset="1" stopColor="#08080a" />
        </linearGradient>
        <linearGradient id="ec-orange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffb066" />
          <stop offset="1" stopColor="#ff5a00" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#ec-bg)" />
      <circle cx="80" cy="330" r="130" fill="#ff6b1a" opacity="0.08" />
      <rect x="28" y="24" width="584" height="312" rx="16" fill="#ffffff" opacity="0.03" />
      <rect x="28" y="24" width="584" height="46" rx="16" fill="#ffffff" opacity="0.045" />
      <circle cx="54" cy="47" r="7" fill="url(#ec-orange)" />
      <rect x="72" y="43" width="70" height="7" rx="3.5" fill="#ffffff" opacity="0.6" />
      <rect x="430" y="40" width="100" height="14" rx="7" fill="#ffffff" opacity="0.08" />
      <rect x="548" y="35" width="40" height="24" rx="12" fill="url(#ec-orange)" />
      <rect x="64" y="96" width="210" height="13" rx="6.5" fill="#ffffff" opacity="0.75" />
      <rect x="64" y="122" width="160" height="7" rx="3.5" fill="#ffffff" opacity="0.22" />
      <rect x="64" y="154" width="92" height="26" rx="13" fill="url(#ec-orange)" />
      <g transform="translate(400 92)">
        <rect width="164" height="180" rx="14" fill="#ffffff" opacity="0.045" />
        <circle cx="82" cy="66" r="40" fill="#ff6b1a" opacity="0.16" />
        <path d="M60 60h44l-5 30H65z" fill="none" stroke="#ff9a4d" strokeWidth="4" strokeLinejoin="round" />
        <path d="M70 60c0-12 5-20 12-20s12 8 12 20" fill="none" stroke="#ff9a4d" strokeWidth="4" />
        <rect x="34" y="120" width="96" height="7" rx="3.5" fill="#ffffff" opacity="0.5" />
        <rect x="50" y="138" width="64" height="7" rx="3.5" fill="#ffffff" opacity="0.22" />
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${64 + i * 100} 216)`}>
          <rect width="84" height="88" rx="12" fill="#ffffff" opacity="0.045" />
          <circle cx="42" cy="38" r="22" fill={i === 1 ? "#ff6b1a" : "#ffffff"} opacity={i === 1 ? 0.3 : 0.09} />
          <rect x="16" y="66" width="52" height="6" rx="3" fill="#ffffff" opacity="0.35" />
        </g>
      ))}
    </svg>
  )
}

function BusinessPreview() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="h-full w-full"
      role="img"
      aria-label="Preview of the Business Website project"
    >
      <defs>
        <linearGradient id="bs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#12131a" />
          <stop offset="1" stopColor="#08080a" />
        </linearGradient>
        <linearGradient id="bs-orange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff9a4d" />
          <stop offset="1" stopColor="#ff5a00" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#bs-bg)" />
      <circle cx="560" cy="300" r="140" fill="#ff6b1a" opacity="0.07" />
      <rect x="28" y="24" width="584" height="312" rx="16" fill="#ffffff" opacity="0.03" />
      <rect x="28" y="24" width="584" height="44" rx="16" fill="#ffffff" opacity="0.045" />
      <rect x="52" y="41" width="80" height="9" rx="4.5" fill="#ffffff" opacity="0.7" />
      <rect x="370" y="41" width="30" height="6" rx="3" fill="#ffffff" opacity="0.18" />
      <rect x="410" y="41" width="30" height="6" rx="3" fill="#ffffff" opacity="0.18" />
      <rect x="450" y="41" width="30" height="6" rx="3" fill="#ffffff" opacity="0.18" />
      <rect x="508" y="35" width="76" height="22" rx="11" fill="url(#bs-orange)" />
      <rect x="64" y="112" width="230" height="26" rx="10" fill="#ffffff" opacity="0.85" />
      <rect x="64" y="150" width="190" height="26" rx="10" fill="#ffffff" opacity="0.6" />
      <rect x="64" y="200" width="180" height="7" rx="3.5" fill="#ffffff" opacity="0.25" />
      <rect x="64" y="218" width="140" height="7" rx="3.5" fill="#ffffff" opacity="0.2" />
      <rect x="64" y="254" width="98" height="28" rx="14" fill="url(#bs-orange)" />
      <g transform="translate(370 118)">
        <rect x="0" y="80" width="26" height="70" rx="6" fill="#ff6b1a" opacity="0.45" />
        <rect x="38" y="52" width="26" height="98" rx="6" fill="#ff6b1a" opacity="0.7" />
        <rect x="76" y="20" width="26" height="130" rx="6" fill="url(#bs-orange)" />
        <rect x="114" y="62" width="26" height="88" rx="6" fill="#ff6b1a" opacity="0.55" />
        <path d="M0 76l38-28 38-30 38 40" fill="none" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="3" />
      </g>
      <rect x="380" y="238" width="190" height="6" rx="3" fill="#ffffff" opacity="0.12" />
    </svg>
  )
}

export function ProjectPreview({ variant }: { variant: Project["preview"] }) {
  if (variant === "ecommerce") return <EcommercePreview />
  if (variant === "business") return <BusinessPreview />
  return <PortfolioPreview />
}
