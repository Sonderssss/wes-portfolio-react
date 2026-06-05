import React from "react";
import { m } from "motion/react";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "large" | "small";
  description: string;
  codebase: string;
  sourceCode?: string;
  liveLink?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="project-preview-card"
    >
      <span className="project-preview-category">{project.category.toUpperCase()}</span>
      <div className="project-preview-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-preview-image"
          referrerPolicy="no-referrer"
        />
      </div>
      <h3 className="project-preview-title">{project.title.toUpperCase()}</h3>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="project-preview-link"
        >
          VIEW SOURCE CODE →
        </a>
      )}
    </m.div>
  );
};

export default ProjectCard;
