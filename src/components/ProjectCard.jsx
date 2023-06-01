import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="fontCard text-xs max-h-60 flexV text-secondary">
        <img
          className="projectImg"
          src={project.image}
          alt={`screenshot du site du projet ${project.name}`}
        />
        <p className="projectName text-center pt-1">{project.name}</p>
        <div className="cardBottom pt-1 flex flex-row justify-between w-full">
          <a
            className="cardButton text-sm text-center h-full align-middle"
            href={project.link}
            rel="noreferrer"
            target="_blank"
          >
            site
          </a>
          <p className="text-center pt-1">
            {`Du ${project.startDate} au ${project.endDate}`}
            <br />
            Durée : {project.duration}
          </p>
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
    image: PropTypes.string,
    name: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    duration: PropTypes.string,
    code: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
