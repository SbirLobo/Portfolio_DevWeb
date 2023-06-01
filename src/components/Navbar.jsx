import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = React.useState("");
  const [burger, setBurger] = React.useState("|||");
  const handleClick = () => {
    setActive(active === "" ? "active" : "");
    setBurger(burger === "///" ? "|||" : "///");
  };
  const handleClickLink = () => {
    setActive("");
    setBurger("|||");
  };
  return (
    <div>
      <label
        onClick={handleClick}
        className="lg:hidden menuButton absolute top-9 right-4 z-20"
      >
        <p className="text-secondary text-2xl">{burger}</p>
      </label>
      <div>
        <Link
          className="sbirlobo"
          onClick={handleClickLink}
          to="/Portfolio_DevWeb"
        >
          <img
            src="https://user-images.githubusercontent.com/108263661/242244143-6210e1d4-1a97-47e1-bd48-9e909e113b41.png"
            alt="logo sbir"
          />
          <p className="">SbirLobo</p>
        </Link>
      </div>
      <ul className={`${active} max-lg:menu lg:nav`}>
        <li>
          <Link onClick={handleClickLink} to="/Portfolio_DevWeb">
            Accueil
          </Link>
        </li>
        <li>
          <Link onClick={handleClickLink} to="/Portfolio_DevWeb/presentation">
            Présentation
          </Link>
        </li>
        <li>
          <Link onClick={handleClickLink} to="/Portfolio_DevWeb/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={handleClickLink} to="/Portfolio_DevWeb/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
