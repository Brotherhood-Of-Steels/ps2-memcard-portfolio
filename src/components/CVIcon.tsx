const CVIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" className={className}>
    <defs>
      <linearGradient id="pedestalTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B7280" />
        <stop offset="100%" stopColor="#374151" />
      </linearGradient>
      <linearGradient id="pedestalSide1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4B5563" />
        <stop offset="100%" stopColor="#1F2937" />
      </linearGradient>
      <linearGradient id="pedestalSide2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#374151" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4B5563" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#glow)" fillOpacity="0.5"/>
    <g transform="translate(200, 260)">
      <polygon points="0,-40 70,-10 0,20 -70,-10" fill="url(#pedestalTop)" stroke="#9CA3AF" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="-70,-10 0,20 0,50 -70,20" fill="url(#pedestalSide1)" stroke="#4B5563" strokeWidth="1" strokeLinejoin="round"/>
      <polygon points="0,20 70,-10 70,20 0,50" fill="url(#pedestalSide2)" stroke="#374151" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-55,-6 L-10,13 M-45,0 L-10,15 M10,13 L55,-6 M10,15 L45,0" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.4"/>
    </g>
    <g transform="translate(200, 160)">
      <ellipse cx="0" cy="70" rx="35" ry="12" fill="#000" opacity="0.3"/>
      <polygon points="-45,-65 -45,45 35,65 35,-45" fill="#D1D5DB"/>
      <polygon points="-40,-70 -40,40 40,60 40,-50" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" strokeLinejoin="round"/>
      <g transform="translate(-20, -40)">
        <rect x="-5" y="-5" width="22" height="26" fill="#9CA3AF" rx="2" transform="skewY(14)"/>
        <path d="M 28 4 L 50 10" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
        <path d="M 28 14 L 45 19" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 30 L 45 43" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 40 L 40 52" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 50 L 45 63" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 60 L 35 70" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 70 L 45 83" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <g transform="translate(0, 15)">
        <text x="-32" y="5" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="50" fill="#92400E" transform="skewY(14)">CV</text>
        <text x="-31" y="3" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="50" fill="#B45309" transform="skewY(14)">CV</text>
        <text x="-30" y="0" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="50" fill="url(#gold)" stroke="#FEF3C7" strokeWidth="1.5" transform="skewY(14)">CV</text>
      </g>
    </g>
  </svg>
);

export default CVIcon;
