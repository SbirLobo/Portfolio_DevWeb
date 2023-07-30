import PropTypes from "prop-types";

export default function ProjectPopup({ projectPopup, hidden, setHidden }) {
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setHidden(!hidden);
    }
  }
  function handleParentClick(e) {
    if (e.target === e.currentTarget) {
      setHidden(!hidden);
    }
  }

  return (
    <>
      <div className={`${!hidden ? "hidden" : ""} flex`}>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="popupLayout bg-primary"
          onClick={handleParentClick}
        >
          <div className="flex flex-col border-4 border-secondary items-center justify-start rounded-md bg-primary max-w-4xl h-[80%] w-[80%] p-5 cursor-default overflow-hidden">
            <p className="text-2xl font-bold my-8">{projectPopup.name}</p>
            <img
              className="h-72 border-2 border-secondary rounded-md"
              src={projectPopup.image}
              alt={projectPopup.name}
            />
            <p className="mt-8 font-bold">
              Projet {projectPopup.fullstack ? "fullstack" : "front"} développé{" "}
              {projectPopup.solo ? "seul" : "en équipe"}.
            </p>
            <p className="mt-8">
              <span className="underline">Sujet :</span> {projectPopup.subject}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

ProjectPopup.propTypes = {
  hidden: PropTypes.bool,
  setHidden: PropTypes.func,
  projectPopup: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    subject: PropTypes.string,
    fullstack: PropTypes.bool,
    solo: PropTypes.bool,
  }),
};
