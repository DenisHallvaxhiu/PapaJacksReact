import React from "react";
import "./FindUs.css";

export default function FindUs() {
  return (
    <section className="findUs">
      <h1>FIND US</h1>
      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.8885721033416!2d-71.01548082337291!3d42.40881773201913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e371e574fec953%3A0x659bf06b1713fb26!2sPapa%20Jacks!5e0!3m2!1sen!2sus!4v1686624142826!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="location">
        <h4>Opening Hours</h4>
        <p>Monday - Thursday 11 am - 10 pm</p>
        <p>Friday - Saturday 11 am - 11 PM</p>
        <p>Sunday 12 pm - 10 pm</p>
        <a href="tel:1234567890">123-456-7890</a>
      </div>
    </section>
  );
}
