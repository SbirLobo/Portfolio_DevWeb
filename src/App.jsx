import Navbar from "./components/Navbar";
import RoutesPages from "./RoutesPages";
import "./App.css";

function App() {
  if (screen.width < 284 || screen.height < 284)
    return (
      <p className="text-center text-xl">
        Votre écran ne permet pas l&rsquo;affichage du site.
      </p>
    );
  return (
    <div className="font-montserrat bg-primary text-secondary flex justify-center h-auto lg:min-h-screen min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <RoutesPages />
    </div>
  );
}

export default App;
