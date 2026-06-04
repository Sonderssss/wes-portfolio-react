import React from "react";
import AboutView from "../views/AboutView";

const About: React.FC = () => {
  return (
    <section id="about" className="page-section" style={{ paddingTop: '50px' }}>
      <AboutView />
    </section>
  );
};

export default About;
