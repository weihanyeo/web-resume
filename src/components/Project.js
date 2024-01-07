import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { 
        title: 'Tshirt Visualiser',
        description: 'Front-end t-shirt customisable website',
        imgUrl: `${process.env.PUBLIC_URL}/images/project_4.png`,
        imgNewTab: 'https://yeoweihan123.github.io/T-shirt/'
    },
    { 
        title: 'Travel Collab Mobile app',
        description: 'Design project for a travel app.',
        imgUrl: `${process.env.PUBLIC_URL}/images/project_3.png`,
        imgNewTab: 'https://www.figma.com/community/file/1251925183530294422'
    },
    { 
        title: 'HangManHTML',
        description: 'Game developed during Tik-tok coding camp.',
        imgUrl: `${process.env.PUBLIC_URL}/images/project_2.png`,
        imgNewTab: 'https://yeoweihan123.github.io/HangmanHtml/'
    },
    { 
        title: 'Patrol Bot',
        description: 'Autonomous robot + computer vision and voice command to help visitors at a hospital.',
        imgUrl: `${process.env.PUBLIC_URL}/images/project_1.png`,
        imgNewTab: 'https://drive.google.com/file/d/1jovhouwRlJoaktLTc4xo8qZLNDV-alxw/view'
    }
];

const Project = () => {
    const openProjectInNewTab = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <motion.div id="Project" className='project-head'>
                <p className="sectionSubText">
                    What I have built
                </p>
                <h2 className="sectionHeadText">Projects</h2>
            </motion.div>

            <div className='app-profiles'>
                {projects.map((project, index) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8, type: 'tween' }}
                        className='app-profile-item'
                        key={project.title + index}
                        onClick={() => openProjectInNewTab(project.imgNewTab)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={project.imgUrl} alt={project.title}/>
                        <h2 className='bold-text' style={{ marginTop: 20 }}>
                            {project.title}
                        </h2>
                        <p className='p-text' style={{ marginTop: 10 }}>
                            {project.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default Project;
