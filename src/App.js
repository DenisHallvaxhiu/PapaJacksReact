import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Home from "./views/Home";
import Booking from "./views/Booking";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/booking" element={<Booking/> }/>
      </Routes>
    </div>
  );
}

export default App;
