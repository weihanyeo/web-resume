import React from "react";
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

const Banner = () => {

  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title="Yeo&nbsp;&nbsp;Wei&nbsp;&nbsp;Han" />
      {/* <BannerRowCenter title={words[currentWordIndex]} playMarquee={playMarquee} /> */}
      <BannerRowBottom title="Software&nbsp;Developer" />
      <motion.span className="row-message2"
      initial={{opacity:0, y:80}} 
      animate={{opacity: 1, y:0}} 
      transition={{
        ease: "easeInOut",
        duration: 1.2,
        delay: 1.2,
      }}>
        Open & looking for full-time roles or opportunities!
      </motion.span>
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

export default Banner;
