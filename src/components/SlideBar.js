import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 
import { menuSlide, scale, slide } from './Animate';

const SlideBar = () => {
  const [windowInnerHeight, setWindowInnerHeight] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerHeight;
    }
    return 0; // Set a default value if window is undefined
  });

  const handleScrollTo = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const absoluteTop = scrollTop + rect.top;
      window.scrollTo({
        top: absoluteTop - 50,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const updateWindowInnerHeight = () => {
      setWindowInnerHeight(window.innerHeight);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('resize', updateWindowInnerHeight);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowInnerHeight);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleMouseEnter = (item) => {
    setSelectedIndicator(item);
  };

  const handleMouseLeave = () => {
    setSelectedIndicator(null);
  };

  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const initialPath = `M100 0 L200 0 L200 ${windowInnerHeight} L100 ${windowInnerHeight} Q-100 ${windowInnerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${windowInnerHeight} L100 ${windowInnerHeight} Q100 ${windowInnerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const menuItems = ['Home', 'About', 'Work', 'Project', 'Contact'];

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="menu">
      <div className="body">
        <div onMouseLeave={handleMouseLeave} className="nav">
          <div className="header">
            <p>Menu</p>
          </div>

          {menuItems.map((item) => (
            <motion.div 
            key={item} 
            className="link" 
            onMouseEnter={() => handleMouseEnter(item)} 
            custom={item} 
            variants={slide} 
            initial="initial" 
            animate="enter" 
            exit="exit">
              
              <motion.div
                variants={scale}
                animate={selectedIndicator === item ? 'open' : 'closed'}
                className="indicator" // Replace with your desired class name or use inline styles
              ></motion.div>

              <a href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(item);
              }}>
                {item}
              </a>
              
            </motion.div>
          ))}
        </div>
      </div>
      <svg className="svgCurve">
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
      </svg>
    </motion.div>
  );
};

export default SlideBar;