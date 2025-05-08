import { useEffect, useState } from "react";
import "./sass/main.scss";

import '@fortawesome/fontawesome-free/css/all.min.css';
// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import Project from "./components/Project";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import BackgroundDecorations from "./components/BackgroundElements";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SlideBar from './components/SlideBar';

import { useLocation } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === '/');
  }, [location.pathname]);

  const handleBurgerClick = () => {
    console.log("Current state:", isActive);
    setIsActive((prevIsActive) => !prevIsActive);
  };

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <motion.div className="app-container">
      <CustomCursor />
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'> 
          <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          
            <LayoutGroup >
            <Header/>
            
            <div className="header-slider">
              <button  onClick={handleBurgerClick} className="button">
                <div className={`burger ${isActive ? "burgerActive" : "" }`}></div>
              </button >
            </div>
            <AnimatePresence>
              {isActive && <SlideBar />}
            </AnimatePresence>
            
            <div className="section-container banner-section">
              <BackgroundDecorations section="banner" />
              <Banner/>
            </div>
            
            <div className="section-container about-section">
              <BackgroundDecorations section="about" />
              <div className="about-container">
                {!loading && (
                  <motion.div className="transition-image final">
                    <motion.img src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                    layoutId="main-image-1"
                    transition={{ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6}}
                    style={{ 
                      width: '100%', // Make it responsive
                      maxWidth: '850px', // Maximum width
                      }}/> 
                  </motion.div>
                )}
                <About />
              </div>
            </div>
            <div className="section-container work-section-wrapper">
              <BackgroundDecorations/>
              <Work/>
            </div>
            
            <div className="section-container project-section-wrapper">
              <BackgroundDecorations section="project" />
              <Project />
            </div>
            
            <div className="section-container contact-section-wrapper">
              <BackgroundDecorations section="contact" />
              <Contact/>
            </div>
            
            <Footer/>
            </LayoutGroup>
          
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
