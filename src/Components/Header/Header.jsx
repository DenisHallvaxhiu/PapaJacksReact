import "./Header.css";
import PapaJacksLogo from "../../assets/Papajacks-logo.png";

function Header() {
  return (
    <nav >
      <ul className="nav">
        <li>
          <img src={PapaJacksLogo} alt="" />
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
      </ul>
    </nav>
  );
}

export default Header;
