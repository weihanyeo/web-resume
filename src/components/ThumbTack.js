import React from 'react';

const ThumbTack = ({ color = '#FF470F' }) => {
  return (
    <svg 
      className="thumbtack-icon" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="6" r="5" fill={color} stroke="#000000" strokeWidth="2" />
      <rect x="11" y="6" width="2" height="14" fill="#000000" />
      <path d="M8 6 L16 6 L12 11 Z" fill="#000000" />
    </svg>
  );
};

export default ThumbTack;
