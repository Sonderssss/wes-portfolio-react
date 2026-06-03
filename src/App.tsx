import React from "react";
import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import HomeView from "./views/HomeView";
import ProjectsView from "./views/ProjectsView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import Navbar from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
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
        <section id="contact" className="page-section relative" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
          {/*  Diagonal Cross Grid Bottom Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
                linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
              `,
              backgroundSize: "40px 40px",
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 35% at 50% 100%, #000 30%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 100% 35% at 50% 100%, #000 30%, transparent 90%)",
              pointerEvents: "none",
              zIndex: 0
            }}
          />
          <ContactView />
        </section>
      </main>
      </MotionConfig>
    </LazyMotion>
  );
};

export default App;
