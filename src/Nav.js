import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
     
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Бургер */}
      <div 
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Навигация */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" className="link" onClick={() => setIsOpen(false)}>Shop</Link>
        <Link to="/about" className="link" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contactus" className="link" onClick={() => setIsOpen(false)}>Contact us</Link>
      </div>
    </nav>
  );
}

export default Nav;
