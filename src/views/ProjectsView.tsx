import React from "react";
import { motion } from "motion/react";
import "./ProjectsView.css";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "large" | "small";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Global Logistics Platform",
    category: "Web Application",
    image: "https://picsum.photos/seed/logistics/800/1200",
    size: "large",
  },
  {
    id: 2,
    title: "Smart City Dashboard",
    category: "Data Visualization",
    image: "https://picsum.photos/seed/city/800/600",
    size: "small",
  },
  {
    id: 3,
    title: "Eco-Track Mobile App",
    category: "Mobile Design",
    image: "https://picsum.photos/seed/eco/800/600",
    size: "small",
  },
];

const ProjectsView: React.FC = () => {
  return (
    
  )
};

export default ProjectsView;
