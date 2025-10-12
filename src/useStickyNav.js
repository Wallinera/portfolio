import { useEffect } from "react";

export default function useStickyNav(refEl) {
  useEffect(() => {
    let observer = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        if (!ent.isIntersecting) {
          document.body.classList.add("sticky");
        } else {
          document.body.classList.remove("sticky");
        }
      },
      {
        // in the viewport
        root: null,

        // as soon as the hero section is out of the viewport
        threshold: 0,

        // Adds the sticky class just 80pixels before the next section
        rootMargin: "-80px",
      }
    );

    observer.observe(refEl.current);
  }, [refEl]);
}
