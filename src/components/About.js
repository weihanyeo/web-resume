import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
      <motion.div className="row-col" 
      initial={{opacity:0, y:100}} 
      animate={{opacity: 1, y:0}}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.4,
      }}>
        <motion.span className="row-message">
        I am a passionate problem solver with a natural curiosity for knowledge.
        </motion.span>
      </motion.div>
    );
}

export default About;