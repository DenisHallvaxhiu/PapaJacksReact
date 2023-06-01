import PizzaImage from "../../assets/PizzaImage.png";
import "./MainLanding.css";

function MainLanding() {
  return (
    <section className="mainLanding">
      <div>
        <h1>PAPA JACKS</h1>
        <h3>Opening Hours</h3>
        <h3>Monday - Thursday 11 am - 10 pm</h3>
        <h3>Friday - Saturday 11 am - 11 PM</h3>
        <h3>Sunday 12 pm - 10 pm</h3>
      </div>
      <div className="container">
        <img src={PizzaImage} alt="" className="pizzabg" />
      </div>
    </section>
  );
}

export default MainLanding;
