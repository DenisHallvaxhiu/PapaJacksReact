import React from "react";
import BookingForm from "../Components/BookingForm/BookingForm"
import image from "../assets/wood-background.jpg"

export default function Booking() {
  const divStyle = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1)), url(${image})`,
    height: '93vh',
    overflow: 'hidden',
  };
  return (
    <div style={divStyle}>
      <BookingForm/>
    </div>
  );
}
