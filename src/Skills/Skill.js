import B2 from "../B2.pdf";

export default function Skill({ skill, category }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <div className="skill-info">
          <div className="skill-name">
            {skill.name === "German" ? (
              <a
                href={B2}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                German
              </a>
            ) : (
              skill.name
            )}
          </div>
          <div className="skill-description">{skill.description}</div>
        </div>
        <div
          className={`skill-badge ${category === "ai-tools" ? "ai-badge" : ""}`}
        >
          {skill.level}%
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" data-level={skill.level}></div>
      </div>
    </div>
  );
}
