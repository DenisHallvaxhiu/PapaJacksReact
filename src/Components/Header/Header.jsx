import "./Header.css";
import PapaJacksLogo from "../../assets/Papajacks-logo.png";

function Header() {
  return (
    <nav className="nav">
      <div>
        <a className="logo" href="#">
          {" "}
          <img  src={PapaJacksLogo} alt="" />
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">ABOUT US</a>
        </li>
        <li>
          <a href="/">MENU</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
