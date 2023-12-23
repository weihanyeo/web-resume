import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion"

const Footer = () => {
    
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: "smooth"
        });
      };

  return (
    <motion.div className="footer"
    initial={{ opacity: 0, y: -180 }}
    animate={{ opacity: 1, y: 0}}
    transition={{
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.2,
      delay: 0.8,
    }}>
      <div className="footer-inner">
        <div className="logo">
          <a href="https://www.petfinder.com" target="_blank" >
            <motion.img src={process.env.PUBLIC_URL + `/favicon.png`} 
            style={{
            width: '50px', // Set the desired width 
            height: '50px', // Set the desired height 
            }}/> 
          </a>
        </div>
        
        {showScrollButton && (
        <div className="buttons">
          <a href="https://www.figma.com/@yeoweihan" target="_blank" className="social-buttons">
            <i class="fa-brands fa-figma"></i>
          </a>
          <a href="https://www.linkedin.com/in/yeo-wei-han/" target="_blank" className="social-buttons">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:yeoweihan@u.nus.edu" className="social-buttons">
            <i class="fa-regular fa-envelope"></i>
          </a>
          <a href="https://github.com/YeoWeiHan123" target="_blank" className="social-buttons">
            <i class="fa-brands fa-github"></i>
          </a>
      
          <div className="scroll-to-top-button" onClick={handleScrollToTop}>
              <div className="scroll">
                
                <i class="fa-solid fa-arrow-up"></i>
                back to top
              </div>
          </div>
        </div>
      )}

        <ul className='nav'>
            {['Home', 'Work', 'Project']
            .map((item) => (
                <li className='app__flex' key={`${item}`}>
                    <div/>
                    
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        
      </div>
    </motion.div>
  );
};

export default Footer;
