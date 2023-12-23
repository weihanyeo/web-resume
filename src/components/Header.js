import React from "react";
import { motion } from "framer-motion"
import { Link } from 'react-scroll';

const Header = () => {
  const handleScrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <motion.div className="header"
    initial={{ opacity: 0, y: -180 }}
    animate={{ opacity: 1, y: 0}}
    transition={{
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.2,
      delay: 0.8,
    }}>
      <div id="Home" className="header-inner">
        <div className="logo">
          <a href="https://www.petfinder.com" target="_blank" >
            <motion.img src={process.env.PUBLIC_URL + `/favicon.png`} 
            style={{
            width: '50px', // Set the desired width 
            height: '50px', // Set the desired height 
            }}/> 
          </a>
        </div>
        <ul className='nav'>
          {['Home', 'Work', 'Project'].map((item) => (
            <li className='app__flex' key={`${item}`}>
              <div />
              <Link
                activeClass="active"
                to={item} // Assuming your sections have ids matching their names
                spy={true}
                smooth={true}
                offset={-70} // Adjust this value to offset the scroll position if you have a fixed header
                duration={800} // Scroll duration in milliseconds
                // Custom easing function
                ease="cubic-bezier(0.645, 0.045, 0.355, 1)" // Example of a custom ease function
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="contact">
          <a onClick={handleScrollToBottom}>Get in touch</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
