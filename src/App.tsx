import React from "react";
import HomeView from "./views/HomeView";
import ProjectsView from "./views/ProjectsView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import Navbar from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
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
