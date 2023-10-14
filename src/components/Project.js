import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Tshirt Visualiser', description: 'Front-end t-shirt customisable website', imgUrl: `${process.env.PUBLIC_URL}/images/project_4.png` },
    { title: 'Travel Collab Mobile app', description: 'Design project for a travel app.', imgUrl: `${process.env.PUBLIC_URL}/images/project_3.png` },
    { title: 'HangManHTML', description: 'Game developed during Tik-tok coding camp.', imgUrl: `${process.env.PUBLIC_URL}/images/project_2.png` },
    { title: 'Patrol Bot', description: 'Autonomous robot + computer vision and voice command to help visitors at a hospital.', imgUrl: `${process.env.PUBLIC_URL}/images/project_1.png` }
];

const Project = () => {
    return (
        <>
            <motion.div >
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
                        key= {project.title + index}
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
