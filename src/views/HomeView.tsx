import React from 'react'
import { useNavigate } from 'react-router-dom'
import PortfolioImg from '../assets/images/Portfolio.png'
import './HomeView.css'

const HomeView: React.FC = () => {
  const navigate = useNavigate()

  const onContactClick = () => {
    navigate('/contact')
  }

  return (
    <div className="home-content">
      <h1>Welcome to <span className="my-portfolio">MY</span></h1>
      <div className="welcome-container">
        <span><img src={PortfolioImg} alt="Portfolio logo" /></span>
      </div>
      <div className="home-left">
        <div className="home-info">
          <p>Explore my projects, skills, and experiences.</p>
          <h3>Feel free to contact me for any inquiries.</h3>
          <button onClick={onContactClick} className="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default HomeView
