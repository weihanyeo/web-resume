import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: { transition: {
    delayChildren: 0.6,
    staggerChildren: 0.2,
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

const words = ['Animal-lover', 'Outgoing', 'What is going on'];

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);



  return (
    <motion.div className="banner"
      variants={banner}>
      <BannerRowTop title="Yeo&nbsp;&nbsp;Wei&nbsp;&nbsp;Han" />
      <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
      <BannerRowBottom title="Software&nbsp;&nbsp;Engineer" />
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
        delay: 5,
      }}>
        <motion.span
          initial={{scale: 0}} 
          animate={{scale: 1}}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
            delay: 1.8,
          }}>scroll</motion.span>
        <motion.span
          initial={{scale: 0}} 
          animate={{scale: 1}}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
            delay: 1.8,
          }}>down</motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">{/* 
        <AnimatedLetters title={title} disabled/> */}
        <AnimatedLetters title={title} />{/* 
        <AnimatedLetters title={title} disabled/>
        <AnimatedLetters title={title} disabled/> */}
      </div>
    </div>
  );
};

export default Banner;
