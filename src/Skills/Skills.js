import { useEffect, useRef } from "react";
import Skill from "./Skill";
import { skillsData } from "./skillsData";

export default function Skills() {
  const skillCards = useRef("");

  useEffect(() => {
    function animateProgressBars() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const card = entry.target;
              const progressFills = card.querySelectorAll(".progress-fill");

              // Add animation class to card
              card.classList.add("animate");

              // Set the width of each progress bar after a small delay
              setTimeout(() => {
                progressFills.forEach((fill) => {
                  const level = fill.dataset.level;
                  fill.style.width = `${level}%`;
                });
              }, 200);

              // Unobserve after animation
              observer.unobserve(card);
            }
          });
        },
        {
          threshold: 0.3,
        }
      );

      // Observe all skill cards

      [...skillCards.current.children].forEach((card) => {
        observer.observe(card);
      });
    }
    animateProgressBars();
  }, []);

  return (
    <div className="skills-grid" id="skillsGrid" ref={skillCards}>
      {skillsData.map((skillInfo) => {
        return (
          <div
            className={`skill-card ${skillInfo.category} ${
              skillInfo.category === "ai-tools" ? "ai-special" : ""
            }`}
            key={skillInfo.category}
          >
            <div className="card-header">
              <span
                className={`card-icon ${
                  skillInfo.category === "ai-tools" ? "ai-icon" : ""
                }`}
              >
                {skillInfo.icon}
              </span>
              <h3
                className={`card-title ${
                  skillInfo.category === "ai-tools" ? "ai-title" : ""
                }`}
              >
                {skillInfo.title}
              </h3>
            </div>
            <div className="skills-list">
              {skillInfo.skills.map((skill) => (
                <Skill
                  skill={skill}
                  category={skillInfo.category}
                  key={skill.name}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
