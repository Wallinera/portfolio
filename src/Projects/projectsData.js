import forkifyImg from "../images/forkifyProject.webp";
import omnifoodImg from "../images/omnifoodProject.webp";
import maptyImg from "../images/maptyProject.webp";
import portfolioImg from "../images/portfolioProject.webp";
import usePopcornProject from "../images/usePopcornProject.webp";
import loopStudiosProject from "../images/loopsProject.webp";
import clipboardProject from "../images/clipboardProject.webp";
import shortlyProject from "../images/shortlyProject.webp";
import fyloProject from "../images/fyloProject.webp";
import bookmarkProject from "../images/bookmarkProject.webp";
import spaceTourismProject from "../images/spaceTourismProject.webp";
import worldwideProject from "../images/worldwideProject.PNG";
import wildOasisProject from "../images/wildOasisProject.webp";
import wildOasisGuest from "../images/wildOasisGuest.webp";
import pizzaCoProject from "../images/pizzaCoProject.webp";
import trackYourJobProject from "../images/trackYourJob.webp";

export const projectsData = [
  {
    name: "trackyourjob",
    image: trackYourJobProject,
    description: `About
A Kanban-style job application tracker that helps you organize and manage your job search.`,
    notes: (
      <p>
        Simple Kanban-style job application tracker, Built with{" "}
        <span className="tech-skill">NEXT.JS</span>,{" "}
        <span className="tech-skill">MongoDB</span>, and{" "}
        <span className="tech-skill">DND-Kit</span> for drag-and-drop support
        across customizable boards and columns. Also used{" "}
        <span className="tech-skill">TypeScript</span> for the first time in a
        React project.
      </p>
    ),
    url: "https://track-your-job-gilt.vercel.app",
    id: "trackyourjob",
  },
  {
    name: "wildoasisguest",
    image: wildOasisGuest,
    description: "Customer side of the management app, built with NEXT.JS",
    notes: (
      <p>
        The groundbreaking yet simple project, where I finally learned{" "}
        <span className="tech-skill">NEXT.JS</span>,{" "}
        <span className="tech-skill">Data Cache & Revalidation</span> and,
        Authentication through <span className="tech-skill">Better AUTH</span>{" "}
        It is with this project, that I reinforced my fundemental knowledge
        about <span className="tech-skill">Backend Development</span>
      </p>
    ),
    url: "https://the-wild-oasis-guest-six.vercel.app",
    id: "wildoasisguest",
  },
  {
    name: "wildoasis",
    image: wildOasisProject,
    description:
      "A hotel management web app, where hotel employees can manage cabins, bookings, and guests.",
    notes: (
      <p>
        The biggest project yet, where I learned{" "}
        <span className="tech-skill">React-Query</span>,{" "}
        <span className="tech-skill">Supabase Authentication</span> and,{" "}
        <span className="tech-skill">Styled Components</span>
      </p>
    ),
    url: "https://the-wild-oasis-umber-five.vercel.app/login",
    id: "wildoasis",
  },
  {
    name: "pizzaco",
    image: pizzaCoProject,
    description:
      "A pizza delivery web application for managing orders, customers, and inventory.",
    notes: (
      <p>
        The educational project , where I mostly focused on learning{" "}
        <span className="tech-skill">REDUX</span>,{" "}
        <span className="tech-skill">Redux-Toolkit</span> and,{" "}
        <span className="tech-skill">Supabase</span>
      </p>
    ),
    url: "https://pizza-co-five.vercel.app",
    id: "pizzaco",
  },
  {
    name: "worldwide",
    image: worldwideProject,
    description:
      "A location-tracking web application that lets users save, view, and manage their favorite travel locations worldwide.",
    notes: (
      <p>
        Through this project I learned{" "}
        <span className="tech-skill">React-Router</span>,{" "}
        <span className="tech-skill">useReducer</span> and,{" "}
        <span className="tech-skill">Context API</span>
      </p>
    ),
    url: "https://world-wide-omega.vercel.app",
    id: "worldwide",
  },
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
    name: "spacetourism",
    image: spaceTourismProject,
    description: "A multi-page website for a fictional space tourism company.",
    notes: (
      <p>
        Build with <span className="tech-skill">React</span> and{" "}
        <span className="tech-skill">Tailwindcss</span>. Used core React
        features such as <span className="tech-skill">React Router</span> for
        navigation.
      </p>
    ),
    url: "https://space-tourism-alpha-lyart.vercel.app",
    id: "spacetourism",
  },
  {
    name: "bookmark",
    image: bookmarkProject,
    description: "Landing page for a fictional bookmark managing app.",
    notes: (
      <p>
        Build with <span className="tech-skill">Tailwindcss</span>. Used{" "}
        <span className="tech-skill">utility classes</span>. Developed on
        <span className="tech-skill"> React(Vite)</span> with{" "}
        <span className="tech-skill">mobile-first</span> approach.
      </p>
    ),
    url: "https://bookmark-project-tan.vercel.app",
    id: "bookmark",
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
