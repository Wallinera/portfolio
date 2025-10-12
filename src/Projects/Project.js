export default function Project({
  projectImg,
  projectName,
  children,
  onClick,
}) {
  return (
    <div
      className={`project ${projectName}`}
      onClick={() => {
        onClick(projectName);
      }}
    >
      <img src={projectImg} alt={`${projectName} project`} />
      <div className="text-box">
        <p className="project-title">
          {projectName === "usepopcorn"
            ? "usePopcorn"
            : projectName[0].toUpperCase() + projectName.slice(1)}
        </p>
        <p className="project-description">{children}</p>
      </div>
    </div>
  );
}
