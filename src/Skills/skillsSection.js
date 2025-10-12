import SkillsHeader from "./skillsHeader";
import Skills from "./Skills";
import SkillsFooter from "./skillsFooter";

export default function SkillsSection() {
  return (
    <section className="section-skills" id="skills">
      <div className="container">
        <SkillsHeader />
        <Skills />
        <SkillsFooter />
      </div>
    </section>
  );
}
