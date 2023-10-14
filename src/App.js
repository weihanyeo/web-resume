import { useEffect, useState } from "react";
import "./sass/main.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import Project from "./components/Project";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  
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
  }, [loading]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth"
    });
  };

  return (
    <motion.div className="app-container">
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'> 
          {/* // key is for a component to load out */}
          <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header/>
            <Banner/>
            <LayoutGroup >
            {!loading && (
              <motion.div className="transition-image final">
                <motion.img src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                layoutId="main-image-1"
                transition={{ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6}}
                style={{ 
                  width: '850px', // Set the desired width
                  }}/> 
              </motion.div>
            )}
            </LayoutGroup>
            <Project />
            <Work/>
            <Contact/>
          </>
        )}
      </AnimatePresence>
      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={handleScrollToTop}>
          Scroll to Top
        </button>
      )}
    </motion.div>
  );
}

export default App;
