import React from 'react'
import { m } from 'motion/react'
import PortfolioImg from '../assets/images/Portfolio.png'
import './HomeView.css'

const onContactClick = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const HomeView: React.FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="home-content"
    >
      <m.div 
        className='home-watermark'
        initial={{ opacity: 0, x: "-50%", y: "50%" }}
        whileInView={{ opacity: 0.2, x: "-50%", y: "-50%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        WESLEY'S
      </m.div>
      
      <h1>Welcome to <span className="my-portfolio">MY</span></h1>
      <div className="welcome-container">
        <span><img src={PortfolioImg} alt="Portfolio logo" /></span>
      </div>
      <div className="home-left">
        <div className="home-info">
          <p>Explore my projects, skills, and experiences.</p>
          <h3>Feel free to contact me for any inquiries.</h3>
          <button type="button" onClick={onContactClick} className="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </m.div>
  )
}

export default HomeView
