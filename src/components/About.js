import React from 'react'
import { motion } from "framer-motion";

// Highlight component for key phrases
const Highlight = ({ children, color = "#FF5C5C", rotation = 0 }) => (
  <span className="highlight-container">
    <span 
      className="highlight" 
      style={{ 
        backgroundColor: color,
        transform: `rotate(${rotation}deg)`
      }}
    ></span>
    <span className="highlight-text">{children}</span>
  </span>
);

// Arrow component for pointing to important elements
const Arrow = ({ direction = "right", color = "#FF5C5C" }) => {
  const arrowStyles = {
    right: { transform: 'rotate(0deg)' },
    down: { transform: 'rotate(90deg)' },
    left: { transform: 'rotate(180deg)' },
    up: { transform: 'rotate(-90deg)' }
  };
  
  return (
    <div 
      className="neo-arrow" 
      style={{ 
        ...arrowStyles[direction],
        color: color
      }}
    >
      &#10230;
    </div>
  );
};

const About = () => {
  return (
    <motion.div id="About" className="about-head">
      <div className="about-content-wrapper">
        <motion.div className="sectionHeadText">
          About me
        </motion.div>
        
        <div className="neo-divider"></div>
        
        <div className="about-text-container">
          <p className="sectionSubText">
            I am a graduate student from the <Highlight color="#FFD166">National University of Singapore</Highlight>, majoring in <Highlight color="#06D6A0" rotation={1}>information systems</Highlight>. 
          </p>
          
          <div className="neo-callout">
            <Arrow direction="right" color="#118AB2" />
            <p>
              With a <Highlight color="#EF476F" rotation={-1}>proactive</Highlight> and <Highlight color="#118AB2">collaborative</Highlight> approach, I aim to foster a culture of <Highlight color="#FFD166" rotation={1}>creativity</Highlight>, <Highlight color="#06D6A0">problem-solving</Highlight>, and <Highlight color="#073B4C">teamwork</Highlight> within the organization.
            </p>
          </div>
          
          <div className="neo-box">
            <p>
              My colleagues can expect to work with someone who is <Highlight color="#EF476F" rotation={1}>highly creative</Highlight>, <Highlight color="#FFD166" rotation={-1}>intelligent</Highlight>, and <Highlight color="#06D6A0">dedicated</Highlight> to achieving shared goals. I thrive in team environments where <Highlight color="#118AB2" rotation={1}>diverse perspectives</Highlight> are valued.
            </p>
          </div>
          
          <div className="contact-note">
            <p>
              Feel free to connect with me or contact me at <Highlight color="#073B4C">yeowh@hotmail.sg</Highlight>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About