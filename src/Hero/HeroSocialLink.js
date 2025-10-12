export default function HeroSocialLink({ link, platformName }) {
  return (
    <li>
      <a className="hero-link" href={link} rel="noreferrer" target="_blank">
        <ion-icon className="social-icon" name={"logo-" + platformName} />
      </a>
    </li>
  );
}
