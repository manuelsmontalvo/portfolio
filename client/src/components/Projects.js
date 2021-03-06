import React from "react";
import Card from "./Card";
import { projects } from "../assets/projects.json";

function Projects() {
  return (
    <div className="flex flex-col pt-20 pb-16  ">
      <h1  style={{ "textShadow": "2px 4px 3px rgba(0,0,0,0.3)" }} className="ml-28 mb-16 py-10 justify-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span id="projects"  className="block text-indigo-400 xl:inline">
          My Projects
        </span>
      </h1>
      <div className="flex flex-row flex-wrap gap-y-16	">
        {projects.map((project) => (
          <Card key={project.key} img={project.img} projectName={project.title} projectDescription={project.description} liveSite={project.site} github={project.repo} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
