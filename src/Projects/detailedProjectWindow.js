export default function DetailedProjectWindow({
  selectedProject,
  onCloseModal,
}) {
  return (
    <>
      <div className="overlay" onClick={onCloseModal}></div>
      <div className="project-window">
        <div className={`project-detailed ${selectedProject.name}`}>
          <img
            src={selectedProject.image}
            alt={selectedProject.name + "project"}
          />
          <div className="text-box">
            <p className="project-title">
              {selectedProject.name === "usepopcorn"
                ? "usePopcorn"
                : selectedProject.name[0].toUpperCase() +
                  selectedProject.name.slice(1)}
            </p>
            <ul className="project-window--list">
              <li>
                <p className="project-description--detailed">
                  <span>Description: </span>
                  {selectedProject.description}
                </p>
              </li>
              <li>
                <span>My notes: </span>
                {selectedProject.notes}
              </li>
            </ul>
          </div>
          {selectedProject.name !== "portfolio" && (
            <a
              className={`${selectedProject.name}-link ${selectedProject.name} project-link`}
              href={selectedProject.url}
              target="_blank"
              rel="noreferrer"
            >
              Check it out
            </a>
          )}
          <button
            className={`btn--close-modal ${selectedProject.name}`}
            onClick={onCloseModal}
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
}
