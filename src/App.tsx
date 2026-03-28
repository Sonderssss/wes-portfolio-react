import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AppRouter from "./router";
import "./App.css";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="nav-header">
          <span>WES</span>
          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`container ${isMenuOpen ? "menu-open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "router-link-exact-active" : ""
            }
            onClick={closeMenu}
          >
            HOME
          </NavLink>
          <span className="desktop-logo">WES</span>
          <div className="other-links">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "router-link-exact-active" : ""
              }
              onClick={closeMenu}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "router-link-exact-active" : ""
              }
              onClick={closeMenu}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "router-link-exact-active" : ""
              }
              onClick={closeMenu}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
      <AppRouter />
    </>
  );
};

export default App;
