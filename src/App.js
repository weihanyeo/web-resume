import { useEffect, useState } from "react";
import "./sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import About from "./components/About";
import Project from "./components/Project";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    
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
            <About/>
            <Project />
          </>
        )}
      </AnimatePresence>
  );
}

export default App;
