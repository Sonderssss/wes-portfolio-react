import React from "react";
import { m, Variants } from "motion/react";
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
  React.useEffect(() => {
    document.body.classList.add("about-page-active");
    return () => {
      document.body.classList.remove("about-page-active");
    };
  }, []);

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  const introVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" as const },
    },
  };

  const dividerVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const },
    },
  };

  return (
    <div className="about-container">
      {/* Top Split Hero Section */}
      <div className="about-hero-split">
        {/* Left Side: Introduction */}
        <m.div
          initial="hidden"
          animate="visible"
          variants={introVariants}
          className="about-intro-side"
        >
          <h2 className="about-intro-title">I am Wesley Waweru,</h2>
          <p className="about-intro-text">
            I am a developer driven by the internal mechanics of software systems.
          </p>
          <blockquote className="about-intro-quote">
            "with a keen curiosity on not just how things are built but how they
            work together internally to create what you see"
          </blockquote>
        </m.div>

        {/* Center Divider */}
        <m.div
          initial="hidden"
          animate="visible"
          variants={dividerVariants}
          className="about-divider"
        />

        {/* Right Side: Typography */}
        <m.div
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
          className="about-typography-side"
        >
          <m.div className="typography-row" variants={textItemVariants}>
            <span className="word-get">GET</span>
          </m.div>
          <m.div className="typography-row" variants={textItemVariants}>
            <span className="word-know">KNOW</span>
            <m.span className="word-to" variants={textItemVariants}>
              TO
            </m.span>
          </m.div>
          <m.div className="typography-row" variants={textItemVariants}>
            <span className="word-me">ME</span>
          </m.div>
        </m.div>
      </div>

      {/* Bottom Section: Core Expertise & Tech Stack */}
      <div className="about-details-section">
        {/* Core Expertise stacked and left-aligned */}
        <div className="about-expertise-container">
          <h2 className="section-header-title">Core Expertise</h2>
          <div className="expertise-grid-new">
            {qualities.map((q, idx) => (
              <div key={idx} className="expertise-item">
                <div className="expertise-icon">{q.icon}</div>
                <h3 className="expertise-title">{q.title}</h3>
                <p className="expertise-desc">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack below core expertise */}
        <div className="about-tech-stack-section">
          <h2 className="section-header-title">Tech Stack</h2>
          <div className="tech-tags-grid-new">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag-new">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
