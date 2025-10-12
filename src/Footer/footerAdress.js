export default function FooterAdress() {
  return (
    <address className="contacts">
      <p>
        <a className="footer-link" href="mailto:emirhan-karagoz1@hotmail.com">
          <span style={{ fontSize: "3rem", color: "#fff" }}>
            <span style={{ fontSize: "3rem", color: "#fff" }}>📧</span> E-MAIL
          </span>
        </a>
      </p>
      <ul className="footer-socials">
        <li>
          <ion-icon
            className="footer--social-icon"
            name="logo-instagram"
          ></ion-icon>
          <a
            href="https://www.instagram.com/krgze.mir?igsh=OWtleXRzbXFhMjBs"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            instagram
          </a>
        </li>
        <li>
          <ion-icon
            className="footer--social-icon"
            name="logo-linkedin"
          ></ion-icon>
          <a
            href="https://www.linkedin.com/in/emirhan-karag%C3%B6z-92a534229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <ion-icon
            className="footer--social-icon"
            name="logo-github"
          ></ion-icon>
          <a
            href="https://github.com/Wallinera?tab=repositories"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </address>
  );
}
