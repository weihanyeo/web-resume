import { motion } from "framer-motion";

const Header = () => {
  const handleScrollTo = (id) => {
    // Find the section with the matching ID
    const targetElement = document.getElementById(id);

    if (targetElement) {
      // Get the element's position relative to the viewport
      const rect = targetElement.getBoundingClientRect();
      // Get the current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Calculate the absolute position
      const absoluteTop = scrollTop + rect.top;
      
      window.scrollTo({
        top: absoluteTop - 70, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.2,
        delay: 0.8,
      }}
    >
      <div id="Home" className="header-inner">
        <div className="logo">
          <a href="https://www.petfinder.com" target="_blank" rel="noreferrer">
            <motion.img
              src={process.env.PUBLIC_URL + `/favicon.png`}
              style={{
                width: '50px',
                height: '50px',
              }}
            />
          </a>
        </div>
        <ul className='nav'>
          {['Home', 'Work', 'Project'].map((item) => (
            <li className='app__flex' key={`${item}`}>
              <div />
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="contact">
          <a
            href="#Contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('Contact');
            }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
