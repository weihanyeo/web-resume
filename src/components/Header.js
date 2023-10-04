import React from "react";
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.div className="header"
    initial={{ opacity: 0, y: -180 }}
    animate={{ opacity: 1, y: 0}}
    transition={{
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.2,
      delay: 0.8,
    }}>
      <div className="header-inner">
        <div className="logo">
          <a href="https://www.petfinder.com" target="_blank" >
            <motion.img src={process.env.PUBLIC_URL + `/favicon.png`} 
            style={{
            width: '50px', // Set the desired width
            height: '50px', // Set the desired height
            }}/> 
          </a>
        </div>
        <nav className="nav">
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/skill">Skills</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Let's connect </a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
