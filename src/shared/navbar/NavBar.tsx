import { useState } from "react";
import type { INavBarProps } from "./interfaces/INavBarProps";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar({ brand, links }: INavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <span className="navbar-brand">{brand}</span>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span className={open ? "active" : ""} />
          <span className={open ? "active" : ""} />
          <span className={open ? "active" : ""} />
        </button>
      </div>

      <nav className={`navbar-menu ${open ? "open" : ""}`}>
        {links.map((link, index) => (
          <Link key={index} to={link.href} className="navbar-link">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
