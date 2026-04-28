import React from "react";
import "./ProjectsView.css";
import ProjectCard, { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "AIESEC Web Scraper",
    category: "Web Scraper",
    image: "https://picsum.photos/seed/logistics/800/1200",
    size: "large",
    description:
      "A full-stack logistics management platform with real-time tracking, route optimization, and analytics dashboards.",
    codebase: "Python, BeautifulSoup, Google Sheets API",
  },
  {
    id: 2,
    title: "Smart Subscription Tracker",
    category: "Frontend Design",
    image: "https://picsum.photos/seed/city/800/600",
    size: "small",
    description:
      "Interactive dashboard for monitoring urban infrastructure metrics including traffic, energy, and public services.",
    codebase: "React JS",
  },
  {
    id: 3,
    title: "Subscription Tracker ",
    category: "Backend Development",
    image: "https://picsum.photos/seed/eco/800/600",
    size: "small",
    description:
      "A mobile app that helps users track their carbon footprint and suggests eco-friendly alternatives.",
    codebase: "Node.js, Express, MongoDB",
  },
];


const ProjectsView: React.FC = () => {
  return (
    <div className="projects-view">
      <h1>Explore my Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
