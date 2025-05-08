import React from 'react';

const ClipboardClip = () => {
  return (
    <svg 
      className="clipboard-clip" 
      width="150" 
      height="60" 
      viewBox="0 0 150 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      
      <rect x="35" y="10" width="90" height="30" fill="#000000" rx="15" ry="15" />
      <rect x="30" y="5" width="90" height="30" fill="#FF470F" stroke="#000000" strokeWidth="3" rx="15" ry="15" />
      
      <circle cx="75" cy="20" r="12" fill="#000000" />
      <circle cx="75" cy="20" r="10" fill="#FF470F" stroke="#000000" strokeWidth="2" />
      <circle cx="75" cy="20" r="5" fill="#FF6D3F" />
    </svg>
  );
};

export default ClipboardClip;