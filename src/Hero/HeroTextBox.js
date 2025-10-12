export default function HeroTextBox({ children }) {
  return (
    <div className="hero-text-box">
      <h1 className="heading-primary">
        "<span className="text-programming">Programming</span> is the future
        form of art."
      </h1>
      <h3 className="heading-tertiary">
        I`m <span className="my-name my-name--dark nodisplay"></span>
        <span className="my-name my-name--light">Emirhan Karagöz</span>
      </h3>
      <p className="hero-description">
        Passionate about computers and languages since childhood, I later
        discovered programming as the perfect way to combine creativity, logic,
        and imagination. With a love for literature and philosophy, I now
        channel these perspectives into solving complex problems through code.
      </p>
      {children}
    </div>
  );
}
