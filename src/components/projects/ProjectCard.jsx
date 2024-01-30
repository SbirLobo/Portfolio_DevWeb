import PropTypes from "prop-types";

const ProjectCard = ({ project, popup }) => {
  return (
    <>
      <div className="fontCard text-xs max-h-60 flexV text-secondary">
        <img
          onClick={() => popup(project.id)}
          className="projectImg border border-primary hover:cursor-pointer hover:border-tertiary"
          src={project.image}
          alt={`screenshot du site du projet ${project.name}`}
        />
        <p className="projectName text-center pt-1">{project.name}</p>
        <div className="cardBottom pt-1 flex flex-row justify-between w-full">
          {project.link !== "" ? (
            <a
              className="cardButton text-sm text-center h-full align-middle"
              href={project.link}
              rel="noreferrer"
              target="_blank"
            >
              site
            </a>
          ) : (
            <p className="cardButton italic">indisp.</p>
          )}
          <a
            className="cardButton text-sm text-center h-full align-middle"
            href={project.code}
            rel="noreferrer"
            target="_blank"
          >
            code
          </a>
        </div>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    duration: PropTypes.string,
    code: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  popup: PropTypes.shape.isRequired,
};

export default ProjectCard;
