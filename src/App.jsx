import Navbar from "./components/Navbar";
import RoutesPages from "./RoutesPages";
import "./App.css";

function App() {
  return (
    <div className="font-montserrat bg-primary text-secondary flex justify-center h-auto lg:min-h-screen min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <RoutesPages />
    </div>
  );
}

export default App;
