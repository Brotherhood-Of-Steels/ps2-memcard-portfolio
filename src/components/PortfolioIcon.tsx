const PortfolioIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className={className}>
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
      <linearGradient id="folderBackBlue" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#172554" />
      </linearGradient>
      <linearGradient id="folderFrontBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <radialGradient id="bgGlowFolderClean" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGlowFolderClean)" fillOpacity="0.5"/>
    <g transform="translate(200, 260)">
      <polygon points="0,-40 70,-10 0,20 -70,-10" fill="url(#pedestalTop)" stroke="#9CA3AF" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="-70,-10 0,20 0,50 -70,20" fill="url(#pedestalSide1)" stroke="#4B5563" strokeWidth="1" strokeLinejoin="round"/>
      <polygon points="0,20 70,-10 70,20 0,50" fill="url(#pedestalSide2)" stroke="#374151" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-55,-6 L-10,13 M-45,0 L-10,15 M10,13 L55,-6 M10,15 L45,0" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.4"/>
    </g>
    <g transform="translate(200, 160)">
      <ellipse cx="0" cy="70" rx="40" ry="12" fill="#000" opacity="0.3"/>
      <g transform="skewY(14)">
        <path d="M -40 -60 L -10 -60 L 0 -50 L 40 -50 L 40 -40 L -40 -40 Z" fill="url(#folderBackBlue)" stroke="#1E40AF" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="-40" y="-45" width="80" height="70" fill="url(#folderBackBlue)" stroke="#1E40AF" strokeWidth="1.5" rx="2"/>
        <rect x="-33" y="-55" width="66" height="75" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1" rx="1"/>
        <rect x="-28" y="-50" width="66" height="75" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" rx="1"/>
        <rect x="-23" y="-45" width="66" height="75" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="1" rx="1"/>
        <rect x="-15" y="-35" width="15" height="15" fill="#9CA3AF" rx="2"/>
        <line x1="5" y1="-30" x2="35" y2="-30" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
        <line x1="5" y1="-22" x2="25" y2="-22" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-15" y1="-10" x2="35" y2="-10" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-15" y1="0" x2="25" y2="0" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-15" y1="10" x2="35" y2="10" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-15" y1="20" x2="20" y2="20" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <rect x="-45" y="-15" width="85" height="55" fill="url(#folderFrontBlue)" stroke="#60A5FA" strokeWidth="1.5" rx="3"/>
        <line x1="-35" y1="30" x2="-20" y2="30" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="10" y1="30" x2="30" y2="30" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </g>
    </g>
  </svg>
);

export default PortfolioIcon;
