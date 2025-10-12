export default function FooterCopyright() {
  return (
    <p className="copyright">
      &copy; <span className="copyright-year">{new Date().getFullYear()}</span>{" "}
      by Emirhan Karagöz. All rights reserved.
    </p>
  );
}
