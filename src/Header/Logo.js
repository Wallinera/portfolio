import logo from "../images/logo.png";

export default function Logo() {
  return (
    <img
      src={logo}
      alt="portfolio logo"
      className="logo"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    />
  );
}
