import React from "react";
import { motion } from "motion/react";
import { Zap, Shield, LineChart, CheckCircle2 } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "large" | "small";
  description: string;
  codebase: string;
}

const getTechIcon = (index: number) => {
  const icons = [
    <Zap className="h-3 w-3" />,
    <Shield className="h-3 w-3" />,
    <LineChart className="h-3 w-3" />,
    <CheckCircle2 className="h-3 w-3" />,
  ];
  return icons[index % icons.length];
};

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
      <div className="card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="card-image"
          referrerPolicy="no-referrer"
        />
        <div className="card-image-gradient" />
        
        <div className="card-top-tech">
          {project.codebase.split(",").map((tech, i) => (
            <span key={i} className="tech-pill">
              {getTechIcon(i)}
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>

      <div className="card-bottom-content">
        <h3 className="card-title-new">{project.title}</h3>
        <p className="card-desc-new">{project.description}</p>
        
        <div className="card-actions-new">
          <button className="btn-primary">View Project</button>
          <button className="btn-secondary">Source Code</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
