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
  console.log(projectPopup.id);
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
            {projectPopup.name}
            <img
              className="h-72 border-2 border-secondary rounded-md"
              src={projectPopup.image}
              alt={projectPopup.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

ProjectPopup.propTypes = {
  hidden: PropTypes.bool.isRequired,
  setHidden: PropTypes.func.isRequired,
  projectPopup: PropTypes.shape.isRequired,
};
