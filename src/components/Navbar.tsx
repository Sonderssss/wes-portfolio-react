import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoLab from "../assets/images/3DLogoLab.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-header">
        <span>WES</span>
        <button
          type="button"
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`container ${isMenuOpen ? "menu-open" : ""}`}>
        <img src={logoLab} alt="Logo" className="mobile-menu-img" />
        
        {/* Desktop Left-aligned Logo */}
        <Link to="/" className="nav-logo-link" onClick={closeMenu}>
          <div className="nav-logo-box">
            <span className="logo-triangle">▲</span>
            <span className="logo-text">W E S</span>
          </div>
        </Link>
        
        {/* Desktop Centered Links / Mobile links */}
        <div className="nav-links-center">
          <Link
            to="/"
            className={location.pathname === "/" ? "router-link-exact-active active" : ""}
            onClick={closeMenu}
          >
            HOME
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "router-link-exact-active active" : ""}
            onClick={closeMenu}
          >
            PROJECTS
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "router-link-exact-active active" : ""}
            onClick={closeMenu}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "router-link-exact-active active" : ""}
            onClick={closeMenu}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
