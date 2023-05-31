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
      <p className="sbirlobo">
        <Link onClick={handleClickLink} to="/">
          SbirLobo
        </Link>
      </p>
      <ul className={`${active} max-lg:menu lg:nav`}>
        <li>
          <Link onClick={handleClickLink} to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link onClick={handleClickLink} to="/presentation">
            Présentation
          </Link>
        </li>
        <li>
          <Link onClick={handleClickLink} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={handleClickLink} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
