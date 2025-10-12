import "./css/general.css";
import "./css/style.css";
import "./css/styleDarkMode.css";
import "./css/quaries.css";

import { useRef } from "react";
import useStickyNav from "./useStickyNav";

import Main from "./Main";
import MainHeader from "./Header/MainHeader";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import SkillsSection from "./Skills/skillsSection";
import Footer from "./Footer/Footer";

function App() {
  const sectionHeroEl = useRef("");
  useStickyNav(sectionHeroEl);

  return (
    <Main>
      <MainHeader />
      <Hero sectionHeroEl={sectionHeroEl} />
      <Projects />
      <SkillsSection />
      <Footer />
    </Main>
  );
}

export default App;
