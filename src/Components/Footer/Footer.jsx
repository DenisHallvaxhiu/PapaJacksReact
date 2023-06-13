import React from "react";
import PizzaImage from "../../assets/PizzaImage.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mainFooter">
      <div className="footer">
        <div className="container">
          <img src={PizzaImage} alt="" className="pizzabg" />
        </div>
        <div className="context">
          <h1>PAPA JACKS</h1>
          <ul>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-facebook-messenger"></i></li>
          </ul>
        </div>
      </div>
      <div className="disclaimer">
        <h5>Terms and Policy</h5>
      </div>
    </footer>
  );
}
