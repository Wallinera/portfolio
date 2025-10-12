import CV from "../cv-26-09.2025.pdf";

export default function HeroSocialLinks({ children }) {
  return (
    <ul className="social-links">
      <a
        href={CV}
        className="btn btn--full margin-right-sm"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
      {children}
    </ul>
  );
}
