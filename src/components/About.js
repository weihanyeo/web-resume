import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const about = {
  animate: { transition: {
    delayChildren: 0.2,
    staggerChildren: 0.1,
  }}
}

const About = () => {
    return (
      <motion.div className="about" variants={about}>
      <AboutRowTop title="about" />
    </motion.div>
    );
}

const AboutRowTop = ({ title }) => {
  return (
    <div className={"about-row"}>
      <motion.div className="row-col" 
      initial={{opacity:0, y:80}} 
      animate={{opacity: 1, y:0}}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 10.4,
      }}>
        <motion.span className="row-message">
          about message
        </motion.span>
      </motion.div>
    </div>
  );
};


export default About;