import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'
import ProjectsView from '../views/ProjectsView'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/contact" element={<ContactView />} />
      <Route path="/projects" element={<ProjectsView />} />
    </Routes>
  )
}

export default AppRouter
