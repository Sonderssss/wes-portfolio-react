import React from "react";
import { m } from "motion/react";
import { Cpu, Globe, Code2 } from "lucide-react";
import "./AboutView.css";

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

const AboutView: React.FC = () => {

  return (
    <m.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
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

        <div className="about-projects-grid">
          {qualities.map((q) => (
            <div
              key={q.title}
              className="about-project-card"
            >
              <div
                className="icon-wrapper"
                style={{
                  width: "fit-content",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {q.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "black",
                }}
              >
                {q.title}
              </h3>

              <p
                style={{
                  color: "black",
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
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default AboutView;
