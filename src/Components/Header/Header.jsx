import "./Header.css";
// import PapaJacksLogo from "../../assets/Papajacks-logo.png";

function Header(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export default Header;
