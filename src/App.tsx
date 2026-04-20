import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import HomeView from "./views/HomeView";
import ProjectsView from "./views/ProjectsView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import { useActiveSection } from "./hooks/useActiveSection";
import "./App.css";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(["home", "projects", "about", "contact"]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav style={{ position: "sticky", top: 0, zIndex: 1000, backgroundColor: "transparent", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
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
      <main>
        <section id="home" className="page-section">
          <HomeView />
        </section>
        <section id="projects" className="page-section" style={{ paddingTop: '50px' }}>
          <ProjectsView />
        </section>
        <section id="about" className="page-section" style={{ paddingTop: '50px' }}>
          <AboutView />
        </section>
        <section id="contact" className="page-section" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
          <ContactView />
        </section>
      </main>
    </>
  );
};

export default App;
