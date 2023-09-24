import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Presentation from "./Pages/Presentation";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Page404 from "./Pages/Page404";

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/Portfolio_DevWeb" element={<Home />} />
      <Route path="/Portfolio_DevWeb/presentation" element={<Presentation />} />
      <Route path="/Portfolio_DevWeb/contact" element={<Contact />} />
      <Route path="/Portfolio_DevWeb/projects" element={<Projects />} />

      <Route path="/Portfolio_DevWeb/*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesPages;
