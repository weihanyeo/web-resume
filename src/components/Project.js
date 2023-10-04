import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Web Development', description: 'I am a good web developer.', imgUrl: `${process.env.PUBLIC_URL}/images/image-5.jpg` },
    { title: 'Web Design', description: 'I am a good web developer.', imgUrl: `${process.env.PUBLIC_URL}/images/image-5.jpg` },
    { title: 'UI/UX', description: 'I am a good web developer.', imgUrl: `${process.env.PUBLIC_URL}/images/image-5.jpg` },
    { title: 'Web Animation', description: 'I am a good web developer.', imgUrl: `${process.env.PUBLIC_URL}/images/image-5.jpg` }
];

const Project = () => {
    return (
        <>
            <h2 className='head-text'>
                These are some 
                <span> Projects </span>
                <br />
                I have done
            </h2>

            <div className='app__profiles'>
                {projects.map((project, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
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
