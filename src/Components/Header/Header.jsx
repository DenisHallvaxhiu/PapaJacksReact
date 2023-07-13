import "./Header.css";
import { Link } from "react-router-dom";
// import PapaJacksLogo from "../../assets/Papajacks-logo.png";

function Header(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="#1">#</Link></li>
        <li><Link to="#1">#</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
