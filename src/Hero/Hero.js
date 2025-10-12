import HeroTextBox from "./HeroTextBox";
import HeroSocialLinks from "./HeroSocialLinks";
import HeroSocialLink from "./HeroSocialLink";
import FaceShotBox from "./FaceShotBox";

export default function Hero({ sectionHeroEl }) {
  return (
    <section className="section-hero" ref={sectionHeroEl}>
      <div className="hero container grid grid--2-cols">
        <HeroTextBox>
          <HeroSocialLinks>
            <HeroSocialLink
              link="https://www.instagram.com/krgze.mir?igsh=OWtleXRzbXFhMjBs"
              platformName="instagram"
            />
            <HeroSocialLink
              link="https://www.linkedin.com/in/emirhan-karag%C3%B6z-92a534229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              platformName="linkedin"
            />
            <HeroSocialLink
              link="https://github.com/Wallinera?tab=repositories"
              platformName="github"
            />
          </HeroSocialLinks>
        </HeroTextBox>
        <FaceShotBox />
      </div>
    </section>
  );
}
