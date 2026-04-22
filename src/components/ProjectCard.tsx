import React from "react";
import { motion } from "motion/react";
import { ImageIcon, ExternalLink, ArrowRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "large" | "small";
  description: string;
  codebase: string;
}

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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
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
          
          <div className="card-hover-details">
            <p className="card-description">{project.description}</p>
            <span className="card-codebase">Built with: {project.codebase}</span>
          </div>

          <div className="view-project">
            View Project <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
