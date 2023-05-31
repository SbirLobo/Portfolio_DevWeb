import ProjectCard from "../components/ProjectCard";
import projectsList from "../components/ProjectsList";

const Projects = () => {
  return (
    <div className="lg:ml-[175px] my-40 md:my-20 mx-16 2xl:p-0 flex flex-col md:flex-row md:flex-wrap md:justify-center">
      {projectsList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
