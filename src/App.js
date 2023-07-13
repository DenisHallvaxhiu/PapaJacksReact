import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Home from "./views/Home";
import Footer from "./Components/Footer/Footer";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/test" element={<Footer/> }/>
      </Routes>
    </div>
  );
}

export default App;
