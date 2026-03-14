import CV from "../cv-2026-03-14.pdf";

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
