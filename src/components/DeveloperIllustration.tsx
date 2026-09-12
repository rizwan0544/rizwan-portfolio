export default function DeveloperIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="180" fill="var(--lavender)" />
      <circle cx="150" cy="110" r="90" fill="var(--soft)" />

      {/* legs / desk shadow */}
      <ellipse cx="200" cy="356" rx="120" ry="14" fill="#000000" opacity="0.06" />

      {/* body */}
      <path d="M120 360V270c0-44 36-80 80-80s80 36 80 80v90" fill="#1f2540" />
      <path d="M120 360V270c0-44 36-80 80-80s80 36 80 80v90" stroke="#141833" strokeWidth="2" />

      {/* shirt */}
      <path d="M182 200l18 22 18-22v40h-36z" fill="#e8ecff" />

      {/* tie */}
      <path d="M196 214l4 10 4-10 6 90-10 14-10-14z" fill="var(--primary)" />

      {/* neck */}
      <rect x="185" y="168" width="30" height="34" rx="10" fill="#e2a374" />

      {/* head */}
      <circle cx="200" cy="140" r="46" fill="#f0b58b" />

      {/* hair */}
      <path d="M154 132c-2-34 20-56 46-56s48 22 46 56c-8-10-20-16-30-14-6-10-18-16-16-6-10-8-22-4-24 6-8-2-16 4-22 14z" fill="#26243a" />

      {/* beard */}
      <path d="M164 142c0 26 16 44 36 44s36-18 36-44c-6 10-16 16-36 16s-30-6-36-16z" fill="#26243a" opacity="0.85" />

      {/* arms holding laptop */}
      <path d="M132 300c10-26 32-42 68-42s58 16 68 42l-10 26c-16-18-36-28-58-28s-42 10-58 28z" fill="#1f2540" />
      <circle cx="132" cy="304" r="12" fill="#f0b58b" />
      <circle cx="268" cy="304" r="12" fill="#f0b58b" />

      {/* laptop base */}
      <rect x="140" y="292" width="120" height="12" rx="4" fill="#d7dbe8" />
      {/* laptop screen */}
      <path d="M150 292l6-58h88l6 58z" fill="#2b3050" />
      <path d="M158 288l5-46h74l5 46z" fill="var(--primary)" opacity="0.9" />
      <rect x="170" y="252" width="60" height="4" rx="2" fill="white" opacity="0.7" />
      <rect x="170" y="262" width="42" height="4" rx="2" fill="white" opacity="0.5" />

      {/* floating accent dots */}
      <circle cx="320" cy="90" r="8" fill="var(--primary)" opacity="0.25" />
      <circle cx="70" cy="220" r="6" fill="var(--primary)" opacity="0.25" />
      <circle cx="330" cy="260" r="5" fill="var(--primary)" opacity="0.3" />
    </svg>
  );
}
