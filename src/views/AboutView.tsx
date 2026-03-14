import React from "react";
import { motion } from "motion/react";
import { Cpu, Globe, Code2 } from "lucide-react";
import "./AboutView.css";

const AboutView: React.FC = () => {
  const techStack = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React",
    "Flutter",
    "Docker",
  ];

  const qualities = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Backend Engineer",
      desc: "Building robust and scalable server-side architectures.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Fullstack Developer",
      desc: "Crafting seamless end-to-end digital experiences.",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Systems Design Architect",
      desc: "Designing complex systems with internal harmony.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="about-container"
    >
      <div className="about-header">
        <h1 className="about-title">
          Engineering with <br />
          Deep Curiosity.
        </h1>

        <p className="about-subtitle">
          I am a developer driven by the internal mechanics of software systems.
        </p>
      </div>

      <blockquote className="about-quote">
        "with a keen curiosity on not just how things are built but how they
        work together internally to create what you see"
      </blockquote>

      <div className="tech-section">
        <h2 className="tech-section-title">Core Expertise</h2>

        <div
          className="projects-grid"
          style={{
            height: "auto",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {qualities.map((q, i) => (
            <div
              key={i}
              className="project-card"
              style={{
                padding: "2rem",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                className="icon-wrapper"
                style={{
                  width: "fit-content",
                  backgroundColor: "var(--stone-900)",
                  color: "white",
                }}
              >
                {q.icon}
              </div>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                {q.title}
              </h3>

              <p
                style={{
                  color: "var(--stone-500)",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                {q.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-section">
        <h2 className="tech-section-title">Tech Stack</h2>

        <div className="tech-stack">
          {techStack.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutView;
