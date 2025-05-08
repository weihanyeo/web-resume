import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 
import { menuSlide, scale, slide } from './Animate';
import { Link } from 'react-scroll';

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
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust the offset as needed
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

              <Link
                              activeClass="active"
                              to={item} // Assuming your sections have ids matching their names
                              spy={true}
                              smooth={true}
                              offset={-70} // Adjust this value to offset the scroll position if you have a fixed header
                              duration={500} // Scroll duration in milliseconds
                              ease="cubic-bezier(0.645, 0.045, 0.355, 1)" // Example of a custom ease function
                            >
                {item}
              </Link>
              
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