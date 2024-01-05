import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div id="About" className="about-head">
        <motion.div className="sectionHeadText">About me</motion.div>.<br/><br/>
        <p className="sectionSubText">
        I am a penultimate student at the National University of Singapore completing my undergraduate 
        degree in information systems. I am a passionate problem solver with a natural curiosity for knowledge.
        <br/>
        My zeal for innovation and eagerness to learn has led me to work on a variety of software development 
        projects, where I have developed my technical skills and earned significant experience working in a 
        team atmosphere. I am excited to use my technical talents and creativity to assist organizations in 
        developing cutting-edge solutions that foster their growth and success. 
        <br/><br/>
        Feel free to connect with me or contact me at yeoweihan@u.nus.edu
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        
      </motion.div>
  )
}

export default About