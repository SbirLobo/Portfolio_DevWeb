import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsList from "../constants/ProjectsList";

const Projects = () => {
  const [orderedProjects] = useState(projectsList.reverse());
  console.log(orderedProjects);
  return (
    <>
      <div className="lg:ml-[175px] my-40 md:my-20 mx-16 2xl:p-0 flex flex-col md:flex-row md:flex-wrap md:justify-center">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
