import React from 'react';
import Card from './Card';
import { projects } from '../assets/projects.json';

function Projects() {
    return (
        <div className='flex-col '>
            <h1 className='ml-28 py-10 justify-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span id='projects' className='block text-indigo-600 xl:inline'>
                    My Projects
                </span>
            </h1>
            <div className='flex-row flex-nowrap	'>
                {projects.map((project) => (
                    <Card
                        key={project.key}
                        img={project.img}
                        projectName={project.title}
                        projectDescription={project.description}
                        liveSite={project.site}
                        github={project.github}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
