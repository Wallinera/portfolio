import { useRef, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Switcher from "./Switcher";
import MobileNavMenuBtn from "./MobileNavMenuBtn";

export default function MainHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const headerElement = useRef("");
  const navOverlay = useRef("");

  function handleClick() {
    headerElement.current.classList.toggle("nav-open");
    navOverlay.current.classList.toggle("active");
    document.body.style.overflow = !mobileNavOpen ? "hidden" : "";

    setMobileNavOpen(!mobileNavOpen);
  }

  return (
    <header className="header" ref={headerElement}>
      <Logo />
      <Navigation
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        headerElement={headerElement}
        navOverlay={navOverlay}
      />
      <Switcher />
      <MobileNavMenuBtn
        handleClick={handleClick}
        mobileNavOpen={mobileNavOpen}
      />
      <div
        className="mobile-nav-overlay"
        onClick={(e) => handleClick(e)}
        ref={navOverlay}
      ></div>
    </header>
  );
}
