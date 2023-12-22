import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'


const experiences = [
  {
      title: "Cyber Application Security Intern",
      company_name: "Deloitte (Singapore)",
      imgUrl: `${process.env.PUBLIC_URL}/images/company4.png`,
      iconBg: "#383E56",
      date: "May 2023 - Jul 2023",
      points: [
          "Drafted and tailored engagement proposal letters, demonstrating effective communication and presentation of comprehensive project scopes to a client.",
          "Prepared over 100 User to Role Matrices using client inputs, ensuring precise mapping of user access and authorizations in complex SAP environments and link several organization matrix data into Tableau for visualization.",
          "Automated the extraction and integration of SAP data into Power BI, improving reporting efficiency and insights.",
          "Utilized Jira for issue tracking and project management, ensuring efficient coordination and streamlined workflows across teams.",
          
      ],
  },
  {
      title: "IT Operations Engineer",
      company_name: "Kyndryl (Singapore)",
      imgUrl: `${process.env.PUBLIC_URL}/images/company3.png`,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
          "Specialized in providing technical support and maintenance. Deployed, cloned hardware change operations for healthcare technology solutions for thousands of devices.",
          "Utilized CRON to automate routine tasks, enhancing operational efficiency in managing healthcare technology solutions. Which includes scheduling regular maintenance activities and system checks.",
          "Applied an in-depth understanding of TCP/IP networking fundamentals and expertise in internet service architectures (load balancing, CDNs), enhancing the efficiency and resilience of healthcare technology solutions.",
      ],
  },
  {
      title: "IT Assistant",
      company_name: "Central Provident Fund Board (Singapore)",
      imgUrl: `${process.env.PUBLIC_URL}/images/company2.png`,
      iconBg: "#383E56",
      date: "Jun 2019 - Aug 2019",
      points: [
          "Collaborated cross-functionally to curate and integrate hundreds of new variables into the organization's data dictionary, strategically paved way for future policy implementations.",
          "Cultivated professional relationships with 10+ clients, adeptly discussed the nature of variables and guiding optimal utilization within the data compliance context.",
          "Displayed utmost discretion and responsibility in the secure handling and safeguarding of classified information, adhering to the highest standards of confidentiality.",
      ],
  },
  {
      title: "Software Engineer",
      company_name: "Ngee Ann Polytechnic (Singapore)",
      imgUrl: `${process.env.PUBLIC_URL}/images/company1.png`,
      iconBg: "#E6DEDD",
      date: "Mar 2019 - May 2019",
      points: [
          "Team lead for the development of an autonomous concierge cum security robot in collaboration with Tan Tock Seng Hospital for my final year project.",
          "The robot, activated by voice command, navigates predefined points, enhancing security and directional guidance within the hospital",
          "Contributed to creating new messages in packages, utilizing CMakeList.txt. Project achievements include improved hospital security, streamlined visitor guidance for 1000+ weekly visitors, and potential applications in various settings.",
      ],
  },
];

const textVariant = (delay) => {
  return {
      hidden: {
          y: -50,
          opacity: 0,
      },
      show: {
          y: 0,
          opacity: 1,
          transition: {
              type: "spring",
              duration: 1.25,
              delay: delay,
          },
      },
  };
};

const WorkCard = ({ experience }) => (
  <VerticalTimelineElement 
  className='custom-timeline-element'
  contentStyle={{background: '#1d1836', borderRadius: '24px'}}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  date={experience.date}
  dateClassName='custom-date-class'
  iconStyle={{ background: experience.iconBg, width: '100px', height: '100px', marginLeft: '-50px' }}
  icon={
    <div className='company-name'  >
      <img src={experience.imgUrl} alt={experience.company_name}
      className='logo'
      />
    </div>
  }>
      <div>
        <h3 className='work-title'> 
          {experience.title}
        </h3>
        <p className='work-name' style={{margin : 8}}>
          {experience.company_name}
        </p>
      </div>

      <ul className='experience-points'>
        {experience.points.map((point,index) => (
          <li 
          key={`experience-point-${index}`}
          className='list'>
            {point}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>
)

const Work = () => {
  return (
    <>
      <motion.div className="work-head" variants={textVariant()}>
        <p className="sectionSubText">
          What I have done so far
        </p>
        <h2 className="sectionHeadText">Work experiences</h2>
      </motion.div>

      <div className='timeline'>
        <VerticalTimeline>
        {experiences.map((experience, index) =>
          <WorkCard key={index} experience={experience}/>
        )}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Work;