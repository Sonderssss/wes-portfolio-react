import React, { useEffect, useRef, useSyncExternalStore, useCallback } from "react";
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
    sourceCode: "https://github.com/Sonderssss/aiesec_scrapper",
    liveLink: "#",
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
    sourceCode: "https://github.com/Sonderssss/subscription-tracker-frontend",
    liveLink: "#",
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
    sourceCode: "https://github.com/Sonderssss/subscription-tracker",
    liveLink: "#",
  },
];

const ProjectsView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("projects-page-active");
    return () => {
      document.body.classList.remove("projects-page-active");
    };
  }, []);
  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener("scroll", onStoreChange, { passive: true });
    window.addEventListener("resize", onStoreChange);
    return () => {
      window.removeEventListener("scroll", onStoreChange);
      window.removeEventListener("resize", onStoreChange);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    const viewportHeight = window.innerHeight;
    const containerTop = rect.top + scrollTop;
    const containerHeight = rect.height;

    // Start tracking when container top is near viewport center
    const startScroll = containerTop - viewportHeight * 0.6;
    // End tracking when the container bottom has scrolled past viewport center
    const endScroll = containerTop + containerHeight - viewportHeight * 0.4;
    
    const totalDist = endScroll - startScroll;
    const currentScroll = scrollTop - startScroll;
    
    if (totalDist <= 0) return 0;
    return Math.max(0, Math.min(1, currentScroll / totalDist));
  }, []);

  const scrollProgress = useSyncExternalStore(subscribe, getSnapshot, () => 0);

  const activeGlowColor =
    scrollProgress < 0.35
      ? "var(--color-accent-1)"
      : scrollProgress < 0.7
      ? "var(--color-accent-2)"
      : "var(--color-accent-1)";

  return (
    <div className="projects-container" ref={containerRef}>
      {/* Central Divider Line */}
      <div className="projects-divider-container">
        <div className="projects-divider-base" />
        <div
          className="projects-divider-glow"
          style={{
            height: `${scrollProgress * 100}%`,
            background: `linear-gradient(to bottom, var(--color-accent-1), var(--color-accent-2), var(--color-accent-1))`
          }}
        />
        <div
          className="projects-divider-orb"
          style={{
            top: `${scrollProgress * 100}%`,
            backgroundColor: activeGlowColor,
            boxShadow: `0 0 10px ${activeGlowColor}, 0 0 20px ${activeGlowColor}, 0 0 30px ${activeGlowColor}`
          }}
        />
      </div>

      <div className="projects-grid-layout">
        {/* Row 1, Right: PROJECTS Header */}
        <div className="projects-header-item">
          <h1 className="projects-title">
            <span className="title-pro">PRO</span>
            <span className="title-jects">
              JE<span className="title-cts-wrapper">CTS
                <span className="title-triangles" style={{ color: activeGlowColor }}>
                  <span className="tri">▲</span>
                  <span className="tri">▲</span>
                  <span className="tri">▲</span>
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* Row 1, Left: Project 1 */}
        <div className="project-grid-item item-1">
          <ProjectCard project={projects[0]} index={0} />
        </div>

        {/* Row 2, Right: Project 2 */}
        <div className="project-grid-item item-2">
          <ProjectCard project={projects[1]} index={1} />
        </div>

        {/* Row 3, Left: Project 3 */}
        <div className="project-grid-item item-3">
          <ProjectCard project={projects[2]} index={2} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
