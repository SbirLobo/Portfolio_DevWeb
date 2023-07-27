import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsList from "../constants/ProjectsList";
import ProjectPopup from "../components/home/ProjectPopup";

const Projects = () => {
  const [orderedProjects] = useState(projectsList.reverse());
  const [hidden, setHidden] = useState(false);
  const [projectPopup, setProjectPopup] = useState({});

  const popup = (id) => {
    const [project] = orderedProjects.filter((e) => e.id === Number(id));
    setProjectPopup(project);
    setHidden(!hidden);
  };

  return (
    <>
      <div className="lg:ml-[175px] my-40 md:my-20 mx-16 2xl:p-0 flex flex-col md:flex-row md:flex-wrap md:justify-center">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} popup={popup} />
        ))}
      </div>
      <ProjectPopup
        hidden={hidden}
        setHidden={setHidden}
        projectPopup={projectPopup}
      />
    </>
  );
};

export default Projects;
