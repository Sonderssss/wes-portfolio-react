
import { m } from "motion/react";
import { Zap, Shield, LineChart, CheckCircle2 } from "lucide-react";

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

const getTechIcon = (index: number) => {
  const icons = [
    <Zap key="zap" className="h-3 w-3" />,
    <Shield key="shield" className="h-3 w-3" />,
    <LineChart key="chart" className="h-3 w-3" />,
    <CheckCircle2 key="check" className="h-3 w-3" />,
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
    <m.div
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
        
        <div className="initial-title-overlay">
          <h2>{project.title}</h2>
        </div>
        
        <div className="card-top-tech">
          {project.codebase.split(",").map((tech, i) => {
            const trimmedTech = tech.trim();
            return (
              <span key={trimmedTech} className="tech-pill">
                {getTechIcon(i)}
                {trimmedTech}
              </span>
            );
          })}
        </div>
      </div>

      <div className="card-bottom-content">
        <h3 className="card-title-new">{project.title}</h3>
        <p className="card-desc-new">{project.description}</p>
        
        <div className="card-actions-new">
          <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', textAlign: 'center' }}>
            View Project
          </a>
          <a href={project.sourceCode || "#"} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none', textAlign: 'center' }}>
            Source Code
          </a>
        </div>
      </div>
    </m.div>
  );
};

export default ProjectCard;
