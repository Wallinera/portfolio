import { useState, useRef } from "react";
import { projectsData } from "./projectsData";

import ProjetsHeader from "./projectsHeader";
import Project from "./Project";
import DetailedProjectWindow from "./detailedProjectWindow";

export default function Projects() {
  const [isDetailedProjectOpen, setIsDetailedProjectOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const selectedProject = projectsData.find(
    (project) => project.id === selectedProjectId
  );
  let wasStickyNavActive = useRef(false);

  function handleClick(id) {
    if (document.body.classList.contains("sticky")) {
      document.body.classList.toggle("sticky");
      wasStickyNavActive = true;
    }
    document.body.style.overflow = "hidden";
    setSelectedProjectId(id);
    setIsDetailedProjectOpen(true);
  }

  function handleCloseModal() {
    setIsDetailedProjectOpen(false);
    setSelectedProjectId(null);
    document.body.style.overflow = "";
    if (wasStickyNavActive) {
      document.body.classList.toggle("sticky");
    }
  }

  return (
    <section className="section-projects container" id="projects">
      <ProjetsHeader />
      <div className="projects container">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            projectName={project.name}
            projectImg={project.image}
            onClick={handleClick}
          >
            {project.description}
          </Project>
        ))}

        {isDetailedProjectOpen && selectedProject && (
          <DetailedProjectWindow
            selectedProject={selectedProject}
            onCloseModal={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}
