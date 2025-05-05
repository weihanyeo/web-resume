import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    title: "Software Development Engineer in Test",
    company_name: "Univers (Singapore)",
    imgUrl: `${process.env.PUBLIC_URL}/images/company6.png`,
    iconBg: "#eeeeee", 
    date: "Jan 2025 - Present",
    points: [
      "Built and maintained automation test suites using Playwright and Chai, increasing test coverage by 30% across web and API layers",
      "Seamlessly integrated these automated tests into Jenkins/Maven-based CI/CD pipelines to facilitate rapid feedback and continuous delivery",
      "Collaborated on Next.js and JavaScript application development, contributing technical insights in a dynamic, cross-functional team environment",
    ],
    skills: ["Playwright", "Chai", "Jenkins", "Maven", "CI/CD", "Next.js", "JavaScript"]
  },
  {
    title: "Software Automation Engineer",
    company_name: "Razer Inc (Singapore)",
    imgUrl: `${process.env.PUBLIC_URL}/images/company5.png`,
    iconBg: "#000000", 
    date: "May 2024 - Jan 2025",
    points: [
      "Partnered with local manual testers and global developers to proactively identify, troubleshoot, and resolve complex software issues",
      "Designed and executed automation test cases using Robot Framework, Selenium, Python, and Jenkins, resulting in improved efficiency and reliability",
      "Pioneered the use of virtual HID solutions to replace physical device dependencies, significantly streamlining testing processes",
      "Developed custom setup scripts with NSIS and PowerShell to ensure secure DLL installations and registry configurations.",
    ],
    skills: ["Robot Framework", "Selenium", "Python", "Jenkins", "NSIS", "PowerShell", "DLL", "Registry"]
  },
  {
    title: "Cyber Application Security",
    company_name: "Deloitte (Singapore)",
    imgUrl: `${process.env.PUBLIC_URL}/images/company4.png`,
    iconBg: "#86BC25", 
    date: "May 2023 - Jul 2023",
    points: [
      "Drafted technical engagement proposal letters, effectively communicating, and presenting technical challenges and solutions to clients",
      "Automated the extraction and integration of SAP data into Power BI. Achieved a 25% operational efficiency gain, measured by a 40% reduction in data processing time, resulting in enhanced reporting capabilities and deeper insights.",
      "Utilized Jira for issue tracking and project management, ensuring efficient coordination and streamlined workflows across teams.",
    ],
    skills: ["SAP", "Power BI", "Jira", "Technical Writing", "Client Communication"]
  },
  {
    title: "IT Operations Engineer",
    company_name: "Kyndryl (Singapore)",
    imgUrl: `${process.env.PUBLIC_URL}/images/company3.png`,
    iconBg: "#0F62FE", 
    date: "May 2022 - Aug 2022",
    points: [
      "Specialized in providing technical support and maintenance. Deployed, cloned hardware change operations for healthcare technology solutions for thousands of devices for supporting end users.",
      "Utilized task scheduler and batch scripting to automate routine tasks, enhancing operational. Achieved a 20% process optimization as measured by reducing processing time by 45 mins daily.",
      "Additional learning: Learn about TCP/IP networking fundamentals in internet service architectures (load balancing, CDNs).",
    ],
    skills: ["Technical Support", "Batch Scripting", "Task Automation", "TCP/IP", "Load Balancing"]
  },
  {
    title: "IT Assistant",
    company_name: "Central Provident Fund Board (Singapore)",
    imgUrl: `${process.env.PUBLIC_URL}/images/company2.png`,
    iconBg: "#ffd966", 
    date: "Jun 2019 - Aug 2019",
    points: [
      "Collaborated cross-functionally to curate and integrate hundreds of new variables into the organization's data dictionary, strategically paved way for future policy implementations.",
      "Cultivated professional relationships with 10+ clients, adeptly discussed the nature of variables and guiding optimal utilization within the data compliance context.",
      "Displayed utmost discretion and responsibility in the secure handling and safeguarding of classified information, adhering to the highest standards of confidentiality.",
    ],
    skills: ["Data Management", "Client Relations", "Information Security", "Data Compliance"]
  },
  {
    title: "Software Engineer",
    company_name: "Ngee Ann Polytechnic (Singapore)",
    imgUrl: `${process.env.PUBLIC_URL}/images/company1.png`,
    iconBg: "#3d85c6", 
    date: "Mar 2019 - May 2019",
    points: [
      "Team lead for the development of an autonomous concierge cum security robot in collaboration with Tan Tock Seng Hospital for my final year project.",
      "The robot, activated by voice command, navigates predefined points, enhancing security and directional guidance within the hospital",
      "Contributed to creating new messages in packages, utilizing CMakeList.txt. Project achievements include improved hospital security, streamlined visitor guidance for 1000+ weekly visitors, and potential applications in various settings.",
    ],
    skills: ["Robotics", "Voice Recognition", "Autonomous Navigation", "CMake", "Team Leadership"]
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { 
    height: "auto", 
    opacity: 1,
    transition: {
      height: {
        duration: 0.3
      },
      opacity: {
        duration: 0.25,
        delay: 0.05
      }
    }
  }
};

const WorkCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="work-card"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="work-card-header" onClick={toggleExpand}>
        <div className="work-card-icon" style={{ backgroundColor: experience.iconBg }}>
          <img src={experience.imgUrl} alt={experience.company_name} className="work-card-logo" />
        </div>
        
        <div className="work-card-title">
          <h3>{experience.title}</h3>
          <h4>{experience.company_name}</h4>
          <span className="work-date">{experience.date}</span>
        </div>
        
        <motion.div 
          className="work-card-toggle"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="work-card-content"
            variants={expandVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <div className="work-card-details">
              <div className="work-responsibilities">
                <h5>Responsibilities & Achievements</h5>
                <ul>
                  {experience.points.map((point, pointIndex) => (
                    <motion.li 
                      key={`point-${index}-${pointIndex}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * pointIndex }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="work-skills">
                <h5>Skills</h5>
                <div className="skill-tags">
                  {experience.skills.map((skill, skillIndex) => (
                    <motion.span 
                      className="skill-tag"
                      key={`skill-${index}-${skillIndex}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * skillIndex }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="Work" className="work-section">
      <motion.div 
        className="work-head"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="sectionSubText">
          What I have done so far
        </p>
        <h2 className="sectionHeadText">Work Experience</h2>
      </motion.div>

      <motion.div 
        className="work-timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((experience, index) => (
          <WorkCard 
            key={`experience-${index}`} 
            experience={experience} 
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Work;