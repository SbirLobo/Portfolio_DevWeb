import { useState, useEffect } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import projectsList from "../constants/ProjectsList";
import ProjectPopup from "../components/projects/ProjectPopup";

const Projects = () => {
  const [orderedProjects] = useState(projectsList.reverse());
  const [filteredOrderedProjects, setFilteredOrderedProjects] = useState(
    projectsList.reverse()
  );
  const [hidden, setHidden] = useState(false);
  const [projectPopup, setProjectPopup] = useState({});
  const [soloFilter, setSoloFilter] = useState("");
  const [fullstackFilter, setFullstackFilter] = useState("");

  const popup = (id) => {
    const [project] = orderedProjects.filter((e) => e.id === Number(id));
    setProjectPopup(project);
    setHidden(!hidden);
  };

  const handleClickProject = (e) => {
    console.log(e.target.name);
    if (e.target.name === "all") {
      setFilteredOrderedProjects(orderedProjects);
      setSoloFilter("");
      setFullstackFilter("");
    }
    if (e.target.name === "solo" || e.target.name === "team") {
      if (soloFilter === e.target.name) {
        setSoloFilter("");
      } else {
        setSoloFilter(e.target.name);
      }
    }
    if (e.target.name === "fullstack" || e.target.name === "front") {
      if (fullstackFilter === e.target.name) {
        setFullstackFilter("");
      } else {
        setFullstackFilter(e.target.name);
      }
    }
  };

  useEffect(() => {
    let newFilteredOrderedProjects = orderedProjects;
    if (soloFilter === "solo") {
      newFilteredOrderedProjects = newFilteredOrderedProjects.filter(
        (e) => e.solo
      );
    } else if (soloFilter === "team") {
      newFilteredOrderedProjects = newFilteredOrderedProjects.filter(
        (e) => !e.solo
      );
    }
    if (fullstackFilter === "fullstack") {
      newFilteredOrderedProjects = newFilteredOrderedProjects.filter(
        (e) => e.fullstack
      );
    } else if (fullstackFilter === "front") {
      newFilteredOrderedProjects = newFilteredOrderedProjects.filter(
        (e) => !e.fullstack
      );
    }
    setFilteredOrderedProjects(newFilteredOrderedProjects);
  }, [fullstackFilter, orderedProjects, soloFilter]);

  return (
    <>
      <div className="lg:ml-[175px] my-40 md:my-20 mx-16 2xl:p-0 flex flex-col w-full">
        <div className="flex justify-center">
          <button
            name="all"
            type="button"
            className={`${
              soloFilter === "" && fullstackFilter === "" && "bg-[#646cff]"
            } contactButton w-2/3`}
            onClick={handleClickProject}
          >
            All
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-4">
          <div className="flex flex-row justify-center gap-2">
            <button
              name="solo"
              type="button"
              className={`${
                soloFilter === "solo" && "bg-[#646cff]"
              } contactButton`}
              onClick={handleClickProject}
            >
              Solo
            </button>
            <button
              name="team"
              type="button"
              className={`${
                soloFilter === "team" && "bg-[#646cff]"
              } contactButton`}
              onClick={handleClickProject}
            >
              Team
            </button>
          </div>
          <div className="flex flex-row justify-center gap-2">
            <button
              name="fullstack"
              type="button"
              className={`${
                fullstackFilter === "fullstack" && "bg-[#646cff]"
              } contactButton`}
              onClick={handleClickProject}
            >
              Fullstack
            </button>
            <button
              name="front"
              type="button"
              className={`${
                fullstackFilter === "front" && "bg-[#646cff]"
              } contactButton`}
              onClick={handleClickProject}
            >
              Front
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center">
          {filteredOrderedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} popup={popup} />
          ))}
        </div>
        <ProjectPopup
          hidden={hidden}
          setHidden={setHidden}
          projectPopup={projectPopup}
        />
      </div>
    </>
  );
};

export default Projects;
