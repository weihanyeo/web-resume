import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'


const experiences = [
  {
      title: "Cyber Application Security Intern",
      company_name: "Deloitte (Singapore)",
      imgUrl: `${process.env.PUBLIC_URL}/images/company2.png`,
      iconBg: "#383E56",
      date: "May 2023 - Jul 2023",
      points: [
          "Drafted and tailored engagement proposal letters, demonstrating effective communication and presentation of comprehensive project scopes to a client.",
          "Prepared over 100 User to Role Matrices using client inputs, ensuring precise mapping of user access and authorizations in complex SAP environments.",
          "Rationalized SAP Roles based on organizational structures, business processes, and unique business positions, optimizing user access and security within SAP systems for three major clients.",
          "Demonstrated expertise in implementing SAP Access Control rulesets, including Segregation of Duties (SOD) and Critical Access rules, to enhance risk management and compliance in SAP environments.",
          
      ],
  },
  {
      title: "IT Operations Engineer",
      company_name: "Kyndryl (Singapore)",
      imgUrl: `${process.env.PUBLIC_URL}/images/company2.png`,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
          "Specialized in providing technical support and maintenance. Deployed, cloned hardware change operations for healthcare technology solutions for thousands of devices.",
          "Delivered high-quality technical and operational support to healthcare providers, contributing to efficient operation of IT information systems for thousands of monthly visitors.",
          "Provided level 1 and 2 troubleshooting and problem resolution services to healthcare institutions, including the National Skin Centre and National Neuroscience Institute.",
      ],
  },
  {
      title: "IT Assistant",
      company_name: "CPF Board",
      imgUrl: `${process.env.PUBLIC_URL}/images/company2.png`,
      iconBg: "#383E56",
      date: "Jun 2019 - Aug 2019",
      points: [
          "Collaborated cross-functionally to curate and integrate hundreds of new variables into the organization's data dictionary, strategically paved the way for future policy implementations.",
          "Cultivated professional relationships with clients, adeptly discussed the nature of variables and guiding their optimal utilization within the data context.",
          "Demonstrated utmost discretion and responsibility in the secure handling and safeguarding of classified information, adhering to the highest standards of confidentiality.",
      ],
  },
  {
      title: "Customer Service Representative",
      company_name: "CPF Board",
      imgUrl: `${process.env.PUBLIC_URL}/images/company2.png`,
      iconBg: "#E6DEDD",
      date: "Mar 2019 - May 2019",
      points: [
          "Promoted and represented the interests of CPF Board, contributing to the successful operation, transactions, and overall business development of the organization.",
          "Specialized in delivering personalized assistance to CPF members, guiding them through various schemes, and helping them make informed decisions about their financial future.",
          " Provided prompt and accurate responses to customer queries, ensuring that each interaction reflects the highest standards of professionalism and courtesy.",
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
  contentStyle={{background: '#1d1836', color: '#000'}}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  date={experience.date}
  iconStyle={{ background: experience.iconBg }}
  imgUrl={
    <div className='company-name'>
      <img src={experience.imgUrl} alt={experience.company_name}
      className='logo' />
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
          key={'experience-point-$(index)'}
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