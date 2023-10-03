import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
      <motion.div className="about"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0}}
      transition={{
        ease: 'easeInOut',
        duration: 2,
        delay: 0.8,
        }}>
        <div className="about-inner">
          <div className="about-text">
            <h1>About Me</h1>
            <p>
            I am a penultimate student at the National University of Singapore completing my 
            undergraduate degree in information systems. I am a passionate problem solver with 
            a natural curiosity for knowledge.

            My zeal for innovation and eagerness to learn has led me to work on a variety of 
            software development projects, where I have developed my technical skills and earned 
            significant experience working in a team atmosphere. I am excited to use my technical 
            talents and creativity to assist organizations in developing cutting-edge solutions 
            that foster their growth and success. 
            </p>
          </div>
        </div>
      </motion.div>
    );
}
export default About;