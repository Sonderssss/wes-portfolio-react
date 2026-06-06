import React from "react";
import { m, Variants } from "motion/react";
import { FaPinterest, FaGithub, FaLinkedin } from "react-icons/fa6";
import logoLab from "../../assets/images/3DLogoLab.png";
import "./Footer.css";

// Social Links Data
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Pinterest",
    url: "https://www.pinterest.com/sonderrrrson/?invite_code=bcec3e3fa5784dffad61da4e02ce6af9&sender=813603626340666783",
    icon: <FaPinterest className="social-icon-svg" />,
    ariaLabel: "Follow me on Pinterest",
  },
  {
    name: "Github",
    url: "https://github.com/Sonderssss",
    icon: <FaGithub className="social-icon-svg" />,
    ariaLabel: "Follow me on GitHub",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/wessel-o-2a3bb627b/",
    icon: <FaLinkedin className="social-icon-svg" />,
    ariaLabel: "Connect with me on LinkedIn",
  },
];

// Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const dividerVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const linksContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linkItemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer: React.FC = () => {
  return (
    <m.footer
      className="footer-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* 1. Thin Horizontal Divider Line (Centered, spanning full container width) */}
      <div className="footer-divider-container">
        <m.div className="footer-divider-line" variants={dividerVariants} />
      </div>

      {/* Main Content Area */}
      <div className="footer-content-container">
        {/* 2, 3 & 4. Typography Backdrop "LIVE", Floating Decorative Image, and Social Links */}
        <div className="footer-backdrop-outer-wrapper">
          <m.div className="footer-backdrop-area" variants={backdropVariants}>
            <div className="footer-backdrop-text-wrapper">
              {/* Backdrop text: not selectable, pointer events disabled */}
              <span className="footer-backdrop-text">LIVE</span>

              {/* 
                Decorative Image: Overlaying the "LIVE" text, centered over the letter 'I'.
                Framer Motion applies a gentle floating animation (slow vertical translation in infinite loop).
              */}
              <m.div
                className="footer-decorative-image-wrapper"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={logoLab}
                  alt="Decorative metal swirl logo"
                  className="footer-decorative-image"
                  draggable="false"
                />
              </m.div>

              {/* 4. Social Links Section (Vertically stacked, positioned on the right) */}
              <m.div className="footer-social-links-area" variants={linksContainerVariants}>
                <div className="footer-social-links-stack">
                  {socialLinks.map((link) => (
                    <m.div
                      key={link.name}
                      className="footer-social-link-item-wrapper"
                      variants={linkItemVariants}
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        className="footer-social-link-item"
                      >
                        <span className="footer-social-icon-box">{link.icon}</span>
                        <span className="footer-social-label-box">
                          <span className="footer-social-label-text">{link.name}</span>
                          <span className="footer-social-label-underline" />
                        </span>
                      </a>
                    </m.div>
                  ))}
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </m.footer>
  );
};

export default Footer;
