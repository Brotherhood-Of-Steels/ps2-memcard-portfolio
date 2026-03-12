const GitHubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" className={className}>
    <defs>
      <linearGradient id="github3D_face_black" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#000000" /><stop offset="100%" stopColor="#111111" />
      </linearGradient>
      <linearGradient id="github3D_side_black" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#222222" /><stop offset="100%" stopColor="#333333" />
      </linearGradient>
      <radialGradient id="github3D_glow_black" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4B5563" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#github3D_glow_black)" fillOpacity="0.5"/>
    <g transform="translate(200, 200)">
      <ellipse cx="0" cy="90" rx="50" ry="15" fill="#000" opacity="0.3"/>
      <g transform="skewY(14)">
        <path d="M0 -60c-33.1 0-60 26.9-60 60 0 26.5 17.2 49 41.1 57.1 3 .6 4.1-1.3 4.1-2.9v-10.3c-16.7 3.6-20.2-8.1-20.2-8.1-2.7-7-6.6-8.8-6.6-8.8-5.4-3.7.4-3.6.4-3.6 6 .4 9.1 6.1 9.1 6.1 5.3 9.1 13.9 6.5 17.3 4.9.5-3.9 2.1-6.5 3.9-8-13.3-1.5-27.2-6.6-27.2-29.5 0-6.6 2.3-11.9 6.1-16-.6-1.5-2.7-7.7.6-15.8 0 0 5.1-1.6 16.6 6.2 4.8-1.3 10-2 15.1-2 5.1 0 10.3.7 15.1 2 11.6-7.8 16.6-6.2 16.6-6.2 3.2 8.1 1.2 14.3.6 15.8 3.8 4.1 6.1 9.4 6.1 16 0 22.9-13.9 28-27.2 29.5 2.1 1.8 4.1 5.5 4.1 11.1v16.5c0 1.6 1.1 3.5 4.1 2.9 23.9-8.1 41.1-30.6 41.1-57.1 0-33.1-26.9-60-60-60z" fill="url(#github3D_side_black)"/>
        <path d="M0 -60c-33.1 0-60 26.9-60 60 0 26.5 17.2 49 41.1 57.1 3 .6 4.1-1.3 4.1-2.9v-10.3c-16.7 3.6-20.2-8.1-20.2-8.1-2.7-7-6.6-8.8-6.6-8.8-5.4-3.7.4-3.6.4-3.6 6 .4 9.1 6.1 9.1 6.1 5.3 9.1 13.9 6.5 17.3 4.9.5-3.9 2.1-6.5 3.9-8-13.3-1.5-27.2-6.6-27.2-29.5 0-6.6 2.3-11.9 6.1-16-.6-1.5-2.7-7.7.6-15.8 0 0 5.1-1.6 16.6 6.2 4.8-1.3 10-2 15.1-2 5.1 0 10.3.7 15.1 2 11.6-7.8 16.6-6.2 16.6-6.2 3.2 8.1 1.2 14.3.6 15.8 3.8 4.1 6.1 9.4 6.1 16 0 22.9-13.9 28-27.2 29.5 2.1 1.8 4.1 5.5 4.1 11.1v16.5c0 1.6 1.1 3.5 4.1 2.9 23.9-8.1 41.1-30.6 41.1-57.1 0-33.1-26.9-60-60-60z" fill="url(#github3D_face_black)" stroke="#000000" strokeWidth="1" transform="translate(1.5, 1.5)"/>
      </g>
    </g>
  </svg>
);

export default GitHubIcon;
