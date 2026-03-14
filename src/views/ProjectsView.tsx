import React from "react";
import { motion } from "motion/react";
import "./ProjectsView.css";
import { ImageIcon, ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "large" | "small";
  description: string;
  codebase: string;
}

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

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`project-card ${
        project.size === "large" ? "card-large" : "card-small"
      }`}
    >
      {/* Image Background */}
      <div className="card-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="card-image"
          referrerPolicy="no-referrer"
        />
        <div className="card-overlay" />
      </div>

      {/* Content Overlay */}
      <div className="card-content">
        <div className="card-top">
          <div className="icon-wrapper">
            <ImageIcon className="h-5 w-5" />
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="external-link-btn">
            <ExternalLink className="h-5 w-5" />
          </motion.div>
        </div>

        <div className="card-bottom">
          <p className="card-category">{project.category}</p>
          <h3 className="card-title">{project.title}</h3>
          <div className="view-project">
            View Project <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsView: React.FC = () => {
  return (
    <div className="projects-view">
      <h1>Explore my Projects</h1>
      <div className="projects-layout">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="projects-details">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-detail"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="detail-codebase">
                Built with: {project.codebase}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
