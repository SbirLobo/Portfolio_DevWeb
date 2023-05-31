import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Presentation from "./Pages/Presentation";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import "./App.css";

function App() {
  return (
    <div className="font-montserrat bg-primary text-secondary flex justify-center h-auto lg:min-h-screen min-h-screen w-screen">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Portfolio_DevWeb" element={<Home />} />
        <Route path="presentation" element={<Presentation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
