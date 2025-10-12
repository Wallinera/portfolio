export default function MobileNavMenuBtn({ handleClick, mobileNavOpen }) {
  return (
    <button className="btn-mobile-nav" onClick={(e) => handleClick(e)}>
      <ion-icon
        name={`${mobileNavOpen ? "close" : "menu"}-outline`}
        className="nav-icon"
      ></ion-icon>
    </button>
  );
}
