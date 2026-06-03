import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import logoLab from "../assets/images/3DLogoLab.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(["home", "projects", "about", "contact"]);

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
        <a
          href="#home"
          className={activeSection === "home" ? "router-link-exact-active" : ""}
          onClick={closeMenu}
        >
          HOME
        </a>
        <span className="desktop-logo">WES</span>
        <div className="other-links">
          <a
            href="#projects"
            className={activeSection === "projects" ? "router-link-exact-active" : ""}
            onClick={closeMenu}
          >
            PROJECTS
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "router-link-exact-active" : ""}
            onClick={closeMenu}
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "router-link-exact-active" : ""}
            onClick={closeMenu}
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
