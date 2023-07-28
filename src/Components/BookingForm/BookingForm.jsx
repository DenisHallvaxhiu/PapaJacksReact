import React, { useEffect, useState } from "react";
import "./BookingForm.css";


// Seeded random function
const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

// Fetch API function
const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};

export default function Booking() {



  const [availableTimes, setAvailableTimes] = useState([
    "10:00 AM",
    "12:00 PM",
    "02:00 PM",
    "06:00 PM",
  ]);

  const [selectedTime, setSelectedTime] = useState("");

  function handleTimeChange(selectedTime) {
    setSelectedTime(selectedTime);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (selectedTime) {
      // Filter out the selected time and update the availableTimes state
      setAvailableTimes((prevTimes) =>
        prevTimes.filter((time) => time !== selectedTime)
      );

      // Reset the selectedTime state to clear the selection
      setSelectedTime("");
    }
  }

  useEffect(() => {
    initializeTimes(); // Call the function to fetch initial times when the component mounts
  }, []);

  const initializeTimes = () => {
    const today = new Date();
    const initialTimes = fetchAPI(today);
    setAvailableTimes(initialTimes);
  };

  return (
    <div className="formContainer">
      <form>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            onChange={(e) => handleTimeChange(e.target.value)}
            id="res-time"
          >
            {availableTimes.length > 0 ? (
              <option>Select a time</option>
            ) : (
              <option>No available times!</option>
            )}
            {availableTimes.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
          ></input>
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <input
          type="submit"
          onClick={handleFormSubmit}
          value="Make Your reservation"
        ></input>
      </form>
    </div>
  );
}