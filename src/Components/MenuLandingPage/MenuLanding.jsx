import "./MenuLanding.css";
import Image1 from "../../assets/MenuPicture1.jpg";
import Image2 from "../../assets/MenuPicture2.jpg";

export default function MenuLanding() {
  return (
    <section className="menu">
      <h1>OUR MENU</h1>
      <span>
        Papa jacks is a family run business, we deliver pizza and calzones to
        Revere & Chelsea. we also deliver subs and dinners in Revere & Chelsea.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, quae?
      </span>
      <div className="pictures">
        <div>
          <img src={Image1} alt="" />
        </div>
        <div>
          <img src={Image2} alt="" />
        </div>
      </div>

      <button>MENU</button>
    </section>
  );
}
