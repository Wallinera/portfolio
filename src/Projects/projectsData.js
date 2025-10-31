import forkifyImg from "../images/forkifyProject.webp";
import omnifoodImg from "../images/omnifoodProject.webp";
import maptyImg from "../images/maptyProject.webp";
import portfolioImg from "../images/portfolioProject.webp";
import usePopcornProject from "../images/usePopcornProject.webp";
import loopStudiosProject from "../images/loopsProject.webp";
import clipboardProject from "../images/clipboardProject.webp";
import shortlyProject from "../images/shortlyProject.webp";
import fyloProject from "../images/fyloProject.webp";

export const projectsData = [
  {
    name: "usepopcorn",
    image: usePopcornProject,
    description:
      "A film query website where users can search and give rating to the movies they have watched.",
    notes: (
      <p>
        Made by using core <span className="tech-skill">React Hooks</span> such
        as, <span className="tech-skill">use(Effect, Ref, State)</span> and
        custom hooks.
      </p>
    ),
    url: "https://usepopcornprojekt.netlify.app",
    id: "usepopcorn",
  },
  {
    name: "fylo",
    image: fyloProject,
    description:
      "A responsive landing page for a fictional company called Fylo.",
    notes: (
      <p>
        Build with <span className="tech-skill">Tailwindcss</span>. Used{" "}
        <span className="tech-skill">utility classes</span> as well as{" "}
        <span className="tech-skill">dark mode.</span> Developed on
        <span className="tech-skill"> React(Vite).</span>
      </p>
    ),
    url: "https://fylo-alpha-liard.vercel.app",
    id: "fylo",
  },
  {
    name: "shortly",
    image: shortlyProject,
    description: "A simple, responsive website for creating short links.",
    notes: (
      <p>
        Build with <span className="tech-skill">Tailwindcss</span>. Used{" "}
        <span className="tech-skill">utility classes</span> as well as{" "}
        <span className="tech-skill">custom Tailwindcss classes.</span>{" "}
        Developed on
        <span className="tech-skill"> React(Vite).</span>
      </p>
    ),
    url: "https://shortly-alpha.vercel.app",
    id: "shortly",
  },
  {
    name: "clipboard",
    image: clipboardProject,
    description: "Landing page of a fictional app called Clipboard.",
    notes: (
      <p>
        First time experience with{" "}
        <span className="tech-skill">Tailwindcss</span>, a framework which I can
        classify as the future of CSS. Used{" "}
        <span className="tech-skill">utility classes</span> as well as{" "}
        <span className="tech-skill">custom Tailwindcss classes</span>
      </p>
    ),
    url: "https://clipboard-omega-six.vercel.app",
    id: "clipboard",
  },
  {
    name: "loopstudios",
    image: loopStudiosProject,
    description: "A Landing page for a fictional VR company.",
    notes: (
      <p>
        First time using <span className="tech-skill">SCSS</span> as well as the
        first project with the help of{" "}
        <span className="tech-skill">Frontend Mentor</span>.
      </p>
    ),
    url: "https://loopstudiosprojeckt.netlify.app",
    id: "loopstudios",
  },
  {
    name: "omnifood",
    image: omnifoodImg,
    description:
      "A responsive landing page website for a fictional food delivery company.",
    notes: (
      <p>
        The first project, where I have learned the basics of{" "}
        <span className="tech-skill">HTML</span>,
        <span className="tech-skill"> CSS</span>, and{" "}
        <span className="tech-skill">JavaScript</span>
      </p>
    ),
    url: "https://omniyemek.netlify.app/",
    id: "omnifood",
  },
  {
    name: "mapty",
    image: maptyImg,
    description:
      "A web application for tracking running and cycling workouts on an interactive map.",
    notes: (
      <p>
        Learned the basics of <span className="tech-skill">API's</span>,
        <span className="tech-skill"> DOM manipulation</span>, and{" "}
        <span className="tech-skill">intermediate JavaScript</span>
      </p>
    ),
    url: "https://maptyprojeckt.netlify.app/",
    id: "mapty",
  },
  {
    name: "forkify",
    image: forkifyImg,
    description: "A recipe search app made with modern JavaScript features.",
    notes: (
      <p>
        Learned complex features like{" "}
        <span className="tech-skill">Functional Programming</span>, Code
        Architectures like the{" "}
        <span className="tech-skill"> model-view-controller (MVC)</span>, and{" "}
        <span className="tech-skill">high level JavaScript</span>
      </p>
    ),
    url: "https://forkifyprojeckt.netlify.app/",
    id: "forkify",
  },
  {
    name: "portfolio",
    image: portfolioImg,
    description: "Portfolio website made with basic React features.",
    notes: (
      <p>
        A portfolio website, in which I used core features of{" "}
        <span className="tech-skill">React</span> for the first time.
      </p>
    ),
    url: "ekaragoz.com",
    id: "portfolio",
  },
];
