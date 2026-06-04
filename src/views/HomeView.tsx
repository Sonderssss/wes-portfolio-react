import React from 'react'
import { m } from 'motion/react'
import { Link } from 'react-router-dom'
import PortfolioImg from '../assets/images/Portfolio.png'
import './HomeView.css'

const HomeView: React.FC = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="home-view-container"
    >
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text-left">
          <span className="hero-subtitle">MCREATIVITY MBAYA</span>
          <h1 className="hero-title">
            <span className="hero-title-box">WESLEY</span>
            <span className="hero-title-main">TO THE LOUVRE</span>
          </h1>
          <Link to="/projects" className="explore-link">
            EXPLORE
          </Link>
        </div>
        
        <div className="hero-image-right">
          <img src={PortfolioImg} alt="Portfolio logo" />
        </div>
      </div>

      {/* Projects Preview Row */}
      <div className="projects-preview-section">
        <div className="projects-preview-grid">
          
          {/* Project 1 */}
          <div className="project-preview-card">
            <span className="project-preview-category">AIESEC WEB SCRAPPER</span>
            <div className="project-preview-image-wrapper">
              <img src="https://picsum.photos/seed/logistics/800/1200" alt="AIESEC Web Scraper" />
            </div>
            <h3 className="project-preview-title">VIEW SHEET OF OPPORTUNITIES</h3>
            <a 
              href="https://github.com/Sonderssss/aiesec_scrapper" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-preview-link"
            >
              View Source Code →
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-preview-card">
            <span className="project-preview-category">SUBSCRIPTION TRACKER</span>
            <div className="project-preview-image-wrapper">
              <img src="https://picsum.photos/seed/city/800/600" alt="Smart Subscription Tracker" />
            </div>
            <h3 className="project-preview-title">MANAGE YOUR SUBSCRIPTIONS</h3>
            <a 
              href="https://github.com/Sonderssss/subscription-tracker-frontend" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-preview-link"
            >
              View Source Code →
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-preview-card">
            <span className="project-preview-category">SUBSCRIPTION BACKEND</span>
            <div className="project-preview-image-wrapper">
              <img src="https://picsum.photos/seed/eco/800/600" alt="Subscription Tracker Backend" />
            </div>
            <h3 className="project-preview-title">BACKEND ARCHITECTURE</h3>
            <a 
              href="https://github.com/Sonderssss/subscription-tracker" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-preview-link"
            >
              View Source Code →
            </a>
          </div>

        </div>
      </div>
    </m.div>
  )
}

export default HomeView
