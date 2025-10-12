import CV from "../cv-26-09.2025.pdf";

export default function Navigation({
  mobileNavOpen,
  setMobileNavOpen,
  headerElement,
  navOverlay,
}) {
  function handleClick(e) {
    if (mobileNavOpen) {
      headerElement.current.classList.toggle("nav-open");
      navOverlay.current.classList.toggle("active");
      document.body.style.overflow = "";
      setMobileNavOpen(false);
    }
    window.scrollTo(e.target);
  }

  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <a className="main-nav-link" href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li>
          <a className="main-nav-link" href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
        <li>
          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="btn main-nav-btn"
          >
            Download CV
          </a>
        </li>
        <div className="mobile-nav-footer">
          <div className="portfolio-version">
            <span className="status-dot"></span>
            Portfolio v
            <span className="copyright-year">{new Date().getFullYear()}</span>
          </div>
        </div>
      </ul>
    </nav>
  );
}
