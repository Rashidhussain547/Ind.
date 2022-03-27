import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Electric from "./Pages/Services/Electric/Electric";
import Footer from "./Components/Footer/Footer";
import Torque from "./Pages/Services/Torque/Torque";
import Pressure from "./Pages/Services/Pressure/Pressure";
import Temp from "./Pages/Services/Temp/Temp";
import Dimension from "./Pages/Services/Dimension/Dimension";
import NDT from "./Pages/Services/NDT/NDT";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route exact={true} path="/Electric" element={<Electric />} />
            <Route exact={true} path="/Torque" element={<Torque />} />
            <Route exact={true} path="/Pressure" element={<Pressure />} />
            <Route exact={true} path="/Temp" element={<Temp />} />
            <Route exact={true} path="/Dimension" element={<Dimension />} />
            <Route exact={true} path="/NDT" element={<NDT />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
