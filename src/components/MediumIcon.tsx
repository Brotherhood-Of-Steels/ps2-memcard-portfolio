const MediumIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" className={className}>
    <defs>
      <linearGradient id="medTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4B5563" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>
      <linearGradient id="medSide1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#374151" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
      <linearGradient id="medSide2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1F2937" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
      <radialGradient id="medGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#6B7280" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#medGlow)" fillOpacity="0.5"/>
    <g transform="translate(200, 260)">
      <polygon points="0,-40 70,-10 0,20 -70,-10" fill="url(#medTop)" stroke="#6B7280" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="-70,-10 0,20 0,50 -70,20" fill="url(#medSide1)" stroke="#4B5563" strokeWidth="1" strokeLinejoin="round"/>
      <polygon points="0,20 70,-10 70,20 0,50" fill="url(#medSide2)" stroke="#374151" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-55,-6 L-10,13 M-45,0 L-10,15 M10,13 L55,-6 M10,15 L45,0" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.3"/>
    </g>
    <g transform="translate(200, 160)">
      <ellipse cx="0" cy="70" rx="35" ry="12" fill="#000" opacity="0.4"/>
      <polygon points="-45,-65 -45,45 35,65 35,-45" fill="#111827"/>
      <polygon points="-40,-70 -40,40 40,60 40,-50" fill="#1F2937" stroke="#4B5563" strokeWidth="2" strokeLinejoin="round"/>
      <g transform="translate(-20, -40)">
        <path d="M -5 20 L 40 32" stroke="#6B7280" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 32 L 35 43" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 44 L 45 57" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 56 L 30 66" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <g transform="translate(0, 15)">
        <text x="-27" y="5" fontFamily="Georgia, serif" fontWeight="900" fontSize="60" fill="#000000" transform="skewY(14)">M</text>
        <text x="-26" y="3" fontFamily="Georgia, serif" fontWeight="900" fontSize="60" fill="#4B5563" transform="skewY(14)">M</text>
        <text x="-25" y="0" fontFamily="Georgia, serif" fontWeight="900" fontSize="60" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" transform="skewY(14)">M</text>
      </g>
    </g>
  </svg>
);

export default MediumIcon;
