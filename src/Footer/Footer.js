import FooterHeader from "./footerHeader";
import FooterAdress from "./footerAdress";
import FooterCopyright from "./footerCopyright";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <FooterHeader />
        <FooterAdress />
        <FooterCopyright />
      </div>
    </footer>
  );
}
