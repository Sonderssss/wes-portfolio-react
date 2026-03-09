import React from 'react'
import { NavLink } from 'react-router-dom'
import AppRouter from './router'
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <nav>
        <div className="container">
          <NavLink to="/" className={({ isActive }) => isActive ? 'router-link-exact-active' : ''}>Home</NavLink>
          <span>WES</span>
          <div className="other-links">
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'router-link-exact-active' : ''}>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'router-link-exact-active' : ''}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'router-link-exact-active' : ''}>Contact</NavLink>
          </div>
        </div>
      </nav>
      <AppRouter />
    </>
  )
}

export default App
