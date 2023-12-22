import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: { transition: {
    delayChildren: 0.2,
    staggerChildren: 0.1,
  }}
}

const letterAnimate = {
  initial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

const words = [
  "Nature Enthusiast",
  "Web Designer",
  "Problem Solver",
  "Animal lover",
  "Film Buff",
  "Tech Geek"
];

const Banner = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 3000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.div id="Home" className="banner" variants={banner}>
      <BannerRowTop title="Yeo&nbsp;&nbsp;Wei&nbsp;&nbsp;Han" />
      {/* <BannerRowCenter title={words[currentWordIndex]} playMarquee={playMarquee} /> */}
      <BannerRowBottom title="Software&nbsp;Developer" />
      <motion.div className="about-message">
        <motion.div className="aboutHeader">About me</motion.div>.<br/><br/>
        I am a penultimate student at the National University of Singapore completing my undergraduate 
        degree in information systems. I am a passionate problem solver with a natural curiosity for knowledge.
        <br/>
        My zeal for innovation and eagerness to learn has led me to work on a variety of software development 
        projects, where I have developed my technical skills and earned significant experience working in a 
        team atmosphere. I am excited to use my technical talents and creativity to assist organizations in 
        developing cutting-edge solutions that foster their growth and success. 
        <br/><br/>
        Feel free to connect with me or contact me at yeoweihan@u.nus.edu
      </motion.div>
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span className="row-title"
  variants={disabled? null : banner}
  initial="initial"
  animate="animate">
    {[...title].map((letter) => (
      <motion.span className="row-letter" variants={letterAnimate}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div>
      <div className={"banner-row"}>
        <div className="row-col">
          <AnimatedLetters title={title} />
        </div>
        <motion.div className="row-col" 
        initial={{opacity:0, y:80}} 
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
      </div>

    </div>
  );
};


const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div className="scroll"
      initial={{scale: 0}} 
      animate={{scale: 1}} 
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 2,
        delay: 3,
      }}>
        <motion.span
          initial={{scale: 0}} 
          animate={{scale: 1}}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
            delay: 1.8,
          }}>scroll <br/>down</motion.span>
        </motion.div> 
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled/> 
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled/>
        <AnimatedLetters title={title} disabled/>
      </div>
    </div>
  );
};

export default Banner;
