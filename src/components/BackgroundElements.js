import React from 'react';

// Duct Tape SVG Component
export const DuctTape = ({ color = "#FFD6E0", rotation = 0, top, left, width = 120 }) => (
  <svg 
    width={width} 
    height={width/3} 
    viewBox="0 0 120 40" 
    style={{ 
      position: 'absolute', 
      top, 
      left, 
      transform: `rotate(${rotation}deg)`,
      opacity: 0.7,
      zIndex: 0
    }}
  >
    <path 
      d="M5,0 L115,0 C117.761,0 120,2.239 120,5 L120,35 C120,37.761 117.761,40 115,40 L5,40 C2.239,40 0,37.761 0,35 L0,5 C0,2.239 2.239,0 5,0 Z" 
      fill={color} 
      stroke="#000" 
      strokeWidth="1.5"
    />
    <line x1="0" y1="20" x2="120" y2="20" stroke="#000" strokeWidth="0.5" strokeDasharray="3,3" />
    <line x1="30" y1="0" x2="30" y2="40" stroke="#000" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="60" y1="0" x2="60" y2="40" stroke="#000" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="90" y1="0" x2="90" y2="40" stroke="#000" strokeWidth="0.5" strokeOpacity="0.3" />
  </svg>
);

// Washi Tape SVG Component
export const WashiTape = ({ color = "#D0F0C0", pattern = "dots", rotation = 0, top, left, width = 150 }) => {
  let patternElement;
  
  switch(pattern) {
    case "stripes":
      patternElement = (
        <g>
          <line x1="0" y1="10" x2={width} y2="10" stroke="#000" strokeWidth="0.5" strokeOpacity="0.2" />
          <line x1="0" y1="20" x2={width} y2="20" stroke="#000" strokeWidth="0.5" strokeOpacity="0.2" />
        </g>
      );
      break;
    case "zigzag":
      patternElement = (
        <path 
          d={`M0,15 L10,5 L20,15 L30,5 L40,15 L50,5 L60,15 L70,5 L80,15 L90,5 L100,15 L110,5 L120,15 L130,5 L140,15 L150,5`} 
          fill="none" 
          stroke="#000" 
          strokeWidth="0.5" 
          strokeOpacity="0.2" 
        />
      );
      break;
    case "dots":
    default:
      patternElement = (
        <g>
          {Array.from({ length: 30 }).map((_, i) => (
            <circle 
              key={i} 
              cx={5 + (i % 10) * 15} 
              cy={7.5 + Math.floor(i / 10) * 7.5} 
              r="1.5" 
              fill="#000" 
              fillOpacity="0.2" 
            />
          ))}
        </g>
      );
  }
  
  return (
    <svg 
      width={width} 
      height="30" 
      viewBox={`0 0 ${width} 30`} 
      style={{ 
        position: 'absolute', 
        top, 
        left, 
        transform: `rotate(${rotation}deg)`,
        opacity: 0.8,
        zIndex: 0
      }}
    >
      <rect 
        x="0" 
        y="0" 
        width={width} 
        height="30" 
        fill={color} 
        stroke="#000" 
        strokeWidth="0.5" 
      />
      {patternElement}
    </svg>
  );
};

// Paper Clip SVG Component
export const PaperClip = ({ color = "#B5EAD7", rotation = 0, top, left, flipped = false }) => (
  <svg 
    width="30" 
    height="60" 
    viewBox="0 0 30 60" 
    style={{ 
      position: 'absolute', 
      top, 
      left, 
      transform: `rotate(${rotation}deg) ${flipped ? 'scaleX(-1)' : ''}`,
      opacity: 0.9,
      zIndex: 0
    }}
  >
    <path 
      d="M15,5 C10,5 5,10 5,15 L5,45 C5,50 10,55 15,55 C20,55 25,50 25,45 L25,15 C25,12 22,9 19,9 C16,9 13,12 13,15 L13,40 C13,42 15,44 17,44 C19,44 21,42 21,40 L21,20" 
      fill="none" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
  </svg>
);

// Hand-Drawn Icon SVG Components
export const HandDrawnStar = ({ color = "#FFAAA7", rotation = 0, top, left, size = 40 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 40 40" 
    style={{ 
      position: 'absolute', 
      top, 
      left, 
      transform: `rotate(${rotation}deg)`,
      opacity: 0.7,
      zIndex: 0
    }}
  >
    <path 
      d="M20,2 L24,14 L37,14 L26,22 L30,34 L20,27 L10,34 L14,22 L3,14 L16,14 Z" 
      fill={color} 
      stroke="#000" 
      strokeWidth="1" 
      strokeLinejoin="round" 
      strokeLinecap="round" 
      strokeDasharray="1,0.5" 
    />
  </svg>
);

export const HandDrawnCircle = ({ color = "#C7CEEA", rotation = 0, top, left, size = 35 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 35 35" 
    style={{ 
      position: 'absolute', 
      top, 
      left, 
      transform: `rotate(${rotation}deg)`,
      opacity: 0.7,
      zIndex: 0
    }}
  >
    <circle 
      cx="17.5" 
      cy="17.5" 
      r="15" 
      fill={color} 
      stroke="#000" 
      strokeWidth="1" 
      strokeDasharray="2,1" 
    />
    <circle cx="12" cy="12" r="2" fill="#000" fillOpacity="0.2" />
    <circle cx="23" cy="12" r="2" fill="#000" fillOpacity="0.2" />
    <path 
      d="M12,22 Q17.5,26 23,22" 
      fill="none" 
      stroke="#000" 
      strokeWidth="1" 
      strokeOpacity="0.2" 
      strokeLinecap="round" 
    />
  </svg>
);

export const HandDrawnSquiggle = ({ color = "#FFC8DD", rotation = 0, top, left, width = 60 }) => (
  <svg 
    width={width} 
    height="20" 
    viewBox={`0 0 ${width} 20`} 
    style={{ 
      position: 'absolute', 
      top, 
      left, 
      transform: `rotate(${rotation}deg)`,
      opacity: 0.7,
      zIndex: 0
    }}
  >
    <path 
      d={`M5,10 Q15,5 25,10 T45,10 T${width-5},10`} 
      fill="none" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
  </svg>
);

// Background Decorations Container Component
const BackgroundDecorations = ({ section }) => {
  // Different decorations for different sections
  switch(section) {
    case 'banner':
      return (
        <>
          <DuctTape color="#FFD6E0" rotation={-15} top="5%" left="5%" width={100} />
          <WashiTape color="#D0F0C0" pattern="dots" rotation={10} top="15%" left="80%" width={120} />
          <PaperClip color="#B5EAD7" rotation={25} top="25%" left="20%" />
          <HandDrawnStar color="#FFAAA7" rotation={10} top="10%" left="60%" size={30} />
          <HandDrawnCircle color="#C7CEEA" rotation={-5} top="30%" left="40%" size={25} />
          <HandDrawnSquiggle color="#FFC8DD" rotation={5} top="20%" left="30%" width={50} />
        </>
      );
    case 'about':
      return (
        <>
          <DuctTape color="#C7CEEA" rotation={15} top="10%" left="75%" width={90} />
          <WashiTape color="#FFAAA7" pattern="stripes" rotation={-8} top="30%" left="5%" width={100} />
          <PaperClip color="#FFC8DD" rotation={-20} top="15%" left="85%" flipped={true} />
          <HandDrawnStar color="#D0F0C0" rotation={-15} top="25%" left="30%" size={25} />
          <HandDrawnCircle color="#FFD6E0" rotation={8} top="5%" left="50%" size={30} />
          <HandDrawnSquiggle color="#B5EAD7" rotation={-5} top="35%" left="60%" width={40} />
        </>
      );
    case 'work':
      return (
        <>
          <DuctTape color="#B5EAD7" rotation={-10} top="5%" left="60%" width={110} />
          <WashiTape color="#FFD6E0" pattern="zigzag" rotation={5} top="25%" left="10%" width={130} />
          <PaperClip color="#D0F0C0" rotation={15} top="15%" left="40%" />
          <HandDrawnStar color="#C7CEEA" rotation={20} top="30%" left="80%" size={35} />
          <HandDrawnCircle color="#FFAAA7" rotation={-10} top="10%" left="20%" size={28} />
          <HandDrawnSquiggle color="#FFC8DD" rotation={10} top="20%" left="70%" width={55} />
        </>
      );
    case 'project':
      return (
        <>
          <DuctTape color="#FFC8DD" rotation={10} top="5%" left="30%" width={95} />
          <WashiTape color="#C7CEEA" pattern="dots" rotation={-12} top="20%" left="70%" width={110} />
          <PaperClip color="#FFAAA7" rotation={-25} top="30%" left="10%" flipped={true} />
          <HandDrawnStar color="#B5EAD7" rotation={-5} top="15%" left="50%" size={32} />
          <HandDrawnCircle color="#D0F0C0" rotation={15} top="25%" left="90%" size={26} />
          <HandDrawnSquiggle color="#FFD6E0" rotation={-8} top="10%" left="40%" width={45} />
        </>
      );
    case 'contact':
      return (
        <>
          <DuctTape color="#D0F0C0" rotation={-5} top="10%" left="10%" width={85} />
          <WashiTape color="#B5EAD7" pattern="stripes" rotation={8} top="5%" left="50%" width={140} />
          <PaperClip color="#C7CEEA" rotation={20} top="20%" left="80%" />
          <HandDrawnStar color="#FFD6E0" rotation={10} top="30%" left="20%" size={28} />
          <HandDrawnCircle color="#FFC8DD" rotation={-15} top="15%" left="60%" size={32} />
          <HandDrawnSquiggle color="#FFAAA7" rotation={5} top="25%" left="30%" width={50} />
        </>
      );
    default:
      return null;
  }
};

export default BackgroundDecorations;
