import Typed from "typed.js";
import { useState } from "react";

export default function Switcher() {
  let [typed, setTyped] = useState(null);

  function handleSwitch(e) {
    if (e.target.checked) {
      document.body.classList.toggle("dark-mode");
      document.querySelector(".my-name--dark").classList.remove("nodisplay");
      document.querySelector(".my-name--light").classList.add("nodisplay");
      // Destroy previous instance if exists
      if (typed) typed.destroy();
      setTyped(
        new Typed(".my-name--dark", {
          strings: ["Emirhan Karagöz.", "Frontend Developer"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
        })
      );
    } else {
      document.body.classList.toggle("dark-mode");
      document.querySelector(".my-name--dark").classList.add("nodisplay");
      document.querySelector(".my-name--light").classList.remove("nodisplay");
      // Destroy the Typed instance
      if (typed) {
        typed.destroy();
        setTyped(null);
      }
    }
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch-input"
        onChange={(e) => handleSwitch(e)}
      />
      <span className="slider round"></span>
    </label>
  );
}
