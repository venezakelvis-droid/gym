import { useState } from "react";
import type { INavBarProps } from "./interfaces/INavBarProps";
import "./styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../providers/CartProvider ";


function NavBar({ brand, links }: INavBarProps) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { totalItems } = useCart();

  const handleNavigateBrand = () => {
    navigate("/")
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <span className="navbar-brand" onClick={handleNavigateBrand}>{brand}</span>



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

        <Link to="/pagamento" className="navbar-cart desktop">
          <FaShoppingCart size={24} />
          {totalItems > 0 && <span className="cart-badge">+{totalItems}</span>}
        </Link>
      </nav>

      {totalItems > 0 && (
        <Link to="/pagamento" className="navbar-cart mobile">
          <FaShoppingCart size={28} />
          <span className="cart-badge">{totalItems}</span>
        </Link>
      )}
    </header>
  );
}

export default NavBar;
