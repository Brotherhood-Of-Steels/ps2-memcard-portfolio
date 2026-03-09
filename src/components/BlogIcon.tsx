const BlogIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" className={className}>
    <defs>
      <linearGradient id="blogTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
      <linearGradient id="blogSide1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="blogSide2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1D4ED8" />
        <stop offset="100%" stopColor="#172554" />
      </linearGradient>
      <radialGradient id="blogGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#blogGlow)" fillOpacity="0.5"/>
    <g transform="translate(200, 260)">
      <polygon points="0,-40 70,-10 0,20 -70,-10" fill="url(#blogTop)" stroke="#93C5FD" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="-70,-10 0,20 0,50 -70,20" fill="url(#blogSide1)" stroke="#60A5FA" strokeWidth="1" strokeLinejoin="round"/>
      <polygon points="0,20 70,-10 70,20 0,50" fill="url(#blogSide2)" stroke="#3B82F6" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-55,-6 L-10,13 M-45,0 L-10,15 M10,13 L55,-6 M10,15 L45,0" stroke="#BFDBFE" strokeWidth="1.5" opacity="0.4"/>
    </g>
    <g transform="translate(200, 160)">
      <ellipse cx="0" cy="70" rx="35" ry="12" fill="#000" opacity="0.3"/>
      <polygon points="-45,-65 -45,45 35,65 35,-45" fill="#9CA3AF"/>
      <polygon points="-40,-70 -40,40 40,60 40,-50" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" strokeLinejoin="round"/>
      <g transform="translate(-20, -40)">
        <path d="M -5 10 L 40 22" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/>
        <path d="M -5 22 L 30 32" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 34 L 45 47" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 44 L 35 55" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 54 L 45 67" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <g transform="translate(0, 15)">
        <text x="-22" y="5" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="60" fill="#1E3A8A" transform="skewY(14)">B</text>
        <text x="-21" y="3" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="60" fill="#2563EB" transform="skewY(14)">B</text>
        <text x="-20" y="0" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="60" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" transform="skewY(14)">B</text>
      </g>
    </g>
  </svg>
);

export default BlogIcon;
