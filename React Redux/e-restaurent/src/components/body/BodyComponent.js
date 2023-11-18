import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";
import { Route, Routes, Navigate } from "react-router-dom";

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default BodyComponent;