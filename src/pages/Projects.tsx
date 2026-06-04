import React from "react";
import ProjectsView from "../views/ProjectsView";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="page-section" style={{ paddingTop: '50px' }}>
      <ProjectsView />
    </section>
  );
};

export default Projects;
