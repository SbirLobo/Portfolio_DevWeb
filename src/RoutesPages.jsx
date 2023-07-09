import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Presentation from "./Pages/Presentation";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/Portfolio_DevWeb" element={<Home />} />
      <Route path="/Portfolio_DevWeb/presentation" element={<Presentation />} />
      <Route path="/Portfolio_DevWeb/contact" element={<Contact />} />
      <Route path="/Portfolio_DevWeb/projects" element={<Projects />} />
    </Routes>
  );
};

export default RoutesPages;
